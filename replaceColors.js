const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const replacements = [
  { regex: /text-slate-500/g, replacement: 'text-muted-foreground' },
  { regex: /text-slate-600/g, replacement: 'text-muted-foreground' },
  { regex: /text-slate-700/g, replacement: 'text-muted-foreground' },
  { regex: /text-slate-400/g, replacement: 'text-muted-foreground' },
  { regex: /text-slate-300/g, replacement: 'text-foreground/80' },
  { regex: /text-slate-200/g, replacement: 'text-foreground' },
  { regex: /bg-slate-800/g, replacement: 'bg-card' },
  { regex: /bg-slate-900/g, replacement: 'bg-muted' },
  { regex: /bg-slate-700/g, replacement: 'bg-muted/80' },
  { regex: /border-slate-800/g, replacement: 'border-border' },
  { regex: /border-slate-700/g, replacement: 'border-border/80' },
  { regex: /border-slate-600/g, replacement: 'border-border/60' },
  { regex: /border-slate-500/g, replacement: 'border-border/50' },
  { regex: /slate-400\/10/g, replacement: 'muted-foreground/10' },
  { regex: /slate-500\/10/g, replacement: 'muted-foreground/10' },
  { regex: /slate-300\/30/g, replacement: 'foreground/30' },
  { regex: /slate-300\/40/g, replacement: 'foreground/40' },
  { regex: /slate-300\/50/g, replacement: 'foreground/50' },
  { regex: /slate-200\/50/g, replacement: 'foreground/50' },
  { regex: /white\/10/g, replacement: 'white/10' }, // leaving white opacities for now unless explicitly requested, as they are often meant for overlays.
  { regex: /#111827/g, replacement: 'hsl(var(--muted))' },
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let original = content;
      
      for (const { regex, replacement } of replacements) {
        content = content.replace(regex, replacement);
      }
      
      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory(directoryPath);
