"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";
import { fadeInUp } from "@/src/lib/animations";
import { TwoPanelFormSection } from "@/src/components/sections/shared/TwoPanelFormSection";
import { useMutation } from "@/src/hooks/useMutation";
import { becomeSponsorService } from "@/src/lib/api";
import type { SponsorType } from "@/src/lib/api";

import { useParams } from "next/navigation";
import { becomeASponsorFormTranslations, type Lang } from "@/src/lib/i18n";

interface BecomeASponsorSectionProps {
  sponsorTypes?: SponsorType[];
  title?: string | null;
  description?: string | null;
  metaData?: {
    title?: string;
    subtitle?: string;
    email?: string;
    phone?: string;
    address?: string;
    description?: string;
  } | null;
}

export function BecomeASponsorSection({ 
  sponsorTypes, 
  title, 
  description,
  metaData
}: BecomeASponsorSectionProps) {
  const { lang } = useParams();
  const currentLang = (lang as Lang) || "en";
  const t = becomeASponsorFormTranslations[currentLang];

  const { submit, loading, error, success } = useMutation(becomeSponsorService.submit);
  const [logoFileName, setLogoFileName] = useState<string>("");

  useEffect(() => {
    if (success) setLogoFileName("");
  }, [success]);

  const finalTitle = metaData?.title || title || "";
  const finalSubtitle = metaData?.subtitle || description || "";
  
  const contactItems = [
    { Icon: IconMail, label: t.emailUs, value: metaData?.email || "info@texpo-exhibition.com" },
    { Icon: IconPhone, label: t.callUs, value: metaData?.phone || "0949333200" },
    { Icon: IconMapPin, label: t.office, value: metaData?.address || "Damascus, Syria - Exhibition City" },
  ];

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    const formData = new FormData(e.currentTarget);
    submit(formData);
  }

  return (
    <TwoPanelFormSection
      id="sponsor-enquiry"
      title={finalTitle}
      subtitle={finalSubtitle}
      contactItems={contactItems}
      onSubmit={handleSubmit}
      isSubmitting={loading}
      submitSuccess={success}
      submitError={error}
      submitLabel={t.submitRequest}
      successMessage={t.successMessage}
      description={metaData?.description || undefined}
      terms={[]}
      renderFormFields={(styles) => (
        <>
          <div className={styles.row}>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>{t.fields.fullName}</span>
              <input
                name="fullName"
                className={styles.input}
                type="text"
                placeholder={t.placeholders.fullName}
              />
            </motion.label>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>{t.fields.companyName}</span>
              <input
                name="company_name"
                className={styles.input}
                type="text"
                placeholder={t.placeholders.companyName}
                required
              />
            </motion.label>
          </div>

          <div className={styles.row}>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>{t.fields.businessSector}</span>
              <input
                name="sector"
                className={styles.input}
                type="text"
                placeholder={t.placeholders.businessSector}
              />
            </motion.label>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>{t.fields.countryCity}</span>
              <input
                name="country_city"
                className={styles.input}
                type="text"
                placeholder={t.placeholders.countryCity}
                required
              />
            </motion.label>
          </div>

          <div className={styles.row}>
            <motion.label
              className={styles.field}
              variants={fadeInUp}
              style={{ gridColumn: "1 / -1" }}
            >
              <span className={styles.fieldLabel}>{t.fields.sponsorshipCategories}</span>
              <span className={styles.selectWrap}>
                <select
                  name="sponsor_type_id"
                  className={`${styles.input} ${styles.selectField}`}
                  defaultValue=""
                  required
                >
                  <option value="" disabled>{t.placeholders.selectCategory}</option>
                  {sponsorTypes && sponsorTypes.length > 0
                    ? sponsorTypes.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    ))
                    : null
                  }
                </select>
              </span>
            </motion.label>
          </div>

          <div className={styles.row}>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>{t.fields.phoneNumber}</span>
              <input
                name="phone_number"
                className={styles.input}
                type="tel"
                placeholder={t.placeholders.phoneNumber}
                required
              />
            </motion.label>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>{t.fields.emailAddress}</span>
              <input
                name="email"
                className={styles.input}
                type="email"
                placeholder={t.placeholders.emailAddress}
                required
              />
            </motion.label>
          </div>

          <motion.div className={styles.field} variants={fadeInUp}>
            <span className={styles.fieldLabel}>{t.fields.companyLogo}</span>
            <div className={styles.fileInputWrap}>
              <span className={`${styles.fileInputLabel}${logoFileName ? ` ${styles.hasFile}` : ''}`}>
                {logoFileName || t.placeholders.logoUpload}
              </span>
              <input
                name="logo"
                type="file"
                required
                accept="image/png,image/jpeg,image/svg+xml,image/webp"
                onChange={(e) => setLogoFileName(e.target.files?.[0]?.name ?? "")}
              />
            </div>
          </motion.div>

          <motion.label className={styles.field} variants={fadeInUp}>
            <span className={styles.fieldLabel}>{t.fields.message}</span>
            <textarea
              name="message"
              className={`${styles.input} ${styles.textarea}`}
              rows={4}
              placeholder={t.placeholders.message}
            />
          </motion.label>
        </>
      )}
    />
  );  
}
