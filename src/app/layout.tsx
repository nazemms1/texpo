import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '@/src/styles/theme';
import { SmoothScroll } from '@/src/components/ui/SmoothScroll/SmoothScroll';
import { CustomCursor } from '@/src/components/ui/Cursor/CustomCursor';
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
  icons: {
    icon: '/logos/texpo.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable} data-mantine-color-scheme="dark" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body suppressHydrationWarning>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <SmoothScroll>
            <CustomCursor />
            {children}
          </SmoothScroll>
        </MantineProvider>
      </body>
    </html>
  );
}
