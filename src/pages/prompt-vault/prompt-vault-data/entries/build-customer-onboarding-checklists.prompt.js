const buildCustomerOnboardingChecklistsPrompt = {
  emoji: '🛤️',
  title: 'Build Customer Onboarding Checklists',
  description: 'Create customer onboarding checklists with this AI prompt, covering setup tasks, core feature training, advanced usage, and retention strategies.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Churn',
    'Support',
    'Customer Experience',
    'Customer',
  ],
  views: 221,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `Adopt the role of an expert onboarding specialist who has spent a decade reducing early churn for B2B and B2C companies by designing structured customer journeys that transform confused first-time users into confident power users. Your primary objective is to create a comprehensive 30-day onboarding checklist that eliminates overwhelm, builds momentum through quick wins, and guides new customers to meaningful success in a clear, actionable format. You understand that most customers abandon products not because they're bad, but because they don't know what to do first—your checklist solves this by creating a deliberate path from setup to mastery. Structure the checklist in three distinct phases: Phase 1 (Day 1) focuses on immediate setup tasks that create quick wins and early confidence; Phase 2 (Days 2-7) concentrates on the core features that deliver primary value without distraction; Phase 3 (Days 8-30) introduces advanced capabilities, integrations, and community connection that deepen engagement. For each task, include a one-line explanation that sells the customer on why completing it matters to their success—don't just list actions, motivate them. Take a deep breath and work on this problem step-by-step.

#INFORMATION ABOUT ME:
My product or service description: [INSERT YOUR PRODUCT OR SERVICE DESCRIPTION]
My typical customer's main goal: [INSERT WHAT YOUR CUSTOMER WANTS TO ACHIEVE]
My product's core value proposition: [INSERT THE PRIMARY BENEFIT YOUR PRODUCT DELIVERS]
My most essential features (top 3-5): [INSERT YOUR MOST IMPORTANT FEATURES]
My common reasons customers drop off early: [INSERT WHY CUSTOMERS TYPICALLY ABANDON]

MOST IMPORTANT!: Format your output as a clean, structured checklist organized by the three phases (Day 1, Days 2-7, Days 8-30) with each task presented as an actionable item followed by a brief one-line explanation of its impact. Use clear headings, bullet points, and ensure every item is specific and immediately actionable—avoid vague or "nice to have" tasks.`,
  whatItDoes: [
    'Creates a three-phase customer onboarding checklist for the first 30 days',
    'Breaks down essential setup tasks, core feature learning, and advanced usage into actionable steps',
    'Explains why each task matters to help customers succeed and reduce early churn',
  ],
  tips: [
    'Map out your customer\'s biggest pain points and desired outcomes before using this AI prompt to ensure the onboarding checklist addresses real barriers that cause users to leave early.',
    'After generating the checklist with the AI prompt, test it with 3-5 actual new customers and track which tasks they skip or struggle with to refine the sequence.',
    'Use the checklist output as a foundation to create automated email sequences or in-app notifications that guide users through each phase at the right time.',
  ],
  howToUse: [
    'Fill in the [DESCRIBE YOUR PRODUCT OR SERVICE HERE] placeholder with a clear description of what your business offers and who it serves.',
    'Example: "a project management tool for remote teams" or "a meal planning app for busy parents" or "an accounting software for freelancers and small business owners."',
  ],
};

export default buildCustomerOnboardingChecklistsPrompt;
