export type Lang = 'en' | 'ar';

export const VALID_LANGS: Lang[] = ['en', 'ar'];

export const headerTranslations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      contact: 'Contact Us',
      sponsor: 'Become a Sponsor',
      visitors: 'Our Visitors',
      texpo2025: 'Texpo 2025',
      bookStand: 'Book a Stand',
    },
    switchTo: 'العربية',
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عن المعرض',
      contact: 'اتصل بنا',
      sponsor: 'كن راعياً',
      visitors: 'زوارنا',
      texpo2025: 'تكسبو 2025',
      bookStand: 'احجز جناحاً',
    },
    switchTo: 'English',
  },
} as const;
