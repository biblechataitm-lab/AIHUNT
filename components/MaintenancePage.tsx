import React from 'react';

export default function MaintenancePage({ message }: { message?: string }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: 'var(--color-canvas)',
      color: 'var(--color-ink)',
      padding: 'var(--spacing-xl)',
      textAlign: 'center'
    }}>
      <h1 style={{ marginBottom: 'var(--spacing-md)' }}>Under Maintenance</h1>
      <p style={{ fontSize: '18px', maxWidth: '600px', color: 'var(--color-body)' }}>
        {message || 'We are currently performing scheduled maintenance. Please check back soon.'}
      </p>
    </div>
  );
}
