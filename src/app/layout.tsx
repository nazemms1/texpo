import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '@/src/styles/theme';
import { Header } from '@/src/components/layout/Header/Header';
import { Footer } from '@/src/components/layout/Footer/Footer';
import '@mantine/core/styles.css';
import '@/src/styles/globals.css';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TEXPO — Technology Exhibition',
  description:
    'TEXPO is the world\'s premier international technology exhibition, connecting innovators, industries, and ideas on a global stage.',
  keywords: ['technology', 'exhibition', 'innovation', 'TEXPO', 'tech expo'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <Header />
          <main>{children}</main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
