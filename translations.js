const TRANSLATIONS = {
  en: {
    'page.title': 'Carlos Gama - Software Engineer',
    'header.role': 'Software Engineer',
    'header.specialization': 'Mobile Game &amp; App Development',

    'section.summary':    'Summary of Qualifications',
    'section.experience': 'Professional Experience',
    'section.games':      'Games',
    'section.tools':      'Tools',
    'section.education':  'Education',
    'section.volunteer':  'Volunteer Experience',
    'section.languages':  'Languages',

    'date.present':    'Present',
    'edu.incomplete':  'Incomplete',

    'summary.text': 'Software Developer since 2010, with 9 years of Android development and 12 years in Game development.',

    // ── Professional Experience ───────────────────────────────────────────────
    'exp.0.title': 'Lead Software Engineer',
    'exp.0.bullets': `
      <li>Led a team of Android and iOS specialists in game tool optimization.</li>
      <li>Mentored a remote team and collaborated with cross-functional teams.</li>
      <li>Managed roadmap planning and established communication with international partners.</li>`,

    'exp.1.title': 'Mobile Game Developer',
    'exp.1.bullets': `
      <li>Worked on the most popular classic card game in Brazil, Buraco Jogatina, and other mobile games using Unity, Lua, AndEngine, Android Java/Kotlin, Objective-C.</li>
      <li>Developed the AutoBuilder tool (JavaFX + Bash Shell Scripting) for automating app builds.</li>
      <li>Managed core gameplay, multiplayer systems, ads, and analytics integration using Unity and SmartFox Server.</li>`,

    'exp.2.title': 'Mobile Game Developer - Partner',
    'exp.2.bullets': `
      <li>Developed a 2D Infinite Runner game for Android/iOS using Unity.</li>
      <li>Integrated GameSparks for login and global ranking features.</li>
      <li>Monetized using Google AdMob, IronSource, and InGame custom ads.</li>`,

    'exp.3.title': 'System Developer',
    'exp.3.bullets': `
      <li>Developed ESB software using Java-based tools like Karaf and ServiceMix.</li>`,

    'exp.4.title': 'Mobile Game Developer',
    'exp.4.bullets': `
      <li>Worked on an online multiplayer mobile Unity game similar to Clash of Clans and a match-3 game using NgCore Engine with JavaScript.</li>`,

    'exp.5.title': 'Android Developer',
    'exp.5.bullets': `
      <li>Migrated a Windows Phone app to Android, including UI redesign and performance optimization.</li>`,

    'exp.6.title': 'Android Developer Intern',
    'exp.6.bullets': `
      <li>Worked on the migration of Rio de Janeiro's Traffic Infractions Management System from Palm OS to Android.</li>`,

    'exp.7.title': 'System Analyst Intern',
    'exp.7.bullets': `
      <li>Developed functional prototypes for desktop apps using .NET C#.</li>`,

    // ── Games ─────────────────────────────────────────────────────────────────
    'game.0.desc': `
      <p>Implemented the game and migrated it from AndEngine to Unity:</p>
      <ul>
        <li>Worked on single/multiplayer core gameplay and bots using Lua.</li>
        <li>Integrated multiplayer using SmartFox.</li>
        <li>Integrated Chat &amp; Emoji features with animations created through Spine.</li>
        <li>Integrated Ads, Analytics, Push, Local Notifications, and Debug Mode tools.</li>
      </ul>`,

    'game.1.desc': `<p>Implemented Android and iOS native solutions, such as internal and 3rd party tools integrations, deep linking and solved Apple privacy compliances.</p>`,

    'game.2.desc': `<p>Worked on implementing seasonal promotions, ads, and analytics.</p>`,

    'game.3.desc': `<p>Implemented daily missions/rewards, integrated ads, analytics and push notification.</p>`,

    'game.4.desc': `<p>Worked on several small/legacy Jogatina games using Unity and AndEngine (Android Only).</p>`,

    'game.5.desc': `<p>Worked on a chat system using SmartFox.</p>`,

    'game.6.desc': `<p>Developed some powerups, daily bonus with a spin machine and fixed legacy bugs.</p>`,

    'game.7.desc': `<p>Developed a 2D Infinite Runner game using GameSparks for login and global rankings, and integrated multiple ad networks for monetization.</p>`,

    'game.8.slides-label': 'Presentation Slides:',
    'game.8.demo-label':   'Demo:',
    'game.8.desc': `
      <p>Academic project for my Game Programming course at Centennial College. A roguelite shooter inspired by classics like The Binding of Isaac and Enter the Gungeon. Players battle enemies in randomly generated rooms. I worked for 3 months on this game for PC using Unity.</p>
      <ul>
        <li>Implemented player controller using new Unity's Input System with Gamepad and Keyboard/Mouse support.</li>
        <li>Implemented Gamepad and Keyboard/Mouse UI Navigation support.</li>
        <li>Implemented procedural map generation.</li>
        <li>Used Unity Internationalization System for 7 languages.</li>
        <li>Designed AI using Unity's Behavior System.</li>
        <li>Used Shader Graph for health feedback.</li>
        <li>Implemented mechanics such as move, shoot, parry and dash with invincibility frames.</li>
        <li>Developed Debug Mode for testing all features.</li>
        <li>Structured the project in modules using Assembly Definition.</li>
        <li>Wrote Play/Edit Mode automated tests.</li>
      </ul>`,

    'game.9.desc': `
      <p>Academic project for my Game Programming course at Centennial College. Idle game with an auto-shooting mechanic, where players upgrade their weapons to defeat waves of enemies.</p>
      <ul>
        <li>Implemented GDPR compliance using Google UMP.</li>
        <li>Implemented monetization via Adaptive Banner and Rewarded Video using AdMob.</li>
      </ul>`,

    // ── Tools ─────────────────────────────────────────────────────────────────
    'tool.0.desc': `
      <p>Developed a tool that generates Android/iOS apps from a JavaScript game project:</p>
      <ul>
        <li>Provides both local and CI build pipelines.</li>
        <li>Displays the log from connected device.</li>
        <li>Integrated Firebase App Distribution.</li>
        <li>Automatically generates release notes (commits + dependencies).</li>
      </ul>`,

    'tool.1.desc': `
      <p>Worked on a unified interface for ad mediation, data privacy, and analytics, having the following features:</p>
      <ul>
        <li>A facade to unify interactions with analytics and ads mediation systems.</li>
        <li>Data privacy center compliant with the IAB TCF, allowing clients to manage user privacy preferences and process data deletion requests.</li>
        <li>Analytics hub that integrates multiple SDKs, allowing clients to distribute analytics events across multiple providers.</li>
        <li>Advanced ad mediation system using Crazyfall logic with multiple ad network SDKs integrations.</li>
        <li>Dynamic tag configurations for flexible ad placements.</li>
        <li>A/B testing capabilities for ad performance optimization.</li>
      </ul>`,

    // ── Education ─────────────────────────────────────────────────────────────
    'edu.0.degree': 'Advanced Diploma, Game Programming',
    'edu.0.detail': 'Centennial College, Canada - Cumulative GPA: 4.352 of 4.5 (96.71%)',
    'edu.1.degree': "Bachelor's degree, Computer Engineering",
    'edu.2.degree': 'Certificate, 3D Character Designer',
    'edu.3.degree': 'Air Force Cadets Preparatory School - Brazilian Air Force',
    'edu.3.detail': 'Military Student, High School &amp; Fundamentals of Military Aviation',

    // ── Volunteer ─────────────────────────────────────────────────────────────
    'vol.0.role': 'Member, Program Advisory Committee',
    'vol.0.org':  'Centennial College, Canada',
    'vol.0.desc': 'Collaborated with the college to provide industry trends, advise on curriculum relevance, identify changes in skill and knowledge requirements, and ensure the curriculum aligns with industry needs',
    'vol.1.role': 'Brazilian Air Force',
    'vol.1.org':  'Carandaí, Minas Gerais, Brazil',
    'vol.1.desc': 'Humanitarian aid to the homeless in a disaster',

    // ── Languages ─────────────────────────────────────────────────────────────
    'lang.portuguese': 'Portuguese',
    'lang.english':    'English',
    'lang.french':     'French',
    'lang.native':     'Native',
    'lang.advanced':   'Advanced',
    'lang.cert':       'Certificate',

    // ── Carousel accessibility ────────────────────────────────────────────────
    'carousel.prev': 'Previous',
    'carousel.next': 'Next',
  },

  // ════════════════════════════════════════════════════════════════════════════
  fr: {
    'page.title': 'Carlos Gama - Ingénieur Logiciel',
    'header.role': 'Ingénieur Logiciel',
    'header.specialization': 'Développement de Jeux Mobiles &amp; Applications',

    'section.summary':    'Résumé des Qualifications',
    'section.experience': 'Expérience Professionnelle',
    'section.games':      'Jeux Vidéo',
    'section.tools':      'Outils',
    'section.education':  'Formation',
    'section.volunteer':  'Bénévolat',
    'section.languages':  'Langues',

    'date.present':   'Présent',
    'edu.incomplete': 'Non complété',

    'summary.text': 'Développeur logiciel depuis 2010, avec 9 ans de développement Android et 12 ans dans le développement de jeux vidéo.',

    // ── Expérience professionnelle ────────────────────────────────────────────
    'exp.0.title': 'Ingénieur Logiciel Principal',
    'exp.0.bullets': `
      <li>Dirigé une équipe de spécialistes Android et iOS dans l'optimisation des outils de jeu.</li>
      <li>Encadré une équipe à distance et collaboré avec des équipes pluridisciplinaires.</li>
      <li>Géré la planification de la feuille de route et établi des communications avec des partenaires internationaux.</li>`,

    'exp.1.title': 'Développeur de Jeux Mobiles',
    'exp.1.bullets': `
      <li>Travaillé sur le jeu de cartes classique le plus populaire au Brésil, Buraco Jogatina, et d'autres jeux mobiles avec Unity, Lua, AndEngine, Android Java/Kotlin, Objective-C.</li>
      <li>Développé l'outil AutoBuilder (JavaFX + Bash Shell Scripting) pour automatiser les builds d'applications.</li>
      <li>Géré le gameplay principal, les systèmes multijoueurs, les publicités et l'intégration analytique avec Unity et SmartFox Server.</li>`,

    'exp.2.title': 'Développeur de Jeux Mobiles',
    'exp.2.bullets': `
      <li>Développé un jeu de type Infinite Runner 2D pour Android/iOS avec Unity.</li>
      <li>Intégré GameSparks pour la connexion et les fonctionnalités de classement mondial.</li>
      <li>Monétisé via Google AdMob, IronSource et des publicités personnalisées intégrées au jeu.</li>`,

    'exp.3.title': 'Développeur Système',
    'exp.3.bullets': `
      <li>Développé un logiciel ESB à l'aide d'outils Java tels que Karaf et ServiceMix.</li>`,

    'exp.4.title': 'Développeur de Jeux Mobiles',
    'exp.4.bullets': `
      <li>Travaillé sur un jeu Unity multijoueur en ligne similaire à Clash of Clans et un jeu match-3 avec le moteur NgCore en JavaScript.</li>`,

    'exp.5.title': 'Développeur Android',
    'exp.5.bullets': `
      <li>Migré une application Windows Phone vers Android, incluant la refonte de l'interface et l'optimisation des performances.</li>`,

    'exp.6.title': 'Stagiaire Développeur Android',
    'exp.6.bullets': `
      <li>Travaillé sur la migration du Système de Gestion des Infractions Routières de Rio de Janeiro de Palm OS vers Android.</li>`,

    'exp.7.title': 'Stagiaire Analyste Système',
    'exp.7.bullets': `
      <li>Développé des prototypes fonctionnels d'applications de bureau avec .NET C#.</li>`,

    // ── Jeux ──────────────────────────────────────────────────────────────────
    'game.0.desc': `
      <p>Implémenté le jeu et migré d'AndEngine vers Unity :</p>
      <ul>
        <li>Travaillé sur le gameplay principal solo/multijoueur et les bots en Lua.</li>
        <li>Intégré le multijoueur avec SmartFox.</li>
        <li>Intégré les fonctionnalités de chat et d'emoji avec des animations créées via Spine.</li>
        <li>Intégré les outils de publicité, d'analytique, de notifications push et locales, et le mode débogage.</li>
      </ul>`,

    'game.1.desc': `<p>Implémenté des solutions natives Android et iOS, notamment des intégrations d'outils internes et tiers, des liens profonds et résolu les conformités de confidentialité Apple.</p>`,

    'game.2.desc': `<p>Travaillé sur l'implémentation de promotions saisonnières, de publicités et d'analytiques.</p>`,

    'game.3.desc': `<p>Implémenté des missions/récompenses quotidiennes, intégré les publicités, l'analytique et les notifications push.</p>`,

    'game.4.desc': `<p>Travaillé sur plusieurs petits jeux Jogatina anciens avec Unity et AndEngine (Android uniquement).</p>`,

    'game.5.desc': `<p>Travaillé sur un système de chat utilisant SmartFox.</p>`,

    'game.6.desc': `<p>Développé des bonus spéciaux, un bonus quotidien avec une machine à sous et corrigé des bugs hérités.</p>`,

    'game.7.desc': `<p>Développé un jeu de type Infinite Runner 2D avec GameSparks pour la connexion et les classements mondiaux, et intégré plusieurs réseaux publicitaires pour la monétisation.</p>`,

    'game.8.slides-label': 'Présentation :',
    'game.8.demo-label':   'Démo :',
    'game.8.desc': `
      <p>Projet académique pour mon cours de programmation de jeux au Collège Centennial. Un jeu de tir roguelite inspiré de classiques comme The Binding of Isaac et Enter the Gungeon. Les joueurs combattent des ennemis dans des salles générées aléatoirement. J'ai travaillé pendant 3 mois sur ce jeu pour PC avec Unity.</p>
      <ul>
        <li>Implémenté le contrôleur joueur avec le nouveau système d'entrée Unity, supportant manette et clavier/souris.</li>
        <li>Implémenté la navigation UI avec manette et clavier/souris.</li>
        <li>Implémenté la génération de carte procédurale.</li>
        <li>Utilisé le système d'internationalisation Unity pour 7 langues.</li>
        <li>Conçu l'IA avec le système de comportement Unity.</li>
        <li>Utilisé Shader Graph pour le retour visuel de santé.</li>
        <li>Implémenté des mécaniques : déplacement, tir, parade et esquive avec images d'invincibilité.</li>
        <li>Développé un mode débogage pour tester toutes les fonctionnalités.</li>
        <li>Structuré le projet en modules avec Assembly Definition.</li>
        <li>Écrit des tests automatisés en modes Play et Edit.</li>
      </ul>`,

    'game.9.desc': `
      <p>Projet académique pour mon cours de programmation de jeux au Collège Centennial. Jeu Idle avec une mécanique de tir automatique, où les joueurs améliorent leurs armes pour vaincre des vagues d'ennemis.</p>
      <ul>
        <li>Implémenté la conformité RGPD avec Google UMP.</li>
        <li>Implémenté la monétisation via bannière adaptative et vidéo récompensée avec AdMob.</li>
      </ul>`,

    // ── Outils ────────────────────────────────────────────────────────────────
    'tool.0.desc': `
      <p>Développé un outil qui génère des applications Android/iOS à partir d'un projet de jeu JavaScript :</p>
      <ul>
        <li>Fournit des pipelines de build locaux et CI.</li>
        <li>Affiche les journaux du périphérique connecté.</li>
        <li>Intégré Firebase App Distribution.</li>
        <li>Génère automatiquement des notes de version (commits + dépendances).</li>
      </ul>`,

    'tool.1.desc': `
      <p>Travaillé sur une interface unifiée pour la médiation publicitaire, la confidentialité des données et l'analytique :</p>
      <ul>
        <li>Une façade pour unifier les interactions avec les systèmes d'analytique et de médiation publicitaire.</li>
        <li>Centre de confidentialité des données conforme à l'IAB TCF, permettant aux clients de gérer les préférences de confidentialité et de traiter les demandes de suppression de données.</li>
        <li>Hub analytique intégrant plusieurs SDK pour distribuer les événements analytiques entre plusieurs fournisseurs.</li>
        <li>Système avancé de médiation publicitaire avec logique Crazyfall et intégrations de multiples réseaux publicitaires.</li>
        <li>Configurations de balises dynamiques pour des placements publicitaires flexibles.</li>
        <li>Capacités de test A/B pour l'optimisation des performances publicitaires.</li>
      </ul>`,

    // ── Formation ─────────────────────────────────────────────────────────────
    'edu.0.degree': 'Diplôme avancé, Programmation de Jeux Vidéo',
    'edu.0.detail': 'Centennial College, Canada - GPA cumulatif : 4,352 sur 4,5 (96,71 %)',
    'edu.1.degree': 'Baccalauréat, Ingénierie Informatique',
    'edu.2.degree': 'Certificat, Concepteur de Personnages 3D',
    'edu.3.degree': "École Préparatoire des Cadets de l’Aéronautique - Force Aérienne Brésilienne",
    'edu.3.detail': "Élève militaire, lycée et fondamentaux de l'aviation militaire",

    // ── Bénévolat ─────────────────────────────────────────────────────────────
    'vol.0.role': 'Membre, Comité Consultatif du Programme',
    'vol.0.org':  'Centennial College, Canada',
    'vol.0.desc': "Collaboré avec le collège pour fournir des tendances du secteur, conseiller sur la pertinence du curriculum, identifier les évolutions des exigences en compétences et s'assurer que le curriculum correspond aux besoins de l'industrie",
    'vol.1.role': 'Force Aérienne Brésilienne',
    'vol.1.org':  'Carandaí, Minas Gerais, Brésil',
    'vol.1.desc': "Aide humanitaire aux personnes sans-abri lors d'une catastrophe",

    // ── Langues ───────────────────────────────────────────────────────────────
    'lang.portuguese': 'Portugais',
    'lang.english':    'Anglais',
    'lang.french':     'Français',
    'lang.native':     'Natif',
    'lang.advanced':   'Avancé',
    'lang.cert':       'Certificat',

    // ── Accessibilité carrousel ───────────────────────────────────────────────
    'carousel.prev': 'Précédent',
    'carousel.next': 'Suivant',
  },
};
