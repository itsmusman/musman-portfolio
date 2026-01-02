import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { contactInfo, profile } from "@/data/siteData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Format WhatsApp number
  const whatsappNumber = contactInfo.phone?.replace(/[^0-9]/g, '') || '';
  const whatsappUrl = whatsappNumber ? `https://wa.me/${whatsappNumber}` : null;

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-8">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-4 min-w-0 pr-0 md:pr-4 lg:pr-6">
            <Link to="/" className="flex items-center gap-3 mb-4 md:mb-6 group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                <span className="text-primary-foreground font-bold text-lg md:text-xl">MU</span>
              </div>
              <span className="font-display font-bold text-base md:text-lg lg:text-xl">{profile.name}</span>
            </Link>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
              {profile.title}
            </p>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
              Crafting beautiful, performant web experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 lg:col-span-2">
            <h3 className="font-bold text-base md:text-lg mb-4 md:mb-6">Quick Links</h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1 lg:col-span-3">
            <h3 className="font-bold text-base md:text-lg mb-4 md:mb-6">Contact Info</h3>
            <ul className="space-y-3 md:space-y-4">
              {contactInfo.email && (
                <li>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-3 group"
                  >
                    <Mail size={18} className="text-primary" />
                    <span className="text-sm">{contactInfo.email}</span>
                  </a>
                </li>
              )}
              {contactInfo.phone && (
                <li>
                  <a 
                    href={whatsappUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-3 group"
                  >
                    <Phone size={18} className="text-primary" />
                    <span className="text-sm">{contactInfo.phone}</span>
                  </a>
                </li>
              )}
              {contactInfo.location && (
                <li className="inline-flex items-center gap-3">
                  <MapPin size={18} className="text-primary" />
                  <span className="text-sm text-muted-foreground">{contactInfo.location}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-1 lg:col-span-3">
            <h3 className="font-bold text-base md:text-lg mb-4 md:mb-6">Follow Me</h3>
            <div className="flex gap-2 md:gap-3">
              {contactInfo.github && (
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  <Github size={22} />
                </a>
              )}
              {contactInfo.linkedin && (
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  <Linkedin size={22} />
                </a>
              )}
              {contactInfo.email && (
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  <Mail size={22} />
                </a>
              )}
            </div>
            <p className="text-muted-foreground text-xs md:text-sm mt-4 md:mt-6">
              Let's connect and build something amazing together!
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border flex items-center justify-center">
          <p className="text-muted-foreground text-xs md:text-sm text-center px-4">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
