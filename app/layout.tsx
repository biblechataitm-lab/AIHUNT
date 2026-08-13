import type { Metadata } from 'next';
import { getSiteConfig } from '@/lib/ads';
import { notFound } from 'next/navigation';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MaintenancePage from '@/components/MaintenancePage';

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteConfig();
  return {
    title: config?.name || 'Product Directory',
    description: config?.description || 'Discover new products.',
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const config = await getSiteConfig();

  if (config?.status === 'disabled') {
    notFound();
  }

  if (config?.status === 'maintenance') {
    return (
      <html lang="en">
        <body>
          <MaintenancePage message={config.statusMessage} />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body>
        <Header siteName={config?.name} />
        <main style={{ minHeight: 'calc(100vh - 128px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
