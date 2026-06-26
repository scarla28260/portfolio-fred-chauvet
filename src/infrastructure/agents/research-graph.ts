import { StateGraph, Annotation, END, START } from "@langchain/langgraph";
import { ChatOpenAI } from "@langchain/openai";

// 1. Define the Graph State
const ResearchState = Annotation.Root({
  query: Annotation<string>(),
  results: Annotation<any[]>({
    reducer: (x, y) => x.concat(y),
    default: () => [],
  }),
  summary: Annotation<string>(),
  iteration: Annotation<number>({
    reducer: (x, y) => y,
    default: () => 0,
  }),
  status: Annotation<string>(),
});

// 2. Define the Nodes
const researcherNode = async (state: typeof ResearchState.State) => {
  console.log("--- RESEARCHER NODE ---");
  const query = state.query;
  
  try {
    const response = await fetch('https://api.tavily.com/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: process.env.TAVILY_API_KEY,
        query: query,
        search_depth: "advanced",
        max_results: 5,
      }),
    });

    const data = await response.json();
    return { 
      results: data.results || [],
      status: "RESEARCH_COMPLETED",
      iteration: state.iteration + 1
    };
  } catch (error) {
    console.error("Researcher Error:", error);
    return { status: "RESEARCH_FAILED" };
  }
};

const synthesizerNode = async (state: typeof ResearchState.State) => {
  console.log("--- SYNTHESIZER NODE ---");
  const model = new ChatOpenAI({ 
    modelName: "gpt-4o",
    apiKey: process.env.OPENAI_API_KEY,
    temperature: 0.2 
  });

  const context = state.results.map(r => `Title: ${r.title}\nContent: ${r.content}`).join("\n\n");
  const prompt = `You are an expert AI research assistant. Synthesize the following information into a structured, cinematic, and professional brief about: ${state.query}. 
  
  Context:
  ${context}
  
  Format instructions: Use concise, impactful sentences for a high-fidelity portfolio. Use technical and visionary language suited for 2026.`;

  const response = await model.invoke(prompt);
  
  return { 
    summary: response.content.toString(),
    status: "SYNTHESIS_COMPLETE"
  };
};

// 3. Build the Graph
const workflow = new StateGraph(ResearchState)
  .addNode("researcher", researcherNode)
  .addNode("synthesizer", synthesizerNode)
  .addEdge(START, "researcher")
  .addEdge("researcher", "synthesizer")
  .addEdge("synthesizer", END);

export const researchGraph = workflow.compile();
export type ResearchGraphState = typeof ResearchState.State;
