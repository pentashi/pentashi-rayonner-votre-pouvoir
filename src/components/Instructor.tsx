import React from 'react';

const Instructor: React.FC = () => {
  return (
    <section id="instructeur" className="section-padding bg-primary-800 text-white">
      <div className="container-custom flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Instructor Headshot */}
        <div className="flex-shrink-0">
          <img
            src="https://i.imgur.com/XrPEmfD.png"
            alt="Ra Ukuu MBOWE"
            className="rounded-full w-40 h-40 md:w-52 md:h-52 object-cover shadow-lg border-4 border-amber-400"
          />
        </div>

        {/* Instructor Information */}
        <div className="text-center md:text-left max-w-3xl">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-amber-400 mb-6">
            À propos de l’instructeur
          </h2>

          <h3 className="text-3xl md:text-4xl font-heading font-bold text-amber-400 mb-4">
            Ra Ukuu MBOWE
          </h3>

          <p className="text-lg md:text-xl text-slate-200 mb-4">
            Consultant – Formateur International | Spécialiste Leadership Transformationnel & Intelligence Artificielle
          </p>

          <p className="text-md md:text-lg text-slate-300 mb-6 leading-relaxed">
            Consultant-formateur senior avec plus de 15 ans d’expérience dans le développement des compétences,
            la conduite du changement et l’implémentation de projets stratégiques. Interventions en Afrique
            auprès d’institutions privées, ONG et multinationales pour concevoir et animer des formations à fort impact :
            leadership, soft skills, IA générative, gestion de la performance et culture organisationnelle.
            Spécialiste du coaching transformationnel, structuration et pilotage de programmes hybrides (présentiel/ligne)
            centrés sur les résultats et l’autonomisation durable.
          </p>

          {/* Instructor Speaking Images */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <img
              src="https://i.imgur.com/RVVhDYw.jpeg"
              alt="Instructor Speaking 1"
              className="w-40 h-40 md:w-60 md:h-60 rounded-xl object-cover shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://i.imgur.com/v0s9mP5.jpeg"
              alt="Instructor Speaking 2"
              className="w-40 h-40 md:w-60 md:h-60 rounded-xl object-cover shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
