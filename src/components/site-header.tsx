import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, ChevronRight } from "lucide-react";
import { useTheme } from "./theme-provider";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import footerLogo from "@/assets/footer-logo.png";
import "./header.css";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/certificates", label: "Certificates" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <header className={`sticky top-0 z-50 premium-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container-page flex items-center justify-between gap-8">
        <Link to="/" className="premium-logo">
          <div className="logo-container">
            <img
              src={theme === "dark" ? footerLogo : logo}
              alt="Nextgen Solutions & Contracting"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-bold tracking-tight leading-none text-foreground">
              NEXTGEN
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground mt-0.5">
              Solutions
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-2">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) => 
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={toggle} className="theme-toggle" aria-label="Toggle theme">
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>

          <Link to="/contact" className="hidden sm:flex cta-button">
            Get a Quote
          </Link>

          <button
            className="lg:hidden p-2 rounded-full hover:bg-muted transition-colors text-foreground relative z-70"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed top-(--header-height) right-4 left-4 z-60 lg:hidden"
          >
            <div className="bg-background/90 backdrop-blur-2xl border border-border/40 shadow-2xl rounded-2xl overflow-hidden mt-1">
              <div className="flex flex-col p-1.5 gap-0.5">
                {nav.map((n, i) => (
                  <motion.div
                    key={n.to}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <Link
                      to={n.to}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted/60 rounded-lg transition-all"
                    >
                      <span>{n.label}</span>
                      <ChevronRight className="size-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </motion.div>
                ))}

                <div className="mt-1 pt-1.5 border-t border-border/40">
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="block w-full py-2.5 rounded-lg text-center font-bold text-xs uppercase tracking-wider"
                    style={{ background: "var(--gradient-gold)", color: "white" }}
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
