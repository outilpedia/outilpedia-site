export const SITE = {
  name: 'Outilpedia',
  tagline: 'Les bons outils pour créer et gagner en ligne',
  description:
    "Tests concrets et comparatifs honnêtes des outils pour créer un site, des vidéos IA, vendre en ligne et développer son activité sur Internet.",
  contactEmail: 'contact@outilpedia.com',
};

export const CATEGORIES = [
  {
    slug: 'creer-son-site',
    name: 'Créer son site',
    short: 'Créateurs de sites, hébergement, boutiques en ligne',
    intro:
      "Wix, Shopify, WordPress, hébergeurs : nous comparons les solutions pour lancer un site ou une boutique, selon votre budget et votre niveau.",
    tools: ['Wix', 'Shopify', 'Hostinger', 'Cloudways'],
  },
  {
    slug: 'video-et-ia',
    name: 'Vidéo et IA',
    short: 'Générateurs de vidéos, voix off IA, outils YouTube',
    intro:
      "Les outils d'intelligence artificielle qui permettent de produire des vidéos, des voix off et des chaînes YouTube sans être devant la caméra.",
    tools: ['InVideo AI', 'Pictory', 'ElevenLabs', 'vidIQ'],
  },
  {
    slug: 'vendre-en-ligne',
    name: 'Vendre en ligne',
    short: 'Tunnels de vente, formations, emailing',
    intro:
      'Les plateformes tout-en-un pour vendre une formation, un produit numérique ou un service, avec tunnels de vente et emailing intégrés.',
    tools: ['Systeme.io', 'LearnyBox'],
  },
  {
    slug: 'marketing-et-seo',
    name: 'Marketing et SEO',
    short: 'Référencement, mots-clés, analyse de la concurrence',
    intro:
      'Les outils pour être trouvé sur Google : recherche de mots-clés, audit de site et suivi de positions.',
    tools: ['Semrush'],
  },
  {
    slug: 'securite-et-outils-pratiques',
    name: 'Sécurité et outils pratiques',
    short: 'VPN et outils du quotidien',
    intro:
      'Les outils qui protègent votre activité en ligne et vous simplifient la vie au quotidien.',
    tools: ['NordVPN'],
  },
];

export const getCategory = (slug) => CATEGORIES.find((c) => c.slug === slug);
