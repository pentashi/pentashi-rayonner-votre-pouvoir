import React, { useEffect } from 'react';

const ProgramBreakdown: React.FC = () => {
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
    <section id="programme" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="fade-in section-title">Une transformation en deux phases</h2>
          <p className="fade-in delay-100 section-subtitle max-w-3xl mx-auto">
            Une méthode structurée pour déconstruire vos blocages et installer une confiance durable
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="fade-in delay-200 card border-l-4 border-primary-600">
            <div className="mb-6">
              <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
                Phase 1
              </span>
              <h3 className="text-2xl font-heading font-bold text-primary-800 mb-2">
                Acte I – Reconnexion Intérieure
              </h3>
              <p className="text-amber-600 font-medium">3 jours d'immersion</p>
            </div>
            
            <p className="text-slate-700 mb-6">
              Immersion guidée pour comprendre les mécanismes qui vous freinent, déconstruire vos anciens schémas, 
              activer votre socle personnel de puissance.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <p>Identification de vos schémas limitants spécifiques</p>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <p>Protocole de désactivation des croyances négatives</p>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <p>Reprogrammation cognitive et émotionnelle</p>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <p>Construction de votre socle intérieur de confiance</p>
              </li>
            </ul>
          </div>
          
          <div className="fade-in delay-300 card border-l-4 border-amber-600">
            <div className="mb-6">
              <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-800 font-medium text-sm mb-4">
                Phase 2
              </span>
              <h3 className="text-2xl font-heading font-bold text-amber-800 mb-2">
                Acte II – Confiance en Action
              </h3>
              <p className="text-primary-600 font-medium">21 jours de pratique</p>
            </div>
            
            <p className="text-slate-700 mb-6">
              Challenge quotidien pour passer à l'action chaque jour, stabiliser votre posture, 
              redéfinir votre présence.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <p>Challenges quotidiens progressifs personnalisés</p>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <p>Rituels d'ancrage de votre nouvelle identité</p>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <p>Pratiques de présence et d'impact social</p>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <p>Coaching collectif hebdomadaire pour ajuster votre progression</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="fade-in delay-400 text-center mt-12">
          <a href="#offres" className="btn-primary">
            Voir les dates & modalités
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProgramBreakdown;