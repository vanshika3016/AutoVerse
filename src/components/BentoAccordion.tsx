import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Layers, 
  Sparkles, 
  Shield, 
  ArrowRight, 
  MessageSquare, 
  Bot, 
  Users, 
  TrendingUp, 
  Check, 
  Lock,
  Clock,
  ArrowUpRight
} from 'lucide-react';

export default function BentoAccordion() {
  // Track hover states for each card to trigger specific high-fidelity line connections and animations
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Profile avatars data for the CTA card
  const avatars = [
    { name: 'Sarah', url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80' },
    { name: 'David', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80' },
    { name: 'Elena', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80' },
    { name: 'Marcus', url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80' }
  ];

  return (
    <section 
      id="bento-grid"
      className="relative w-full py-28 bg-[#081B2C] border-b border-white/[0.04] overflow-hidden text-white"
    >
      {/* 1. Cybernetic Grid Background & Ambient Lights */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Soft radial glow backdrops to give deep space vibe */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-gradient-to-r from-accent-1/5 to-cyan-500/5 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] rounded-full bg-[#F5B000]/3 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-12 left-10 w-[400px] h-[400px] rounded-full bg-emerald-500/3 blur-[160px] pointer-events-none" />

      {/* Subtle floating background coordinates & golden sparks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute w-1 h-1 rounded-full bg-[#F5B000]/50 shadow-[0_0_8px_#F5B000] top-[15%] left-[12%] animate-pulse" />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/40 top-[45%] right-[10%] animate-ping" />
        <div className="absolute w-1 h-1 rounded-full bg-[#F5B000]/60 shadow-[0_0_6px_#F5B000] bottom-[30%] left-[8%]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#F5B000]/10 border border-[#F5B000]/25 text-[#F5B000] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why AutoVerse</span>
          </div>
          
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
            Everything you need to automate, <br className="hidden sm:inline" />
            in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B000] via-[#ffd053] to-[#F5B000]">one platform</span>
          </h2>
          
          <p className="font-sans text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            Powerful features designed to save time, reduce effort, and help you build AI automations that scale with your business.
          </p>
        </div>

        {/* ================= 6-CARD GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24">
          
          {/* CARD 1: Save 10+ Hours Every Week */}
          <div
            id="why-card-1"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative rounded-[24px] border border-white/[0.06] bg-[#0E2537]/45 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F5B000]/30 hover:shadow-[0_0_35px_rgba(245,176,0,0.08)]"
          >
            {/* Card corner flashing gold/purple backdrop hover effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-[#F5B000]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="flex justify-between items-start mb-6">
              {/* Lightning Icon in rounded badge */}
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.15)] group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-5 h-5 fill-purple-400/20" />
              </div>
              <span className="font-mono text-[11px] font-bold text-white/30 group-hover:text-[#F5B000]/60 transition-colors duration-300">
                01
              </span>
            </div>

            <div className="mb-6">
              <h3 className="font-sans font-extrabold text-lg sm:text-xl text-white mb-2 tracking-tight group-hover:text-[#F5B000] transition-colors duration-300">
                Save 10+ Hours Every Week
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Automate repetitive tasks and eliminate manual work with intelligent AI workflows that run 24/7.
              </p>
            </div>

            {/* Visual Widget: Cybernetic Clock Dial */}
            <div className="relative w-full h-[140px] bg-white/[0.02] border border-white/[0.04] rounded-xl flex items-center justify-center overflow-hidden mt-2">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.05),transparent_60%)]" />
              
              <div className="relative w-24 h-24 rounded-full border-2 border-white/10 flex items-center justify-center shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]">
                {/* Radial tick marks */}
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute w-1 h-2 bg-white/25" 
                    style={{ transform: `rotate(${i * 45}deg) translateY(-46px)` }} 
                  />
                ))}
                
                {/* Center dot */}
                <div className="w-3 h-3 rounded-full bg-purple-400 z-10 shadow-[0_0_8px_#a855f7]" />
                
                {/* Rotating Clock needle */}
                <div 
                  className="absolute w-0.5 h-10 bg-gradient-to-t from-purple-400 to-white origin-bottom z-0 shadow-[0_0_12px_#a855f7]"
                  style={{ 
                    transformOrigin: '50% 100%', 
                    transform: 'translateY(-20px)',
                    animation: 'spin 12s linear infinite' 
                  }} 
                />

                {/* Second faster sweeping ghost hand */}
                <div 
                  className="absolute w-[1px] h-12 bg-cyan-400/40 origin-bottom z-0"
                  style={{ 
                    transformOrigin: '50% 100%', 
                    transform: 'translateY(-24px)',
                    animation: 'spin 4s linear infinite' 
                  }} 
                />
              </div>

              {/* Running state label */}
              <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
                <span className="font-mono text-[9px] text-purple-300 tracking-wider">ALWAYS_ON</span>
              </div>
            </div>

            <div className="mt-5 flex items-center space-x-1.5 text-xs font-semibold text-[#F5B000] group/link cursor-pointer">
              <span>Learn more</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
            </div>
          </div>

          {/* CARD 2: Connect 500+ Apps Instantly (Animation: Icons floating. On hover -> Lines connect.) */}
          <div
            id="why-card-2"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative rounded-[24px] border border-white/[0.06] bg-[#0E2537]/45 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F5B000]/30 hover:shadow-[0_0_35px_rgba(245,176,0,0.08)]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-[#F5B000]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex justify-between items-start mb-6">
              {/* Cubes Icon in rounded badge */}
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.15)] group-hover:scale-110 transition-transform duration-300">
                <Layers className="w-5 h-5" />
              </div>
              <span className="font-mono text-[11px] font-bold text-white/30 group-hover:text-[#F5B000]/60 transition-colors duration-300">
                02
              </span>
            </div>

            <div className="mb-6">
              <h3 className="font-sans font-extrabold text-lg sm:text-xl text-white mb-2 tracking-tight group-hover:text-[#F5B000] transition-colors duration-300">
                Connect 500+ Apps Instantly
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Integrate with your favorite tools in seconds. From Gmail to Notion, Shopify to Slack — all in one place.
              </p>
            </div>

            {/* Visual Widget: Floating App Icons with Connective Lines on Hover */}
            <div className="relative w-full h-[140px] bg-white/[0.02] border border-white/[0.04] rounded-xl overflow-hidden mt-2 flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.04),transparent_60%)]" />
              
              {/* SVG Canvas for connective lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                {/* Connecting lines that become visible and glow when card is hovered */}
                <path 
                  d="M 60,35 L 140,35 L 220,35 M 60,105 L 140,105 L 220,105 M 140,35 L 140,105 M 60,35 L 140,105 M 220,35 L 140,105" 
                  stroke="#F5B000" 
                  strokeWidth="1.5" 
                  fill="none"
                  className={`transition-all duration-700 ease-in-out ${
                    hoveredCard === 2 
                      ? 'stroke-[#F5B000]/60 opacity-100' 
                      : 'stroke-white/10 opacity-30'
                  }`}
                />
              </svg>

              {/* Floating Icons grid (arranged at precise SVG coordinates) */}
              <div className="absolute inset-0 flex items-center justify-between px-10">
                
                {/* Column 1 */}
                <div className="flex flex-col justify-around h-full py-2">
                  {/* Gmail Icon */}
                  <div className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 shadow-md ${
                    hoveredCard === 2 ? 'translate-y-[-4px] scale-105 border-[#F5B000]/30 bg-[#0E2537]' : 'animate-pulse'
                  }`}>
                    <span className="text-xs font-sans font-bold text-red-400">M</span>
                  </div>
                  {/* Slack Icon */}
                  <div className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 shadow-md ${
                    hoveredCard === 2 ? 'translate-y-[4px] scale-105 border-[#F5B000]/30 bg-[#0E2537]' : ''
                  }`} style={{ animationDelay: '0.5s' }}>
                    <span className="text-xs font-sans font-bold text-amber-300">#</span>
                  </div>
                </div>

                {/* Column 2 (Center) */}
                <div className="flex flex-col justify-around h-full py-2">
                  {/* Notion Icon */}
                  <div className={`w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center transition-all duration-500 shadow-xl ${
                    hoveredCard === 2 ? 'scale-115 border-emerald-400 bg-[#0A1F2D] shadow-[0_0_15px_rgba(52,211,153,0.25)]' : 'animate-bounce'
                  }`} style={{ animationDuration: '4s' }}>
                    <span className="text-sm font-sans font-black text-white">N</span>
                  </div>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col justify-around h-full py-2">
                  {/* Shopify Icon */}
                  <div className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 shadow-md ${
                    hoveredCard === 2 ? 'translate-y-[-4px] scale-105 border-[#F5B000]/30 bg-[#0E2537]' : ''
                  }`} style={{ animationDelay: '0.8s' }}>
                    <span className="text-xs font-sans font-bold text-emerald-400">S</span>
                  </div>
                  {/* Salesforce Icon */}
                  <div className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 shadow-md ${
                    hoveredCard === 2 ? 'translate-y-[4px] scale-105 border-[#F5B000]/30 bg-[#0E2537]' : 'animate-pulse'
                  }`} style={{ animationDelay: '0.3s' }}>
                    <span className="text-xs font-sans font-bold text-sky-400">sf</span>
                  </div>
                </div>

              </div>

            </div>

            <div className="mt-5 flex items-center space-x-1.5 text-xs font-semibold text-[#F5B000] group/link cursor-pointer">
              <span>Learn more</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
            </div>
          </div>

          {/* CARD 3: Build AI Agents That Work */}
          <div
            id="why-card-3"
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative rounded-[24px] border border-white/[0.06] bg-[#0E2537]/45 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F5B000]/30 hover:shadow-[0_0_35px_rgba(245,176,0,0.08)]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-[#F5B000]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex justify-between items-start mb-6">
              {/* Chatbot Icon in rounded badge */}
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.15)] group-hover:scale-110 transition-transform duration-300">
                <Bot className="w-5 h-5 text-sky-400" />
              </div>
              <span className="font-mono text-[11px] font-bold text-white/30 group-hover:text-[#F5B000]/60 transition-colors duration-300">
                03
              </span>
            </div>

            <div className="mb-6">
              <h3 className="font-sans font-extrabold text-lg sm:text-xl text-white mb-2 tracking-tight group-hover:text-[#F5B000] transition-colors duration-300">
                Build AI Agents That Work
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Create powerful AI agents that understand, decide, and act. Handle support, research, analysis, and more.
              </p>
            </div>

            {/* Visual Widget: AI Chatbot Head with orbit rings */}
            <div className="relative w-full h-[140px] bg-white/[0.02] border border-white/[0.04] rounded-xl overflow-hidden mt-2 flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.06),transparent_60%)]" />
              
              {/* Rotating orbit rings */}
              <div className="absolute w-28 h-28 border border-white/5 rounded-full animate-spin" style={{ animationDuration: '15s' }}>
                <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
              </div>
              <div className="absolute w-20 h-20 border border-white/10 rounded-full animate-reverse-spin" style={{ animationDuration: '8s' }}>
                <div className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 rounded-full bg-[#F5B000] shadow-[0_0_6px_#F5B000]" />
              </div>

              {/* Bot Central Avatar face */}
              <div className="relative w-14 h-14 rounded-full bg-[#0A1F2D] border-2 border-sky-400/40 flex items-center justify-center shadow-xl">
                <Bot className="w-7 h-7 text-sky-400 animate-pulse" />
                {/* Audio waves visual blocks */}
                <div className="absolute -bottom-1 flex items-end space-x-1">
                  <span className="w-1 h-2 bg-sky-400 rounded-full animate-bounce" />
                  <span className="w-1 h-3.5 bg-sky-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <span className="w-1 h-2 bg-sky-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center space-x-1.5 text-xs font-semibold text-[#F5B000] group/link cursor-pointer">
              <span>Learn more</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
            </div>
          </div>

          {/* CARD 4: Enterprise-Grade Security */}
          <div
            id="why-card-4"
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative rounded-[24px] border border-white/[0.06] bg-[#0E2537]/45 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F5B000]/30 hover:shadow-[0_0_35px_rgba(245,176,0,0.08)]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-[#F5B000]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex justify-between items-start mb-6">
              {/* Shield Icon in rounded badge */}
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.15)] group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-5 h-5 text-[#F5B000]" />
              </div>
              <span className="font-mono text-[11px] font-bold text-white/30 group-hover:text-[#F5B000]/60 transition-colors duration-300">
                04
              </span>
            </div>

            <div className="mb-6">
              <h3 className="font-sans font-extrabold text-lg sm:text-xl text-white mb-2 tracking-tight group-hover:text-[#F5B000] transition-colors duration-300">
                Enterprise-Grade Security
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Your data is protected with end-to-end encryption, secure infrastructure, and compliance with global standards.
              </p>
            </div>

            {/* Visual Widget: Glowing wireframe shield with lock */}
            <div className="relative w-full h-[140px] bg-white/[0.02] border border-white/[0.04] rounded-xl overflow-hidden mt-2 flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,176,0,0.05),transparent_60%)]" />
              
              {/* Shield outline */}
              <div className="relative w-20 h-20 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full text-[#F5B000]/30 group-hover:text-[#F5B000]/50 transition-colors duration-500" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 10 L85 22 C85 55, 50 85, 50 85 C50 85, 15 55, 15 22 Z" stroke="currentColor" strokeWidth="2.5" fill="rgba(245, 176, 0, 0.04)" />
                  {/* Subtle target circle */}
                  <circle cx="50" cy="45" r="24" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                </svg>
                {/* Golden Padlock */}
                <Lock className="w-7 h-7 text-[#F5B000] drop-shadow-[0_0_12px_rgba(245,176,0,0.6)] animate-pulse relative z-10" />
              </div>
            </div>

            <div className="mt-5 flex items-center space-x-1.5 text-xs font-semibold text-[#F5B000] group/link cursor-pointer">
              <span>Learn more</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
            </div>
          </div>

          {/* CARD 5: Scale Without Limits */}
          <div
            id="why-card-5"
            onMouseEnter={() => setHoveredCard(5)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative rounded-[24px] border border-white/[0.06] bg-[#0E2537]/45 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F5B000]/30 hover:shadow-[0_0_35px_rgba(245,176,0,0.08)]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-[#F5B000]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex justify-between items-start mb-6">
              {/* Scale growth chart Icon in rounded badge */}
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.15)] group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-5 h-5 text-violet-400" />
              </div>
              <span className="font-mono text-[11px] font-bold text-white/30 group-hover:text-[#F5B000]/60 transition-colors duration-300">
                05
              </span>
            </div>

            <div className="mb-6">
              <h3 className="font-sans font-extrabold text-lg sm:text-xl text-white mb-2 tracking-tight group-hover:text-[#F5B000] transition-colors duration-300">
                Scale Without Limits
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Whether you run 10 workflows or 10,000 — AutoVerse scales with you. No bottlenecks. No compromise.
              </p>
            </div>

            {/* Visual Widget: Scale graph / upward chart */}
            <div className="relative w-full h-[140px] bg-white/[0.02] border border-white/[0.04] rounded-xl overflow-hidden mt-2 flex items-end justify-center p-4">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.05),transparent_60%)]" />
              
              {/* Dynamic bar charts */}
              <div className="w-full flex items-end justify-around h-[80px] px-2 relative z-10">
                <div className={`w-3.5 bg-violet-500/30 border border-violet-500/40 rounded-t-sm transition-all duration-700`} style={{ height: hoveredCard === 5 ? '30%' : '15%' }} />
                <div className={`w-3.5 bg-violet-500/40 border border-violet-500/50 rounded-t-sm transition-all duration-700`} style={{ height: hoveredCard === 5 ? '50%' : '25%', transitionDelay: '0.1s' }} />
                <div className={`w-3.5 bg-violet-500/50 border border-violet-500/60 rounded-t-sm transition-all duration-700`} style={{ height: hoveredCard === 5 ? '75%' : '40%', transitionDelay: '0.2s' }} />
                <div className={`w-3.5 bg-gradient-to-t from-violet-600 to-violet-400 border border-violet-400 rounded-t-sm transition-all duration-700 shadow-[0_0_15px_rgba(139,92,246,0.4)]`} style={{ height: hoveredCard === 5 ? '95%' : '60%', transitionDelay: '0.3s' }} />
              </div>

              {/* Glowing Line tracing */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 140">
                <path 
                  d="M 20,110 Q 70,80 120,60 T 180,25" 
                  stroke="#F5B000" 
                  strokeWidth="2" 
                  fill="none" 
                  className={`transition-all duration-1000 ${hoveredCard === 5 ? 'stroke-dasharray-none' : 'opacity-80'}`} 
                />
                <circle cx="180" cy="25" r="4.5" fill="#F5B000" className="animate-ping" />
                <circle cx="180" cy="25" r="3" fill="#F5B000" />
              </svg>
            </div>

            <div className="mt-5 flex items-center space-x-1.5 text-xs font-semibold text-[#F5B000] group/link cursor-pointer">
              <span>Learn more</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
            </div>
          </div>

          {/* CARD 6: Built for Teams */}
          <div
            id="why-card-6"
            onMouseEnter={() => setHoveredCard(6)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative rounded-[24px] border border-white/[0.06] bg-[#0E2537]/45 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F5B000]/30 hover:shadow-[0_0_35px_rgba(245,176,0,0.08)]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-[#F5B000]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex justify-between items-start mb-6">
              {/* Users Icon in rounded badge */}
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:scale-110 transition-transform duration-300">
                <Users className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="font-mono text-[11px] font-bold text-white/30 group-hover:text-[#F5B000]/60 transition-colors duration-300">
                06
              </span>
            </div>

            <div className="mb-6">
              <h3 className="font-sans font-extrabold text-lg sm:text-xl text-white mb-2 tracking-tight group-hover:text-[#F5B000] transition-colors duration-300">
                Built for Teams
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Collaborate seamlessly with your team. Share workflows, manage permissions, and get more done together.
              </p>
            </div>

            {/* Visual Widget: Connected User node network circles */}
            <div className="relative w-full h-[140px] bg-white/[0.02] border border-white/[0.04] rounded-xl overflow-hidden mt-2 flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.04),transparent_60%)]" />
              
              {/* Node connection lines */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <line x1="100" y1="35" x2="60" y2="100" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.4" />
                <line x1="100" y1="35" x2="140" y2="100" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.4" />
                <line x1="60" y1="100" x2="140" y2="100" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.4" />
                
                {/* Solid connector glowing on hover */}
                <path 
                  d="M 100,35 L 60,100 L 140,100 Z" 
                  stroke="#F5B000" 
                  strokeWidth="1.5" 
                  fill="none" 
                  className={`transition-opacity duration-300 ${hoveredCard === 6 ? 'opacity-100' : 'opacity-0'}`} 
                />
              </svg>

              {/* Node items */}
              {/* User A (Top Center) */}
              <div className="absolute top-[18px] left-[84px] w-8 h-8 rounded-full bg-[#114C5A]/85 border-2 border-emerald-400 flex items-center justify-center text-[10px] font-bold text-white shadow-lg shadow-emerald-500/20">
                JD
              </div>
              {/* User B (Bottom Left) */}
              <div className="absolute bottom-[24px] left-[44px] w-8 h-8 rounded-full bg-[#0E2537]/85 border-2 border-[#F5B000] flex items-center justify-center text-[10px] font-bold text-white shadow-lg shadow-[#F5B000]/10 animate-bounce" style={{ animationDuration: '4s' }}>
                MK
              </div>
              {/* User C (Bottom Right) */}
              <div className="absolute bottom-[24px] right-[44px] w-8 h-8 rounded-full bg-[#1A1A1A]/85 border-2 border-cyan-400 flex items-center justify-center text-[10px] font-bold text-white shadow-lg shadow-cyan-400/20">
                SL
              </div>
            </div>

            <div className="mt-5 flex items-center space-x-1.5 text-xs font-semibold text-[#F5B000] group/link cursor-pointer">
              <span>Learn more</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
            </div>
          </div>

        </div>

        {/* ================= BOTTOM CTA BANNER ================= */}
        <div className="relative max-w-5xl mx-auto rounded-[24px] border border-white/[0.08] bg-[#0E2537]/80 backdrop-blur-2xl p-8 sm:p-12 text-center overflow-hidden">
          
          {/* Internal corner borders to match the design styling */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#F5B000]/35 rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#F5B000]/35 rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#F5B000]/35 rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#F5B000]/35 rounded-br-xl" />

          {/* Radial overlay glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,176,0,0.04),transparent_65%)] pointer-events-none" />

          <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-white mb-2 tracking-tight">
            Ready to automate smarter?
          </h3>
          <p className="font-sans text-sm text-[#94A3B8] max-w-lg mx-auto mb-8">
            Join thousands of teams building the future with AutoVerse.
          </p>

          {/* User Avatars & Badge row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex -space-x-3.5 overflow-hidden">
              {avatars.map((avatar, idx) => (
                <img 
                  key={idx}
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#081B2C] object-cover"
                  src={avatar.url} 
                  alt={avatar.name}
                  referrerPolicy="no-referrer"
                />
              ))}
              <div className="flex items-center justify-center h-9 w-9 rounded-full bg-[#114C5A] ring-2 ring-[#081B2C] text-[10px] font-mono font-bold text-[#F5B000]">
                +2K
              </div>
            </div>
            <span className="font-sans text-xs text-[#94A3B8] font-medium">
              Join <span className="text-white font-bold">2,400+ developers</span> automating production daily
            </span>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#signup"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-[#F5B000] text-black font-sans text-xs font-black uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(245,176,0,0.25)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] active:scale-95"
            >
              <span>Start Building Free</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <a
              href="#demo"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-sans text-xs font-semibold hover:bg-white/15 hover:border-white/20 transition-all duration-300"
            >
              <span>Book a Demo</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
