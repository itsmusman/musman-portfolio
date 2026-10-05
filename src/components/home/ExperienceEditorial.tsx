import { motion, useReducedMotion } from "framer-motion";
import { timeline } from "@/data/siteData";

export default function ExperienceEditorial() {
  const shouldReduceMotion = useReducedMotion();

  const getRoleMetrics = (company: string) => {
    switch (company.toLowerCase()) {
      case "grayphite":
        return {
          metrics: ["API Latency -40%", "Load Speed +35%"],
          stack: ["Python", "FastAPI", "Next.js", "Redis", "PostgreSQL"],
        };
      case "piecyfer":
        return {
          metrics: ["QA Effort -35%", "USA–PK Agile Sprints"],
          stack: ["React.js", "Next.js", "TypeScript", "AI Workflows"],
        };
      case "devblends":
        return {
          metrics: ["Merge Conflicts -40%", "Real-Time Sockets"],
          stack: ["React.js", "Node.js", "Redux", "Socket.io", "React Native"],
        };
      default:
        return {
          metrics: [],
          stack: [],
        };
    }
  };

  return (
    <section
      id="experience"
      aria-label="Professional Experience"
      className="py-20 md:py-28 border-b border-white/[0.08] scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="space-y-3 mb-12 sm:mb-16">
          <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
            Career Timeline
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl text-pretty">
            4+ years of production software engineering across fast-paced product teams.
          </p>
        </div>

        {/* Sequential 3-Column Rows with Animated Hairline Dividers */}
        <div className="space-y-0">
          {timeline.map((item, index) => {
            const { metrics, stack } = getRoleMetrics(item.company);

            return (
              <div key={index} className="relative">
                {/* Animated divider expanding from width 0 to 100% */}
                <motion.div
                  initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originX: 0 }}
                  className="h-[1px] bg-white/[0.08] w-full"
                />

                {/* Sequential Content Row */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start"
                >
                  {/* 1. Index & Date */}
                  <div className="md:col-span-3 space-y-1.5">
                    <span className="font-mono text-[11px] text-muted-foreground/60 block">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-foreground/90 font-medium tracking-wide block">
                      {item.period}
                    </span>
                    <p className="text-xs text-muted-foreground">
                      {item.location}
                    </p>
                  </div>

                  {/* 2. Role, Company & Highlight Metric Chips */}
                  <div className="md:col-span-4 space-y-2.5">
                    <div>
                      <h3 className="text-lg font-bold text-foreground tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm font-semibold text-teal-400">
                        {item.company}
                      </p>
                    </div>

                    {/* Quantified Impact Chips */}
                    {metrics.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {metrics.map((metric, mIdx) => (
                          <span
                            key={mIdx}
                            className="font-mono text-[11px] font-semibold text-teal-400 bg-teal-400/10 border border-teal-400/20 px-2 py-0.5 rounded"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Stack used in role */}
                    {stack.length > 0 && (
                      <p className="text-xs font-mono text-muted-foreground pt-1">
                        {stack.join(" · ")}
                      </p>
                    )}
                  </div>

                  {/* 3. Description & Responsibilities */}
                  <div className="md:col-span-5">
                    <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-pretty">
                          <span className="text-teal-400 mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-400 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            );
          })}

          {/* Closing bottom divider */}
          <motion.div
            initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0 }}
            className="h-[1px] bg-white/[0.08] w-full"
          />
        </div>
      </div>
    </section>
  );
}
