"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";
import { fadeInUp } from "@/src/lib/animations";
import { TwoPanelFormSection } from "@/src/components/sections/shared/TwoPanelFormSection";
import { useMutation } from "@/src/hooks/useMutation";
import { becomeSponsorService } from "@/src/lib/api";
import type { SponsorType } from "@/src/lib/api";

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
  const { submit, loading, error, success } = useMutation(becomeSponsorService.submit);
  const [logoFileName, setLogoFileName] = useState<string>("");

  useEffect(() => {
    if (success) setLogoFileName("");
  }, [success]);

  const finalTitle = metaData?.title || title || "";
  const finalSubtitle = metaData?.subtitle || description || "";
  
  const contactItems = [
    { Icon: IconMail, label: "Email Us", value: metaData?.email || "info@texpo-exhibition.com" },
    { Icon: IconPhone, label: "Call Us", value: metaData?.phone || "0949333200" },
    { Icon: IconMapPin, label: "Office", value: metaData?.address || "Damascus, Syria - Exhibition City" },
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
      successMessage="Thank you! Our partnership team will contact you within 24 hours."
      description={metaData?.description || undefined}
      terms={[]}
      renderFormFields={(styles) => (
        <>
          <div className={styles.row}>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>Full Name</span>
              <input
                name="fullName"
                className={styles.input}
                type="text"
                placeholder="John Doe"
              />
            </motion.label>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>Company Name</span>
              <input
                name="company_name"
                className={styles.input}
                type="text"
                placeholder="Tech Global Inc."
                required
              />
            </motion.label>
          </div>

          <div className={styles.row}>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>Business Sector</span>
              <input
                name="sector"
                className={styles.input}
                type="text"
                placeholder="AI & Robotics"
              />
            </motion.label>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>Country / City</span>
              <input
                name="country_city"
                className={styles.input}
                type="text"
                placeholder="London, UK"
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
              <span className={styles.fieldLabel}>Sponsorship Categories</span>
              <span className={styles.selectWrap}>
                <select
                  name="sponsor_type_id"
                  className={`${styles.input} ${styles.selectField}`}
                  defaultValue=""
                  required
                >
                  <option value="" disabled>Select a sponsorship category</option>
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
              <span className={styles.fieldLabel}>Phone Number</span>
              <input
                name="phone_number"
                className={styles.input}
                type="tel"
                placeholder="+1 234 567 890"
                required
              />
            </motion.label>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>Email Address</span>
              <input
                name="email"
                className={styles.input}
                type="email"
                placeholder="john@company.com"
                required
              />
            </motion.label>
          </div>

          <motion.div className={styles.field} variants={fadeInUp}>
            <span className={styles.fieldLabel}>Company Logo</span>
            <div className={styles.fileInputWrap}>
              <span className={`${styles.fileInputLabel}${logoFileName ? ` ${styles.hasFile}` : ''}`}>
                {logoFileName || "Upload your company logo (PNG, JPG, SVG)"}
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
            <span className={styles.fieldLabel}>Message</span>
            <textarea
              name="message"
              className={`${styles.input} ${styles.textarea}`}
              rows={4}
              placeholder="Tell us what you want to achieve as a sponsor at TEXPO LAND."
            />
          </motion.label>
        </>
      )}
    />
  );  
}
