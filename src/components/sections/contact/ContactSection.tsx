'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/src/lib/animations';
import { IconMail, IconPhone, IconMapPin } from '@tabler/icons-react';
import { TwoPanelFormSection } from '@/src/components/sections/shared/TwoPanelFormSection';
import { useMutation } from '@/src/hooks/useMutation';
import { contactService } from '@/src/lib/api';
import { useParams } from 'next/navigation';
import { becomeASponsorFormTranslations, type Lang } from '@/src/lib/i18n';
import type { ContactFormPayload, ContactUsApiData } from '@/src/types/api';

export function ContactSection({ formData, loading }: { formData?: ContactUsApiData['formData'], loading?: boolean }) {
  const { lang } = useParams();
  const currentLang = (lang as Lang) || 'en';
  const t = becomeASponsorFormTranslations[currentLang];

  const contactInfo = [
    { Icon: IconMail,    label: t.emailUs, value: formData?.email || 'info@texpo-exhibition.com' },
    { Icon: IconPhone,   label: t.callUs,  value: formData?.phone || '0949333200' },
    { Icon: IconMapPin,  label: t.office,   value: formData?.address || 'Damascus, Syria - Exhibition City' },
  ];

  const { submit, loading: isSubmitting, error, success } = useMutation(contactService.submit);

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    const fd = new FormData(e.currentTarget);
    const payload: ContactFormPayload = {
      full_name:       fd.get('fullName')    as string,
      company_name:    fd.get('companyName') as string,
      business_sector: fd.get('sector')      as string,
      country_city:    fd.get('country')     as string,
      address:         fd.get('address')     as string,
      phone_number:    fd.get('phone')       as string,
      email:           fd.get('email')       as string,
      message:         fd.get('message')     as string,
    };
    submit(payload);
  }
 
  return (
    <TwoPanelFormSection
      title={formData?.title || "CONTACT US"}
      subtitle={formData?.subtitle || "Submit your interest and our partnership team will contact you with a tailored sponsorship proposal within 24 hours."}
      description={formData?.description}
      contactItems={contactInfo}
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      loading={loading}
      submitSuccess={success}
      submitError={error}
      terms={[]}
      submitLabel={t.submitRequest}
      renderFormFields={(styles) => (
        <>
          <div className={styles.row}>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>{t.fields.fullName}</span>
              <input name="fullName" className={styles.input} type="text" placeholder={t.placeholders.fullName} />
            </motion.label>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>{t.fields.companyName}</span>
              <input name="companyName" className={styles.input} type="text" placeholder={t.placeholders.companyName} required />
            </motion.label>
          </div>

          <div className={styles.row}>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>{t.fields.businessSector}</span>
              <input name="sector" className={styles.input} type="text" placeholder={t.placeholders.businessSector} required />
            </motion.label>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>{t.fields.countryCity}</span>
              <input name="country" className={styles.input} type="text" placeholder={t.placeholders.countryCity} />
            </motion.label>
          </div>

          <motion.label className={styles.field} variants={fadeInUp}>
            <span className={styles.fieldLabel}>{t.fields.address}</span>
            <input name="address" className={styles.input} type="text" placeholder={t.placeholders.address} />
          </motion.label>

          <div className={styles.row}>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>{t.fields.phoneNumber}</span>
              <input name="phone" className={styles.input} type="tel" placeholder={t.placeholders.phoneNumber} required />
            </motion.label>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>{t.fields.emailAddress}</span>
              <input name="email" className={styles.input} type="email" placeholder={t.placeholders.emailAddress} required />
            </motion.label>
          </div>

          <motion.label className={styles.field} variants={fadeInUp}>
            <span className={styles.fieldLabel}>{t.fields.message}</span>
            <textarea name="message" className={`${styles.input} ${styles.textarea}`} rows={4} placeholder={t.placeholders.message} />
          </motion.label>

          <motion.label className={styles.checkboxField} variants={fadeInUp}>
            <input name="terms" type="checkbox" className={styles.checkboxInput} required />
            <span className={styles.checkboxText}>{t.termsCheckbox}</span>
          </motion.label>
        </>
      )}
    />
  );
}
