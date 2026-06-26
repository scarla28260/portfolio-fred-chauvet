tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#00D4FF',
                secondary: '#7B61FF',
                tertiary: '#FF2E63',
                quaternary: '#00FF88',
                quintenary: '#FFAA00',
                dark: '#0A0E17',
                'dark-card': '#111827',
                'cyber-blue': '#00F3FF',
                'neon-purple': '#BC13FE',
                'matrix-green': '#00FF41',
                'hologram-blue': 'rgba(0, 212, 255, 0.1)',
                'react-blue': '#61DAFB',
                'vite-purple': '#646CFF',
                'daisy-pink': '#FF7BAC',
                'css-blue': '#2965F1',
                'pygame-green': '#2ECC71',
                'gdpr-blue': '#4A90E2',
                'security-green': '#27AE60',
                'python-blue': '#3776AB',
                'python-yellow': '#FFD43B',
                'django-green': '#092E20',
                'javascript-yellow': '#F7DF1E',
                'numpy-blue': '#4DABCF',
                'mysql-blue': '#4479A1',
                'powerbi-yellow': '#F2C811',
                'tailwind-cyan': '#06B6D4',
            },
            fontFamily: {
                'orbitron': ['Orbitron', 'sans-serif'],
                'exo': ['Exo 2', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'neon-flicker': 'neon-flicker 1.5s ease-in-out infinite',
                'hologram': 'hologram 3s ease-in-out infinite',
                'matrix-rain': 'matrix-rain 20s linear infinite',
                'cyber-spin': 'cyber-spin 8s linear infinite',
                'glitch': 'glitch 0.3s ease-in-out',
                'orbit': 'orbit 10s linear infinite',
                'particle-float': 'particle-float 15s linear infinite',
                'scan-line': 'scan-line 2s linear infinite',
                'tech-orbit': 'tech-orbit 15s linear infinite',
                'gradient-shift': 'gradient-shift 3s ease infinite',
                'shield-pulse': 'shield-pulse 2s ease-in-out infinite',
                'logo-spin': 'logo-spin 20s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-glow': {
                    '0%, 100%': {
                        opacity: 0.8,
                        boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)'
                    },
                    '50%': {
                        opacity: 1,
                        boxShadow: '0 0 40px rgba(0, 212, 255, 0.8)'
                    },
                },
                'neon-flicker': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.7 },
                },
                hologram: {
                    '0%, 100%': {
                        opacity: 0.3,
                        transform: 'translateY(0) scale(1)'
                    },
                    '50%': {
                        opacity: 0.7,
                        transform: 'translateY(-10px) scale(1.02)'
                    },
                },
                'matrix-rain': {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100vh)' },
                },
                'cyber-spin': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                glitch: {
                    '0%, 100%': { transform: 'translate(0)' },
                    '10%': { transform: 'translate(-2px, 2px)' },
                    '20%': { transform: 'translate(-2px, -2px)' },
                    '30%': { transform: 'translate(2px, 2px)' },
                    '40%': { transform: 'translate(2px, -2px)' },
                    '50%': { transform: 'translate(-2px, 2px)' },
                    '60%': { transform: 'translate(-2px, -2px)' },
                    '70%': { transform: 'translate(2px, 2px)' },
                    '80%': { transform: 'translate(2px, -2px)' },
                    '90%': { transform: 'translate(-2px, 2px)' },
                },
                orbit: {
                    '0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)' },
                },
                'tech-orbit': {
                    '0%': { transform: 'rotate(0deg) translateX(200px) rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg) translateX(200px) rotate(-360deg)' },
                },
                'particle-float': {
                    '0%': { transform: 'translateY(100vh) translateX(0)' },
                    '100%': { transform: 'translateY(-100px) translateX(20px)' },
                },
                'scan-line': {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100vh)' },
                },
                'gradient-shift': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                'shield-pulse': {
                    '0%, 100%': {
                        opacity: 0.8,
                        transform: 'scale(1)'
                    },
                    '50%': {
                        opacity: 1,
                        transform: 'scale(1.05)'
                    },
                },
                'logo-spin': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                }
            },
            backgroundImage: {
                'cyber-grid': 'linear-gradient(to right, rgba(0, 212, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 212, 255, 0.1) 1px, transparent 1px)',
                'radial-gradient': 'radial-gradient(circle at 50% 0%, rgba(0, 212, 255, 0.15) 0%, transparent 50%)',
                'tech-gradient': 'linear-gradient(90deg, #00D4FF, #7B61FF, #FF2E63, #00FF88, #FFAA00, #61DAFB, #646CFF)',
                'gdpr-gradient': 'linear-gradient(90deg, #4A90E2, #27AE60, #2ECC71, #61DAFB)',
            }
        }
    }
}
