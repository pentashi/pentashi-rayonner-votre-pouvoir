import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import EmotionalHook from './components/EmotionalHook';
import PromiseSection from './components/PromiseSection';
import ProgramBreakdown from './components/ProgramBreakdown';
import TargetAudience from './components/TargetAudience';
import Benefits from './components/Benefits';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import BonusSection from './components/BonusSection';
import FaqSection from './components/FaqSection';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      <HeroSection />
      <EmotionalHook />
      <PromiseSection />
      <ProgramBreakdown />
      <TargetAudience />
      <Benefits />
      <TestimonialsSection />
      <PricingSection />
      <BonusSection />
      <FaqSection />
      <FinalCta />
      <Footer />
    </div>
  );
}

export default App;