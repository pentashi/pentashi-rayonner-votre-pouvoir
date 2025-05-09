import React, { useEffect } from 'react';

const FinalCta: React.FC = () => {
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
    <section id="inscription" className="section-padding bg-primary-800 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="fade-in text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Ce n'est pas ce que vous faites.<br />
            <span className="text-amber-400">C'est ce que vous dégagez.</span>
          </h2>

          <p className="fade-in delay-100 text-xl mb-12 text-slate-200">
            Et si vous appreniez à incarner votre présence ?<br />
            C'est ce que vous propose Confiance Absolue™.
          </p>

          <div className="fade-in delay-200 bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-heading font-bold text-primary-800 mb-6">
              Inscrivez-vous à la prochaine masterclass
            </h3>
            
            {/* Button that links to the form page */}
            <a 
              href="https://bit.ly/MstCA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-primary w-full bg-amber-600 hover:bg-amber-700 text-xl py-4">
                Oui, je suis prêt.e à rayonner
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
