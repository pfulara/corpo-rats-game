import type { Metadata } from 'next';
import { Lato } from 'next/font/google';

import './globals.css';

import { Toaster } from '@/components/ui/toaster';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});

export const metadata: Metadata = {
  title: {
    default: 'Corpo Rats',
    template: '%s | Corpo Rats',
  },
  description: 'Take part in the rat race',
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body
        className={`${lato.className} min-h-screen bg-slate-200`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
