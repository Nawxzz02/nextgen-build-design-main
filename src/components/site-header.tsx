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
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-close drawer and track mobile state on resize
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) setOpen(false);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open && isMobile ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [open, isMobile]);

  return (
    <header className={`pill-header-wrapper ${scrolled ? "scrolled" : ""}`}>
      {/* Floating Pill Navbar */}
      <div className="pill-navbar">
        {/* Logo */}
        <Link to="/" className="premium-logo pill-logo">
          <div className="logo-container">
            <img
              src={theme === "dark" ? footerLogo : logo}
              alt="Nextgen Solutions & Contracting"
              className="h-9 w-auto object-contain"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-xs font-bold tracking-tight leading-none text-foreground">
              NEXTGEN
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-muted-foreground mt-0.5">
              Solutions
            </span>
          </div>
        </Link>

        {/* Divider */}
        <div className="pill-divider hidden lg:block" />

        {/* Nav Links — flex-1 to fill full width */}
        <nav className="hidden lg:flex items-center justify-center gap-1 flex-1">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `pill-nav-link ${isActive ? "active" : ""}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        {/* Divider */}
        <div className="pill-divider hidden lg:block" />

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button onClick={toggle} className="pill-icon-btn" aria-label="Toggle theme">
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>

          <Link to="/contact" className="hidden sm:flex pill-cta">
            Get a Quote
          </Link>

          <div className="lg:hidden flex items-center">
            <button
              className="pill-icon-btn"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && isMobile && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed top-20 right-4 left-4 z-40 lg:hidden"
            style={{ pointerEvents: "all" }}
          >
            <div className="bg-background/90 backdrop-blur-2xl border border-border/40 shadow-2xl rounded-2xl overflow-hidden">
              <div className="flex flex-col p-1.5 gap-0.5">
                {nav.map((n, i) => (
                  <motion.div
                    key={n.to}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      to={n.to}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted/60 rounded-xl transition-all"
                    >
                      <span>{n.label}</span>
                      <ChevronRight className="size-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </motion.div>
                ))}

                <div className="mt-1 pt-1.5 border-t border-border/40 px-1.5 pb-1.5">
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="block w-full py-2.5 rounded-full text-center font-bold text-xs uppercase tracking-wider"
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
