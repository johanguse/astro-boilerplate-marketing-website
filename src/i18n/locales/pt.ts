import type { I18nStrings } from "@/i18n/types";

const baseStrings = {
  "site.title": "Plataforma SaaS com IA",
  "site.desc":
    "Transforme o seu negócio com inteligência de documentos, geração de conteúdo e análise alimentadas por IA",
};

const PTLocale: I18nStrings = {
  ...baseStrings,
  "hero.title": "Olá",
  "hero.body": `
        Uma plataforma SaaS moderna com funcionalidades alimentadas por IA para
        processamento de documentos, geração de conteúdo e análise. Construída
        com as melhores práticas e acessibilidade incluída por padrão.
`,
  "hero.beforeReadme": "Leia as publicações do blog ou consulte",
  "hero.readme": "README",
  "hero.afterReadme": "para mais informações.",
  copy: "copiar",
  copied: "copiado",
  by: "por",
  about: "Sobre",
  socialLinks: "Links Sociais",
  home: "Início",
  blog: "Blog",
  posts: "Publicações",
  "posts.desc": "Todos os artigos que publiquei.",
  tag: "Tag",
  "tag.desc": 'Todos os artigos com a tag "{name}".',
  tags: "Tags",
  "tags.desc": "Todas as tags usadas nas publicações",
  archives: "Arquivos",
  "archives.desc": "Todos os artigos que arquivei.",
  featured: "Destaque",
  recentPosts: "Publicações Recentes",
  tableOfContents: "Índice",
  "tableOfContents.desc": "Abrir índice",
  allPosts: "Todas as Publicações",
  search: "Pesquisar",
  "search.desc": "Pesquisar qualquer artigo",
  "search.placeholder": "Pesquisar qualquer coisa",
  pages: "Páginas",
  page: "Página",
  pageWithNo: "Página {no}",
  "navigation.goBack": "Voltar",
  "navigation.goBackHome": "Voltar ao Início",
  "navigation.backToTop": "Voltar ao Topo",
  "navigation.nextPost": "Próxima Publicação",
  "navigation.prevPost": "Publicação Anterior",
  "relatedPosts.title": "Publicações Relacionadas",
  pageNotFound: "Página Não Encontrada",
  notFound: "Não Encontrado",
  rssFeed: "Feed RSS",
  suggestChanges: "Sugerir Alterações",
  toggleLightAndDark: "Alternar claro e escuro",
  "pagination.prev": "Anterior",
  "pagination.next": "Próximo",
  "footer.text": "Copyright © {year} | Todos os direitos reservados",
  "date.published": "Publicado",
  "date.updated": "Atualizado",
  "date.month.1": "Janeiro",
  "date.month.2": "Fevereiro",
  "date.month.3": "Março",
  "date.month.4": "Abril",
  "date.month.5": "Maio",
  "date.month.6": "Junho",
  "date.month.7": "Julho",
  "date.month.8": "Agosto",
  "date.month.9": "Setembro",
  "date.month.10": "Outubro",
  "date.month.11": "Novembro",
  "date.month.12": "Dezembro",
  "socials.github": `${baseStrings["site.title"]} no Github`,
  "socials.facebook": `${baseStrings["site.title"]} no Facebook`,
  "socials.instagram": `${baseStrings["site.title"]} no Instagram`,
  "socials.linkedin": `${baseStrings["site.title"]} no LinkedIn`,
  "socials.mail": `Enviar um email para ${baseStrings["site.title"]}`,
  "socials.x": `${baseStrings["site.title"]} no X`,
  "socials.twitch": `${baseStrings["site.title"]} no Twitch`,
  "socials.youtube": `${baseStrings["site.title"]} no Youtube`,
  "socials.whatsapp": `${baseStrings["site.title"]} no Whatsapp`,
  "socials.snapchat": `${baseStrings["site.title"]} no Snapchat`,
  "socials.pinterest": `${baseStrings["site.title"]} no Pinterest`,
  "socials.tiktok": `${baseStrings["site.title"]} no TikTok`,
  "socials.codepen": `${baseStrings["site.title"]} no CodePen`,
  "socials.discord": `${baseStrings["site.title"]} no Discord`,
  "socials.gitlab": `${baseStrings["site.title"]} no GitLab`,
  "socials.reddit": `${baseStrings["site.title"]} no Reddit`,
  "socials.skype": `${baseStrings["site.title"]} no Skype`,
  "socials.steam": `${baseStrings["site.title"]} no Steam`,
  "socials.telegram": `${baseStrings["site.title"]} no Telegram`,
  "socials.mastodon": `${baseStrings["site.title"]} no Mastodon`,
  "sharePost.desc": "Partilhar esta publicação em",
  "sharePost.on": "Partilhar esta publicação em {media}",
  "sharePost.via": "Partilhar esta publicação via {media}",
  "a11y.skipToContent": "Saltar para o conteúdo",
  "a11y.rssFeed": "feed rss",
  "a11y.openMenu": "Abrir Menu",
  "a11y.closeMenu": "Fechar Menu",
  "a11y.archives": "arquivos",
  "a11y.search": "pesquisar",
  "a11y.themeButtonDefaultLabel": "auto",
  "a11y.pagination": "Paginação",
  "a11y.breadcrumb": "trilha de navegação",
  "a11y.languagePicker": "Seletor de Idioma",
  features: "Recursos",
  pricing: "Preços",
  signIn: "Entrar",
  startFree: "Começar Grátis",
  "cta.startFreeTrial": "Iniciar Teste Gratuito",
  "cta.viewDemo": "Ver Demo",
  "cta.viewPricing": "Ver Preços",
  "home.hero.title": "Superpoderes de IA para o seu negócio",
  "home.hero.subtitle":
    "Transforme seu fluxo de trabalho com inteligência documental alimentada por IA, geração de conteúdo e análise. Comece grátis, escale conforme você cresce.",
  "home.hero.badge": "🚀 Alimentado por GPT-4 e Claude",
  "home.features.title": "Tudo o que você precisa para ter sucesso",
  "home.features.subtitle":
    "Recursos de IA prontos para produção que geram valor empresarial real",
  "home.feature.docIntel.title": "Inteligência Documental",
  "home.feature.docIntel.desc":
    "Faça upload e processe documentos com IA. Extraia insights, resumos e converse com seus arquivos usando tecnologia RAG avançada.",
  "home.feature.contentGen.title": "Geração de Conteúdo",
  "home.feature.contentGen.desc":
    "Crie posts de blog, textos de marketing e conteúdo para redes sociais em segundos. Personalize tom, estilo e tamanho para resultados perfeitos.",
  "home.feature.analytics.title": "Análise com IA",
  "home.feature.analytics.desc":
    "Faça perguntas em linguagem natural e obtenha insights instantâneos com gráficos e relatórios gerados automaticamente a partir de seus dados.",
  "home.feature.security.title": "Segurança Empresarial",
  "home.feature.security.desc":
    "RBAC integrado, registro de auditoria e tratamento de dados em conformidade com GDPR. Seus dados estão sempre seguros e privados.",
  "home.feature.multiLang.title": "Multilíngue",
  "home.feature.multiLang.desc":
    "Gere conteúdo e trabalhe em vários idiomas. Suporte completo de internacionalização para equipes globais.",
  "home.feature.flexible.title": "Provedores de IA Flexíveis",
  "home.feature.flexible.desc":
    "Escolha entre OpenAI, Anthropic ou OpenRouter. Troque de provedor com base em suas necessidades e orçamento.",
  "home.howItWorks.title": "Comece em minutos",
  "home.howItWorks.subtitle": "Integração simples, resultados poderosos",
  "home.howItWorks.step1.title": "Cadastre-se",
  "home.howItWorks.step1.desc":
    "Crie sua conta em segundos. Não é necessário cartão de crédito para começar.",
  "home.howItWorks.step2.title": "Faça Upload e Processe",
  "home.howItWorks.step2.desc":
    "Faça upload de seus documentos ou comece a gerar conteúdo com nossas ferramentas de IA.",
  "home.howItWorks.step3.title": "Obtenha Insights",
  "home.howItWorks.step3.desc":
    "Deixe a IA analisar, resumir e gerar insights de seus dados instantaneamente.",
  "home.stats.title": "Confiado por equipes em todo o mundo",
  "home.stats.subtitle":
    "Junte-se a milhares de empresas usando nossa plataforma de IA",
  "home.stats.uptime": "SLA de Disponibilidade",
  "home.stats.operations": "Operações de IA",
  "home.stats.customers": "Clientes Satisfeitos",
  "home.stats.support": "Suporte",
  "home.testimonials.title": "O que nossos clientes dizem",
  "home.testimonial1.name": "João Silva",
  "home.testimonial1.role": "CEO, TechCorp",
  "home.testimonial1.text":
    "Esta plataforma transformou como lidamos com documentos. O recurso de chat com IA é incrível!",
  "home.testimonial2.name": "Maria Santos",
  "home.testimonial2.role": "Diretora de Marketing",
  "home.testimonial2.text":
    "A geração de conteúdo nos economiza horas toda semana. A qualidade é consistentemente excelente.",
  "home.testimonial3.name": "Carlos Oliveira",
  "home.testimonial3.role": "Analista de Dados",
  "home.testimonial3.text":
    "A Análise com IA me permite consultar dados sem escrever SQL. É uma mudança de jogo para nossa equipe.",
  "home.finalCta.title": "Pronto para turbinar seu fluxo de trabalho?",
  "home.finalCta.subtitle":
    "Junte-se a milhares de equipes já usando nossa plataforma de IA. Comece grátis, sem necessidade de cartão de crédito.",
  // Features page
  "features.meta.title": "Recursos - Plataforma SaaS com IA",
  "features.meta.description":
    "Descubra recursos poderosos de IA incluindo inteligência de documentos, geração de conteúdo, análises e mais.",
  "features.hero.badge": "🚀 Alimentado por GPT-4 e Claude",
  "features.hero.title": "Superpoderes de IA para seu negócio",
  "features.hero.subtitle":
    "Tudo o que você precisa para construir, escalar e gerenciar uma aplicação SaaS alimentada por IA. Do processamento de documentos à geração de conteúdo e análises.",
  "features.ai.title": "Recursos Alimentados por IA",
  "features.ai.subtitle":
    "Capacidades de IA prontas para produção que geram valor empresarial real",
  "features.ai.docIntel.title": "Inteligência de Documentos com IA",
  "features.ai.docIntel.desc":
    "Faça upload de documentos e deixe a IA extrair insights, resumir conteúdo e habilitar busca inteligente. Converse com seus documentos usando tecnologia RAG.",
  "features.ai.contentGen.title": "Geração de Conteúdo com IA",
  "features.ai.contentGen.desc":
    "Gere posts de blog, textos de marketing, conteúdo para redes sociais e e-mails com IA. Escolha tom, estilo e tamanho para resultados perfeitos.",
  "features.ai.analytics.title": "Análises com IA",
  "features.ai.analytics.desc":
    "Faça perguntas em linguagem natural e obtenha insights instantâneos, gráficos e relatórios de seus dados. Conhecimento de SQL não é necessário.",
  "features.ai.search.title": "Busca Semântica",
  "features.ai.search.desc":
    "Encontre exatamente o que precisa com busca alimentada por IA que entende contexto e significado, não apenas palavras-chave.",
  "features.ai.multiLang.title": "Suporte Multilíngue",
  "features.ai.multiLang.desc":
    "Gere conteúdo e analise dados em múltiplos idiomas. Suporte completo de i18n para equipes globais.",
  "features.ai.providers.title": "Provedores de IA Flexíveis",
  "features.ai.providers.desc":
    "Escolha entre OpenAI, Anthropic ou OpenRouter. Troque de provedor com base em suas necessidades e orçamento.",
  "features.tabs.title": "Explore nossos recursos em detalhes",
  "features.tabs.subtitle": "Descubra o que torna nossa plataforma única",
  "features.tech.title": "Excelência Técnica",
  "features.tech.subtitle":
    "Construído com ferramentas modernas e melhores práticas",
  "features.tech.security.title": "Segurança Empresarial",
  "features.tech.security.desc":
    "RBAC, registro de auditoria, limitação de taxa e tratamento de dados em conformidade com GDPR incluídos.",
  "features.tech.realtime.title": "Atualizações em Tempo Real",
  "features.tech.realtime.desc":
    "Suporte WebSocket para colaboração ao vivo e notificações instantâneas em toda sua equipe.",
  "features.tech.api.title": "API RESTful",
  "features.tech.api.desc":
    "API completa com documentação OpenAPI. Integre com suas ferramentas e fluxos de trabalho existentes.",
  "features.tech.ui.title": "UI/UX Moderno",
  "features.tech.ui.desc":
    "Interfaces bonitas e responsivas construídas com React, shadcn/ui e Tailwind CSS v4.",
  "features.tech.usage.title": "Análise de Uso",
  "features.tech.usage.desc":
    "Painéis em tempo real mostrando uso de IA, custos e métricas de desempenho.",
  "features.tech.async.title": "Processamento Assíncrono",
  "features.tech.async.desc":
    "Processamento de trabalhos em segundo plano com Celery para operações de IA pesadas que não bloqueiam seu app.",
  "features.cta.title": "Pronto para experimentar a produtividade alimentada por IA?",
  "features.cta.subtitle":
    "Comece com nosso plano gratuito e faça upgrade conforme você cresce",
  // Pricing page
  "pricing.meta.title": "Preços - Plataforma SaaS com IA",
  "pricing.meta.description":
    "Preços simples e transparentes para nossa plataforma alimentada por IA. Escolha o plano que se adapta às suas necessidades.",
  "pricing.hero.title": "Preços que escalam com você",
  "pricing.hero.subtitle":
    "Comece grátis, faça upgrade quando precisar de mais potência. Todos os planos incluem acesso aos nossos recursos de IA.",
  "pricing.section.title": "Escolha seu plano",
  "pricing.section.subtitle":
    "Todos os planos incluem garantia de reembolso de 14 dias",
  "pricing.plan.free.name": "Grátis",
  "pricing.plan.free.description":
    "Perfeito para experimentar nossos recursos de IA",
  "pricing.plan.free.cta": "Começar Grátis",
  "pricing.plan.starter.name": "Inicial",
  "pricing.plan.starter.description":
    "Ótimo para indivíduos e pequenas equipes",
  "pricing.plan.starter.cta": "Começar",
  "pricing.plan.pro.name": "Profissional",
  "pricing.plan.pro.description": "Para negócios e equipes em crescimento",
  "pricing.plan.pro.badge": "Mais Popular",
  "pricing.plan.pro.cta": "Começar Pro",
  "pricing.plan.business.name": "Empresarial",
  "pricing.plan.business.description":
    "Capacidades de IA de nível empresarial",
  "pricing.plan.business.cta": "Contatar Vendas",
  "pricing.period.month": "mês",
  "pricing.feature.aiCredits": "{count} Créditos de IA/mês",
  "pricing.feature.docIntel": "Inteligência de Documentos com IA",
  "pricing.feature.contentGen": "Geração de Conteúdo com IA",
  "pricing.feature.analytics": "Análises com IA",
  "pricing.feature.projects": "{count} Projeto|{count} Projetos",
  "pricing.feature.users": "{count} Usuário|{count} Usuários",
  "pricing.feature.storage": "{amount} de Armazenamento",
  "pricing.feature.api": "Acesso à API",
  "pricing.feature.fullApi": "Acesso Completo à API",
  "pricing.faq.title": "Perguntas frequentes",
  "pricing.faq.credits.q": "O que são Créditos de IA?",
  "pricing.faq.credits.a":
    "Créditos de IA são usados para alimentar todas as operações de IA em nossa plataforma. 1 crédito ≈ 1.000 tokens. Processamento de documentos usa 10-50 créditos, geração de conteúdo usa 5-20 créditos, e consultas de análise usam 3-10 créditos por operação.",
  "pricing.faq.change.q": "Posso mudar de plano a qualquer momento?",
  "pricing.faq.change.a":
    "Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças têm efeito imediato, e vamos prorratear quaisquer cobranças ou créditos.",
  "pricing.faq.exceed.q": "O que acontece se eu exceder meus créditos?",
  "pricing.faq.exceed.a":
    "Você pode comprar pacotes de créditos adicionais ou fazer upgrade para um plano superior. Notificaremos você quando atingir 80% do seu limite mensal.",
  "pricing.faq.refund.q": "Vocês oferecem reembolsos?",
  "pricing.faq.refund.a":
    "Sim! Oferecemos garantia de reembolso de 14 dias em todos os planos pagos. Se você não estiver satisfeito, reembolsaremos seu pagamento integralmente.",
  "pricing.faq.apiKey.q": "Posso usar minha própria chave de API da OpenAI?",
  "pricing.faq.apiKey.a":
    "Usuários do plano Empresarial podem conectar suas próprias chaves de API da OpenAI, Anthropic ou OpenRouter para reduzir custos e ter controle total sobre seu uso de IA.",
  "pricing.cta.title": "Pronto para começar?",
  "pricing.cta.subtitle":
    "Junte-se a milhares de equipes já usando nossa plataforma de IA",
  "pricing.cta.primary": "Iniciar Teste Gratuito",
  "pricing.cta.secondary": "Contatar Vendas",
};

export default PTLocale;
