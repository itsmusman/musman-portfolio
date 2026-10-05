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
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          The requested page could not be located.
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The link you followed may be broken or the page may have been moved.
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-foreground bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/25 rounded-md transition-all"
          >
            <ArrowLeft size={13} className="text-teal-400" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
