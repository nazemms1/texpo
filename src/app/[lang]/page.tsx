import { HeroSection } from "@/src/components/sections/hero/HeroSection";
import { AboutExhibition } from "@/src/components/sections/about-exhibition/AboutExhibition";
import { StatisticsSection } from "@/src/components/sections/statistics/StatisticsSection";
import { OrganizingCompanySection } from "@/src/components/sections/organizing-company/OrganizingCompanySection";
import { ExhibitorsSectorsSection } from "@/src/components/sections/exhibitors/ExhibitorsSectorsSection";

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
