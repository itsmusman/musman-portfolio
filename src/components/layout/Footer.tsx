import { profile } from "@/data/siteData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] py-12 text-sm text-muted-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-medium text-foreground text-base tracking-tight">{profile.name}</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Full Stack Software Engineer · AI/ML Engineering Transition
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors"
          >
            Resume
          </a>
        </div>

        <p className="text-xs text-muted-foreground/80 font-mono">
          © {currentYear} Muhammad Usman.
        </p>
      </div>
    </footer>
  );
}
