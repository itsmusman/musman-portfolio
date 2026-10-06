import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Check, Loader2, Send, Copy, ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PublicLayout from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { contactInfo, profile } from "@/data/siteData";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name too long"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message too long"),
});

type ContactForm = z.infer<typeof contactSchema>;

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    toast({
      title: "Email copied",
      description: `${contactInfo.email} copied to clipboard.`,
    });
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      window.location.href = `mailto:${contactInfo.email}?subject=Inquiry%20from%20${encodeURIComponent(
        data.name
      )}&body=${encodeURIComponent(data.message + "\n\nFrom: " + data.email)}`;
      toast({
        title: "Opening mail client",
        description: `Drafting message directly to ${contactInfo.email}.`,
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          title: "New Portfolio Inquiry",
          message: data.message,
          time: new Date().toLocaleString(),
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message sent",
        description: "Thanks for reaching out! I'll get back to you shortly.",
      });
      form.reset();
    } catch {
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: "Could not send message via service. Opening mail client instead.",
      });
      window.location.href = `mailto:${contactInfo.email}?subject=Portfolio%20Inquiry&body=${encodeURIComponent(
        data.message
      )}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PublicLayout>
      <Helmet>
        <title>Contact | Muhammad Usman — Full Stack Software Engineer · AI/ML Engineering</title>
        <meta
          name="description"
          content="Get in touch with Muhammad Usman: Full Stack Software Engineer for engineering roles, technical collaboration, and full-stack development."
        />
        <link rel="canonical" href="https://musman-portfolio-one.vercel.app/contact" />
      </Helmet>

      {/* Header */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 border-b border-foreground/[0.06]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 space-y-4">
          <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase block">
            Communication
          </span>

          <div className="space-y-2">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Have an engineering opportunity or project in mind?
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl text-pretty font-light">
              I am actively evaluating software engineering roles and AI/ML engineering transition opportunities. Reach out directly or send a message below.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 border-b border-foreground/[0.06]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Direct Channels (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-2">
                <h2 className="font-display text-xl font-bold text-foreground tracking-tight">
                  Direct Channels
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  Prefer direct communication? Connect via email, LinkedIn, or view repositories on GitHub.
                </p>
              </div>

              <div className="border-t border-b border-foreground/[0.06] divide-y divide-foreground/[0.06]">
                {/* Email */}
                <div className="py-4 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-muted-foreground uppercase">Email</span>
                    <button
                      onClick={handleCopyEmail}
                      className="text-xs font-mono text-muted-foreground hover:text-[hsl(var(--primary))] inline-flex items-center gap-1 transition-colors"
                    >
                      {copiedEmail ? <Check size={12} className="text-[hsl(var(--primary))]" /> : <Copy size={12} />}
                      {copiedEmail ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm sm:text-base font-semibold text-foreground hover:text-[hsl(var(--primary))] transition-colors block font-mono"
                  >
                    {contactInfo.email}
                  </a>
                </div>

                {/* LinkedIn */}
                <div className="py-4 flex items-center justify-between group">
                  <div className="space-y-0.5">
                    <span className="text-xs font-mono text-muted-foreground uppercase">LinkedIn</span>
                    <p className="text-sm font-semibold text-foreground font-display">Muhammad Usman</p>
                  </div>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground group-hover:text-[hsl(var(--primary))] transition-colors font-mono"
                  >
                    <span>Connect</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>

                {/* GitHub */}
                <div className="py-4 flex items-center justify-between group">
                  <div className="space-y-0.5">
                    <span className="text-xs font-mono text-muted-foreground uppercase">GitHub</span>
                    <p className="text-sm font-semibold text-foreground font-display">@itsmusman</p>
                  </div>
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground group-hover:text-[hsl(var(--primary))] transition-colors font-mono"
                  >
                    <span>View Profile</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>

              <div className="pt-2 text-xs font-mono text-muted-foreground/70">
                📍 {profile.location} · Available for Remote & Hybrid Positions
              </div>
            </div>

            {/* Message Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="border border-foreground/[0.08] bg-secondary/20 p-6 sm:p-8 space-y-6">
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground tracking-tight">
                    Send a Message
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-light">
                    Fill out the form below and I'll respond directly via email within 24 hours.
                  </p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-mono text-foreground/80">Your Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g. Alex Henderson"
                              {...field}
                              className="bg-background/80 border-foreground/10 focus:border-[hsl(var(--primary))]/50"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-mono text-foreground/80">Your Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="e.g. alex@company.com"
                              {...field}
                              className="bg-background/80 border-foreground/10 focus:border-[hsl(var(--primary))]/50"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-mono text-foreground/80">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your team, role requirements, or project details..."
                              rows={5}
                              {...field}
                              className="bg-background/80 border-foreground/10 focus:border-[hsl(var(--primary))]/50 resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-foreground/[0.08] hover:bg-foreground/[0.14] text-foreground border border-foreground/10 hover:border-foreground/25 font-semibold h-11 transition-all rounded-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="mr-2 animate-spin text-[hsl(var(--primary))]" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={14} className="mr-2 text-[hsl(var(--primary))]" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
