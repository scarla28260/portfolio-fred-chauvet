# CODEBASE.md — Fred Chauvet Portfolio

> Carte des dépendances entre fichiers. Mettre à jour avant toute modification structurelle.

---

## 📁 Hiérarchie des dépendances

```
layout.tsx
  └── Navigation.tsx           # Navbar active (dot + underline animés)
  └── template.tsx             # Transitions blur/y entre pages

HomeContent.tsx (page "/")
  ├── animations/TextReveal.tsx
  ├── animations/StaggerReveal.tsx
  ├── animations/Magnetic.tsx
  ├── animations/HudCorners.tsx
  ├── ExpertVault.tsx           # Démo de code interactif
  └── ui/background-boxes.tsx   # Grille interactive en fond

projets/page.tsx (page "/projets")
  └── sections/ProjectGrid.tsx  # 6 projets, filtres, stats

competences/page.tsx (page "/competences")
  └── sections/SystemsApproach.tsx # Approche systémique logistique vs data

parcours/page.tsx
  └── sections/ExperienceTimeline.tsx

contact/page.tsx
  └── sections/Contact.tsx

globals.css
  └── CONSOMMÉ PAR : tous les composants (tokens CSS, utilitaires)
```

---

## 🔗 Fichiers critiques et leurs dépendants

| Fichier modifié | Fichiers potentiellement impactés |
|---|---|
| `globals.css` | TOUS les composants |
| `layout.tsx` | TOUTES les pages (wrapper racine) |
| `Navigation.tsx` | `layout.tsx` (importé ici) |
| `template.tsx` | TOUTES les transitions de page |
| `HomeContent.tsx` | Page "/" uniquement |
| `ProjectGrid.tsx` | `projets/page.tsx` uniquement |
| `SystemsApproach.tsx` | `competences/page.tsx` uniquement |
| `ExpertVault.tsx` | `HomeContent.tsx` uniquement |
| `background-boxes.tsx` | `HomeContent.tsx` uniquement |

---

## 🎨 Variables CSS → Composants

| Variable | Définie dans | Utilisée par |
|---|---|---|
| `--background` | `globals.css` | `bg-background` sur TOUS les layouts |
| `--color-aura-gold` | `globals.css` | Navigation, HomeContent, ProjectGrid |
| `--color-video-navy` | `globals.css` | HUD vidéo, glows décoratifs |
| `.glass` | `globals.css` | Cards, navigation, panels |
| `.glass-gold` | `globals.css` | Navigation scrollée, CTA panel |
| `.hud-border` | `globals.css` | Cards expertise, panels projets |
| `.noise-panel` | `globals.css` | `<main>` de chaque page |
| `.video-glow` | `globals.css` | HUD circulaire vidéo |

---

## 📦 Imports Externes Clés

```tsx
// Animations
import { motion, AnimatePresence } from "framer-motion"

// Navigation
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"

// Images
import Image from "next/image"

// Icônes
import { Activity, Code2, Shield, Database, ArrowUpRight, ChevronRight } from "lucide-react"

// CSS utility
import { cn } from "@/lib/utils"  // clsx + tailwind-merge
```

---

## 🔐 Points d'attention

- **Ne pas supprimer** `shared/Navbar.tsx` — référencé dans des pages legacy
- **Ne pas changer** `--background` sans vérifier la cohérence avec `voila.mp4` (`#1b2d65`)
- **Ne pas ajouter** `font-inter` ou `font-roboto` — seuls Syne/Jost sont chargés
- **Les transitions de page** dépendent de `template.tsx` + `AnimatePresence` dans `layout.tsx`
- **Les données projets** sont hardcodées dans `ProjectGrid.tsx` (pas de fetch)
- **Les données skills** viennent de `data/skills.json` (chargé dans SkillsBridge)
