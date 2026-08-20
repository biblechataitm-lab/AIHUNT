import React from 'react';
import { AlertTriangle } from 'lucide-react';

export function Maintenance({ message }: { message?: string | null }) {
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--spacing-xl)',
        backgroundColor: 'var(--color-canvas)',
        color: 'var(--color-ink)',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '480px',
          padding: 'var(--spacing-xxl)',
          backgroundColor: 'var(--color-surface-card)',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--color-hairline)',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: 'rgba(204, 120, 92, 0.12)',
            color: 'var(--color-primary)',
            marginBottom: 'var(--spacing-lg)',
          }}
        >
          <AlertTriangle size={28} />
        </div>
        <h1
          style={{
            fontSize: '28px',
            fontFamily: 'var(--font-display)',
            marginBottom: 'var(--spacing-sm)',
            color: 'var(--color-ink)',
          }}
        >
          Under Scheduled Maintenance
        </h1>
        <p
          style={{
            fontSize: '15px',
            color: 'var(--color-body)',
            lineHeight: 1.6,
          }}
        >
          {message || 'We are performing routine maintenance to improve our directory. Please check back shortly.'}
        </p>
      </div>
    </div>
  );
}
