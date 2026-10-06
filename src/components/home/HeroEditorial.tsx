import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profile } from "@/data/siteData";

export default function HeroEditorial() {
  const shouldReduceMotion = useReducedMotion();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  // Scroll progress for bottom indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(1, Math.max(0, scrollY / (windowHeight * 0.7)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Subtle cursor interaction (ONE memorable effect, desktop only, no reduced motion)
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion || window.innerWidth < 1024) return;
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5; // -0.5 to 0.5
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const handleScrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Easing curve for editorial motion: slow, confident, smooth
  const EASE = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      ref={heroRef}
      id="hero"
      aria-label="Introduction"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 pb-6 select-none"
    >
      {/* 1. Top Metadata Bar */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 w-full">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono tracking-[0.18em] text-muted-foreground uppercase border-b border-foreground/[0.06] pb-3"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))]" />
            <span>Lahore, Pakistan</span>
          </div>
          <div>4+ Years Production Experience</div>
          <div className="text-[hsl(var(--primary))] font-medium">Full Stack → AI/ML</div>
        </motion.div>
      </div>

      {/* 2. Main Editorial Composition: Layered Typography + Integrated Portrait */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 w-full flex-1 flex flex-col justify-center my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Typography Layer (occupies major viewport width) */}
          <div className="lg:col-span-8 order-2 lg:order-1 space-y-6">
            
            {/* Massive Name Typography with Subtle Cursor Parallax */}
            <motion.div
              style={
                shouldReduceMotion
                  ? {}
                  : {
                      transform: `translate3d(${-mousePos.x * 12}px, ${-mousePos.y * 8}px, 0)`,
                      transition: "transform 250ms cubic-bezier(0.2, 0, 0.2, 1)",
                    }
              }
              className="space-y-1"
            >
              {/* 2. "MUHAMMAD" reveal */}
              <div className="overflow-hidden">
                <motion.span
                  initial={shouldReduceMotion ? { y: 0 } : { y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, delay: 0.2, ease: EASE }}
                  className="block font-display text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-bold tracking-[-0.03em] text-foreground/75 leading-[0.95]"
                >
                  MUHAMMAD
                </motion.span>
              </div>

              {/* 3. "USMAN" reveal */}
              <div className="overflow-hidden">
                <motion.h1
                  initial={shouldReduceMotion ? { y: 0 } : { y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.32, ease: EASE }}
                  className="font-display text-[3.75rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8.5rem] xl:text-[9.5rem] font-extrabold tracking-[-0.04em] text-foreground leading-[0.85] -ml-[0.03em]"
                >
                  USMAN
                </motion.h1>
              </div>
            </motion.div>

            {/* 5. Role & Transition Line */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pt-1"
            >
              <span className="font-display text-lg sm:text-xl md:text-2xl font-semibold tracking-[-0.01em] text-foreground">
                Full Stack Software Engineer
              </span>
              <span className="hidden sm:block w-6 h-[1px] bg-foreground/20" />
              <span className="font-mono text-xs sm:text-sm tracking-wide text-[hsl(var(--primary))] font-medium">
                Expanding into AI/ML
              </span>
            </motion.div>

            {/* 6. Grounded Supporting Copy */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
              className="max-w-xl text-[15px] sm:text-base text-muted-foreground leading-relaxed font-light text-pretty"
            >
              Building digital products across SaaS, healthcare, e-commerce, fintech, Web3, 
              and AI-driven platforms — now deepening into AI/ML engineering.
            </motion.p>

            {/* 7. Action CTAs */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
              className="flex flex-wrap items-center gap-5 pt-2"
            >
              <a
                href="#projects"
                onClick={handleScrollToWork}
                className="group inline-flex items-center gap-2.5 font-display text-sm font-semibold text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-colors"
              >
                <span>View Selected Work</span>
                <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5 text-[hsl(var(--primary))]" />
              </a>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>Resume ↗</span>
              </a>
            </motion.div>
          </div>

          {/* 4. Integrated Portrait Layer (Reacts with cursor in opposing direction) */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex justify-start lg:justify-end">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
              style={
                shouldReduceMotion
                  ? {}
                  : {
                      transform: `translate3d(${mousePos.x * 16}px, ${mousePos.y * 12}px, 0)`,
                      transition: "transform 250ms cubic-bezier(0.2, 0, 0.2, 1)",
                    }
              }
              className="relative group"
            >
              {/* Editorial Aspect Frame */}
              <div className="relative w-[210px] sm:w-[260px] lg:w-[280px] xl:w-[320px] aspect-[3/4] overflow-hidden border border-foreground/[0.08] bg-secondary/30 shadow-2xl">
                <img
                  src={profile.profileImageUrl}
                  alt={`Portrait of ${profile.name}`}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover object-top filter grayscale-[12%] contrast-[1.03] brightness-[0.98] transition-transform duration-700 group-hover:scale-[1.02]"
                />
                
                {/* Editorial Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-transparent to-transparent opacity-80" />
                
                {/* Stamp label */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] text-foreground/80 tracking-widest uppercase">
                  <span>M. Usman</span>
                  <span className="text-[hsl(var(--primary))]">Active</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 8. Bottom Scroll Indicator */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 w-full">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: EASE }}
          className="flex items-center justify-between pt-4 border-t border-foreground/[0.06]"
        >
          <div className="flex items-center gap-3 font-mono text-[11px] text-muted-foreground">
            <span className="text-[hsl(var(--primary))] font-semibold">01</span>
            <span className="uppercase tracking-[0.18em]">Scroll to explore</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Scroll progress track */}
            <div className="w-24 sm:w-36 h-[1px] bg-foreground/[0.08] rounded-full overflow-hidden">
              <div
                className="h-full bg-[hsl(var(--primary))] transition-[width] duration-100 ease-linear rounded-full"
                style={{ width: `${Math.max(10, scrollProgress * 100)}%` }}
              />
            </div>
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              className="text-[hsl(var(--primary))]"
            >
              <ArrowDown size={12} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
