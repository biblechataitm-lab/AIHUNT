import React from 'react';
import type { Metadata } from 'next';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Launch a Product — AIHunt',
  description: 'Submit your AI product, model, or developer tool to be featured on AIHunt.',
};

export default function SubmitPage() {
  return (
    <div className="container" style={{ maxWidth: '760px', paddingTop: '3rem', paddingBottom: '5rem' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--color-primary)' }}>
          Community Submissions
        </span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '1rem', letterSpacing: '-0.5px' }}>
          Launch Your AI Tool on AIHunt
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--color-body)', lineHeight: 1.6 }}>
          Join hundreds of makers and engineering teams launching their next-generation AI tools to our curated readership.
        </p>
      </div>

      <div className="sidebar-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>
          Submission Guidelines
        </h2>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <CheckCircle2 size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
            <span style={{ color: 'var(--color-body)', fontSize: '14px' }}>Working MVP, beta, or live public production URL.</span>
          </li>
          <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <CheckCircle2 size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
            <span style={{ color: 'var(--color-body)', fontSize: '14px' }}>Clear AI, ML, agentic, or developer-focused utility.</span>
          </li>
          <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <CheckCircle2 size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
            <span style={{ color: 'var(--color-body)', fontSize: '14px' }}>High-resolution square logo and accurate maker handle.</span>
          </li>
        </ul>
      </div>

      <div
        style={{
          backgroundColor: 'var(--color-surface-card)',
          border: '1px solid var(--color-hairline)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem',
        }}
      >
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '6px' }}>
              Product Name
            </label>
            <input
              type="text"
              placeholder="e.g. PromptMatrix"
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-hairline)',
                backgroundColor: 'var(--color-canvas)',
                fontSize: '14px',
                color: 'var(--color-ink)',
                fontFamily: 'var(--font-sans)',
                outline: 'none',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '6px' }}>
              Tagline (Short Punchy Hook)
            </label>
            <input
              type="text"
              placeholder="e.g. Continuous regression testing for LLM prompts"
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-hairline)',
                backgroundColor: 'var(--color-canvas)',
                fontSize: '14px',
                color: 'var(--color-ink)',
                fontFamily: 'var(--font-sans)',
                outline: 'none',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '6px' }}>
              Website URL
            </label>
            <input
              type="url"
              placeholder="https://yourproduct.com"
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-hairline)',
                backgroundColor: 'var(--color-canvas)',
                fontSize: '14px',
                color: 'var(--color-ink)',
                fontFamily: 'var(--font-sans)',
                outline: 'none',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '6px' }}>
              Category
            </label>
            <select
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-hairline)',
                backgroundColor: 'var(--color-canvas)',
                fontSize: '14px',
                color: 'var(--color-ink)',
                fontFamily: 'var(--font-sans)',
                outline: 'none',
              }}
            >
              <option value="ai">AI & Machine Learning</option>
              <option value="developer-tools">Developer Tools</option>
              <option value="productivity">Productivity</option>
              <option value="search-data">Search & Data</option>
              <option value="automation">Automation</option>
            </select>
          </div>

          <div style={{ marginTop: '0.5rem' }}>
            <button
              type="button"
              className="btn-primary"
              style={{ width: '100%', padding: '12px 20px', fontSize: '15px' }}
            >
              <Sparkles size={16} /> Submit Product for Review <ArrowRight size={16} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
