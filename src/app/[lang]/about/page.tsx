import type { Metadata } from 'next';
import { AboutExhibition } from '@/src/components/sections/about-exhibition/AboutExhibition';
import { VisionSection } from '@/src/components/sections/vision/VisionSection';
import { StatisticsSection } from '@/src/components/sections/statistics/StatisticsSection';
import { MessageSection } from '@/src/components/sections/message/MessageSection';
import { PageHero } from '@/src/components/sections/hero/PageHero';
import { WhyTexpoSection } from '@/src/components/sections/why-texpo/WhyTexpoSection';
import { WhySyriaSection } from '@/src/components/sections/why-syria/WhySyriaSection';

export const metadata: Metadata = {
  title: 'About — TEXPO',
  description: 'Learn about the TEXPO technology exhibition, our mission, vision, and leadership.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About"
        titleAccent="TEXPO LAND"
      />
      <div className="withLinesBg">
        <AboutExhibition variant="about" />
      </div>
      <WhyTexpoSection />
      <WhySyriaSection />
    </>
  );
}
