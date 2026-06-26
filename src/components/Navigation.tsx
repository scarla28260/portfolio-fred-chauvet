"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Activity, X, Menu, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "Accueil", path: "/" },
  { label: "Projets", path: "/projets" },
  { label: "Compétences", path: "/competences" },
  { label: "Parcours", path: "/parcours" },
  { label: "Contact", path: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [time, setTime] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
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
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-8 transition-all duration-700"
        )}
      >
        <div
          className={cn(
            "flex justify-between items-center w-full max-w-[1400px] mx-auto transition-all duration-700",
            scrolled
              ? "py-3 px-8 rounded-full shadow-[0_8px_32px_rgba(212,175,55,0.08),0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-2xl bg-background/90 border border-aura-gold/30"
              : "py-6 px-4"
          )}
        >
          {/* Logo */}
          <Link href="/" aria-label="Retour à l'accueil" className="group flex items-center gap-5 focus-ring rounded-xl outline-none">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-11 h-11 border border-primary/20 flex items-center justify-center bg-primary/5 rounded-xl transition-all duration-500 group-hover:border-primary/50 group-hover:bg-primary/10"
            >
              <span className="text-[14px] font-black text-primary italic font-syne">A</span>
            </motion.div>
            <div className="flex flex-col gap-0.5">
              <p className="text-[11px] text-foreground uppercase font-bold tracking-[0.4em] group-hover:text-primary transition-all font-mono">
                Fred Chauvet
              </p>
              <div className="flex items-center gap-2">
                <Activity size={8} className="text-primary animate-pulse" aria-hidden="true" />
                <span className="text-[8px] font-light text-foreground/30 tracking-[0.2em] transition-colors uppercase">
                  Portail actif
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "group relative text-[10px] font-mono uppercase tracking-[0.3em] transition-all duration-300 py-2 px-1 focus-ring rounded-sm outline-none",
                    isActive ? "text-primary" : "text-foreground/40 hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="w-1 h-1 rounded-full bg-primary animate-pulse shrink-0"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary/60 transition-all duration-300 group-hover:w-full" />
                  {isActive && (
                    <motion.span
                      layoutId="nav-line"
                      className="absolute -bottom-0.5 left-0 w-full h-px bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            <div className="flex items-center gap-4 ml-4 border-l border-foreground/10 pl-6">
              <div className="flex flex-col items-end gap-0.5 opacity-60">
                <span className="text-[8px] font-mono text-foreground/40 tracking-[0.3em]">{time}</span>
                <span className="text-[6px] font-bold text-primary uppercase tracking-[0.2em]">En_ligne</span>
              </div>
            </div>
          </div>

          {/* Mobile hamburger */}
          <motion.button
            className="md:hidden glass-gold p-3 rounded-xl border-primary/20 text-primary focus-ring outline-none"
            onClick={() => setMobileOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Ouvrir le menu"
            aria-expanded={mobileOpen}
          >
            <Menu size={20} />
          </motion.button>
        </div>
      </nav>

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
              className="fixed top-0 right-0 h-full w-[80vw] max-w-[380px] z-[160] bg-background/98 backdrop-blur-3xl border-l border-primary/15 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-8 py-8 border-b border-foreground/5">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-primary uppercase tracking-[0.4em]">
                    Menu Principal
                  </span>
                  <span className="text-[8px] font-light text-foreground/30 uppercase tracking-widest">
                    Fred_Chauvet
                  </span>
                </div>
                <motion.button
                  onClick={() => setMobileOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 rounded-xl text-foreground/40 hover:text-foreground transition-colors border border-foreground/10 focus-ring outline-none"
                  aria-label="Fermer le menu"
                  aria-expanded={mobileOpen}
                >
                  <X size={16} />
                </motion.button>
              </div>

              {/* Links */}
              <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
                {NAV_ITEMS.map((item, i) => {
                  const isActive = pathname === item.path;
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <Link
                        href={item.path}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "group flex items-center justify-between p-5 rounded-xl transition-all duration-300 border focus-ring outline-none",
                          isActive
                            ? "bg-primary/5 border-primary/20"
                            : "hover:bg-foreground/5 border border-transparent hover:border-foreground/10"
                        )}
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-[9px] font-mono text-primary/50">
                            0x{String(i).padStart(2, "0")}
                          </span>
                          <span
                            className={cn(
                              "text-base font-light uppercase tracking-tight transition-colors",
                              isActive ? "text-primary" : "text-foreground/50 group-hover:text-foreground"
                            )}
                          >
                            {item.label}
                          </span>
                        </div>
                        <ArrowUpRight
                          size={16}
                          aria-hidden="true"
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
              <div className="px-8 py-8 border-t border-foreground/5 flex items-center justify-between opacity-40">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  <span className="text-[8px] font-black text-primary uppercase tracking-widest">
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
