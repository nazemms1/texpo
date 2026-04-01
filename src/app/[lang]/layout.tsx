import { notFound } from 'next/navigation';
import { Header } from '@/src/components/layout/Header/Header';
import { Footer } from '@/src/components/layout/Footer/Footer';
import { VALID_LANGS } from '@/src/lib/i18n';

export function generateStaticParams() {
  return VALID_LANGS.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!VALID_LANGS.includes(lang as 'en' | 'ar')) {
    notFound();
  }

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <div dir={dir}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
