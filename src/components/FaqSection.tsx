import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageSquare, Sparkles, Mail, ArrowRight } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FaqItem[] = [
    {
      question: "What is AutoVerse?",
      answer: "AutoVerse is an AI-powered automation platform that helps you build intelligent workflows, connect your favorite apps, and automate repetitive tasks—all from one intuitive workspace."
    },
    {
      question: "Do I need coding experience?",
      answer: "No. AutoVerse is built for everyone. Create powerful workflows using our visual builder, or add custom code for advanced automation when needed."
    },
    {
      question: "Which apps can I integrate?",
      answer: "Connect hundreds of popular tools including Gmail, Slack, Google Sheets, Notion, Discord, GitHub, Trello, and many more through native integrations and webhooks."
    },
    {
      question: "Can I build AI Agents?",
      answer: "Absolutely. Create AI agents that can generate content, analyze documents, answer questions, automate business processes, and interact with your favorite applications."
    },
    {
      question: "Do I need my own OpenAI API key?",
      answer: "No. AutoVerse provides access to multiple leading AI models through a single platform. If you prefer complete control, you can also connect your own API keys."
    },
    {
      question: "How does workflow execution work?",
      answer: "Every time a workflow is triggered—whether manually, on a schedule, or through an event—it runs automatically and executes each connected step in sequence."
    },
    {
      question: "Is my data secure?",
      answer: "Yes. AutoVerse uses encrypted connections, secure authentication, and enterprise-grade security practices to keep your workflows and data protected."
    },
    {
      question: "Can I monitor my automations?",
      answer: "Yes. Track workflow runs, AI usage, execution history, performance metrics, and error logs from a centralized dashboard."
    },
    {
      question: "Can my team collaborate?",
      answer: "Definitely. Invite teammates, share workflows, assign permissions, and collaborate in real time with shared workspaces."
    },
    {
      question: "Is there a free plan?",
      answer: "Yes! Start with our free plan to explore AI-powered automation, then upgrade whenever you need more workflows, integrations, or advanced features."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section 
      id="faq" 
      className="relative w-full py-24 bg-[#081B2C] border-t border-border-sub/20 overflow-hidden text-white"
    >
      {/* 1. Cyberpunk Faint Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* 2. Soft Blurred Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#F5B000]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      {/* 3. Slowly Floating Golden/Cyber Nodes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-1.5 h-1.5 rounded-full bg-[#F5B000]/60 shadow-[0_0_8px_#F5B000] top-[12%] left-[8%] animate-pulse" />
        <div className="absolute w-1 h-1 rounded-full bg-cyan-400/60 shadow-[0_0_6px_#06b6d4] top-[32%] right-[12%]" />
        <div className="absolute w-2 h-2 rounded-full bg-[#F5B000]/40 shadow-[0_0_10px_#F5B000] bottom-[24%] left-[15%] animate-bounce duration-[8s]" />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/50 shadow-[0_0_8px_#06b6d4] bottom-[48%] right-[6%] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block with gold spark badge */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#F5B000]/10 border border-[#F5B000]/20 text-[#F5B000] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AutoVerse Intelligence Hub</span>
          </div>
          
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          
          <p className="font-sans text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about AutoVerse and AI-powered automation.
          </p>
        </div>

        {/* 4. Two-Column Desktop Layout / Single Column Mobile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-20">
          
          {/* Column A (Even indexes) */}
          <div className="space-y-4">
            {faqData.filter((_, idx) => idx % 2 === 0).map((item, index) => {
              const realIndex = index * 2;
              const isOpen = activeIndex === realIndex;
              return (
                <div 
                  key={`faq-even-${realIndex}`}
                  onClick={() => toggleAccordion(realIndex)}
                  className={`group relative rounded-[16px] border bg-white/[0.04] backdrop-blur-md p-5 transition-all duration-300 cursor-pointer hover:-translate-y-1 ${
                    isOpen 
                      ? 'border-[#F5B000]/45 shadow-[0_0_20px_rgba(245,176,0,0.15)] bg-white/[0.07]' 
                      : 'border-white/[0.08] hover:border-[#F5B000]/30 hover:shadow-[0_0_15px_rgba(245,176,0,0.05)]'
                  }`}
                >
                  <div className="flex items-start justify-between space-x-4">
                    <div className="flex items-start space-x-3.5">
                      <div className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${
                        isOpen 
                          ? 'bg-[#F5B000]/15 border-[#F5B000]/30 text-[#F5B000]' 
                          : 'bg-white/[0.03] border-white/[0.05] text-white/50 group-hover:text-[#F5B000]'
                      }`}>
                        <HelpCircle className="w-3.5 h-3.5" />
                      </div>
                      <h3 className={`font-sans text-sm sm:text-base font-bold tracking-tight transition-colors duration-300 ${
                        isOpen ? 'text-[#F5B000]' : 'text-white'
                      }`}>
                        {item.question}
                      </h3>
                    </div>

                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-[#F5B000] text-black rotate-180' : 'bg-white/10 text-white/70 group-hover:bg-white/20'
                    }`}>
                      {isOpen ? (
                        <Minus className="w-3 h-3 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-3 h-3 stroke-[2.5]" />
                      )}
                    </div>
                  </div>

                  {/* Smooth height-collapsing text answer */}
                  <div className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                  }`}>
                    <div className="overflow-hidden">
                      <p className="font-sans text-xs sm:text-sm text-[#94A3B8] leading-relaxed border-t border-white/[0.06] pt-3.5">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Column B (Odd indexes) */}
          <div className="space-y-4">
            {faqData.filter((_, idx) => idx % 2 !== 0).map((item, index) => {
              const realIndex = index * 2 + 1;
              const isOpen = activeIndex === realIndex;
              return (
                <div 
                  key={`faq-odd-${realIndex}`}
                  onClick={() => toggleAccordion(realIndex)}
                  className={`group relative rounded-[16px] border bg-white/[0.04] backdrop-blur-md p-5 transition-all duration-300 cursor-pointer hover:-translate-y-1 ${
                    isOpen 
                      ? 'border-[#F5B000]/45 shadow-[0_0_20px_rgba(245,176,0,0.15)] bg-white/[0.07]' 
                      : 'border-white/[0.08] hover:border-[#F5B000]/30 hover:shadow-[0_0_15px_rgba(245,176,0,0.05)]'
                  }`}
                >
                  <div className="flex items-start justify-between space-x-4">
                    <div className="flex items-start space-x-3.5">
                      <div className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${
                        isOpen 
                          ? 'bg-[#F5B000]/15 border-[#F5B000]/30 text-[#F5B000]' 
                          : 'bg-white/[0.03] border-white/[0.05] text-white/50 group-hover:text-[#F5B000]'
                      }`}>
                        <HelpCircle className="w-3.5 h-3.5" />
                      </div>
                      <h3 className={`font-sans text-sm sm:text-base font-bold tracking-tight transition-colors duration-300 ${
                        isOpen ? 'text-[#F5B000]' : 'text-white'
                      }`}>
                        {item.question}
                      </h3>
                    </div>

                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-[#F5B000] text-black rotate-180' : 'bg-white/10 text-white/70 group-hover:bg-white/20'
                    }`}>
                      {isOpen ? (
                        <Minus className="w-3 h-3 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-3 h-3 stroke-[2.5]" />
                      )}
                    </div>
                  </div>

                  {/* Smooth height-collapsing text answer */}
                  <div className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                  }`}>
                    <div className="overflow-hidden">
                      <p className="font-sans text-xs sm:text-sm text-[#94A3B8] leading-relaxed border-t border-white/[0.06] pt-3.5">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* 5. Bottom CTA Glass Card */}
        <div className="relative max-w-4xl mx-auto">
          {/* Back glows for card */}
          <div className="absolute -inset-0.5 rounded-[24px] bg-gradient-to-r from-[#F5B000]/30 to-cyan-500/20 blur-xl opacity-50" />
          
          <div className="relative rounded-[24px] border border-white/[0.1] bg-[#0E283F]/70 backdrop-blur-xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
            
            {/* Glowing pattern lines inside card */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,176,0,0.06),transparent_50%)] pointer-events-none" />
            
            <div className="flex items-center space-x-5 relative z-10 text-center md:text-left flex-col md:flex-row">
              <div className="w-12 h-12 rounded-xl bg-[#F5B000]/10 border border-[#F5B000]/25 flex items-center justify-center text-[#F5B000] mb-4 md:mb-0 shrink-0 shadow-[0_0_15px_rgba(245,176,0,0.1)]">
                <MessageSquare className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h4 className="font-sans text-xl sm:text-2xl font-black tracking-tight text-white mb-1.5">
                  Still have questions?
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#94A3B8]">
                  Our team is here to help you automate smarter.
                </p>
              </div>
            </div>

            <div className="relative z-10 w-full md:w-auto shrink-0">
              <a
                href="#contact"
                className="w-full md:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-[#F5B000] text-[#081B2C] font-sans text-xs font-black uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] active:scale-95 group/btn"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
