import React, { useEffect, useState } from 'react';
import { faqItems } from '../utils/constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

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
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="fade-in section-title">Questions fréquentes</h2>
          <p className="fade-in delay-100 section-subtitle max-w-2xl mx-auto">
            Tout ce que vous devez savoir avant de commencer votre transformation
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={item.id}
              className={`fade-in delay-${index * 100} mb-4 border border-slate-200 rounded-lg overflow-hidden`}
            >
              <button
                className="w-full flex justify-between items-center p-6 bg-white text-left text-slate-800 font-medium"
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItem === item.id}
              >
                <span className="font-heading text-lg">{item.question}</span>
                {openItem === item.id ? (
                  <ChevronUp className="flex-shrink-0 ml-2 text-amber-600" />
                ) : (
                  <ChevronDown className="flex-shrink-0 ml-2 text-slate-500" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openItem === item.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0 bg-white text-slate-600">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-in mt-12 text-center">
          <p className="text-slate-700 mb-6">
            Une autre question ? Contactez-nous directement
          </p>
          <a 
            href="mailto:contact@confianceabsolue.com" 
            className="btn-secondary"
          >
            Poser une question
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;