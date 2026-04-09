'use client';

import { useParams } from "next/navigation";

import { PageHero } from "@/src/components/sections/hero/PageHero";
import { SponsorshipTiersSection } from "@/src/components/sections/sponsorship-tiers/SponsorshipTiersSection";
import { CompareBenefitsSection } from "@/src/components/sections/compare-benefits/CompareBenefitsSection";
import { BecomeASponsorSection } from "@/src/components/sections/become-a-sponsor/BecomeASponsorSection";
import { InfoCardSection } from "@/src/components/sections/info-card/InfoCardSection";
import { WhyTexpoSection } from "@/src/components/sections/why-texpo/WhyTexpoSection";
import { useApi } from "@/src/hooks/useApi";
import { sponsorPageService, staticDataService } from "@/src/lib/api";
import { mapApiBenefitsToDataset } from "@/src/components/sections/compare-benefits/compareBenefitsData";
import { pageHeroTranslations, type Lang } from "@/src/lib/i18n";
import styles from "./page.module.css";

export default function BecomeSponsorPage() {
  const { lang } = useParams();
  const currentLang = (lang as Lang) ?? "en";
  const t = pageHeroTranslations[currentLang].becomeSponsor;

  const { data: sections, loading } = useApi(
    () => sponsorPageService.getSponsorPageData(),
    [],
    `sponsor-page-${currentLang}`
  );

  const { data: sponsorTypes } = useApi(
    () => staticDataService.getSponsorTypes(),
    [],
    `sponsor-types-${currentLang}`
  );

  const sectionsArr = sections as any[] | undefined;

  const benefitsSection = sectionsArr?.find((s: any) => s.key === 'benefits-section');
  const benefitsDataset = benefitsSection?.['meta-data']
    ? mapApiBenefitsToDataset(benefitsSection['meta-data']) ?? undefined
    : undefined;

  const typesSection = sectionsArr?.find((s: any) => s.key === 'types-section');
  const infoCardSection = sectionsArr?.find((s: any) => s.key === 'card-list-section');

  return (
    <>
      <div className={styles.heroWrap}>
        <PageHero title={t.title} titleAccent={t.accent} />
      </div>
      <div className="withLinesBg">

        <SponsorshipTiersSection
          id="become-sponsor-intro"
          apiItems={typesSection?.['meta-data']}
          title={typesSection?.title}
          description={typesSection?.description}
        />
      </div>
      <div style={{
        backgroundImage: "url('/images/background.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top left'
      }}>
        <CompareBenefitsSection dataset={benefitsDataset} />
        <WhyTexpoSection />
        <InfoCardSection items={infoCardSection?.['meta-data']} loading={loading} />
        <BecomeASponsorSection sponsorTypes={sponsorTypes as any} />
      </div>
    </>
  );
}
