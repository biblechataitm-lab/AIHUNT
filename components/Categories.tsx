import React from 'react';
import Link from 'next/link';

export default function Categories({ currentCategory }: { currentCategory?: string }) {
  const categories = [
    { slug: 'saas', label: 'SaaS' },
    { slug: 'ai', label: 'AI' },
    { slug: 'developer-tools', label: 'Developer Tools' },
    { slug: 'e-commerce', label: 'E-commerce' },
    { slug: 'productivity', label: 'Productivity' },
    { slug: 'marketing', label: 'Marketing' }
  ];

  return (
    <div style={{ display: 'flex', gap: 'var(--spacing-sm)', overflowX: 'auto', paddingBottom: 'var(--spacing-md)' }}>
      <Link href="/" style={{
        backgroundColor: currentCategory === undefined ? 'var(--color-canvas)' : 'var(--color-surface-card)',
        color: currentCategory === undefined ? 'var(--color-primary)' : 'var(--color-ink)',
        padding: '6px 12px',
        borderRadius: 'var(--radius-sm)',
        fontSize: '13px',
        fontWeight: 500,
        whiteSpace: 'nowrap',
        border: currentCategory === undefined ? '1px solid var(--color-primary)' : '1px solid var(--color-hairline)'
      }}>
        All
      </Link>
      {categories.map(cat => {
        const isActive = currentCategory === cat.slug;
        return (
          <Link key={cat.slug} href={`/category/${cat.slug}`} style={{
            backgroundColor: isActive ? 'var(--color-canvas)' : 'var(--color-surface-card)',
            color: isActive ? 'var(--color-primary)' : 'var(--color-ink)',
            padding: '6px 12px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '13px',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            border: isActive ? '1px solid var(--color-primary)' : '1px solid var(--color-hairline)'
          }}>
            {cat.label}
          </Link>
        );
      })}
    </div>
  );
}
