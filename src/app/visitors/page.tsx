import type { Metadata } from 'next';
import { PageHero } from '@/src/components/sections/hero/PageHero';
import { CountriesSection } from '@/src/components/sections/countries/CountriesSection';
import { StatisticsSection } from '@/src/components/sections/statistics/StatisticsSection';
import { VisitorInfoSection } from '@/src/components/sections/visitors/VisitorInfoSection';

export const metadata: Metadata = {
  title: 'Our Visitors — TEXPO',
  description: 'Learn about the diverse global audience that attends TEXPO every year.',
};

export default function VisitorsPage() {
  return (
    <>
      <PageHero
        title="OUR VISITORS"
        subtitle="TEXPO attracts the brightest minds and most ambitious organisations from every corner of the globe."
      />
      <StatisticsSection />
      <VisitorInfoSection />
      <CountriesSection />
    </>
  );
}
