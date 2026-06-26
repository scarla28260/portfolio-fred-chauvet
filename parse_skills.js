const fs = require('fs');
const path = require('path');

const inputFilePath = path.join(__dirname, 'skills.md');
const outputDir = path.join(__dirname, 'src', 'infrastructure', 'data');
const outputFilePath = path.join(outputDir, 'skills.json');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function getCategory(name, description, source) {
  const text = `${name} ${description} ${source}`.toLowerCase();
  
  if (
    text.includes('security') || 
    text.includes('audit') || 
    text.includes('exploit') || 
    text.includes('detecting') || 
    text.includes('auth') || 
    text.includes('penetration') || 
    text.includes('incident') || 
    text.includes('threat') ||
    text.includes('cve') ||
    text.includes('vulnerability')
  ) {
    return 'Security';
  }
  
  if (
    text.includes('ai') || 
    text.includes('llm') || 
    text.includes('agent') || 
    text.includes('prompt') || 
    text.includes('openai') || 
    text.includes('gemini') || 
    text.includes('claude') || 
    text.includes('rag') ||
    text.includes('neural')
  ) {
    return 'AI/LLM';
  }
  
  if (
    text.includes('aws') || 
    text.includes('azure') || 
    text.includes('gcp') || 
    text.includes('cloudflare') || 
    text.includes('netlify') || 
    text.includes('render') || 
    text.includes('vercel') || 
    text.includes('kubernetes') || 
    text.includes('k8s') || 
    text.includes('docker') || 
    text.includes('terraform') || 
    text.includes('devops') ||
    text.includes('ci/cd') ||
    text.includes('deploy')
  ) {
    return 'Cloud/DevOps';
  }

  if (
    text.includes('database') || 
    text.includes('postgres') || 
    text.includes('mysql') || 
    text.includes('clickhouse') || 
    text.includes('sqlite') || 
    text.includes('db') || 
    text.includes('prisma') || 
    text.includes('supabase') || 
    text.includes('etl')
  ) {
    return 'Database';
  }
  
  if (
    text.includes('automation') || 
    text.includes('workflow') || 
    text.includes('script') || 
    text.includes('cron') || 
    text.includes('cli') || 
    text.includes('slack') || 
    text.includes('discord') || 
    text.includes('telegram') || 
    text.includes('obsidian') ||
    text.includes('pptx') ||
    text.includes('docx') ||
    text.includes('xlsx') ||
    text.includes('pdf')
  ) {
    return 'Automation/Workflow';
  }
  
  if (
    text.includes('react') || 
    text.includes('typescript') || 
    text.includes('angular') || 
    text.includes('vue') || 
    text.includes('frontend') || 
    text.includes('backend') || 
    text.includes('code') || 
    text.includes('django') || 
    text.includes('laravel') || 
    text.includes('git') || 
    text.includes('test') || 
    text.includes('tdd') || 
    text.includes('compiler') ||
    text.includes('javascript') ||
    text.includes('golang') ||
    text.includes('python') ||
    text.includes('java') ||
    text.includes('rust')
  ) {
    return 'Development';
  }
  
  return 'General';
}

function parseSkills() {
  if (!fs.existsSync(inputFilePath)) {
    console.error(`Error: File not found at ${inputFilePath}`);
    process.exit(1);
  }

  const content = fs.readFileSync(inputFilePath, 'utf-8');
  
  // Split by skill sections (starting with ### followed by skill name)
  const sections = content.split(/\r?\n###\s+/);
  
  const skills = [];
  
  // Skip the first section as it contains the main markdown header
  for (let i = 1; i < sections.length; i++) {
    const section = sections[i];
    const lines = section.split(/\r?\n/);
    
    if (lines.length === 0) continue;
    
    const name = lines[0].trim();
    let source = '';
    let description = '';
    
    // Parse lines within the skill section
    for (let j = 1; j < lines.length; j++) {
      const line = lines[j].trim();
      
      if (line.startsWith('- **Source**:')) {
        source = line.replace('- **Source**:', '').trim().replace(/`/g, '');
      } else if (line.startsWith('- **Description**:')) {
        description = line.replace('- **Description**:', '').trim();
      } else if (line.startsWith('-') && description) {
        // If we hit another bullet that is not Source or Description, we stop appending to description
        break;
      } else if (line && !line.startsWith('#') && description) {
        // Append multi-line descriptions if they wrap
        description += ' ' + line;
      }
    }
    
    // If name is present and valid
    if (name) {
      const category = getCategory(name, description, source);
      skills.push({
        id: name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
        name: name,
        source: source,
        description: description || 'No description provided.',
        category: category
      });
    }
  }

  fs.writeFileSync(outputFilePath, JSON.stringify(skills, null, 2), 'utf-8');
  console.log(`Successfully parsed ${skills.length} skills into ${outputFilePath}`);
}

parseSkills();
