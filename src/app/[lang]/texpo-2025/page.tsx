'use client';

import { PageHero } from "@/src/components/sections/hero/PageHero";
import { SponsorsSection } from "@/src/components/sections/sponsors/SponsorsSection";
import { StatisticsSection } from "@/src/components/sections/statistics/StatisticsSection";
import { AboutExhibition } from "@/src/components/sections/about-exhibition/AboutExhibition";
import { InfoCardSection } from "@/src/components/sections/info-card/InfoCardSection";
import { Texpo2025Section } from "@/src/components/sections/texpo2025/Texpo2025Section";
import { useApi } from "@/src/hooks/useApi";
import { texpoPageService } from "@/src/lib/api";

export default function Texpo2025Page() {
  const { data, loading } = useApi(() => texpoPageService.getTexpoPageData());

  const stats = data?.statistics?.map((s) => ({
    label: s.key,
    value: s.value,
  }));

  return (
    <>
      <PageHero title="TEXPO " titleAccent="2025" />
      <div className="withLinesBg">
        <StatisticsSection manualStats={stats || (loading ? [] : undefined)} />
      </div>
      <Texpo2025Section />
      <AboutExhibition
        variant="about"
        hideButtons={true}
        title={data?.title}
        description={data?.description}
        image={data?.image}
      />
      <InfoCardSection items={data?.items} />
    </>
  );
}
