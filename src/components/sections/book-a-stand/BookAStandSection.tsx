'use client';

import { motion } from 'framer-motion';
import { IconMail, IconPhone, IconMapPin } from '@tabler/icons-react';
import { fadeInUp } from '@/src/lib/animations';
import { TwoPanelFormSection } from '@/src/components/sections/shared/TwoPanelFormSection';
import { useMutation } from '@/src/hooks/useMutation';
import { useApi } from '@/src/hooks/useApi';
import { bookStandService, staticDataService } from '@/src/lib/api';
import type { BookStandPayload } from '@/src/types/api';

import { useParams } from 'next/navigation';
import { bookAStandTranslations, Lang } from '@/src/lib/i18n';

interface BookAStandSectionProps {
  title?: string;
  subtitle?: string;
  email?: string;
  phone?: string;
  address?: string;
  description?: string;
  loading?: boolean;
}

export function BookAStandSection({
  title,
  subtitle,
  email,
  phone,
  address,
  description,
  loading: parentLoading
}: BookAStandSectionProps) {
  const { lang } = useParams();
  const currentLang = (lang as Lang) || 'en';
  const t = bookAStandTranslations[currentLang];

  const { data: sectors, loading: sectorsLoading } = useApi(() => staticDataService.getSectors(), [], `sectors-${currentLang}`);
  const { data: countries, loading: countriesLoading } = useApi(() => staticDataService.getCountries(), [], `countries-${currentLang}`);
  
  const { submit, loading: submitting, error, success } = useMutation(bookStandService.submit);

  const isLoading = parentLoading || sectorsLoading || countriesLoading;

  const standContactInfo = [
    {
      Icon: IconMail,
      label: currentLang === 'ar' ? 'راسلنا' : 'Email Us',
      value: email || 'info@texpo-exhibition.com',
    },
    {
      Icon: IconPhone,
      label: currentLang === 'ar' ? 'اتصل بنا' : 'Call Us',
      value: phone || '0949333200',
    },
    {
      Icon: IconMapPin,
      label: currentLang === 'ar' ? 'المكتب' : 'Office',
      value: address || 'Damascus, Syria - Exhibition City',
    },
  ];

  const terms = description?.split('\n\n').filter(Boolean) || (currentLang === 'ar' ? [
    'بإرسال هذا النموذج، فإنك توافق على جمع ومعالجة بياناتك الشخصية لغرض التعامل مع استفسار حجز الجناح الخاص بك ومتابعة التواصل.',
    'أؤكد أن عمري 21 عاماً أو أكثر، وأنني قرأت ووافقت على الشروط والأحكام وسياسة الخصوصية. قد تتم مشاركة معلوماتك مع مزودي الخدمة المتعاقدين والشركاء الرسميين فقط عند الحاجة لتقديم خدمات الفعالية وتنسيق ترتيبات الجناح.',
  ] : [
    'By submitting this form, you consent to the collection and processing of your personal data for the purpose of handling your stand booking enquiry and follow-up communication.',
    'I confirm that I am 21 years of age or older, and that I have read and agreed to the Terms and Conditions and the Privacy Policy. Your information may be shared with contracted service providers and official partners only when needed to deliver event services and coordinate stand arrangements.',
  ]);

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    const fd = new FormData(e.currentTarget);
    const payload: BookStandPayload = {
      first_name:           fd.get('first_name')           as string,
      last_name:            fd.get('last_name')            as string,
      job_title:            fd.get('job_title')            as string,
      company_name:         fd.get('company_name')         as string,
      company_website:      fd.get('company_website')      as string,
      work_email:           fd.get('work_email')           as string,
      phone:                fd.get('phone')                as string,
      country_of_residence: fd.get('country_of_residence') as string,
      sector:               fd.get('sector')               as string,
      booth_number:         fd.get('booth_number')         as string || undefined,
      accept_term_conditions: fd.get('terms') === 'on' ? 1 : 0,
    };
    submit(payload);
  }

  if (!t) return null;

  return (
    <TwoPanelFormSection
      title={title || t.title}
      subtitle={subtitle || t.subtitle}
      contactItems={standContactInfo}
      submitLabel={t.submit}
      onSubmit={handleSubmit}
      isSubmitting={submitting}
      loading={isLoading}
      submitSuccess={success}
      submitError={error}
      successMessage={t.success}
      terms={terms}
      renderFormFields={(styles) => (
        <>
          <div className={styles.row}>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>{t.fields.firstName}</span>
              <input
                name="first_name"
                className={styles.input}
                type="text"
                placeholder={t.placeholders.firstName}
                required
              />
            </motion.label>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>{t.fields.lastName}</span>
              <input
                name="last_name"
                className={styles.input}
                type="text"
                placeholder={t.placeholders.lastName}
                required
              />
            </motion.label>
          </div>

          <div className={styles.row}>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>{t.fields.jobTitle}</span>
              <input
                name="job_title"
                className={styles.input}
                type="text"
                placeholder={t.placeholders.jobTitle}
                required
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
              <span className={styles.fieldLabel}>{t.fields.companyWebsite}</span>
              <input
                name="company_website"
                className={styles.input}
                type="url"
                placeholder={t.placeholders.companyWebsite}
                required
              />
            </motion.label>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>{t.fields.workEmail}</span>
              <input
                name="work_email"
                className={styles.input}
                type="email"
                placeholder={t.placeholders.workEmail}
                required
              />
            </motion.label>
          </div>

          <div className={styles.row}>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>{t.fields.phone}</span>
              <input
                name="phone"
                className={styles.input}
                type="tel"
                placeholder={t.placeholders.phone}
                required
              />
            </motion.label>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>{t.fields.country}</span>
              <span className={styles.selectWrap}>
                <select
                  name="country_of_residence"
                  className={`${styles.input} ${styles.selectField}`}
                  defaultValue=""
                  required
                >
                  <option value="" disabled>{t.placeholders.selectCountry}</option>
                  {(countries || []).map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </span>
            </motion.label>
          </div>

          <div className={styles.row}>
            <motion.label
              className={styles.field}
              variants={fadeInUp}
              style={{ gridColumn: '1 / -1' }}
            >
              <span className={styles.fieldLabel}>{t.fields.sector}</span>
              <span className={styles.selectWrap}>
                <select
                  name="sector"
                  className={`${styles.input} ${styles.selectField}`}
                  defaultValue=""
                  required
                >
                  <option value="" disabled>{t.placeholders.selectSector}</option>
                  {(sectors || []).map((sector) => (
                    <option key={sector} value={sector}>{sector}</option>
                  ))}
                </select>
              </span>
            </motion.label>
          </div>

          <motion.label className={styles.field} variants={fadeInUp}>
            <span className={styles.fieldLabel}>{t.fields.boothNumber}</span>
            <input
              name="booth_number"
              className={styles.input}
              type="text"
              placeholder={t.placeholders.boothNumber}
            />
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
