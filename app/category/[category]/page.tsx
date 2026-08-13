import React, { Suspense } from 'react';
import { getProducts } from '@/lib/ads/server';
import ProductList from '@/components/ProductList';
import Categories from '@/components/Categories';
import styles from '../../page.module.css';

export const revalidate = 0;

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  return {
    title: `${category.replace('-', ' ')} Products - AIHunt`,
  };
}

async function CategoryProducts({ category }: { category: string }) {
  const products = await getProducts({ category });
  return <ProductList products={products} />;
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
        <Categories currentCategory={category} />
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '48px', margin: 0, letterSpacing: '-1px', textTransform: 'capitalize' }}>
          {category.replace('-', ' ')}
        </h1>
        <Suspense fallback={<div style={{ height: '200px' }}>Loading...</div>}>
          <CategoryProducts category={category} />
        </Suspense>
      </div>
    </div>
  );
}
