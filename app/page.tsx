import React, { Suspense } from 'react';
import Link from 'next/link';
import { getSiteConfig, getProducts, getAd } from '@/lib/ads/server';
import { AdSlot } from '@/lib/ads/client';
import ProductList from '@/components/ProductList';
import Categories from '@/components/Categories';
import styles from './page.module.css';

export const revalidate = 0; // Disable static rendering for ads


function ProductSkeleton() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} style={{ 
          display: 'flex', gap: 'var(--spacing-md)', padding: 'var(--spacing-md)',
          backgroundColor: 'var(--color-surface-card)', borderRadius: 'var(--radius-lg)'
        }}>
          <div style={{ width: '64px', height: '64px', backgroundColor: 'var(--color-hairline)', borderRadius: 'var(--radius-md)' }} />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ width: '150px', height: '20px', backgroundColor: 'var(--color-hairline)', borderRadius: '4px' }} />
            <div style={{ width: '100%', height: '16px', backgroundColor: 'var(--color-hairline)', borderRadius: '4px' }} />
            <div style={{ width: '80%', height: '16px', backgroundColor: 'var(--color-hairline)', borderRadius: '4px' }} />
          </div>
        </div>
      ))}
    </div>
  );
}

async function HomeProducts() {
  const products = await getProducts();
  return <ProductList products={products} />;
}

async function Sidebar() {
  const config = await getSiteConfig();
  const sidebar1Ad = await getAd({ slot: 'sidebar-1' });
  const sidebar2Ad = await getAd({ slot: 'sidebar-2' });

  return (
    <aside style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
      <div style={{
        backgroundColor: 'var(--color-surface-card)',
        color: 'var(--color-ink)',
        padding: 'var(--spacing-lg)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-hairline)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-muted)' }}>
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          <h3 style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-muted)', margin: 0 }}>
            About {config?.name || 'AIHunt'}
          </h3>
        </div>
        <p style={{ fontSize: '14px', lineHeight: 1.5, margin: 0, color: 'var(--color-body)' }}>
          {config?.description || 'The premier product launch directory for modern tools, applications, and maker software.'}
        </p>
      </div>

      <div style={{
        backgroundColor: 'var(--color-surface-card)',
        color: 'var(--color-ink)',
        padding: 'var(--spacing-lg)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-hairline)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-muted)' }}>
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <h3 style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-muted)', margin: 0 }}>
            Collections
          </h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/collections/this-week" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', backgroundColor: 'var(--color-canvas)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-hairline)', fontSize: '14px', fontWeight: 500, color: 'var(--color-ink)', textDecoration: 'none' }}>
            This Week's Top Products
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
          <Link href="/collections/this-month" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', backgroundColor: 'var(--color-canvas)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-hairline)', fontSize: '14px', fontWeight: 500, color: 'var(--color-ink)', textDecoration: 'none' }}>
            This Month's Top Products
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>

      <AdSlot ad={sidebar1Ad} />
      <AdSlot ad={sidebar2Ad} />
    </aside>
  );
}

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
        <Categories />
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '48px', margin: 0, letterSpacing: '-1px' }}>
          Today's Launches
        </h1>
        <Suspense fallback={<ProductSkeleton />}>
          <HomeProducts />
        </Suspense>
      </div>
      
      <div>
        <Suspense fallback={null}>
          <Sidebar />
        </Suspense>
      </div>
    </div>
  );
}
