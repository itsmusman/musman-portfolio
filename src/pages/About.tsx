import { Helmet } from "react-helmet-async";
import { ArrowRight, FileDown } from "lucide-react";
import PublicLayout from "@/components/layout/PublicLayout";
import ProfilePhotoFrame from "@/components/ui/ProfilePhotoFrame";
import {
  profile,
  timeline,
  continuingDevelopment,
  educationAndTraining,
  skillCategories,
} from "@/data/siteData";

export default function About() {
  return (
    <PublicLayout>
      <Helmet>
        <title>About | Muhammad Usman — Full Stack Software Engineer · AI/ML Engineering</title>
        <meta
          name="description"
          content="Learn about Muhammad Usman: Full Stack Software Engineer with 4+ years of professional experience across React, Next.js, Node.js, Python, and FastAPI, actively transitioning into AI/ML Engineering."
        />
        <link rel="canonical" href="https://musman-portfolio-one.vercel.app/about" />
      </Helmet>

      {/* Hero / About Header */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-foreground/[0.06]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-8 space-y-6">
              <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase block">
                About
              </span>

              <div className="space-y-2">
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.12]">
                  Muhammad Usman
                </h1>
                <p className="text-lg sm:text-xl font-medium text-foreground/85 flex flex-wrap items-center gap-2">
                  <span>Full Stack Software Engineer</span>
                  <span className="text-foreground/20">·</span>
                  <span className="font-mono text-sm text-[hsl(var(--primary))]">Expanding into AI/ML</span>
                </p>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty max-w-2xl font-light">
                {profile.aboutParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-sm bg-foreground text-background hover:bg-foreground/90 transition-colors"
                >
                  <FileDown size={15} /> Download Resume
                </a>

                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium rounded-sm border border-foreground/15 bg-foreground/[0.04] hover:bg-foreground/[0.08] text-foreground transition-all"
                >
                  Get in Touch <ArrowRight size={15} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <ProfilePhotoFrame />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline (3-Column Editorial Grid) */}
      <section className="py-20 md:py-28 border-b border-foreground/[0.06]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase block">
              Career Timeline
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Work Experience
            </h2>
          </div>

          <div className="border-t border-b border-foreground/[0.06] divide-y divide-foreground/[0.06]">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
              >
                <div className="md:col-span-3 font-mono text-xs sm:text-sm text-muted-foreground">
                  {item.period}
                </div>

                <div className="md:col-span-4 space-y-1">
                  <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm font-medium text-[hsl(var(--primary))]">{item.company}</p>
                  <p className="text-xs text-muted-foreground">{item.location}</p>
                </div>

                <div className="md:col-span-5">
                  <ul className="space-y-2.5 text-sm text-muted-foreground leading-relaxed">
                    {item.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-pretty">
                        <span className="mt-2 h-1 w-1 rounded-full bg-[hsl(var(--primary))]/60 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Continuing Development */}
          <div className="pt-10 border-t border-foreground/[0.06]">
            <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase block mb-6">
              Continuing Development
            </span>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start py-4">
              <div className="md:col-span-3 font-mono text-xs sm:text-sm text-muted-foreground">
                <span>{continuingDevelopment.duration}</span>
                <p className="text-xs text-[hsl(var(--primary))] mt-1 font-mono">{continuingDevelopment.status}</p>
              </div>

              <div className="md:col-span-4 space-y-1">
                <h4 className="font-display text-base font-bold text-foreground">{continuingDevelopment.title}</h4>
                <p className="text-sm text-foreground/80">{continuingDevelopment.institution}</p>
                <p className="font-mono text-xs text-muted-foreground">{continuingDevelopment.program}</p>
              </div>

              <div className="md:col-span-5 text-sm text-muted-foreground leading-relaxed text-pretty">
                {continuingDevelopment.description}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 md:py-24 border-b border-foreground/[0.06]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase block">
              Credentials
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Education & Programs
            </h2>
          </div>

          <div className="border-t border-b border-foreground/[0.06] divide-y divide-foreground/[0.06]">
            {educationAndTraining.map((item, index) => (
              <div
                key={index}
                className="py-5 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-baseline"
              >
                <div className="md:col-span-3 font-mono text-xs sm:text-sm text-muted-foreground">
                  {item.period}
                </div>
                <div className="md:col-span-4 space-y-0.5">
                  <h3 className="font-display text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="text-xs text-[hsl(var(--primary))]">{item.institution}</p>
                </div>
                <div className="md:col-span-5 text-xs sm:text-sm text-muted-foreground leading-relaxed text-pretty">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Overview */}
      <section className="py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase block">
              Skills
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Technical Stack
            </h2>
          </div>

          <div className="border-t border-b border-foreground/[0.06] divide-y divide-foreground/[0.06]">
            {skillCategories.map((group, idx) => (
              <div
                key={idx}
                className="py-4 sm:py-5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-baseline"
              >
                <div className="md:col-span-3 font-display font-semibold text-sm text-foreground">
                  {group.category}
                </div>
                <div className="md:col-span-9 text-sm text-muted-foreground font-normal leading-relaxed">
                  {group.skills.join("  ·  ")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
