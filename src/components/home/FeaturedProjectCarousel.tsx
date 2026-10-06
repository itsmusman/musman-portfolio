import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion, PanInfo } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Activity, TrendingUp, ShieldCheck } from "lucide-react";
import { projects } from "@/data/siteData";
import { getProjectMainImage } from "@/data/projectImages";

export default function FeaturedProjectCarousel() {
  const shouldReduceMotion = useReducedMotion();
  const featured = projects.filter((p) => p.featured); // 01 Unsurfaced AI, 02 Amaizing, 03 BlockTrust
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const AUTOPLAY_DURATION = 6000;
  const currentProject = featured[currentIndex];
  const mainImage = getProjectMainImage(currentProject.id);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % featured.length);
    setProgress(0);
  }, [featured.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + featured.length) % featured.length);
    setProgress(0);
  }, [featured.length]);

  // Autoplay loop with smooth 50ms ticks
  useEffect(() => {
    if (shouldReduceMotion || isPaused) return;

    const intervalTime = 50;
    const step = (intervalTime / AUTOPLAY_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPaused, shouldReduceMotion, nextSlide]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      nextSlide();
    } else if (e.key === "ArrowLeft") {
      prevSlide();
    }
  };

  // Drag/Swipe handling
  const handleDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -40) {
      nextSlide();
    } else if (info.offset.x > 40) {
      prevSlide();
    }
  };

  const EASE = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      ref={sectionRef}
      id="projects"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured Projects Showcase"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      className="py-20 md:py-32 border-b border-foreground/[0.06] outline-none scroll-mt-16 select-none"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        
        {/* Section Header + Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <span className="font-mono text-[11px] tracking-[0.2em] text-[hsl(var(--primary))] uppercase block mb-2 font-medium">
              02 / Selected Production Work
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Featured Projects
            </h2>
          </div>

          {/* Carousel Navigation Tabs & Buttons */}
          <div className="flex items-center gap-6">
            {/* Number Tabs with Live Progress */}
            <div className="flex items-center gap-3">
              {featured.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                    setProgress(0);
                  }}
                  aria-label={`Jump to ${proj.title}`}
                  className={`group relative flex items-center gap-2 py-1 transition-all ${
                    idx === currentIndex
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground/60 hover:text-foreground"
                  }`}
                >
                  <span className="font-mono text-xs">{proj.orderNumber}</span>
                  <div className="w-8 sm:w-12 h-[2px] bg-foreground/[0.1] rounded-full overflow-hidden relative">
                    {idx === currentIndex && (
                      <div
                        className="absolute inset-0 bg-[hsl(var(--primary))] origin-left"
                        style={{
                          transform: `scaleX(${progress / 100})`,
                          transition: "transform 50ms linear",
                        }}
                      />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-1 border border-foreground/[0.08] p-1 rounded-sm">
              <button
                onClick={prevSlide}
                aria-label="Previous project"
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04] transition-colors rounded-sm"
              >
                <ArrowLeft size={15} />
              </button>
              <div className="w-[1px] h-4 bg-foreground/[0.08]" />
              <button
                onClick={nextSlide}
                aria-label="Next project"
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04] transition-colors rounded-sm"
              >
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Scene Stage */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
          className="cursor-grab active:cursor-grabbing"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Stage (Dominant 7 columns) */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentProject.id}
                  custom={direction}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 0, x: direction > 0 ? 30 : -30, scale: 0.98 }
                  }
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, x: direction > 0 ? -30 : 30, scale: 0.98 }
                  }
                  transition={{ duration: 0.55, ease: EASE }}
                  className="relative aspect-[16/10] overflow-hidden border border-foreground/[0.08] bg-[#0E0E0C] shadow-2xl group"
                >
                  {/* Case A: Real screenshot exists (e.g. Amaizing) */}
                  {mainImage ? (
                    <div className="relative w-full h-full">
                      <img
                        src={mainImage}
                        alt={`${currentProject.title} interface`}
                        loading="eager"
                        decoding="async"
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                      {/* Top label banner */}
                      <div className="absolute top-3 left-3 bg-[#11110F]/90 backdrop-blur-sm px-2.5 py-1 border border-white/10 font-mono text-[10px] text-foreground tracking-wider uppercase">
                        {currentProject.title} // Production Interface
                      </div>
                    </div>
                  ) : currentProject.id === "unsurfaced-ai" ? (
                    /* Case B: Unsurfaced AI - Authentic Real-time Reddit Stream Telemetry Stage */
                    <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#121210] to-[#0A0A09] font-mono text-xs text-foreground/90">
                      {/* Stage Header */}
                      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                        <div className="flex items-center gap-2">
                          <Activity size={14} className="text-[hsl(var(--primary))] animate-pulse" />
                          <span className="font-semibold tracking-wider text-[hsl(var(--primary))]">
                            UNSURFACED_AI // REDDIT INGESTION STREAM
                          </span>
                        </div>
                        <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                          Async Pipeline
                        </span>
                      </div>

                      {/* Performance Metric Counters */}
                      <div className="grid grid-cols-3 gap-3 sm:gap-4 py-4">
                        <div className="border border-white/[0.06] bg-white/[0.02] p-3 rounded-sm space-y-1">
                          <span className="text-[10px] text-muted-foreground uppercase">API Latency</span>
                          <p className="text-base sm:text-lg font-bold text-foreground">120ms</p>
                          <span className="text-[10px] text-[hsl(var(--primary))] font-semibold">−40% Optimized</span>
                        </div>
                        <div className="border border-white/[0.06] bg-white/[0.02] p-3 rounded-sm space-y-1">
                          <span className="text-[10px] text-muted-foreground uppercase">Page-Load Time</span>
                          <p className="text-base sm:text-lg font-bold text-foreground">0.8s</p>
                          <span className="text-[10px] text-[hsl(var(--primary))] font-semibold">−35% Boost</span>
                        </div>
                        <div className="border border-white/[0.06] bg-white/[0.02] p-3 rounded-sm space-y-1">
                          <span className="text-[10px] text-muted-foreground uppercase">Data Cache</span>
                          <p className="text-base sm:text-lg font-bold text-foreground">Redis</p>
                          <span className="text-[10px] text-muted-foreground">PostgreSQL Sync</span>
                        </div>
                      </div>

                      {/* Live Sentiment & Trend Distribution Visual */}
                      <div className="space-y-2 border-t border-white/[0.06] pt-3 text-[11px]">
                        <div className="flex items-center justify-between text-muted-foreground">
                          <span>Active Subreddit Streams</span>
                          <span>Sentiment Score</span>
                        </div>
                        <div className="space-y-1.5 font-mono text-[10px]">
                          <div className="flex items-center justify-between">
                            <span className="text-foreground/80">r/technology (Trending Index)</span>
                            <div className="flex items-center gap-2">
                              <div className="w-24 h-1.5 bg-white/[0.08] rounded-full overflow-hidden">
                                <div className="h-full bg-[hsl(var(--primary))] w-[85%]" />
                              </div>
                              <span className="text-[hsl(var(--primary))] font-semibold">+0.82</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-foreground/80">r/machinelearning (Research Topics)</span>
                            <div className="flex items-center gap-2">
                              <div className="w-24 h-1.5 bg-white/[0.08] rounded-full overflow-hidden">
                                <div className="h-full bg-[hsl(var(--primary))] w-[92%]" />
                              </div>
                              <span className="text-[hsl(var(--primary))] font-semibold">+0.91</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Case C: BlockTrust - Authentic AI Crypto IRA Telemetry Stage */
                    <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#121210] to-[#0A0A09] font-mono text-xs text-foreground/90">
                      {/* Stage Header */}
                      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                        <div className="flex items-center gap-2">
                          <ShieldCheck size={14} className="text-[hsl(var(--primary))]" />
                          <span className="font-semibold tracking-wider text-[hsl(var(--primary))]">
                            BLOCKTRUST // AI CRYPTO IRA ENGINE
                          </span>
                        </div>
                        <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                          Automated Rebalancing
                        </span>
                      </div>

                      {/* IRA Architecture Metrics */}
                      <div className="grid grid-cols-3 gap-3 sm:gap-4 py-4">
                        <div className="border border-white/[0.06] bg-white/[0.02] p-3 rounded-sm space-y-1">
                          <span className="text-[10px] text-muted-foreground uppercase">Rebalancing</span>
                          <p className="text-base sm:text-lg font-bold text-foreground">Real-time</p>
                          <span className="text-[10px] text-[hsl(var(--primary))] font-semibold">AI Automated</span>
                        </div>
                        <div className="border border-white/[0.06] bg-white/[0.02] p-3 rounded-sm space-y-1">
                          <span className="text-[10px] text-muted-foreground uppercase">Market Scan</span>
                          <p className="text-base sm:text-lg font-bold text-foreground">24/7</p>
                          <span className="text-[10px] text-muted-foreground">Volatility Guard</span>
                        </div>
                        <div className="border border-white/[0.06] bg-white/[0.02] p-3 rounded-sm space-y-1">
                          <span className="text-[10px] text-muted-foreground uppercase">Account Type</span>
                          <p className="text-base sm:text-lg font-bold text-foreground">Crypto IRA</p>
                          <span className="text-[10px] text-muted-foreground">Tax-Advantaged</span>
                        </div>
                      </div>

                      {/* Asset Allocation Breakdown */}
                      <div className="space-y-2 border-t border-white/[0.06] pt-3 text-[11px]">
                        <div className="flex items-center justify-between text-muted-foreground">
                          <span>Portfolio Holdings</span>
                          <span>Allocation Weight</span>
                        </div>
                        <div className="space-y-1.5 font-mono text-[10px]">
                          <div className="flex items-center justify-between">
                            <span className="text-foreground/80">Bitcoin (BTC) IRA Holding</span>
                            <span className="text-[hsl(var(--primary))] font-semibold">50% Allocation</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-foreground/80">Ethereum (ETH) IRA Holding</span>
                            <span className="text-[hsl(var(--primary))] font-semibold">30% Allocation</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-foreground/80">USD Yield Liquidity Reserve</span>
                            <span className="text-muted-foreground font-semibold">20% Allocation</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay Button */}
                  {currentProject.liveUrl && (
                    <a
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#11110F]/90 backdrop-blur-md text-foreground font-mono text-[11px] border border-white/10 hover:border-white/30 transition-all opacity-0 group-hover:opacity-100"
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRight size={12} className="text-[hsl(var(--primary))]" />
                    </a>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Information Panel (5 columns) */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-5">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentProject.id}
                  custom={direction}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -15 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="space-y-5"
                >
                  {/* Order Number & Category */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-[hsl(var(--primary))] font-semibold">
                      {currentProject.orderNumber}
                    </span>
                    <span className="w-5 h-[1px] bg-foreground/15" />
                    <span className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase font-medium">
                      {currentProject.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                    {currentProject.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[15px] text-muted-foreground leading-relaxed font-light text-pretty">
                    {currentProject.description}
                  </p>

                  {/* My Contribution */}
                  {currentProject.contribution && (
                    <div className="border-l border-[hsl(var(--primary))]/40 pl-3.5 space-y-1">
                      <span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase block font-semibold">
                        Key Engineering Contribution
                      </span>
                      <p className="text-xs sm:text-sm text-foreground/90 font-medium leading-relaxed">
                        {currentProject.contribution}
                      </p>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="space-y-2 pt-1">
                    <span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase block">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {currentProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] px-2.5 py-1 text-foreground/80 bg-foreground/[0.04] border border-foreground/[0.08] rounded-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Primary Link CTA */}
                  {currentProject.liveUrl && (
                    <div className="pt-2">
                      <a
                        href={currentProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 font-display text-sm font-semibold text-foreground hover:text-[hsl(var(--primary))] transition-colors"
                      >
                        <span>Explore {currentProject.title}</span>
                        <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[hsl(var(--primary))]" />
                      </a>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
