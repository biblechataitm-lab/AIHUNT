'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Bot, Cpu, ShieldCheck, ArrowRight, Layers, CheckCircle2, TrendingUp, Zap, Compass, Flame } from 'lucide-react';

export function LandingSections() {
  return (
    <div className="landing-additional-sections">
      {/* 1. Core Feature Highlights & Bento Grid */}
      <section className="landing-feature-grid-section">
        <div className="section-title-wrap">
          <div className="section-pill-tag">
            <Sparkles size={12} className="text-amber-500" />
            <span>Curated Intelligence Matrix</span>
          </div>
          <h2 className="landing-section-heading">Engineered for Frontier AI Practitioners</h2>
          <p className="landing-section-sub">
            Track benchmark scores, reasoning architectures, token efficiency, and production readiness across every frontier model and autonomous framework.
          </p>
        </div>

        <div className="landing-bento-grid">
          {/* Bento Card 1: Benchmark Inspector */}
          <div className="bento-feature-card span-2">
            <div className="bento-card-top">
              <div className="bento-icon-box coral">
                <Cpu size={20} />
              </div>
              <span className="bento-badge">24/7 Live Evals</span>
            </div>
            <h3 className="bento-card-title">Frontier Model Leaderboard & Evals</h3>
            <p className="bento-card-desc">
              Real-time comparisons across SWE-bench Verified, MMLU-Pro, MATH-500, and human eval datasets for Claude 3.7, GPT-4o, and DeepSeek R1.
            </p>
            <div className="bento-metric-row">
              <div className="metric-pill">
                <span className="pill-val">92.4%</span>
                <span className="pill-lbl">SWE-bench</span>
              </div>
              <div className="metric-pill">
                <span className="pill-val">82 tok/s</span>
                <span className="pill-lbl">Throughput</span>
              </div>
              <div className="metric-pill">
                <span className="pill-val">200k</span>
                <span className="pill-lbl">Context Window</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Autonomous Agent Personas */}
          <div className="bento-feature-card">
            <div className="bento-card-top">
              <div className="bento-icon-box amber">
                <Bot size={20} />
              </div>
              <span className="bento-badge">Agentic Workflows</span>
            </div>
            <h3 className="bento-card-title">Autonomous Code & Planning Agents</h3>
            <p className="bento-card-desc">
              Deep evaluation of multi-step agent frameworks, tool-calling harnesses, and recursive reasoning loops.
            </p>
            <div className="bento-check-list">
              <span className="check-item"><CheckCircle2 size={13} /> Idempotent Execution</span>
              <span className="check-item"><CheckCircle2 size={13} /> Deterministic JSON</span>
            </div>
          </div>

          {/* Bento Card 3: Multimodal Vision & Audio */}
          <div className="bento-feature-card">
            <div className="bento-card-top">
              <div className="bento-icon-box blue">
                <Zap size={20} />
              </div>
              <span className="bento-badge">Sub-300ms</span>
            </div>
            <h3 className="bento-card-title">Multimodal Real-Time Streaming</h3>
            <p className="bento-card-desc">
              Ultra low-latency vision-language models, real-time voice synthesis engines, and spatial video comprehension.
            </p>
          </div>

          {/* Bento Card 4: Local & Open Weights */}
          <div className="bento-feature-card span-2">
            <div className="bento-card-top">
              <div className="bento-icon-box purple">
                <Layers size={20} />
              </div>
              <span className="bento-badge">Self-Hosted</span>
            </div>
            <h3 className="bento-card-title">Open Weights & Edge Inference Runtimes</h3>
            <p className="bento-card-desc">
              Curated quantization models (GGUF, AWQ, EXL2) and ultra-fast inference servers like vLLM, SGLang, and Ollama.
            </p>
            <div className="bento-tag-row">
              <span className="tag-chip">vLLM Engine</span>
              <span className="tag-chip">Ollama Native</span>
              <span className="tag-chip">SGLang Router</span>
              <span className="tag-chip">Apple MLX</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Curation Process Section */}
      <section className="landing-process-section">
        <div className="section-title-wrap">
          <div className="section-pill-tag">
            <Compass size={12} className="text-amber-500" />
            <span>How AIHunt Works</span>
          </div>
          <h2 className="landing-section-heading">Rigorous 3-Step AI Curation</h2>
          <p className="landing-section-sub">
            Every model, platform, and agent submitted undergoes human testing before landing on our featured feed.
          </p>
        </div>

        <div className="process-steps-grid">
          <div className="process-step-card">
            <div className="step-number">01</div>
            <h4 className="step-title">Technical Eval & Verification</h4>
            <p className="step-desc">
              We benchmark latency, test context recall limits, verify API stability, and check licensing terms.
            </p>
          </div>
          <div className="process-step-card">
            <div className="step-number">02</div>
            <h4 className="step-title">Hands-On Workflow Testing</h4>
            <p className="step-desc">
              We test the AI against real coding tasks, reasoning puzzles, and production agent trajectories.
            </p>
          </div>
          <div className="process-step-card">
            <div className="step-number">03</div>
            <h4 className="step-title">Featured Editorial Spotlight</h4>
            <p className="step-desc">
              Verified tools receive high-visibility placement, category badges, and distribution to 64,000+ builders.
            </p>
          </div>
        </div>
      </section>

      {/* 3. High-Conversion Launch CTA Banner */}
      <section className="landing-launch-cta">
        <div className="launch-cta-content">
          <span className="launch-cta-tag">✦ LAUNCH ON AIHUNT</span>
          <h3 className="launch-cta-heading">Launch Your AI Product to 64,000+ Researchers & Engineers</h3>
          <p className="launch-cta-desc">
            Gain immediate traction, verified user reviews, and top-tier discoverability in the leading artificial intelligence directory.
          </p>
          <div className="launch-cta-buttons">
            <Link href="/submit" className="launch-cta-primary">
              Launch Product Now <ArrowRight size={15} />
            </Link>
            <Link href="/category/ai" className="launch-cta-secondary">
              Browse Directory
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
