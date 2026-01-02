import { Helmet } from "react-helmet-async";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { Code, Palette, Zap, MessageSquare, Smartphone, Database } from "lucide-react";
import PublicLayout from "@/components/layout/PublicLayout";
import Section from "@/components/layout/Section";
import MobileCarousel from "@/components/ui/MobileCarousel";
import ExpandableText from "@/components/ui/ExpandableText";
import { services } from "@/data/siteData";

const iconMap: Record<string, ComponentType<any>> = {
  Code,
  Palette,
  Zap,
  MessageSquare,
  Smartphone,
  Database,
};

export default function Services() {
  return (
    <PublicLayout>
      <Helmet>
        <title>Services | Muhammad Usman Portfolio — Senior Frontend Developer</title>
        <meta name="description" content="Frontend development services by Muhammad Usman — React.js, Next.js, performance optimization, UI/UX implementation, and technical consultation." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[128px] -translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              My <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive frontend development solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <Section className="py-24">
        <div className="container mx-auto px-4">
          {/* Mobile Carousel */}
          <div className="md:hidden max-w-5xl mx-auto">
            <MobileCarousel showDots={true} showArrows={false}>
              {services.map((service, index) => {
                const IconComponent = iconMap[service.icon] || Code;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card p-6 hover:border-primary/50 transition-all group cursor-default"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                      <IconComponent className="text-primary" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <ExpandableText text={service.description} maxLength={120} mobileOnly={true} />
                  </motion.div>
                );
              })}
            </MobileCarousel>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Code;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-card p-8 hover:border-primary/50 transition-all group cursor-default"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                    <IconComponent className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              My <span className="gradient-text">Process</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Discovery", description: "Understanding your goals and requirements" },
              { step: "02", title: "Planning", description: "Creating a detailed roadmap and timeline" },
              { step: "03", title: "Development", description: "Building with clean, maintainable code" },
              { step: "04", title: "Delivery", description: "Testing, optimization, and launch" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-display font-bold gradient-text mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </PublicLayout>
  );
}
