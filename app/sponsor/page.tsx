import React from 'react';
import styles from '../product/[id]/product.module.css';

export const metadata = {
  title: 'Sponsor - AIHunt',
};

export default function SponsorPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: 'var(--spacing-section) var(--spacing-xl)' }}>
      <div className={styles.article}>
        <h1>Sponsor AIHunt</h1>
        <p style={{ fontSize: '22px', color: 'var(--color-body-strong)' }}>
          Reach thousands of AI early adopters, makers, and enthusiasts.
        </p>
        <h2>Ad Placements</h2>
        <p>
          We offer high-visibility ad placements in our sidebar across the entire directory network.
          By booking a campaign on the central network, you can optionally target specific directories like AIHunt.
        </p>
        <p>
          <a href="https://peerlist.io" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block',
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-on-primary)',
            padding: '12px 24px',
            borderRadius: 'var(--radius-md)',
            fontWeight: 500,
            textDecoration: 'none',
            marginTop: '16px'
          }}>
            View Rate Card & Book
          </a>
        </p>
      </div>
    </div>
  );
}
