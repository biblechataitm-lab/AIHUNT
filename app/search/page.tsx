import React, { Suspense } from 'react';
import { getProducts } from '@/lib/ads/server';
import ProductList from '@/components/ProductList';
import Categories from '@/components/Categories';
import styles from '../page.module.css';

export const revalidate = 0;

export const metadata = {
  title: 'Search Results - AIHunt',
};

type Props = {
  searchParams: Promise<{ q?: string }>;
};

async function SearchResults({ q }: { q: string }) {
  const products = await getProducts({ q });
  return <ProductList products={products} />;
}

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const query = q || '';

  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
        <Categories />
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '48px', margin: 0, letterSpacing: '-1px' }}>
          Search Results for "{query}"
        </h1>
        <Suspense fallback={<div style={{ height: '200px' }}>Loading...</div>}>
          <SearchResults q={query} />
        </Suspense>
      </div>
    </div>
  );
}
