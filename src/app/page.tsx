import { HeroSection } from "@/src/components/sections/hero/HeroSection";
import { AboutExhibition } from "@/src/components/sections/about-exhibition/AboutExhibition";
import { StatisticsSection } from "@/src/components/sections/statistics/StatisticsSection";
import { OrganizingCompanySection } from "@/src/components/sections/organizing-company/OrganizingCompanySection";
import { MessageSection } from "@/src/components/sections/message/MessageSection";
import { VisionSection } from "@/src/components/sections/vision/VisionSection";
import { SponsorsSection } from "@/src/components/sections/sponsors/SponsorsSection";
import { CountriesSection } from "@/src/components/sections/countries/CountriesSection";
import { ExhibitorsSectorsSection } from "../components/sections/exhibitors/ExhibitorsSectorsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutExhibition />
      <StatisticsSection />
      <OrganizingCompanySection />
      <ExhibitorsSectorsSection />
      
     </>
  );
}
