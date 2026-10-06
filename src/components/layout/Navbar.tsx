import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/siteData";

const navItems = [
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["contact", "about", "skills", "experience", "projects"];
      const scrollPosition = window.scrollY + 200;

      let found = false;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            found = true;
            break;
          }
        }
      }
      if (!found && window.scrollY < 200) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = useCallback(
    (href: string) => {
      setMobileMenuOpen(false);
      if (href.startsWith("/#") && location.pathname === "/") {
        const elementId = href.replace("/#", "");
        const target = document.getElementById(elementId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    [location.pathname]
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[hsl(var(--background))]/90 backdrop-blur-lg border-b border-foreground/[0.06]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          className="font-display text-sm sm:text-base font-semibold tracking-tight text-foreground hover:opacity-80 transition-opacity"
        >
          Muhammad Usman
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navItems.map((item) => {
            const sectionName = item.href.replace("/#", "");
            const isActive = activeSection === sectionName && location.pathname === "/";

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (location.pathname === "/" && item.href.startsWith("/#")) {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                }}
                className={`relative text-[13px] tracking-wide transition-colors py-1 ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[hsl(var(--primary))] rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}

          {/* Resume link */}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] tracking-wide text-muted-foreground hover:text-foreground transition-colors"
          >
            Resume
          </a>
        </nav>

        {/* Mobile: Resume + Menu Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] text-muted-foreground hover:text-foreground transition-colors"
          >
            Resume
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-foreground"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-16 bg-[hsl(var(--background))]/98 backdrop-blur-xl z-40 flex flex-col justify-center px-8"
            aria-label="Mobile navigation"
          >
            <div className="space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (location.pathname === "/" && item.href.startsWith("/#")) {
                        e.preventDefault();
                        handleNavClick(item.href);
                      } else {
                        setMobileMenuOpen(false);
                      }
                    }}
                    className="block py-3 font-display text-2xl font-semibold text-foreground hover:text-[hsl(var(--primary))] transition-colors"
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Mobile footer links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-12 pt-6 border-t border-foreground/[0.08] flex flex-wrap gap-6 text-sm text-muted-foreground"
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-foreground transition-colors"
              >
                {profile.email}
              </a>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
