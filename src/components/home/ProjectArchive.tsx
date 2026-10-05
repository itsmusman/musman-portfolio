import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/siteData";
import { getProjectMainImage } from "@/data/projectImages";

export default function ProjectArchive() {
  const shouldReduceMotion = useReducedMotion();
  const secondaryProjects = projects.filter((p) => !p.featured);

  // Floating hover preview state
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePreview, setActivePreview] = useState<{
    id: string;
    title: string;
    image: string | null;
  } | null>(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    // Only enable pointer-following preview on devices that support fine hover
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
      aria-label="Additional Projects Archive"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-16 md:py-24 border-b border-white/[0.08]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="space-y-2 mb-10 sm:mb-14">
          <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
            Archive Directory
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            A Few Other Things I've Built
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl text-pretty">
            Secondary web applications, real-time engines, logistics dashboards, and browser tools.
          </p>
        </div>

        {/* Editorial Horizontal Rows */}
        <div className="border-t border-b border-white/[0.08] divide-y divide-white/[0.08]">
          {secondaryProjects.map((project) => {
            const previewImage = getProjectMainImage(project.id);

            return (
              <div
                key={project.id}
                onMouseEnter={() => {
                  if (canHover) {
                    setActivePreview({
                      id: project.id,
                      title: project.title,
                      image: previewImage,
                    });
                  }
                }}
                onMouseLeave={() => setActivePreview(null)}
                className="py-5 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-baseline group transition-colors duration-200 hover:bg-white/[0.02] px-2 -mx-2 rounded-sm"
              >
                {/* Col 1: Index & Title (Title translates 4-6px on hover) */}
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground/70">
                      {project.orderNumber}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-foreground transition-transform duration-200 group-hover:translate-x-1.5 group-hover:text-teal-400">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-xs font-mono text-muted-foreground mt-0.5 ml-7">
                    {project.category}
                  </p>
                </div>

                {/* Col 2: Description */}
                <div className="md:col-span-4 text-xs sm:text-sm text-muted-foreground leading-relaxed text-pretty">
                  {project.description}
                </div>

                {/* Col 3: Tech Stack */}
                <div className="md:col-span-3 text-xs font-mono text-muted-foreground/80">
                  {project.techStack.join(" · ")}
                </div>

                {/* Col 4: Action link (Arrow translates 4-6px) */}
                <div className="md:col-span-1 text-left md:text-right pt-1 md:pt-0">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-foreground hover:text-teal-400 transition-colors"
                    >
                      <span>View</span>
                      <ArrowUpRight
                        size={13}
                        className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 text-teal-400"
                      />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Pointer-Follow Preview (Desktop only, subtle spring movement) */}
      <AnimatePresence>
        {activePreview && canHover && !shouldReduceMotion && (
          <motion.div
            key={activePreview.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            style={{
              position: "absolute",
              top: mousePos.y - 85,
              left: mousePos.x + 24,
              pointerEvents: "none",
            }}
            className="z-30 hidden lg:block w-56 aspect-video rounded-lg overflow-hidden border border-white/20 bg-secondary/90 shadow-2xl backdrop-blur-md"
          >
            {activePreview.image ? (
              <img
                src={activePreview.image}
                alt={`${activePreview.title} preview`}
                className="w-full h-full object-cover object-top filter contrast-[1.02]"
              />
            ) : (
              <div className="w-full h-full p-4 flex flex-col justify-between bg-secondary/80">
                <span className="font-mono text-[10px] text-teal-400 uppercase tracking-widest">
                  Architecture Overview
                </span>
                <p className="text-sm font-bold text-foreground">{activePreview.title}</p>
                <span className="text-[10px] font-mono text-muted-foreground">Production Verified</span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
