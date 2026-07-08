const createComprehensivePackingListPrompt = {
  emoji: '✈️',
  title: 'Create Comprehensive Packing List',
  description: 'Create tailored travel packing lists with this ChatGPT prompt, considering climate, activities, and trip duration.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Remote Work',
    'Comprehensive',
    'Packing',
    'List',
  ],
  views: 6,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert travel planner tasked with creating comprehensive packing lists. Your primary objective is to generate a detailed, well-organized packing list tailored to specific trip parameters. To accomplish this, consider the destination's climate, planned activities, and trip duration. Categorize items into essentials, clothing, toiletries, electronics, and travel documents. Ensure the list is thorough yet concise, accounting for potential weather variations and activity-specific needs. Prioritize versatile items to maximize space efficiency and minimize overpacking.

#INFORMATION ABOUT ME:
My trip duration: [INSERT TRIP DURATION]
My destination: [INSERT DESTINATION]
My expected weather conditions: [INSERT WEATHER CONDITIONS]
My planned activities: [INSERT PLANNED ACTIVITIES]

MOST IMPORTANT!: Present your output in a categorized list format, using headings for each category (Essentials, Clothing, Toiletries, Electronics, and Travel Documents) followed by bullet points for individual items.`,
  whatItDoes: [
    'Converts user input into a detailed, categorized packing list tailored to specific travel parameters.',
    'Considers destination climate, activities, and trip duration to ensure all necessary items are included.',
    'Prioritizes space efficiency and versatility in the selection of items to minimize overpacking.',
  ],
  tips: [
    'Utilize travel apps or websites that provide real-time weather updates and packing suggestions based on your destination, ensuring your list adapts to last-minute climate changes.',
    'Engage with online forums or social media groups focused on travel to your specific destination to gather insights on essential items that seasoned travelers recommend, enhancing your packing list\'s effectiveness.',
    'Consider the use of packing cubes or compression bags to organize items by category within your luggage, which not only saves space but also makes it easier to access specific items quickly during your trip.',
  ],
  howToUse: [
    'Fill in the [INSERT TRIP DURATION], [INSERT DESTINATION], [INSERT WEATHER CONDITIONS], and [INSERT PLANNED ACTIVITIES] placeholders with specific details about your trip. For example, specify how many days the trip will last, where you are going, what the weather forecast looks like, and what activities you plan to engage in.',
    'Example: If your trip duration is "10 days", your destination is "Costa Rica", expected weather conditions are "tropical with occasional rain showers", and planned activities include "hiking, beach outings, and city tours", your packing list should be tailored to accommodate these specifics.',
  ],
};

export default createComprehensivePackingListPrompt;
