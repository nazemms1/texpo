'use client';

import { PageHero } from "@/src/components/sections/hero/PageHero";
import { ContactHeroCard } from "@/src/components/sections/contact/ContactHeroCard";
import { ContactMap } from "@/src/components/sections/contact/ContactMap";
import { ContactSection } from "@/src/components/sections/contact/ContactSection";
import { useApi } from "@/src/hooks/useApi";
import { contactService } from "@/src/lib/api";
import { useParams } from "next/navigation";

export default function ContactPage() {
  const { lang } = useParams();
  const { data, loading } = useApi(() => contactService.getContactInfo(), [], `contact-${lang}`);

  return (
    <>
      <PageHero title="CONTACT" titleAccent="US" />
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
      <ContactMap lan={data?.data?.lan} lag={data?.data?.lag} loading={loading} />
      <ContactSection formData={data?.formData} loading={loading} />
    </>
  );
}
