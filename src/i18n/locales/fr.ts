import type { I18nStrings } from "@/i18n/types";

const baseStrings = {
  "site.title": "Plateforme SaaS alimentée par l'IA",
  "site.desc":
    "Transformez votre entreprise avec l'intelligence documentaire, la génération de contenu et l'analytique alimentées par l'IA",
};

const FRLocale: I18nStrings = {
  ...baseStrings,
  "hero.title": "Bonjour",
  "hero.body": `
        Une plateforme SaaS moderne avec des fonctionnalités alimentées par l'IA pour
        le traitement de documents, la génération de contenu et l'analytique. Construite
        avec les meilleures pratiques et l'accessibilité incluse par défaut.
`,
  "hero.beforeReadme": "Lisez les articles du blog ou consultez",
  "hero.readme": "README",
  "hero.afterReadme": "pour plus d'informations.",
  copy: "copier",
  copied: "copié",
  by: "par",
  about: "À propos",
  socialLinks: "Liens Sociaux",
  home: "Accueil",
  blog: "Blog",
  posts: "Articles",
  "posts.desc": "Tous les articles que j'ai publiés.",
  tag: "Étiquette",
  "tag.desc": 'Tous les articles avec l\'étiquette "{name}".',
  tags: "Étiquettes",
  "tags.desc": "Toutes les étiquettes utilisées dans les articles",
  archives: "Archives",
  "archives.desc": "Tous les articles que j'ai archivés.",
  featured: "En vedette",
  recentPosts: "Articles Récents",
  tableOfContents: "Table des matières",
  "tableOfContents.desc": "Ouvrir la table des matières",
  allPosts: "Tous les Articles",
  search: "Rechercher",
  "search.desc": "Rechercher n'importe quel article",
  "search.placeholder": "Rechercher n'importe quoi",
  pages: "Pages",
  page: "Page",
  pageWithNo: "Page {no}",
  "navigation.goBack": "Retour",
  "navigation.goBackHome": "Retour à l'Accueil",
  "navigation.backToTop": "Retour en Haut",
  "navigation.nextPost": "Article Suivant",
  "navigation.prevPost": "Article Précédent",
  "relatedPosts.title": "Articles Connexes",
  pageNotFound: "Page Non Trouvée",
  notFound: "Non Trouvé",
  rssFeed: "Flux RSS",
  suggestChanges: "Suggérer des Modifications",
  toggleLightAndDark: "Basculer clair et sombre",
  "pagination.prev": "Précédent",
  "pagination.next": "Suivant",
  "footer.text": "Copyright © {year} | Tous droits réservés",
  "date.published": "Publié",
  "date.updated": "Mis à jour",
  "date.month.1": "Janvier",
  "date.month.2": "Février",
  "date.month.3": "Mars",
  "date.month.4": "Avril",
  "date.month.5": "Mai",
  "date.month.6": "Juin",
  "date.month.7": "Juillet",
  "date.month.8": "Août",
  "date.month.9": "Septembre",
  "date.month.10": "Octobre",
  "date.month.11": "Novembre",
  "date.month.12": "Décembre",
  "socials.github": `${baseStrings["site.title"]} sur Github`,
  "socials.facebook": `${baseStrings["site.title"]} sur Facebook`,
  "socials.instagram": `${baseStrings["site.title"]} sur Instagram`,
  "socials.linkedin": `${baseStrings["site.title"]} sur LinkedIn`,
  "socials.mail": `Envoyer un email à ${baseStrings["site.title"]}`,
  "socials.x": `${baseStrings["site.title"]} sur X`,
  "socials.twitch": `${baseStrings["site.title"]} sur Twitch`,
  "socials.youtube": `${baseStrings["site.title"]} sur Youtube`,
  "socials.whatsapp": `${baseStrings["site.title"]} sur Whatsapp`,
  "socials.snapchat": `${baseStrings["site.title"]} sur Snapchat`,
  "socials.pinterest": `${baseStrings["site.title"]} sur Pinterest`,
  "socials.tiktok": `${baseStrings["site.title"]} sur TikTok`,
  "socials.codepen": `${baseStrings["site.title"]} sur CodePen`,
  "socials.discord": `${baseStrings["site.title"]} sur Discord`,
  "socials.gitlab": `${baseStrings["site.title"]} sur GitLab`,
  "socials.reddit": `${baseStrings["site.title"]} sur Reddit`,
  "socials.skype": `${baseStrings["site.title"]} sur Skype`,
  "socials.steam": `${baseStrings["site.title"]} sur Steam`,
  "socials.telegram": `${baseStrings["site.title"]} sur Telegram`,
  "socials.mastodon": `${baseStrings["site.title"]} sur Mastodon`,
  "sharePost.desc": "Partager cet article sur",
  "sharePost.on": "Partager cet article sur {media}",
  "sharePost.via": "Partager cet article via {media}",
  "a11y.skipToContent": "Aller au contenu",
  "a11y.rssFeed": "flux rss",
  "a11y.openMenu": "Ouvrir le Menu",
  "a11y.closeMenu": "Fermer le Menu",
  "a11y.archives": "archives",
  "a11y.search": "rechercher",
  "a11y.themeButtonDefaultLabel": "auto",
  "a11y.pagination": "Pagination",
  "a11y.breadcrumb": "fil d'ariane",
  "a11y.languagePicker": "Sélecteur de Langue",
  features: "Fonctionnalités",
  pricing: "Tarifs",
  signIn: "Se Connecter",
  startFree: "Commencer Gratuitement",
  "cta.startFreeTrial": "Commencer l'Essai Gratuit",
  "cta.viewDemo": "Voir la Démo",
  "cta.viewPricing": "Voir les Tarifs",
  "home.hero.title": "Des superpouvoirs IA pour votre entreprise",
  "home.hero.subtitle":
    "Transformez votre flux de travail avec l'intelligence documentaire, la génération de contenu et l'analyse alimentées par l'IA. Commencez gratuitement, évoluez au fur et à mesure.",
  "home.hero.badge": "🚀 Alimenté par GPT-4 et Claude",
  "home.features.title": "Tout ce dont vous avez besoin pour réussir",
  "home.features.subtitle":
    "Fonctionnalités IA prêtes pour la production qui génèrent une réelle valeur commerciale",
  "home.feature.docIntel.title": "Intelligence Documentaire",
  "home.feature.docIntel.desc":
    "Téléchargez et traitez des documents avec l'IA. Extrayez des informations, des résumés et discutez avec vos fichiers en utilisant une technologie RAG avancée.",
  "home.feature.contentGen.title": "Génération de Contenu",
  "home.feature.contentGen.desc":
    "Créez des articles de blog, du contenu marketing et des publications sur les réseaux sociaux en quelques secondes. Personnalisez le ton, le style et la longueur pour des résultats parfaits.",
  "home.feature.analytics.title": "Analytique IA",
  "home.feature.analytics.desc":
    "Posez des questions en langage naturel et obtenez des informations instantanées avec des graphiques et des rapports générés automatiquement à partir de vos données.",
  "home.feature.security.title": "Sécurité Entreprise",
  "home.feature.security.desc":
    "RBAC intégré, journalisation d'audit et gestion des données conforme au RGPD. Vos données sont toujours sécurisées et privées.",
  "home.feature.multiLang.title": "Multilingue",
  "home.feature.multiLang.desc":
    "Générez du contenu et travaillez dans plusieurs langues. Support complet d'internationalisation pour les équipes mondiales.",
  "home.feature.flexible.title": "Fournisseurs IA Flexibles",
  "home.feature.flexible.desc":
    "Choisissez parmi OpenAI, Anthropic ou OpenRouter. Changez de fournisseur selon vos besoins et votre budget.",
  "home.howItWorks.title": "Commencez en quelques minutes",
  "home.howItWorks.subtitle": "Intégration simple, résultats puissants",
  "home.howItWorks.step1.title": "Inscrivez-vous",
  "home.howItWorks.step1.desc":
    "Créez votre compte en quelques secondes. Aucune carte de crédit requise pour commencer.",
  "home.howItWorks.step2.title": "Téléchargez et Traitez",
  "home.howItWorks.step2.desc":
    "Téléchargez vos documents ou commencez à générer du contenu avec nos outils IA.",
  "home.howItWorks.step3.title": "Obtenez des Informations",
  "home.howItWorks.step3.desc":
    "Laissez l'IA analyser, résumer et générer des informations à partir de vos données instantanément.",
  "home.stats.title": "Approuvé par des équipes du monde entier",
  "home.stats.subtitle":
    "Rejoignez des milliers d'entreprises utilisant notre plateforme IA",
  "home.stats.uptime": "SLA de Disponibilité",
  "home.stats.operations": "Opérations IA",
  "home.stats.customers": "Clients Satisfaits",
  "home.stats.support": "Support",
  "home.testimonials.title": "Ce que disent nos clients",
  "home.testimonial1.name": "Jean Dupont",
  "home.testimonial1.role": "PDG, TechCorp",
  "home.testimonial1.text":
    "Cette plateforme a transformé notre façon de gérer les documents. La fonction de chat IA est incroyable !",
  "home.testimonial2.name": "Sophie Martin",
  "home.testimonial2.role": "Directrice Marketing",
  "home.testimonial2.text":
    "La génération de contenu nous fait gagner des heures chaque semaine. La qualité est constamment excellente.",
  "home.testimonial3.name": "Pierre Dubois",
  "home.testimonial3.role": "Analyste de Données",
  "home.testimonial3.text":
    "L'Analytique IA me permet d'interroger les données sans écrire de SQL. C'est révolutionnaire pour notre équipe.",
  "home.finalCta.title": "Prêt à booster votre flux de travail ?",
  "home.finalCta.subtitle":
    "Rejoignez des milliers d'équipes utilisant déjà notre plateforme IA. Commencez gratuitement, aucune carte de crédit requise.",
  // Features page
  "features.meta.title": "Fonctionnalités - Plateforme SaaS alimentée par l'IA",
  "features.meta.description":
    "Découvrez des fonctionnalités IA puissantes incluant l'intelligence documentaire, la génération de contenu, l'analytique et plus encore.",
  "features.hero.badge": "🚀 Alimenté par GPT-4 et Claude",
  "features.hero.title": "Des superpouvoirs IA pour votre entreprise",
  "features.hero.subtitle":
    "Tout ce dont vous avez besoin pour construire, faire évoluer et gérer une application SaaS alimentée par l'IA. Du traitement de documents à la génération de contenu et l'analytique.",
  "features.ai.title": "Fonctionnalités Alimentées par l'IA",
  "features.ai.subtitle":
    "Capacités IA prêtes pour la production qui génèrent une réelle valeur commerciale",
  "features.ai.docIntel.title": "Intelligence Documentaire IA",
  "features.ai.docIntel.desc":
    "Téléchargez des documents et laissez l'IA extraire des informations, résumer le contenu et activer la recherche intelligente. Discutez avec vos documents grâce à la technologie RAG.",
  "features.ai.contentGen.title": "Génération de Contenu IA",
  "features.ai.contentGen.desc":
    "Générez des articles de blog, du contenu marketing, des publications sur les réseaux sociaux et des e-mails avec l'IA. Choisissez le ton, le style et la longueur pour des résultats parfaits.",
  "features.ai.analytics.title": "Analytique IA",
  "features.ai.analytics.desc":
    "Posez des questions en langage naturel et obtenez des informations instantanées, des graphiques et des rapports à partir de vos données. Aucune connaissance SQL requise.",
  "features.ai.search.title": "Recherche Sémantique",
  "features.ai.search.desc":
    "Trouvez exactement ce dont vous avez besoin avec une recherche alimentée par l'IA qui comprend le contexte et le sens, pas seulement les mots-clés.",
  "features.ai.multiLang.title": "Support Multilingue",
  "features.ai.multiLang.desc":
    "Générez du contenu et analysez des données dans plusieurs langues. Support complet i18n pour les équipes mondiales.",
  "features.ai.providers.title": "Fournisseurs IA Flexibles",
  "features.ai.providers.desc":
    "Choisissez parmi OpenAI, Anthropic ou OpenRouter. Changez de fournisseur selon vos besoins et votre budget.",
  "features.tabs.title": "Explorez nos fonctionnalités en détail",
  "features.tabs.subtitle": "Découvrez ce qui rend notre plateforme unique",
  "features.tech.title": "Excellence Technique",
  "features.tech.subtitle":
    "Construit avec des outils modernes et les meilleures pratiques",
  "features.tech.security.title": "Sécurité Entreprise",
  "features.tech.security.desc":
    "RBAC, journalisation d'audit, limitation de débit et gestion des données conforme au RGPD intégrés.",
  "features.tech.realtime.title": "Mises à Jour en Temps Réel",
  "features.tech.realtime.desc":
    "Support WebSocket pour la collaboration en direct et les notifications instantanées dans toute votre équipe.",
  "features.tech.api.title": "API RESTful",
  "features.tech.api.desc":
    "API complète avec documentation OpenAPI. Intégrez avec vos outils et flux de travail existants.",
  "features.tech.ui.title": "UI/UX Moderne",
  "features.tech.ui.desc":
    "Interfaces belles et responsives construites avec React, shadcn/ui et Tailwind CSS v4.",
  "features.tech.usage.title": "Analytique d'Utilisation",
  "features.tech.usage.desc":
    "Tableaux de bord en temps réel montrant l'utilisation de l'IA, les coûts et les métriques de performance.",
  "features.tech.async.title": "Traitement Asynchrone",
  "features.tech.async.desc":
    "Traitement des tâches en arrière-plan avec Celery pour les opérations IA lourdes qui ne bloquent pas votre application.",
  "features.cta.title": "Prêt à découvrir la productivité alimentée par l'IA ?",
  "features.cta.subtitle":
    "Commencez avec notre plan gratuit et évoluez au fur et à mesure",
  // Pricing page
  "pricing.meta.title": "Tarifs - Plateforme SaaS alimentée par l'IA",
  "pricing.meta.description":
    "Tarification simple et transparente pour notre plateforme alimentée par l'IA. Choisissez le plan qui correspond à vos besoins.",
  "pricing.hero.title": "Des tarifs qui évoluent avec vous",
  "pricing.hero.subtitle":
    "Commencez gratuitement, évoluez quand vous avez besoin de plus de puissance. Tous les plans incluent l'accès à nos fonctionnalités IA.",
  "pricing.section.title": "Choisissez votre plan",
  "pricing.section.subtitle":
    "Tous les plans incluent une garantie de remboursement de 14 jours",
  "pricing.plan.free.name": "Gratuit",
  "pricing.plan.free.description":
    "Parfait pour essayer nos fonctionnalités IA",
  "pricing.plan.free.cta": "Commencer Gratuitement",
  "pricing.plan.starter.name": "Démarrage",
  "pricing.plan.starter.description":
    "Idéal pour les particuliers et les petites équipes",
  "pricing.plan.starter.cta": "Commencer",
  "pricing.plan.pro.name": "Professionnel",
  "pricing.plan.pro.description":
    "Pour les entreprises et équipes en croissance",
  "pricing.plan.pro.badge": "Le Plus Populaire",
  "pricing.plan.pro.cta": "Commencer Pro",
  "pricing.plan.business.name": "Entreprise",
  "pricing.plan.business.description":
    "Capacités IA de niveau entreprise",
  "pricing.plan.business.cta": "Contacter les Ventes",
  "pricing.period.month": "mois",
  "pricing.feature.aiCredits": "{count} Crédits IA/mois",
  "pricing.feature.docIntel": "Intelligence Documentaire IA",
  "pricing.feature.contentGen": "Génération de Contenu IA",
  "pricing.feature.analytics": "Analytique IA",
  "pricing.feature.projects": "{count} Projet|{count} Projets",
  "pricing.feature.users": "{count} Utilisateur|{count} Utilisateurs",
  "pricing.feature.storage": "{amount} de Stockage",
  "pricing.feature.api": "Accès API",
  "pricing.feature.fullApi": "Accès API Complet",
  "pricing.faq.title": "Questions fréquemment posées",
  "pricing.faq.credits.q": "Que sont les Crédits IA ?",
  "pricing.faq.credits.a":
    "Les Crédits IA sont utilisés pour alimenter toutes les opérations IA sur notre plateforme. 1 crédit ≈ 1 000 tokens. Le traitement de documents utilise 10-50 crédits, la génération de contenu utilise 5-20 crédits, et les requêtes analytiques utilisent 3-10 crédits par opération.",
  "pricing.faq.change.q": "Puis-je changer de plan à tout moment ?",
  "pricing.faq.change.a":
    "Oui ! Vous pouvez passer à un plan supérieur ou inférieur à tout moment. Les changements prennent effet immédiatement, et nous calculerons au prorata les frais ou crédits.",
  "pricing.faq.exceed.q": "Que se passe-t-il si je dépasse mes crédits ?",
  "pricing.faq.exceed.a":
    "Vous pouvez acheter des packs de crédits supplémentaires ou passer à un plan supérieur. Nous vous avertirons quand vous atteindrez 80% de votre limite mensuelle.",
  "pricing.faq.refund.q": "Offrez-vous des remboursements ?",
  "pricing.faq.refund.a":
    "Oui ! Nous offrons une garantie de remboursement de 14 jours sur tous les plans payants. Si vous n'êtes pas satisfait, nous vous rembourserons intégralement.",
  "pricing.faq.apiKey.q": "Puis-je utiliser ma propre clé API OpenAI ?",
  "pricing.faq.apiKey.a":
    "Les utilisateurs du plan Entreprise peuvent connecter leurs propres clés API pour OpenAI, Anthropic ou OpenRouter pour réduire les coûts et avoir un contrôle total sur leur utilisation de l'IA.",
  "pricing.cta.title": "Prêt à commencer ?",
  "pricing.cta.subtitle":
    "Rejoignez des milliers d'équipes utilisant déjà notre plateforme IA",
  "pricing.cta.primary": "Commencer l'Essai Gratuit",
  "pricing.cta.secondary": "Contacter les Ventes",
};

export default FRLocale;
