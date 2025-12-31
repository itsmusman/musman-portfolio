import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar, FileDown } from "lucide-react";
import PublicLayout from "@/components/layout/PublicLayout";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { profile, skills, timeline } from "@/data/siteData";

export default function About() {
  return (
    <PublicLayout>
      <Helmet>
        <title>About | {profile.name} - {profile.title}</title>
        <meta name="description" content={`Learn about ${profile.name}, a ${profile.title} with ${profile.experience} in React, TypeScript, and modern web development.`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Passionate about creating exceptional digital experiences
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-8 md:p-12"
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                {/* Profile Image */}
                <div className="relative flex-shrink-0">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-accent p-1">
                    <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                      {profile.profileImageUrl ? (
                        <img
                          src={profile.profileImageUrl}
                          alt={profile.name}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      ) : (
                        <div className="text-6xl">👨‍💻</div>
                      )}
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-primary/30 rounded-xl -z-10" />
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-accent/30 rounded-lg -z-10" />
                </div>

                {/* Bio Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">{profile.name}</h2>
                  <p className="text-primary font-semibold text-lg mb-6">{profile.title}</p>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    {profile.bio}
                  </p>
                </div>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                <div className="flex items-center gap-4 p-5 rounded-xl bg-background/50 border border-border hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">Education</p>
                    <p className="font-semibold">{profile.education}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 rounded-xl bg-background/50 border border-border hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <Briefcase className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">Experience</p>
                    <p className="font-semibold">{profile.experience}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resume Download Section */}
      {profile.resumeUrl && (
        <Section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <div className="glass-card p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <FileDown className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Download My Resume</h3>
                <p className="text-muted-foreground mb-6">
                  Get a comprehensive overview of my skills, experience, and qualifications.
                </p>
                <Button asChild size="lg" className="glow">
                  <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                    <FileDown className="mr-2" size={18} /> Download Resume (PDF)
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </Section>
      )}

      {/* Skills Section */}
      <Section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Technical <span className="gradient-text">Skills</span>
              </h2>
              <p className="text-muted-foreground">
                Technologies I work with on a daily basis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      className="skill-bar-fill"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                My <span className="gradient-text">Journey</span>
              </h2>
              <p className="text-muted-foreground">
                Key milestones in my career
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20 pb-12 last:pb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                  
                  <div className="glass-card p-6">
                    <div className="flex items-center gap-2 text-primary text-sm mb-2">
                      <Calendar size={14} />
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{item.company}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </PublicLayout>
  );
}
