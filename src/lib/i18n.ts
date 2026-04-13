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
    label: 'English',
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
    label: 'العربية',
    switchTo: 'English',
  },
} as const;

export const heroTranslations = {
  en: {
    discoverMore: 'Book a Stand',
    becomeSponsor: 'Become A Sponsor',
  },
  ar: {
    discoverMore: 'احجز منصة عرض',
    becomeSponsor: 'كن راعياً',
  },
} as const;

export const aboutTranslations = {
  en: {
    viewMap: 'View in Map',
    watch: 'Watch',
  },
  ar: {
    viewMap: 'شاهد على الخارطة',
    watch: 'شاهد الفيديو',
  },
} as const;

export const bookAStandTranslations = {
  en: {
    title: 'BOOK A STAND',
    subtitle: 'Reserve your exhibition stand at TEXPO and connect with thousands of industry leaders, investors, and innovators.',
    fields: {
      firstName: 'First Name',
      lastName: 'Last Name',
      jobTitle: 'Job Title',
      companyName: 'Company Name',
      companyWebsite: 'Company Website',
      workEmail: 'Work Email Address',
      phone: 'Mobile Phone',
      country: 'Country of Residence',
      sector: 'What sector are you in?',
      boothNumber: 'Booth Number',
    },
    placeholders: {
      firstName: 'John',
      lastName: 'Doe',
      jobTitle: 'Chief Executive Officer',
      companyName: 'Tech Global Inc.',
      companyWebsite: 'https://www.yourcompany.com',
      workEmail: 'john@company.com',
      phone: '+1 234 567 890',
      selectCountry: 'Select your country',
      selectSector: 'Select your sector',
      boothNumber: 'e.g. A-101',
    },
    submit: 'Book My Stand',
    success: "Your stand booking request has been submitted! We'll be in touch shortly.",
  },
  ar: {
    title: 'احجز جناحاً',
    subtitle: 'احجز جناحك في معرض تكسبو وتواصل مع الآلاف من قادة الصناعة والمستثمرين والمبتكرين.',
    fields: {
      firstName: 'الاسم الأول',
      lastName: 'الكنية',
      jobTitle: 'المسمى الوظيفي',
      companyName: 'اسم الشركة',
      companyWebsite: 'الموقع الإلكتروني للشركة',
      workEmail: 'البريد الإلكتروني للعمل',
      phone: 'رقم الهاتف المحمول',
      country: 'بلد الإقامة',
      sector: 'ما هو قطاع عملك؟',
      boothNumber: 'رقم الجناح',
    },
    placeholders: {
      firstName: 'الاسم',
      lastName: 'الكنية',
      jobTitle: 'الرئيس التنفيذي',
      companyName: 'شركة تك العالمية',
      companyWebsite: 'https://www.yourcompany.com',
      workEmail: 'john@company.com',
      phone: '+963 9xx xxx xxx',
      selectCountry: 'اختر البلد',
      selectSector: 'اختر القطاع',
      boothNumber: 'مثال: أ-101',
    },
    submit: 'احجز جناحي الآن',
    success: 'تم إرسال طلب حجز الجناح الخاص بك بنجاح! سنتواصل معك قريباً.',
  },
} as const;

export const pageHeroTranslations = {
  en: {
    visitors: { title: 'OUR', accent: 'VISITORS' },
    about: { title: 'About', accent: 'TEXPO LAND' },
    contact: { title: 'CONTACT', accent: 'US' },
    bookStand: { title: 'BOOK A', accent: 'STAND' },
    becomeSponsor: { title: 'BECOME', accent: 'A SPONSOR' },
    texpo2025: { title: 'TEXPO', accent: '2025' },
  },
  ar: {
    visitors: { title: 'زوارنا', accent: '' },
    about: { title: 'عن أرض', accent: 'تكسبو' },
    contact: { title: 'اتصل', accent: 'بنا' },
    bookStand: { title: 'احجز', accent: 'جناحاً' },
    becomeSponsor: { title: 'كن', accent: 'راعياً' },
    texpo2025: { title: 'تكسبو', accent: '2025' },
  },
} as const;

export const sponsorshipTiersTranslations = {
  en: {
    exclusive: 'EXCLUSIVE',
    secureSponsorship: 'Secure sponsorship',
    selectTier: 'Select tier',
  },
  ar: {
    exclusive: 'حصري',
    secureSponsorship: 'احجز الرعاية',
    selectTier: 'اختر الفئة',
  },
} as const;

export const becomeASponsorFormTranslations = {
  en: {
    emailUs: 'Email Us',
    callUs: 'Call Us',
    office: 'Office',
    submitRequest: 'Submit Request',
    submitting: 'Submitting…',
    successMessage: 'Thank you! Our partnership team will contact you within 24 hours.',
    termsCheckbox: 'I have read and agree to the Terms and Conditions and Privacy Policy.',
    fields: {
      fullName: 'Full Name',
      companyName: 'Company Name',
      businessSector: 'Business Sector',
      countryCity: 'Country / City',
      sponsorshipCategories: 'Sponsorship Categories',
      phoneNumber: 'Phone Number',
      emailAddress: 'Email Address',
      companyLogo: 'Company Logo',
      address: 'Address',
      message: 'Message',
    },
    placeholders: {
      fullName: 'John Doe',
      companyName: 'Tech Global Inc.',
      businessSector: 'AI & Robotics',
      countryCity: 'London, UK',
      selectCategory: 'Select a sponsorship category',
      phoneNumber: '+1 234 567 890',
      emailAddress: 'john@company.com',
      logoUpload: 'Upload your company logo (PNG, JPG, SVG)',
      address: 'Address',
      message: 'How can we help your brand excel at TEXPO LAND?',
    },
  },
  ar: {
    emailUs: 'راسلنا عبر البريد',
    callUs: 'اتصل بنا',
    office: 'المكتب',
    submitRequest: 'إرسال الطلب',
    submitting: 'جاري الإرسال…',
    successMessage: 'شكراً لك! سيتواصل معك فريق الشراكات لدينا خلال 24 ساعة.',
    termsCheckbox: 'لقد قرأت ووافقت على الشروط والأحكام وسياسة الخصوصية.',
    fields: {
      fullName: 'الاسم الكامل',
      companyName: 'اسم الشركة',
      businessSector: 'قطاع الأعمال',
      countryCity: 'البلد / المدينة',
      sponsorshipCategories: 'فئات الرعاية',
      phoneNumber: 'رقم الهاتف',
      emailAddress: 'البريد الإلكتروني',
      companyLogo: 'شعار الشركة',
      address: 'العنوان',
      message: 'الرسالة',
    },
    placeholders: {
      fullName: 'الاسم الكامل',
      companyName: 'اسم الشركة',
      businessSector: 'الذكاء الاصطناعي والروبوتات',
      countryCity: 'دمشق، سوريا',
      selectCategory: 'اختر فئة الرعاية',
      phoneNumber: '+963 9xx xxx xxx',
      emailAddress: 'john@company.com',
      logoUpload: 'ارفع شعار شركتك (PNG, JPG, SVG)',
      address: 'العنوان',
      message: 'كيف يمكننا مساعدة علامتك التجارية على التألق في أرض تكسبو؟',
    },
  },
} as const;
