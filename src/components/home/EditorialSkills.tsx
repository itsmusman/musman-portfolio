import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SkillGroup {
  name: string;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "HTML5", "CSS3 / Modern CSS"],
  },
  {
    name: "Frontend",
    items: ["React", "Next.js", "Redux Toolkit", "Tailwind CSS", "React Native"],
  },
  {
    name: "Backend",
    items: ["Node.js", "FastAPI", "REST APIs", "WebSockets / Socket.io"],
  },
  {
    name: "Data",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    name: "AI & ML",
    items: ["OpenAI API", "AI-assisted workflows", "ML fundamentals", "Prompt Engineering"],
  },
  {
    name: "Cloud & Tools",
    items: ["AWS S3", "Vercel", "Netlify", "Render", "Git & GitHub", "GitHub Actions", "Jest"],
  },
];

export default function EditorialSkills() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);

  return (
    <section
      id="skills"
      aria-label="Technical Proficiencies"
      className="py-20 md:py-32 border-b border-foreground/[0.06] scroll-mt-16 select-none"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="font-mono text-[11px] tracking-[0.2em] text-[hsl(var(--primary))] uppercase block mb-2 font-medium">
            06 / Technical Proficiencies
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Technical Stack
          </h2>
          <p className="mt-2 text-sm text-muted-foreground font-light max-w-lg">
            Core technologies and engineering infrastructure used across production systems and AI/ML upskilling.
          </p>
        </div>

        {/* Editorial Text-Based Grid with Category Focus Interaction */}
        <div
          onMouseLeave={() => setHoveredGroup(null)}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 border-t border-foreground/[0.08] pt-10"
        >
          {skillGroups.map((group, groupIndex) => {
            const isDimmed = hoveredGroup !== null && hoveredGroup !== group.name;

            return (
              <motion.div
                key={group.name}
                onMouseEnter={() => setHoveredGroup(group.name)}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.5,
                  delay: groupIndex * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`space-y-4 transition-opacity duration-300 ${
                  isDimmed ? "opacity-30" : "opacity-100"
                }`}
              >
                {/* Group Heading */}
                <div className="border-b border-foreground/[0.08] pb-2.5">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[hsl(var(--primary))] uppercase block mb-1">
                    0{groupIndex + 1}
                  </span>
                  <h3 className="font-display text-sm font-bold text-foreground tracking-tight">
                    {group.name}
                  </h3>
                </div>

                {/* Text Items (No rounded badges) */}
                <ul className="space-y-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-[13px] text-muted-foreground hover:text-foreground transition-colors leading-relaxed font-sans cursor-default flex items-center gap-1.5"
                    >
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
