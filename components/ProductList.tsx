import React from 'react';
import Link from 'next/link';
import type { Product } from '@/lib/ads/server';

export default function ProductList({ products }: { products: Product[] }) {
  if (!products || products.length === 0) {
    return (
      <div style={{ padding: 'var(--spacing-xxl)', textAlign: 'center', backgroundColor: 'var(--color-surface-card)', borderRadius: 'var(--radius-lg)' }}>
        <h3 style={{ color: 'var(--color-muted)' }}>No products found</h3>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
      {products.map(product => (
        <div key={product.id} style={{
          display: 'flex',
          gap: 'var(--spacing-lg)',
          padding: 'var(--spacing-lg)',
          backgroundColor: 'var(--color-surface-card)',
          borderRadius: 'var(--radius-lg)',
          color: 'inherit',
          transition: 'transform 0.2s ease',
          position: 'relative',
        }}>
          <img src={product.logoUrl} alt={`${product.name} logo`} style={{
            width: '64px',
            height: '64px',
            borderRadius: 'var(--radius-md)',
            objectFit: 'cover'
          }} />
          
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
              <span style={{ fontSize: '18px', fontWeight: 500, fontFamily: 'var(--font-display)' }}>
                {product.name}
              </span>
              <a href={product.link} target="_blank" rel="noopener noreferrer" style={{
                color: 'var(--color-muted)',
                display: 'inline-flex',
                alignItems: 'center',
                position: 'relative',
                zIndex: 2,
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
              <span style={{
                marginLeft: 'auto',
                backgroundColor: 'var(--color-canvas)',
                padding: '4px 12px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '12px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                border: '1px solid var(--color-hairline)',
                position: 'relative',
                zIndex: 2,
              }}>
                {product.category}
              </span>
            </div>
            
            <p style={{
              margin: 0,
              fontSize: '16px',
              color: 'var(--color-body)',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}>
              {product.tagline}
            </p>
          </div>
          <Link href={`/product/${product.id}`} style={{ position: 'absolute', inset: 0, zIndex: 1 }} aria-label={`View ${product.name} details`} />
        </div>
      ))}
    </div>
  );
}
