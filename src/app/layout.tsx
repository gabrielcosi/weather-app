import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { MainLayout } from '@/layout';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'Weather App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={openSans.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
