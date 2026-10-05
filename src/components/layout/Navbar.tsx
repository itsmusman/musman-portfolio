import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FileDown, Menu, X } from "lucide-react";
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
      setScrolled(window.scrollY > 20);

      // Section tracking for active nav state
      const sections = ["projects", "experience", "skills", "about", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("/#") && location.pathname === "/") {
      const elementId = href.replace("/#", "");
      const target = document.getElementById(elementId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-white/[0.08]"
          : "bg-background/60 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 text-foreground"
        >
          <span className="font-semibold text-sm sm:text-base tracking-tight text-foreground hover:text-white transition-colors">
            {profile.name}
          </span>
          <span className="text-white/20 text-xs hidden md:inline">/</span>
          <span className="text-xs text-muted-foreground hidden md:inline font-normal">
            Full Stack · AI/ML
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-7">
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
                className={`relative text-xs tracking-wide transition-colors py-1 ${
                  isActive
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[1.5px] bg-teal-400/80 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-foreground bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/25 rounded-md transition-all"
          >
            <FileDown size={13} className="text-teal-400" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2.5 sm:hidden">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 text-xs font-medium text-foreground bg-white/[0.06] border border-white/10 rounded-md"
          >
            Resume
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden border-b border-white/[0.08] bg-background/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-2.5"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (location.pathname === "/" && item.href.startsWith("/#")) {
                    e.preventDefault();
                    handleNavClick(item.href);
                  } else {
                    setMobileMenuOpen(false);
                  }
                }}
                className="py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-3 mt-1 border-t border-white/[0.06] text-xs">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="text-muted-foreground hover:text-foreground"
              >
                {profile.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
