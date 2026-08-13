import React from 'react';
import styles from '../product/[id]/product.module.css';

export const metadata = {
  title: 'Submit Product - AIHunt',
};

export default function SubmitPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: 'var(--spacing-section) var(--spacing-xl)' }}>
      <div className={styles.article}>
        <h1>Launch Your Product</h1>
        <p style={{ fontSize: '22px', color: 'var(--color-body-strong)' }}>
          Submit once to the central network, and appear on all relevant niche directories.
        </p>
        <h2>How it works</h2>
        <p>
          AIHunt is part of a broader product launch network. When you submit your product to the main registry, 
          our curation engine automatically lists it on niche sites (like AIHunt) if your product matches our category tags.
        </p>
        <p>
          <a href="#" style={{
            display: 'inline-block',
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-on-primary)',
            padding: '12px 24px',
            borderRadius: 'var(--radius-md)',
            fontWeight: 500,
            textDecoration: 'none',
            marginTop: '16px'
          }}>
            Submit to Network
          </a>
        </p>
      </div>
    </div>
  );
}
