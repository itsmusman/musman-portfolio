import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, FileText } from "lucide-react";
import { profile } from "@/data/siteData";

export default function EditorialAbout() {
  const shouldReduceMotion = useReducedMotion();

  const highlights = [
    { label: "Experience", value: "4+ Years in Production" },
    { label: "Core Foundation", value: "React · TypeScript · Python · FastAPI" },
    { label: "Active Direction", value: "Applied AI / Machine Learning" },
    { label: "Location", value: "Lahore, Pakistan (Remote / Global)" },
  ];

  return (
    <section
      id="about"
      aria-label="About Muhammad Usman"
      className="py-20 md:py-32 border-b border-foreground/[0.06] scroll-mt-16 select-none"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="mb-12 sm:mb-16">
          <span className="font-mono text-[11px] tracking-[0.2em] text-[hsl(var(--primary))] uppercase block mb-2 font-medium">
            07 / Personal Positioning
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Main Narrative (7 columns) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Primary Editorial Statement */}
            <p className="font-display text-xl sm:text-2xl text-foreground font-semibold leading-relaxed tracking-tight text-pretty">
              "Engineering reliable digital products across diverse domains — with a disciplined foundation in full stack development and an active focus on machine learning."
            </p>

            <div className="space-y-4 text-[15px] sm:text-base text-muted-foreground leading-relaxed font-light text-pretty">
              <p>
                Over the past 4+ years, I have built web and mobile applications across SaaS, healthcare, e-commerce, fintech, and Web3 products. My engineering focus centers on clean system design, asynchronous data handling, and optimizing frontend-to-backend workflows.
              </p>
              <p>
                Currently, I am expanding deeper into AI/ML engineering through hands-on learning in the NAVTTC-funded NIAI program, strengthening my Python foundations, data processing pipelines, and machine learning model integrations.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 font-display text-sm font-semibold text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-colors"
              >
                <FileText size={14} className="text-[hsl(var(--primary))]" />
                <span>Read Full Resume</span>
                <ArrowDownRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 text-[hsl(var(--primary))]" />
              </a>
            </div>
          </motion.div>

          {/* At a Glance Panel (5 columns) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-foreground/[0.08] pt-8 lg:pt-0 lg:pl-10 space-y-6"
          >
            <span className="font-mono text-[10px] tracking-[0.2em] text-[hsl(var(--primary))] uppercase block font-semibold">
              At a Glance
            </span>

            <div className="space-y-6">
              {highlights.map((item) => (
                <div key={item.label} className="space-y-1">
                  <p className="font-mono text-[11px] text-muted-foreground/70 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="font-display text-sm sm:text-base font-semibold text-foreground">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
