import type { Metadata } from 'next';
import { PageHero } from '@/src/components/sections/hero/PageHero';
 import { TargetAudienceSection } from '@/src/components/sections/target-audience/TargetAudienceSection';

export const metadata: Metadata = {
  title: 'Our Visitors — TEXPO',
  description: 'Learn about the diverse global audience that attends TEXPO every year.',
};

export default function VisitorsPage() {
  return (
    <>
      <PageHero
        title="OUR"
        titleAccent="VISITORS"
      />
      <div className="withLinesBg">
        <TargetAudienceSection />
      </div>
      
    </>
  );
}
