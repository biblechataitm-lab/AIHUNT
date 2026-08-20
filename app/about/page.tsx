import React from 'react';
import type { Metadata } from 'next';
import { getSiteConfig } from '@/lib/ads';

export const metadata: Metadata = {
  title: 'About — AIHunt',
  description: 'Learn about AIHunt and our mission to curate the best AI tools and software.',
};

export default async function AboutPage() {
  const config = await getSiteConfig();

  return (
    <div className="container" style={{ maxWidth: '800px', paddingTop: '3rem', paddingBottom: '5rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '-0.5px' }}>
          About {config?.name || 'AIHunt'}
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--color-body)', lineHeight: 1.6 }}>
          {config?.name || 'AIHunt'} is an independent, community-driven editorial directory dedicated to cataloging the next generation of artificial intelligence applications, autonomous agents, and developer tooling.
        </p>
      </div>

      <div
        style={{
          backgroundColor: 'var(--color-surface-card)',
          border: '1px solid var(--color-hairline)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem',
          lineHeight: 1.7,
          color: 'var(--color-body)',
        }}
        className="prose-body"
      >
        <h2>Our Mission</h2>
        <p>
          As artificial intelligence shifts from exploratory research into daily developer workflows, keeping track of reliable, high-quality tools has become paramount. AIHunt cuts through the noise to showcase genuine innovations built by passionate makers, researchers, and engineering teams.
        </p>

        <h2>How Products Are Ranked</h2>
        <p>
          Products are ordered organically by launch freshness and community upvotes. We operate with zero sponsored artificial ranking in the organic feeds — all promotional placements are clearly disclosed via dedicated native sponsor units.
        </p>

        <h2>The Publisher Network</h2>
        <p>
          AIHunt is part of a federated publisher ad network providing privacy-first, non-tracking native advertising for high-intent software buyers and builders.
        </p>
      </div>
    </div>
  );
}
