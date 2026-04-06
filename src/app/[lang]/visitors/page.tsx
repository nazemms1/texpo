'use client';

import { PageHero } from '@/src/components/sections/hero/PageHero';
import { TargetAudienceSection } from '@/src/components/sections/target-audience/TargetAudienceSection';
import { useApi } from '@/src/hooks/useApi';
import { visitorsService } from '@/src/lib/api';

export default function VisitorsPage() {
  const { data } = useApi(() => visitorsService.getVisitorsData());

  return (
    <>
      <PageHero
        title="OUR"
        titleAccent="VISITORS"
      />
      <div className="withLinesBg">
        <TargetAudienceSection 
          title={data?.title}
          description={data?.description}
          items={data?.items}
        />
      </div>
    </>
  );
}
