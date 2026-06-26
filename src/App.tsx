/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import FeatureCanvas from './components/FeatureCanvas';
import BentoAccordion from './components/BentoAccordion';
import PricingEngine from './components/PricingEngine';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-primary-bg text-text-bright selection:bg-accent-1 selection:text-oceanic transition-colors duration-300">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Structural Layout */}
      <main className="flex-1">
        {/* Hero Section with Three.js AutoVerse background */}
        <Hero />

        {/* Animated Moving Brand Logos trust section */}
        <TrustedBy />

        {/* Live Feature Execution Canvas */}
        <FeatureCanvas />

        {/* Bento Grid with responsive mobile Accordion context-persistence */}
        <BentoAccordion />

        {/* Multi-currency performance-isolated pricing engine matrix */}
        <PricingEngine />

        {/* Premium cybernetic FAQ section with active-selection glow and bottom glass CTA */}
        <FaqSection />
      </main>

      {/* Large aesthetic brand footer */}
      <Footer />
    </div>
  );
}
