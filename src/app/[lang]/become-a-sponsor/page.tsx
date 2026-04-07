import type { Metadata } from "next";
import { IconChevronDown } from "@tabler/icons-react";

import { PageHero } from "@/src/components/sections/hero/PageHero";
import { SponsorshipTiersSection } from "@/src/components/sections/sponsorship-tiers/SponsorshipTiersSection";
import { CompareBenefitsSection } from "@/src/components/sections/compare-benefits/CompareBenefitsSection";
import { BecomeASponsorSection } from "@/src/components/sections/become-a-sponsor/BecomeASponsorSection";
import { InfoCardSection } from "@/src/components/sections/info-card/InfoCardSection";
import { WhyTexpoSection } from "@/src/components/sections/why-texpo/WhyTexpoSection";
import { pageHeroTranslations, type Lang } from "@/src/lib/i18n";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Become a Sponsor — TEXPO",
  description:
    "Become a sponsor of TEXPO LAND and showcase your brand to investors, decision-makers, and entrepreneurs.",
};

export default function BecomeSponsorPage({ params }: { params: { lang: string } }) {
  const currentLang = (params.lang as Lang) ?? "en";
  const t = pageHeroTranslations[currentLang].becomeSponsor;

  return (
    <>
      <div className={styles.heroWrap}>
        <PageHero title={t.title} titleAccent={t.accent} />
      </div>

      <SponsorshipTiersSection id="become-sponsor-intro" />
      <CompareBenefitsSection />
      <WhyTexpoSection />
      <InfoCardSection />
      <BecomeASponsorSection />
    </>
  );
}
