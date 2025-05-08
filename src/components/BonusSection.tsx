import React, { useEffect } from 'react';
import { bonuses } from '../utils/constants';
import { Gift } from 'lucide-react';

const BonusSection: React.FC = () => {
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
    <section className="section-padding bg-amber-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block fade-in mb-4">
            <div className="bg-amber-100 p-3 rounded-full">
              <Gift className="w-8 h-8 text-amber-600" />
            </div>
          </div>
          <h2 className="fade-in section-title">Bonus pour les inscriptions rapides</h2>
          <p className="fade-in delay-100 section-subtitle max-w-2xl mx-auto">
            Décidez maintenant et recevez ces cadeaux exclusifs pour accélérer votre transformation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => (
            <div 
              key={bonus.id}
              className={`fade-in delay-${index * 100} bg-white rounded-xl shadow-md p-6 border-l-4 border-amber-500`}
            >
              <h3 className="text-xl font-heading font-bold text-slate-800 mb-3">
                {bonus.title}
              </h3>
              <p className="text-slate-600">
                {bonus.description}
              </p>
            </div>
          ))}
        </div>

        <div className="fade-in mt-16 text-center">
          <p className="text-amber-800 font-medium mb-2">
            Offre limitée dans le temps
          </p>
          <p className="text-xl text-slate-700 mb-8">
            Ces bonus d'une valeur de 50 000 FCFA sont offerts uniquement aux 20 premiers inscrits
          </p>
          
          <a href="#inscription" className="btn-primary">
            Je veux bénéficier de ces bonus
          </a>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;