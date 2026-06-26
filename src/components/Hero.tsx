import { useEffect, useState, useRef } from 'react';
import ThreeBackground from './ThreeBackground';
import { 
  FileSpreadsheet, 
  Sparkles, 
  Send, 
  Play, 
  CheckCircle2, 
  ArrowRight, 
  Activity, 
  Database, 
  Bot, 
  Zap, 
  RefreshCw 
} from 'lucide-react';

export default function Hero() {
  const [activeStep, setActiveStep] = useState<0 | 1 | 2 | 3 | 4>(1);
  const [isSimulating, setIsSimulating] = useState(true);
  const [simulationLogs, setSimulationLogs] = useState<string[]>([
    "✓ Google Sheet Row Added: Row #1024"
  ]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Active loop animation mimicking standard SaaS workflow pipelines
  const triggerSimulationStep = () => {
    setIsSimulating(true);
    setActiveStep(1);
    setSimulationLogs(["✓ Google Sheet Row Added: Row #1024"]);

    const steps = [
      {
        step: 2,
        log: "⚡ AI Agent reading spreadsheet row...",
        delay: 1500
      },
      {
        step: 3,
        log: "🔮 AI reading lead info & composing Slack message...",
        delay: 3000
      },
      {
        step: 4,
        log: "🚀 Slack message sent automatically to #new-leads",
        delay: 4500
      }
    ];

    steps.forEach((s) => {
      setTimeout(() => {
        setActiveStep(s.step as any);
        setSimulationLogs(prev => [...prev, s.log]);
        if (s.step === 4) {
          setIsSimulating(false);
        }
      }, s.delay);
    });
  };

  useEffect(() => {
    triggerSimulationStep();
    // Auto loop simulation every 8.5 seconds for visual engagement
    const interval = setInterval(() => {
      triggerSimulationStep();
    }, 8500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section 
      id="hero-section"
      className="relative min-h-[95vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 lg:py-24 overflow-hidden border-b border-border-sub/10 bg-gradient-to-b from-primary-bg to-primary-bg/90 transition-colors duration-300"
    >
      {/* Three.js Background Canvas - Subdued & Subtle overlay */}
      <ThreeBackground />

      {/* Backdrop glowing focal points */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-1/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center space-y-10">
        
        {/* Double Trust Badges */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-accent-1/20 bg-secondary-bg/25 backdrop-blur-md">
            <span className="text-accent-1 font-bold animate-pulse text-xs">⚡</span>
            <span className="font-mono text-[10px] tracking-widest text-text-bright font-bold uppercase">
              AI Agent Builder
            </span>
          </div>
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-accent-2/20 bg-secondary-bg/25 backdrop-blur-md">
            <span className="text-accent-2 font-bold text-xs">✓</span>
            <span className="font-mono text-[10px] tracking-widest text-text-bright font-bold uppercase">
              500+ AI Integrations
            </span>
          </div>
        </div>

        {/* Hero Title and Description */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="font-sans font-extrabold text-4xl sm:text-6xl lg:text-7xl text-text-bright tracking-tight leading-[1.1]">
            Build AI Workflows <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-1 via-accent-2 to-accent-1 bg-300% animate-pulse">
              That Run Your Business
            </span>
          </h1>

          <p className="font-sans text-base sm:text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Connect your favorite apps, deploy AI agents, and automate repetitive tasks in minutes — without writing complex code.
          </p>
        </div>

        {/* Big, Impossible-to-Miss Call To Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a 
            href="#pricing" 
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-accent-1 text-primary-bg font-sans font-extrabold text-base transition-micro shadow-lg hover:scale-[1.04] active:scale-95 text-center cursor-pointer glow-accent hover:bg-[#ffe05c]"
          >
            Start Building Free
          </a>
          <a 
            href="#live-canvas" 
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-border-sub bg-[#172836]/40 backdrop-blur-md text-text-bright font-sans font-semibold text-base transition-micro hover:border-accent-1/40 hover:bg-secondary-bg/25 text-center cursor-pointer active:scale-95"
          >
            View Templates
          </a>
        </div>

        {/* SaaS Governance & Deployment Metrics Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full max-w-4xl py-6 border-y border-border-sub/10">
          <div className="text-center sm:text-left space-y-1">
            <div className="font-sans font-black text-3xl sm:text-4xl text-accent-1">400K+</div>
            <div className="font-sans text-xs text-text-muted font-medium">Agents built</div>
          </div>
          <div className="text-center sm:text-left space-y-1 sm:border-l sm:border-border-sub/10 sm:pl-8">
            <div className="font-sans font-black text-3xl sm:text-4xl text-accent-2">7,000+</div>
            <div className="font-sans text-xs text-text-muted font-medium">App integrations with governed access</div>
          </div>
          <div className="text-center sm:text-left space-y-1 sm:border-l sm:border-border-sub/10 sm:pl-8">
            <div className="font-sans font-black text-3xl sm:text-4xl text-text-bright">3.56M+</div>
            <div className="font-sans text-xs text-text-muted font-medium">MCP tool calls completed</div>
          </div>
        </div>

        {/* Product Visual Mockup: Stunning Responsive Workflow Builder */}
        <div className="w-full max-w-4xl rounded-2xl border border-border-sub/80 bg-oceanic/95 backdrop-blur-xl shadow-2xl overflow-hidden text-left flex flex-col">
          <div className="px-5 py-4 bg-[#114C5A]/30 border-b border-b-border-sub/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 rounded-full bg-accent-1 animate-ping" />
              <div>
                <span className="font-sans text-[10px] uppercase tracking-wider text-[#94A3B8] font-bold block">
                  Workflow Demo
                </span>
                <span className="font-sans text-sm font-bold text-text-bright">
                  Google Sheets Row ➔ AI Agent ➔ Slack Alert
                </span>
              </div>
            </div>

            {/* Action Simulator trigger */}
            <button
              onClick={() => triggerSimulationStep()}
              disabled={isSimulating}
              className="px-3.5 py-1.5 rounded-lg bg-accent-1/10 hover:bg-accent-1/20 border border-accent-1/30 text-accent-1 text-xs font-mono font-semibold transition-micro cursor-pointer flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              <Play className="w-3.5 h-3.5 fill-accent-1" />
              <span>{isSimulating ? 'SIMULATING...' : 'RUN WORKFLOW'}</span>
            </button>
          </div>

          {/* Interactive Workflow Visualizer Area */}
          <div className="p-6 sm:p-10 bg-[#114C5A]/10 relative overflow-hidden flex flex-col space-y-8 md:space-y-0 md:flex-row md:items-center md:justify-between md:space-x-6 min-h-[220px]">
            
            {/* Ambient grid lines in the canvas */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(241,246,244,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(241,246,244,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

            {/* Node 1: Google Sheets Trigger */}
            <div 
              className={`relative z-10 p-5 rounded-xl border transition-all duration-500 flex-1 ${
                activeStep === 1 
                  ? 'border-emerald-400 bg-secondary-bg/40 shadow-[0_0_20px_rgba(16,185,129,0.15)] scale-[1.02]' 
                  : 'border-border-sub bg-oceanic/40 opacity-75'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center">
                  <FileSpreadsheet className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-400 font-bold block">
                    1. Trigger
                  </span>
                  <h3 className="font-sans text-xs sm:text-sm font-bold text-text-bright">
                    Google Sheets
                  </h3>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-border-sub/10 font-mono text-[10px] text-text-muted space-y-1">
                <div>When: <span className="text-emerald-400">Row Added</span></div>
                <div className="truncate text-text-bright/90 bg-secondary-bg/20 px-2 py-1 rounded">Row 1024: Vanshika Grover</div>
              </div>
            </div>

            {/* Link Connector 1 */}
            <div className="hidden md:flex flex-col items-center justify-center flex-shrink-0 w-12 h-10 relative">
              <div className="w-full h-0.5 bg-border-sub/50 absolute top-1/2 -translate-y-1/2" />
              {activeStep >= 2 && (
                <div className="w-2.5 h-2.5 rounded-full bg-accent-1 animate-ping absolute top-1/2 -translate-y-1/2 left-0 right-0 mx-auto" />
              )}
              <ArrowRight className="w-4 h-4 text-accent-1/60 absolute top-1/2 -translate-y-1/2" />
            </div>

            {/* Node 2: OpenAI Core Processor */}
            <div 
              className={`relative z-10 p-5 rounded-xl border transition-all duration-500 flex-1 ${
                activeStep === 2 || activeStep === 3
                  ? 'border-accent-1 bg-secondary-bg/40 shadow-[0_0_20px_rgba(255,200,1,0.15)] scale-[1.02]' 
                  : 'border-border-sub bg-oceanic/40 opacity-75'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-accent-1/15 border border-accent-1/30 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-accent-1" />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-accent-1 font-bold block">
                    2. AI Agent
                  </span>
                  <h3 className="font-sans text-xs sm:text-sm font-bold text-text-bright">
                    Gemini AI Assistant
                  </h3>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-border-sub/10 font-mono text-[10px] text-text-muted space-y-1">
                <div>Action: <span className="text-accent-1">Compose Reply</span></div>
                <div className="truncate text-text-bright/90 bg-secondary-bg/20 px-2 py-1 rounded">
                  {activeStep >= 2 ? 'Qualifying: Enterprise Lead' : 'Awaiting trigger...'}
                </div>
              </div>
            </div>

            {/* Link Connector 2 */}
            <div className="hidden md:flex flex-col items-center justify-center flex-shrink-0 w-12 h-10 relative">
              <div className="w-full h-0.5 bg-border-sub/50 absolute top-1/2 -translate-y-1/2" />
              {activeStep >= 3 && (
                <div className="w-2.5 h-2.5 rounded-full bg-accent-2 animate-ping absolute top-1/2 -translate-y-1/2 left-0 right-0 mx-auto" />
              )}
              <ArrowRight className="w-4 h-4 text-accent-2/60 absolute top-1/2 -translate-y-1/2" />
            </div>

            {/* Node 3: Slack Publisher */}
            <div 
              className={`relative z-10 p-5 rounded-xl border transition-all duration-500 flex-1 ${
                activeStep === 4
                  ? 'border-accent-2 bg-secondary-bg/40 shadow-[0_0_20px_rgba(255,153,50,0.15)] scale-[1.02]' 
                  : 'border-border-sub bg-oceanic/40 opacity-75'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-accent-2/15 border border-accent-2/30 flex items-center justify-center">
                  <Send className="w-5 h-5 text-accent-2" />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-accent-2 font-bold block">
                    3. Slack Message
                  </span>
                  <h3 className="font-sans text-xs sm:text-sm font-bold text-text-bright">
                    Slack Alerts
                  </h3>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-border-sub/10 font-mono text-[10px] text-text-muted space-y-1">
                <div>Output: <span className="text-accent-2">Post Alert</span></div>
                <div className="truncate text-text-bright/90 bg-secondary-bg/20 px-2 py-1 rounded">
                  {activeStep === 4 ? 'Sent alert to #new-leads' : 'Awaiting prompt...'}
                </div>
              </div>
            </div>

          </div>

          {/* Micro Live Telemetry Terminal */}
          <div className="px-5 py-4 bg-[#114C5A]/20 border-t border-border-sub/40 font-mono text-xs text-text-muted space-y-1.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="space-y-1 flex-1">
              {simulationLogs.map((log, index) => (
                <div key={index} className="flex items-center space-x-2 text-[11px] animate-fadeIn">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className={log.startsWith('✓') ? 'text-emerald-300' : 'text-text-muted'}>
                    {log}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Status Info */}
            <div className="flex items-center space-x-2 border border-border-sub/35 bg-[#172836]/50 px-3 py-1 rounded text-[10px]">
              <Activity className="w-3 h-3 text-accent-1 animate-pulse" />
              <span className="text-text-bright uppercase">Status: {isSimulating ? 'Running' : 'Ready'}</span>
            </div>
          </div>
          </div>

        </div>

    </section>
  );
}
