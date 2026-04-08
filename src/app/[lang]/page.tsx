'use client';

import { HeroSection } from "@/src/components/sections/hero/HeroSection";
import { AboutExhibition } from "@/src/components/sections/about-exhibition/AboutExhibition";
import { StatisticsSection } from "@/src/components/sections/statistics/StatisticsSection";
import { OrganizingCompanySection } from "@/src/components/sections/organizing-company/OrganizingCompanySection";
import { ExhibitorsSectorsSection } from "@/src/components/sections/exhibitors/ExhibitorsSectorsSection";
import { SponsorsMotionSection } from "@/src/components/sections/sponsers-section/SponsorsMotionSection";
import { InfoCardSection } from "@/src/components/sections/info-card/InfoCardSection";
import { MapSection } from "@/src/components/sections/map/MapSection";
import { useApi } from "@/src/hooks/useApi";
import { homeService } from "@/src/lib/api";
import { useParams } from "next/navigation";

export default function HomePage() {
  const { lang } = useParams();
  const { data: sections, loading } = useApi(() => homeService.getHomeData(), [], `home-${lang}`);

  const heroData = sections?.find(s => s.key === 'hero-section');
  const aboutData = sections?.find(s => s.key === 'about-section');
  const statsData = sections?.find(s => s.key === 'statistics');
  const visionData = sections?.find(s => s.key === 'vision');
  const organizersData = sections?.find(s => s.key === 'organizing-company');
  const sponsorsSection = sections?.find(s => s.key === 'sponsors');
  const mapSection = sections?.find(s => s.key === 'map');
  const sectorsSection = sections?.find(s => s.key === 'exhibitor-sector');

  return (
    <>
      <HeroSection
        title={heroData?.title}
        description={heroData?.description}
        media={heroData?.media}
        loading={loading}
      />
      <AboutExhibition 
        title={aboutData?.title}
        description={aboutData?.description}
        image={aboutData?.media}
        loading={loading}
      />
      <StatisticsSection 
        items={statsData?.['meta-data']}
        loading={loading}
      />
      <InfoCardSection 
        items={visionData?.['meta-data']}
        loading={loading}
      />
      <OrganizingCompanySection 
        title={organizersData?.title}
        description={organizersData?.description}
        companyName={organizersData?.['meta-data']?.company_name}
        logo={organizersData?.media}
        loading={loading}
      />
      <SponsorsMotionSection 
        title={sponsorsSection?.title}
        items={sponsorsSection?.['meta-data']}
        loading={loading}
      />
      <ExhibitorsSectorsSection 
        title={sectorsSection?.title}
        description={sectorsSection?.description}
        items={sectorsSection?.['meta-data'] as any}
        loading={loading}
      />
      <MapSection 
        title={mapSection?.title}
        image={mapSection?.media}
        loading={loading}
      />
    </>
  );
}
