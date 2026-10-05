import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PublicLayout from "@/components/layout/PublicLayout";
import HeroEditorial from "@/components/home/HeroEditorial";
import FeaturedProjectCarousel from "@/components/home/FeaturedProjectCarousel";
import SkillsMarquee from "@/components/home/SkillsMarquee";
import ProjectArchive from "@/components/home/ProjectArchive";
import ExperienceEditorial from "@/components/home/ExperienceEditorial";
import CurrentLearning from "@/components/home/CurrentLearning";
import {
  profile,
  skillCategories,
  educationAndTraining,
  contactInfo,
} from "@/data/siteData";

export default function Index() {
  const { toast } = useToast();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    toast({
      title: "Email copied",
      description: `${contactInfo.email} copied to clipboard.`,
    });
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Full Stack Software Engineer",
    description: profile.heroSummary,
    url: profile.portfolioUrl,
    sameAs: [profile.linkedin, profile.github],
    knowsAbout: [
      "Software Engineering",
      "Full Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "FastAPI",
      "Artificial Intelligence",
      "Machine Learning",
    ],
  };

  return (
    <PublicLayout>
      <Helmet>
        <title>Muhammad Usman — Full Stack Software Engineer | AI/ML Transition</title>
        <meta
          name="description"
          content="Portfolio of Muhammad Usman — Full Stack Software Engineer with 4+ years of professional experience across React, Next.js, Node.js, Python, and FastAPI, actively transitioning into AI/ML Engineering."
        />
        <link rel="canonical" href="https://musman-portfolio-one.vercel.app/" />
        <meta property="og:title" content="Muhammad Usman — Full Stack Software Engineer | AI/ML Transition" />
        <meta property="og:description" content="Portfolio of Muhammad Usman — Full Stack Software Engineer with 4+ years of experience across web and mobile applications, transitioning into AI/ML." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://musman-portfolio-one.vercel.app/" />
        <meta property="og:image" content="/social-preview.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Muhammad Usman — Full Stack Software Engineer | AI/ML Transition" />
        <meta name="twitter:description" content="Full Stack Software Engineer with 4+ years of professional experience building web and mobile applications, transitioning into AI/ML." />
        <meta name="twitter:image" content="/social-preview.jpeg" />
        <script type="application/ld+json">
          {JSON.stringify(personStructuredData)}
        </script>
      </Helmet>

      {/* 1. HERO SECTION (90-100vh, Confident Editorial Typography, Subtle Motion & Scroll Invitation) */}
      <HeroEditorial />

      {/* 2. FEATURED PROJECTS CAROUSEL (01-03, Autoplay Progress, Drag/Swipe, Hover Pointer Label) */}
      <FeaturedProjectCarousel />

      {/* 3. SKILLS MARQUEE (Typography-Only Infinite Ticker, Pauses on Hover) */}
      <SkillsMarquee />

      {/* 4. PROJECT ARCHIVE (Secondary Editorial Rows with Pointer-Follow Previews) */}
      <ProjectArchive />

      {/* 5. EXPERIENCE SECTION (3-Column Editorial Grid with Expanding Dividers & Sequential Reveals) */}
      <ExperienceEditorial />

      {/* 6. CURRENT LEARNING (AI/ML Upskilling, NIAI/NAVTTC, Subtle Accent Line) */}
      <CurrentLearning />

      {/* 7. FORMAL EDUCATION */}
      <section id="education" aria-label="Education" className="py-16 md:py-24 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="space-y-3 mb-10">
            <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
              Education & Learning
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Formal Education
            </h2>
          </div>

          <div className="border-t border-b border-white/[0.08] divide-y divide-white/[0.08]">
            {educationAndTraining.map((item, index) => (
              <div
                key={index}
                className="py-5 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-baseline"
              >
                <div className="md:col-span-3 font-mono text-xs sm:text-sm text-muted-foreground">
                  {item.period}
                </div>

                <div className="md:col-span-4 space-y-0.5">
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {item.institution}
                  </p>
                </div>

                <div className="md:col-span-5 text-xs sm:text-sm text-muted-foreground leading-relaxed text-pretty">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TECHNICAL PROFICIENCIES */}
      <section id="skills" aria-label="Technical Skills" className="py-20 md:py-28 border-b border-white/[0.08] scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="space-y-3 mb-12 sm:mb-16">
            <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
              Technical Proficiencies
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Technical Skills
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl text-pretty">
              Core technologies and tools utilized across production software engineering and AI/ML upskilling.
            </p>
          </div>

          <div className="border-t border-b border-white/[0.08] divide-y divide-white/[0.08]">
            {skillCategories.map((group, index) => (
              <div
                key={index}
                className="py-6 sm:py-7 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
              >
                <div className="md:col-span-3 text-base font-bold text-foreground tracking-tight">
                  {group.category}
                </div>
                <div className="md:col-span-4 text-xs sm:text-sm text-muted-foreground leading-relaxed text-pretty">
                  {group.description}
                </div>
                <div className="md:col-span-5 flex flex-wrap gap-1.5 pt-0.5">
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
            ))}
          </div>
        </div>
      </section>

      {/* 9. ABOUT SECTION */}
      <section id="about" aria-label="About" className="py-20 md:py-28 border-b border-white/[0.08] scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="space-y-3 mb-8">
            <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
              About
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              A little about me
            </h2>
          </div>

          <div className="max-w-2xl space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed font-normal text-pretty">
            {profile.aboutParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CONTACT SECTION */}
      <section id="contact" aria-label="Contact" className="py-20 md:py-28 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="space-y-4 max-w-xl">
            <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
              Contact
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Have a project or engineering opportunity?
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed text-pretty">
              I'm actively interested in full-stack software engineering and AI/ML engineering transition opportunities. Let's discuss how my background fits your team.
            </p>

            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-muted-foreground w-16">Email</span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-base font-semibold text-foreground hover:text-teal-400 transition-colors"
                >
                  {contactInfo.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1 ml-2 transition-colors"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <span className="text-teal-400 flex items-center gap-1 font-mono text-[11px]">
                      <Check size={13} /> Copied
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 font-mono text-[11px]">
                      <Copy size={13} /> Copy
                    </span>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-muted-foreground w-16">LinkedIn</span>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
                >
                  linkedin.com/in/m-usman01 <ArrowUpRight size={13} />
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-muted-foreground w-16">GitHub</span>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
                >
                  github.com/itsmusman <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
