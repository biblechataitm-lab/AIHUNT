import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — AIHunt',
  description: 'Terms and conditions for using the AIHunt directory and developer ecosystem.',
};

export default function TermsPage() {
  return (
    <div className="container" style={{ maxWidth: '800px', paddingTop: '3rem', paddingBottom: '5rem' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '1.5rem', letterSpacing: '-0.5px' }}>
        Terms of Service
      </h1>

      <div
        style={{
          backgroundColor: 'var(--color-surface-card)',
          border: '1px solid var(--color-hairline)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem',
          color: 'var(--color-body)',
        }}
        className="prose-body"
      >
        <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <h2>1. Directory Usage</h2>
        <p>
          By accessing AIHunt, you agree to comply with these terms. The directory content, rankings, and listings are provided for informational and discovery purposes.
        </p>

        <h2>2. Community Submissions</h2>
        <p>
          Makers and builders submitting software represent that they possess the rights to feature the corresponding brand assets, product links, and intellectual property.
        </p>

        <h2>3. External Links & Third Parties</h2>
        <p>
          AIHunt lists third-party AI software, services, and sponsor websites. We do not endorse, guarantee, or assume responsibility for external services or third-party transactions.
        </p>
      </div>
    </div>
  );
}
