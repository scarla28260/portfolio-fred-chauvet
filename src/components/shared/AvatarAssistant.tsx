"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useAnimationFrame } from "framer-motion"
import Image from "next/image"

const messages: Record<string, string> = {
  hero: "Salut ! C'est moi, Fred. Scrollez pour découvrir mon parcours.",
  about: "De Chef Gérant à Développeur Data, mon parcours est atypique et guidé par la passion.",
  experience: "L'optimisation des flux, c'est mon domaine. Qu'ils soient physiques ou digitaux !",
  contact: "Un projet en tête ? Cliquez pour me faire sauter de joie, ou contactez-moi !"
}

export function AvatarAssistant() {
  const [activeSection, setActiveSection] = useState<string>("")
  const [isVisible, setIsVisible] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  // Physique state
  const x = useMotionValue(100)
  const y = useMotionValue(0)
  const rotate = useMotionValue(0)
  const scaleX = useMotionValue(1)
  const scaleY = useMotionValue(1)
  
  const physics = useRef({
    vx: 0,
    vy: 0,
    targetX: 100,
    isGrounded: true,
    hopTimer: 0
  })

  // Gestion du défilement pour faire apparaître l'avatar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.6) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setShowMessage(false)
      }
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Observation des sections pour le dialogue
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
            setShowMessage(true)
          }
        })
      },
      { threshold: 0.6 }
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  // Disparition de la bulle
  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (showMessage) {
      timeout = setTimeout(() => setShowMessage(false), 6000)
    }
    return () => clearTimeout(timeout)
  }, [showMessage, activeSection])

  // Mouse tracking & Click to Jump
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Contrain targetX within window bounds
      const padding = 50
      physics.current.targetX = Math.max(padding, Math.min(e.clientX, window.innerWidth - padding))
    }

    const handleClick = () => {
      if (!isVisible) return
      // Jump
      if (physics.current.isGrounded) {
        physics.current.vy = -18 // Puissance du saut
        physics.current.isGrounded = false
        // S'étire brusquement au moment de sauter
        scaleX.set(0.7)
        scaleY.set(1.4)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('click', handleClick)
    physics.current.targetX = window.innerWidth / 2

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('click', handleClick)
    }
  }, [isVisible, scaleX, scaleY])

  // Boucle de physique
  useAnimationFrame((t, delta) => {
    if (!isVisible) return

    const dt = delta / 16.66 // Normalisation par rapport à 60fps
    const p = physics.current

    // Gravité
    p.vy += 0.8 * dt

    // Mouvement vers la souris
    const currentX = x.get()
    const dx = p.targetX - currentX

    if (Math.abs(dx) > 15) {
      // Accélération vers la cible
      p.vx += Math.sign(dx) * 0.6 * dt
      // Friction (pour ne pas aller trop vite)
      p.vx *= 0.88

      // Sautillement de "marche"
      if (p.isGrounded && Math.abs(p.vx) > 1.5) {
        p.hopTimer += dt
        if (p.hopTimer > 10) {
          p.vy = -6 // Petit saut
          p.isGrounded = false
          p.hopTimer = 0
          // S'étire légèrement pendant la marche
          scaleX.set(0.85)
          scaleY.set(1.15)
        }
      }
    } else {
      // Freinage près de la cible
      p.vx *= 0.7
    }

    // Appliquer vélocité
    const newX = currentX + p.vx * dt
    let newY = y.get() + p.vy * dt

    // Collision avec le sol (y = 0 est le bas)
    if (newY >= 0) {
      if (newY > 0 && p.vy > 5) {
        // Atterrissage lourd = écrasement (squash)
        scaleX.set(1.3)
        scaleY.set(0.7)
      }
      newY = 0
      p.vy = 0
      p.isGrounded = true
    }

    // Gestion de l'animation organique (squash & stretch progressif)
    let targetScaleX = 1
    let targetScaleY = 1

    if (!p.isGrounded) {
      if (p.vy < 0) {
        // En montée
        targetScaleX = 0.9
        targetScaleY = 1.1
      } else {
        // En chute
        targetScaleX = 0.95
        targetScaleY = 1.05
      }
    } else {
      if (Math.abs(p.vx) < 1) {
        // Respiration au repos (idle)
        targetScaleY = 1 + Math.sin(t / 300) * 0.03
        targetScaleX = 1 - Math.sin(t / 300) * 0.03
      } else {
        // En mouvement
        targetScaleY = 0.95
        targetScaleX = 1.05
      }
    }

    // Lerp vers le target scale
    const currentScaleX = scaleX.get()
    const currentScaleY = scaleY.get()
    scaleX.set(currentScaleX + (targetScaleX - currentScaleX) * 0.15)
    scaleY.set(currentScaleY + (targetScaleY - currentScaleY) * 0.15)

    // Mise à jour des valeurs framer-motion
    x.set(newX)
    y.set(newY)
    
    // Inclinaison proportionnelle à la vitesse
    rotate.set(p.vx * 3)
  })

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          style={{ x, y }}
          className="fixed bottom-6 left-0 z-50 flex flex-col items-center pointer-events-none"
        >
          {/* Bulle de texte */}
          <AnimatePresence>
            {showMessage && messages[activeSection] && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                className="absolute bottom-full mb-4 bg-[#111111] border border-border text-foreground/80 text-sm font-light leading-relaxed p-4 rounded-2xl rounded-bl-none shadow-2xl w-max max-w-[250px] pointer-events-auto origin-bottom-left"
              >
                {messages[activeSection]}
              </motion.div>
            )}
          </AnimatePresence>

          {/* L'Avatar */}
          <motion.div
            style={{ rotate, scaleX, scaleY }}
            onMouseEnter={() => setShowMessage(true)}
            onMouseLeave={() => setShowMessage(false)}
            className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white/20 shadow-xl shadow-cyan-900/10 shrink-0 bg-card pointer-events-auto -ml-10" // -ml-10 pour centrer l'avatar sur x=0
          >
            <Image 
              src="/images/fred-caricature-custom.png" 
              alt="Assistant Fred" 
              fill 
              className="object-cover"
            />
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}
