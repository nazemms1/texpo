'use client';

import { PageHero } from '@/src/components/sections/hero/PageHero';
import { TargetAudienceSection } from '@/src/components/sections/target-audience/TargetAudienceSection';
import { useApi } from '@/src/hooks/useApi';
import { visitorsService } from '@/src/lib/api';
import { useParams } from 'next/navigation';

export default function VisitorsPage() {
  const { lang } = useParams();
  const { data, loading } = useApi(() => visitorsService.getVisitorsData(), [], `visitors-${lang}`);

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
          loading={loading}
        />
      </div>
    </>
  );
}
