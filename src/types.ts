/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type CurrencyType = 'USD' | 'EUR' | 'INR';
export type BillingCycleType = 'monthly' | 'annual';

export interface CurrencyConfig {
  symbol: string;
  name: string;
}

export const CURRENCIES: Record<CurrencyType, CurrencyConfig> = {
  USD: { symbol: '$', name: 'USD' },
  EUR: { symbol: '€', name: 'EUR' },
  INR: { symbol: '₹', name: 'INR' },
};

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  baseMonthlyPrice: Record<CurrencyType, number>;
  features: string[];
  ctaText: string;
  popular?: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'free',
    name: 'Free Plan',
    tagline: 'Try out simple automations at zero cost.',
    baseMonthlyPrice: {
      USD: 0,
      EUR: 0,
      INR: 0,
    },
    features: [
      '5 active AI workflows',
      '1,000 automated steps per month',
      'Checks for updates every 15 minutes',
      'Basic templates and apps',
      'For 1 person',
    ],
    ctaText: 'Start for Free',
  },
  {
    id: 'starter',
    name: 'Starter Plan',
    tagline: 'Perfect for growing teams getting started with custom apps.',
    baseMonthlyPrice: {
      USD: 25,
      EUR: 22,
      INR: 1999,
    },
    features: [
      '20 active AI workflows',
      '15,000 automated steps per month',
      'Check for updates in under 60 seconds',
      'Connect your own custom apps',
      'Automatically fix small data errors',
      'For up to 3 team members',
      'Fast email support',
    ],
    ctaText: 'Get Started',
    popular: true,
  },
  {
    id: 'professional',
    name: 'Pro Plan',
    tagline: 'For high-volume companies with custom needs.',
    baseMonthlyPrice: {
      USD: 59,
      EUR: 55,
      INR: 4799,
    },
    features: [
      'Unlimited active AI workflows',
      '150,000 automated steps per month',
      'Instant real-time updates',
      'AI Document Reader & Scraper',
      'Smart AI classification',
      'Unlimited team members',
      'Super secure isolated servers',
      'Priority Slack & phone support',
    ],
    ctaText: 'Contact Sales',
  },
];

export interface BentoItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  // Bento grid grid-span values for styling
  gridSpanClass: string;
  // Interactive nodes simulated in cell
  nodes: Array<{ id: string; label: string; status: 'active' | 'idle' | 'warning' }>;
}

export const BENTO_ITEMS: BentoItem[] = [
  {
    id: 0,
    badge: 'EASY TO USE',
    title: 'Simple Visual Builder',
    subtitle: 'Drag, drop, and connect',
    description: 'Easily build multi-step workflows by linking apps with arrows. Hover to inspect, drag nodes around, and watch your automations run live in real time.',
    gridSpanClass: 'lg:col-span-2 lg:row-span-1',
    nodes: [
      { id: 'trigger', label: 'Gmail Trigger', status: 'active' },
      { id: 'ai-node', label: 'Gemini AI Assistant', status: 'active' },
      { id: 'destination', label: 'Notion Sync', status: 'idle' },
    ],
  },
  {
    id: 1,
    badge: 'RUNS AUTOMATICALLY',
    title: 'Always Working',
    subtitle: 'Built-in recovery',
    description: 'Apps and APIs change, but your workflows wont break. AutoVerse automatically adjusts to small API format changes, translating data so your business keeps running without interruptions.',
    gridSpanClass: 'lg:col-span-1 lg:row-span-2',
    nodes: [
      { id: 'source', label: 'Webhook Source', status: 'active' },
      { id: 'healing', label: 'Self-Healing AI', status: 'warning' },
      { id: 'dest-api', label: 'Stripe Payment', status: 'active' },
    ],
  },
  {
    id: 2,
    badge: 'AI READS DOCUMENTS',
    title: 'AI Document Reader',
    subtitle: 'Read files and emails',
    description: 'Convert messy invoices, PDFs, and emails into structured lists. The AI reads any file, extracts important details like dates and amounts, and saves them automatically.',
    gridSpanClass: 'lg:col-span-1 lg:row-span-1',
    nodes: [
      { id: 'crawl', label: 'PDF Scraper', status: 'active' },
      { id: 'extract', label: 'AI Data Parser', status: 'active' },
    ],
  },
  {
    id: 3,
    badge: 'PROTECT YOUR DATA',
    title: 'Secure Workspace',
    subtitle: 'Private and secure',
    description: 'Your data is encrypted and kept entirely private. We use industry-standard security so your customer logs, passwords, and records are safely isolated and protected.',
    gridSpanClass: 'lg:col-span-1 lg:row-span-1',
    nodes: [
      { id: 'keys', label: 'Safe Vault', status: 'active' },
      { id: 'sandbox', label: 'Private Sandbox', status: 'active' },
    ],
  }
];
