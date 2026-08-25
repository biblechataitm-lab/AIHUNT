'use client';

import React, { useState } from "react";
import { motion, type Variants } from "motion/react";
import Heading from "./heading";
import Container from "./container";
import { cn } from "@/lib/utils";
import { Check, ChevronRight, Layers, Cpu, Database, Terminal } from "lucide-react";

function TabsDemo() {
  const [activeTab, setActiveTab] = useState('models');
  const tabs = [
    { id: 'models', label: 'Models', count: '480+' },
    { id: 'agents', label: 'Agents', count: '320+' },
    { id: 'evals', label: 'Evals', count: '140+' },
  ];

  return (
    <div className="flex flex-col gap-3 w-full max-w-xs">
      <div className="flex bg-white/5 p-1 rounded-lg border border-white/10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex-1 py-1.5 px-2 rounded-md font-mono text-xs transition-all",
              activeTab === tab.id
                ? "bg-[#a3ff12] text-black font-bold shadow-sm"
                : "text-white/60 hover:text-white"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="text-center font-mono text-xs text-white/50">
        {tabs.find((t) => t.id === activeTab)?.count} verified resources
      </div>
    </div>
  );
}

function CheckboxDemo() {
  const [checked, setChecked] = useState([true, true, false]);
  const labels = ['SWE-bench Verified', 'Deterministic JSON', 'Open Weights Only'];

  const toggle = (idx: number) => {
    setChecked((prev) => prev.map((c, i) => (i === idx ? !c : c)));
  };

  return (
    <div className="flex flex-col gap-2.5 w-full max-w-xs text-left">
      {labels.map((label, idx) => (
        <div
          key={label}
          onClick={() => toggle(idx)}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div
            className={cn(
              "w-4 h-4 rounded border flex items-center justify-center transition-all",
              checked[idx]
                ? "bg-[#a3ff12] border-[#a3ff12] text-black"
                : "border-white/30 bg-white/5 group-hover:border-white/50"
            )}
          >
            {checked[idx] && <Check size={12} strokeWidth={3} />}
          </div>
          <span className="text-xs font-mono text-white/80 group-hover:text-white">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

function SwitchDemo() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        onClick={() => setEnabled(!enabled)}
        className={cn(
          "w-12 h-6 rounded-full p-1 cursor-pointer transition-colors duration-200 ease-in-out border border-white/20",
          enabled ? "bg-[#a3ff12]" : "bg-white/10"
        )}
      >
        <div
          className={cn(
            "w-4 h-4 rounded-full transition-transform duration-200 ease-in-out",
            enabled ? "translate-x-6 bg-black" : "translate-x-0 bg-white/60"
          )}
        />
      </div>
      <span className="text-xs font-mono text-white/60">
        Autonomous Mode: <span className={enabled ? "text-[#a3ff12] font-bold" : "text-white/40"}>{enabled ? "ACTIVE" : "OFF"}</span>
      </span>
    </div>
  );
}

function BreadcrumbDemo() {
  return (
    <div className="flex items-center gap-1.5 font-mono text-xs text-white/60 bg-white/5 px-3 py-2 rounded-md border border-white/10">
      <span className="hover:text-white cursor-pointer">AIHUNT</span>
      <ChevronRight size={12} className="text-white/40" />
      <span className="hover:text-white cursor-pointer">Reasoning</span>
      <ChevronRight size={12} className="text-white/40" />
      <span className="text-[#a3ff12] font-bold">Claude 3.7</span>
    </div>
  );
}

function ComponentCard({
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
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/40"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/40"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/40"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/40"></div>

      <div className="w-full h-full flex flex-col items-center justify-center p-6 relative overflow-hidden text-center">
        <div className="absolute top-6 left-6 z-10">
          <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest group-hover:text-white/80 transition-colors">
            {title}
          </span>
        </div>
        <div className={cn("scale-[0.9] origin-center flex justify-center w-full mt-4", innerClassName)}>
          {children}
        </div>
      </div>
    </motion.div>
  );
}

export default function ComponentsBento() {
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
      <div className="hidden lg:block absolute bottom-0 left-0 w-full border-b border-white/5" />

      <Container className="relative z-10 mx-auto">
        <motion.div
          className="mb-12 flex flex-col items-start md:items-end text-left md:text-right"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="inline-flex items-center text-xs font-bold text-[#a3ff12] mb-8 tracking-widest uppercase">
            <span className="mr-3 opacity-70 block md:hidden">{"//"}</span>
            AI DIRECTORY TAXONOMY
            <span className="ml-3 opacity-70 hidden md:block">{"//"}</span>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Heading as="h2" variant="big" className="text-balance text-white font-sans text-left md:text-right">
              Building <span className="text-[#a3ff12]">blocks</span>
            </Heading>
          </motion.div>
          <motion.p variants={itemVariants} className="mt-6 text-sm text-white/50 text-pretty max-w-lg font-mono uppercase tracking-widest leading-relaxed text-left md:text-right">
            Categorized by SWE-bench scores, inference speeds, context lengths, and commercial license safety.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[240px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Top Left */}
          <ComponentCard 
            title="[ MODEL TAXONOMY ]" 
            variants={itemVariants} 
            className="md:col-span-1"
          >
            <TabsDemo />
          </ComponentCard>

          {/* Top Right */}
          <ComponentCard 
            title="[ VERIFICATION FILTERS ]" 
            variants={itemVariants} 
            className="md:col-span-1"
          >
            <CheckboxDemo />
          </ComponentCard>

          {/* Bottom Left */}
          <ComponentCard 
            title="[ AGENT CONTROLS ]" 
            variants={itemVariants} 
            className="md:col-span-1"
          >
            <SwitchDemo />
          </ComponentCard>

          {/* Bottom Right */}
          <ComponentCard 
            title="[ HIERARCHY TREE ]" 
            variants={itemVariants} 
            className="md:col-span-1"
          >
            <BreadcrumbDemo />
          </ComponentCard>
        </motion.div>
      </Container>
    </section>
  );
}
