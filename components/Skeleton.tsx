import React from 'react';

export function ProductCardSkeleton() {
  return (
    <div
      style={{
        display: 'flex',
        gap: 'var(--spacing-md)',
        padding: 'var(--spacing-lg)',
        backgroundColor: 'var(--color-surface-card)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-hairline)',
        marginBottom: 'var(--spacing-md)',
      }}
    >
      <div
        className="skeleton"
        style={{ width: '64px', height: '64px', borderRadius: 'var(--radius-md)', flexShrink: 0 }}
      />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="skeleton" style={{ width: '180px', height: '22px' }} />
          <div className="skeleton" style={{ width: '50px', height: '22px' }} />
        </div>
        <div className="skeleton" style={{ width: '90%', height: '16px' }} />
        <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
          <div className="skeleton" style={{ width: '80px', height: '14px' }} />
          <div className="skeleton" style={{ width: '60px', height: '14px' }} />
        </div>
      </div>
    </div>
  );
}

export function ProductListSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div>
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function SidebarSkeleton() {
  return (
    <aside style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
      <div
        style={{
          padding: 'var(--spacing-lg)',
          backgroundColor: 'var(--color-surface-card)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-hairline)',
        }}
      >
        <div className="skeleton" style={{ width: '120px', height: '16px', marginBottom: '12px' }} />
        <div className="skeleton" style={{ width: '100%', height: '14px', marginBottom: '8px' }} />
        <div className="skeleton" style={{ width: '85%', height: '14px' }} />
      </div>
    </aside>
  );
}
