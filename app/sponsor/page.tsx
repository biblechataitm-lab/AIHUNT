import React from 'react';
import type { Metadata } from 'next';
import { getSiteConfig } from '@/lib/ads';
import { ExternalLink, CheckCircle, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sponsor & Advertise — AIHunt',
  description: 'Promote your AI tool, model, or software to thousands of active AI engineers, builders, and early adopters.',
};

export default async function SponsorPage() {
  const config = await getSiteConfig();

  return (
    <div className="container" style={{ maxWidth: '800px', paddingTop: '3rem', paddingBottom: '5rem' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--color-primary)' }}>
          Sponsorship Opportunities
        </span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '1rem', letterSpacing: '-0.5px' }}>
          Advertise on {config?.name || 'AIHunt'}
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--color-body)', lineHeight: 1.6 }}>
          Reach thousands of AI researchers, developers, engineering leaders, and early adopters seeking the next frontier tool for their stack.
        </p>
      </div>

      <div className="sidebar-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, fontFamily: 'var(--font-display)', marginBottom: '1.25rem' }}>
          Why Sponsor AIHunt?
        </h2>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <CheckCircle size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '3px' }} />
            <span style={{ color: 'var(--color-body)', fontSize: '14.5px', lineHeight: 1.5 }}>
              <strong style={{ color: 'var(--color-ink)' }}>High-Intent AI Audience:</strong> Directory visitors are actively evaluating frontier LLMs, coding agents, API toolchains, and productivity apps.
            </span>
          </li>
          <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <CheckCircle size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '3px' }} />
            <span style={{ color: 'var(--color-body)', fontSize: '14.5px', lineHeight: 1.5 }}>
              <strong style={{ color: 'var(--color-ink)' }}>Native Placement Units:</strong> Placements sit seamlessly in sidebar layouts and feed streams without intrusive popups or layout shift.
            </span>
          </li>
          <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <ShieldCheck size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '3px' }} />
            <span style={{ color: 'var(--color-body)', fontSize: '14.5px', lineHeight: 1.5 }}>
              <strong style={{ color: 'var(--color-ink)' }}>Guaranteed 50% + 1s Viewability:</strong> Units are verified via IntersectionObserver beacons only after sustained viewer exposure.
            </span>
          </li>
        </ul>
      </div>

      <div
        style={{
          backgroundColor: 'var(--color-surface-card)',
          border: '1px solid var(--color-hairline)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem 2rem',
          textAlign: 'center',
        }}
      >
        <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-display)', marginBottom: '0.75rem' }}>
          Book a Placement via Central Portal
        </h3>
        <p style={{ color: 'var(--color-body)', marginBottom: '1.5rem', maxWidth: '480px', margin: '0 auto 1.5rem auto', fontSize: '14px' }}>
          All ad inventory across AIHunt and the network is managed centrally through our advertiser portal.
        </p>
        <a
          href="https://peerlist.io"
          target="_blank"
          rel="noopener"
          className="btn-primary"
          style={{ padding: '0.85rem 1.75rem', fontSize: '0.95rem' }}
        >
          View Rate Card & Book Slot <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}
