'use client';

import { useState } from "react";
import { motion, type Variants } from "motion/react";
import Heading from "./heading";
import Container from "./container";
import { cn } from "@/lib/utils";
import { Sparkles, Bot, Zap, Check, ChevronLeft, ChevronRight, Cpu } from "lucide-react";

const AGENTS = [
  {
    id: 'claude',
    name: 'Claude 3.7 Sonnet',
    role: 'Reasoning & Coding',
    benchmark: '81.4% SWE-bench',
    color: '#D97757',
  },
  {
    id: 'gpt4',
    name: 'GPT-4.5 Orion',
    role: 'Broad Knowledge',
    benchmark: '79.2% SWE-bench',
    color: '#10a37f',
  },
  {
    id: 'deepseek',
    name: 'DeepSeek R1',
    role: 'Math & Proofs',
    benchmark: '78.9% SWE-bench',
    color: '#3b82f6',
  },
];

function SelectAIAgent({ selectedId, onSelect }: { selectedId: string; onSelect: (id: string) => void }) {
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm">
      {AGENTS.map((agent) => (
        <button
          key={agent.id}
          onClick={() => onSelect(agent.id)}
          className={cn(
            "flex items-center justify-between p-3.5 rounded-lg border transition-all text-left",
            selectedId === agent.id
              ? "border-[#a3ff12] bg-[#a3ff12]/10 shadow-[0_0_20px_rgba(163,255,18,0.15)]"
              : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
          )}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-md flex items-center justify-center font-bold text-xs"
              style={{ backgroundColor: `${agent.color}25`, color: agent.color }}
            >
              <Bot size={16} />
            </div>
            <div>
              <div className="text-xs font-bold text-white">{agent.name}</div>
              <div className="text-[10px] text-white/50">{agent.role}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-[#a3ff12] bg-[#a3ff12]/15 px-2 py-0.5 rounded">
              {agent.benchmark}
            </span>
            {selectedId === agent.id && <Check size={14} className="text-[#a3ff12]" />}
          </div>
        </button>
      ))}
    </div>
  );
}

function MorphingButton({ buttonText = "Run Evals", onSubmit }: { buttonText?: string; onSubmit?: () => void }) {
  const [status, setStatus] = useState<'idle' | 'running' | 'success'>('idle');

  const handleClick = () => {
    if (status !== 'idle') return;
    setStatus('running');
    setTimeout(() => {
      setStatus('success');
      if (onSubmit) onSubmit();
      setTimeout(() => setStatus('idle'), 2500);
    }, 1200);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={handleClick}
        className={cn(
          "relative flex items-center justify-center px-8 py-3.5 rounded-md font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300",
          status === 'idle' && "bg-[#a3ff12] text-black hover:bg-[#92e810] active:scale-95 shadow-[0_0_25px_rgba(163,255,18,0.3)]",
          status === 'running' && "bg-amber-400 text-black animate-pulse",
          status === 'success' && "bg-emerald-500 text-white"
        )}
      >
        {status === 'idle' && (
          <span className="flex items-center gap-2">
            <Zap size={14} /> {buttonText}
          </span>
        )}
        {status === 'running' && (
          <span className="flex items-center gap-2">
            <Cpu size={14} className="animate-spin" /> Simulating SWE-bench...
          </span>
        )}
        {status === 'success' && (
          <span className="flex items-center gap-2">
            <Check size={14} /> Verified 100% Pass
          </span>
        )}
      </button>
      <span className="text-[10px] text-white/40 font-mono">Interactive agent evaluation simulator</span>
    </div>
  );
}

