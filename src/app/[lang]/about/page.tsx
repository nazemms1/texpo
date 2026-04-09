'use client';

import { AboutExhibition } from '@/src/components/sections/about-exhibition/AboutExhibition';
import { PageHero } from '@/src/components/sections/hero/PageHero';
import { WhyTexpoSection } from '@/src/components/sections/why-texpo/WhyTexpoSection';
import { WhySyriaSection } from '@/src/components/sections/why-syria/WhySyriaSection';
import { useApi } from '@/src/hooks/useApi';
import { aboutService, publicDataService } from '@/src/lib/api';
import { pageHeroTranslations, type Lang } from '@/src/lib/i18n';
import { useParams } from 'next/navigation';

export default function AboutPage() {
  const { lang } = useParams();
  const currentLang = (lang as Lang) ?? 'en';
  const t = pageHeroTranslations[currentLang].about;
  const { data, loading } = useApi(() => aboutService.getAboutUsData(), [], `about-${currentLang}`);
  const { data: publicData } = useApi(() => publicDataService.getPublicData(), [], 'public-data');
  const youtubeUrl = publicData?.find(item => item.key === 'youtube_url')?.value;

  const aboutSection = data?.find(s => s.key === 'about-section');
  const whyTexpo = data?.find(s => s.key === 'why-to-be-here');
  const whySyria = data?.find(s => s.key === 'why-syria');

  return (
    <>
      <PageHero
        title={t.title}
        titleAccent={t.accent}
      />
      <div className="withLinesBg">
        <AboutExhibition
          variant="about"
          title={aboutSection?.title}
          description={aboutSection?.description}
          image={aboutSection?.image}
          loading={loading}
          youtubeUrl={youtubeUrl}
        />
      </div>
      <div style={{
        backgroundImage: "url('/images/background.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top left'
      }}>
        <WhyTexpoSection
          title={whyTexpo?.title}
          items={whyTexpo?.items}
          loading={loading}
        />
        <WhySyriaSection
          title={whySyria?.title}
          description={whySyria?.description}
          image={whySyria?.image}
          items={whySyria?.items}
          loading={loading}
        />
      </div>
    </>
  );
}
