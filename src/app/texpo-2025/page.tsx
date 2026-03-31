import type { Metadata } from 'next';
import { PageHero } from '@/src/components/sections/hero/PageHero';
import { Texpo2025Section } from '@/src/components/sections/texpo2025/Texpo2025Section';
import { SponsorsSection } from '@/src/components/sections/sponsors/SponsorsSection';

export const metadata: Metadata = {
  title: 'Texpo 2025 — TEXPO',
  description: 'Everything you need to know about the Texpo 2025 exhibition — dates, venue, and highlights.',
};

export default function Texpo2025Page() {
  return (
    <>
      <PageHero
        title="TEXPO 2025"
        subtitle="The most anticipated edition yet — bigger, bolder, and more global than ever before."
      />
      <Texpo2025Section />
      <SponsorsSection />
    </>
  );
}
