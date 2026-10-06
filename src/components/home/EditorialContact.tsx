import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { contactInfo, profile } from "@/data/siteData";

export default function EditorialContact() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    toast({
      title: "Email Copied",
      description: `${contactInfo.email} copied to clipboard.`,
    });
    setTimeout(() => setCopied(false), 2400);
  };

  const contactLinks = [
    {
      label: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      isAction: true,
      action: handleCopyEmail,
      actionLabel: copied ? "Copied" : "Copy",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/m-usman01",
      href: contactInfo.linkedin,
    },
    {
      label: "GitHub",
      value: "github.com/itsmusman",
      href: contactInfo.github,
    },
  ];

  const EASE = [0.22, 1, 0.36, 1] as const;

  const headlineLines = ["LET'S BUILD", "SOMETHING", "USEFUL."];

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="py-24 md:py-36 scroll-mt-16 select-none"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="space-y-12">
          
          {/* Header & Line-by-Line Headline Reveal */}
          <div className="space-y-4 max-w-3xl">
            <span className="font-mono text-[11px] tracking-[0.2em] text-[hsl(var(--primary))] uppercase font-medium block">
              08 / Initiate Contact
            </span>

            {/* Large Typography Entering Line by Line */}
            <div className="space-y-0.5 pt-2">
              {headlineLines.map((line, idx) => (
                <div key={line} className="overflow-hidden">
                  <motion.h2
                    initial={shouldReduceMotion ? { y: 0 } : { y: "105%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.8,
                      delay: idx * 0.12,
                      ease: EASE,
                    }}
                    className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-[-0.03em] text-foreground leading-[0.92]"
                  >
                    {line}
                  </motion.h2>
                </div>
              ))}
            </div>

            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light pt-3 max-w-xl text-pretty"
            >
              Actively interested in full stack software engineering and AI/ML transition roles. 
              Let's discuss how my technical background fits your team.
            </motion.p>
          </div>

          {/* Large Premium Editorial Links */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
            className="border-t border-foreground/[0.08] divide-y divide-foreground/[0.08]"
          >
            {contactLinks.map((item) => (
              <div
                key={item.label}
                className="py-6 sm:py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs sm:text-sm text-muted-foreground/60 w-20">
                    {item.label}
                  </span>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground group-hover:text-[hsl(var(--primary))] transition-colors duration-200"
                  >
                    {item.value}
                  </a>
                </div>

                <div className="flex items-center gap-4 sm:justify-end">
                  {item.isAction && (
                    <button
                      onClick={item.action}
                      type="button"
                      aria-label="Copy email address"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-sm border border-foreground/[0.08] hover:border-foreground/20 transition-all"
                    >
                      {copied ? (
                        <>
                          <Check size={12} className="text-[hsl(var(--primary))]" />
                          <span className="text-[hsl(var(--primary))] font-semibold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  )}

                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="p-2 text-muted-foreground group-hover:text-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-label={`Open ${item.label}`}
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Subtext info */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-muted-foreground/60 border-t border-foreground/[0.06]">
            <span>Based in {profile.location} · Available for Remote (US/Global) and Hybrid</span>
            <span>Typical response &lt; 24h</span>
          </div>
        </div>
      </div>
    </section>
  );
}
