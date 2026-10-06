import { Helmet } from "react-helmet-async";
import PublicLayout from "@/components/layout/PublicLayout";
import HeroEditorial from "@/components/home/HeroEditorial";
import FeaturedProjectCarousel from "@/components/home/FeaturedProjectCarousel";
import SkillsMarquee from "@/components/home/SkillsMarquee";
import ProjectArchive from "@/components/home/ProjectArchive";
import ExperienceEditorial from "@/components/home/ExperienceEditorial";
import CurrentLearning from "@/components/home/CurrentLearning";
import EditorialEducation from "@/components/home/EditorialEducation";
import EditorialSkills from "@/components/home/EditorialSkills";
import EditorialAbout from "@/components/home/EditorialAbout";
import EditorialContact from "@/components/home/EditorialContact";
import IntroPreloader from "@/components/ui/IntroPreloader";
import { profile } from "@/data/siteData";

export default function Index() {
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer with 4+ years of professional experience across React, Next.js, Node.js, Python, and FastAPI, actively transitioning into AI/ML Engineering.",
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
        <title>Muhammad Usman — Full Stack Software Engineer | AI/ML Engineering</title>
        <meta
          name="description"
          content="Portfolio of Muhammad Usman — Full Stack Software Engineer with 4+ years of professional experience across React, Next.js, Node.js, Python, and FastAPI, actively transitioning into AI/ML Engineering."
        />
        <link rel="canonical" href="https://musman-portfolio-one.vercel.app/" />
        <meta property="og:title" content="Muhammad Usman — Full Stack Software Engineer | AI/ML Engineering" />
        <meta
          property="og:description"
          content="Portfolio of Muhammad Usman — Full Stack Software Engineer with 4+ years of professional experience across React, Next.js, Node.js, Python, and FastAPI, actively transitioning into AI/ML Engineering."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://musman-portfolio-one.vercel.app/" />
        <meta property="og:image" content="/social-preview.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Muhammad Usman — Full Stack Software Engineer | AI/ML Engineering" />
        <meta
          name="twitter:description"
          content="Full Stack Software Engineer with 4+ years of professional experience building web and mobile applications, transitioning into AI/ML."
        />
        <meta name="twitter:image" content="/social-preview.jpeg" />
        <script type="application/ld+json">
          {JSON.stringify(personStructuredData)}
        </script>
      </Helmet>

      {/* 0. INTRO PRELOADER (700ms short high-craft intro, bypassed on reduced-motion) */}
      <IntroPreloader />

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

      {/* 7. FORMAL EDUCATION (Editorial Credential Rows) */}
      <EditorialEducation />

      {/* 8. TECHNICAL PROFICIENCIES (Editorial Text-Based Multi-Column Grid) */}
      <EditorialSkills />

      {/* 9. ABOUT SECTION (Refined Engineer Narrative & Quick Highlights) */}
      <EditorialAbout />

      {/* 10. CONTACT SECTION (Minimal & Striking Editorial Typography) */}
      <EditorialContact />
    </PublicLayout>
  );
}
