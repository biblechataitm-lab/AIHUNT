'use client';

import React from 'react';
import Hero20 from '@/components/ui/hero-20';

export function HeroSection() {
  return (
    <div className="w-full mb-12">
      <Hero20
        brandName="AIHUNT"
        headingLine1="The AI Directory for"
        headingLine2="Frontier Models & Agents."
        description="Discover, benchmark, and deploy over 1,480+ curated artificial intelligence tools, Claude 3.7 reasoning models, and autonomous coding agents."
        primaryCtaLabel="Explore 1,480+ AI Tools"
        primaryCtaHref="/category/ai"
        secondaryCtaLabel="Submit Product"
        secondaryCtaHref="/submit"
        shopLabel="Launch AI Product"
        shopHref="/submit"
        menuLabel="Categories"
        menuHref="/category/ai"
        trustLabel="TRUSTED BY 64,000+ AI BUILDERS"
        trustItems={[
          { label: 'SWE-bench Verified' },
          { label: 'Frontier Reasoning' },
          { label: '100% Tested Output' },
        ]}
      />
    </div>
  );
}
