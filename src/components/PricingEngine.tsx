import { useEffect, useRef, useState } from 'react';
import { PRICING_TIERS, CURRENCIES, CurrencyType, BillingCycleType } from '../types';
import { Check, Cpu, Sparkles, HelpCircle, Flame, Zap } from 'lucide-react';

const PRICING_MATRIX: Record<string, Record<CurrencyType, { symbol: string; monthly: number }>> = {
  free: {
    USD: { symbol: '$', monthly: 0 },
    EUR: { symbol: '€', monthly: 0 },
    INR: { symbol: '₹', monthly: 0 },
  },
  starter: {
    USD: { symbol: '$', monthly: 25 },
    EUR: { symbol: '€', monthly: 22 },
    INR: { symbol: '₹', monthly: 1999 },
  },
  professional: {
    USD: { symbol: '$', monthly: 59 },
    EUR: { symbol: '€', monthly: 55 },
    INR: { symbol: '₹', monthly: 4799 },
  }
};

export default function PricingEngine() {
  // Direct DOM refs to avoid React state triggers
  const currencySelectRef = useRef<HTMLSelectElement>(null);
  const billingCheckboxRef = useRef<HTMLInputElement>(null);
  
  // Elements holding dynamic values
  const priceRefs = useRef<Record<string, HTMLSpanElement | null>>({});
  const symbolRefs = useRef<Record<string, HTMLSpanElement | null>>({});
  const suffixRefs = useRef<Record<string, HTMLSpanElement | null>>({});
  const discountIndicatorRef = useRef<HTMLSpanElement>(null);

  // Render Counter to visually prove Performance Isolation (0 re-renders on select/toggle)
  const renderCountRef = useRef<number>(0);
  renderCountRef.current += 1;

  // Run initial calculations on mount
  useEffect(() => {
    updatePricesDirectly();

    // Hook native event listeners directly to bypass React virtual-DOM trigger path
    const currencySelect = currencySelectRef.current;
    const billingCheckbox = billingCheckboxRef.current;

    if (currencySelect) {
      currencySelect.addEventListener('change', updatePricesDirectly, { passive: true });
    }
    if (billingCheckbox) {
      billingCheckbox.addEventListener('change', updatePricesDirectly, { passive: true });
    }

    return () => {
      if (currencySelect) {
        currencySelect.removeEventListener('change', updatePricesDirectly);
      }
      if (billingCheckbox) {
        billingCheckbox.removeEventListener('change', updatePricesDirectly);
      }
    };
  }, []);

  const updatePricesDirectly = () => {
    const currency = (currencySelectRef.current?.value || 'USD') as CurrencyType;
    const isAnnual = billingCheckboxRef.current?.checked || false;

    // Direct DOM styling for the annual discount indicator
    if (discountIndicatorRef.current) {
      if (isAnnual) {
        discountIndicatorRef.current.classList.add('bg-accent-1/25', 'text-accent-1', 'border-accent-1/40');
        discountIndicatorRef.current.classList.remove('text-text-muted/65', 'border-border-sub/10');
      } else {
        discountIndicatorRef.current.classList.remove('bg-accent-1/25', 'text-accent-1', 'border-accent-1/40');
        discountIndicatorRef.current.classList.add('text-text-muted/65', 'border-border-sub/10');
      }
    }

    // Process each tier calculations at runtime
    Object.keys(PRICING_MATRIX).forEach((tierId) => {
      const tierMatrix = PRICING_MATRIX[tierId][currency];
      const baseMonthly = tierMatrix.monthly;
      const symbol = tierMatrix.symbol;

      let calculatedValue = '';
      if (tierId === 'free') {
        calculatedValue = '0';
      } else {
        let value = baseMonthly;
        if (isAnnual) {
          // Flat 20% discount multiplier for annual cycles
          value = baseMonthly * 0.8;
        }

        if (currency === 'INR') {
          calculatedValue = Math.round(value).toLocaleString('en-IN');
        } else {
          calculatedValue = value.toFixed(1).replace(/\.0$/, '');
        }
      }

      // ⚡ Direct DOM writes -> Zero Reflow, Zero component re-render
      const priceSpan = priceRefs.current[tierId];
      if (priceSpan) {
        priceSpan.textContent = calculatedValue;
      }

      const symbolSpan = symbolRefs.current[tierId];
      if (symbolSpan) {
        symbolSpan.textContent = symbol;
      }

      const suffixSpan = suffixRefs.current[tierId];
      if (suffixSpan) {
        suffixSpan.textContent = isAnnual ? '/month, billed annually' : '/month';
      }
    });
  };

  return (
    <section 
      id="pricing"
      className="py-24 bg-primary-bg/95 border-b border-border-sub/10 relative overflow-hidden transition-colors duration-300"
    >
      {/* Decorative floating cards and flow items on the sides (visible on desktop) */}
      <div className="absolute top-1/4 left-4 lg:left-12 w-64 hidden xl:block pointer-events-none select-none z-0 animate-float-slow">
        <div className="p-4 rounded-xl border border-accent-1/20 bg-secondary-bg/30 backdrop-blur-md shadow-lg flex items-center space-x-3">
          <div className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono text-xs font-bold">In</div>
          <div className="flex-1 min-w-0">
            <span className="text-[10px] uppercase font-mono tracking-wider text-accent-1 block font-bold">Trigger</span>
            <span className="text-xs text-text-bright font-sans block truncate font-medium">New Stripe Customer</span>
          </div>
        </div>
        <div className="w-0.5 h-8 bg-gradient-to-b from-accent-1/40 to-transparent mx-auto my-2" />
        <div className="p-4 rounded-xl border border-accent-2/20 bg-secondary-bg/30 backdrop-blur-md shadow-lg flex items-center space-x-3 opacity-90 scale-95 translate-x-2">
          <div className="w-8 h-8 rounded bg-accent-1/10 border border-accent-1/30 flex items-center justify-center text-accent-1 font-mono text-xs font-bold">AI</div>
          <div className="flex-1 min-w-0">
            <span className="text-[10px] uppercase font-mono tracking-wider text-accent-2 block font-bold">Action</span>
            <span className="text-xs text-text-bright font-sans block truncate font-medium">AI Draft Welcome Email</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-1/4 right-4 lg:right-12 w-64 hidden xl:block pointer-events-none select-none z-0 animate-float-medium">
        <div className="p-4 rounded-xl border border-accent-2/20 bg-secondary-bg/30 backdrop-blur-md shadow-lg flex items-center space-x-3">
          <div className="w-8 h-8 rounded bg-[#172836] border border-border-sub flex items-center justify-center text-accent-2 font-mono text-xs font-bold">Doc</div>
          <div className="flex-1 min-w-0">
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#94A3B8] block font-bold">Incoming PDF</span>
            <span className="text-xs text-text-bright font-sans block truncate font-medium">Read Invoice Details</span>
          </div>
        </div>
        <div className="w-0.5 h-8 bg-gradient-to-b from-accent-2/40 to-transparent mx-auto my-2" />
        <div className="p-4 rounded-xl border border-accent-1/20 bg-secondary-bg/30 backdrop-blur-md shadow-lg flex items-center space-x-3 opacity-95 scale-95 -translate-x-2">
          <div className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono text-xs font-bold">✓</div>
          <div className="flex-1 min-w-0">
            <span className="text-[10px] uppercase font-mono tracking-wider text-accent-1 block font-bold">Destination</span>
            <span className="text-xs text-text-bright font-sans block truncate font-medium">Update Google Sheet</span>
          </div>
        </div>
      </div>

      {/* Background radial soft light glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-1/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-accent-1/25 bg-secondary-bg/25 font-mono text-[10px] text-accent-1 font-bold uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" />
            <span>Simple, Fair Pricing</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-text-bright tracking-tight">
            Plans Built to Scale with You
          </h2>
          <p className="font-sans text-base sm:text-lg text-text-muted">
            Start for free and upgrade as you grow. No hidden fees or complicated contracts.
          </p>
        </div>

        {/* Pricing Selection Toolbar */}
        <div className="max-w-xl mx-auto bg-secondary-bg/15 border border-border-sub/80 rounded-2xl p-5 mb-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Billing Cycle Toggle */}
          <div className="flex items-center space-x-3 select-none">
            <span className="font-mono text-xs text-text-muted">Monthly</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                id="billing-cycle-checkbox"
                ref={billingCheckboxRef} 
                className="sr-only peer" 
                defaultChecked
              />
              <div className="w-11 h-6 bg-primary-bg rounded-full border border-border-sub peer peer-focus:ring-0 peer-checked:after:translate-x-5 peer-checked:after:border-accent-1 after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-accent-1 after:border-accent-1 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-secondary-bg" />
            </label>
            <span className="font-mono text-xs text-text-bright flex items-center space-x-1.5">
              <span>Annual Cycle</span>
              <span 
                ref={discountIndicatorRef}
                className="text-[9px] px-1.5 py-0.5 rounded border border-border-sub font-bold uppercase transition-all duration-300"
              >
                Save 20%
              </span>
            </span>
          </div>

          {/* Currency Dropdown Select */}
          <div className="flex items-center space-x-2.5">
            <span className="font-mono text-xs text-text-muted">Currency:</span>
            <select
              id="currency-select"
              ref={currencySelectRef}
              className="bg-primary-bg border border-border-sub text-text-bright text-xs rounded-lg focus:ring-accent-1 focus:border-accent-1 p-2 font-mono outline-none cursor-pointer"
              defaultValue="USD"
            >
              {Object.entries(CURRENCIES).map(([code, config]) => (
                <option key={code} value={code} className="bg-primary-bg text-text-bright">
                  {code} ({config.symbol})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 3-Tier Pricing Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => {
            return (
              <div
                key={tier.id}
                id={`pricing-card-${tier.id}`}
                className={`rounded-2xl border p-8 flex flex-col justify-between relative transition-all duration-300 ease-out cursor-pointer hover:-translate-y-2.5 ${
                  tier.popular
                    ? 'border-accent-1 bg-secondary-bg/25 shadow-2xl scale-[1.03] z-10 hover:scale-[1.10] hover:shadow-[0_0_40px_rgba(255,200,1,0.22)]'
                    : 'border-border-sub bg-nocturnal/30 hover:scale-[1.08] hover:border-accent-1 hover:shadow-[0_0_35px_rgba(255,200,1,0.15)] hover:z-20'
                }`}
              >
                {/* Popular Tier Highlights */}
                {tier.popular && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-accent-1 text-oceanic font-mono text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center space-x-1">
                    <Flame className="w-3 h-3" />
                    <span>Popular choice</span>
                  </div>
                )}

                <div>
                  <h3 className="font-sans font-extrabold text-xl text-text-bright mb-1">
                    {tier.name}
                  </h3>
                  <p className="font-sans text-xs text-text-muted leading-relaxed mb-6">
                    {tier.tagline}
                  </p>

                  {/* Pricing Strings (Ref targeted) */}
                  <div className="flex items-baseline space-x-1 mb-6 border-b border-border-sub/10 pb-5">
                    <span 
                      ref={(el) => { symbolRefs.current[tier.id] = el; }}
                      className="font-mono text-2xl font-bold text-accent-1"
                    >
                      $
                    </span>
                    <span 
                      ref={(el) => { priceRefs.current[tier.id] = el; }}
                      className="font-mono text-5xl font-extrabold text-text-bright tracking-tight"
                    >
                      --
                    </span>
                    <span 
                      ref={(el) => { suffixRefs.current[tier.id] = el; }}
                      className="font-mono text-[10px] text-text-muted uppercase ml-2"
                    >
                      /month
                    </span>
                  </div>

                  {/* Feature Lists */}
                  <ul className="space-y-3.5 mb-8">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-3 text-xs text-text-muted leading-relaxed">
                        <Check className="w-4 h-4 text-accent-1 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Submit Workspace session */}
                <button
                  id={`pricing-cta-${tier.id}`}
                  className={`w-full py-3.5 px-4 rounded-xl font-mono text-xs font-bold transition-micro cursor-pointer flex items-center justify-center space-x-2 ${
                    tier.popular
                      ? 'bg-accent-1 text-oceanic hover:bg-accent-2 hover:scale-[1.01]'
                      : 'border border-border-sub bg-secondary-bg/20 text-text-bright hover:border-accent-1/55 hover:bg-secondary-bg/45'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
