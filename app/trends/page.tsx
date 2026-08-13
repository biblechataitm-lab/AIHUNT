import React, { Suspense } from 'react';
import { getProducts } from '@/lib/ads/server';
import ProductList from '@/components/ProductList';
import Categories from '@/components/Categories';
import styles from '../page.module.css';

export const revalidate = 0;

export const metadata = {
  title: 'Trending Products - AIHunt',
};

async function TrendingProducts() {
  const products = await getProducts({ sort: 'top' });
  return <ProductList products={products} />;
}

export default function TrendsPage() {
  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
        <Categories />
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '48px', margin: 0, letterSpacing: '-1px' }}>
          Trending Now
        </h1>
        <Suspense fallback={<div style={{ height: '200px' }}>Loading...</div>}>
          <TrendingProducts />
        </Suspense>
      </div>
    </div>
  );
}
