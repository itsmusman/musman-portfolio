import { profile } from "@/data/siteData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/[0.06] py-12 text-sm text-muted-foreground">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display font-bold text-foreground text-base tracking-tight">{profile.name}</p>
          <p className="text-xs text-muted-foreground mt-0.5 font-mono">
            Full Stack Software Engineer · AI/ML Engineering
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
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
            className="text-[hsl(var(--primary))] hover:text-foreground transition-colors"
          >
            Resume ↗
          </a>
        </div>

        <p className="text-xs text-muted-foreground/60 font-mono">
          © {currentYear} {profile.name}.
        </p>
      </div>
    </footer>
  );
}
