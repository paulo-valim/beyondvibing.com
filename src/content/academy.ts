export const academy = {
  eyebrow: 'Beyond Vibing Academy · by Groxio',
  hero: {
    title: 'Intelligence with intention.',
    descriptor: 'Agentic coding, with guidance.',
    audience: 'For developers and technical founders who build with AI and keep the judgment.',
    facts: 'Live cohort · 4 months · Starts January 2027 · Founding price US$2,000',
  },
  primary: 'Reserve a founding seat',
  secondary: { label: 'Join the free live', href: 'https://grox.io/live' },
  why: {
    title: 'Vibing is agentic coding without guidance.',
    text: 'It ships fast, and the cost shows up later: code nobody can explain, reviews that turn into triage, systems that resist every change. The agents are not the problem. Working without judgment is. We teach the other way.',
  },
  whiteboard: {
    title: 'Can you explain it at a whiteboard?',
    text: 'Every module ends the same way: you stand at a whiteboard and explain how the system works, why it is shaped that way, and where it would fail. Not line by line. Decision by decision. If you can do that, you can ship what the agent helped you build.',
  },
  practice: {
    steps: ['Scout', 'Plan', 'Build', 'Verify', 'Review'],
    caption: 'The same loop in every module. People approve the plan and review the change, including the automated ones.',
  },
  modules: {
    title: 'Four modules, sold together, taught live',
    items: [
      { name: 'Coding', title: 'Specify the work.', text: 'Turn a request into small, well-specified stories and the context an agent needs. Explain why a failed attempt failed.' },
      { name: 'Steered coding', title: 'Judge what comes back.', text: 'Judge agent output against design principles, discard what does not fit, and explain at a whiteboard how the remaining system works.' },
      { name: 'Verified coding', title: 'Prove it works.', text: 'Put verification gates in place in order of cost. Recognize common AI-generated failures and catch them before review.' },
      { name: 'Automated coding', title: 'Automate what has earned it.', text: 'Run selected automations with clear rules for adding or reducing them. People still review changes and merge pull requests.' },
    ],
  },
  audience: {
    title: 'Who it is for',
    cards: [
      { name: 'Developers, early in the career', title: 'Learn the judgment AI skipped.', text: 'Deciding what to ask for, knowing whether the answer is any good, and holding the shape of the system. The job moved up the stack; the learning has to move with it.' },
      { name: 'Senior developers', title: 'Keep your craft, not just triage.', text: 'Put your design judgment where the agent can use it: contracts, boundaries, checks and reviews small enough to read.' },
      { name: 'Technical founders', title: 'Build a system that serves the business.', text: 'Use agents for speed without losing the architecture, and keep the product tied to the business it has to run.' },
    ],
    notFor: 'People who have never written software. You need to build something today; we teach you to build it with judgment.',
  },
  quote: {
    text: "Vibing is not coding. Coding is the judgment around the generation: the architecture you hold, the review you don't skip, the thing you throw away because you can see it doesn't fit.",
    attribution: 'Bruce Tate, from the foreword to his essays',
  },
  people: [
    { name: 'Bruce Tate', role: 'Technical teaching', text: "Founder of Groxio and one of Elixir's most published authors. Leads the technical curriculum: directing, judging and verifying AI-assisted work." },
    { name: 'Paulo Valim', role: 'Business, context and product', text: 'Teaches context, stories and verification, so what you build can be put to work and kept running.' },
  ],
  format: [
    'Starts January 2027 [PENDING: exact date]',
    'Four months, one module a month',
    'Weekly live sessions [PENDING: length and day]',
    'A small cohort: it runs with at least 6 people',
  ],
  price: {
    standard: 'US$2,500',
    founding: 'Founding price for cohort 1: US$2,000',
    text: 'Reserving costs nothing. If at least 6 people join, we confirm by December 11 and send the invoice. If not, nobody pays.',
  },
  faq: [
    { question: 'When do I pay?', answer: 'After December 11, and only if the cohort runs. Reserving is free.' },
    { question: 'What if fewer than 6 people join?', answer: "The cohort doesn't run, and you pay nothing. You'll hear from us by December 11 either way." },
    { question: 'Can I buy one module?', answer: 'No. The four modules build on each other, so they are sold together.' },
    { question: 'Is there a free way to see how you teach?', answer: 'Yes. Join the free live every two weeks, where Bruce walks through a real agent conversation on screen.' },
  ],
  reserve: {
    title: 'Reserve a founding seat',
    text: "No payment now. We'll write to you by December 11.",
    live: 'Not ready? Join the free live',
  },
  form: {
    name: 'Name', email: 'Email', building: 'What are you building?',
    newsletter: 'Also send me the Groxio newsletter', company: 'Company',
    disconnected: 'Form not connected yet', sending: 'Sending…',
    success: "You're on the list. We'll write by December 11.",
    error: "Something went wrong. Email maggie@grox.io and we'll add you.",
    required: 'Required', optional: 'Optional',
  },
  footer: { text: 'Beyond Vibing Academy is a Groxio product.', label: 'grox.io', href: 'https://grox.io' },
  labels: {
    directions: 'Design directions', a: 'A · Night watch', b: 'B · Field notes', c: 'C · Syllabus',
    practice: 'The practice', proof: 'The whiteboard test', why: 'Why we teach this',
    curriculum: 'The curriculum', audience: 'Who it is for', notFor: 'Not for', people: 'Your teachers',
    format: 'Dates and format', price: 'The founding cohort', faq: 'Questions, answered',
    chapter: 'Chapter', month: 'Month', outcomes: 'You will be able to…',
    months: ['January', 'February', 'March', 'April'],
    glance: 'At a glance', start: 'Start', length: 'Length', delivery: 'Format', cost: 'Price', seats: 'Seats',
    glanceValues: ['January 2027', '4 months', 'Live cohort', 'US$2,000', 'At least 6 people'],
    comparison: 'Two ways to build', vibing: 'Vibing', guidance: 'With guidance',
    vibingPoints: ['Code nobody can explain', 'Reviews that turn into triage', 'Systems that resist every change'],
    guidancePoints: ['Specify the work.', 'Judge what comes back.', 'Prove it works.'],
    skip: 'Skip to content', home: 'Beyond Vibing Academy',
  },
} as const;
