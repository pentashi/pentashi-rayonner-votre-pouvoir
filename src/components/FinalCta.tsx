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
            Ce n'est pas ce que vous faites.<br/>
            <span className="text-amber-400">C'est ce que vous dégagez.</span>
          </h2>
          
          <p className="fade-in delay-100 text-xl mb-12 text-slate-200">
            Et si vous appreniez à incarner votre présence ?<br/>
            C'est ce que vous propose Confiance Absolue™.
          </p>

          <div className="fade-in delay-200 bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-heading font-bold text-primary-800 mb-6">
              Inscrivez-vous à la prochaine masterclass
            </h3>
            
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-left text-sm font-medium text-slate-700 mb-1">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Votre prénom"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-left text-sm font-medium text-slate-700 mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Votre nom"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-left text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="votre.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-left text-sm font-medium text-slate-700 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Votre numéro de téléphone"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="plan" className="block text-left text-sm font-medium text-slate-700 mb-1">
                  Formule choisie
                </label>
                <select
                  id="plan"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                >
                  <option value="">Sélectionnez une formule</option>
                  <option value="genius">Genius - 10 000 FCFA</option>
                  <option value="professionnel">Professionnel - 25 000 FCFA</option>
                  <option value="premium">Premium - 100 000 FCFA</option>
                </select>
              </div>
              
              <div className="pt-4">
                <button 
                  type="submit"
                  className="btn-primary w-full bg-amber-600 hover:bg-amber-700 text-xl py-4"
                >
                  Oui, je suis prêt.e à rayonner
                </button>
              </div>
              
              <p className="text-xs text-slate-500 mt-2">
                En vous inscrivant, vous acceptez nos conditions générales et notre politique de confidentialité.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;