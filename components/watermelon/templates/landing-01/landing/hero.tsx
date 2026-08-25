'use client';

import { ArrowUpRight01Icon } from 'hugeicons-react';
import Container from './container';
import Heading from './heading';
import SubHeading from './subheading';
import { motion, type Variants, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import BgFrame from './bg-frame';

const ROTATING_WORDS = [
  'researchers',
  'developers',
  'engineers',
  'founders',
] as const;

const HERO_IMAGES = Array.from({ length: 10 }).map(
  (_, i) =>
    `https://assets.watermelon.sh/lp-hero-${(i + 1).toString().padStart(2, '0')}.avif`,
);

const IMAGE_POSITIONS = [
  // L4 (Highest, furthest left)
  { top: '-30%', left: '-15%', width: '24%', rotate: '-15deg', zIndex: 1 },
  // R4 (Highest, furthest right)
  { top: '-30%', right: '-15%', width: '24%', rotate: '15deg', zIndex: 1 },

  // L3
  { top: '-10%', left: '-5%', width: '28%', rotate: '-10deg', zIndex: 2 },
  // R3
  { top: '-10%', right: '-5%', width: '28%', rotate: '10deg', zIndex: 2 },

  // L2
  { top: '15%', left: '0%', width: '32%', rotate: '-5deg', zIndex: 3 },
  // R2
  { top: '15%', right: '0%', width: '32%', rotate: '5deg', zIndex: 3 },

  // L1 (Lowest, closest to center)
  { top: '45%', left: '5%', width: '36%', rotate: '-2deg', zIndex: 4 },
  // R1 (Lowest, closest to center)
  { top: '45%', right: '5%', width: '36%', rotate: '2deg', zIndex: 4 },

  // Extra background anchors for extreme wide screens
  { top: '-5%', left: '-25%', width: '20%', rotate: '-20deg', zIndex: 0 },
  { top: '-5%', right: '-25%', width: '20%', rotate: '20deg', zIndex: 0 },
];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.2, 0, 0, 1] },
    },
  };

  const glowVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: 'easeOut' },
    },
  };

  return (
    <div className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#101010] py-16 md:py-24">
      {/* Background Frame Component */}
      <BgFrame />

      {/* Ambient background glow behind text */}
      <motion.div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px] opacity-15"
        style={{
          background:
            'radial-gradient(circle, rgba(163,255,18,0.4) 0%, rgba(163,255,18,0) 70%)',
        }}
        variants={glowVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Decorative Technical Borders */}
      <div className="absolute top-24 right-0 left-0 hidden h-px bg-white/5 lg:block" />
      <div className="absolute right-0 bottom-24 left-0 hidden h-px bg-white/5 lg:block" />
      <div className="absolute top-0 bottom-0 left-8 hidden w-px bg-white/5 md:left-16 lg:block" />
      <div className="absolute top-0 right-8 bottom-0 hidden w-px bg-white/5 md:right-16 lg:block" />

      {/* Crosshairs at intersections */}
      <div className="absolute top-24 left-8 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 md:left-16 lg:block">
        <div className="bg-primary/50 absolute top-1/2 right-0 left-0 h-px" />
        <div className="bg-primary/50 absolute top-0 bottom-0 left-1/2 w-px" />
      </div>
      <div className="absolute top-24 right-8 hidden h-4 w-4 translate-x-1/2 -translate-y-1/2 md:right-16 lg:block">
        <div className="absolute top-1/2 right-0 left-0 h-px bg-white/20" />
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/20" />
      </div>
      <div className="absolute bottom-24 left-8 hidden h-4 w-4 -translate-x-1/2 translate-y-1/2 md:left-16 lg:block">
        <div className="absolute top-1/2 right-0 left-0 h-px bg-white/20" />
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/20" />
      </div>
      <div className="absolute right-8 bottom-24 hidden h-4 w-4 translate-x-1/2 translate-y-1/2 md:right-16 lg:block">
        <div className="absolute top-1/2 right-0 left-0 h-px bg-white/20" />
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/20" />
      </div>

      {/* Abstract Background Concentric Circles */}
      <div className="pointer-events-none absolute top-1/2 left-0 flex h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/5 opacity-30">
        <div className="flex h-[600px] w-[600px] items-center justify-center rounded-full border border-dashed border-white/10">
          <div className="flex h-[400px] w-[400px] items-center justify-center rounded-full border border-white/5">
            <div className="h-[200px] w-[200px] rounded-full border border-dashed border-white/5" />
          </div>
        </div>
      </div>

      <Container className="relative z-10 flex flex-1 flex-col justify-center">
        {/* Center-aligned Hero Content */}
        <motion.div
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="text-primary mb-10 inline-flex items-center gap-2 border border-white/10 bg-white/3 px-4 py-1.5 text-xs font-bold tracking-widest uppercase backdrop-blur-sm"
          >
            ✦ AI Directory &mdash; Verified Evals
          </motion.div>

          {/* Main Heading — 2 lines */}
          <motion.div variants={itemVariants}>
            <Heading
              as="h1"
              variant="big"
              className="text-foreground mb-2 font-sans leading-[0.95]"
            >
              The ultimate AI directory for
              <br />
              <span className="text-primary inline-block min-w-[280px] sm:min-w-[340px] text-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ y: 24, opacity: 0, filter: 'blur(8px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: -24, opacity: 0, filter: 'blur(8px)' }}
                    transition={{
                      duration: 0.5,
                      ease: [0.2, 0, 0, 1],
                    }}
                    className="inline-block"
                  >
                    {ROTATING_WORDS[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </Heading>
          </motion.div>

          {/* Subheading */}
          <motion.div variants={itemVariants}>
            <SubHeading variant="big" className="mb-12 max-w-2xl text-pretty">
              1,480+ verified artificial intelligence tools, Claude 3.7 reasoning models, SWE-bench benchmarks, and autonomous agent frameworks.
            </SubHeading>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/category/ai"
              className="group text-black bg-[#a3ff12] hover:bg-[#92e810] inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-bold transition-all active:scale-[0.97]"
            >
              Explore 1,480+ AI Tools
              <ArrowUpRight01Icon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/submit"
              className="text-white inline-flex items-center justify-center border border-white/10 px-8 py-3 text-sm font-bold transition-all hover:bg-white/5 active:scale-[0.97]"
            >
              Submit AI Product
            </Link>
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-white/40 uppercase">
              <span className="h-px w-8 bg-white/10" />
              Trusted by 64,000+ AI engineers worldwide
              <span className="h-px w-8 bg-white/10" />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-white/60 font-mono">
              <span>✦ SWE-bench Verified</span>
              <span>✦ Frontier Reasoning</span>
              <span>✦ 100% Tested Output</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
