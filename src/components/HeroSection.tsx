import React, { useEffect } from 'react';

const HeroSection: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, {
      threshold: 0.1
    });

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      fadeElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-primary-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-800/90 to-primary-900/80"></div>
      
      <div className="container-custom relative z-10 py-20 md:py-0">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="px-4 sm:px-0">
            <h1 className="fade-in text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6 leading-tight">
              CONFIANCE ABSOLUE
            </h1>
            <h2 className="fade-in delay-100 text-xl sm:text-2xl md:text-3xl font-heading mb-4 sm:mb-6 text-amber-300">
              Reprenez le pouvoir intérieur. Rayonnez.
            </h2>
            <p className="fade-in delay-200 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-slate-200">
              La méthode pour transformer vos doutes en puissance.
            </p>
            <p className="fade-in delay-300 mb-8 sm:mb-12 text-sm sm:text-base text-slate-300 max-w-lg">
              Une expérience transformationnelle conçue pour cadres, professionnels, étudiants et entrepreneurs ambitieux. 
              3 jours de formation + 21 jours d'intégration pour créer une confiance stable, durable, transférable.
            </p>
            <a 
              href="#inscription" 
              className="fade-in delay-400 btn-primary text-base sm:text-lg md:text-xl py-3 sm:py-4 px-6 sm:px-10"
            >
              Je rejoins la masterclass maintenant
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="fade-in delay-500 relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg blur opacity-50"></div>
              <img 
  src="https://i.imgur.com/xRd0N5M.jpeg" 
  alt="Confiance Absolue Masterclass" 
  className="relative rounded-lg shadow-2xl w-full object-cover object-top aspect-[4/3]"
/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;