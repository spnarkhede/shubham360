const buildCustomerOnboardingSurveysPrompt = {
  emoji: '🩺',
  title: 'Build Customer Onboarding Surveys',
  description: 'Create customer onboarding surveys with this AI prompt, including rating scales, open-ended feedback, NPS questions, and actionable insight discovery.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Support',
    'Knowledge Base',
    'Customer Experience',
    'Customer',
  ],
  views: 138,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `Adopt the role of an expert customer research specialist who designs surveys that maximize completion rates while surfacing genuinely actionable insights. Your primary objective is to create a post-onboarding customer survey that reveals both emotional experience and friction points in a clear, concise format that respects the customer's time while extracting maximum value. You understand that survey fatigue is real, leading questions poison data, and vague responses waste everyone's time. Your surveys get completed because they feel conversational, relevant, and genuinely interested in helping rather than just collecting metrics. Take a deep breath and work on this problem step-by-step.

Design a survey specifically for customers who have completed their first two weeks with the product. Balance quantitative rating questions with qualitative open-ended questions that uncover the "why" behind the numbers. Ensure each question serves a clear purpose tied to improving the onboarding experience or identifying at-risk customers. Avoid double-barreled questions, leading language, or anything that feels like a corporate checkbox exercise. Structure the survey to flow naturally from broad impressions to specific pain points, ending with forward-looking engagement opportunities. For rating questions, provide clear scale labels that remove ambiguity. For open-ended questions, frame them to encourage specific, actionable responses rather than generic praise or complaints.

#INFORMATION ABOUT ME:
My product description: [INSERT YOUR PRODUCT DESCRIPTION]
My customer base: [DESCRIBE YOUR TYPICAL CUSTOMER]
My onboarding materials include: [LIST KEY ONBOARDING COMPONENTS - e.g., tutorial videos, documentation, email sequence, etc.]
My biggest suspected onboarding friction points: [INSERT WHAT YOU THINK MIGHT BE CONFUSING OR DIFFICULT]
My support channels available: [LIST HOW CUSTOMERS CAN GET HELP - e.g., chat, email, knowledge base, etc.]

MOST IMPORTANT!: Structure your output with clear section headings. For each survey question, provide the exact question text, the question type (rating scale or open-ended), and for rating questions include the full scale with labels (e.g., 1 = Very Difficult, 5 = Very Easy). Include a brief note after each question explaining what insight it's designed to capture. Keep the total survey under 10 questions and ensure the language is conversational and non-technical.`,
  whatItDoes: [
    'Analyzes the customer\'s first two weeks with a product through a structured survey',
    'Collects feedback on onboarding clarity, product confidence, and support satisfaction using rating scales',
    'Identifies confusion points and improvement opportunities through open-ended questions and recommendation likelihood',
  ],
  tips: [
    'Before using this AI prompt, map out the specific pain points in your current onboarding process so the survey questions can target areas where you suspect friction exists.',
    'After generating the survey with this AI prompt, test it internally with your team or a small customer group to ensure questions feel natural and responses will give you clear action steps.',
    'Use the survey results to create a follow-up AI prompt that analyzes common themes in open-ended responses, helping you prioritize which onboarding improvements will have the biggest impact on customer success.',
  ],
  howToUse: [
    'Fill in the [DESCRIBE YOUR PRODUCT AND CUSTOMER BASE] placeholder with clear details about what your product does and who uses it.',
    'Example: "My product is a project management tool for remote teams. My customer base is small business owners and team leaders managing 5-20 people who work from different locations."',
  ],
};

export default buildCustomerOnboardingSurveysPrompt;
