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

    'summary.text': 'Développeur logiciel depuis 2010: 9 ans en développement Android, 12 ans en développement de jeux vidéo.',

    // ── Expérience professionnelle ────────────────────────────────────────────
    'exp.0.title': 'Ingénieur Logiciel Principal',
    'exp.0.bullets': `
      <li>Dirigé une équipe Android/iOS en optimisation d'outils de jeu.</li>
      <li>Encadré une équipe à distance et collaboré avec des équipes pluridisciplinaires.</li>
      <li>Planifié la feuille de route et assuré les relations avec partenaires internationaux.</li>`,

    'exp.1.title': 'Développeur de Jeux Mobiles',
    'exp.1.bullets': `
      <li>Développé Buraco Jogatina (jeu de cartes n°1 au Brésil) et d'autres jeux mobiles avec Unity, Lua, AndEngine, Java/Kotlin et Objective-C.</li>
      <li>Créé AutoBuilder (JavaFX + Bash) pour automatiser les builds Android/iOS.</li>
      <li>Géré gameplay, multijoueur, publicités et analytique via Unity et SmartFox.</li>`,

    'exp.2.title': 'Développeur de Jeux Mobiles',
    'exp.2.bullets': `
      <li>Développé un Infinite Runner 2D Android/iOS avec Unity.</li>
      <li>Intégré GameSparks (connexion, classements mondiaux).</li>
      <li>Monétisé via AdMob, IronSource et publicités in-game.</li>`,

    'exp.3.title': 'Développeur Système',
    'exp.3.bullets': `
      <li>Développé un ESB avec Karaf et ServiceMix (Java).</li>`,

    'exp.4.title': 'Développeur de Jeux Mobiles',
    'exp.4.bullets': `
      <li>Développé un jeu Unity multijoueur (style Clash of Clans) et un match-3 avec NgCore/JavaScript.</li>`,

    'exp.5.title': 'Développeur Android',
    'exp.5.bullets': `
      <li>Migré une app Windows Phone vers Android - refonte UI et optimisation des performances.</li>`,

    'exp.6.title': 'Stagiaire Développeur Android',
    'exp.6.bullets': `
      <li>Migration du Système de Gestion des Infractions Routières de Rio de Janeiro - Palm OS vers Android.</li>`,

    'exp.7.title': 'Stagiaire Analyste Système',
    'exp.7.bullets': `
      <li>Prototypes d'applications de bureau en .NET C#.</li>`,

    // ── Jeux Vidéo ────────────────────────────────────────────────────────────
    'game.0.desc': `
      <p>Migration d'AndEngine vers Unity :</p>
      <ul>
        <li>Gameplay solo/multijoueur et bots en Lua.</li>
        <li>Multijoueur via SmartFox.</li>
        <li>Chat et emojis animés via Spine.</li>
        <li>Publicités, analytique, notifications push/locales et mode débogage.</li>
      </ul>`,

    'game.1.desc': `<p>Solutions natives Android/iOS : intégrations tierces, liens profonds et conformité Apple.</p>`,

    'game.2.desc': `<p>Promotions saisonnières, publicités et analytique.</p>`,

    'game.3.desc': `<p>Missions/récompenses quotidiennes, publicités, analytique et notifications push.</p>`,

    'game.4.desc': `<p>Maintenance de jeux Jogatina existants - Unity et AndEngine (Android).</p>`,

    'game.5.desc': `<p>Système de chat via SmartFox.</p>`,

    'game.6.desc': `<p>Bonus spéciaux, machine à sous quotidienne et corrections de bugs.</p>`,

    'game.7.desc': `<p>Infinite Runner 2D avec GameSparks (connexion, classements) et intégration multi-réseaux publicitaires.</p>`,

    'game.8.slides-label': 'Présentation :',
    'game.8.demo-label':   'Démo :',
    'game.8.desc': `
      <p>Projet académique - Collège Centennial. Jeu de tir roguelite inspiré de The Binding of Isaac et Enter the Gungeon, en salles générées aléatoirement. 3 mois de développement sur PC avec Unity.</p>
      <ul>
        <li>Contrôleur joueur (Input System Unity) - manette et clavier/souris.</li>
        <li>Navigation UI manette et clavier/souris.</li>
        <li>Génération de carte procédurale.</li>
        <li>Internationalisation Unity - 7 langues.</li>
        <li>IA avec le Behavior System Unity.</li>
        <li>Shader Graph pour le feedback visuel de santé.</li>
        <li>Mécaniques : déplacement, tir, parade, esquive avec i-frames.</li>
        <li>Mode débogage complet.</li>
        <li>Architecture modulaire via Assembly Definition.</li>
        <li>Tests automatisés Play/Edit Mode.</li>
      </ul>`,

    'game.9.desc': `
      <p>Projet académique - Collège Centennial. Jeu idle à tir automatique ; amélioration d'armes contre des vagues d'ennemis.</p>
      <ul>
        <li>Conformité RGPD via Google UMP.</li>
        <li>Monétisation via bannière adaptative et vidéo récompensée (AdMob).</li>
      </ul>`,

    // ── Outils ────────────────────────────────────────────────────────────────
    'tool.0.desc': `
      <p>Outil de génération d'apps Android/iOS depuis un projet JavaScript :</p>
      <ul>
        <li>Pipelines de build locaux et CI.</li>
        <li>Journaux du périphérique connecté.</li>
        <li>Intégration Firebase App Distribution.</li>
        <li>Notes de version automatiques (commits + dépendances).</li>
      </ul>`,

    'tool.1.desc': `
      <p>Interface unifiée pour médiation publicitaire, confidentialité et analytique :</p>
      <ul>
        <li>Façade unifiant analytique et médiation publicitaire.</li>
        <li>Centre de confidentialité conforme IAB TCF - gestion des préférences et suppressions de données.</li>
        <li>Hub analytique multi-SDK pour distribution d'événements entre fournisseurs.</li>
        <li>Médiation publicitaire avancée - logique Crazyfall, multi-réseaux.</li>
        <li>Balises dynamiques pour placements publicitaires flexibles.</li>
        <li>Tests A/B pour l'optimisation publicitaire.</li>
      </ul>`,

    // ── Formation ─────────────────────────────────────────────────────────────
    'edu.0.degree': 'Diplôme Avancé, Programmation de Jeux Vidéo',
    'edu.0.detail': 'Centennial College, Canada - GPA cumulatif : 4,352 sur 4,5 (96,71 %)',
    'edu.1.degree': 'Baccalauréat, Ingénierie Informatique',
    'edu.2.degree': 'Certificat, Concepteur de personnages 3D',
    'edu.3.degree': "École Préparatoire des Cadets de l'Aéronautique - Force Aérienne Brésilienne",
    'edu.3.detail': "Élève militaire - lycée &amp; fondamentaux de l'aviation",

    // ── Bénévolat ─────────────────────────────────────────────────────────────
    'vol.0.role': 'Membre, Comité consultatif du Programme',
    'vol.0.org':  'Centennial College, Canada',
    'vol.0.desc': "Conseiller le collège sur les tendances du secteur, la pertinence du curriculum et les besoins en compétences de l'industrie",
    'vol.1.role': 'Force Aérienne Brésilienne',
    'vol.1.org':  'Carandaí, Minas Gerais, Brésil',
    'vol.1.desc': "Aide humanitaire aux sinistrés lors d'une catastrophe naturelle",

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
