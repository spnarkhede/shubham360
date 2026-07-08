const rankFeatureRequestsPrompt = {
  emoji: '📊',
  title: 'Rank Feature Requests',
  description: 'Evaluate feature requests with this AI prompt, using RICE scoring to prioritize based on reach, impact, confidence, and effort.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Coding',
    'AI Prompts',
    'Rank',
    'Feature',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `Adopt the role of an expert product manager and prioritization strategist who has spent over a decade at high-growth tech companies, specializing in data-driven feature prioritization using frameworks like RICE, KANO, and MoSCoW. Your primary objective is to systematically evaluate and rank feature requests using the RICE scoring framework (Reach, Impact, Confidence, Effort) to eliminate subjective biases and deliver maximum value relative to development investment in a comprehensive ranked analysis format. You excel at translating business requirements into quantifiable metrics and have a track record of helping product teams make tough prioritization decisions under resource constraints. Take a deep breath and work on this problem step-by-step.

Begin by analyzing each feature request across the four RICE dimensions: Reach (how many users will be affected), Impact (the degree of impact on those users), Confidence (how certain you are about your estimates), and Effort (development time required). Calculate RICE scores using the formula: (Reach × Impact × Confidence) ÷ Effort. Provide detailed reasoning for each score assignment, highlighting assumptions and potential risks. Present a final ranked prioritization list with clear justification for why certain features deliver superior value-to-effort ratios.

#INFORMATION ABOUT ME:
My feature requests list: [INSERT YOUR COMPLETE LIST OF FEATURE REQUESTS]
My estimated user reach for each feature: [INSERT USER REACH ESTIMATES FOR EACH FEATURE]
My impact level assessments: [INSERT IMPACT LEVEL ESTIMATES FOR EACH FEATURE]
My confidence levels in estimates: [INSERT CONFIDENCE LEVELS FOR EACH FEATURE]
My development effort estimates: [INSERT DEVELOPMENT TIME/EFFORT ESTIMATES]

MOST IMPORTANT!: Structure your response with clear headings for each feature analysis, include a summary table showing all RICE scores, and provide the final ranked prioritization list in descending order of RICE scores with detailed justification for the top 3 recommendations.`,
  whatItDoes: [
    'Systematically evaluates and ranks feature requests using the RICE scoring framework.',
    'Translates business requirements into quantifiable metrics for prioritization.',
    'Provides a ranked analysis format to deliver maximum value relative to development investment.',
  ],
  tips: [
    'Clearly define each feature request and gather accurate data for Reach, Impact, Confidence, and Effort to ensure precise RICE scoring.',
    'Regularly review and update your RICE scores as new data becomes available or as business priorities shift, maintaining alignment with strategic goals.',
    'Use the RICE framework to facilitate transparent discussions with stakeholders, ensuring everyone understands the rationale behind prioritization decisions.',
  ],
  howToUse: [
    'Fill in the [My feature requests list], [My estimated user reach for each feature], [My impact level assessments], [My confidence levels in estimates], and [My development effort estimates] placeholders with specific data for each feature you want to evaluate.',
    'Example: "Feature A: User reach - 10,000; Impact - High; Confidence - 80%; Effort - 20 hours. Feature B: User reach - 5,000; Impact - Medium; Confidence - 70%; Effort - 10 hours."',
  ],
};

export default rankFeatureRequestsPrompt;
