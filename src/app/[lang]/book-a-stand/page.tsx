import type { Metadata } from 'next';
import { PageHero } from '@/src/components/sections/hero/PageHero';
import { StandMapCarousel } from '@/src/components/sections/book-a-stand/StandMapCarousel';
import { BookAStandSection } from '@/src/components/sections/book-a-stand/BookAStandSection';

export const metadata: Metadata = {
  title: 'Book a Stand — TEXPO',
  description:
    'Reserve your exhibition stand at TEXPO and connect with thousands of industry leaders, investors, and innovators.',
};

const STAND_MAP_IMAGES = [
  { src: '/images/Hall 10.svg', alt: 'Exhibition Stand Map - Hall 1' },
  { src: '/images/Hall 10.1.svg', alt: 'Exhibition Stand Map - Hall 2' },

];
export default function BookAStandPage() {
  return (
    <>
      <PageHero title="BOOK A" titleAccent="STAND" />
      <StandMapCarousel images={STAND_MAP_IMAGES} title="Exhibition Stand Maps" />
      <BookAStandSection />
    </>
  );
}
