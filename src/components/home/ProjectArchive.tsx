import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/siteData";
import { getProjectMainImage } from "@/data/projectImages";

export default function ProjectArchive() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  // Floating hover preview state
  const [activePreview, setActivePreview] = useState<{
    id: string;
    title: string;
    category: string;
    tech: string[];
    image: string | null;
  } | null>(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setCanHover(mq.matches);
    const handler = (e: MediaQueryListEvent) => setCanHover(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover || shouldReduceMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="archive"
      aria-label="Project Archive Catalog"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-20 md:py-32 border-b border-foreground/[0.06] select-none"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <span className="font-mono text-[11px] tracking-[0.2em] text-[hsl(var(--primary))] uppercase block mb-2 font-medium">
            03 / Full Works Index
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Project Archive
          </h2>
          <p className="mt-2 text-sm text-muted-foreground font-light max-w-lg">
            Complete chronology of production web applications, data tools, and infrastructure.
          </p>
        </div>

        {/* Editorial Horizontal Rows */}
        <div className="border-t border-foreground/[0.08]">
          {projects.map((project) => {
            const previewImage = getProjectMainImage(project.id);

            return (
              <div
                key={project.id}
                onMouseEnter={() => {
                  if (canHover) {
                    setActivePreview({
                      id: project.id,
                      title: project.title,
                      category: project.category,
                      tech: project.techStack,
                      image: previewImage,
                    });
                  }
                }}
                onMouseLeave={() => setActivePreview(null)}
                className="group border-b border-foreground/[0.06]"
              >
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-5 sm:py-6 grid grid-cols-12 gap-3 sm:gap-6 items-center transition-colors duration-200 hover:bg-foreground/[0.02] px-3 -mx-3"
                  >
                    <ArchiveRowContent project={project} />
                  </a>
                ) : (
                  <div className="py-5 sm:py-6 grid grid-cols-12 gap-3 sm:gap-6 items-center px-3 -mx-3">
                    <ArchiveRowContent project={project} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Pointer-Follow Preview (Desktop Fine Pointer Only) */}
      <AnimatePresence>
        {activePreview && canHover && !shouldReduceMotion && (
          <motion.div
            key={activePreview.id}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ type: "spring", damping: 30, stiffness: 350 }}
            style={{
              position: "absolute",
              top: mousePos.y - 75,
              left: Math.min(mousePos.x + 35, (containerRef.current?.clientWidth || 1000) - 280),
              pointerEvents: "none",
            }}
            className="z-30 hidden lg:block w-64 aspect-video overflow-hidden border border-foreground/15 bg-[#121210] shadow-2xl rounded-sm"
          >
            {activePreview.image ? (
              <img
                src={activePreview.image}
                alt={`${activePreview.title} preview`}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <div className="w-full h-full p-4 flex flex-col justify-between bg-[#11110F]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] text-[hsl(var(--primary))] uppercase tracking-widest font-semibold">
                    Production System
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))]" />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-foreground">
                    {activePreview.title}
                  </p>
                  <p className="font-mono text-[10px] text-muted-foreground mt-0.5">
                    {activePreview.category}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1">
                  {activePreview.tech.slice(0, 3).map((t) => (
                    <span key={t} className="font-mono text-[9px] text-muted-foreground/80 bg-white/[0.04] px-1.5 py-0.5 rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ArchiveRowContent({ project }: { project: typeof projects[0] }) {
  return (
    <>
      {/* 1. Order Number */}
      <div className="col-span-1 font-mono text-[11px] text-muted-foreground/60">
        {project.orderNumber}
      </div>

      {/* 2. Project Title */}
      <div className="col-span-4 sm:col-span-3">
        <h3 className="font-display text-base sm:text-lg font-semibold text-foreground tracking-tight transition-transform duration-200 group-hover:translate-x-1.5 group-hover:text-[hsl(var(--primary))]">
          {project.title}
        </h3>
      </div>

      {/* 3. Category */}
      <div className="col-span-4 sm:col-span-3 font-mono text-[11px] sm:text-xs text-muted-foreground tracking-wide">
        {project.category}
      </div>

      {/* 4. Tech Stack (hidden on small mobile) */}
      <div className="hidden sm:block sm:col-span-3 font-mono text-[11px] text-muted-foreground/60">
        {project.techStack.slice(0, 3).join(" · ")}
      </div>

      {/* 5. Link Icon Indicator */}
      <div className="col-span-3 sm:col-span-2 flex justify-end">
        {project.liveUrl ? (
          <div className="p-1 text-muted-foreground group-hover:text-[hsl(var(--primary))] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight size={15} />
          </div>
        ) : (
          <span className="font-mono text-[10px] text-muted-foreground/40">In-House</span>
        )}
      </div>
    </>
  );
}
