import type { Metadata } from 'next';
import { PageHero } from '@/src/components/sections/hero/PageHero';
import { ContactHeroCard } from '@/src/components/sections/contact/ContactHeroCard';
import { ContactMap } from '@/src/components/sections/contact/ContactMap';
import { ContactSection } from '@/src/components/sections/contact/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Us — TEXPO',
  description: 'Get in touch with the TEXPO team for sponsorships, media, or general enquiries.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="CONTACT"
        titleAccent='US'
      />
      <div className="withLinesBg" style={{ display: 'flex', flexDirection: 'column', paddingBottom: '4rem' }}>
        <ContactHeroCard />
      </div>
      <ContactMap />
      <ContactSection />
    </>
  );
}
