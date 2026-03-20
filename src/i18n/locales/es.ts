import type { I18nStrings } from "@/i18n/types";

const baseStrings = {
  "site.title": "Plataforma SaaS con IA",
  "site.desc":
    "Transforme su negocio con inteligencia de documentos, generación de contenido y análisis impulsados por IA",
};

const ESLocale: I18nStrings = {
  ...baseStrings,
  "hero.title": "Hola",
  "hero.body": `
        Una plataforma SaaS moderna con características impulsadas por IA para
        procesamiento de documentos, generación de contenido y análisis. Construida
        con las mejores prácticas y accesibilidad incluida de fábrica.
`,
  "hero.beforeReadme": "Lee las publicaciones del blog o consulta",
  "hero.readme": "README",
  "hero.afterReadme": "para más información.",
  copy: "copiar",
  copied: "copiado",
  by: "por",
  about: "Acerca de",
  socialLinks: "Enlaces Sociales",
  home: "Inicio",
  blog: "Blog",
  posts: "Publicaciones",
  "posts.desc": "Todos los artículos que he publicado.",
  tag: "Etiqueta",
  "tag.desc": 'Todos los artículos con la etiqueta "{name}".',
  tags: "Etiquetas",
  "tags.desc": "Todas las etiquetas utilizadas en las publicaciones",
  archives: "Archivos",
  "archives.desc": "Todos los artículos que he archivado.",
  featured: "Destacado",
  recentPosts: "Publicaciones Recientes",
  tableOfContents: "Tabla de contenidos",
  "tableOfContents.desc": "Abrir tabla de contenidos",
  allPosts: "Todas las Publicaciones",
  search: "Buscar",
  "search.desc": "Buscar cualquier artículo",
  "search.placeholder": "Buscar cualquier cosa",
  pages: "Páginas",
  page: "Página",
  pageWithNo: "Página {no}",
  "navigation.goBack": "Volver",
  "navigation.goBackHome": "Volver al Inicio",
  "navigation.backToTop": "Volver Arriba",
  "navigation.nextPost": "Siguiente Publicación",
  "navigation.prevPost": "Publicación Anterior",
  "relatedPosts.title": "Publicaciones Relacionadas",
  pageNotFound: "Página No Encontrada",
  notFound: "No Encontrado",
  rssFeed: "Feed RSS",
  suggestChanges: "Sugerir Cambios",
  toggleLightAndDark: "Alternar claro y oscuro",
  "pagination.prev": "Anterior",
  "pagination.next": "Siguiente",
  "footer.text": "Copyright © {year} | Todos los derechos reservados",
  "date.published": "Publicado",
  "date.updated": "Actualizado",
  "date.month.1": "Enero",
  "date.month.2": "Febrero",
  "date.month.3": "Marzo",
  "date.month.4": "Abril",
  "date.month.5": "Mayo",
  "date.month.6": "Junio",
  "date.month.7": "Julio",
  "date.month.8": "Agosto",
  "date.month.9": "Septiembre",
  "date.month.10": "Octubre",
  "date.month.11": "Noviembre",
  "date.month.12": "Diciembre",
  "socials.github": `${baseStrings["site.title"]} en Github`,
  "socials.facebook": `${baseStrings["site.title"]} en Facebook`,
  "socials.instagram": `${baseStrings["site.title"]} en Instagram`,
  "socials.linkedin": `${baseStrings["site.title"]} en LinkedIn`,
  "socials.mail": `Enviar un correo a ${baseStrings["site.title"]}`,
  "socials.x": `${baseStrings["site.title"]} en X`,
  "socials.twitch": `${baseStrings["site.title"]} en Twitch`,
  "socials.youtube": `${baseStrings["site.title"]} en Youtube`,
  "socials.whatsapp": `${baseStrings["site.title"]} en Whatsapp`,
  "socials.snapchat": `${baseStrings["site.title"]} en Snapchat`,
  "socials.pinterest": `${baseStrings["site.title"]} en Pinterest`,
  "socials.tiktok": `${baseStrings["site.title"]} en TikTok`,
  "socials.codepen": `${baseStrings["site.title"]} en CodePen`,
  "socials.discord": `${baseStrings["site.title"]} en Discord`,
  "socials.gitlab": `${baseStrings["site.title"]} en GitLab`,
  "socials.reddit": `${baseStrings["site.title"]} en Reddit`,
  "socials.skype": `${baseStrings["site.title"]} en Skype`,
  "socials.steam": `${baseStrings["site.title"]} en Steam`,
  "socials.telegram": `${baseStrings["site.title"]} en Telegram`,
  "socials.mastodon": `${baseStrings["site.title"]} en Mastodon`,
  "sharePost.desc": "Compartir esta publicación en",
  "sharePost.on": "Compartir esta publicación en {media}",
  "sharePost.via": "Compartir esta publicación vía {media}",
  "a11y.skipToContent": "Saltar al contenido",
  "a11y.rssFeed": "feed rss",
  "a11y.openMenu": "Abrir Menú",
  "a11y.closeMenu": "Cerrar Menú",
  "a11y.archives": "archivos",
  "a11y.search": "buscar",
  "a11y.themeButtonDefaultLabel": "auto",
  "a11y.pagination": "Paginación",
  "a11y.breadcrumb": "ruta de navegación",
  "a11y.languagePicker": "Selector de Idioma",
  features: "Características",
  pricing: "Precios",
  signIn: "Iniciar Sesión",
  startFree: "Comenzar Gratis",
  "cta.startFreeTrial": "Iniciar Prueba Gratuita",
  "cta.viewDemo": "Ver Demo",
  "cta.viewPricing": "Ver Precios",
  "home.hero.title": "Superpoderes de IA para tu negocio",
  "home.hero.subtitle":
    "Transforma tu flujo de trabajo con inteligencia documental, generación de contenido y análisis impulsados por IA. Comienza gratis, escala mientras creces.",
  "home.hero.badge": "🚀 Impulsado por GPT-4 y Claude",
  "home.features.title": "Todo lo que necesitas para tener éxito",
  "home.features.subtitle":
    "Funciones de IA listas para producción que generan valor empresarial real",
  "home.feature.docIntel.title": "Inteligencia Documental",
  "home.feature.docIntel.desc":
    "Sube y procesa documentos con IA. Extrae información, resúmenes y chatea con tus archivos usando tecnología RAG avanzada.",
  "home.feature.contentGen.title": "Generación de Contenido",
  "home.feature.contentGen.desc":
    "Crea publicaciones de blog, textos de marketing y contenido para redes sociales en segundos. Personaliza el tono, estilo y longitud para obtener resultados perfectos.",
  "home.feature.analytics.title": "Análisis con IA",
  "home.feature.analytics.desc":
    "Haz preguntas en lenguaje natural y obtén información instantánea con gráficos y reportes generados automáticamente a partir de tus datos.",
  "home.feature.security.title": "Seguridad Empresarial",
  "home.feature.security.desc":
    "RBAC integrado, registro de auditoría y manejo de datos conforme a GDPR. Tus datos siempre están seguros y privados.",
  "home.feature.multiLang.title": "Multiidioma",
  "home.feature.multiLang.desc":
    "Genera contenido y trabaja en múltiples idiomas. Soporte completo de internacionalización para equipos globales.",
  "home.feature.flexible.title": "Proveedores de IA Flexibles",
  "home.feature.flexible.desc":
    "Elige entre OpenAI, Anthropic u OpenRouter. Cambia de proveedor según tus necesidades y presupuesto.",
  "home.howItWorks.title": "Comienza en minutos",
  "home.howItWorks.subtitle": "Integración simple, resultados poderosos",
  "home.howItWorks.step1.title": "Regístrate",
  "home.howItWorks.step1.desc":
    "Crea tu cuenta en segundos. No se requiere tarjeta de crédito para comenzar.",
  "home.howItWorks.step2.title": "Sube y Procesa",
  "home.howItWorks.step2.desc":
    "Sube tus documentos o comienza a generar contenido con nuestras herramientas de IA.",
  "home.howItWorks.step3.title": "Obtén Información",
  "home.howItWorks.step3.desc":
    "Deja que la IA analice, resuma y genere información de tus datos al instante.",
  "home.stats.title": "Confiado por equipos de todo el mundo",
  "home.stats.subtitle":
    "Únete a miles de empresas que usan nuestra plataforma de IA",
  "home.stats.uptime": "SLA de Tiempo de Actividad",
  "home.stats.operations": "Operaciones de IA",
  "home.stats.customers": "Clientes Satisfechos",
  "home.stats.support": "Soporte",
  "home.testimonials.title": "Lo que dicen nuestros clientes",
  "home.testimonial1.name": "Juan Pérez",
  "home.testimonial1.role": "CEO, TechCorp",
  "home.testimonial1.text":
    "Esta plataforma ha transformado cómo manejamos documentos. ¡La función de chat con IA es increíble!",
  "home.testimonial2.name": "María García",
  "home.testimonial2.role": "Directora de Marketing",
  "home.testimonial2.text":
    "La generación de contenido nos ahorra horas cada semana. La calidad es consistentemente excelente.",
  "home.testimonial3.name": "Miguel Rodríguez",
  "home.testimonial3.role": "Analista de Datos",
  "home.testimonial3.text":
    "Los Análisis con IA me permiten consultar datos sin escribir SQL. Es un cambio radical para nuestro equipo.",
  "home.finalCta.title": "¿Listo para potenciar tu flujo de trabajo?",
  "home.finalCta.subtitle":
    "Únete a miles de equipos que ya usan nuestra plataforma de IA. Comienza gratis, no se requiere tarjeta de crédito.",
  // Features page
  "features.meta.title": "Características - Plataforma SaaS con IA",
  "features.meta.description":
    "Descubre potentes funciones de IA incluyendo inteligencia de documentos, generación de contenido, análisis y más.",
  "features.hero.badge": "🚀 Impulsado por GPT-4 y Claude",
  "features.hero.title": "Superpoderes de IA para tu negocio",
  "features.hero.subtitle":
    "Todo lo que necesitas para construir, escalar y gestionar una aplicación SaaS impulsada por IA. Desde procesamiento de documentos hasta generación de contenido y análisis.",
  "features.ai.title": "Funciones Impulsadas por IA",
  "features.ai.subtitle":
    "Capacidades de IA listas para producción que generan valor empresarial real",
  "features.ai.docIntel.title": "Inteligencia de Documentos con IA",
  "features.ai.docIntel.desc":
    "Sube documentos y deja que la IA extraiga información, resuma contenido y habilite búsqueda inteligente. Chatea con tus documentos usando tecnología RAG.",
  "features.ai.contentGen.title": "Generación de Contenido con IA",
  "features.ai.contentGen.desc":
    "Genera publicaciones de blog, textos de marketing, contenido para redes sociales y correos con IA. Elige tono, estilo y longitud para resultados perfectos.",
  "features.ai.analytics.title": "Análisis con IA",
  "features.ai.analytics.desc":
    "Haz preguntas en lenguaje natural y obtén información instantánea, gráficos e informes de tus datos. No se requiere conocimiento de SQL.",
  "features.ai.search.title": "Búsqueda Semántica",
  "features.ai.search.desc":
    "Encuentra exactamente lo que necesitas con búsqueda impulsada por IA que entiende contexto y significado, no solo palabras clave.",
  "features.ai.multiLang.title": "Soporte Multiidioma",
  "features.ai.multiLang.desc":
    "Genera contenido y analiza datos en múltiples idiomas. Soporte completo de i18n para equipos globales.",
  "features.ai.providers.title": "Proveedores de IA Flexibles",
  "features.ai.providers.desc":
    "Elige entre OpenAI, Anthropic u OpenRouter. Cambia de proveedor según tus necesidades y presupuesto.",
  "features.tabs.title": "Explora nuestras funciones en detalle",
  "features.tabs.subtitle": "Descubre qué hace única a nuestra plataforma",
  "features.tech.title": "Excelencia Técnica",
  "features.tech.subtitle":
    "Construido con herramientas modernas y mejores prácticas",
  "features.tech.security.title": "Seguridad Empresarial",
  "features.tech.security.desc":
    "RBAC, registro de auditoría, limitación de velocidad y manejo de datos compatible con GDPR incluidos.",
  "features.tech.realtime.title": "Actualizaciones en Tiempo Real",
  "features.tech.realtime.desc":
    "Soporte WebSocket para colaboración en vivo y notificaciones instantáneas en todo tu equipo.",
  "features.tech.api.title": "API RESTful",
  "features.tech.api.desc":
    "API completa con documentación OpenAPI. Integra con tus herramientas y flujos de trabajo existentes.",
  "features.tech.ui.title": "UI/UX Moderno",
  "features.tech.ui.desc":
    "Interfaces hermosas y responsivas construidas con React, shadcn/ui y Tailwind CSS v4.",
  "features.tech.usage.title": "Análisis de Uso",
  "features.tech.usage.desc":
    "Paneles en tiempo real mostrando uso de IA, costos y métricas de rendimiento.",
  "features.tech.async.title": "Procesamiento Asíncrono",
  "features.tech.async.desc":
    "Procesamiento de trabajos en segundo plano con Celery para operaciones de IA pesadas que no bloquean tu app.",
  "features.cta.title": "¿Listo para experimentar la productividad impulsada por IA?",
  "features.cta.subtitle":
    "Comienza con nuestro plan gratuito y actualiza mientras creces",
  // Pricing page
  "pricing.meta.title": "Precios - Plataforma SaaS con IA",
  "pricing.meta.description":
    "Precios simples y transparentes para nuestra plataforma impulsada por IA. Elige el plan que se adapte a tus necesidades.",
  "pricing.hero.title": "Precios que escalan contigo",
  "pricing.hero.subtitle":
    "Comienza gratis, actualiza cuando necesites más potencia. Todos los planes incluyen acceso a nuestras funciones de IA.",
  "pricing.section.title": "Elige tu plan",
  "pricing.section.subtitle":
    "Todos los planes incluyen garantía de devolución de 14 días",
  "pricing.plan.free.name": "Gratis",
  "pricing.plan.free.description":
    "Perfecto para probar nuestras funciones de IA",
  "pricing.plan.free.cta": "Comenzar Gratis",
  "pricing.plan.starter.name": "Inicial",
  "pricing.plan.starter.description":
    "Ideal para individuos y equipos pequeños",
  "pricing.plan.starter.cta": "Comenzar",
  "pricing.plan.pro.name": "Profesional",
  "pricing.plan.pro.description": "Para negocios y equipos en crecimiento",
  "pricing.plan.pro.badge": "Más Popular",
  "pricing.plan.pro.cta": "Comenzar Pro",
  "pricing.plan.business.name": "Empresarial",
  "pricing.plan.business.description": "Capacidades de IA de nivel empresarial",
  "pricing.plan.business.cta": "Contactar Ventas",
  "pricing.period.month": "mes",
  "pricing.feature.aiCredits": "{count} Créditos de IA/mes",
  "pricing.feature.docIntel": "Inteligencia de Documentos con IA",
  "pricing.feature.contentGen": "Generación de Contenido con IA",
  "pricing.feature.analytics": "Análisis con IA",
  "pricing.feature.projects": "{count} Proyecto|{count} Proyectos",
  "pricing.feature.users": "{count} Usuario|{count} Usuarios",
  "pricing.feature.storage": "{amount} de Almacenamiento",
  "pricing.feature.api": "Acceso a API",
  "pricing.feature.fullApi": "Acceso Completo a API",
  "pricing.faq.title": "Preguntas frecuentes",
  "pricing.faq.credits.q": "¿Qué son los Créditos de IA?",
  "pricing.faq.credits.a":
    "Los Créditos de IA se usan para impulsar todas las operaciones de IA en nuestra plataforma. 1 crédito ≈ 1,000 tokens. El procesamiento de documentos usa 10-50 créditos, la generación de contenido usa 5-20 créditos, y las consultas de análisis usan 3-10 créditos por operación.",
  "pricing.faq.change.q": "¿Puedo cambiar de plan en cualquier momento?",
  "pricing.faq.change.a":
    "¡Sí! Puedes mejorar o reducir tu plan en cualquier momento. Los cambios tienen efecto inmediato y prorratearemos cualquier cargo o crédito.",
  "pricing.faq.exceed.q": "¿Qué pasa si excedo mis créditos?",
  "pricing.faq.exceed.a":
    "Puedes comprar paquetes de créditos adicionales o actualizar a un plan superior. Te notificaremos cuando alcances el 80% de tu límite mensual.",
  "pricing.faq.refund.q": "¿Ofrecen reembolsos?",
  "pricing.faq.refund.a":
    "¡Sí! Ofrecemos garantía de devolución de 14 días en todos los planes de pago. Si no estás satisfecho, te reembolsaremos el pago completo.",
  "pricing.faq.apiKey.q": "¿Puedo usar mi propia clave de API de OpenAI?",
  "pricing.faq.apiKey.a":
    "Los usuarios del plan Empresarial pueden conectar sus propias claves de API de OpenAI, Anthropic u OpenRouter para reducir costos y tener control total sobre su uso de IA.",
  "pricing.cta.title": "¿Listo para comenzar?",
  "pricing.cta.subtitle":
    "Únete a miles de equipos que ya usan nuestra plataforma de IA",
  "pricing.cta.primary": "Iniciar Prueba Gratuita",
  "pricing.cta.secondary": "Contactar Ventas",
};

export default ESLocale;
