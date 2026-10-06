import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.error("404 Error: Non-existent route requested:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center space-y-4">
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          404 / Page Not Found
        </span>
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">
          The requested page could not be located.
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed font-light">
          The link you followed may be broken or the page may have been moved.
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-medium text-foreground bg-foreground/[0.04] hover:bg-foreground/[0.08] border border-foreground/10 rounded-sm transition-all"
          >
            <ArrowLeft size={13} className="text-[hsl(var(--primary))]" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
