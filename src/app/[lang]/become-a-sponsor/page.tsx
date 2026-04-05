import type { Metadata } from "next";
import { IconChevronDown } from "@tabler/icons-react";

import { PageHero } from "@/src/components/sections/hero/PageHero";
import { BecomeSponsorIntroSection } from "@/src/components/sections/become-sponsor/BecomeSponsorIntroSection";
import { BecomeASponsorSection } from "@/src/components/sections/become-a-sponsor/BecomeASponsorSection";
import { SponsorsMotionSection } from "@/src/components/sections/sponsers-section/SponsorsMotionSection";
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
      
      </div>

      <BecomeSponsorIntroSection id="become-sponsor-intro" />

      <div className="withLinesBg">
        <SponsorsMotionSection />
      </div>
      <BecomeASponsorSection />
    </>
  );
}
