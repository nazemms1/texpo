'use client';

import { AboutExhibition } from '@/src/components/sections/about-exhibition/AboutExhibition';
import { PageHero } from '@/src/components/sections/hero/PageHero';
import { WhyTexpoSection } from '@/src/components/sections/why-texpo/WhyTexpoSection';
import { WhySyriaSection } from '@/src/components/sections/why-syria/WhySyriaSection';
import { useApi } from '@/src/hooks/useApi';
import { aboutService } from '@/src/lib/api';
import { useParams } from 'next/navigation';

export default function AboutPage() {
  const { lang } = useParams();
  const { data, loading } = useApi(() => aboutService.getAboutUsData(), [], `about-${lang}`);

  const aboutSection = data?.find(s => s.key === 'about-section');
  const whyTexpo = data?.find(s => s.key === 'why-to-be-here');
  const whySyria = data?.find(s => s.key === 'why-syria');

  return (
    <>
      <PageHero
        title="About"
        titleAccent="TEXPO LAND"
      />
      <div className="withLinesBg">
        <AboutExhibition 
          variant="about" 
          title={aboutSection?.title}
          description={aboutSection?.description}
          image={aboutSection?.image}
          loading={loading}
        />
      </div>
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
    </>
  );
}
