import { motion, useReducedMotion } from "framer-motion";
import { continuingDevelopment } from "@/data/siteData";

export default function CurrentLearning() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="continuing-development"
      aria-label="Continuing Development"
      className="py-16 md:py-20 border-b border-white/[0.08]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          {/* Subtle Accent Line Header */}
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1.5px] bg-teal-400" />
            <p className="text-xs font-mono tracking-widest text-teal-400 uppercase font-semibold">
              Currently Learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start pt-2">
            {/* Col 1: Status & Duration */}
            <div className="md:col-span-3 space-y-1">
              <span className="font-mono text-xs sm:text-sm text-foreground font-semibold block">
                {continuingDevelopment.duration}
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-teal-400">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                {continuingDevelopment.status}
              </span>
            </div>

            {/* Col 2: Title & Institutions */}
            <div className="md:col-span-4 space-y-1">
              <h3 className="text-xl font-bold text-foreground tracking-tight">
                {continuingDevelopment.title}
              </h3>
              <p className="text-sm font-medium text-foreground/90">
                {continuingDevelopment.institution}
              </p>
              <p className="text-xs font-mono text-muted-foreground">
                {continuingDevelopment.program}
              </p>
            </div>

            {/* Col 3: Curriculum & Focus */}
            <div className="md:col-span-5 text-sm text-muted-foreground leading-relaxed text-pretty">
              {continuingDevelopment.description}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
