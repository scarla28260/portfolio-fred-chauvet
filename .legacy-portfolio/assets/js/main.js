/**
 * main.js — Luminous VFX Engine & Global Overdrive
 * NovaPhoenix — Radiant Steel Edition
 */
console.log('NovaPhoenix Portfolio Node #0452 Radiant_VFX Initialized.');

class VFXEngine {
    constructor() {
        this.canvas = document.getElementById('vfx-canvas');
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: 0, y: 0 };
        this.isTouch = window.matchMedia("(pointer: coarse)").matches;

        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());

        // Create Cursor Glow element
        this.cursorGlow = document.createElement('div');
        this.cursorGlow.id = 'cursor-vfx-glow';
        this.cursorGlow.classList.add('vfx-layer');
        this.cursorGlow.style.cssText = `
            position: fixed;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, var(--color-glow-gold) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 0;
            opacity: 0.3;
            filter: blur(100px);
            transform: translate(-50%, -50%);
            transition: opacity 0.5s ease;
        `;
        document.body.appendChild(this.cursorGlow);

        this.mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        this.glowPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

        // Only track mouse on desktop
        if (!this.isTouch) {
            window.addEventListener('mousemove', (e) => {
                this.mouse.x = e.clientX;
                this.mouse.y = e.clientY;
                this.mousePos.x = e.clientX;
                this.mousePos.y = e.clientY;
                this.updateGlassReflections(e);
            });
        }

        this.createParticles();
        this.animate();
        this.initMagneticButtons();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        const count = Math.floor((window.innerWidth * window.innerHeight) / 12000); // Increased density
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                size: Math.random() * 1.5 + 0.5
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Update Cursor Glow with inertia
        const dx_glow = this.mousePos.x - this.glowPos.x;
        const dy_glow = this.mousePos.y - this.glowPos.y;
        this.glowPos.x += dx_glow * 0.08;
        this.glowPos.y += dy_glow * 0.08;
        this.cursorGlow.style.left = `${this.glowPos.x}px`;
        this.cursorGlow.style.top = `${this.glowPos.y}px`;

        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim();

        this.ctx.fillStyle = primaryColor;
        this.ctx.strokeStyle = primaryColor;
        
        this.particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

            // Mouse interaction (Repulsion)
            const dx = p.x - this.mouse.x;
            const dy = p.y - this.mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
                const angle = Math.atan2(dy, dx);
                const force = (150 - dist) / 150;
                p.x += Math.cos(angle) * force * 2;
                p.y += Math.sin(angle) * force * 2;
            }

            this.ctx.globalAlpha = 0.3;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fill();

            // Inter-particle connections
            for (let j = i + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j];
                const dx_p = p.x - p2.x;
                const dy_p = p.y - p2.y;
                const dist_p = Math.sqrt(dx_p * dx_p + dy_p * dy_p);

                if (dist_p < 120) {
                    this.ctx.globalAlpha = (1 - dist_p / 120) * 0.1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                }
            }
        });

        requestAnimationFrame(() => this.animate());
    }

    initMagneticButtons() {
        if (this.isTouch) return;

        const magnetics = document.querySelectorAll('.cyber-button, .social-card, .nav-link, .project-card, .exp-card');
        magnetics.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                // Smoother pull with less intensity
                btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = `translate(0px, 0px)`;
            });
        });
    }

    updateGlassReflections(e) {
        const glasses = document.querySelectorAll('.glass, .exp-card, .project-card, .social-card, .terminal-card');
        glasses.forEach(glass => {
            const rect = glass.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Update CSS variables for .glass-radiance
            glass.style.setProperty('--mx', `${(x / rect.width) * 100}%`);
            glass.style.setProperty('--my', `${(y / rect.height) * 100}%`);

            const reflection = glass.querySelector('.glass-reflection');
            if (reflection) {
                reflection.style.transform = `translateX(${(x / rect.width - 0.5) * 30}px) translateY(${(y / rect.height - 0.5) * 30}px)`;
            }
        });
    }
}

// Initialize Intersection Observer for fade-up elements
const fadeObserver = new IntersectionObserver((entries) => {
    let delayCounter = 0;
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, delayCounter * 150);
            delayCounter++;
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Bootstrap
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fade-up, .animate-fade-up').forEach(el => fadeObserver.observe(el));
    new VFXEngine();
});
