import { Youtube, Linkedin, Heart } from 'lucide-react';
import { AutoVerseLogo } from './Navbar';

export default function Footer() {
  return (
    <footer 
      id="app-footer"
      className="bg-oceanic border-t border-border-sub/10 pt-16 pb-12 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footprint Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          
          {/* Column 1: Compare */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-xs sm:text-[13px] text-text-bright tracking-wider uppercase">
              Compare
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#compare" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  n8n vs AutoVerse
                </a>
              </li>
              <li>
                <a href="#compare" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  Make vs AutoVerse
                </a>
              </li>
              <li>
                <a href="#compare" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  Zapier vs AutoVerse
                </a>
              </li>
              <li>
                <a href="#compare" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  Botpress vs AutoVerse
                </a>
              </li>
              <li>
                <a href="#compare" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  LangChain vs AutoVerse
                </a>
              </li>
              <li>
                <a href="#compare" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  CrewAI vs AutoVerse
                </a>
              </li>
              <li>
                <a href="#compare" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  Retool vs AutoVerse
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Use Cases */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-xs sm:text-[13px] text-text-bright tracking-wider uppercase">
              Use Cases
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#use-cases" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  Product Management
                </a>
              </li>
              <li>
                <a href="#use-cases" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#use-cases" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  Sales
                </a>
              </li>
              <li>
                <a href="#use-cases" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  Customer Success
                </a>
              </li>
              <li>
                <a href="#use-cases" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  Human Resources
                </a>
              </li>
              <li>
                <a href="#use-cases" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  Legal
                </a>
              </li>
              <li>
                <a href="#use-cases" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  Lead Generation
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Capabilities */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-xs sm:text-[13px] text-text-bright tracking-wider uppercase">
              Capabilities
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#capabilities" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  Image Generation
                </a>
              </li>
              <li>
                <a href="#capabilities" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  Prompt Engineering
                </a>
              </li>
              <li>
                <a href="#capabilities" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  RAG
                </a>
              </li>
              <li>
                <a href="#capabilities" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  Human-in-the-Loop
                </a>
              </li>
              <li>
                <a href="#capabilities" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  MCP Servers
                </a>
              </li>
              <li>
                <a href="#capabilities" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  Multi-Step Reasoning
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: MindStudio / AutoVerse */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-xs sm:text-[13px] text-text-bright tracking-wider uppercase">
              AutoVerse
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#autoverse" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  About
                </a>
              </li>
              <li>
                <a href="#autoverse" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#autoverse" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  Blog
                </a>
              </li>
              <li>
                <a href="#autoverse" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  Newsroom
                </a>
              </li>
              <li>
                <a href="#autoverse" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  Contact
                </a>
              </li>
              <li>
                <a href="#autoverse" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  Trust Center
                </a>
              </li>
              <li>
                <a href="#autoverse" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  Community
                </a>
              </li>
              <li>
                <a href="#autoverse" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Programs */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-xs sm:text-[13px] text-text-bright tracking-wider uppercase">
              Programs
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#programs" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  Enterprise
                </a>
              </li>
              <li>
                <a href="#programs" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  Developers
                </a>
              </li>
              <li>
                <a href="#programs" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  Partners
                </a>
              </li>
              <li>
                <a href="#programs" className="font-sans text-xs text-text-muted hover:text-accent-1 transition-micro">
                  Referral Program
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer bottom metadata info bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border-sub/10 pt-8 text-xs font-sans text-text-muted">
          
          {/* Bottom Left: Brand + Social Icons */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2.5">
              <AutoVerseLogo className="w-5 h-5 text-accent-1" />
              <span className="font-sans font-bold text-base text-text-bright tracking-wider">
                AutoVerse<span className="text-accent-1">Studio</span>
              </span>
            </div>
            <div className="flex items-center space-x-2.5 pl-2 border-l border-border-sub/10">
              <a 
                href="#youtube" 
                aria-label="AutoVerse Studio Youtube Channel"
                className="w-8 h-8 rounded-full bg-secondary-bg/25 border border-border-sub/5 flex items-center justify-center text-text-muted hover:text-accent-1 hover:border-accent-1/25 transition-micro"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href="#linkedin" 
                aria-label="AutoVerse Studio LinkedIn"
                className="w-8 h-8 rounded-full bg-secondary-bg/25 border border-border-sub/5 flex items-center justify-center text-text-muted hover:text-accent-1 hover:border-accent-1/25 transition-micro"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bottom Right: Policies and Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs text-text-muted/75">
            <div className="flex items-center space-x-4">
              <a href="#terms" className="hover:text-accent-1 transition-micro">Terms of Use</a>
              <a href="#privacy" className="hover:text-accent-1 transition-micro">Privacy Policy</a>
              <a href="#dpa" className="hover:text-accent-1 transition-micro">DPA</a>
            </div>
            <div>
              <span>&copy; {new Date().getFullYear()} AutoVerse AI Labs Inc. All rights reserved.</span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
