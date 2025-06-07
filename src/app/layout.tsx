import '~/styles/globals.css';

import { ClerkProvider } from '@clerk/nextjs';
import { SITE_CONFIG } from '~/data/constants';
import { TRPCReactProvider } from '~/trpc/react';
import { type Metadata } from 'next';
import { Geist } from 'next/font/google';

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_CONFIG.title}`,
    default: `${SITE_CONFIG.title} — ${SITE_CONFIG.headline}`,
  },
  description: SITE_CONFIG.description,
  authors: [
    {
      name: SITE_CONFIG.author.name,
      url: SITE_CONFIG.author.url,
    },
  ],
  openGraph: {
    title: SITE_CONFIG.og.title,
    type: 'website',
    images: [SITE_CONFIG.og.image],
  },
  twitter: {
    title: SITE_CONFIG.tw.title,
    creator: SITE_CONFIG.tw.author,
    card: SITE_CONFIG.tw.card,
    images: [SITE_CONFIG.tw.image],
  },
};

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${geist.variable}`}>
        <body>
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
