import fs from 'fs';
import path from 'path';

// Chemins absolus
const SOURCE_DIR = 'c:\\CodeIA\\projects\\legendary\\docs';
const OUT_DIR = path.join(process.cwd(), 'public', 'data');
const OUT_FILE = path.join(OUT_DIR, 'osint.json');

function parseMarkdown(content, filename) {
  const lines = content.split('\n');
  
  const categoryId = path.parse(filename).name;
  let categoryTitle = categoryId; // fallback
  const sections = [];
  let currentSection = null;

  const titleRegex = /^##\s+(.*)$/;
  const sectionRegex = /^###\s+(.*)$/;
  const resourceRegex = /^-\s+\[([^\]]+)\]\(([^)]+)\)\s*(?:—|-|–)\s*(.*)$/;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Title
    const titleMatch = trimmed.match(titleRegex);
    if (titleMatch) {
      // Remove emojis or keep them, but let's just keep the whole match
      categoryTitle = titleMatch[1].trim();
      continue;
    }

    // Section
    const sectionMatch = trimmed.match(sectionRegex);
    if (sectionMatch) {
      currentSection = {
        title: sectionMatch[1].trim(),
        resources: []
      };
      sections.push(currentSection);
      continue;
    }

    // Resource
    const resourceMatch = trimmed.match(resourceRegex);
    if (resourceMatch && currentSection) {
      currentSection.resources.push({
        name: resourceMatch[1].trim(),
        url: resourceMatch[2].trim(),
        description: resourceMatch[3].trim()
      });
    }
  }

  return {
    id: categoryId,
    title: categoryTitle,
    sections: sections.filter(s => s.resources.length > 0) // only keep non-empty sections
  };
}

async function main() {
  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`Erreur: Le répertoire source ${SOURCE_DIR} n'existe pas.`);
    process.exit(1);
  }

  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const files = fs.readdirSync(SOURCE_DIR).filter(f => f.endsWith('.md'));
  const categories = [];

  for (const file of files) {
    const filePath = path.join(SOURCE_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const parsed = parseMarkdown(content, file);
    if (parsed.sections.length > 0) {
      categories.push(parsed);
    }
  }

  fs.writeFileSync(OUT_FILE, JSON.stringify(categories, null, 2));
  console.log(`✅ Génération réussie ! ${categories.length} catégories OSINT sauvegardées dans ${OUT_FILE}`);
}

main().catch(console.error);
