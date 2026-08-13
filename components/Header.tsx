"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

export default function Header({ siteName }: { siteName?: string }) {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(headerRef.current, 
        { y: -100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <header ref={headerRef} style={{
      backgroundColor: 'var(--color-canvas)',
      color: 'var(--color-ink)',
      height: '72px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--spacing-xl)',
      borderBottom: '1px solid var(--color-hairline)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <Link href="/" style={{ fontSize: '24px', fontWeight: 700, fontFamily: 'var(--font-display)', letterSpacing: '-0.5px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          {siteName?.toUpperCase() || 'AIHUNT'}
          <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--color-primary)', borderRadius: '50%', display: 'inline-block' }}></span>
        </Link>
      </div>
      
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <form action="/search" style={{ width: '100%', maxWidth: '400px' }}>
          <div style={{ position: 'relative', width: '100%' }}>
            <svg style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-muted)' }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="search" 
              name="q" 
              placeholder="Search products..." 
              style={{
                width: '100%',
                backgroundColor: 'transparent',
                color: 'var(--color-ink)',
                border: '1px solid var(--color-hairline)',
                borderRadius: 'var(--radius-md)',
                padding: '10px 14px 10px 36px',
                height: '40px',
                fontSize: '14px',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
            />
          </div>
        </form>
      </div>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 'var(--spacing-lg)' }}>
        <nav style={{ display: 'flex', gap: 'var(--spacing-lg)', fontSize: '14px', fontWeight: 500 }}>
          <Link href="/trends" style={{ color: 'var(--color-ink)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
              <polyline points="16 7 22 7 22 13"></polyline>
            </svg>
            Trends
          </Link>
          <Link href="/sponsor" style={{ color: 'var(--color-ink)', display: 'flex', alignItems: 'center' }}>Sponsor</Link>
        </nav>
        <Link href="/submit" style={{
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-on-primary)',
          padding: '0 16px',
          borderRadius: 'var(--radius-md)',
          fontWeight: 600,
          fontSize: '13px',
          letterSpacing: '0.5px',
          height: '36px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          textTransform: 'uppercase'
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Launch Product
        </Link>
      </div>
    </header>
  );
}
