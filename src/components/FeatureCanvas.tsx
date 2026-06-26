import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Mail, 
  Bot, 
  UserCheck, 
  FileSpreadsheet, 
  Slack, 
  CheckCircle2, 
  ArrowRight,
  Play,
  RotateCcw,
  Code
} from 'lucide-react';

interface WorkflowStep {
  id: number;
  title: string;
  subtitle: string;
  status: 'idle' | 'running' | 'success';
  icon: React.ReactNode;
  colorClass: string;
  glowColor: string;
  description: string;
}

export default function FeatureCanvas() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [packetProgress, setPacketProgress] = useState<number>(0); // 0 to 100 for path
  const [simulationSpeed, setSimulationSpeed] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [simulatedLogs, setSimulatedLogs] = useState<string[]>([
    "System initialized. Ready to receive trigger."
  ]);

  const steps: WorkflowStep[] = [
    {
      id: 0,
      title: "New Email",
      subtitle: "Trigger app",
      status: 'idle',
      icon: <Mail className="w-5 h-5 text-emerald-400" />,
      colorClass: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
      glowColor: "rgba(16,185,129,0.3)",
      description: "Triggered instantly when a new lead email arrives in your inbox."
    },
    {
      id: 1,
      title: "AI reads email",
      subtitle: "Gemini AI Agent",
      status: 'idle',
      icon: <Bot className="w-5 h-5 text-amber-400" />,
      colorClass: "border-amber-500/30 bg-amber-500/10 text-amber-400",
      glowColor: "rgba(245,176,0,0.3)",
      description: "Gemini scans the content to understand intent, sentiment, and core request."
    },
    {
      id: 2,
      title: "Extract customer details",
      subtitle: "Data parser",
      status: 'idle',
      icon: <UserCheck className="w-5 h-5 text-sky-400" />,
      colorClass: "border-sky-500/30 bg-sky-500/10 text-sky-400",
      glowColor: "rgba(56,189,248,0.3)",
      description: "Automatically pulls out contact details, organization, and custom tags."
    },
    {
      id: 3,
      title: "Save to Sheets",
      subtitle: "Google Sheets Sync",
      status: 'idle',
      icon: <FileSpreadsheet className="w-5 h-5 text-emerald-400" />,
      colorClass: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
      glowColor: "rgba(16,185,129,0.3)",
      description: "Instantly adds the structured customer record to your lead tracking database."
    },
    {
      id: 4,
      title: "Notify Slack",
      subtitle: "Instant Alert",
      status: 'idle',
      icon: <Slack className="w-5 h-5 text-purple-400" />,
      colorClass: "border-purple-500/30 bg-purple-500/10 text-purple-400",
      glowColor: "rgba(139,92,246,0.3)",
      description: "Pings your team with a formatted message containing all the extracted insights."
    }
  ];

  // Automated logic simulator
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setPacketProgress((prev) => {
        const next = prev + 1.2 * simulationSpeed;
        
        // Calculate which node is currently active based on progress
        const stepIndex = Math.min(Math.floor(next / 20), 4);
        if (stepIndex !== activeStep) {
          setActiveStep(stepIndex);
          
          // Add custom log on node activation
          const logMessages = [
            "📨 Gmail trigger received: 'Inquiry from Vanshika Grover (AutoVerse Enterprise Plan)'",
            "🔮 Gemini AI analyzing email intent... (Detected: High-Intent Lead)",
            "🔑 Customer details parsed successfully: Name, Email, Organization, Budget",
            "📊 Row added to Google Sheet: 'Leads 2026' with 4 active cells completed",
            "🚀 Slack notification sent to #new-leads containing the summary alert"
          ];
          
          setSimulatedLogs((prevLogs) => {
            if (!prevLogs.includes(logMessages[stepIndex])) {
              return [...prevLogs, logMessages[stepIndex]];
            }
            return prevLogs;
          });
        }

        if (next >= 100) {
          // Restart loop
          setTimeout(() => {
            setPacketProgress(0);
            setActiveStep(0);
            setSimulatedLogs(["🔄 New loop started. Waiting for trigger email..."]);
          }, 1200);
          return 100;
        }
        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying, activeStep, simulationSpeed]);

  return (
    <section 
      id="live-canvas" 
      className="relative w-full py-28 bg-[#081B2C] border-b border-white/[0.04] overflow-hidden text-white"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Blurred radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#F5B000]/5 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= HEADER ================= */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#F5B000]/10 border border-[#F5B000]/25 text-[#F5B000] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready-Made Workflows</span>
          </div>
          
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
            Automations That Work <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B000] to-[#FFD56B]">Right Out of the Box</span>
          </h2>
          
          <p className="font-sans text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            Choose a ready-made workflow, customize it in minutes, and let AutoVerse handle the repetitive work for you.
          </p>
        </div>

        {/* ================= WORKFLOW CANVAS (The One Large Flow) ================= */}
        <div className="relative w-full rounded-[24px] border border-white/[0.08] bg-[#0A1F2D]/60 backdrop-blur-xl p-8 lg:p-12 shadow-2xl mb-16 overflow-hidden">
          
          {/* Canvas decorative background grid lines */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

          {/* Interactive Flow Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.06] relative z-20">
            <div className="flex items-center space-x-3.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5B000] animate-ping" />
              <div>
                <h3 className="font-sans text-sm font-bold text-white uppercase tracking-wider">
                  Live Execution Simulator
                </h3>
                <p className="font-sans text-[11px] text-[#94A3B8]">
                  Watch the data stream from trigger application to notification outputs
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Play/Pause */}
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold flex items-center space-x-2 transition-all cursor-pointer"
              >
                {isPlaying ? (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5B000] animate-pulse" />
                    <span>Pause Demo</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                    <span>Resume Demo</span>
                  </>
                )}
              </button>

              {/* Speed controls */}
              <div className="flex items-center bg-white/5 border border-white/10 rounded-lg p-1">
                <button 
                  onClick={() => setSimulationSpeed(0.5)}
                  className={`px-2 py-1 rounded text-[10px] font-bold ${simulationSpeed === 0.5 ? 'bg-[#F5B000] text-black' : 'text-white/70 hover:text-white'}`}
                >
                  0.5x
                </button>
                <button 
                  onClick={() => setSimulationSpeed(1)}
                  className={`px-2 py-1 rounded text-[10px] font-bold ${simulationSpeed === 1 ? 'bg-[#F5B000] text-black' : 'text-white/70 hover:text-white'}`}
                >
                  1x
                </button>
                <button 
                  onClick={() => setSimulationSpeed(2)}
                  className={`px-2 py-1 rounded text-[10px] font-bold ${simulationSpeed === 2 ? 'bg-[#F5B000] text-black' : 'text-white/70 hover:text-white'}`}
                >
                  2x
                </button>
              </div>

              {/* Reset logs */}
              <button 
                onClick={() => {
                  setPacketProgress(0);
                  setActiveStep(0);
                  setSimulatedLogs(["System reset. Awaiting new lead email trigger..."]);
                }}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white cursor-pointer"
                title="Reset simulation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* ================= FLOW GRAPH LAYER ================= */}
          <div className="relative w-full py-6">
            
            {/* SVG Connecting Paths (Active glows + moving data packets) */}
            <div className="absolute inset-0 pointer-events-none hidden md:block">
              <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Horizontal flow line connecting all 5 nodes */}
                {/* Approximate positions on 5 evenly spaced columns:
                    0: 10%
                    1: 30%
                    2: 50%
                    3: 70%
                    4: 90%
                */}
                
                {/* Base background connection path */}
                <path 
                  d="M 120, 68 L 960, 68" 
                  stroke="rgba(255,255,255,0.06)" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                />

                {/* Glowing Active Path */}
                <path 
                  d={`M 120, 68 L ${120 + (840 * (packetProgress / 100))}, 68`} 
                  stroke="url(#glowing-line-gradient)" 
                  strokeWidth="3.5" 
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />

                {/* The Moving Data Packet (Real-time moving dot) */}
                <circle 
                  cx={120 + (840 * (packetProgress / 100))} 
                  cy="68" 
                  r="6" 
                  fill="#F5B000" 
                  className="shadow-[0_0_15px_#F5B000]"
                  style={{ filter: 'drop-shadow(0 0 8px #F5B000)' }}
                />

                {/* Gradient Definitions */}
                <defs>
                  <linearGradient id="glowing-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="50%" stopColor="#F5B000" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* FLOW NODES GRID CONTAINER */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                const isPassed = activeStep > idx;

                return (
                  <div 
                    key={step.id}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Glowing Node Button / Badge */}
                    <div 
                      className={`relative w-16 h-16 rounded-[18px] border-2 flex items-center justify-center transition-all duration-500 ${
                        isActive 
                          ? 'border-[#F5B000] bg-[#0E2537] scale-115' 
                          : isPassed
                            ? 'border-emerald-500/70 bg-[#0A1F2D]'
                            : 'border-white/10 bg-white/[0.02]'
                      }`}
                      style={{
                        boxShadow: isActive 
                          ? `0 0 25px ${step.glowColor}, inset 0 0 10px ${step.glowColor}` 
                          : isPassed 
                            ? '0 0 15px rgba(16,185,129,0.1)' 
                            : 'none'
                      }}
                    >
                      {/* Interactive glowing back aura */}
                      <div className={`absolute -inset-1 rounded-[18px] blur-sm transition-opacity duration-300 ${
                        isActive ? 'bg-[#F5B000]/15 opacity-100' : 'opacity-0'
                      }`} />

                      <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                        {step.icon}
                      </div>

                      {/* Small Status Indicator Dot */}
                      <div className={`absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full flex items-center justify-center border text-[8px] font-bold ${
                        isActive 
                          ? 'bg-[#F5B000] border-[#0A1F2D] text-black animate-bounce' 
                          : isPassed
                            ? 'bg-emerald-500 border-[#0A1F2D] text-white'
                            : 'bg-white/10 border-white/20 text-white/50'
                      }`}>
                        {isPassed ? "✓" : ""}
                      </div>
                    </div>

                    {/* Step Info */}
                    <div className="mt-4 space-y-1">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[#94A3B8] font-bold">
                        {step.subtitle}
                      </span>
                      <h4 className={`font-sans text-sm font-black tracking-tight transition-colors duration-300 ${
                        isActive ? 'text-[#F5B000]' : 'text-white'
                      }`}>
                        {step.title}
                      </h4>
                      <p className="font-sans text-[11px] text-[#64748B] max-w-[150px] mx-auto md:block hidden">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow for mobile columns */}
                    {idx < 4 && (
                      <div className="my-3 block md:hidden text-white/20">
                        ↓
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* Complete Success Status Row */}
          <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-left">
                <span className="font-sans text-xs font-black text-emerald-400 block uppercase tracking-wider">
                  Workflow Status: Active & Running
                </span>
                <span className="font-sans text-[11px] text-[#94A3B8]">
                  All trigger webhooks and AI models configured correctly.
                </span>
              </div>
            </div>

            {/* Simulated Live Terminal Logs */}
            <div className="w-full sm:max-w-md bg-black/40 border border-white/[0.08] rounded-xl p-3.5 text-left font-mono text-[11px] text-cyan-300 space-y-1.5 h-[80px] overflow-y-auto">
              <div className="flex items-center space-x-1 text-white/40 border-b border-white/[0.05] pb-1 mb-1">
                <Code className="w-3.5 h-3.5" />
                <span>Live Event Logs</span>
              </div>
              {simulatedLogs.slice(-2).map((log, index) => (
                <div key={index} className="truncate">
                  <span className="text-white/40">[{new Date().toLocaleTimeString()}]</span> {log}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
