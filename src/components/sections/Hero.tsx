"use client"

import { m, LazyMotion, domAnimation, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowDownRight } from "lucide-react"
import { useEffect } from "react"

export function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      mouseX.set(x)
      mouseY.set(y)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const smoothOptions = { damping: 20, stiffness: 100, mass: 0.5 }
  const smoothX = useSpring(mouseX, smoothOptions)
  const smoothY = useSpring(mouseY, smoothOptions)

  const avatarX = useTransform(smoothX, [-1, 1], [-25, 25])
  const avatarY = useTransform(smoothY, [-1, 1], [-25, 25])
  const avatarRotateX = useTransform(smoothY, [-1, 1], [15, -15])
  const avatarRotateY = useTransform(smoothX, [-1, 1], [-15, 15])

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative min-h-screen flex items-center bg-background pt-20 overflow-hidden" id="hero">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-aura-navy/20 blur-[140px]" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-aura-gold/15 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/2 w-[400px] h-[400px] rounded-full bg-aura-navy-light/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aura-gold/30 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 md:px-8">
        <div className="flex flex-col max-w-5xl mx-auto mt-12 md:mt-24">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 overflow-visible"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-aura-gold/50" />
              <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
                Fred Chauvet — Developpeur IA & Data
              </p>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tighter text-foreground leading-[0.9] flex flex-wrap items-center gap-x-4 md:gap-x-8 gap-y-4">
              <span>Code.</span>
              <span className="w-full flex items-center gap-4 md:gap-8 perspective-1000">
                <span className="italic opacity-80 text-aura-navy">Structure.</span>
                <m.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
                  style={{
                    x: avatarX,
                    y: avatarY,
                    rotateX: avatarRotateX,
                    rotateY: avatarRotateY,
                    transformPerspective: 1000
                  }}
                  className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[24rem] lg:h-[24rem] xl:w-[32rem] xl:h-[32rem] shrink-0 cursor-pointer z-20"
                >
                  <m.div
                    whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.3 } }}
                    className="w-full h-full relative rounded-full overflow-hidden border-2 border-aura-gold/30 hover:border-aura-gold/70 shadow-[0_0_60px_rgba(252,211,77,0.15)] hover:shadow-[0_0_100px_rgba(252,211,77,0.30)] transition-all duration-500 bg-background/50 backdrop-blur-sm"
                  >
                    <video
                      src="/voila.mp4"
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      title="Présentation vidéo de Fred Chauvet"
                    />
                  </m.div>
                </m.div>
              </span>
              <span>Impact.</span>
            </h1>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mt-12 md:mt-24 border-t border-aura-gold/20 pt-8 gap-8"
          >
            <p className="max-w-[400px] text-muted-foreground text-lg md:text-xl font-light leading-relaxed">
              Des flux physiques aux flux digitaux. Je concois des experiences web sur-mesure et des architectures de donnees robustes.
            </p>

            <a
              href="/projets"
              aria-label="Découvrir mes projets"
              className="group flex items-center justify-center w-16 h-16 rounded-full border border-aura-gold/30 text-foreground hover:bg-aura-gold/10 hover:border-aura-gold/70 hover:shadow-[0_0_20px_rgba(252,211,77,0.25)] transition-all duration-500 shrink-0"
            >
              <ArrowDownRight className="w-6 h-6 transition-transform duration-500 group-hover:-rotate-45 text-aura-gold" />
              <span className="sr-only">Decouvrir</span>
            </a>
          </m.div>
        </div>
      </div>
    </section>
    </LazyMotion>
  )
}
