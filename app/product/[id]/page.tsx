import React from 'react';
import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { getProduct, getSiteConfig, getAd } from '@/lib/ads/server';
import { AdSlot } from '@/lib/ads/client';
import ReactMarkdown from 'react-markdown';
import styles from './product.module.css';

export const revalidate = 0; // Disable static rendering for ads

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);
  
  if (!product) {
    return { title: 'Product Not Found' };
  }

  const siteConfig = await getSiteConfig();
  const siteName = siteConfig?.name || 'Directory';

  return {
    title: `${product.name} - ${siteName}`,
    description: product.tagline,
    openGraph: {
      title: `${product.name} - ${siteName}`,
      description: product.tagline,
      images: [{ url: product.logoUrl }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  const ad = await getAd({ slot: 'product-1' });

  // Generate JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    operatingSystem: 'Any',
    applicationCategory: product.category,
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
    },
    creator: {
      '@type': 'Person',
      name: product.maker,
    },
    description: product.tagline,
    url: product.link,
    image: product.logoUrl,
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'var(--spacing-section) var(--spacing-xl)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-xxl)' }} className={styles.container}>
        <div>
          <div style={{ display: 'flex', gap: 'var(--spacing-xl)', marginBottom: 'var(--spacing-xl)', alignItems: 'center' }}>
            <img src={product.logoUrl} alt={product.name} style={{ width: '120px', height: '120px', borderRadius: 'var(--radius-lg)', objectFit: 'cover' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '48px', margin: 0, letterSpacing: '-1px' }}>{product.name}</h1>
              <p style={{ fontSize: '22px', margin: 0, color: 'var(--color-body-strong)' }}>{product.tagline}</p>
              
              <div style={{ display: 'flex', gap: 'var(--spacing-sm)', marginTop: '8px', flexWrap: 'wrap' }}>
                <span style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-on-primary)', padding: '4px 12px', borderRadius: 'var(--radius-pill)', fontSize: '12px', fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                  {product.category}
                </span>
                {product.tags.map(tag => (
                  <span key={tag} style={{ backgroundColor: 'var(--color-surface-card)', color: 'var(--color-ink)', padding: '4px 12px', borderRadius: 'var(--radius-pill)', fontSize: '13px', fontWeight: 500 }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
            <a href={product.link} target="_blank" rel="noopener noreferrer" style={{
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-on-primary)',
              padding: '12px 24px',
              borderRadius: 'var(--radius-md)',
              fontWeight: 500,
              fontSize: '16px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              Visit Website
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
            
            <div style={{ 
              backgroundColor: 'var(--color-surface-card)', 
              padding: '12px 24px', 
              borderRadius: 'var(--radius-md)', 
              display: 'inline-flex', 
              alignItems: 'center',
              gap: '8px',
              fontWeight: 500
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
              </svg>
              {product.upvoteCount} Upvotes
            </div>
          </div>

          <div className={styles.article}>
            <ReactMarkdown>{product.description}</ReactMarkdown>
          </div>
        </div>
        
        <aside style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
          <div style={{
            backgroundColor: 'var(--color-surface-card)',
            padding: 'var(--spacing-lg)',
            borderRadius: 'var(--radius-lg)'
          }}>
            <h3 style={{ fontSize: '18px', marginBottom: '16px', fontFamily: 'var(--font-sans)' }}>Details</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-muted)' }}>Maker</span>
                <span style={{ fontWeight: 500 }}>{product.maker}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-muted)' }}>Launched</span>
                <span style={{ fontWeight: 500 }}>{new Date(product.launchDate).toLocaleDateString()}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                <span style={{ color: 'var(--color-muted)' }}>Tech Stack</span>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {product.techStack.map(tech => (
                    <span key={tech} style={{ backgroundColor: 'var(--color-canvas)', border: '1px solid var(--color-hairline)', padding: '2px 8px', borderRadius: '4px', fontSize: '13px' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <AdSlot ad={ad} />
        </aside>
      </div>
    </div>
  );
}
