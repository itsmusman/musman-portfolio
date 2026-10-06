import { motion, useReducedMotion } from "framer-motion";
import { educationAndTraining } from "@/data/siteData";

export default function EditorialEducation() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="education"
      aria-label="Education and Qualifications"
      className="py-20 md:py-32 border-b border-foreground/[0.06] scroll-mt-16"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="mb-12 sm:mb-16">
          <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase block mb-2">
            Credentials
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Formal Education
          </h2>
        </div>

        <div className="border-t border-foreground/[0.06] divide-y divide-foreground/[0.06]">
          {educationAndTraining.map((item, index) => (
            <motion.div
              key={index}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
            >
              {/* Column 1: Period */}
              <div className="md:col-span-3 font-mono text-xs sm:text-sm text-muted-foreground/80">
                {item.period}
              </div>

              {/* Column 2: Title & Institution */}
              <div className="md:col-span-4 space-y-1">
                <h3 className="font-display text-base sm:text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-[hsl(var(--primary))] font-medium">
                  {item.institution}
                </p>
              </div>

              {/* Column 3: Description */}
              <div className="md:col-span-5 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
