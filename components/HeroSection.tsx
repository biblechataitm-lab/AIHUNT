'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Bot, Cpu, Zap, ArrowRight, CheckCircle2, Search, Sliders, ShieldCheck } from 'lucide-react';

const AI_MODELS = [
  {
    id: 'claude-3-7',
    name: 'Claude 3.7 Sonnet',
    provider: 'Anthropic',
    category: 'Hybrid Reasoning',
    contextWindow: '200k tokens',
    speed: '65 tok/sec',
    score: '92.4% SWE-bench',
    sampleOutput: 'Synthesizing multi-step agent trajectory: analyzing 14 repo files, generating patch, and running regression tests in 1.4s.',
  },
  {
    id: 'gpt-4o',
    name: 'GPT-4o Omni',
    provider: 'OpenAI',
    category: 'Multimodal Frontier',
    contextWindow: '128k tokens',
    speed: '82 tok/sec',
    score: '88.7% MMLU-Pro',
    sampleOutput: 'Real-time audio/vision comprehension stream active. Processing low-latency frame buffer with 280ms response window.',
  },
  {
    id: 'deepseek-r1',
    name: 'DeepSeek R1',
    provider: 'DeepSeek',
    category: 'Open Weights Reasoning',
    contextWindow: '128k tokens',
    speed: '45 tok/sec',
    score: '90.8% MATH-500',
    sampleOutput: '<think>\nFormulating mathematical proof step-by-step using chain-of-thought verification...\n</think>\nQ.E.D.',
  },
];

export function HeroSection() {
  const [selectedModel, setSelectedModel] = useState(AI_MODELS[0]);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="editorial-hero">
      <div className="editorial-hero-grid">
        {/* Left Column: Contextual Value Proposition */}
        <div className="editorial-hero-content">
          <div className="editorial-badge">
            <span className="editorial-badge-dot"></span>
            <span className="editorial-badge-text">Curated Frontier AI Directory • 2026 Edition</span>
          </div>

          <h1 className="editorial-title">
            Discover the next generation of <span className="editorial-highlight">autonomous intelligence</span> & frontier models.
          </h1>

          <p className="editorial-lead">
            The premier editorial index tracking production-ready LLMs, autonomous agent frameworks, 
            multimodal engines, and developer-first AI tooling.
          </p>

          {/* Quick Search & Explore Bar */}
          <form 
            action="/search" 
            method="GET" 
            className="editorial-search-box"
            onSubmit={(e) => {
              if (!searchQuery.trim()) e.preventDefault();
            }}
          >
            <Search className="editorial-search-icon" size={18} />
            <input
              type="text"
              name="q"
              placeholder="Search 1,480+ AI models, coding agents, voice synth..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="editorial-search-input"
            />
            <button type="submit" className="editorial-search-btn">
              Search AI
            </button>
          </form>

          {/* Contextual Topics & Tags */}
          <div className="editorial-tags-row">
            <span className="editorial-tags-label">Trending Now:</span>
            <div className="editorial-tags-list">
              <Link href="/category/ai" className="editorial-tag-pill">
                <Sparkles size={12} /> Reasoning LLMs
              </Link>
              <Link href="/category/automation" className="editorial-tag-pill">
                <Bot size={12} /> Autonomous Agents
              </Link>
              <Link href="/category/developer-tools" className="editorial-tag-pill">
                <Cpu size={12} /> AI Code Engines
              </Link>
              <Link href="/category/productivity" className="editorial-tag-pill">
                <Zap size={12} /> Local Inference
              </Link>
            </div>
          </div>

          {/* Metric Trust Strip */}
          <div className="editorial-metrics-strip">
            <div className="editorial-metric-item">
              <span className="editorial-metric-val">1,480+</span>
              <span className="editorial-metric-label">Curated Tools</span>
            </div>
            <div className="editorial-metric-divider" />
            <div className="editorial-metric-item">
              <span className="editorial-metric-val">24/7</span>
              <span className="editorial-metric-label">Live Benchmarks</span>
            </div>
            <div className="editorial-metric-divider" />
            <div className="editorial-metric-item">
              <span className="editorial-metric-val">100%</span>
              <span className="editorial-metric-label">Verified Releases</span>
            </div>
          </div>
        </div>

        {/* Right Column: Live Interactive Model & Agent Card */}
        <div className="editorial-interactive-panel">
          <div className="model-lab-card">
            <div className="model-lab-header">
              <div className="model-lab-title-area">
                <div className="model-lab-status-indicator">
                  <span className="model-lab-pulsing-dot" />
                  <span className="model-lab-title">Live Model & Agent Inspector</span>
                </div>
                <span className="model-lab-benchmark-badge">{selectedModel.score}</span>
              </div>

              {/* Model Tab Switchers */}
              <div className="model-switcher-tabs">
                {AI_MODELS.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModel(model)}
                    className={`model-switcher-tab ${selectedModel.id === model.id ? 'active' : ''}`}
                    type="button"
                  >
                    {model.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Model Specs Grid */}
            <div className="model-spec-grid">
              <div className="model-spec-item">
                <span className="model-spec-label">Provider</span>
                <span className="model-spec-value">{selectedModel.provider}</span>
              </div>
              <div className="model-spec-item">
                <span className="model-spec-label">Architecture</span>
                <span className="model-spec-value">{selectedModel.category}</span>
              </div>
              <div className="model-spec-item">
                <span className="model-spec-label">Context Window</span>
                <span className="model-spec-value">{selectedModel.contextWindow}</span>
              </div>
              <div className="model-spec-item">
                <span className="model-spec-label">Throughput</span>
                <span className="model-spec-value">{selectedModel.speed}</span>
              </div>
            </div>

            {/* Live Terminal / Prompt Simulation Output */}
            <div className="model-output-window">
              <div className="model-output-bar">
                <span className="model-output-tag">SYNTHESIZED AGENT INFERENCE</span>
                <span className="model-output-state">Deterministic • 0.2 Temp</span>
              </div>
              <pre className="model-output-content">
                <code>{selectedModel.sampleOutput}</code>
              </pre>
            </div>

            {/* Quick Action Footer */}
            <div className="model-lab-footer">
              <div className="model-verified-badge">
                <ShieldCheck size={14} className="text-emerald-600" />
                <span>Verified in AIHunt Directory</span>
              </div>
              <Link href="/submit" className="model-submit-link">
                Launch your AI <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
