import { Helmet } from "react-helmet-async";
import { Code2, Database, Layers, Server, Smartphone, Terminal, Cpu } from "lucide-react";
import PublicLayout from "@/components/layout/PublicLayout";
import { skillCategories } from "@/data/siteData";

export default function Services() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming":
        return <Terminal size={16} className="text-[hsl(var(--primary))]" />;
      case "Frontend":
        return <Code2 size={16} className="text-[hsl(var(--primary))]" />;
      case "Mobile":
        return <Smartphone size={16} className="text-[hsl(var(--primary))]" />;
      case "Backend & APIs":
        return <Server size={16} className="text-[hsl(var(--primary))]" />;
      case "Data":
        return <Database size={16} className="text-[hsl(var(--primary))]" />;
      case "AI / ML":
        return <Cpu size={16} className="text-[hsl(var(--primary))]" />;
      case "Cloud & DevOps":
        return <Layers size={16} className="text-[hsl(var(--primary))]" />;
      default:
        return <Code2 size={16} className="text-[hsl(var(--primary))]" />;
    }
  };

  return (
    <PublicLayout>
      <Helmet>
        <title>Capabilities & Architecture | Muhammad Usman — Full Stack Software Engineer · AI/ML Engineering</title>
        <meta
          name="description"
          content="Engineering capabilities, technical stack, and software development proficiencies of Muhammad Usman — Full Stack Software Engineer transitioning into AI/ML."
        />
        <link rel="canonical" href="https://musman-portfolio-one.vercel.app/services" />
      </Helmet>

      {/* Header */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 border-b border-foreground/[0.06]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 space-y-4">
          <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase block">
            Capabilities
          </span>

          <div className="space-y-2">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Technical Proficiencies & Systems Architecture
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl text-pretty font-light">
              Full-stack software engineering backed by 4+ years of production experience across web applications, REST & WebSocket APIs, and expanding AI/ML pipelines.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Capabilities Rows */}
      <section className="py-16 md:py-24 border-b border-foreground/[0.06]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="border-t border-b border-foreground/[0.06] divide-y divide-foreground/[0.06]">
            {skillCategories.map((group, idx) => (
              <div
                key={group.category}
                className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start"
              >
                {/* Column 1: Index, Icon & Category */}
                <div className="md:col-span-3 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-muted-foreground/70">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="inline-flex items-center justify-center">
                      {getCategoryIcon(group.category)}
                    </span>
                    <h2 className="font-display text-base font-bold text-foreground tracking-tight">
                      {group.category}
                    </h2>
                  </div>
                </div>

                {/* Column 2: Scope & Description */}
                <div className="md:col-span-4 text-sm text-muted-foreground leading-relaxed text-pretty font-light">
                  {group.description}
                </div>

                {/* Column 3: Technologies & Stack */}
                <div className="md:col-span-5 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-xs px-2.5 py-1 rounded-sm bg-foreground/[0.04] text-foreground/90 border border-foreground/[0.08]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
