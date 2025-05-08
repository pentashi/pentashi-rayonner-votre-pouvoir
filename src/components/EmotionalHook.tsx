import React, { useEffect } from 'react';

const EmotionalHook: React.FC = () => {
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
        <h2 className="fade-in section-title text-center px-4 sm:px-0">
          Vous êtes compétent. Mais quelque chose vous retient.
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 sm:space-y-8 mt-8 sm:mt-12 px-4 sm:px-0">
            <div className="fade-in card">
              <p className="text-base sm:text-lg font-medium text-slate-800 mb-3">
                Ce moment où vous voulez prendre la parole… mais vous vous censurez.
              </p>
              <p className="text-sm sm:text-base text-slate-600">
                Vous avez les idées, la vision, mais quelque chose vous empêche de les exprimer pleinement.
                Cette hésitation vous coûte des opportunités et des connexions précieuses.
              </p>
            </div>
            
            <div className="fade-in card">
              <p className="text-base sm:text-lg font-medium text-slate-800 mb-3">
                Cette idée que vous gardez pour vous… par peur d'être jugé.
              </p>
              <p className="text-sm sm:text-base text-slate-600">
                Vous savez que vos idées ont de la valeur, mais la crainte du regard des autres vous paralyse.
                Le doute s'installe et votre créativité reste prisonnière.
              </p>
            </div>
            
            <div className="fade-in card">
              <p className="text-base sm:text-lg font-medium text-slate-800 mb-3">
                Cette tension entre ce que vous êtes capable de faire et ce que vous montrez réellement.
              </p>
              <p className="text-sm sm:text-base text-slate-600">
                Le fossé entre votre potentiel et sa concrétisation crée une frustration quotidienne.
                Vous savez que vous méritez plus, mais quelque chose bloque votre progression.
              </p>
            </div>
            
            <div className="fade-in text-center mt-8 sm:mt-12 px-4 sm:px-0">
              <p className="text-lg sm:text-xl md:text-2xl font-heading text-primary-800 mb-4 sm:mb-6">
                Ce n'est pas de la timidité. Ce n'est pas un manque d'ambition.
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-amber-600">
                C'est un blocage. Et il peut être transformé.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalHook;