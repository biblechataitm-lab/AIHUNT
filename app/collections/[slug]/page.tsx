import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getProducts } from '@/lib/ads/server';
import ProductList from '@/components/ProductList';
import Categories from '@/components/Categories';
import styles from '../../page.module.css';

export const revalidate = 0;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return {
    title: `${slug.replace('-', ' ')} Collection - AIHunt`,
  };
}

async function CollectionProducts({ since }: { since: string }) {
  const products = await getProducts({ since });
  return <ProductList products={products} />;
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;

  if (slug !== 'this-week' && slug !== 'this-month') {
    notFound();
  }

  const since = slug === 'this-week' ? 'week' : 'month';
  const title = slug === 'this-week' ? "This Week's Best" : "Monthly Roundups";

  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
        <Categories />
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '48px', margin: 0, letterSpacing: '-1px' }}>
          {title}
        </h1>
        <Suspense fallback={<div style={{ height: '200px' }}>Loading...</div>}>
          <CollectionProducts since={since} />
        </Suspense>
      </div>
    </div>
  );
}
