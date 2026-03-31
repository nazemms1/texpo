import type { Metadata } from 'next';
import { AboutExhibition } from '@/src/components/sections/about-exhibition/AboutExhibition';
import { VisionSection } from '@/src/components/sections/vision/VisionSection';
import { StatisticsSection } from '@/src/components/sections/statistics/StatisticsSection';
import { MessageSection } from '@/src/components/sections/message/MessageSection';
import { PageHero } from '@/src/components/sections/hero/PageHero';

export const metadata: Metadata = {
  title: 'About — TEXPO',
  description: 'Learn about the TEXPO technology exhibition, our mission, vision, and leadership.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="ABOUT TEXPO"
        subtitle="Discover the story, mission, and people behind the world's most forward-thinking technology exhibition."
      />
      <StatisticsSection />
      <AboutExhibition />
      <VisionSection />
      <MessageSection />
    </>
  );
}
