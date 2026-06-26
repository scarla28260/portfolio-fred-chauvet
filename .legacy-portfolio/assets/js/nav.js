/**
 * nav.js — Space-Cyberpunk HUD Navigation
 * Sidebar verticale HUD (desktop) + Drawer mobile
 */

const LINKS = [
  { slug: '01', label: 'SYSTÈME', href: './index.html', tip: 'Home' },
  { slug: '02', label: 'PROFIL', href: './about.html', tip: 'À propos' },
  { slug: '03', label: 'ARSENAL', href: './expertise.html', tip: 'Expertise' },
  { slug: '04', label: 'MISSIONS', href: './projets.html', tip: 'Projets' },
  { slug: '05', label: 'CONTACT', href: './contact.html', tip: 'Contact' },
];

const SOCIAL = [
  { icon: 'fa-linkedin-in', href: '#', aria: 'LinkedIn' },
  { icon: 'fa-github', href: '#', aria: 'GitHub' },
];

const currentPath = window.location.pathname;

function isActive(href) {
  const h = href.replace(/^\.\//, '').replace(/\.html$/, '');
  const p = currentPath.split('/').pop().replace(/\.html$/, '') || 'index';
  const hNorm = h === '.' || h === '' ? 'index' : h;
  return hNorm === p;
}

function getSlug(href) {
  const h = href.replace(/^\.\//, '').replace(/\.html$/, '');
  const hNorm = h === '.' || h === '' ? 'index' : h;
  const m = LINKS.find(l => {
    const lh = l.href.replace(/^\.\//, '').replace(/\.html$/, '');
    const lhNorm = lh === '.' || lh === '' ? 'index' : lh;
    return lhNorm === hNorm;
  });
  return m ? m.slug : '00';
}

// ── Inject CSS ────────────────────────────────────────────────────
const style = document.createElement('style');
style.textContent = `
  /* ── Topbar (mobile) */
  #fc-topbar {
    position: fixed; top: 0; left: 0; right: 0; height: 52px; z-index: 1000;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 1.25rem;
    background: rgba(2, 5, 16, 0.9);
    border-bottom: 1px solid rgba(0,255,136,0.07);
    backdrop-filter: blur(20px);
  }
  .fc-logo-link {
    display: flex; align-items: center; gap: 10px;
    text-decoration: none;
    font-family: 'Syne', sans-serif; font-weight: 900;
    letter-spacing: -0.04em; font-size: 1rem;
  }
  .fc-logo-badge {
    width: 28px; height: 28px;
    background: var(--color-primary);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Space Mono', monospace;
    font-size: 11px; font-weight: 700; color: #020510;
    clip-path: polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px));
  }
  .fc-logo-name { color: #fff; }
  .fc-logo-dot  { color: var(--color-primary); }

  /* ── Desktop sidebar */
  #fc-sidebar {
    display: none;
    position: fixed; left: 0; top: 0; bottom: 0; width: 72px;
    z-index: 1000; flex-direction: column; align-items: center;
    justify-content: space-between; padding: 1.5rem 0;
    background: rgba(2, 5, 16, 0.85);
    border-right: 1px solid rgba(0,255,136,0.05);
    backdrop-filter: blur(24px);
  }
  @media (min-width: 1024px) {
    #fc-sidebar { display: flex; }
    #fc-topbar .fc-hamburger { display: none; }
  }

  .fc-sidebar-logo {
    width: 36px; height: 36px;
    background: var(--color-primary);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Space Mono', monospace;
    font-family: 'Syne', sans-serif;
    font-size: 13px; font-weight: 900; color: #020510;
    clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px));
    cursor: pointer; text-decoration: none;
    transition: all 0.3s;
  }
  .fc-sidebar-logo:hover { transform: scale(1.1); }

  .fc-nav-links { display: flex; flex-direction: column; align-items: center; gap: 32px; }

  .fc-nav-link {
    position: relative;
    display: flex; flex-direction: column; align-items: center;
    text-decoration: none; cursor: pointer;
    transition: all 0.3s;
    group: true;
  }
  .fc-nav-link .fc-link-num {
    font-family: 'Space Mono', monospace;
    font-size: 9px; font-weight: 400;
    color: rgba(100,116,139,0.5);
    transition: color 0.3s;
    letter-spacing: 0.05em;
  }
  .fc-nav-link .fc-link-dot {
    width: 4px; height: 4px; border-radius: 50%;
    background: rgba(100,116,139,0.25);
    margin-top: 6px;
    transition: all 0.3s;
  }
  .fc-nav-link:hover .fc-link-num,
  .fc-nav-link.active .fc-link-num {
    color: var(--color-primary);
  }
  .fc-nav-link:hover .fc-link-dot,
  .fc-nav-link.active .fc-link-dot {
    background: var(--color-primary);
    box-shadow: 0 0 8px rgba(0,255,136,0.5);
  }
  .fc-nav-link.active .fc-link-num {
    color: var(--color-primary);
  }
  /* Tooltip */
  .fc-nav-link::after {
    content: attr(data-tip);
    position: absolute; left: calc(100% + 14px);
    top: 50%; transform: translateY(-50%);
    background: #060B1A;
    border: 1px solid rgba(0,255,136,0.15);
    padding: 4px 10px;
    font-family: 'Space Mono', monospace; font-size: 9px;
    letter-spacing: 0.12em; text-transform: uppercase;
    color: var(--color-primary);
    white-space: nowrap;
    clip-path: polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px));
    opacity: 0; pointer-events: none;
    transition: opacity 0.2s ease;
  }
  .fc-nav-link:hover::after { opacity: 1; }

  /* Social icons sidebar */
  .fc-social-link {
    display: flex; flex-direction: column; align-items: center;
    color: rgba(100,116,139,0.4);
    text-decoration: none; font-size: 14px;
    transition: color 0.3s, transform 0.3s;
  }
  .fc-social-link:hover {
    color: var(--color-primary);
    transform: scale(1.15);
  }

  /* ── Hamburger */
  .fc-hamburger {
    background: none; border: none; cursor: pointer;
    display: flex; flex-direction: column; gap: 5px; padding: 4px;
  }
  .fc-ham-line {
    display: block; width: 22px; height: 1.5px;
    background: var(--color-primary);
    transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
  }
  .fc-hamburger.open .fc-ham-line:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
  .fc-hamburger.open .fc-ham-line:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .fc-hamburger.open .fc-ham-line:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

  /* ── Mobile drawer */
  #fc-drawer {
    position: fixed; inset: 0; z-index: 999;
    visibility: hidden; opacity: 0;
    transition: visibility 0.3s, opacity 0.3s;
  }
  #fc-drawer.open { visibility: visible; opacity: 1; }
  #fc-drawer-overlay {
    position: absolute; inset: 0;
    background: rgba(2,5,16,0.85);
    backdrop-filter: blur(8px);
  }
  #fc-drawer-panel {
    position: absolute; top: 0; right: 0; bottom: 0;
    width: 280px;
    background: #060B1A;
    border-left: 1px solid rgba(0,255,136,0.08);
    padding: 5rem 2rem 2rem;
    transform: translateX(100%);
    transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
    display: flex; flex-direction: column;
    /* HUD corners */
    position: absolute;
  }
  #fc-drawer-panel::before {
    content:''; position:absolute; top:0; left:0;
    width:18px; height:18px;
    border-top:1px solid var(--color-primary);
    border-left:1px solid var(--color-primary);
  }
  #fc-drawer-panel::after {
    content:''; position:absolute; bottom:0; right:0;
    width:18px; height:18px;
    border-bottom:1px solid var(--color-secondary);
    border-right:1px solid var(--color-secondary);
  }
  #fc-drawer.open #fc-drawer-panel { transform: translateX(0); }

  .fc-drawer-link {
    display: flex; align-items: center; gap: 14px;
    text-decoration: none; padding: 14px 0;
    border-bottom: 1px solid rgba(0,255,136,0.04);
    transition: all 0.25s;
  }
  .fc-drawer-link:hover { padding-left: 6px; }
  .fc-drawer-link:hover .fc-dl-num  { color: var(--color-primary); }
  .fc-drawer-link:hover .fc-dl-label{ color: #fff; }
  .fc-drawer-link.active .fc-dl-num  { color: var(--color-primary); }
  .fc-drawer-link.active .fc-dl-label{ color: var(--color-primary); }
  .fc-dl-num {
    font-family: 'Space Mono', monospace; font-size: 10px;
    color: rgba(100,116,139,0.4); letter-spacing: 0.1em;
    transition: color 0.25s; min-width: 24px;
  }
  .fc-dl-label {
    font-family: 'Syne', sans-serif; font-size: 1rem;
    font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;
    color: #64748B; transition: color 0.25s;
  }

  /* ── Footer */
  #fc-footer {
    text-align: center; padding: 2rem;
    border-top: 1px solid rgba(0,255,136,0.04);
    font-family: 'Space Mono', monospace; font-size: 9px;
    letter-spacing: 0.15em; color: rgba(100,116,139,0.3);
  }
`;
document.head.appendChild(style);

// ── Inject topbar ─────────────────────────────────────────────────
const topbar = document.createElement('div');
topbar.id = 'fc-topbar';
topbar.innerHTML = `
  <a href="./index.html" class="fc-logo-link" aria-label="NovaPhoenix Accueil">
    <div class="fc-logo-badge" style="background:transparent;border:1px solid #D4AF37;clip-path:none;border-radius:50%;overflow:hidden;"><img src="./assets/img/novaphoenix_logo.png" style="width:100%;height:100%;object-fit:cover;"></div>
    <span class="fc-logo-name">NOVA<span style="color:#D4AF37;">PHOENIX</span></span>
  </a>
  <button class="fc-hamburger" id="fc-ham" aria-label="Menu" aria-expanded="false">
    <span class="fc-ham-line"></span>
    <span class="fc-ham-line"></span>
    <span class="fc-ham-line"></span>
  </button>
`;
document.body.prepend(topbar);

// ── Inject sidebar ────────────────────────────────────────────────
const sidebar = document.createElement('nav');
sidebar.id = 'fc-sidebar';
sidebar.setAttribute('aria-label', 'Navigation principale');

const linksHtml = LINKS.map(l => `
  <a href="${l.href}" class="fc-nav-link${isActive(l.href) ? ' active' : ''}" data-tip="${l.tip}" aria-label="${l.tip}">
    <span class="fc-link-num">${l.slug}</span>
    <span class="fc-link-dot"></span>
  </a>
`).join('');

const socialHtml = SOCIAL.map(s => `
  <a href="${s.href}" class="fc-social-link" aria-label="${s.aria}" target="_blank" rel="noopener">
    <i class="fab ${s.icon}" aria-hidden="true"></i>
  </a>
`).join('');

sidebar.innerHTML = `
  <a href="./index.html" class="fc-sidebar-logo" aria-label="NovaPhoenix Accueil" style="background:transparent;border:1px solid #D4AF37;clip-path:none;border-radius:50%;overflow:hidden;padding:0;">
    <img src="./assets/img/novaphoenix_logo.png" style="width:100%;height:100%;object-fit:cover;">
  </a>
  <div class="fc-nav-links" role="list">${linksHtml}</div>
  <div style="display:flex;flex-direction:column;align-items:center;gap:20px;">${socialHtml}</div>
`;
document.body.prepend(sidebar);

// ── Inject footer ─────────────────────────────────────────────────
const footer = document.createElement('footer');
footer.id = 'fc-footer';
footer.innerHTML = `© ${new Date().getFullYear()} NovaPhoenix · ARTISANAT_PREMIUM_GARANTI · ${getSlug(window.location.pathname)}_NODE`;
document.body.appendChild(footer);

// ── Inject mobile drawer ──────────────────────────────────────────
const mobileLinks = LINKS.map(l => `
  <a href="${l.href}" class="fc-drawer-link${isActive(l.href) ? ' active' : ''}">
    <span class="fc-dl-num">${l.slug}</span>
    <span class="fc-dl-label">${l.tip}</span>
  </a>
`).join('');

const drawer = document.createElement('div');
drawer.id = 'fc-drawer';
drawer.setAttribute('role', 'dialog');
drawer.setAttribute('aria-modal', 'true');
drawer.setAttribute('aria-label', 'Menu mobile');
drawer.innerHTML = `
  <div id="fc-drawer-overlay"></div>
  <div id="fc-drawer-panel">
    <nav>${mobileLinks}</nav>
    <div style="margin-top:auto;padding-top:2rem;display:flex;gap:20px;">
      ${SOCIAL.map(s => `<a href="${s.href}" class="fc-social-link" aria-label="${s.aria}" target="_blank" rel="noopener" style="color:#CBD5E1;font-size:20px;transition:all 0.3s;"><i class="fab ${s.icon}"></i></a>`).join('')}
    </div>
  </div>
`;
document.body.appendChild(drawer);

// ── Hamburger behavior ────────────────────────────────────────────
const ham = document.getElementById('fc-ham');
const dr = document.getElementById('fc-drawer');
const ov = document.getElementById('fc-drawer-overlay');

function openDrawer() { ham.classList.add('open'); dr.classList.add('open'); ham.setAttribute('aria-expanded', 'true'); document.body.style.overflow = 'hidden'; }
function closeDrawer() { ham.classList.remove('open'); dr.classList.remove('open'); ham.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; }

ham.addEventListener('click', () => dr.classList.contains('open') ? closeDrawer() : openDrawer());
ov.addEventListener('click', closeDrawer);
document.addEventListener('keydown', e => e.key === 'Escape' && closeDrawer());

// ── Custom cursor ─────────────────────────────────────────────────
if (window.matchMedia('(hover:hover)').matches) {
  const dot = document.createElement('div'); dot.id = 'cursor-dot';
  const aura = document.createElement('div'); aura.id = 'cursor-aura';
  document.body.appendChild(dot);
  document.body.appendChild(aura);

  let mx = -100, my = -100, ax = -100, ay = -100;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  function animateCursor() {
    ax += (mx - ax) * 0.12;
    ay += (my - ay) * 0.12;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
    aura.style.transform = `translate(${ax}px, ${ay}px) translate(-50%,-50%)`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.querySelectorAll('a, button, [role="button"]').forEach(el => {
    el.addEventListener('mouseenter', () => { dot.classList.add('hovering'); aura.classList.add('hovering'); });
    el.addEventListener('mouseleave', () => { dot.classList.remove('hovering'); aura.classList.remove('hovering'); });
  });
  document.addEventListener('mousedown', () => aura.classList.add('clicking'));
  document.addEventListener('mouseup', () => aura.classList.remove('clicking'));
}
