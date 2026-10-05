import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowUpRight, Code2, Database, Layers, Server, Smartphone, Terminal, Cpu } from "lucide-react";
import PublicLayout from "@/components/layout/PublicLayout";
import { skillCategories, profile } from "@/data/siteData";

export default function Services() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming":
        return <Terminal size={16} className="text-teal-400" />;
      case "Frontend":
        return <Code2 size={16} className="text-teal-400" />;
      case "Mobile":
        return <Smartphone size={16} className="text-teal-400" />;
      case "Backend & APIs":
        return <Server size={16} className="text-teal-400" />;
      case "Data":
        return <Database size={16} className="text-teal-400" />;
      case "AI / ML":
        return <Cpu size={16} className="text-teal-400" />;
      case "Cloud & DevOps":
        return <Layers size={16} className="text-teal-400" />;
      default:
        return <Code2 size={16} className="text-teal-400" />;
    }
  };

  return (
    <PublicLayout>
      <Helmet>
        <title>Capabilities & Architecture | Muhammad Usman — Full Stack Software Engineer</title>
        <meta
          name="description"
          content="Engineering capabilities, technical stack, and software development proficiencies of Muhammad Usman — Full Stack Software Engineer transitioning into AI/ML."
        />
        <link rel="canonical" href="https://musman-portfolio-one.vercel.app/services" />
      </Helmet>

      {/* Header */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-4">
          <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
            Engineering Capabilities
          </p>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Technical Proficiencies & Systems Architecture
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl text-pretty font-normal">
              Full-stack software engineering backed by 4+ years of production experience across web applications, REST & WebSocket APIs, and expanding AI/ML pipelines.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Capabilities Rows */}
      <section className="py-16 md:py-24 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="border-t border-b border-white/[0.08] divide-y divide-white/[0.08]">
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
                    <h2 className="text-base font-bold text-foreground tracking-tight">
                      {group.category}
                    </h2>
                  </div>
                </div>

                {/* Column 2: Scope & Description */}
                <div className="md:col-span-4 text-sm text-muted-foreground leading-relaxed text-pretty">
                  {group.description}
                </div>

                {/* Column 3: Technologies & Stack */}
                <div className="md:col-span-5 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-white/[0.04] text-foreground/90 border border-white/[0.08]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Editorial CTA */}
          <div className="mt-16 sm:mt-20 pt-10 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-foreground tracking-tight">
                Looking to discuss engineering roles or architecture?
              </h3>
              <p className="text-sm text-muted-foreground">
                Available for full-stack and applied AI/ML engineering roles.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-foreground bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/25 rounded-md transition-all"
              >
                <span>Email Usman</span>
                <ArrowUpRight size={13} className="text-teal-400" />
              </a>
              <Link
                to="/projects"
                className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
