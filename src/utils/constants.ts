export const testimonials = 
[
  {
    id: 1,
    name: 'Achapi',
    role: 'Cadre en entreprise',
    testimonial: "Avant la formation, j'avais l'impression que mes compétences n'étaient jamais reconnues à leur juste valeur. Confiance Absolue m'a aidé à transformer ma posture et ma communication. J'ai obtenu une promotion trois mois après.",
    image: 'https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Christina Morillo photo
  },
  {
    id: 2,
    name: 'Pentashi',
    role: 'Étudiante',
    testimonial: "J'ai toujours eu des idées mais je n'osais pas les partager. Ce programme m'a aidée à trouver ma voix. Maintenant, je prends la parole en public sans cette boule au ventre qui me paralysait avant.",
    image: 'https://images.pexels.com/photos/1405963/pexels-photo-1405963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Dellon Thomas photo
  },
  {
    id: 3,
    name: 'Christiane',
    role: 'Entrepreneure',
    testimonial: "J'ai lancé mon entreprise il y a 5 ans, mais j'avais peur de vraiment me mettre en avant. Confiance Absolue m'a donné des outils concrets pour dépasser mes blocages. Mon chiffre d'affaires a doublé depuis.",
    image: 'https://images.pexels.com/photos/936043/pexels-photo-936043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Blue blazer
  }
];

  
  


export const faqItems = [
  {
    id: 1,
    question: 'Combien de temps dois-je consacrer au programme chaque jour ?',
    answer: 'La première phase (3 jours) demande une immersion de 4h par jour. La seconde phase (21 jours) nécessite 30-45 minutes quotidiennes pour les challenges et exercices pratiques. La transformation demande un engagement, mais le programme est conçu pour s\'intégrer dans une vie active.'
  },
  {
    id: 2,
    question: 'Dois-je avoir une expérience préalable en développement personnel ?',
    answer: 'Aucune expérience n\'est requise. Que vous soyez novice ou habitué au développement personnel, le programme est conçu pour s\'adapter à votre niveau. L\'essentiel est votre engagement à appliquer les principes enseignés.'
  },
  {
    id: 3,
    question: 'Les sessions seront-elles disponibles en replay ?',
    answer: 'Oui, toutes les sessions sont enregistrées et disponibles en replay dans les 24h. Cependant, participer en direct permet une expérience plus immersive et interactive, maximisant votre transformation.'
  }
];

export const pricingPlans = [
  {
    id: 'genius',
    title: 'Genius',
    price: '10 000 FCFA',
    description: 'Pour les étudiants et jeunes actifs',
    features: [
      'Accès à la formation de 3 jours',
      'Challenge de 21 jours',
      'Sessions de coaching collectif',
      'Accès aux replays pendant 30 jours',
      'Certificat numérique',
    ],
    recommended: false,
  },
  {
    id: 'professionnel',
    title: 'Professionnel',
    price: '25 000 FCFA',
    description: 'Pour les jeunes cadres et entrepreneurs',
    features: [
      'Accès à la formation de 3 jours',
      'Challenge de 21 jours',
      'Sessions de coaching collectif',
      'Accès aux replays pendant 90 jours',
      'Certificat numérique',
      'Bonus audio exclusifs',
    ],
    recommended: true,
  },
  {
    id: 'premium',
    title: 'Premium',
    price: '100 000 FCFA',
    description: 'Pour les cadres et consultants',
    features: [
      'Accès à la formation de 3 jours',
      'Challenge de 21 jours',
      'Sessions de coaching collectif',
      'Accès illimité aux replays',
      'Certificat numérique',
      'Bonus audio exclusifs',
      'Session de coaching individuel (1h)',
      'Accès prioritaire au support',
    ],
    recommended: false,
  }
];

export const targetAudiences = [
  {
    id: 1,
    title: 'Cadres & Managers',
    description: 'Qui souhaitent développer leur leadership et imposer naturellement leur autorité sans agressivité ni effort.'
  },
  {
    id: 2,
    title: 'Entrepreneurs',
    description: 'Qui veulent incarner pleinement leur vision et communiquer avec impact pour attirer clients et partenaires.'
  },
  {
    id: 3,
    title: 'Étudiants',
    description: 'Qui désirent se démarquer dans leurs études et se préparer à entrer dans la vie professionnelle avec assurance.'
  },
  {
    id: 4,
    title: 'Créatifs',
    description: 'Qui cherchent à partager leur talent sans autocensure et à défendre la valeur de leur travail.'
  }
];

export const benefits = [
  {
    id: 1,
    title: 'Identifié et désactivé vos schémas de sabotage',
    description: 'Repérez les croyances limitantes qui vous freinent et apprenez à les neutraliser définitivement.'
  },
  {
    id: 2,
    title: 'Reprogrammé votre discours intérieur',
    description: 'Transformez votre dialogue interne pour qu\'il devienne votre allié plutôt que votre critique.'
  },
  {
    id: 3,
    title: 'Créé un socle de confiance émotionnelle & cognitive',
    description: 'Développez une stabilité intérieure qui résiste aux pressions et aux jugements extérieurs.'
  },
  {
    id: 4,
    title: 'Agi chaque jour selon vos choix et non vos peurs',
    description: 'Prenez des décisions alignées avec vos valeurs plutôt que motivées par l\'anxiété ou l\'évitement.'
  },
  {
    id: 5,
    title: 'Transformé votre posture sociale & professionnelle',
    description: 'Adoptez naturellement une présence qui inspire respect et considération auprès des autres.'
  },
  {
    id: 6,
    title: 'Ancré une présence magnétique et alignée',
    description: 'Rayonnez d\'une confiance authentique qui attire naturellement les opportunités et les relations positives.'
  }
];

export const bonuses = [
  {
    id: 1,
    title: 'Livre audio "Comment la confiance en Soi change des vies"',
    description: 'Une collection d\'histoires inspirantes et de techniques pratiques pour renforcer votre confiance au quotidien.'
  },
  {
    id: 2,
    title: 'Live privé de Q&A avec Michael MBOWE',
    description: 'Une session exclusive où vous pourrez poser vos questions personnelles et recevoir des conseils adaptés à votre situation.'
  },
  {
    id: 3,
    title: 'Badge digital "Présence Intérieure" pour LinkedIn',
    description: 'Affichez votre engagement envers votre développement personnel et professionnel sur votre profil LinkedIn.'
  }
];