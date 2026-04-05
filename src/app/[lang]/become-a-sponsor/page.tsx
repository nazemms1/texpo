import type { Metadata } from "next";
import { IconChevronDown } from "@tabler/icons-react";

import { PageHero } from "@/src/components/sections/hero/PageHero";
import { SponsorshipTiersSection } from "@/src/components/sections/sponsorship-tiers/SponsorshipTiersSection";
import { CompareBenefitsSection } from "@/src/components/sections/compare-benefits/CompareBenefitsSection";
import { BecomeASponsorSection } from "@/src/components/sections/become-a-sponsor/BecomeASponsorSection";
import { InfoCardSection } from "@/src/components/sections/info-card/InfoCardSection";
import { WhyTexpoSection } from "@/src/components/sections/why-texpo/WhyTexpoSection";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Become a Sponsor — TEXPO",
  description:
    "Become a sponsor of TEXPO LAND and showcase your brand to investors, decision-makers, and entrepreneurs.",
};

export default function BecomeSponsorPage() {
  return (
    <>
      <div className={styles.heroWrap}>
        <PageHero title="BECOME" titleAccent="A SPONSER" />
        <a
          className={styles.scrollDown}
          href="#become-sponsor-intro"
          aria-label="Scroll to sponsor information"
        >
          <IconChevronDown size={22} stroke={2} />
        </a>
      </div>

      <SponsorshipTiersSection id="become-sponsor-intro" />
      <CompareBenefitsSection />
      <WhyTexpoSection />
      <InfoCardSection />
      <BecomeASponsorSection />
    </>
  );
}
