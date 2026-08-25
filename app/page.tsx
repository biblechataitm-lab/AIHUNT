import React from 'react';
import Hero from '@/components/watermelon/templates/landing-01/landing/hero';
import Stats from '@/components/watermelon/templates/landing-01/landing/stats';
import Features from '@/components/watermelon/templates/landing-01/landing/features';
import AnimatedBento from '@/components/watermelon/templates/landing-01/landing/animated-bento';
import ComponentsBento from '@/components/watermelon/templates/landing-01/landing/component-bento';
import TemplateBento from '@/components/watermelon/templates/landing-01/landing/template-bento';
import Testimonial from '@/components/watermelon/templates/landing-01/landing/testimonial';

export const revalidate = 0;

export default function HomePage() {
  return (
    <div className="w-full bg-[#101010] text-white">
      <Hero />
      <Stats />
      <Features />
      <AnimatedBento />
      <ComponentsBento />
      <TemplateBento />
      <Testimonial />
    </div>
  );
}
