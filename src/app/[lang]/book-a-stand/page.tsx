'use client';

import { PageHero } from '@/src/components/sections/hero/PageHero';
import { StandMapCarousel } from '@/src/components/sections/book-a-stand/StandMapCarousel';
import { BookAStandSection } from '@/src/components/sections/book-a-stand/BookAStandSection';
import { useApi } from '@/src/hooks/useApi';
import { bookStandService } from '@/src/lib/api';
import { pageHeroTranslations, type Lang } from '@/src/lib/i18n';
import { useParams } from 'next/navigation';

export default function BookAStandPage() {
  const { lang } = useParams();
  const currentLang = (lang as Lang) ?? 'en';
  const t = pageHeroTranslations[currentLang].bookStand;
  const { data, loading } = useApi(() => bookStandService.getStandData(), [], `book-a-stand-${currentLang}`);

  const standInfo = (data as any)?.data;
  const formData = (data as any)?.formData;

  const images = standInfo?.images?.map((img: any) => ({
    src: img.url,
    alt: img.name || 'Exhibition Map'
  })) || [];

  return (
    <>
      <PageHero title={t.title} titleAccent={t.accent} />
      <StandMapCarousel 
        images={images} 
        title={standInfo?.title || "Exhibition Stand Maps"} 
        loading={loading}
      />
      <BookAStandSection 
        title={formData?.title}
        subtitle={formData?.subtitle}
        email={formData?.email}
        phone={formData?.phone}
        address={formData?.address}
        description={formData?.description}
        loading={loading}
      />
    </>
  );
}
