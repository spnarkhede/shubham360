const craftRepliesToNegativeReviewsPrompt = {
  emoji: '🧯',
  title: 'Craft Replies To Negative Reviews',
  description: 'Respond to negative reviews professionally with this AI prompt, addressing concerns empathetically while showcasing strong customer service to future buyers.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Support',
    'Customer Service',
    'Customer Experience',
    'Reviews',
  ],
  views: 58,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `Adopt the role of a seasoned customer service communications specialist who has written thousands of public-facing responses to negative reviews for brands across retail, SaaS, hospitality, and e-commerce. Your primary objective is to craft a professional, empathetic response to a negative customer review that addresses the unhappy customer while also reassuring every future customer who reads it in a warm but professional tone between 80-150 words. You understand that a review response serves dual purposes: resolving the immediate complaint and demonstrating to prospective customers that the company handles problems with integrity and competence. Take a deep breath and work on this problem step-by-step.

Follow this precise approach: First, identify the core issue the customer is upset about by looking past emotional language to find the actual problem underneath. Second, acknowledge their frustration without being defensive or dismissive—actually own the experience they had rather than using non-apologies like "We're sorry you feel that way." Third, offer a concrete next step that feels real and actionable, such as inviting them to contact support directly, offering to investigate their specific case, or explaining a change already implemented. Fourth, close with something that reinforces you value their business without sounding desperate or robotic.

#INFORMATION ABOUT ME:
- The negative review I need to respond to: [PASTE THE NEGATIVE REVIEW HERE]
- My business/product description and relevant context: [BRIEFLY DESCRIBE YOUR BUSINESS, PRODUCT, AND ANY RELEVANT CONTEXT ABOUT THE ISSUE THE CUSTOMER MENTIONED]

MOST IMPORTANT!: Write one response only, not multiple options. Do not use generic filler lines like "Your feedback is important to us" or "We strive to provide the best experience." Every sentence should do actual work. Don't blame the customer, don't make excuses, and don't over-promise things you can't guarantee. Keep the tone warm but professional—not overly casual, not stiff.`,
  whatItDoes: [
    'Analyzes negative customer reviews to identify the core problem behind complaints.',
    'Generates professional responses that acknowledge issues, offer real solutions, and rebuild trust.',
    'Creates replies that show future customers how well the company handles problems.',
  ],
  tips: [
    'Review past negative reviews your business has received to identify recurring themes, which helps you tailor the AI prompt with specific context that addresses common pain points your customers face.',
    'After using this AI prompt to draft a response, have a team member read it aloud to ensure the tone sounds genuinely human and empathetic rather than automated or scripted.',
    'Create a simple document that tracks which review responses led to customers returning or updating their reviews, helping you refine the context you provide to the AI prompt over time for better results.',
  ],
  howToUse: [
    'Fill in the [PASTE THE NEGATIVE REVIEW HERE] and [BRIEFLY DESCRIBE YOUR BUSINESS, PRODUCT, AND ANY RELEVANT CONTEXT ABOUT THE ISSUE THE CUSTOMER MENTIONED] placeholders with the actual customer review you need to respond to and background information about your company.',
    'Example: For the first variable, paste the full negative review like "Ordered a laptop case that arrived damaged and customer service never responded to my emails." For the second variable, write something like "We sell tech accessories online and recently had a shipping partner change that caused some delivery delays."',
  ],
};

export default craftRepliesToNegativeReviewsPrompt;
