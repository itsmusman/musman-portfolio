import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileDown, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/siteData";

export default function HeroEditorial() {
  const shouldReduceMotion = useReducedMotion();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(1, Math.max(0, scrollY / (windowHeight * 0.75)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Staggered animation timings (400–800ms)
  const fadeUp = (delay: number) => ({
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.6,
      delay: shouldReduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section
      id="hero"
      aria-label="Hero Overview"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-8 border-b border-white/[0.08] overflow-hidden"
    >
      {/* Subtle Architectural Dot Grid Background */}
      <div className="absolute inset-0 dot-grid [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_80%)] pointer-events-none opacity-80" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full flex-1 flex flex-col justify-center relative z-10">
        {/* Main Editorial Grid: Confident Typography + Refined Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left/Main Column: Dominant Editorial Name & Role */}
          <div className="lg:col-span-8 space-y-6">
            {/* Visual Identity Title */}
            <div className="space-y-1">
              <motion.span
                {...fadeUp(0.05)}
                className="block text-2xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground/80"
              >
                Muhammad
              </motion.span>

              <motion.h1
                {...fadeUp(0.15)}
                className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tighter text-foreground leading-[0.84] select-none block -ml-1 sm:-ml-1.5"
              >
                USMAN<span className="text-teal-400">.</span>
              </motion.h1>
            </div>

            {/* Role & Transition Line */}
            <motion.div
              {...fadeUp(0.25)}
              className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-base font-medium tracking-tight text-foreground/90"
            >
              <span>Full Stack Software Engineer</span>
              <span className="text-white/20">·</span>
              <span className="text-teal-400 font-mono text-xs sm:text-sm tracking-wide">
                AI/ML Engineering Transition
              </span>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p
              {...fadeUp(0.35)}
              className="max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty font-normal"
            >
              Full Stack Software Engineer with 4+ years of professional experience building web and mobile
              applications across SaaS, healthcare, e-commerce, fintech, Web3 and AI-driven products. Currently
              expanding into AI/ML Engineering through hands-on learning and practical projects.
            </motion.p>

            {/* Actions & CTAs */}
            <motion.div
              {...fadeUp(0.45)}
              className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold"
            >
              <a
                href="#projects"
                onClick={handleScrollToWork}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-foreground text-background hover:bg-foreground/90 transition-all font-medium"
              >
                <span>Explore My Work</span>
                <ArrowDown size={13} className="text-background" />
              </a>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-white/15 bg-white/[0.04] hover:bg-white/[0.1] text-foreground transition-all font-medium"
              >
                <FileDown size={13} className="text-teal-400" />
                <span>Download Resume</span>
                <ArrowUpRight size={13} className="text-muted-foreground" />
              </a>
            </motion.div>

            {/* Track Record Metrics Strip (Inspired by Top Senior Engineering Portfolios) */}
            <motion.div
              {...fadeUp(0.55)}
              className="pt-5 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
            >
              <div className="space-y-0.5">
                <span className="font-mono text-xl sm:text-2xl font-bold text-foreground">4+</span>
                <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="space-y-0.5">
                <span className="font-mono text-xl sm:text-2xl font-bold text-foreground">9+</span>
                <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Shipped Systems</p>
              </div>
              <div className="space-y-0.5">
                <span className="font-mono text-xl sm:text-2xl font-bold text-teal-400">-40%</span>
                <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">API Latency Cut</p>
              </div>
              <div className="space-y-0.5">
                <span className="font-mono text-xl sm:text-2xl font-bold text-foreground">USA–PK</span>
                <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Agile Delivery</p>
              </div>
            </motion.div>

            {/* Quick Links Row */}
            <motion.div
              {...fadeUp(0.65)}
              className="pt-1 flex flex-wrap items-center gap-6 text-xs text-muted-foreground font-mono"
            >
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground inline-flex items-center gap-1 transition-colors"
              >
                <Linkedin size={12} className="text-teal-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground inline-flex items-center gap-1 transition-colors"
              >
                <Github size={12} className="text-teal-400" />
                <span>GitHub</span>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="hover:text-foreground inline-flex items-center gap-1 transition-colors"
              >
                <Mail size={12} className="text-teal-400" />
                <span>{profile.email}</span>
              </a>

              <span className="hidden sm:inline text-white/20">|</span>
              <span className="text-muted-foreground/80">📍 {profile.location}</span>
            </motion.div>
          </div>

          {/* Right Column: Real Professional Photograph (Scale 0.97 → 1, Subtle Reveal) */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.7,
                delay: shouldReduceMotion ? 0 : 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full max-w-[270px] sm:max-w-[300px] lg:max-w-[320px] aspect-[3/4] rounded-lg overflow-hidden border border-white/10 bg-secondary/30 shadow-2xl"
            >
              <img
                src={profile.profileImageUrl}
                alt={profile.name}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[0.98] select-none"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Invitation Indicator at Bottom of Hero */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full pt-10 sm:pt-14 relative z-10">
        <div className="flex items-center justify-between border-t border-white/[0.08] pt-4 text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="text-teal-400 font-bold">01</span>
            <span className="uppercase tracking-widest text-[11px] text-muted-foreground/90">
              Scroll to Explore
            </span>
          </div>

          {/* Interactive track & indicator dot responding to scroll */}
          <div className="flex items-center gap-3 w-40 sm:w-56">
            <div className="relative w-full h-[1.5px] bg-white/[0.12] rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 bottom-0 left-0 bg-teal-400/90 rounded-full"
                style={{
                  width: `${Math.max(12, scrollProgress * 100)}%`,
                }}
              />
            </div>
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="text-teal-400"
            >
              <ArrowDown size={12} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
