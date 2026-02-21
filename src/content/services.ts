export type ServiceCategory = {
  id: string
  title: string
  description: string
  items: { title: string; desc: string; bullets?: string[]; from?: string }[]
  directory?: string[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'website',
    title: 'Website Development',
    description:
      'High‑performance websites, landing pages, and web apps built for speed, SEO, and conversion.',
    items: [
      {
        title: 'Business & Corporate Websites',
        desc: 'Polished company sites with strong SEO foundations, fast performance, and lead capture.',
        bullets: ['Responsive design', 'SEO-ready structure', 'Lead capture forms'],
      },
      {
        title: 'E‑commerce Websites',
        desc: 'Modern storefronts with secure checkout, product management, and scalable architecture.',
        bullets: ['Stripe/PayPal payments', 'Inventory & variants', 'Performance optimization'],
      },
      {
        title: 'SaaS Websites & Custom Web Apps',
        desc: 'Full-stack products with authentication, dashboards, subscriptions, and integrations.',
        bullets: ['User auth & roles', 'Dashboards', 'API integrations'],
      },
      {
        title: 'Landing Pages',
        desc: 'High‑converting landing pages for ads, launches, and funnels.',
        bullets: ['Conversion-focused sections', 'Fast load times', 'Analytics tracking'],
      },
      {
        title: 'Booking, Real Estate & Education',
        desc: 'Specialized builds for bookings, property listings, and learning platforms.',
        bullets: ['Appointments & scheduling', 'Listings & search filters', 'Course / content systems'],
      },
      {
        title: 'CMS Platforms (WordPress / Shopify / Webflow / Wix)',
        desc: 'Build or rebuild on the platform that fits your business.',
        bullets: ['Custom themes & setup', 'Performance improvements', 'SEO & analytics'],
      },
      {
        title: 'Custom Code (HTML/CSS/JS) + React/Next.js',
        desc: 'Custom-coded sites and modern React/Next.js builds with full-stack options.',
        bullets: ['Custom UI components', 'API-backed features', 'Full stack development'],
      },
    ],
    directory: [
      'Business Websites',
      'E-commerce Websites',
      'Portfolio Websites',
      'Landing Pages',
      'Corporate Websites',
      'Blog Websites',
      'Real Estate Websites',
      'Booking & Appointment Websites',
      'Educational Websites',
      'News & Magazine Websites',
      'SaaS Websites',
      'Custom Web Applications',
      'WordPress Development',
      'Shopify Development',
      'Webflow Development',
      'Wix Development',
      'Custom HTML/CSS/JS Websites',
      'React / Next.js Websites',
      'Full Stack Development',
    ],
  },
  {
    id: 'bots',
    title: 'Bot Development',
    description:
      'Automation and conversational bots for Telegram, Discord, and business workflows.',
    items: [
      {
        title: 'Telegram Bot Development',
        desc: 'Bots for communities, customer support, lead capture, and automations.',
        bullets: ['Commands & menus', 'Webhooks & APIs', 'Notifications & workflows'],
      },
      {
        title: 'Discord Bot Development',
        desc: 'Moderation, ticketing, onboarding, and custom automations for servers.',
        bullets: ['Roles & permissions', 'Slash commands', 'Logs & analytics'],
      },
      {
        title: 'AI Chatbots',
        desc: 'AI assistants that understand context, answer questions, and hand off to humans.',
        bullets: ['Knowledge base', 'Tool/API calls', 'Human handoff'],
      },
      {
        title: 'Automation + API Integrations',
        desc: 'Connect tools with custom pipelines, alerts, scheduled jobs, and integrations.',
        bullets: ['API integration bots', 'Webhooks', 'Scheduled tasks'],
      },
      {
        title: 'WhatsApp Bot Development',
        desc: 'Business automation and customer support on WhatsApp via approved APIs.',
        bullets: ['Lead capture', 'Auto replies', 'CRM integration'],
      },
      {
        title: 'Trading & Crypto Bots',
        desc: 'Automation for trading workflows, signals, data monitoring, and alerts.',
        bullets: ['Strategy automation', 'Risk controls', 'Exchange/API connectivity'],
      },
      {
        title: 'Scraping & E-commerce Bots',
        desc: 'Data extraction, monitoring, and storefront automations.',
        bullets: ['Scraping bots', 'Inventory/price monitoring', 'Order & support flows'],
      },
      {
        title: 'Custom Bot Solutions',
        desc: 'A tailored bot system built around your exact workflow and platform needs.',
        bullets: ['Multi-platform', 'Custom logic', 'Ongoing improvements'],
      },
    ],
    directory: [
      'Telegram Bot Development',
      'Discord Bot Development',
      'WhatsApp Bot Development',
      'AI Chatbots',
      'Trading Bots',
      'Automation Bots',
      'Crypto Bots',
      'E-commerce Bots',
      'Scraping Bots',
      'API Integration Bots',
      'Custom Bot Solutions',
    ],
  },
  {
    id: 'games',
    title: 'Game Development',
    description: 'Roblox and FiveM builds—from game systems to 3D assets, animation, and UI.',
    items: [
      {
        title: 'Roblox Game Development',
        desc: 'Custom Roblox experiences with monetization, progression, and multiplayer-ready systems.',
        bullets: [
          'Game design & systems',
          'Lua scripting (mechanics, UI, DataStore)',
          '3D modeling, maps & assets',
          'Character & NPC animation',
          'Optimization & bug fixing',
        ],
      },
      {
        title: 'FiveM Development (GTA RP)',
        desc: 'Server setup, frameworks, scripts, UI, and optimized roleplay systems for FiveM.',
        bullets: [
          'Server setup (ESX / QBCore)',
          'Custom scripts (jobs, police/EMS, economy)',
          'NUI interfaces (inventory, dashboards)',
          '3D assets, maps & interiors',
          'Animations / emotes & performance tuning',
        ],
      },
    ],
    directory: [
      'Roblox Game Design & Development',
      'Roblox Lua Scripting',
      'Roblox 3D Modeling (characters, props, maps)',
      'Roblox Animation (characters, NPCs, combat)',
      'Roblox UI/UX (HUD, shops, inventory)',
      'Roblox Optimization & Bug Fixing',
      'FiveM Server Setup (ESX / QBCore)',
      'FiveM Custom Scripts (jobs, police/EMS, economy)',
      'FiveM NUI Development (inventory, dashboards)',
      'FiveM 3D Modeling (vehicles, buildings, interiors)',
      'FiveM Animations / Emotes',
      'FiveM Optimization & Security',
    ],
  },
]
