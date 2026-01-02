import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, FileDown, Mail, Code, Palette, Zap, Globe, Smartphone, Database, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PublicLayout from "@/components/layout/PublicLayout";
import { Typewriter, TextReveal } from "@/components/ui/typewriter";
import { Badge } from "@/components/ui/badge";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { profile, services, projects } from "@/data/siteData";
import { getProjectMainImage } from "@/data/projectImages";
import profileImage from "@/assets/profile-pic.png";

const features = [
  { icon: Code, title: "Clean Code", description: "Well-structured, maintainable codebases" },
  { icon: Palette, title: "Beautiful UI", description: "Stunning, pixel-perfect interfaces" },
  { icon: Zap, title: "Fast Performance", description: "Optimized for speed and efficiency" },
  { icon: Globe, title: "Responsive", description: "Perfect on all devices and screens" },
];

const iconMap: Record<string, any> = {
  Code,
  Palette,
  Zap,
  MessageSquare,
  Smartphone,
  Database,
  Globe,
};

export default function Index() {
  return (
    <PublicLayout>
      <Helmet>
        <title>{profile.name} | {profile.title}</title>
        <meta name="description" content={profile.bio} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden py-24">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5" />
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary text-sm font-semibold tracking-wide mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Available for freelance work
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Hi, I'm <span className="gradient-text">{profile.name}</span>
              </h1>
              <div className="text-xl md:text-2xl text-primary font-semibold h-8">
                <Typewriter 
                  words={["Software Engineer", "React.js Expert", "Next.js Developer", "React Native Developer", "TypeScript Specialist"]}
                  typingSpeed={80}
                  deletingSpeed={40}
                  delayBetweenWords={2500}
                />
              </div>
            </motion.div>

            {/* Main Card - Same as About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-8 md:p-12"
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch">
                {/* Profile Image */}
                <div className="relative flex-shrink-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-accent p-[3px]">
                      <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                        {profileImage ? (
                          <OptimizedImage
                            src={profileImage}
                            alt={profile.name}
                            priority={true}
                            loading="eager"
                            className="w-full h-full object-cover rounded-2xl"
                            skeletonClassName="rounded-2xl"
                          />
                        ) : (
                          <div className="text-7xl md:text-8xl">👨‍💻</div>
                        )}
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-primary/30 rounded-xl -z-10" />
                    <div className="absolute -top-3 -left-3 w-12 h-12 bg-accent/30 rounded-lg -z-10" />
                  </div>
                </div>

                {/* Bio Content */}
                <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
                  <p className="text-primary font-bold text-lg md:text-xl mb-4 tracking-wide">{profile.title}</p>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    {profile.bio}
                  </p>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
                <div className="flex items-center justify-center gap-4 p-5 rounded-xl bg-background/50 border border-border hover:border-primary/50 transition-colors">
                  <div className="text-center">
                    <p className="text-3xl md:text-4xl font-bold gradient-text">5+</p>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">Years Experience</p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4 p-5 rounded-xl bg-background/50 border border-border hover:border-primary/50 transition-colors">
                  <div className="text-center">
                    <p className="text-3xl md:text-4xl font-bold gradient-text">50+</p>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">Projects Completed</p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4 p-5 rounded-xl bg-background/50 border border-border hover:border-primary/50 transition-colors">
                  <div className="text-center">
                    <p className="text-3xl md:text-4xl font-bold gradient-text">30+</p>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">Happy Clients</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center mt-10">
                <Button asChild size="lg" className="glow text-base px-8 h-12">
                  <Link to="/projects">
                    View My Work <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
                
                <Button asChild variant="secondary" size="lg" className="text-base px-6 h-12 border border-border">
                  <Link to="/contact">
                    <Mail className="mr-2" size={18} /> Get in Touch
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold mb-4"
            >
              What I <span className="gradient-text">Deliver</span>
            </motion.h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building exceptional digital experiences with modern technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center group hover:bg-primary/5 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      {services.length > 0 && (
        <section id="services" className="py-24">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-display font-bold mb-4"
              >
                My <span className="gradient-text">Services</span>
              </motion.h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive frontend development solutions tailored to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.slice(0, 6).map((service, index) => {
                const IconComponent = iconMap[service.icon] || Code;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="glass-card p-8 hover:border-primary/50 transition-all group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                      <IconComponent className="text-primary" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {projects.length > 0 && (
        <section id="projects" className="py-24 bg-card/50">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-display font-bold mb-4"
              >
                My <span className="gradient-text">Projects</span>
              </motion.h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A showcase of my recent work and accomplishments
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {projects.slice(0, 4).map((project, index) => {
                const projectImage = getProjectMainImage(project.id);
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="glass-card overflow-hidden group flex flex-col"
                  >
                    <Link to={`/projects/${project.id}`} className="block">
                      <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                        {projectImage ? (
                          <OptimizedImage
                            src={projectImage}
                            alt={project.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            skeletonClassName="rounded-none"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-4xl">
                            💻
                          </div>
                        )}
                        {project.featured && (
                          <div className="absolute top-2 left-2">
                            <Badge className="bg-primary text-primary-foreground text-xs">Featured</Badge>
                          </div>
                        )}
                        {project.liveUrl && (
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                            <Button asChild size="sm" className="bg-primary/90 hover:bg-primary">
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                Live Demo <ArrowRight className="ml-1" size={14} />
                              </a>
                            </Button>
                          </div>
                        )}
                      </div>
                    </Link>
                    <div className="p-5">
                      <Link to={`/projects/${project.id}`}>
                        <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors">{project.title}</h3>
                      </Link>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack?.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack && project.techStack.length > 3 && (
                          <span className="px-2 py-0.5 rounded-md bg-muted text-muted-foreground text-xs">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button asChild variant="outline" size="lg">
                <Link to="/projects">View All Projects <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Have a project in mind? I'd love to help bring your ideas to life.
            </p>
            <Button asChild size="lg" className="glow text-base px-8">
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PublicLayout>
  );
}
