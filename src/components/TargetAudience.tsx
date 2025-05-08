import React, { useEffect } from 'react';
import { targetAudiences } from '../utils/constants';

const TargetAudience: React.FC = () => {
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
    <section id="pour-qui" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="fade-in section-title">Ce programme est fait pour vous si...</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {targetAudiences.map((audience, index) => (
            <div 
              key={audience.id}
              className={`fade-in delay-${index * 100} flex space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-700 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {audience.id}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-slate-800 mb-2">
                  {audience.title}
                </h3>
                <p className="text-slate-600">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-in mt-16 max-w-3xl mx-auto text-center p-8 bg-gradient-to-br from-primary-800 to-primary-900 text-white rounded-xl shadow-xl">
          <h3 className="text-2xl font-heading font-bold mb-6">
            Le point commun : vous sentez un écart entre votre potentiel et sa réalisation
          </h3>
          <p className="text-lg mb-6">
            Vous avez les compétences, l'expertise, et la vision. Mais quelque chose d'invisible freine votre progression. 
            Cette tension intérieure peut être transformée en puissance personnelle.
          </p>
          <a href="#inscription" className="btn-primary bg-amber-500 hover:bg-amber-600">
            Je suis prêt à transformer cette tension
          </a>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;