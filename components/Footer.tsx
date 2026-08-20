import React from 'react';
import Link from 'next/link';

export function Footer({ siteName = 'AIHunt' }: { siteName?: string }) {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="header-brand" style={{ marginBottom: '12px' }}>
              <span>{siteName}</span>
              <span className="header-brand-dot" />
            </div>
            <p style={{ fontSize: '14px', color: 'var(--color-body)', maxWidth: '340px', lineHeight: 1.6 }}>
              A curated editorial directory showcasing premier AI models, agentic frameworks, and developer software.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-links">
              <li><Link href="/">Today's Launches</Link></li>
              <li><Link href="/trends">Trending AI</Link></li>
              <li><Link href="/collections/this-week">Weekly Top</Link></li>
              <li><Link href="/collections/this-month">Monthly Top</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Categories</h4>
            <ul className="footer-links">
              <li><Link href="/category/ai">AI & Machine Learning</Link></li>
              <li><Link href="/category/developer-tools">Developer Tools</Link></li>
              <li><Link href="/category/productivity">Productivity</Link></li>
              <li><Link href="/category/search-data">Search & Data</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Directory</h4>
            <ul className="footer-links">
              <li><Link href="/submit">Launch a Product</Link></li>
              <li><Link href="/sponsor">Sponsor & Advertise</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} {siteName}. All rights reserved.
          </div>
          <div>
            Powered by the Publisher Ad Network
          </div>
        </div>
      </div>
    </footer>
  );
}
