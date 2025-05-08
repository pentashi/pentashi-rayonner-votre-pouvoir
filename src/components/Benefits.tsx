import React, { useEffect } from 'react';
import { benefits } from '../utils/constants';

const Benefits: React.FC = () => {
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
    <section id="benefices" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="fade-in section-title">À la fin du programme, vous aurez…</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.id}
              className={`fade-in delay-${index * 100} card border-t-4 border-amber-500`}
            >
              <h3 className="text-xl font-heading font-bold text-slate-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="fade-in mt-16 text-center">
          <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
            Imaginez comment votre vie professionnelle et personnelle se transformera
            quand ces nouvelles capacités seront ancrées en vous.
          </p>
          
          <a href="#inscription" className="btn-primary">
            Je veux développer ces capacités maintenant
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;