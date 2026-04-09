'use client';

import { PageHero } from "@/src/components/sections/hero/PageHero";
import { ContactHeroCard } from "@/src/components/sections/contact/ContactHeroCard";
import { ContactMap } from "@/src/components/sections/contact/ContactMap";
import { ContactSection } from "@/src/components/sections/contact/ContactSection";
import { useApi } from "@/src/hooks/useApi";
import { contactService } from "@/src/lib/api";
import { pageHeroTranslations, type Lang } from "@/src/lib/i18n";
import { useParams } from "next/navigation";

export default function ContactPage() {
  const { lang } = useParams();
  const currentLang = (lang as Lang) ?? 'en';
  const t = pageHeroTranslations[currentLang].contact;
  const { data, loading } = useApi(() => contactService.getContactInfo(), [], `contact-${currentLang}`);

  return (
    <>
      <PageHero title={t.title} titleAccent={t.accent} />
      <div
        className="withLinesBg"
        style={{
          display: "flex",
          flexDirection: "column",
          paddingBottom: "4rem",
        }}
      >
        <ContactHeroCard image={data?.data?.image} loading={loading} />
      </div>
      <div
      style={{
        backgroundImage: "url('/images/background.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top left'
      }}>
        <ContactMap lan={data?.data?.lan} lag={data?.data?.lag} loading={loading} />
      <ContactSection formData={data?.formData} loading={loading} />
      </div>
    </>
  );
}
