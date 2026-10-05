import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion, PanInfo, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects, Project } from "@/data/siteData";
import { getProjectMainImage } from "@/data/projectImages";

export default function FeaturedProjectCarousel() {
  const shouldReduceMotion = useReducedMotion();
  const featured = projects.filter((p) => p.featured);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Pointer follow state for image hover
  const stageRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringImage, setIsHoveringImage] = useState(false);

  const AUTOPLAY_DURATION = 6000; // 6 seconds per slide
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

  // Autoplay timer with progress bar
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

  // Drag handling
  const handleDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -40) {
      nextSlide();
    } else if (info.offset.x > 40) {
      prevSlide();
    }
  };

  // Pointer follow handler on visual stage
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Transition variants adhering strictly to prompt specs:
  // Current: opacity 1, scale 1, x 0
  // Exit: opacity 0, scale 1.03, x -20px (or +20px depending on direction)
  // Enter: opacity 0, scale 1.03, x 20px (or -20px depending on direction)
  const EASE = [0.22, 1, 0.36, 1] as const;

  const visualVariants: Variants = {
    enter: (dir: number) => ({
      opacity: 0,
      scale: 1.03,
      x: dir > 0 ? 20 : -20,
    }),
    center: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: EASE,
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      scale: 1.03,
      x: dir > 0 ? -20 : 20,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.4,
        ease: EASE,
      },
    }),
  };

  const textVariants: Variants = {
    enter: (dir: number) => ({
      opacity: 0,
      y: dir > 0 ? 12 : -12,
    }),
    center: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.45,
        ease: EASE,
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      y: dir > 0 ? -12 : 12,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.35,
        ease: EASE,
      },
    }),
  };

  return (
    <section
      id="projects"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured Projects Carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      className="py-16 md:py-24 border-b border-white/[0.08] outline-none scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Stage Header & Carousel Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 sm:pb-12 border-b border-white/[0.08]">
          <div className="space-y-1">
            <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
              Featured Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Production Systems & Highlights
            </h2>
          </div>

          {/* Controls: Slide Indicator, Progress Bar & Next/Prev Buttons */}
          <div className="flex items-center gap-6 text-xs font-mono">
            {/* Slide Index */}
            <div className="text-foreground tracking-widest">
              <span className="text-teal-400 font-bold">{currentProject.orderNumber}</span>
              <span className="text-muted-foreground"> / 0{featured.length}</span>
            </div>

            {/* Linear Progress Bar */}
            <div
              className="w-24 sm:w-32 h-[2px] bg-white/[0.1] rounded-full overflow-hidden"
              aria-label="Autoplay progress indicator"
            >
              <div
                className="h-full bg-teal-400 transition-[width] duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Manual Controls */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={prevSlide}
                aria-label="Previous project"
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-white/[0.06] rounded-md transition-colors"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next project"
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-white/[0.06] rounded-md transition-colors"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Large Editorial Stage */}
        <div className="pt-10 sm:pt-14">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            className="cursor-grab active:cursor-grabbing grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          >
            {/* Left: Project Narrative, Metadata & Links */}
            <div className="lg:col-span-5 space-y-6">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentProject.id}
                  custom={direction}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="space-y-4"
                >
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-teal-400 tracking-wider uppercase">
                      {currentProject.category}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                      {currentProject.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty">
                    {currentProject.description}
                  </p>

                  {/* Contribution */}
                  {currentProject.contribution && (
                    <div className="pt-2">
                      <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                        Contribution
                      </p>
                      <p className="text-sm text-foreground/90 font-medium leading-relaxed">
                        {currentProject.contribution}
                      </p>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="pt-2">
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                      Technology
                    </p>
                    <p className="text-xs font-mono text-foreground/80 leading-relaxed">
                      {currentProject.techStack.join(" · ")}
                    </p>
                  </div>

                  {/* Action Link */}
                  {currentProject.liveUrl && (
                    <div className="pt-4">
                      <a
                        href={currentProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-teal-400 transition-colors"
                      >
                        <span>View Project</span>
                        <ArrowUpRight size={14} className="text-teal-400" />
                      </a>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Large Stage Visual with Pointer-Following Floating Label */}
            <div
              ref={stageRef}
              onMouseEnter={() => setIsHoveringImage(true)}
              onMouseLeave={() => setIsHoveringImage(false)}
              onMouseMove={handleMouseMove}
              className="lg:col-span-7 relative"
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentProject.id}
                  custom={direction}
                  variants={visualVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-secondary/30 shadow-xl group"
                >
                  {mainImage ? (
                    <img
                      src={mainImage}
                      alt={`${currentProject.title} production interface`}
                      loading="eager"
                      decoding="async"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
                    />
                  ) : currentProject.id === "unsurfaced-ai" ? (
                    <div className="w-full h-full p-5 sm:p-7 flex flex-col justify-between bg-gradient-to-br from-[#12141c] to-[#0e1017] select-none transition-transform duration-500 group-hover:scale-[1.015]">
                      {/* Top Bar */}
                      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs font-mono">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                          <span className="text-foreground font-semibold">Reddit Stream Ingestion</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-[11px]">
                          <span>FastAPI</span>
                          <span>·</span>
                          <span>Redis Cache</span>
                        </div>
                      </div>

                      {/* Main Signal Display */}
                      <div className="grid grid-cols-2 gap-3.5 my-auto py-2">
                        <div className="rounded-md border border-white/[0.08] bg-black/40 p-3.5 space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono uppercase text-muted-foreground">Monitored Subreddits</span>
                            <span className="text-teal-400 font-mono text-[10px]">r/technology</span>
                          </div>
                          <p className="text-xs font-bold text-foreground truncate">Trending AI Architecture</p>
                          <div className="flex items-center gap-2 pt-1">
                            <span className="text-[11px] font-mono text-teal-400 font-semibold">+184% 24h</span>
                            <span className="text-[10px] text-muted-foreground">14.2k mentions/hr</span>
                          </div>
                        </div>

                        <div className="rounded-md border border-white/[0.08] bg-black/40 p-3.5 space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono uppercase text-muted-foreground">Pipeline Latency</span>
                            <span className="text-teal-400 font-mono text-[10px]">-40% Optim</span>
                          </div>
                          <p className="text-xs font-bold text-foreground">118ms End-to-End</p>
                          <div className="flex items-center gap-2 pt-1">
                            <span className="text-[11px] font-mono text-foreground/80">94.8% Cache Hit</span>
                            <span className="text-[10px] text-muted-foreground">Async Worker</span>
                          </div>
                        </div>
                      </div>

                      {/* Telemetry Footer */}
                      <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <span className="text-teal-400 font-semibold">PostgreSQL</span>
                          <span className="text-white/20">|</span>
                          <span>2.4k items/min indexed</span>
                        </div>
                        <span className="text-[11px] text-teal-400 font-semibold">Status: Production Live</span>
                      </div>
                    </div>
                  ) : currentProject.id === "blocktrust" ? (
                    <div className="w-full h-full p-5 sm:p-7 flex flex-col justify-between bg-gradient-to-br from-[#12141c] to-[#0e1017] select-none transition-transform duration-500 group-hover:scale-[1.015]">
                      {/* Top Bar */}
                      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs font-mono">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-teal-400" />
                          <span className="text-foreground font-semibold">Crypto IRA Allocation Engine</span>
                        </div>
                        <div className="flex items-center gap-2 text-teal-400 text-[11px]">
                          <span>Institutional Custody</span>
                        </div>
                      </div>

                      {/* Allocation breakdown */}
                      <div className="space-y-3 my-auto py-2">
                        <div className="rounded-md border border-white/[0.08] bg-black/40 p-3.5 space-y-2.5">
                          <div className="flex items-center justify-between text-xs font-mono">
                            <span className="text-muted-foreground">Automated Target Allocation</span>
                            <span className="text-foreground font-bold">Institutional Portfolio</span>
                          </div>
                          {/* Visual allocation bar */}
                          <div className="h-2 w-full bg-white/[0.08] rounded-full overflow-hidden flex">
                            <div className="bg-amber-400 h-full w-[45%]" title="BTC 45%" />
                            <div className="bg-blue-400 h-full w-[35%]" title="ETH 35%" />
                            <div className="bg-teal-400 h-full w-[20%]" title="SOL 20%" />
                          </div>
                          <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> BTC 45%</span>
                            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> ETH 35%</span>
                            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-teal-400" /> SOL 20%</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between px-3 py-2 rounded border border-white/[0.06] bg-black/20 text-xs font-mono">
                          <span className="text-muted-foreground">Rebalance Rule:</span>
                          <span className="text-teal-400">Drift &gt; 3.0% → Zero-Slip Execution</span>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-muted-foreground">
                        <span>SOC2 Compliant Workflows</span>
                        <span className="text-foreground font-semibold">99.99% Execution Uptime</span>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-secondary/40 to-secondary/20 transition-transform duration-500 group-hover:scale-[1.015]">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                          <span className="uppercase tracking-wider">System Architecture</span>
                          <span className="text-teal-400 font-bold">{currentProject.orderNumber}</span>
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                          {currentProject.title}
                        </h4>
                      </div>

                      <div className="space-y-3 py-4">
                        {currentProject.impact.map((bullet, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                            <span className="text-teal-400 mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-400 shrink-0" />
                            <span className="leading-relaxed">{bullet}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-muted-foreground/80">
                        <span>Production Verified</span>
                        <span>{currentProject.techStack.slice(0, 3).join(" · ")}</span>
                      </div>
                    </div>
                  )}

                  {/* Floating Pointer-Follow Interaction Label */}
                  {isHoveringImage && currentProject.liveUrl && !shouldReduceMotion && (
                    <motion.div
                      style={{
                        position: "absolute",
                        top: mousePos.y,
                        left: mousePos.x,
                        pointerEvents: "none",
                      }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ type: "spring", damping: 25, stiffness: 300 }}
                      className="-translate-x-1/2 -translate-y-1/2 z-20 px-3 py-1.5 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-white font-mono text-[11px] font-semibold tracking-wider uppercase inline-flex items-center gap-1 shadow-2xl"
                    >
                      <span>VIEW PROJECT</span>
                      <ArrowUpRight size={12} className="text-teal-400" />
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
