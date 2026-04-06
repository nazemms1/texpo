'use client';

import { PageHero } from "@/src/components/sections/hero/PageHero";
import { ContactHeroCard } from "@/src/components/sections/contact/ContactHeroCard";
import { ContactMap } from "@/src/components/sections/contact/ContactMap";
import { ContactSection } from "@/src/components/sections/contact/ContactSection";
import { useApi } from "@/src/hooks/useApi";
import { contactService } from "@/src/lib/api";

export default function ContactPage() {
  const { data } = useApi(() => contactService.getContactInfo());

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
        <ContactHeroCard image={data?.data?.image} />
      </div>
      <ContactMap lan={data?.data?.lan} lag={data?.data?.lag} />
      <ContactSection formData={data?.formData} />
    </>
  );
}
