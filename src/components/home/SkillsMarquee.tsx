import { useReducedMotion } from "framer-motion";

const marqueeTech = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "React Native",
  "AI / ML",
  "REST APIs",
  "WebSockets",
  "Git",
  "GitHub",
];

export default function SkillsMarquee() {
  const shouldReduceMotion = useReducedMotion();

  // Duplicate for seamless infinite loop
  const items = [...marqueeTech, ...marqueeTech];

  return (
    <div
      aria-label="Core Technical Stack Ticker"
      className="py-7 border-b border-foreground/[0.06] overflow-hidden select-none bg-background/60"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 mb-3">
        <span className="text-[10px] font-mono tracking-[0.2em] text-muted-foreground/60 uppercase block">
          Core Technologies & Infrastructure
        </span>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Soft edge masks */}
        <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className={shouldReduceMotion ? "flex flex-wrap gap-8 px-6" : "animate-marquee flex items-center"}>
          {items.map((tech, idx) => (
            <div
              key={`${tech}-${idx}`}
              className="flex items-center gap-6 sm:gap-8 shrink-0 pr-6 sm:pr-8"
            >
              <span className="font-mono text-xs sm:text-[13px] tracking-wider text-muted-foreground hover:text-foreground transition-colors cursor-default">
                {tech}
              </span>
              <span className="text-foreground/15 text-xs">/</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
