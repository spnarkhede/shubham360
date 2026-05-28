const detectCustomerChurnWarningSignalsPrompt = {
  emoji: '📡',
  title: 'Detect Customer Churn Warning Signals',
  description: 'Detect customer churn risks early with this AI prompt, analyzing feedback patterns, flagging warning signs, and providing prioritized retention action plans.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Support',
    'Customer Experience',
    'Retention',
    'Churn Reduction',
  ],
  views: 62,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `Adopt the role of an expert customer retention analyst who spent a decade at SaaS companies watching revenue walk out the door before learning to decode the hidden language of pre-churn behavior. Your primary objective is to analyze customer feedback and identify early warning signs of churn risk before customers actually cancel, delivering a prioritized action report in a structured format that enables immediate intervention. You understand that customers rarely announce their departure directly—instead, they send subtle signals through language patterns, emotional shifts, and behavioral cues that most teams miss until it's too late. Take a deep breath and work on this problem step-by-step.

Analyze each piece of feedback for churn warning signals including but not limited to: explicit threats to leave or cancel, comparisons to competitors or mentions of alternatives being evaluated, repeated complaints about the same unresolved issue showing frustration fatigue, expressions of declining trust or emotional detachment from the product, language suggesting disengagement or reduced usage, frustration with support quality or responsiveness itself, and mentions of contract end dates or billing cycle awareness. Distinguish between customers who are genuinely at risk of churning versus those providing constructive criticism because they want the product to improve. For every flagged entry, identify the specific churn signal detected, assign a risk level using Red for immediate action needed, Orange for early warning signs, and Yellow for monitor closely situations. Provide specific and actionable save actions that can be executed within 48 hours—not generic advice like "reach out to the customer" but precise guidance on what type of outreach to initiate, what specific message to deliver, what to offer or propose, and who should own the intervention.

#INFORMATION ABOUT ME:
My customer feedback data: [PASTE YOUR CUSTOMER FEEDBACK HERE]
My product/service type: [INSERT YOUR PRODUCT OR SERVICE TYPE]
My customer success team structure: [INSERT HOW YOUR RETENTION TEAM IS ORGANIZED]
My available retention tools/offers: [INSERT WHAT YOU CAN OFFER TO SAVE CUSTOMERS - DISCOUNTS, FEATURES, SUPPORT, ETC.]

MOST IMPORTANT!: Your output must be in a structured table format sorted by risk level (Red first, then Orange, then Yellow) with columns for: Feedback Quote/Summary, Specific Churn Signal Detected, Risk Level, and Recommended Save Action (with specific outreach details). After the table, include a separate brief section listing any feedback that is constructive criticism but not genuine churn risk.`,
  whatItDoes: [
    'Analyzes customer feedback to identify early warning signs that suggest a customer may cancel or leave',
    'Categorizes each at-risk feedback entry by risk level and explains the specific churn signal detected',
    'Provides actionable retention strategies the team can use within 48 hours to prevent customer loss',
  ],
  tips: [
    'Prepare your customer feedback data in advance by organizing it into a clean, readable format before running this AI prompt, which helps the analysis run smoothly and produces more accurate churn detection results.',
    'Schedule a weekly or bi-weekly review cycle where you feed fresh customer feedback into this AI prompt, creating a consistent early warning system that catches at-risk customers before they actually cancel their subscriptions.',
    'After receiving the churn risk report from the AI prompt, create a standard operating procedure for your team that assigns specific team members to each risk level, ensuring Red flags get immediate attention within 24 hours while Yellow and Orange cases follow a structured follow-up timeline.',
  ],
  howToUse: [
    'Fill in the [PASTE YOUR CUSTOMER FEEDBACK HERE] placeholder with the actual customer feedback messages, reviews, or support tickets you want to analyze for churn risk using this AI prompt.',
    'Example: "I\'ve been using your service for 6 months but honestly I barely log in anymore. Seems like your competitor offers the same thing for half the price. My subscription renews next month and I\'m not sure it\'s worth it."',
  ],
};

export default detectCustomerChurnWarningSignalsPrompt;
