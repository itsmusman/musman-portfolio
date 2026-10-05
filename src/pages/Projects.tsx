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
        <title>Projects | Muhammad Usman — Full Stack Software Engineer · AI/ML Transition</title>
        <meta
          name="description"
          content="Production software engineering projects by Muhammad Usman: real-time trend discovery (Unsurfaced AI), e-commerce intelligence (Amaizing), crypto retirement platforms (BlockTrust), Web3 (XANA), and logistics (TruckUp)."
        />
        <link rel="canonical" href="https://musman-portfolio-one.vercel.app/projects" />
      </Helmet>

      {/* Header */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
          <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
            Engineering Portfolio
          </p>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Projects & Systems
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl text-pretty font-normal">
              9 curated applications across AI/ML data discovery, competitive intelligence, logistics dispatch, diagnostic health, and cross-platform mobile development.
            </p>
          </div>

          {/* Filter Navigation */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2 border-t border-white/[0.06] text-xs">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setActiveFilter(option)}
                className={`py-1 transition-colors ${
                  activeFilter === option
                    ? "text-foreground font-semibold border-b-2 border-teal-400"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Project List (No cards) */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="border-t border-b border-white/[0.08] divide-y divide-white/[0.08]">
            {filteredProjects.map((project) => {
              const projectImage = getProjectMainImage(project.id);

              return (
                <article
                  key={project.id}
                  className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
                >
                  {/* Left Column: Index & Category */}
                  <div className="lg:col-span-3 space-y-1">
                    <span className="font-mono text-xs text-muted-foreground">
                      {project.orderNumber}
                    </span>
                    <p className="text-xs font-mono text-teal-400">
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
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                      {project.title}
                    </h2>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty">
                      {project.description}
                    </p>

                    {project.contribution && (
                      <div className="pt-1">
                        <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-0.5">
                          My contribution:
                        </p>
                        <p className="text-sm text-foreground/90 font-medium">
                          {project.contribution}
                        </p>
                      </div>
                    )}

                    <div className="pt-2 text-xs font-mono text-muted-foreground">
                      {project.techStack.join(" · ")}
                    </div>

                    <div className="pt-3 flex items-center gap-4 text-xs font-medium">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-foreground hover:text-teal-400 transition-colors"
                        >
                          View Project <ArrowUpRight size={13} />
                        </a>
                      )}
                      <Link
                        to={`/projects/${project.id}`}
                        className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Architecture Details <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Real Image or Highlights */}
                  <div className="lg:col-span-4">
                    {projectImage ? (
                      <div className="rounded-lg overflow-hidden border border-white/10 bg-secondary/30 shadow-md">
                        <img
                          src={projectImage}
                          alt={`${project.title} screenshot`}
                          loading="lazy"
                          decoding="async"
                          className="w-full aspect-video object-cover object-top"
                        />
                      </div>
                    ) : (
                      <div className="rounded-lg border border-white/[0.08] bg-secondary/20 p-5 space-y-3">
                        <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                          Key Deliverables
                        </p>
                        <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed">
                          {project.impact.slice(0, 2).map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-pretty">
                              <span className="text-teal-400 mt-1 h-1.5 w-1.5 rounded-full bg-teal-400 shrink-0" />
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
