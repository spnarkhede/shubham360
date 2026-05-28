const buildCustomerFAQSectionsPrompt = {
  emoji: '🗂️',
  title: 'Build Customer FAQ Sections',
  description: 'Build a comprehensive FAQ section with this AI prompt, reducing support tickets through organized categories, customer-focused answers, and self-service design.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Knowledge Base',
    'Support',
    'Customer Experience',
    'Tickets',
  ],
  views: 89,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `Adopt the role of a senior knowledge management specialist with deep expertise in customer self-service design, information architecture, and support deflection strategy. Your primary objective is to build a comprehensive, publish-ready FAQ section for a customer-facing knowledge base that reduces support ticket volume by at least 30% through clear, findable, and actionable answers. You should analyze recurring customer issues, group them using card sorting principles based on customer mental models (not internal team structure), and craft FAQ entries that resolve problems in under 60 seconds. Each answer must follow the inverted pyramid structure—leading with the direct solution in the first sentence, then adding context or steps only if needed. Take a deep breath and work on this problem step-by-step.

Begin by analyzing the recurring issues provided and grouping them into logical FAQ categories such as Billing & Payments, Account Setup, Product Features, or Troubleshooting. Organize categories by how customers think about problems, not how your internal team structures them. For each category, write 5-8 FAQ entries where questions are phrased exactly how real customers would ask them—conversational and natural, not corporate or formal. Structure each answer to lead with the direct solution in the first sentence, followed by necessary context or steps. For multi-step processes, use numbered lists with no more than 7 steps; if more steps are required, break the process into logical sub-sections. Add 2-3 "Related Articles" suggestions at the bottom of each FAQ entry to prevent dead ends and keep users engaged in self-service. Include a "Was this helpful? Yes / No" feedback prompt suggestion at the end of each entry to enable continuous improvement tracking.

Avoid jargon or internal terminology customers wouldn't recognize. Never use "contact support" as the first option in any answer. Eliminate walls of unformatted text and passive-voice constructions that bury solutions. Do not write generic placeholder content—every answer must be specific, actionable, and directly tied to the business context provided. Use plain, direct language at an 8th-grade reading level to maximize accessibility and comprehension.

#INFORMATION ABOUT ME:
- My business, product, or service: [INSERT DESCRIPTION OF YOUR BUSINESS, PRODUCT, OR SERVICE]
- My top recurring customer issues or questions: [LIST YOUR TOP 5-10 RECURRING ISSUES OR QUESTIONS]
- My current monthly support ticket volume: [INSERT APPROXIMATE NUMBER OF TICKETS PER MONTH]
- My primary customer segment: [DESCRIBE YOUR PRIMARY CUSTOMER SEGMENT, E.G., SMALL BUSINESS OWNERS, FIRST-TIME USERS, ENTERPRISE IT ADMINS]
- My support deflection goal: [INSERT YOUR TICKET REDUCTION TARGET, E.G., 30% REDUCTION]

MOST IMPORTANT!: Output the complete FAQ section organized by category. Format each entry with the question in bold, followed by the answer paragraph or numbered steps, then related article suggestions, and finally the feedback prompt. Ensure all content is specific, actionable, and written in plain language at an 8th-grade reading level.`,
  whatItDoes: [
    'Analyzes common customer support questions and organizes them into clear FAQ categories based on how customers naturally think about problems.',
    'Writes customer-friendly FAQ entries with direct answers first, followed by step-by-step instructions when needed, using simple language customers actually use.',
    'Structures a complete knowledge base with related article links and feedback options to help customers find solutions quickly without contacting support.',
  ],
  tips: [
    'Map your top support tickets to real customer language before writing your AI prompt, ensuring the FAQ questions match how users actually describe their problems rather than internal terminology.',
    'Test your AI prompt output with a small group of actual customers to validate clarity and usefulness, then refine the prompt based on which answers still generate follow-up questions.',
    'Use the AI prompt to generate multiple answer variations for your highest-volume questions, then A/B test them with the feedback prompt to identify which phrasing reduces support tickets most effectively.',
  ],
  howToUse: [
    'Fill in the [DESCRIBE YOUR BUSINESS, PRODUCT, OR SERVICE], [LIST YOUR TOP 5-10 RECURRING ISSUES OR QUESTIONS], [NUMBER], and [DESCRIBE PRIMARY CUSTOMER SEGMENT] placeholders with details about your company and support needs.',
    'Example: "I run an online project management software for small teams, and my customers frequently contact support about password resets, how to invite team members, billing questions, integrating with Slack, and exporting data. My current support volume is approximately 450 tickets per month, and the majority come from small business owners and startup founders."',
  ],
};

export default buildCustomerFAQSectionsPrompt;
