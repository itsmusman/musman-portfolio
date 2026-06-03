// XANA Project Images
import xanaHero from "@/assets/projects/xana/xana-hero.png?format=webp&w=1200";
import xanaFaq from "@/assets/projects/xana/xana-faq.png?format=webp&w=800";
import xanaFooter from "@/assets/projects/xana/xana-footer.png?format=webp&w=800";
import xanaEarn from "@/assets/projects/xana/xana-earn.png?format=webp&w=800";
import xanaLogin from "@/assets/projects/xana/xana-login.png?format=webp&w=800";
import xanaGamebuilder from "@/assets/projects/xana/xana-gamebuilder.png?format=webp&w=800";
import xanaSpaces from "@/assets/projects/xana/xana-spaces.png?format=webp&w=800";
import xanaFeed from "@/assets/projects/xana/xana-feed.png?format=webp&w=800";

// Amaizing Project Images
import amaizingHero from "@/assets/projects/amaizing/amaizing-hero.png?format=webp&w=1200";
import amaizingSellers from "@/assets/projects/amaizing/amaizing-sellers.png?format=webp&w=800";
import amaizingLogin from "@/assets/projects/amaizing/amaizing-login.png?format=webp&w=800";
import amaizingContact from "@/assets/projects/amaizing/amaizing-contact.png?format=webp&w=800";

// TruckUp Project Images
import truckupHero from "@/assets/projects/truckup/truckup-hero.png?format=webp&w=1200";
import truckupMechanic from "@/assets/projects/truckup/truckup-mechanic.png?format=webp&w=800";
import truckupTestimonial from "@/assets/projects/truckup/truckup-testimonial.png?format=webp&w=800";
import truckupTeam from "@/assets/projects/truckup/truckup-team.png?format=webp&w=800";
import truckupFooter from "@/assets/projects/truckup/truckup-footer.png?format=webp&w=800";
import truckupSignup from "@/assets/projects/truckup/truckup-signup.png?format=webp&w=800";
import truckupMaintenance from "@/assets/projects/truckup/truckup-maintenance.png?format=webp&w=800";

// PureLab Project Images
import purelabHero from "@/assets/projects/purelab/purelab-hero.png?format=webp&w=1200";
import purelabStats from "@/assets/projects/purelab/purelab-stats.png?format=webp&w=800";
import purelabNews from "@/assets/projects/purelab/purelab-news.png?format=webp&w=800";
import purelabFooter from "@/assets/projects/purelab/purelab-footer.png?format=webp&w=800";
import purelabAbout from "@/assets/projects/purelab/purelab-about.png?format=webp&w=800";

// Kokobeo Project Images
import kokobeoHero from "@/assets/projects/kokobeo/kokobeo-hero.png?format=webp&w=1200";
import kokobeoLocations from "@/assets/projects/kokobeo/kokobeo-locations.png?format=webp&w=800";
import kokobeoSignup from "@/assets/projects/kokobeo/kokobeo-signup.png?format=webp&w=800";

// Vineyard Vines Project Images
import vineyardvinesHero from "@/assets/projects/vineyardvines/vineyardvines-hero.png?format=webp&w=1200";
import vineyardvinesPromo from "@/assets/projects/vineyardvines/vineyardvines-promo.png?format=webp&w=800";
import vineyardvinesFooter from "@/assets/projects/vineyardvines/vineyardvines-footer.png?format=webp&w=800";

// SpeedMeter Project Images
import speedmeterIcon from "@/assets/projects/speedmeter/speedmeter-icon.png?format=webp&w=400";
import speedmeterStart from "@/assets/projects/speedmeter/speedmeter-start.png?format=webp&w=800";
import speedmeterTesting from "@/assets/projects/speedmeter/speedmeter-testing.png?format=webp&w=800";
import speedmeterResult from "@/assets/projects/speedmeter/speedmeter-result.png?format=webp&w=800";

export type ProjectImage = {
  src: string;
  alt: string;
};

export const projectImages: Record<string, ProjectImage[]> = {
  "1": [ // XANA
    { src: xanaHero, alt: "XANA Hero - Join Now" },
    { src: xanaSpaces, alt: "XANA Hot Spaces & Games" },
    { src: xanaGamebuilder, alt: "XANA AI Game Builder" },
    { src: xanaFeed, alt: "XANA User Feed" },
    { src: xanaLogin, alt: "XANA Login" },
    { src: xanaEarn, alt: "XANA Earn in Metaverse" },
    { src: xanaFaq, alt: "XANA FAQ Section" },
    { src: xanaFooter, alt: "XANA Footer" },
  ],
  "2": [ // TruckUp
    { src: truckupHero, alt: "TruckUp - Get Back on the Road, Fast" },
    { src: truckupMechanic, alt: "TruckUp - Find a Mechanic" },
    { src: truckupTestimonial, alt: "TruckUp - Customer Testimonial" },
    { src: truckupTeam, alt: "TruckUp - Top 3% of Mechanics" },
    { src: truckupMaintenance, alt: "TruckUp - Fleet Maintenance" },
    { src: truckupSignup, alt: "TruckUp - Provider Signup" },
    { src: truckupFooter, alt: "TruckUp - Footer & Cities" },
  ],
  "3": [ // PureLab
    { src: purelabHero, alt: "PureLab - Defines Dependability" },
    { src: purelabStats, alt: "PureLab - Always Dependable Statistics" },
    { src: purelabAbout, alt: "PureLab - Every Test is a Testament to Trust" },
    { src: purelabNews, alt: "PureLab - News Beats" },
    { src: purelabFooter, alt: "PureLab - Footer" },
  ],
  "4": [ // Amaizing
    { src: amaizingHero, alt: "Amaizing - AI E-commerce Growth Platform" },
    { src: amaizingSellers, alt: "Amaizing - Amazon Sellers RevUp Engine" },
    { src: amaizingLogin, alt: "Amaizing - Login Page" },
    { src: amaizingContact, alt: "Amaizing - Contact Form" },
  ],
  "5": [ // Kokobeo
    { src: kokobeoHero, alt: "Kokobeo - Find Professional Services" },
    { src: kokobeoLocations, alt: "Kokobeo - Available Locations" },
    { src: kokobeoSignup, alt: "Kokobeo - Join Professional Network" },
  ],
  "6": [ // Vineyard Vines
    { src: vineyardvinesHero, alt: "Vineyard Vines - Sweater Season" },
    { src: vineyardvinesPromo, alt: "Vineyard Vines - 20% Off Promo" },
    { src: vineyardvinesFooter, alt: "Vineyard Vines - Footer" },
  ],
  "7": [ // SpeedMeter
    { src: speedmeterStart, alt: "SpeedMeter - Internet Speed Test" },
    { src: speedmeterTesting, alt: "SpeedMeter - Testing in Progress" },
    { src: speedmeterResult, alt: "SpeedMeter - Speed Result" },
    { src: speedmeterIcon, alt: "SpeedMeter - Extension Icon" },
  ],
};

export const getProjectImages = (projectId: string): ProjectImage[] => {
  return projectImages[projectId] || [];
};

export const getProjectMainImage = (projectId: string): string | null => {
  const images = projectImages[projectId];
  return images && images.length > 0 ? images[0].src : null;
};
