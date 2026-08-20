import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — AIHunt',
  description: 'Our commitment to privacy, data protection, and transparent native ad tracking.',
};

export default function PrivacyPage() {
  return (
    <div className="container" style={{ maxWidth: '800px', paddingTop: '3rem', paddingBottom: '5rem' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '1.5rem', letterSpacing: '-0.5px' }}>
        Privacy Policy
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

        <h2>1. Privacy First Architecture</h2>
        <p>
          AIHunt respects your privacy. We do not sell your personal information, nor do we deploy invasive third-party tracking beacons, cross-site identity graphs, or cookie sync pixels across our directory.
        </p>

        <h2>2. First-Party Visitor Identity</h2>
        <p>
          To prevent repetitive ad exposure (frequency capping), our site sets an anonymous first-party cookie (<code>plads_vid</code>) on our own domain. This cookie contains an ephemeral random identifier that is never linked to your personal real-world identity.
        </p>

        <h2>3. Viewability Telemetry</h2>
        <p>
          We report verified ad impressions using standard browser <code>IntersectionObserver</code> telemetry and <code>sendBeacon</code> dispatches when a sponsor unit is 50% visible for at least 1 second.
        </p>

        <h2>4. Contact</h2>
        <p>
          For questions regarding this privacy policy, please reach out to our team at <code>privacy@aihunt.com</code>.
        </p>
      </div>
    </div>
  );
}
