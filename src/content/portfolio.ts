export type Project = {
  slug: string
  title: string
  subtitle: string
  tags: string[]
  category: 'Web' | 'Bots' | 'Automation' | 'Games'
  heroLabel: string
  coverImage: string
  galleryImages: string[]
  overview: string
  challenge: string
  solution: string
  timeline: string
  tools: string[]
  metrics: { label: string; value: string }[]
}

export const projects: Project[] = [
  {
    slug: 'nexus-ecommerce-platform',
    title: 'Nexus E-commerce Platform',
    subtitle: 'Headless storefront + Telegram bot for sales & support',
    tags: ['Web + Telegram Bot', 'Next.js', 'Automation'],
    category: 'Web',
    heroLabel: 'WEB & TELEGRAM BOT',
    coverImage: '/portfolio/nexus-ecommerce.png',
    galleryImages: ['/portfolio/nexus-ecommerce.png', '/portfolio/insightflow.png', '/portfolio/supportlink.png'],
    overview:
      'A modern e-commerce experience with a fast storefront and a Telegram bot that handles order updates and support.',
    challenge:
      'Legacy systems were fragmented and slow, causing drop-offs during checkout and poor mobile UX.',
    solution:
      'We built a high-performance Next.js storefront, integrated payments, and shipped a custom Telegram bot that syncs inventory and orders via API.',
    timeline: '16 Weeks (4 Months)',
    tools: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Telegram Bot API'],
    metrics: [
      { label: 'Monthly Active Users', value: '+240%' },
      { label: 'Avg. Load Time', value: '1.2s' },
      { label: 'Bot Subscribers', value: '15k+' },
      { label: 'GMV (Q1)', value: '$2.4M' },
    ],
  },
  {
    slug: 'insightflow-analytics',
    title: 'InsightFlow Analytics',
    subtitle: 'Predictive analytics dashboard for growth teams',
    tags: ['SaaS', 'React', 'AI'],
    category: 'Automation',
    heroLabel: 'SAAS • REACT + AI',
    coverImage: '/portfolio/insightflow.png',
    galleryImages: ['/portfolio/insightflow.png', '/portfolio/nexus-ecommerce.png', '/portfolio/supportlink.png'],
    overview:
      'A dashboard that turns raw events into real-time insights and forecasting for decision makers.',
    challenge:
      'Teams lacked a single source of truth and spent hours each week reporting metrics manually.',
    solution:
      'We implemented event pipelines, a metrics layer, and a fast UI with role-based access and exports.',
    timeline: '10 Weeks',
    tools: ['Next.js', 'Node.js', 'Postgres', 'ETL', 'Charts'],
    metrics: [
      { label: 'Reporting Time Saved', value: '12h/week' },
      { label: 'Adoption', value: '92%' },
      { label: 'P95 API', value: '120ms' },
      { label: 'Dashboards', value: '35+' },
    ],
  },
  {
    slug: 'supportlink-ai',
    title: 'SupportLink AI',
    subtitle: 'AI support agent with human handoff',
    tags: ['LLM', 'Automation', 'Customer Support'],
    category: 'Bots',
    heroLabel: 'AUTOMATION • LLM + PYTHON',
    coverImage: '/portfolio/supportlink.png',
    galleryImages: ['/portfolio/supportlink.png', '/portfolio/insightflow.png', '/portfolio/nexus-ecommerce.png'],
    overview:
      'An AI agent that resolves tier-1 questions and escalates complex issues to a human in Discord.',
    challenge:
      'Support teams were overloaded with repeated questions and slow response times.',
    solution:
      'We deployed an LLM-based assistant with a curated knowledge base, tooling, and safe handoff flows.',
    timeline: '6 Weeks',
    tools: ['Python', 'LLM', 'Vector Search', 'Discord API'],
    metrics: [
      { label: 'Tier-1 Resolved', value: '85%' },
      { label: 'Avg. Response', value: '< 30s' },
      { label: 'CSAT', value: '4.8/5' },
      { label: 'Tickets Reduced', value: '41%' },
    ],
  },

  {
    slug: 'upnorth-roblox-rpg-systems',
    title: 'UpNorth Roblox RPG Systems',
    subtitle: 'Progression, inventory, and monetization for a Roblox experience',
    tags: ['Roblox', 'Lua', 'UI/UX', 'Game Systems'],
    category: 'Games',
    heroLabel: 'ROBLOX • LUA • GAME SYSTEMS',
    coverImage: '/portfolio/roblox-rpg.png',
    galleryImages: ['/portfolio/roblox-rpg.png', '/portfolio/fivem-rp.png', '/portfolio/supportlink.png'],
    overview:
      'A full set of scalable Roblox game systems including progression, quests, inventory, shop, and optimized UI.',
    challenge:
      'The game needed reliable DataStore-backed progression and a polished UI while keeping server performance stable for multiplayer.',
    solution:
      'We implemented DataStore-safe saving, modular Lua systems, optimized client/server events, and a clean UI for inventory, quests, and shop flows.',
    timeline: '6 Weeks',
    tools: ['Roblox Studio', 'Lua', 'DataStore', 'UI Systems', 'Optimization'],
    metrics: [
      { label: 'Concurrent Players', value: '2k+' },
      { label: 'Server Error Rate', value: '-65%' },
      { label: 'Session Length', value: '+32%' },
      { label: 'Shop Conversion', value: '+18%' },
    ],
  },
  {
    slug: 'upnorth-fivem-rp-framework',
    title: 'UpNorth FiveM RP Framework',
    subtitle: 'Custom jobs, police/EMS, economy, and NUI interfaces',
    tags: ['FiveM', 'QBCore/ESX', 'NUI', 'Scripts'],
    category: 'Games',
    heroLabel: 'FIVEM • RP • NUI',
    coverImage: '/portfolio/fivem-rp.png',
    galleryImages: ['/portfolio/fivem-rp.png', '/portfolio/roblox-rpg.png', '/portfolio/nexus-ecommerce.png'],
    overview:
      'A customized FiveM roleplay stack with job systems, police/EMS workflows, economy balancing, and custom NUI interfaces.',
    challenge:
      'Existing scripts caused lag spikes and inconsistent gameplay; the server needed a stable, secure, and optimized foundation.',
    solution:
      'We refactored heavy scripts, optimized loops, added robust permission checks, and shipped custom NUI for inventory and job dashboards.',
    timeline: '8 Weeks',
    tools: ['FiveM', 'Lua', 'QBCore/ESX', 'MySQL', 'NUI'],
    metrics: [
      { label: 'Average FPS', value: '+20%' },
      { label: 'Lag Spikes', value: '-70%' },
      { label: 'Player Retention', value: '+25%' },
      { label: 'Support Tickets', value: '-30%' },
    ],
  },
]
