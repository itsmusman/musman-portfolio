import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PublicLayout from "@/components/layout/PublicLayout";
import { projects } from "@/data/siteData";
import { getProjectMainImage } from "@/data/projectImages";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterOptions = ["All", "Featured", "AI / ML", "Full Stack Web", "Mobile", "Extensions"];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Featured") return project.featured;
    if (activeFilter === "AI / ML") {
      return (
        project.category.toLowerCase().includes("ai") ||
        project.techStack.some((t) => t.toLowerCase().includes("openai") || t.toLowerCase().includes("ai"))
      );
    }
    if (activeFilter === "Full Stack Web") {
      return (
        project.techStack.includes("React") ||
        project.techStack.includes("Next.js") ||
        project.techStack.includes("React.js") ||
        project.techStack.includes("Python")
      );
    }
    if (activeFilter === "Mobile") {
      return project.category.toLowerCase().includes("mobile") || project.techStack.includes("React Native");
    }
    if (activeFilter === "Extensions") {
      return project.category.toLowerCase().includes("extension");
    }
    return true;
  });

  return (
    <PublicLayout>
      <Helmet>
        <title>Projects | Muhammad Usman — Full Stack Software Engineer · AI/ML Engineering</title>
        <meta
          name="description"
          content="Production software engineering projects by Muhammad Usman: real-time trend discovery (Unsurfaced AI), e-commerce intelligence (Amaizing), crypto retirement platforms (BlockTrust), Web3 (XANA), and logistics (TruckUp)."
        />
        <link rel="canonical" href="https://musman-portfolio-one.vercel.app/projects" />
      </Helmet>

      {/* Header */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 border-b border-foreground/[0.06]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 space-y-6">
          <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase block">
            Portfolio
          </span>

          <div className="space-y-2">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Projects & Systems
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl text-pretty font-light">
              9 curated applications across AI/ML data discovery, competitive intelligence, logistics dispatch, diagnostic health, and cross-platform mobile development.
            </p>
          </div>

          {/* Filter Navigation */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-3 border-t border-foreground/[0.06] text-xs font-mono">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setActiveFilter(option)}
                className={`py-1 transition-colors ${
                  activeFilter === option
                    ? "text-foreground font-semibold border-b-2 border-[hsl(var(--primary))]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Project List */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="border-t border-b border-foreground/[0.06] divide-y divide-foreground/[0.06]">
            {filteredProjects.map((project) => {
              const projectImage = getProjectMainImage(project.id);

              return (
                <article
                  key={project.id}
                  className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
                >
                  {/* Left Column: Index & Category */}
                  <div className="lg:col-span-3 space-y-1">
                    <span className="font-mono text-xs text-muted-foreground/60 block">
                      {project.orderNumber}
                    </span>
                    <p className="font-mono text-xs text-[hsl(var(--primary))] font-medium">
                      {project.category}
                    </p>
                    {project.role && (
                      <p className="text-xs text-muted-foreground mt-1">
                        {project.role}
                      </p>
                    )}
                  </div>

                  {/* Center Column: Title, Description, Stack, Links */}
                  <div className="lg:col-span-5 space-y-3">
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                      {project.title}
                    </h2>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty font-light">
                      {project.description}
                    </p>

                    {project.contribution && (
                      <div className="pt-1">
                        <p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground/60 uppercase mb-0.5">
                          My contribution:
                        </p>
                        <p className="text-sm text-foreground/90 font-medium">
                          {project.contribution}
                        </p>
                      </div>
                    )}

                    <div className="pt-2 text-xs font-mono text-muted-foreground/70">
                      {project.techStack.join(" · ")}
                    </div>

                    <div className="pt-3 flex items-center gap-5 text-xs font-medium">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-foreground hover:text-[hsl(var(--primary))] transition-colors font-mono"
                        >
                          View Project <ArrowUpRight size={13} />
                        </a>
                      )}
                      <Link
                        to={`/projects/${project.id}`}
                        className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors font-mono"
                      >
                        Architecture Details <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Real Image or Highlights */}
                  <div className="lg:col-span-4">
                    {projectImage ? (
                      <div className="overflow-hidden border border-foreground/[0.08] bg-secondary/30">
                        <img
                          src={projectImage}
                          alt={`${project.title} screenshot`}
                          loading="lazy"
                          decoding="async"
                          className="w-full aspect-video object-cover object-top"
                        />
                      </div>
                    ) : (
                      <div className="border border-foreground/[0.06] bg-secondary/20 p-5 space-y-3">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70 block">
                          Key Deliverables
                        </span>
                        <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed">
                          {project.impact.slice(0, 2).map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-pretty">
                              <span className="mt-1.5 h-1 w-1 rounded-full bg-[hsl(var(--primary))]/60 shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
