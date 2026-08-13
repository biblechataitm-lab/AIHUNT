import React from 'react';
import { getSiteConfig } from '@/lib/ads/server';
import styles from '../product/[id]/product.module.css'; // Reuse article styles

export const metadata = {
  title: 'About Us - AIHunt',
};

export default async function AboutPage() {
  const config = await getSiteConfig();

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: 'var(--spacing-section) var(--spacing-xl)' }}>
      <div className={styles.article}>
        <h1>About {config?.name || 'AIHunt'}</h1>
        <p style={{ fontSize: '22px', color: 'var(--color-body-strong)' }}>
          {config?.description || 'Discover the best products on the internet.'}
        </p>
        <h2>Our Mission</h2>
        <p>
          We curate the absolute best products in the AI ecosystem. Each product launch is carefully reviewed
          to ensure it meets our quality standards. Our goal is to connect builders with early adopters.
        </p>
      </div>
    </div>
  );
}
