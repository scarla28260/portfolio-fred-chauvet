"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Activity, X, Menu, ArrowUpRight } from "lucide-react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/competences", label: "Compétences" },
  { href: "/projets", label: "Projets" },
  { href: "/parcours", label: "Parcours" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [time, setTime] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setTime(new Date().toLocaleTimeString("fr-FR", { hour12: false }));
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString("fr-FR", { hour12: false }));
    }, 1000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-8 transition-all duration-700 pointer-events-none"
        )}
      >
        <div
          className={cn(
            "flex justify-between items-center w-full max-w-[1400px] mx-auto transition-all duration-700 pointer-events-auto",
            scrolled ? "glass-gold py-4 px-10 rounded-full shadow-2xl" : "py-6 px-4 border-b border-white/5"
          )}
        >
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-5">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-11 h-11 border border-border flex items-center justify-center bg-muted/40 rounded-xl transition-all duration-500 shadow-xl group-hover:border-primary/50 group-hover:bg-primary/5"
            >
              <span className="text-[14px] font-black text-primary italic font-syne">F</span>
            </motion.div>
            <div className="flex flex-col gap-0.5">
              <p className="text-[11px] text-foreground uppercase font-black tracking-[0.4em] group-hover:text-primary transition-all font-syne">
                F. Chauvet
              </p>
              <div className="flex items-center gap-2">
                <Activity size={8} className="text-primary/80 animate-pulse" />
                <span className="text-[8px] font-bold text-muted-foreground tracking-[0.2em] transition-colors uppercase font-mono">
                  Architecte_Sys_v5.0
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "group relative text-[10px] font-black uppercase tracking-[0.4em] transition-all duration-500 py-2 font-syne",
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-line"
                      className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-primary shadow-[0_0_15px_hsl(var(--primary))]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            <div className="flex flex-col items-end gap-0.5 ml-4 border-l border-border pl-6 opacity-40">
              <span className="text-[8px] font-bold text-muted-foreground tracking-[0.3em] font-mono">{time}</span>
              <span className="text-[6px] font-black text-primary uppercase tracking-[0.2em] font-mono">Opérationnel</span>
            </div>
          </div>

          {/* Mobile hamburger */}
          <motion.button
            className="md:hidden glass-gold p-3 rounded-xl border-primary/20 text-primary"
            onClick={() => setMobileOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Ouvrir le menu"
          >
            <Menu size={20} />
          </motion.button>
        </div>
      </header>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[150] bg-background/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 32 }}
              className="fixed top-0 right-0 h-full w-[80vw] max-w-[380px] z-[160] bg-background/95 backdrop-blur-3xl border-l border-primary/10 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-8 py-8 border-b border-border">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] font-syne">
                    Navigation
                  </span>
                  <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest font-mono">
                    Fred_Chauvet_v5.0
                  </span>
                </div>
                <motion.button
                  onClick={() => setMobileOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="glass p-3 rounded-xl text-muted-foreground hover:text-white transition-colors border-white/5"
                  aria-label="Fermer le menu"
                >
                  <X size={18} />
                </motion.button>
              </div>

              {/* Links */}
              <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
                {links.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "group flex items-center justify-between p-5 rounded-2xl transition-all duration-300",
                          isActive
                            ? "glass-gold bg-primary/5 border-primary/30"
                            : "hover:bg-muted border border-transparent hover:border-border"
                        )}
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-[9px] font-black text-primary/40 font-mono">
                            0x{String(i).padStart(2, "0")}
                          </span>
                          <span
                            className={cn(
                              "text-base font-black uppercase tracking-tight font-syne transition-colors",
                              isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                            )}
                          >
                            {link.label}
                          </span>
                        </div>
                        <ArrowUpRight
                          size={16}
                          className={cn(
                            "transition-all duration-300",
                            isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1"
                          )}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Footer telemetry */}
              <div className="px-8 py-8 border-t border-border flex items-center justify-between opacity-40">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  <span className="text-[8px] font-black text-primary uppercase tracking-widest font-mono">
                    Système_Actif
                  </span>
                </div>
                <span className="text-[8px] font-bold text-muted-foreground font-mono">{time}</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

