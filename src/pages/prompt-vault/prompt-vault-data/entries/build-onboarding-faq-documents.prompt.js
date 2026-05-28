const buildOnboardingFAQDocumentsPrompt = {
  emoji: '🧭',
  title: 'Build Onboarding FAQ Documents',
  description: 'Create comprehensive onboarding FAQ documents with this AI prompt, covering account setup, core features, billing plans, and customer support resources.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Support',
    'Tickets',
    'Churn',
    'Writing',
  ],
  views: 161,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `# CONTEXT:
Adopt the role of customer experience architect. New customers are abandoning your product within the first 30 days because they hit predictable friction points but can't get immediate answers. Support tickets pile up with identical questions while frustrated users churn before experiencing core value. Traditional documentation is either too technical or buried where nobody finds it. You need a proactive FAQ that intercepts confusion at the exact moments it derails onboarding, written for humans who are already overwhelmed and considering whether this purchase was a mistake.

# ROLE:
You're a former frontline support agent who answered 10,000+ tickets before burning out on repeating yourself, then became obsessed with mapping the exact psychological journey of confused customers. You discovered that most churn happens not because products are bad, but because customers hit tiny friction points at vulnerable moments and interpret them as personal failure. You now craft FAQ documents that feel like a patient friend anticipating exactly where someone will get stuck, speaking in plain language that validates their confusion while giving them the exact next step to move forward. Your mission: create a comprehensive onboarding FAQ document that proactively answers the questions new customers ask in their first 30 days. Before writing, think step by step: What are the exact moments in the first 30 days where customers feel lost? What questions emerge from confusion versus frustration versus fear of doing something wrong? How can each answer restore confidence while providing complete information?

# RESPONSE GUIDELINES:
This FAQ document should be organized into four strategic sections that mirror the customer's onboarding journey. Each section targets a specific phase where confusion typically derails progress.

**Section 1: Getting Started**
Goal: Eliminate setup anxiety and get customers to their first successful action quickly. Address account creation, login issues, and the critical "what do I do first?" paralysis.

**Section 2: Using the Core Features**
Goal: Build confidence in the main functionality. Answer questions about the primary use cases that deliver value, removing barriers to the "aha moment."

**Section 3: Billing and Plans**
Goal: Eliminate financial anxiety and transparency concerns. Address charges, upgrades, downgrades, and cancellations with complete honesty to build trust.

**Section 4: Getting Help**
Goal: Make support feel accessible and reliable. Clarify how to get help, what to expect, and what resources exist for self-service.

Each section should contain 4-6 questions with answers that:
- Anticipate the emotional state behind the question (confusion, frustration, fear)
- Provide complete, actionable information without requiring additional clicks
- Include specific next steps where relevant
- Validate that the question is reasonable and common

The document should flow logically through the customer journey, with questions ordered by when they typically arise during onboarding.

# TASK CRITERIA:
1. Write in plain English—eliminate all jargon, acronyms, and technical terminology unless absolutely necessary
2. Each answer must be complete and self-contained, not a redirect to "contact support" or "see documentation"
3. Keep each answer under 80 words while still being thorough
4. Include specific next steps in answers where action is required
5. Avoid condescending language that implies the customer made an error or should have known something
6. Never write vague conditional answers like "It depends on your plan" without explaining what it depends on and how to find out
7. Anticipate follow-up questions and address them within the same answer
8. Use second person ("you") to make answers feel direct and personal
9. Where multiple scenarios exist, briefly cover all common ones rather than forcing the customer to guess which applies
10. Focus on the 4-6 most frequently asked questions per section, not edge cases

**What to avoid:**
- Answers that blame the user ("You should have..." or "Make sure you didn't...")
- Incomplete answers that require clicking through to other resources
- Technical explanations when simple ones will do
- Assumptions about what the customer already knows
- Corporate language that creates distance ("Our platform enables..." vs "You can...")

**What to focus on:**
- The exact friction points in the first 30 days where customers get stuck
- Questions that emerge from confusion, not just information gaps
- Answers that restore confidence and momentum
- Transparency about limitations, costs, and processes

# INFORMATION ABOUT ME:
- My product/service: [DESCRIBE YOUR PRODUCT OR SERVICE]
- My typical customer profile: [DESCRIBE YOUR TYPICAL CUSTOMER - their background, technical skill level, what they're trying to accomplish]
- My most common support questions: [LIST 3-5 QUESTIONS THAT COME UP REPEATEDLY IN FIRST 30 DAYS]

# RESPONSE FORMAT:
Use an FAQ format with clear section headings and question-answer pairs:

**[Section Name]**

**Q: [Question phrased exactly how customers ask it]**
[Complete answer in plain English, under 80 words, with specific next steps where relevant]

**Q: [Next question]**
[Answer]

[Continue for 4-6 questions per section]

[Repeat structure for all four sections: Getting Started, Using the Core Features, Billing and Plans, Getting Help]

Use bold for section headings and questions to improve scannability. Keep formatting clean and minimal to avoid visual overwhelm.`,
  whatItDoes: [
    'Analyzes customer confusion points to build an FAQ document for new users.',
    'Organizes common questions into four sections covering setup, features, billing, and support.',
    'Writes clear answers in plain language that guide customers through their first month.',
  ],
  tips: [
    'Before using this AI prompt, gather real support tickets and chat logs from your first 30 days of customer interactions to identify the actual questions customers ask most frequently.',
    'After generating your FAQ document with this AI prompt, test it with a small group of new customers and track which questions still generate support requests to refine your content.',
    'Use the FAQ output as a foundation for creating additional onboarding materials like video tutorials or quick-start guides that address the same pain points in different formats.',
  ],
  howToUse: [
    'Fill in the [DESCRIBE YOUR PRODUCT, SERVICE, AND TYPICAL CUSTOMER PROFILE] placeholder with details about what you offer and who uses it.',
    'Example: "My product is a project management software for remote teams. My typical customer is a small business owner or team leader managing 5-15 people who need to track tasks and deadlines across different time zones."',
  ],
};

export default buildOnboardingFAQDocumentsPrompt;
