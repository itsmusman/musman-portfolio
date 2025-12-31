import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft, ChevronRight } from "lucide-react";
import PublicLayout from "@/components/layout/PublicLayout";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/siteData";
import { getProjectImages, getProjectMainImage } from "@/data/projectImages";
import ProjectImageGallery from "@/components/projects/ProjectImageGallery";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <PublicLayout>
        <Section className="py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/projects">
                <ArrowLeft size={16} className="mr-2" /> Back to Projects
              </Link>
            </Button>
          </div>
        </Section>
      </PublicLayout>
    );
  }

  // Get related projects (excluding current)
  const relatedProjects = projects.filter((p) => p.id !== id).slice(0, 3);
  
  // Get project images
  const projectImages = id ? getProjectImages(id) : [];

  return (
    <PublicLayout>
      <Helmet>
        <title>{project.title} | Muhammad Usman - Portfolio</title>
        <meta name="description" content={project.description} />
      </Helmet>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
          <ChevronRight size={14} />
          <span className="text-foreground">{project.title}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[128px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {/* Back Button */}
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={16} /> Back to Projects
            </Link>

            {/* Project Header */}
            <div className="flex flex-wrap items-start gap-4 mb-6">
              <h1 className="text-4xl md:text-5xl font-display font-bold">
                {project.title}
              </h1>
              {project.featured && (
                <Badge className="bg-primary text-primary-foreground text-sm">Featured</Badge>
              )}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack?.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Project Images Gallery */}
            <div className="mb-8 relative">
              <ProjectImageGallery images={projectImages} projectTitle={project.title} />
            </div>

            {/* Actions */}
            {project.liveUrl && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-12"
              >
                <Button asChild size="lg" className="gap-2">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={18} /> Visit Live Site
                  </a>
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <Section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-6">About This Project</h2>
              <div className="glass-card p-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>

            {/* Tech Stack Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Technologies Used</h2>
              <div className="glass-card p-8">
                <div className="flex flex-wrap gap-3">
                  {project.techStack?.map((tech) => (
                    <div 
                      key={tech} 
                      className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-foreground"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <Section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-8 text-center">Other Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedProjects.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={`/projects/${relatedProject.id}`}
                    className="block glass-card overflow-hidden group hover:border-primary/50 transition-colors"
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                      {(() => {
                        const mainImage = getProjectMainImage(relatedProject.id);
                        if (mainImage) {
                          return (
                            <img
                              src={mainImage}
                              alt={relatedProject.title}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          );
                        }
                        return (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-3xl">🚀</span>
                          </div>
                        );
                      })()}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-1 mt-1">
                        {relatedProject.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      )}
    </PublicLayout>
  );
}
