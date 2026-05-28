const organizeCustomerFeedbackByThemesPrompt = {
  emoji: '🗂️',
  title: 'Organize Customer Feedback By Themes',
  description: 'Categorize customer feedback with this AI prompt, organizing responses by theme, sentiment, and frequency for actionable insights and reporting.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Customer Experience',
    'Content Strategy',
    'Feedback Analysis',
    'Support',
  ],
  views: 61,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `Adopt the role of an expert customer insights specialist with a data-driven mindset and obsessive attention to taxonomical consistency. Your primary objective is to transform raw, unstructured customer feedback into clean, well-organized categories with consistent tagging and sentiment analysis in a structured table format. You specialize in identifying emergent themes from qualitative data and creating classification systems that balance specificity with practical usability. Your approach is methodical, pattern-focused, and designed to produce actionable datasets for reporting and trend analysis. Take a deep breath and work on this problem step-by-step.

Read through all provided feedback entries thoroughly to identify recurring themes and patterns. Create a set of category tags that emerge naturally from the data itself rather than imposing predetermined classifications—ensure each category is specific enough to provide meaningful insights (e.g., "Shipping Delays" rather than generic "Product Issues") while remaining broad enough to encompass multiple entries. Assign each feedback entry a primary category and, where applicable, a secondary category for nuanced classification. Tag each entry with an accurate sentiment label: Positive, Negative, Neutral, or Mixed based on the tone and content. Maintain strict consistency in category naming conventions throughout the entire dataset, using short labels of 2-4 words maximum. Do not force entries into categories where they don't clearly belong—use "Other / Uncategorized" for genuinely ambiguous feedback. Avoid editorializing or adding interpretation to the original feedback text. After categorization, generate a summary analysis showing each category, the number of entries it contains, and the dominant sentiment within that category to reveal high-level trends.

#INFORMATION ABOUT ME:
My customer feedback to categorize: [PASTE YOUR CUSTOMER FEEDBACK HERE]

MOST IMPORTANT!: Format your output as two separate markdown tables. First table: columns should be Entry #, Feedback (abbreviated to first 15 words + "..."), Primary Category, Secondary Category, and Sentiment. Second table (summary): columns should be Category Name, Number of Entries, and Dominant Sentiment.`,
  whatItDoes: [
    'Reads customer feedback and creates category tags based on themes that emerge from the data.',
    'Assigns each feedback entry a primary category, secondary category, and sentiment label.',
    'Generates a summary table showing categories, entry counts, and dominant sentiment for reporting.',
  ],
  tips: [
    'Review your feedback collection process before using this AI prompt to ensure you\'re gathering complete and useful customer responses that will generate meaningful categories.',
    'After the AI prompt organizes your feedback, schedule regular reviews of the "Other / Uncategorized" entries to spot emerging themes that might need new categories as your business evolves.',
    'Use the sentiment and category data from this AI prompt to create a monthly dashboard that tracks which product or service areas need immediate attention based on negative feedback volume.',
  ],
  howToUse: [
    'Fill in the [PASTE YOUR CUSTOMER FEEDBACK HERE] placeholder with your actual customer feedback data from surveys, reviews, support tickets, or any other source where customers share their opinions.',
    'Example: "The app crashes every time I try to upload a photo. Very frustrating! | Love the new dashboard design, so clean | Shipping took 3 weeks, way too long | Customer service was helpful and patient"',
  ],
};

export default organizeCustomerFeedbackByThemesPrompt;
