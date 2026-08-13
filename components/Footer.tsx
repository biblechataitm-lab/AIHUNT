import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--color-surface-dark)',
      color: 'var(--color-on-dark-soft)',
      padding: '64px var(--spacing-xl) 32px var(--spacing-xl)',
      fontSize: '14px',
      marginTop: 'var(--spacing-section)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '32px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingRight: '32px' }}>
            <Link href="/" style={{ fontSize: '20px', fontWeight: 700, fontFamily: 'var(--font-display)', letterSpacing: '-0.5px', color: 'var(--color-on-dark)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              DIRECTORY
              <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--color-primary)', borderRadius: '50%', display: 'inline-block' }}></span>
            </Link>
            <p style={{ margin: 0, lineHeight: 1.6 }}>
              The premier product launch directory for modern tools, applications, and maker software. Built on the Peerlist publishing network.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ color: 'var(--color-on-dark)', fontWeight: 600, fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase' }}>Directory</div>
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Today's Launches</Link>
            <Link href="/trends" style={{ textDecoration: 'none', color: 'inherit' }}>Trending Products</Link>
            <Link href="/collections/this-week" style={{ textDecoration: 'none', color: 'inherit' }}>This Week</Link>
            <Link href="/collections/this-month" style={{ textDecoration: 'none', color: 'inherit' }}>This Month</Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ color: 'var(--color-on-dark)', fontWeight: 600, fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase' }}>Makers & Ads</div>
            <Link href="/submit" style={{ textDecoration: 'none', color: 'inherit' }}>Submit Product</Link>
            <Link href="/sponsor" style={{ textDecoration: 'none', color: 'inherit' }}>Advertise / Sponsor</Link>
            <Link href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About Directory</Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ color: 'var(--color-on-dark)', fontWeight: 600, fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase' }}>Legal</div>
            <Link href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Privacy Policy</Link>
            <Link href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Terms of Service</Link>
          </div>
          
        </div>
        
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          paddingTop: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          color: 'var(--color-muted)'
        }}>
          <span>&copy; {new Date().getFullYear()} AIHunt. All rights reserved.</span>
          <span>Powered by Peerlist Publishing Network</span>
        </div>
      </div>
    </footer>
  );
}
