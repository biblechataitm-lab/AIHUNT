"use client";
import React, { useEffect, useRef } from 'react';
import type { Ad } from './server';

export function useAdTracking(ad: Ad | null) {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!ad || !ref.current) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(`[AdTracking] View recorded for ad: ${ad.id}`);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ad]);

  return ref;
}

export function AdSlot({ ad, className }: { ad: Ad | null, className?: string }) {
  const ref = useAdTracking(ad);

  if (!ad) return null;

  return (
    <div ref={ref} className={`ad-slot ${className || ''}`} style={{ 
      border: '1px solid var(--color-hairline)', 
      padding: 'var(--spacing-md)', 
      borderRadius: 'var(--radius-md)',
      backgroundColor: 'var(--color-surface-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-xs)'
    }}>
      <div style={{ fontSize: '11px', color: 'var(--color-muted-soft)', textTransform: 'uppercase', letterSpacing: '1px' }}>
        {ad.sponsoredLabel}
      </div>
      <a href={ad.clickUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        {ad.headline && <div style={{ fontWeight: 500, marginBottom: '4px' }}>{ad.headline}</div>}
        <div style={{ fontSize: '14px', color: 'var(--color-muted)' }}>{ad.text}</div>
      </a>
    </div>
  );
}
