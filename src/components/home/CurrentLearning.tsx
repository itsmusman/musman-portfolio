import { motion, useReducedMotion } from "framer-motion";
import { continuingDevelopment } from "@/data/siteData";

export default function CurrentLearning() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="continuing-development"
      aria-label="Expanding into AI/ML Engineering"
      className="py-20 md:py-28 border-b border-foreground/[0.06] select-none"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[hsl(var(--primary))]" />
            <span className="font-mono text-[11px] tracking-[0.2em] text-[hsl(var(--primary))] uppercase font-medium">
              05 / Next Chapter
            </span>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Expanding into AI/ML
            </h2>
            <p className="text-sm text-muted-foreground font-light max-w-xl">
              An intentional transition from production full-stack engineering into machine learning pipelines and applied AI.
            </p>
          </div>

          {/* Visual Storytelling Transition Path */}
          <div className="py-4">
            <div className="inline-flex items-center gap-4 text-xs sm:text-sm font-mono border border-foreground/[0.08] bg-foreground/[0.02] px-4 py-2.5 rounded-sm">
              <span className="text-foreground/90 font-medium">Full Stack Engineering</span>
              <span className="text-[hsl(var(--primary))] font-bold">→</span>
              <span className="text-[hsl(var(--primary))] font-semibold">AI / ML Engineering</span>
            </div>
          </div>

          {/* Program Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 pt-4 border-t border-foreground/[0.06]">
            {/* Column 1: Duration & Live Status */}
            <div className="md:col-span-3 space-y-2">
              <span className="font-mono text-sm text-foreground/90 font-medium block">
                {continuingDevelopment.duration}
              </span>
              <span className="inline-flex items-center gap-2 font-mono text-xs text-[hsl(var(--primary))]">
                <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] animate-pulse" />
                {continuingDevelopment.status}
              </span>
            </div>

            {/* Column 2: Program & Institution */}
            <div className="md:col-span-4 space-y-1">
              <h3 className="font-display text-lg font-bold text-foreground">
                {continuingDevelopment.title} Program
              </h3>
              <p className="text-sm text-foreground/80 font-medium">
                {continuingDevelopment.institution}
              </p>
              <p className="font-mono text-xs text-muted-foreground pt-1">
                Funded by NAVTTC (National Vocational and Technical Training Commission)
              </p>
            </div>

            {/* Column 3: Focus & Learning Scope */}
            <div className="md:col-span-5 text-sm text-muted-foreground leading-relaxed font-light text-pretty">
              {continuingDevelopment.description}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
