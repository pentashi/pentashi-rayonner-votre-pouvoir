import React, { useEffect } from 'react';
import { pricingPlans } from '../utils/constants';
import { Check } from 'lucide-react';

const PricingSection: React.FC = () => {
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
    <section id="offres" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="fade-in section-title">Choisissez l'expérience qui vous correspond</h2>
          <p className="fade-in delay-100 section-subtitle max-w-2xl mx-auto">
            Investissez dans votre transformation avec l'offre adaptée à votre situation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={plan.id}
              className={`fade-in delay-${index * 100} relative rounded-2xl overflow-hidden ${
                plan.recommended 
                  ? 'border-2 border-amber-500 shadow-xl transform md:-translate-y-4' 
                  : 'border border-slate-200 shadow-lg'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-amber-500 text-white font-semibold py-1 px-4 text-sm transform translate-x-8 translate-y-1 rotate-45">
                  Recommandé
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-heading font-bold text-slate-800 mb-2">
                  {plan.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-4xl font-heading font-bold text-primary-800">
                    {plan.price}
                  </span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 mt-1 text-green-500">
                        <Check size={16} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div>
                  <a 
                    href="#inscription" 
                    className={`w-full ${
                      plan.recommended ? 'btn-primary' : 'btn-secondary'
                    }`}
                  >
                    Je choisis cette offre
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;