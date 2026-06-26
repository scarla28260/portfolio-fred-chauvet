import fs from 'fs';
const files = [
    'index.html', 'portfolio.html', 'cv.html', 'parcours.html',
    'technologies.html', 'contact.html', 'certifications.html',
    'analytics.html', 'security-dashboard.html', 'mentions-legales.html',
    'politique-confidentialite.html', 'gestion-cookies.html'
];
files.forEach(f => {
    if (fs.existsSync(f)) {
        let content = fs.readFileSync(f, 'utf8');

        // Remove the inline injectNav script blocks safely
        content = content.replace(/<script>[^<]*if\s*\(window\.injectNav\)[^<]*<\/script>/g, '');
        content = content.replace(/<script>\s*\/\/ Temporary initialization[^<]*if\s*\(window\.injectNav\)[^<]*<\/script>/g, '');
        content = content.replace(/<script type="module">[^<]*if\s*\(window\.injectNav\)[^<]*<\/script>/g, '');

        // Replace arbitrary animations with standard ones
        // We remove opacity-0 too and just add animate-fade-up
        content = content.replace(/animate-\[fade-up_[0-9.]+s_[a-z-]+_forwards\] opacity-0/g, 'animate-fade-up');
        content = content.replace(/animate-\[fade-up_[0-9.]+s_[a-z-]+_forwards\]/g, 'animate-fade-up');

        // Some lines might have trailing spaces/opacities.
        content = content.replace(/animate-fade-up opacity-0/g, 'animate-fade-up');

        fs.writeFileSync(f, content);
    }
});
console.log('Done HTML fixes');
