import { useEffect, useState } from 'react';
import { 
  Sun, 
  Moon, 
  Github, 
  ChevronDown, 
  Workflow, 
  Layers, 
  FileSpreadsheet, 
  Bot, 
  Shield, 
  Activity, 
  Code, 
  BookOpen, 
  Terminal, 
  FileText, 
  MessageSquare, 
  Compass, 
  HelpCircle,
  Sparkles,
  Database,
  UserCheck
} from 'lucide-react';

export const AutoVerseLogo = ({ className = "w-5 h-5 text-accent-1" }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="7" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    {/* Antenna top node */}
    <circle cx="50" cy="15" r="6" fill="currentColor" stroke="none" />
    {/* Antenna pole */}
    <line x1="50" y1="21" x2="50" y2="32" />
    
    {/* Outer head ring (flattened circle/oval with gap left & right for connectors) */}
    <path d="M 28 53 A 28 24 0 0 1 72 53" />
    <path d="M 72 57 A 28 24 0 0 1 28 57" />
    
    {/* Left horizontal connector and inner bulb */}
    <path d="M 16 55 L 34 55" />
    <circle cx="40" cy="55" r="7" fill="currentColor" stroke="none" />
    <circle cx="16" cy="55" r="4.5" fill="currentColor" stroke="none" />

    {/* Right horizontal connector and inner bulb */}
    <path d="M 84 55 L 66 55" />
    <circle cx="60" cy="55" r="7" fill="currentColor" stroke="none" />
    <circle cx="84" cy="55" r="4.5" fill="currentColor" stroke="none" />
  </svg>
);

