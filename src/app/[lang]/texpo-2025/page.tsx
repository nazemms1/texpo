'use client';

import { PageHero } from "@/src/components/sections/hero/PageHero";
 import { StatisticsSection } from "@/src/components/sections/statistics/StatisticsSection";
import { AboutExhibition } from "@/src/components/sections/about-exhibition/AboutExhibition";
import { InfoCardSection } from "@/src/components/sections/info-card/InfoCardSection";
 import { useApi } from "@/src/hooks/useApi";
import { texpoPageService } from "@/src/lib/api";
import { useParams } from "next/navigation";

export default function Texpo2025Page() {
  const { lang } = useParams();
  const { data, loading } = useApi(() => texpoPageService.getTexpoPageData(), [], `texpo2025-${lang}`);

  const stats = (data as any)?.statistics?.map((s: any) => ({
    key: s.key,
    value: s.value,
  }));

  return (
    <>
      <PageHero title="TEXPO " titleAccent="2025" />
      <div className="withLinesBg">
        <StatisticsSection items={stats} loading={loading} />
      </div>
       <AboutExhibition
        variant="about"
        hideButtons={true}
        title={data?.title}
        description={data?.description}
        image={data?.image}
        loading={loading}
      />
      <InfoCardSection items={data?.items} loading={loading} />
    </>
  );
}
