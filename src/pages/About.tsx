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
        <title>About | Muhammad Usman — Full Stack Software Engineer · AI/ML Transition</title>
        <meta
          name="description"
          content="Learn about Muhammad Usman: Full Stack Software Engineer with 4+ years of professional experience across React, Next.js, Node.js, Python, and FastAPI, actively transitioning into AI/ML Engineering."
        />
        <link rel="canonical" href="https://musman-portfolio-one.vercel.app/about" />
      </Helmet>

      {/* Hero / About Header */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-8 space-y-6">
              <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
                About
              </p>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.12]">
                  Muhammad Usman
                </h1>
                <p className="text-lg sm:text-xl font-medium text-foreground/85">
                  Full Stack Software Engineer <span className="text-white/20">·</span>{" "}
                  <span className="text-teal-400">AI/ML Engineering Transition</span>
                </p>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty max-w-2xl font-normal">
                {profile.aboutParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors"
                >
                  <FileDown size={15} /> Download Resume
                </a>

                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium rounded-md border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-foreground transition-all"
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
      <section className="py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="space-y-2">
            <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
              Career Timeline
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Work Experience
            </h2>
          </div>

          <div className="border-t border-b border-white/[0.08] divide-y divide-white/[0.08]">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
              >
                <div className="md:col-span-3 font-mono text-xs sm:text-sm text-muted-foreground">
                  {item.period}
                </div>

                <div className="md:col-span-4 space-y-0.5">
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm font-medium text-foreground/80">{item.company}</p>
                  <p className="text-xs text-muted-foreground">{item.location}</p>
                </div>

                <div className="md:col-span-5">
                  <ul className="space-y-2.5 text-sm text-muted-foreground leading-relaxed">
                    {item.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-pretty">
                        <span className="text-teal-400 mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-400 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Continuing Development */}
          <div className="pt-10 border-t border-white/[0.08]">
            <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-6">
              Continuing Development
            </p>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start py-4">
              <div className="md:col-span-3 font-mono text-xs sm:text-sm text-muted-foreground">
                <span>{continuingDevelopment.duration}</span>
                <p className="text-xs text-teal-400 mt-1 font-mono">{continuingDevelopment.status}</p>
              </div>

              <div className="md:col-span-4 space-y-0.5">
                <h4 className="text-base font-bold text-foreground">{continuingDevelopment.title}</h4>
                <p className="text-sm text-foreground/80">{continuingDevelopment.institution}</p>
                <p className="text-xs text-muted-foreground">{continuingDevelopment.program}</p>
              </div>

              <div className="md:col-span-5 text-sm text-muted-foreground leading-relaxed text-pretty">
                {continuingDevelopment.description}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 md:py-24 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="space-y-2">
            <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
              Credentials
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Education & Programs
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
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.institution}</p>
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="space-y-2">
            <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
              Skills
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Technical Stack
            </h2>
          </div>

          <div className="border-t border-b border-white/[0.08] divide-y divide-white/[0.08]">
            {skillCategories.map((group, idx) => (
              <div
                key={idx}
                className="py-4 sm:py-5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-baseline"
              >
                <div className="md:col-span-3 font-semibold text-sm text-foreground">
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
