import type { Metadata } from 'next';
import { PageHero } from '@/src/components/sections/hero/PageHero';
import { ContactSection } from '@/src/components/sections/contact/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Us — TEXPO',
  description: 'Get in touch with the TEXPO team for sponsorships, media, or general enquiries.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="CONTACT US"
        subtitle="We would love to hear from you. Reach out for sponsorships, partnerships, or any general enquiries."
      />
      <ContactSection />
    </>
  );
}