export default function Navbar() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved === 'light' ? 'light' : 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header 
      id="app-header"
      className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-border-sub bg-primary-bg/85 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[52px] flex items-center justify-between">
        
        {/* Left Side: Logo Branding */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-accent-1/10 flex items-center justify-center border border-accent-1/25 transition-micro hover:scale-105">
            <AutoVerseLogo className="w-4.5 h-4.5 text-accent-1" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-sm font-black tracking-tight text-text-bright leading-none">
              AutoVerse <span className="text-accent-1">AI</span>
            </span>
            <span className="font-sans text-[9px] text-text-muted font-medium tracking-normal mt-0.5">
              AI Workflow Platform
            </span>
          </div>
        </div>

        {/* Center: Premium Menu Links with fluid, single-line Dropdowns */}
        <nav className="hidden md:flex items-center space-x-1.5 h-full">
          
          {/* 1. Product Dropdown (Simple Single-Line List) */}
          <div className="relative group/menu py-4">
            <button className="flex items-center space-x-1 px-3 py-1 font-sans text-xs font-semibold text-text-muted hover:text-text-bright tracking-normal transition-colors cursor-pointer">
              <span>Product</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover/menu:rotate-180 transition-transform duration-200" />
            </button>
            
            <div className="absolute top-[40px] left-1/2 -translate-x-1/2 w-[240px] pt-2 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible scale-95 group-hover/menu:scale-100 pointer-events-none group-hover/menu:pointer-events-auto transition-all duration-200 origin-top z-50">
              <div className="bg-oceanic/95 border border-border-sub/80 backdrop-blur-xl rounded-2xl shadow-2xl p-2.5 space-y-0.5">
                <a href="#live-canvas" className="flex items-center space-x-3 px-3 py-2 rounded-xl hover:bg-secondary-bg/40 transition-colors group/item">
                  <Workflow className="w-4 h-4 text-accent-1 transition-transform group-hover/item:scale-110" />
                  <span className="font-sans text-xs font-semibold text-text-muted group-hover/item:text-text-bright transition-colors">Product Overview</span>
                </a>
                <a href="#live-canvas" className="flex items-center space-x-3 px-3 py-2 rounded-xl hover:bg-secondary-bg/40 transition-colors group/item">
                  <Layers className="w-4 h-4 text-accent-2 transition-transform group-hover/item:scale-110" />
                  <span className="font-sans text-xs font-semibold text-text-muted group-hover/item:text-text-bright transition-colors">Integrations</span>
                </a>
                <a href="#bento-grid" className="flex items-center space-x-3 px-3 py-2 rounded-xl hover:bg-secondary-bg/40 transition-colors group/item">
                  <FileSpreadsheet className="w-4 h-4 text-emerald-400 transition-transform group-hover/item:scale-110" />
                  <span className="font-sans text-xs font-semibold text-text-muted group-hover/item:text-text-bright transition-colors">Workflow Templates</span>
                </a>
                <a href="#hero-section" className="flex items-center space-x-3 px-3 py-2 rounded-xl hover:bg-secondary-bg/40 transition-colors group/item">
                  <Bot className="w-4 h-4 text-accent-1 transition-transform group-hover/item:scale-110" />
                  <span className="font-sans text-xs font-semibold text-text-muted group-hover/item:text-text-bright transition-colors">AI Agent Builder</span>
                </a>
              </div>
            </div>
          </div>

          {/* 2. Docs Dropdown (Simple Single-Line List) */}
          <div className="relative group/menu py-4">
            <button className="flex items-center space-x-1 px-3 py-1 font-sans text-xs font-semibold text-text-muted hover:text-text-bright tracking-normal transition-colors cursor-pointer">
              <span>Docs</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover/menu:rotate-180 transition-transform duration-200" />
            </button>
            
            <div className="absolute top-[40px] left-1/2 -translate-x-1/2 w-[240px] pt-2 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible scale-95 group-hover/menu:scale-100 pointer-events-none group-hover/menu:pointer-events-auto transition-all duration-200 origin-top z-50">
              <div className="bg-oceanic/95 border border-border-sub/80 backdrop-blur-xl rounded-2xl shadow-2xl p-2.5 space-y-0.5">
                <a href="#app-footer" className="flex items-center space-x-3 px-3 py-2 rounded-xl hover:bg-secondary-bg/40 transition-colors group/item">
                  <Terminal className="w-4 h-4 text-emerald-400 transition-transform group-hover/item:scale-110" />
                  <span className="font-sans text-xs font-semibold text-text-muted group-hover/item:text-text-bright transition-colors">Self-Host AutoVerse</span>
                </a>
                <a href="#app-footer" className="flex items-center space-x-3 px-3 py-2 rounded-xl hover:bg-secondary-bg/40 transition-colors group/item">
                  <FileText className="w-4 h-4 text-accent-1 transition-transform group-hover/item:scale-110" />
                  <span className="font-sans text-xs font-semibold text-text-muted group-hover/item:text-text-bright transition-colors">Developer Reference</span>
                </a>
                <a href="#app-footer" className="flex items-center space-x-3 px-3 py-2 rounded-xl hover:bg-secondary-bg/40 transition-colors group/item">
                  <BookOpen className="w-4 h-4 text-accent-2 transition-transform group-hover/item:scale-110" />
                  <span className="font-sans text-xs font-semibold text-text-muted group-hover/item:text-text-bright transition-colors">Step-by-Step Guides</span>
                </a>
              </div>
            </div>
          </div>

          {/* 3. Community Dropdown (Simple Single-Line List) */}
          <div className="relative group/menu py-4">
            <button className="flex items-center space-x-1 px-3 py-1 font-sans text-xs font-semibold text-text-muted hover:text-text-bright tracking-normal transition-colors cursor-pointer">
              <span>Community</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover/menu:rotate-180 transition-transform duration-200" />
            </button>
            
            <div className="absolute top-[40px] left-1/2 -translate-x-1/2 w-[240px] pt-2 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible scale-95 group-hover/menu:scale-100 pointer-events-none group-hover/menu:pointer-events-auto transition-all duration-200 origin-top z-50">
              <div className="bg-oceanic/95 border border-border-sub/80 backdrop-blur-xl rounded-2xl shadow-2xl p-2.5 space-y-0.5">
                <a href="#app-footer" className="flex items-center space-x-3 px-3 py-2 rounded-xl hover:bg-secondary-bg/40 transition-colors group/item">
                  <MessageSquare className="w-4 h-4 text-accent-1 transition-transform group-hover/item:scale-110" />
                  <span className="font-sans text-xs font-semibold text-text-muted group-hover/item:text-text-bright transition-colors">Builder Forum</span>
                </a>
                <a href="#app-footer" className="flex items-center space-x-3 px-3 py-2 rounded-xl hover:bg-secondary-bg/40 transition-colors group/item">
                  <Compass className="w-4 h-4 text-accent-2 transition-transform group-hover/item:scale-110" />
                  <span className="font-sans text-xs font-semibold text-text-muted group-hover/item:text-text-bright transition-colors">The AutoVerse Blog</span>
                </a>
                <a href="#github" className="flex items-center space-x-3 px-3 py-2 rounded-xl hover:bg-secondary-bg/40 transition-colors group/item">
                  <HelpCircle className="w-4 h-4 text-emerald-400 transition-transform group-hover/item:scale-110" />
                  <span className="font-sans text-xs font-semibold text-text-muted group-hover/item:text-text-bright transition-colors">Contribute Connectors</span>
                </a>
              </div>
            </div>
          </div>

          {/* 4. Pricing Simple Link */}
          <a 
            href="#pricing" 
            className="group relative px-3 py-1 font-sans text-xs font-semibold text-text-muted hover:text-text-bright tracking-normal transition-colors"
          >
            <span>Pricing</span>
            <span className="absolute bottom-0 left-3 w-0 h-[1.5px] bg-accent-1 transition-all duration-300 group-hover:w-[calc(100%-24px)] group-hover:shadow-[0_0_6px_#FFC801]" />
          </a>

        </nav>

        {/* Right Side: Theme, Trust (Github), & Launch Workspace CTA */}
        <div className="flex items-center space-x-4">
          
          {/* GitHub Stars Trust Indicator */}
          <a 
            href="#github"
            aria-label="Star AutoVerse AI on GitHub"
            className="hidden sm:flex items-center space-x-1.5 text-xs text-text-muted hover:text-text-bright font-sans font-medium transition-colors"
          >
            <Github className="w-4 h-4 text-text-muted group-hover:text-text-bright" />
            <span className="border border-border-sub/40 bg-secondary-bg/20 px-1.5 py-0.5 rounded text-[10px]">
              ★ 4.8k
            </span>
          </a>

          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            id="theme-toggle-btn"
            aria-label={`Toggle theme, current is ${theme}`}
            className="w-8 h-8 rounded-lg border border-border-sub/60 flex items-center justify-center hover:bg-secondary-bg/20 hover:border-accent-1/30 transition-micro cursor-pointer text-text-bright"
          >
            {theme === 'dark' ? (
              <Sun className="w-3.5 h-3.5 text-accent-1" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-accent-1" />
            )}
          </button>

          {/* Access Panel Launch Workspace CTA */}
          <a
            href="#pricing"
            id="nav-cta-btn"
            className="px-3.5 py-1.5 rounded-lg bg-accent-1 text-oceanic font-sans text-xs font-extrabold transition-micro hover:bg-accent-2 hover:scale-[1.03] active:scale-[0.97] glow-accent hover:shadow-[0_0_12px_rgba(255,200,1,0.35)]"
          >
            Launch Workspace
          </a>
        </div>
      </div>
    </header>
  );
}
