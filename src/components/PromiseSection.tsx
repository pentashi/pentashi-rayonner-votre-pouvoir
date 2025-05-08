import React, { useEffect } from 'react';

const PromiseSection: React.FC = () => {
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
    <section className="section-padding bg-primary-800 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="fade-in text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-8">
            Confiance Absolue™ n'est pas une formation.<br className="hidden sm:block" />
            <span className="text-amber-400">C'est une expérience de transformation.</span>
          </h2>
          
          <p className="fade-in delay-100 text-base sm:text-lg md:text-xl leading-relaxed mb-12 text-slate-200">
            Ce programme a été pensé comme un passage intérieur, une activation structurée de votre leadership personnel.
            En 24 jours, vous changez votre posture, vos réflexes, votre rapport à vous-même.
          </p>
          
          <div className="fade-in delay-200 relative inline-block w-full max-w-2xl">
          <img 
              src="https://i.imgur.com/nbMlj7I.jpeg"
              alt="Confiance Absolue Transformation"
              className="rounded-xl shadow-2xl w-full aspect-video object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;