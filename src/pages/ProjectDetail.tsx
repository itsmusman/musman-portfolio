import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronRight, ExternalLink } from "lucide-react";
import PublicLayout from "@/components/layout/PublicLayout";
import { projects } from "@/data/siteData";
import { getProjectImages, getProjectMainImage } from "@/data/projectImages";
import ProjectImageGallery from "@/components/projects/ProjectImageGallery";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();

  // Lookup by slug ID or numeric legacy fallback
  const project = projects.find(
    (p) => p.id === id || p.orderNumber === id || (id === "1" && p.id === "xana")
  );

  if (!project) {
    return (
      <PublicLayout>
        <section className="py-32">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
            <h1 className="text-3xl font-bold">Project Not Found</h1>
            <p className="text-muted-foreground">The requested project could not be located.</p>
            <div className="pt-2">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm text-foreground hover:text-teal-400"
              >
                <ArrowLeft size={16} /> Back to Projects
              </Link>
            </div>
          </div>
        </section>
      </PublicLayout>
    );
  }

  const relatedProjects = projects.filter((p) => p.id !== project.id).slice(0, 3);
  const projectImages = getProjectImages(project.id);

  return (
    <PublicLayout>
      <Helmet>
        <title>{project.title} — Muhammad Usman | Project Architecture</title>
        <meta name="description" content={project.description} />
      </Helmet>

      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-4">
        <nav className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/projects" className="hover:text-foreground transition-colors">Projects</Link>
          <ChevronRight size={12} />
          <span className="text-foreground font-medium">{project.title}</span>
        </nav>
      </div>

      {/* Main Header */}
      <section className="py-8 md:py-14 border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
          <div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={13} /> Back to Projects
            </Link>
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
              <span className="text-muted-foreground">{project.orderNumber}</span>
              <span className="text-white/20">·</span>
              <span className="text-teal-400">{project.category}</span>
              {project.role && (
                <>
                  <span className="text-white/20">·</span>
                  <span className="text-muted-foreground">{project.role}</span>
                </>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed text-pretty font-normal">
              {project.description}
            </p>
          </div>

          {/* Action & Links */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                Visit Live Site <ExternalLink size={14} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium rounded-md border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-foreground transition-all"
              >
                View Repository <ArrowUpRight size={14} />
              </a>
            )}
          </div>

          {/* Gallery / Screenshot Preview */}
          <div className="pt-6">
            {projectImages.length > 0 ? (
              <ProjectImageGallery images={projectImages} projectTitle={project.title} />
            ) : (
              <div className="rounded-lg border border-white/[0.08] bg-secondary/20 p-8 space-y-4">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  System Overview
                </p>
                <p className="text-xl font-bold text-foreground">{project.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  {project.contribution || project.description}
                </p>
                <div className="pt-3 border-t border-white/[0.06] text-xs font-mono text-muted-foreground">
                  {project.techStack.join(" · ")}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Case Study Details */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-14">
          {/* Engineering Responsibilities & Impact */}
          {project.impact && project.impact.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-foreground">
                Engineering Responsibilities & Key Outcomes
              </h2>
              <div className="border-t border-b border-white/[0.08] divide-y divide-white/[0.08]">
                {project.impact.map((point, index) => (
                  <div key={index} className="py-3.5 flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="text-teal-400 mt-1 h-1.5 w-1.5 rounded-full bg-teal-400 shrink-0" />
                    <span className="text-pretty">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Problem & Solution Breakdown */}
          {project.caseStudy && (
            <div className="space-y-6">
              <h2 className="text-lg sm:text-xl font-bold text-foreground">
                Challenge & Architectural Approach
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border-t border-white/[0.08] pt-4 space-y-2">
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    The Challenge
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                    {project.caseStudy.challenge}
                  </p>
                </div>
                <div className="border-t border-white/[0.08] pt-4 space-y-2">
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    Technical Approach
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                    {project.caseStudy.approach}
                  </p>
                </div>
                <div className="border-t border-white/[0.08] pt-4 space-y-2">
                  <p className="font-mono text-xs uppercase tracking-wider text-teal-400 font-semibold">
                    Outcome
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                    {project.caseStudy.outcome}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-foreground">Technologies Used</h2>
            <div className="pt-2 text-sm text-muted-foreground font-mono">
              {project.techStack.join("  ·  ")}
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="pt-10 border-t border-white/[0.08] space-y-6">
              <h2 className="text-lg sm:text-xl font-bold text-foreground">Other Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProjects.map((rel) => {
                  return (
                    <Link
                      key={rel.id}
                      to={`/projects/${rel.id}`}
                      className="group border-t border-white/[0.08] pt-4 block space-y-1.5"
                    >
                      <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                        <span>{rel.orderNumber}</span>
                        <span>{rel.category}</span>
                      </div>
                      <p className="font-semibold text-foreground text-base group-hover:text-teal-400 transition-colors">
                        {rel.title}
                      </p>
                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {rel.description}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </PublicLayout>
  );
}
