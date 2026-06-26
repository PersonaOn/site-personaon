/**
 * The Representative content — one file = one site. In production the builder
 * agent edits THIS file (content + which components, with their props). The
 * components and tokens supply the design; the agent never writes CSS.
 *
 * SEO/AEO/GEO fields (seo, knowsAbout, faq, archetype, links→sameAs) are consumed
 * by Schema.astro (JSON-LD), Base.astro (meta), Faq.astro, and /llms.txt.
 */
export const site = {
  identity: {
    name: "Sainath Setti",
    handle: "sainath",
    archetype: "founder", // founder|student|consultant|creator → Person; "company" → Organization
    headline: "a founder you can actually ask",
    location: "Toronto",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/sainath-setti" },
      { label: "personaon.com", href: "https://personaon.com" },
    ],
  },
  seo: {
    description:
      "Sainath Setti — founder of PersonaOn, engineer, Schulich MBA. Ask his representative about his work, his startups, and what he's building next.",
    ogImage: "/gen/persona.png",
  },
  knowsAbout: ["AI agents", "PersonaOn", "Backend engineering", "Startups", "IT staffing", "Product"],
  // Brand tokens — from the slurp (never hardcoded "premium" defaults).
  brand: {
    colors: {
      primary: "#0066CC",
      secondary: "#E0A21A",
      accent: "#2BB673",
      background: "#F4F3F0",
      textPrimary: "#1D1D1F",
      textMuted: "#6f6f76",
    },
    fonts: { display: "Instrument Serif", body: "Geist", mono: "JetBrains Mono" },
  },
  page: [
    {
      type: "Hero",
      props: {
        eyebrow: "Always on · Founder of PersonaOn",
        headline: "A founder you can",
        headlineAccent: "actually ask.",
        lede: "Sainath builds PersonaOn: living pages that answer for you. This is his. Ask about his work, his startups, or what he is looking for next.",
        ctaPrimary: { label: "Start a conversation →", href: "#ask" },
        ctaSecondary: { label: "See the work", href: "#work" },
        meta: ["Toronto · Schulich MBA", "Engineer turned founder", "2 companies building"],
        chat: {
          greeting: "Sainath's representative",
          suggestedQuestions: ["What is PersonaOn?", "His Microsoft work?", "Is he open to opportunities?", "The startup story?"],
          placeholder: "Ask me anything…",
        },
      },
    },
    { type: "ProofStrip", props: { items: ["Schulich MBA", "PersonaOn", "Opelsoft", "Microsoft", "Google ADK", "Supabase"] } },
    {
      type: "AskAbout",
      props: {
        kicker: "Ask me about",
        title: "Six things people most want to know.",
        blurb: "Every question is a real conversation, answered in his voice.",
        topics: [
          "What is PersonaOn, really?",
          "His engineering & Microsoft background",
          "The MBA-to-founder story",
          "Opelsoft and AI-run staffing",
          "What he's looking for next",
          "How to actually work with him",
        ],
      },
    },
    {
      type: "ProjectShowcase",
      props: {
        kicker: "Selected work",
        title: "Things he's built and is building.",
        blurb: "Click any card and the representative will tell you the story.",
        projects: [
          { title: "PersonaOn", body: "Living pages that answer, book meetings, and capture interest. Built from your resume in minutes.", tags: ["AI Agents", "Next.js", "Supabase"], media: { src: "/gen/persona.png", alt: "PersonaOn" } },
          { title: "Opelsoft", body: "A US IT staffing company, re-architected around AI agents that source, screen, and route talent.", tags: ["Staffing", "Automation", "Ops"], media: { src: "/gen/opelsoft.png", alt: "Opelsoft" } },
          { title: "FutureStack", body: "An AI recruiter for SMB staffing that turns a manual funnel into an always-on hiring engine.", tags: ["Recruiting", "LLM", "SMB"], media: { src: "/gen/futurestack.png", alt: "FutureStack" } },
        ],
      },
    },
    { type: "Faq", props: {} },
    { type: "PullQuote", props: { quote: "Your presence shouldn't sleep when you do.", accentWord: "sleep", cite: "— Sainath Setti, on why he built PersonaOn" } },
    {
      type: "OpportunityCapture",
      props: {
        kicker: "Opportunity capture",
        title: "Hiring, investing, or building?",
        body: "Leave a note. The representative will brief Sainath with the context, and he'll follow up personally, usually within a day.",
        submitLabel: "Send to Sainath →",
      },
    },
    {
      type: "Footer",
      props: {
        wordmark: "Built on PersonaOn",
        tagline: "This page is a living persona. It answers visitors, captures interest, and gets smarter the more it's used.",
        links: [
          { label: "Ask", href: "#ask" },
          { label: "Work", href: "#work" },
          { label: "FAQ", href: "#faq" },
          { label: "personaon.com", href: "https://personaon.com" },
        ],
      },
    },
  ],
  // Answer-first FAQ — the AEO/GEO workhorse. Rendered as static HTML (Faq.astro)
  // AND emitted as FAQPage JSON-LD (Schema.astro). Grows from real visitor Q&A.
  faq: [
    { q: "What is PersonaOn?", a: "PersonaOn turns a resume or website into a living page that answers visitors in your voice, books meetings, and captures interest. Sainath founded it after years as a backend engineer, pairing dependable AI agents with a premium on-brand page that works while you sleep." },
    { q: "What is Sainath Setti's background?", a: "Sainath is a backend engineer turned founder with a Schulich MBA. He spent years building production systems before starting PersonaOn and Opelsoft. That engineering depth is why PersonaOn's agents are reliable rather than gimmicky." },
    { q: "Is Sainath open to opportunities?", a: "Yes. He is open to the right founders, investors, and collaborators. Leave a note on this page with your context and the representative briefs him directly, usually with a reply within a day." },
    { q: "What is Opelsoft?", a: "Opelsoft is Sainath's US IT staffing company, re-architected around AI agents that source, screen, and route talent. It is the proving ground for applying PersonaOn-style automation to a real services business." },
    { q: "How do you work with Sainath?", a: "Start a conversation with the representative on this page to gauge fit, then leave your email. He takes intros for hiring, investing, partnerships, and building, and the page captures the context so the first real conversation starts warm." },
  ],
  previewExchanges: [
    { q: "What is PersonaOn?", a: "It's a living page that answers for you. Paste a resume, and it becomes a representative that talks to visitors in your voice, books meetings, and captures the people who matter." },
    { q: "His Microsoft work?", a: "Sainath spent years as a backend engineer before founding companies. That systems depth is why PersonaOn's agents feel reliable, not gimmicky." },
    { q: "Is he open to opportunities?", a: "Yes, for the right founders, investors, and collaborators. Drop a note below and I'll brief him with the full context." },
    { q: "The startup story?", a: "Engineer to Schulich MBA to founder. He's building PersonaOn and FutureStack, both bets that AI should work while you sleep." },
  ],
};
