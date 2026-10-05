// Project Image Mappings for Muhammad Usman Portfolio

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

// SpeedMeter Project Images
import speedmeterIcon from "@/assets/projects/speedmeter/speedmeter-icon.png?format=webp&w=400";
import speedmeterStart from "@/assets/projects/speedmeter/speedmeter-start.png?format=webp&w=800";
import speedmeterTesting from "@/assets/projects/speedmeter/speedmeter-testing.png?format=webp&w=800";
import speedmeterResult from "@/assets/projects/speedmeter/speedmeter-result.png?format=webp&w=800";

export type ProjectImage = {
  src: string;
  alt: string;
};

const xanaImages: ProjectImage[] = [
  { src: xanaHero, alt: "XANA Metaverse Platform Overview" },
  { src: xanaSpaces, alt: "XANA Virtual Spaces & Environments" },
  { src: xanaGamebuilder, alt: "XANA AI Game Builder" },
  { src: xanaFeed, alt: "XANA User Feed & Social Workflows" },
  { src: xanaLogin, alt: "XANA Web3 Auth & Login" },
  { src: xanaEarn, alt: "XANA Monetization Features" },
  { src: xanaFaq, alt: "XANA Platform FAQ" },
  { src: xanaFooter, alt: "XANA Ecosystem Navigation" },
];

const amaizingImages: ProjectImage[] = [
  { src: amaizingHero, alt: "Amaizing AI E-commerce Market Intelligence" },
  { src: amaizingSellers, alt: "Amaizing Amazon Sellers Performance Engine" },
  { src: amaizingLogin, alt: "Amaizing Brand Intelligence Dashboard Login" },
  { src: amaizingContact, alt: "Amaizing Enterprise Consultation Flow" },
];

const truckupImages: ProjectImage[] = [
  { src: truckupHero, alt: "TruckUp On-Demand Roadside Assistance" },
  { src: truckupMechanic, alt: "TruckUp Mobile Mechanic Dispatch" },
  { src: truckupMaintenance, alt: "TruckUp Fleet Maintenance System" },
  { src: truckupTestimonial, alt: "TruckUp Operator Experience" },
  { src: truckupTeam, alt: "TruckUp Verified Technicians Network" },
  { src: truckupSignup, alt: "TruckUp Service Provider Onboarding" },
  { src: truckupFooter, alt: "TruckUp Nationwide Coverage" },
];

const purelabImages: ProjectImage[] = [
  { src: purelabHero, alt: "PureLab Clinical Diagnostic Network" },
  { src: purelabStats, alt: "PureLab Diagnostic Accuracy Metrics" },
  { src: purelabAbout, alt: "PureLab Healthcare Verification" },
  { src: purelabNews, alt: "PureLab Laboratory Updates" },
  { src: purelabFooter, alt: "PureLab Clinical Center Network" },
];

const speedmeterImages: ProjectImage[] = [
  { src: speedmeterStart, alt: "SpeedMeter Instant Network Speed Testing" },
  { src: speedmeterTesting, alt: "SpeedMeter Latency & Bandwidth Computation" },
  { src: speedmeterResult, alt: "SpeedMeter Download & Upload Speed Result" },
  { src: speedmeterIcon, alt: "SpeedMeter Chrome Extension Icon" },
];

export const projectImages: Record<string, ProjectImage[]> = {
  // New slug IDs
  "unsurfaced-ai": [], // Pure technical typography presentation (no fabricated screenshots)
  "amaizing": amaizingImages,
  "blocktrust": [], // Pure technical typography presentation (no fabricated screenshots)
  "xana": xanaImages,
  "writeout": [], // Pure technical typography presentation
  "truckup": truckupImages,
  "purelab": purelabImages,
  "colivease": [], // Pure technical typography presentation
  "speedmeter": speedmeterImages,

  // Numeric backward compatibility
  "1": xanaImages,
  "2": truckupImages,
  "3": purelabImages,
  "4": amaizingImages,
  "7": speedmeterImages,
};

export const getProjectImages = (projectId: string): ProjectImage[] => {
  return projectImages[projectId] || [];
};

export const getProjectMainImage = (projectId: string): string | null => {
  const images = projectImages[projectId];
  return images && images.length > 0 ? images[0].src : null;
};
