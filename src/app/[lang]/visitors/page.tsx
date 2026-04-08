'use client';

import { PageHero } from '@/src/components/sections/hero/PageHero';
import { TargetAudienceSection } from '@/src/components/sections/target-audience/TargetAudienceSection';
import { useApi } from '@/src/hooks/useApi';
import { visitorsService } from '@/src/lib/api';
import { pageHeroTranslations, type Lang } from '@/src/lib/i18n';
import { useParams } from 'next/navigation';

export default function VisitorsPage() {
  const { lang } = useParams();
  const currentLang = (lang as Lang) ?? 'en';
  const t = pageHeroTranslations[currentLang].visitors;
  const { data, loading } = useApi(() => visitorsService.getVisitorsData(), [], `visitors-${currentLang}`);

  return (
    <>
      <PageHero
        title={t.title}
        titleAccent={t.accent}
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
