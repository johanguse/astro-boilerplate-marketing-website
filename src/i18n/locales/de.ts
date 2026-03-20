import type { I18nStrings } from "@/i18n/types";

const baseStrings = {
  "site.title": "KI-gestützte SaaS-Plattform",
  "site.desc":
    "Transformieren Sie Ihr Unternehmen mit KI-gestützter Dokumentenintelligenz, Content-Generierung und Analytik",
};

const DELocale: I18nStrings = {
  ...baseStrings,
  "hero.title": "Hallo",
  "hero.body": `
        Eine moderne SaaS-Plattform mit KI-gestützten Funktionen für
        Dokumentenverarbeitung, Content-Generierung und Analytik. Entwickelt
        mit Best Practices und standardmäßiger Barrierefreiheit.
`,
  "hero.beforeReadme": "Lesen Sie die Blog-Beiträge oder schauen Sie sich",
  "hero.readme": "README",
  "hero.afterReadme": "für weitere Informationen an.",
  copy: "kopieren",
  copied: "kopiert",
  by: "von",
  about: "Über uns",
  socialLinks: "Soziale Links",
  home: "Startseite",
  blog: "Blog",
  posts: "Beiträge",
  "posts.desc": "Alle Artikel, die ich veröffentlicht habe.",
  tag: "Tag",
  "tag.desc": 'Alle Artikel mit dem Tag "{name}".',
  tags: "Tags",
  "tags.desc": "Alle in Beiträgen verwendeten Tags",
  archives: "Archiv",
  "archives.desc": "Alle Artikel, die ich archiviert habe.",
  featured: "Hervorgehoben",
  recentPosts: "Neueste Beiträge",
  tableOfContents: "Inhaltsverzeichnis",
  "tableOfContents.desc": "Inhaltsverzeichnis öffnen",
  allPosts: "Alle Beiträge",
  search: "Suchen",
  "search.desc": "Beliebigen Artikel suchen",
  "search.placeholder": "Nach allem suchen",
  pages: "Seiten",
  page: "Seite",
  pageWithNo: "Seite {no}",
  "navigation.goBack": "Zurück",
  "navigation.goBackHome": "Zurück zur Startseite",
  "navigation.backToTop": "Nach oben",
  "navigation.nextPost": "Nächster Beitrag",
  "navigation.prevPost": "Vorheriger Beitrag",
  "relatedPosts.title": "Verwandte Beiträge",
  pageNotFound: "Seite nicht gefunden",
  notFound: "Nicht gefunden",
  rssFeed: "RSS-Feed",
  suggestChanges: "Änderungen vorschlagen",
  toggleLightAndDark: "Hell- und Dunkelmodus umschalten",
  "pagination.prev": "Zurück",
  "pagination.next": "Weiter",
  "footer.text": "Copyright © {year} | Alle Rechte vorbehalten",
  "date.published": "Veröffentlicht",
  "date.updated": "Aktualisiert",
  "date.month.1": "Januar",
  "date.month.2": "Februar",
  "date.month.3": "März",
  "date.month.4": "April",
  "date.month.5": "Mai",
  "date.month.6": "Juni",
  "date.month.7": "Juli",
  "date.month.8": "August",
  "date.month.9": "September",
  "date.month.10": "Oktober",
  "date.month.11": "November",
  "date.month.12": "Dezember",
  "socials.github": `${baseStrings["site.title"]} auf Github`,
  "socials.facebook": `${baseStrings["site.title"]} auf Facebook`,
  "socials.instagram": `${baseStrings["site.title"]} auf Instagram`,
  "socials.linkedin": `${baseStrings["site.title"]} auf LinkedIn`,
  "socials.mail": `E-Mail an ${baseStrings["site.title"]} senden`,
  "socials.x": `${baseStrings["site.title"]} auf X`,
  "socials.twitch": `${baseStrings["site.title"]} auf Twitch`,
  "socials.youtube": `${baseStrings["site.title"]} auf Youtube`,
  "socials.whatsapp": `${baseStrings["site.title"]} auf Whatsapp`,
  "socials.snapchat": `${baseStrings["site.title"]} auf Snapchat`,
  "socials.pinterest": `${baseStrings["site.title"]} auf Pinterest`,
  "socials.tiktok": `${baseStrings["site.title"]} auf TikTok`,
  "socials.codepen": `${baseStrings["site.title"]} auf CodePen`,
  "socials.discord": `${baseStrings["site.title"]} auf Discord`,
  "socials.gitlab": `${baseStrings["site.title"]} auf GitLab`,
  "socials.reddit": `${baseStrings["site.title"]} auf Reddit`,
  "socials.skype": `${baseStrings["site.title"]} auf Skype`,
  "socials.steam": `${baseStrings["site.title"]} auf Steam`,
  "socials.telegram": `${baseStrings["site.title"]} auf Telegram`,
  "socials.mastodon": `${baseStrings["site.title"]} auf Mastodon`,
  "sharePost.desc": "Diesen Beitrag teilen auf",
  "sharePost.on": "Diesen Beitrag teilen auf {media}",
  "sharePost.via": "Diesen Beitrag teilen via {media}",
  "a11y.skipToContent": "Zum Inhalt springen",
  "a11y.rssFeed": "rss-feed",
  "a11y.openMenu": "Menü öffnen",
  "a11y.closeMenu": "Menü schließen",
  "a11y.archives": "archiv",
  "a11y.search": "suchen",
  "a11y.themeButtonDefaultLabel": "auto",
  "a11y.pagination": "Seitennavigation",
  "a11y.breadcrumb": "Brotkrümelnavigation",
  "a11y.languagePicker": "Sprachauswahl",
  features: "Funktionen",
  pricing: "Preise",
  signIn: "Anmelden",
  startFree: "Kostenlos Starten",
  "cta.startFreeTrial": "Kostenlose Testversion Starten",
  "cta.viewDemo": "Demo Ansehen",
  "cta.viewPricing": "Preise Ansehen",
  "home.hero.title": "KI-Superkräfte für Ihr Unternehmen",
  "home.hero.subtitle":
    "Transformieren Sie Ihren Workflow mit KI-gestützter Dokumentenintelligenz, Content-Erstellung und Analytik. Starten Sie kostenlos, skalieren Sie mit Ihrem Wachstum.",
  "home.hero.badge": "🚀 Angetrieben von GPT-4 & Claude",
  "home.features.title": "Alles, was Sie zum Erfolg brauchen",
  "home.features.subtitle":
    "Produktionsreife KI-Funktionen, die echten Geschäftswert liefern",
  "home.feature.docIntel.title": "Dokumentenintelligenz",
  "home.feature.docIntel.desc":
    "Laden Sie Dokumente hoch und verarbeiten Sie sie mit KI. Extrahieren Sie Erkenntnisse, Zusammenfassungen und chatten Sie mit Ihren Dateien mithilfe fortschrittlicher RAG-Technologie.",
  "home.feature.contentGen.title": "Content-Erstellung",
  "home.feature.contentGen.desc":
    "Erstellen Sie Blog-Posts, Marketing-Texte und Social-Media-Inhalte in Sekunden. Passen Sie Ton, Stil und Länge für perfekte Ergebnisse an.",
  "home.feature.analytics.title": "KI-Analytik",
  "home.feature.analytics.desc":
    "Stellen Sie Fragen in natürlicher Sprache und erhalten Sie sofortige Erkenntnisse mit automatisch generierten Diagrammen und Berichten aus Ihren Daten.",
  "home.feature.security.title": "Unternehmenssicherheit",
  "home.feature.security.desc":
    "Integrierte RBAC, Audit-Protokollierung und DSGVO-konforme Datenverarbeitung. Ihre Daten sind immer sicher und privat.",
  "home.feature.multiLang.title": "Mehrsprachig",
  "home.feature.multiLang.desc":
    "Generieren Sie Inhalte und arbeiten Sie in mehreren Sprachen. Vollständige Internationalisierungsunterstützung für globale Teams.",
  "home.feature.flexible.title": "Flexible KI-Anbieter",
  "home.feature.flexible.desc":
    "Wählen Sie zwischen OpenAI, Anthropic oder OpenRouter. Wechseln Sie Anbieter je nach Bedarf und Budget.",
  "home.howItWorks.title": "In wenigen Minuten loslegen",
  "home.howItWorks.subtitle":
    "Einfache Integration, leistungsstarke Ergebnisse",
  "home.howItWorks.step1.title": "Anmelden",
  "home.howItWorks.step1.desc":
    "Erstellen Sie Ihr Konto in Sekunden. Keine Kreditkarte erforderlich, um zu starten.",
  "home.howItWorks.step2.title": "Hochladen & Verarbeiten",
  "home.howItWorks.step2.desc":
    "Laden Sie Ihre Dokumente hoch oder beginnen Sie mit der Erstellung von Inhalten mit unseren KI-Tools.",
  "home.howItWorks.step3.title": "Erkenntnisse Erhalten",
  "home.howItWorks.step3.desc":
    "Lassen Sie KI Ihre Daten sofort analysieren, zusammenfassen und Erkenntnisse generieren.",
  "home.stats.title": "Vertraut von Teams weltweit",
  "home.stats.subtitle":
    "Schließen Sie sich Tausenden von Unternehmen an, die unsere KI-Plattform nutzen",
  "home.stats.uptime": "Verfügbarkeits-SLA",
  "home.stats.operations": "KI-Operationen",
  "home.stats.customers": "Zufriedene Kunden",
  "home.stats.support": "Support",
  "home.testimonials.title": "Was unsere Kunden sagen",
  "home.testimonial1.name": "Hans Schmidt",
  "home.testimonial1.role": "CEO, TechCorp",
  "home.testimonial1.text":
    "Diese Plattform hat verändert, wie wir mit Dokumenten umgehen. Die KI-Chat-Funktion ist unglaublich!",
  "home.testimonial2.name": "Maria Müller",
  "home.testimonial2.role": "Marketing-Direktorin",
  "home.testimonial2.text":
    "Content-Erstellung spart uns jede Woche Stunden. Die Qualität ist durchweg hervorragend.",
  "home.testimonial3.name": "Thomas Weber",
  "home.testimonial3.role": "Datenanalyst",
  "home.testimonial3.text":
    "KI-Analytik ermöglicht es mir, Daten abzufragen, ohne SQL zu schreiben. Ein Game-Changer für unser Team.",
  "home.finalCta.title": "Bereit, Ihren Workflow zu optimieren?",
  "home.finalCta.subtitle":
    "Schließen Sie sich Tausenden von Teams an, die bereits unsere KI-Plattform nutzen. Starten Sie kostenlos, keine Kreditkarte erforderlich.",
  // Features page
  "features.meta.title": "Funktionen - KI-gestützte SaaS-Plattform",
  "features.meta.description":
    "Entdecken Sie leistungsstarke KI-Funktionen wie Dokumentenintelligenz, Content-Generierung, Analytik und mehr.",
  "features.hero.badge": "🚀 Angetrieben von GPT-4 & Claude",
  "features.hero.title": "KI-Superkräfte für Ihr Unternehmen",
  "features.hero.subtitle":
    "Alles, was Sie brauchen, um eine KI-gestützte SaaS-Anwendung zu erstellen, zu skalieren und zu verwalten. Von der Dokumentenverarbeitung bis zur Content-Erstellung und Analytik.",
  "features.ai.title": "KI-gestützte Funktionen",
  "features.ai.subtitle":
    "Produktionsreife KI-Fähigkeiten, die echten Geschäftswert liefern",
  "features.ai.docIntel.title": "KI-Dokumentenintelligenz",
  "features.ai.docIntel.desc":
    "Laden Sie Dokumente hoch und lassen Sie die KI Erkenntnisse extrahieren, Inhalte zusammenfassen und intelligente Suche ermöglichen. Chatten Sie mit Ihren Dokumenten mithilfe von RAG-Technologie.",
  "features.ai.contentGen.title": "KI-Content-Generierung",
  "features.ai.contentGen.desc":
    "Generieren Sie Blog-Posts, Marketing-Texte, Social-Media-Inhalte und E-Mails mit KI. Wählen Sie Ton, Stil und Länge für perfekte Ergebnisse.",
  "features.ai.analytics.title": "KI-Analytik",
  "features.ai.analytics.desc":
    "Stellen Sie Fragen in natürlicher Sprache und erhalten Sie sofortige Erkenntnisse, Diagramme und Berichte aus Ihren Daten. Keine SQL-Kenntnisse erforderlich.",
  "features.ai.search.title": "Semantische Suche",
  "features.ai.search.desc":
    "Finden Sie genau das, was Sie brauchen, mit KI-gestützter Suche, die Kontext und Bedeutung versteht, nicht nur Schlüsselwörter.",
  "features.ai.multiLang.title": "Mehrsprachige Unterstützung",
  "features.ai.multiLang.desc":
    "Generieren Sie Inhalte und analysieren Sie Daten in mehreren Sprachen. Vollständige i18n-Unterstützung für globale Teams.",
  "features.ai.providers.title": "Flexible KI-Anbieter",
  "features.ai.providers.desc":
    "Wählen Sie zwischen OpenAI, Anthropic oder OpenRouter. Wechseln Sie Anbieter je nach Bedarf und Budget.",
  "features.tabs.title": "Erkunden Sie unsere Funktionen im Detail",
  "features.tabs.subtitle": "Entdecken Sie, was unsere Plattform einzigartig macht",
  "features.tech.title": "Technische Exzellenz",
  "features.tech.subtitle":
    "Entwickelt mit modernen Tools und Best Practices",
  "features.tech.security.title": "Unternehmenssicherheit",
  "features.tech.security.desc":
    "Integrierte RBAC, Audit-Protokollierung, Rate-Limiting und DSGVO-konforme Datenverarbeitung.",
  "features.tech.realtime.title": "Echtzeit-Updates",
  "features.tech.realtime.desc":
    "WebSocket-Unterstützung für Live-Zusammenarbeit und sofortige Benachrichtigungen in Ihrem Team.",
  "features.tech.api.title": "RESTful API",
  "features.tech.api.desc":
    "Umfassende API mit OpenAPI-Dokumentation. Integrieren Sie mit Ihren vorhandenen Tools und Workflows.",
  "features.tech.ui.title": "Modernes UI/UX",
  "features.tech.ui.desc":
    "Schöne, responsive Oberflächen, entwickelt mit React, shadcn/ui und Tailwind CSS v4.",
  "features.tech.usage.title": "Nutzungsanalytik",
  "features.tech.usage.desc":
    "Echtzeit-Dashboards mit KI-Nutzung, Kosten und Leistungsmetriken.",
  "features.tech.async.title": "Asynchrone Verarbeitung",
  "features.tech.async.desc":
    "Hintergrund-Job-Verarbeitung mit Celery für schwere KI-Operationen, die Ihre App nicht blockieren.",
  "features.cta.title": "Bereit für KI-gestützte Produktivität?",
  "features.cta.subtitle":
    "Starten Sie mit unserem kostenlosen Plan und upgraden Sie mit Ihrem Wachstum",
  // Pricing page
  "pricing.meta.title": "Preise - KI-gestützte SaaS-Plattform",
  "pricing.meta.description":
    "Einfache, transparente Preise für unsere KI-gestützte Plattform. Wählen Sie den Plan, der zu Ihren Bedürfnissen passt.",
  "pricing.hero.title": "Preise, die mit Ihnen wachsen",
  "pricing.hero.subtitle":
    "Starten Sie kostenlos, upgraden Sie, wenn Sie mehr Leistung brauchen. Alle Pläne beinhalten Zugang zu unseren KI-Funktionen.",
  "pricing.section.title": "Wählen Sie Ihren Plan",
  "pricing.section.subtitle":
    "Alle Pläne beinhalten eine 14-tägige Geld-zurück-Garantie",
  "pricing.plan.free.name": "Kostenlos",
  "pricing.plan.free.description":
    "Perfekt zum Ausprobieren unserer KI-Funktionen",
  "pricing.plan.free.cta": "Kostenlos Starten",
  "pricing.plan.starter.name": "Starter",
  "pricing.plan.starter.description":
    "Ideal für Einzelpersonen und kleine Teams",
  "pricing.plan.starter.cta": "Loslegen",
  "pricing.plan.pro.name": "Professionell",
  "pricing.plan.pro.description":
    "Für wachsende Unternehmen und Teams",
  "pricing.plan.pro.badge": "Am Beliebtesten",
  "pricing.plan.pro.cta": "Pro Starten",
  "pricing.plan.business.name": "Unternehmen",
  "pricing.plan.business.description":
    "KI-Fähigkeiten auf Unternehmensebene",
  "pricing.plan.business.cta": "Vertrieb Kontaktieren",
  "pricing.period.month": "Monat",
  "pricing.feature.aiCredits": "{count} KI-Credits/Monat",
  "pricing.feature.docIntel": "KI-Dokumentenintelligenz",
  "pricing.feature.contentGen": "KI-Content-Generierung",
  "pricing.feature.analytics": "KI-Analytik",
  "pricing.feature.projects": "{count} Projekt|{count} Projekte",
  "pricing.feature.users": "{count} Benutzer|{count} Benutzer",
  "pricing.feature.storage": "{amount} Speicher",
  "pricing.feature.api": "API-Zugang",
  "pricing.feature.fullApi": "Vollständiger API-Zugang",
  "pricing.faq.title": "Häufig gestellte Fragen",
  "pricing.faq.credits.q": "Was sind KI-Credits?",
  "pricing.faq.credits.a":
    "KI-Credits werden verwendet, um alle KI-Operationen auf unserer Plattform zu betreiben. 1 Credit ≈ 1.000 Token. Dokumentenverarbeitung verbraucht 10-50 Credits, Content-Generierung 5-20 Credits und Analytik-Abfragen 3-10 Credits pro Vorgang.",
  "pricing.faq.change.q": "Kann ich jederzeit den Plan wechseln?",
  "pricing.faq.change.a":
    "Ja! Sie können jederzeit upgraden oder downgraden. Änderungen werden sofort wirksam, und wir berechnen alle Gebühren oder Credits anteilig.",
  "pricing.faq.exceed.q": "Was passiert, wenn ich meine Credits überschreite?",
  "pricing.faq.exceed.a":
    "Sie können zusätzliche Credit-Pakete kaufen oder auf einen höheren Plan upgraden. Wir benachrichtigen Sie, wenn Sie 80% Ihres monatlichen Limits erreichen.",
  "pricing.faq.refund.q": "Bieten Sie Rückerstattungen an?",
  "pricing.faq.refund.a":
    "Ja! Wir bieten eine 14-tägige Geld-zurück-Garantie für alle bezahlten Pläne. Wenn Sie nicht zufrieden sind, erstatten wir Ihre Zahlung vollständig.",
  "pricing.faq.apiKey.q": "Kann ich meinen eigenen OpenAI API-Schlüssel verwenden?",
  "pricing.faq.apiKey.a":
    "Benutzer des Unternehmensplans können ihre eigenen API-Schlüssel für OpenAI, Anthropic oder OpenRouter verbinden, um Kosten zu reduzieren und volle Kontrolle über ihre KI-Nutzung zu haben.",
  "pricing.cta.title": "Bereit loszulegen?",
  "pricing.cta.subtitle":
    "Schließen Sie sich Tausenden von Teams an, die bereits unsere KI-Plattform nutzen",
  "pricing.cta.primary": "Kostenlose Testversion Starten",
  "pricing.cta.secondary": "Vertrieb Kontaktieren",
};

export default DELocale;