function KnobSlider({ value, onChange, min = 0, max = 100 }: { value: number; onChange: (v: number) => void; min?: number; max?: number }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-40 h-40 rounded-full border-2 border-dashed border-[#a3ff12]/40 flex flex-col items-center justify-center bg-black/60 shadow-[0_0_30px_rgba(163,255,18,0.1)]">
        <span className="text-3xl font-bold font-mono text-[#a3ff12]">{value}%</span>
        <span className="text-[10px] uppercase font-mono text-white/50 tracking-wider mt-1">Accuracy Sweetspot</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-44 accent-[#a3ff12] cursor-pointer"
      />
    </div>
  );
}

function CarouselSlider() {
  const [index, setIndex] = useState(0);
  const items = [
    { title: 'Claude 3.7 Reasoning', subtitle: 'Self-correcting verification loops', score: '99.4%' },
    { title: 'Agent Memory Index', subtitle: 'Vector retrieval with Zep graph', score: '98.1%' },
    { title: 'Deterministic Output', subtitle: 'Strict Zod JSON constraint parsing', score: '100%' },
  ];

  return (
    <div className="w-full max-w-xs flex flex-col items-center gap-3">
      <div className="w-full p-4 rounded-lg border border-white/10 bg-black/60 text-center">
        <div className="text-xs font-bold text-white mb-1">{items[index].title}</div>
        <div className="text-[11px] text-white/60 mb-3">{items[index].subtitle}</div>
        <div className="inline-block text-[11px] font-mono font-bold text-[#a3ff12] bg-[#a3ff12]/15 px-2.5 py-1 rounded">
          Pass Rate: {items[index].score}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))}
          className="p-1.5 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white"
        >
          <ChevronLeft size={14} />
        </button>
        <div className="flex gap-1.5">
          {items.map((_, i) => (
            <div
              key={i}
              className={cn("w-1.5 h-1.5 rounded-full", i === index ? "bg-[#a3ff12]" : "bg-white/20")}
            />
          ))}
        </div>
        <button
          onClick={() => setIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1))}
          className="p-1.5 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white"
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  variants,
  className,
  innerClassName,
  children,
}: {
  title: string;
  variants: Variants;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={variants}
      className={cn(
        "h-full w-full relative border border-white/10 bg-black/40 backdrop-blur-md group hover:bg-white/2 transition-colors duration-300 rounded-lg",
        className
      )}
    >
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/40"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/40"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/40"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/40"></div>

      <div className="w-full h-full flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-6 left-6 z-10">
          <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest group-hover:text-white/80 transition-colors">
            {title}
          </span>
        </div>
        <div className={cn("origin-center flex justify-center w-full mt-4", innerClassName)}>
          {children}
        </div>
      </div>
    </motion.div>
  );
}

export default function AnimatedBento() {
  const [selectedAgent, setSelectedAgent] = useState('claude');
  const [knobValue, setKnobValue] = useState(84);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#101010] font-mono">
      <div className="hidden lg:block absolute top-0 left-0 w-full border-t border-white/5" />
      
      <Container className="relative z-10 mx-auto">
        <motion.div
          className="mb-12 flex flex-col items-start md:items-center text-left md:text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="inline-flex items-center text-xs font-bold text-[#a3ff12] mb-8 tracking-widest uppercase">
            <span className="mr-3 opacity-70">{"//"}</span>
            AI CAPABILITY BENCHMARKS
          </motion.div>
          <motion.div variants={itemVariants}>
            <Heading as="h2" variant="big" className="text-balance text-white font-sans">
              Interactions that <span className="text-[#a3ff12]">perform</span>
            </Heading>
          </motion.div>
          <motion.p variants={itemVariants} className="mt-6 text-sm text-white/50 text-pretty max-w-2xl font-mono uppercase tracking-widest">
            Simulate reasoning steps, latency sweeps, and model benchmarks in real-time.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[380px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {/* Top Left */}
          <FeatureCard 
            title="[ AGENT EVALUATION ]" 
            variants={itemVariants} 
            className="md:col-span-1 lg:col-span-2"
          >
            <SelectAIAgent selectedId={selectedAgent} onSelect={setSelectedAgent} />
          </FeatureCard>
          
          {/* Top Right */}
          <FeatureCard 
            title="[ EVAL TRIGGER ]" 
            variants={itemVariants} 
            className="md:col-span-1"
          >
            <MorphingButton buttonText="Trigger Test" />
          </FeatureCard>
          
          {/* Bottom Left */}
          <FeatureCard 
            title="[ ACCURACY TARGET ]" 
            variants={itemVariants} 
            className="md:col-span-1"
          >
            <KnobSlider
              value={knobValue}
              onChange={setKnobValue}
              min={0}
              max={100}
            />
          </FeatureCard>
          
          {/* Bottom Middle */}
          <motion.div variants={itemVariants} className="hidden lg:block lg:col-span-1 h-full w-full relative border border-[#a3ff12]/20 bg-[#a3ff12]/5 backdrop-blur-sm group rounded-lg">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#a3ff12]"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#a3ff12]"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#a3ff12]"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#a3ff12]"></div>

            <div className="w-full h-full flex flex-col items-center justify-center p-6 relative overflow-hidden">
               <div className="relative z-10 flex flex-col items-center text-center">
                 <div className="text-5xl lg:text-6xl font-bold text-white tracking-tighter tabular-nums mb-3 font-mono">1,480+</div>
                 <div className="text-[#a3ff12] font-bold tracking-widest uppercase text-xs">CURATED AI TOOLS</div>
               </div>
            </div>
          </motion.div>
          
          {/* Bottom Right */}
          <FeatureCard 
            title="[ SWE-BENCH REASONING ]" 
            variants={itemVariants} 
            className="md:col-span-1 lg:col-span-1"
          >
            <CarouselSlider />
          </FeatureCard>
        </motion.div>
      </Container>
    </section>
  );
}
