const workIn90MinuteWorkBlocksPrompt = {
  emoji: '📅',
  title: 'Work in 90-Minute Work Blocks',
  description: 'Boost productivity with this ChatGPT prompt, outlining 90-minute work blocks, focus strategies, and break management tips.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Time Management',
    'Work',
    '90',
    'Minute',
  ],
  views: 6,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a productivity expert tasked with optimizing work efficiency. Your primary objective is to create a detailed plan for implementing focused work blocks to enhance productivity and maintain high energy levels throughout the day. To achieve this, you should: outline the benefits of the 90-minute work block technique, provide a step-by-step guide for implementing this method, suggest strategies for maximizing focus during work blocks, and offer tips for effective break management. Take a deep breath and work on this problem step-by-step.

#INFORMATION ABOUT ME:
My number of work blocks per day: [INSERT NUMBER OF BLOCKS]
My preferred break length: [INSERT LENGTH] minutes
My primary work environment: [DESCRIBE YOUR WORK ENVIRONMENT]
My main distractions: [LIST YOUR MAIN DISTRACTIONS]
My energy patterns throughout the day: [DESCRIBE YOUR ENERGY PATTERNS]

MOST IMPORTANT!: Provide your output in a numbered list format, with sub-points using bullet points for maximum readability and ease of implementation.`,
  whatItDoes: [
    'Converts user input into a structured plan for implementing focused work blocks to enhance productivity.',
    'Outlines the benefits of the 90-minute work block technique and provides a step-by-step guide for its implementation.',
    'Suggests strategies for maximizing focus and offers tips for effective break management.',
  ],
  tips: [
    'Customize the 90-minute work block schedule based on your energy patterns, ensuring you tackle the most demanding tasks when your energy is highest.',
    'Use technology to your advantage by setting timers or using productivity apps to strictly enforce the 90-minute focus periods and break times, ensuring consistency and discipline in your routine.',
    'Evaluate and adjust your work block plan regularly based on productivity outcomes and personal comfort, allowing for flexibility and optimization of the method over time.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT NUMBER OF BLOCKS], [INSERT LENGTH], [DESCRIBE YOUR WORK ENVIRONMENT], [LIST YOUR MAIN DISTRACTIONS], and [DESCRIBE YOUR ENERGY PATTERNS] with your specific details.',
    '- Example: [INSERT NUMBER OF BLOCKS] could be "4", [INSERT LENGTH] might be "15", [DESCRIBE YOUR WORK ENVIRONMENT] could be "home office with minimal noise", [LIST YOUR MAIN DISTRACTIONS] might include "social media notifications and emails", and [DESCRIBE YOUR ENERGY PATTERNS] could be "high energy in the morning, low after lunch, moderate in late afternoon".',
    'Example: If you work in 4 focused blocks per day, take 15-minute breaks, operate in a quiet home office, are mainly distracted by social media and emails, and experience high morning energy with a post-lunch dip, your input might look like this:',
    '- "My number of work blocks per day: 4',
    '- My preferred break length: 15 minutes',
    '- My primary work environment: home office with minimal noise',
    '- My main distractions: social media notifications and emails',
    '- My energy patterns throughout the day: high energy in the morning, low after lunch, moderate in late afternoon"',
  ],
};

export default workIn90MinuteWorkBlocksPrompt;
