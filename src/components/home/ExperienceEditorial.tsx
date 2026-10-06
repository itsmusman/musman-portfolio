import { motion, useReducedMotion } from "framer-motion";
import { timeline } from "@/data/siteData";

export default function ExperienceEditorial() {
  const shouldReduceMotion = useReducedMotion();

  const getRoleHighlights = (company: string) => {
    switch (company.toLowerCase()) {
      case "grayphite":
        return {
          metrics: ["API latency −40%", "Page-load +35%"],
          stack: "Python · FastAPI · Next.js · PostgreSQL · Redis",
        };
      case "piecyfer":
        return {
          metrics: ["QA effort −35%", "Cross-timezone delivery"],
          stack: "React · Next.js · TypeScript · AI workflows",
        };
      case "devblends":
        return {
          metrics: ["Merge conflicts −40%", "Real-time sockets"],
          stack: "React · Node.js · Redux · React Native · Socket.io",
        };
      default:
        return { metrics: [], stack: "" };
    }
  };

  return (
    <section
      id="experience"
      aria-label="Professional Experience Timeline"
      className="py-20 md:py-32 border-b border-foreground/[0.06] scroll-mt-16 select-none"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="font-mono text-[11px] tracking-[0.2em] text-[hsl(var(--primary))] uppercase block mb-2 font-medium">
            04 / Verified History
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Professional Experience
          </h2>
          <p className="mt-2 text-sm text-muted-foreground font-light max-w-lg">
            4+ years of production software engineering across fast-paced product teams.
          </p>
        </div>

        {/* Experience List */}
        <div>
          {timeline.map((item, index) => {
            const { metrics, stack } = getRoleHighlights(item.company);

            return (
              <div key={item.company}>
                {/* Horizontal Divider Drawing Across on Scroll */}
                <motion.div
                  initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: "left" }}
                  className="h-[1px] bg-foreground/[0.08]"
                />

                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="py-10 sm:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start"
                >
                  {/* Column 1: Date & Index */}
                  <div className="md:col-span-3 space-y-1.5">
                    <span className="font-mono text-[11px] text-[hsl(var(--primary))] font-semibold block">
                      0{index + 1}
                    </span>
                    <span className="font-mono text-sm text-foreground/90 font-medium block">
                      {item.period}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground block">
                      {item.location}
                    </span>
                  </div>

                  {/* Column 2: Role, Company & Understated Metric Evidence */}
                  <div className="md:col-span-4 space-y-3">
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm font-semibold text-[hsl(var(--primary))] mt-0.5">
                        {item.company}
                      </p>
                    </div>

                    {/* Understated Typography Evidence (No rounded UI badges) */}
                    {metrics.length > 0 && (
                      <div className="pt-1 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs">
                        {metrics.map((metric, mIdx) => (
                          <span key={mIdx} className="flex items-center gap-1.5 text-muted-foreground">
                            <span className="text-[hsl(var(--primary))] font-semibold">↳</span>
                            <span className="text-foreground/90 font-medium">{metric}</span>
                          </span>
                        ))}
                      </div>
                    )}

                    {stack && (
                      <p className="font-mono text-[11px] text-muted-foreground/60 pt-1">
                        {stack}
                      </p>
                    )}
                  </div>

                  {/* Column 3: Impact Narrative */}
                  <div className="md:col-span-5">
                    <ul className="space-y-3">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed font-light text-pretty">
                          <span className="mt-2 h-1 w-1 rounded-full bg-[hsl(var(--primary))]/60 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            );
          })}

          {/* Final Divider */}
          <motion.div
            initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
            className="h-[1px] bg-foreground/[0.08]"
          />
        </div>
      </div>
    </section>
  );
}
