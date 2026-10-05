import { useReducedMotion } from "framer-motion";

const skillsList = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "React Native",
  "AI / ML",
  "Redux Toolkit",
  "Web3",
  "Docker",
  "REST APIs",
  "Socket.io",
  "Tailwind CSS",
];

export default function SkillsMarquee() {
  const shouldReduceMotion = useReducedMotion();

  // Duplicate items for continuous seamless loop
  const marqueeItems = [...skillsList, ...skillsList];

  return (
    <div
      aria-label="Core Technical Stack"
      className="py-6 sm:py-8 border-b border-white/[0.08] overflow-hidden select-none bg-background/50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-2">
        <p className="text-[10px] font-mono tracking-widest text-muted-foreground/60 uppercase">
          Technologies & Frameworks
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Subtle fade edges for natural editorial blending */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className={shouldReduceMotion ? "flex flex-wrap gap-6 px-6" : "animate-marquee"}>
          {marqueeItems.map((skill, index) => (
            <div
              key={`${skill}-${index}`}
              className="flex items-center gap-6 sm:gap-8 shrink-0 pr-6 sm:pr-8"
            >
              <span className="font-mono text-xs sm:text-sm font-medium tracking-wider text-muted-foreground hover:text-foreground transition-colors cursor-default">
                {skill}
              </span>
              <span className="text-white/15 text-xs">/</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
