/**
 * three-scene.js — Grandiose Data Vortex & Neural Core
 * Un effet "Sub-Light Warp" avec une sphère centrale liquide "Cyber Core"
 */
import * as THREE from 'three';

// ── Canvas setup ──────────────────────────────────────────────────
const canvas = document.createElement('canvas');
Object.assign(canvas.style, {
    position: 'fixed',
    inset: '0',
    zIndex: '1',
    pointerEvents: 'none',
    opacity: '0',
    transition: 'opacity 1.5s ease',
});
document.body.prepend(canvas);

// ── Scene ─────────────────────────────────────────────────────────
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x000000, 0);

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x020510, 0.0015);

// Camera
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 250;

// ── Colors ────────────────────────────────────────────────────────
const C_PRIMARY = new THREE.Color(0x00FF88); // ElectroMint
const C_SECONDARY = new THREE.Color(0x7B61FF); // QuantumViolet

// ── 1. The Morphing Cyber Core ────────────────────────────────────
// A central sphere with custom vertex displacement
const coreGeo = new THREE.IcosahedronGeometry(45, 64);
const coreMat = new THREE.ShaderMaterial({
    uniforms: {
        uTime: { value: 0 },
        uColor1: { value: C_PRIMARY },
        uColor2: { value: C_SECONDARY }
    },
    vertexShader: `
        uniform float uTime;
        varying vec3 vNormal;
        varying vec3 vPosition;
        vPosition = position;
        vNormal = normal;

        // Simple pseudo-noise based on sine waves
        float noise = sin(position.x * 0.05 + uTime * 2.0) * 
                      sin(position.y * 0.05 + uTime * 1.5) * 
                      sin(position.z * 0.05 + uTime * 1.8);
        
        // Displace vertex along its normal
        vec3 newPos = position + normal * (noise * 8.0);
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
    `,
    fragmentShader: `
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
            // Fresnel rim light effect
            vec3 viewDir = normalize(cameraPosition - vPosition);
            float rim = 1.0 - max(dot(viewDir, vNormal), 0.0);
            rim = smoothstep(0.4, 1.0, rim);
            
            // Mix colors based on position
            float mixVal = (vPosition.y + 45.0) / 90.0;
            vec3 baseColor = mix(uColor2, uColor1, mixVal);
            
            // Add extreme glowing rim
            vec3 finalColor = baseColor + vec3(rim) * uColor1 * 1.5;
            
            gl_FragColor = vec4(finalColor, 0.85); // slight transparency
        }
    `,
    wireframe: true, // Wireframe makes it look incredibly cyberpunk
    transparent: true,
    blending: THREE.AdditiveBlending
});

const cyberCore = new THREE.Mesh(coreGeo, coreMat);
scene.add(cyberCore);

// ── 2. The Data Vortex Tunnel ─────────────────────────────────────
const STAR_COUNT = 3000;
const starsGeo = new THREE.BufferGeometry();
const starsPos = new Float32Array(STAR_COUNT * 3);
const starsVel = new Float32Array(STAR_COUNT);
const starsCol = new Float32Array(STAR_COUNT * 3);

for (let i = 0; i < STAR_COUNT; i++) {
    // Cylinder distribution
    const angle = Math.random() * Math.PI * 2;
    // Radius from 80 to 400
    const radius = 80 + Math.random() * 320;

    starsPos[i * 3] = Math.cos(angle) * radius;
    starsPos[i * 3 + 1] = Math.sin(angle) * radius;
    starsPos[i * 3 + 2] = (Math.random() - 0.5) * 800; // Deep Z spread

    starsVel[i] = 1.5 + Math.random() * 3.0; // Warp speed toward camera

    // 70% primary, 30% secondary
    const col = Math.random() > 0.3 ? C_PRIMARY : C_SECONDARY;
    starsCol[i * 3] = col.r * 0.5;
    starsCol[i * 3 + 1] = col.g * 0.5;
    starsCol[i * 3 + 2] = col.b * 0.5;
}

starsGeo.setAttribute('position', new THREE.BufferAttribute(starsPos, 3));
starsGeo.setAttribute('color', new THREE.BufferAttribute(starsCol, 3));

const starsMat = new THREE.PointsMaterial({
    size: 1.5,
    vertexColors: true,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
});

const dataVortex = new THREE.Points(starsGeo, starsMat);
scene.add(dataVortex);


// ── 3. Interaction & Parallax ────────────────────────────────────
let mouseX = 0, mouseY = 0;
let targetX = 0, targetY = 0;
document.addEventListener('mousemove', e => {
    // Normalize to -1 to +1
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
});

// ── Clock & Resize ────────────────────────────────────────────────
const clock = new THREE.Clock();

function resize() {
    const w = window.innerWidth, h = window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);
resize();


// ── Animate Loop ──────────────────────────────────────────────────
function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    // 1. Core Morphing & Rotation
    coreMat.uniforms.uTime.value = t;
    cyberCore.rotation.y = t * 0.2;
    cyberCore.rotation.x = t * 0.1;
    cyberCore.scale.setScalar(1.0 + Math.sin(t * 3.0) * 0.05); // Pulsing heartbeat

    // 2. Data Vortex flying toward camera
    const positions = starsGeo.attributes.position.array;
    for (let i = 0; i < STAR_COUNT; i++) {
        // Z movement
        positions[i * 3 + 2] += starsVel[i];

        // Loop back if passed camera
        if (positions[i * 3 + 2] > 300) {
            positions[i * 3 + 2] = -500;
        }
    }
    starsGeo.attributes.position.needsUpdate = true;

    // Slow rotation of the whole vortex
    dataVortex.rotation.z = t * -0.05;

    // 3. Smooth Camera Parallax (Bending the tunnel)
    targetX += (mouseX * 150 - targetX) * 0.05;
    targetY += (mouseY * 100 - targetY) * 0.05;

    camera.position.x = targetX;
    camera.position.y = -targetY;

    // Camera always looks at center but tilts slightly
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
}

animate();

// Fade in cleanly
setTimeout(() => { canvas.style.opacity = '0.9'; }, 300);
