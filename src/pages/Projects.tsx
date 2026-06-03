import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import PublicLayout from "@/components/layout/PublicLayout";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import OptimizedImage from "@/components/ui/OptimizedImage";
import MobileCarousel from "@/components/ui/MobileCarousel";
import ExpandableText from "@/components/ui/ExpandableText";
import { projects } from "@/data/siteData";
import { getProjectMainImage } from "@/data/projectImages";

export default function Projects() {
  return (
    <PublicLayout>
      <Helmet>
        <title>Projects | Muhammad Usman — AI-Augmented Senior Full Stack Engineer</title>
        <meta name="description" content="Explore projects by Muhammad Usman — AI-augmented Senior Full Stack Engineer. Showcase of web, mobile, and server-side applications built using React, Next.js, Node.js, Python, and third-party AI APIs." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[128px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A collection of work that showcases my skills and passion
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <Section className="py-24">
        <div className="container mx-auto px-4">
          {projects.length > 0 ? (
            <>
              {/* Mobile Carousel */}
              <div className="md:hidden">
                <MobileCarousel showDots={true} showArrows={false}>
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="glass-card overflow-hidden group"
                    >
                      {/* Project Image - Clickable */}
                      <Link to={`/projects/${project.id}`} className="block">
                        <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                          {(() => {
                            const mainImage = getProjectMainImage(project.id);
                            if (mainImage) {
                              return (
                                <OptimizedImage
                                  src={mainImage}
                                  alt={project.title}
                                  loading="lazy"
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  skeletonClassName="rounded-none"
                                />
                              );
                            }
                            return (
                              <div className="w-full h-full flex items-center justify-center">
                                <span className="text-4xl">🚀</span>
                              </div>
                            );
                          })()}
                          {/* Featured Badge */}
                          {project.featured && (
                            <div className="absolute top-3 left-3">
                              <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                            </div>
                          )}
                        </div>
                      </Link>

                      {/* Project Info */}
                      <div className="p-6">
                        <Link to={`/projects/${project.id}`}>
                          <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">{project.title}</h3>
                        </Link>
                        <ExpandableText text={project.description} maxLength={100} mobileOnly={true} />
                        {project.impact?.[0] && (
                          <p className="text-primary text-xs font-medium leading-relaxed mt-3">
                            {project.impact[0]}
                          </p>
                        )}
                        
                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4 mt-4">
                          {project.techStack?.slice(0, 4).map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.techStack && project.techStack.length > 4 && (
                            <Badge variant="secondary" className="text-xs">
                              +{project.techStack.length - 4}
                            </Badge>
                          )}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3">
                          <Button asChild variant="outline" size="sm">
                            <Link to={`/projects/${project.id}`}>View Details</Link>
                          </Button>
                          {project.liveUrl && (
                            <Button asChild size="sm" variant="ghost" className="gap-1">
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink size={14} /> Live
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </MobileCarousel>
              </div>

              {/* Desktop Grid */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="glass-card overflow-hidden group"
                  >
                    {/* Project Image - Clickable */}
                    <Link to={`/projects/${project.id}`} className="block">
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                        {(() => {
                          const mainImage = getProjectMainImage(project.id);
                          if (mainImage) {
                            return (
                              <OptimizedImage
                                src={mainImage}
                                alt={project.title}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                skeletonClassName="rounded-none"
                              />
                            );
                          }
                          return (
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="text-4xl">🚀</span>
                            </div>
                          );
                        })()}
                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute top-3 left-3">
                            <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                          </div>
                        )}
                      </div>
                    </Link>

                    {/* Project Info */}
                    <div className="p-6">
                      <Link to={`/projects/${project.id}`}>
                        <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">{project.title}</h3>
                      </Link>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                      {project.impact?.[0] && (
                        <p className="text-primary text-xs font-medium leading-relaxed mb-4 line-clamp-2">
                          {project.impact[0]}
                        </p>
                      )}
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack?.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.techStack && project.techStack.length > 4 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.techStack.length - 4}
                          </Badge>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-3">
                        <Button asChild variant="outline" size="sm">
                          <Link to={`/projects/${project.id}`}>View Details</Link>
                        </Button>
                        {project.liveUrl && (
                          <Button asChild size="sm" variant="ghost" className="gap-1">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={14} /> Live
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No projects yet. Check back soon!</p>
            </div>
          )}
        </div>
      </Section>
    </PublicLayout>
  );
}
