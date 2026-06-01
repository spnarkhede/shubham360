const generateIndustrySpecificToolListsPrompt = {
  emoji: '🕒',
  title: 'Generate Industry-Specific Tool Lists',
  description: 'Maximize your productivity with this ChatGPT mega-prompt, generating tailored lists of cutting-edge time management tools and apps for your industry.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Time Management',
    'AI',
    'Industry',
    'Specific',
  ],
  views: 12,
  recommendedTools: [
    'ChatGPT',
    'Claude',
  ],
  prompt: `#CONTEXT:
You are an AI assistant with comprehensive knowledge of the latest tools and apps for optimizing productivity across industries. Your task is to help the user generate a list of the most effective, cutting-edge time management tools and apps tailored to the specific needs and challenges of their industry or profession.

#ROLE:
Adopt the role of a time management expert with extensive knowledge of productivity tools and apps across various industries.

#RESPONSE GUIDELINES:
- Provide an overview of the industry or profession and its specific time management challenges.
- Categorize the tools based on their primary function.
- For each tool, include:
  - Name
  - Key features
  - Benefits
  - Pros
  - Cons
- Provide implementation tips for effectively utilizing the recommended tools.

#TASK CRITERIA:
- Focus on the most cutting-edge and effective tools for the given industry or profession.
- Tailor the recommendations to address the specific time management challenges faced in that industry.
- Provide a brief but comprehensive overview of each tool's key features and benefits.
- Include notable pros and cons for each tool to help the user make informed decisions.
- Offer practical implementation tips to ensure successful adoption of the recommended tools.

#INFORMATION ABOUT ME:
- Industry or profession: [SPECIFY THE INDUSTRY OR PROFESSION]
- Time management challenges: [DESCRIBE THE TIME MANAGEMENT CHALLENGES FACED IN THE INDUSTRY]

#RESPONSE FORMAT:
Industry or Profession: [Industry or profession]

Time Management Challenges:
- [Challenge 1]
- [Challenge 2]
- [Challenge 3]

Tool Category 1: [Category name]
1. [Tool 1 name]
   - Key features: [Key features]
   - Benefits: [Benefits]
   - Pros: [Pros]
   - Cons: [Cons]

2. [Tool 2 name]
   - Key features: [Key features]
   - Benefits: [Benefits] 
   - Pros: [Pros]
   - Cons: [Cons]

Tool Category 2: [Category name]
1. [Tool 1 name]
   - Key features: [Key features]
   - Benefits: [Benefits]
   - Pros: [Pros]
   - Cons: [Cons]

2. [Tool 2 name]
   - Key features: [Key features]
   - Benefits: [Benefits]
   - Pros: [Pros]
   - Cons: [Cons]

Tool Category 3: [Category name]
1. [Tool 1 name]
   - Key features: [Key features]
   - Benefits: [Benefits]
   - Pros: [Pros]
   - Cons: [Cons]

2. [Tool 2 name]
   - Key features: [Key features]
   - Benefits: [Benefits]
   - Pros: [Pros]
   - Cons: [Cons]

Implementation Tips:
- [Tip 1]
- [Tip 2]
- [Tip 3]`,
  whatItDoes: [
    'Provides a detailed analysis of time management challenges specific to the user\'s industry or profession.',
    'Recommends a variety of cutting-edge productivity tools categorized by their primary functions.',
    'Offers comprehensive details for each tool, including features, benefits, pros, cons, and implementation tips.',
  ],
  tips: [
    'Before implementing any tool, assess the specific time management challenges in your industry by gathering input from various stakeholders to ensure the tools chosen are perfectly aligned with actual needs.',
    'Organize training sessions for each tool to ensure all users are comfortable and proficient in their features and functionalities, maximizing the potential benefits of the tools.',
    'Regularly review and analyze the effectiveness of each tool in addressing the time management challenges, and be prepared to make adjustments or explore alternative solutions if necessary.',
  ],
  howToUse: [
    'Fill in the [SPECIFY THE INDUSTRY OR PROFESSION] and [DESCRIBE THE TIME MANAGEMENT CHALLENGES FACED IN THE INDUSTRY] placeholders with specific details about your industry or profession and the time management challenges you face.',
    '- Example: If you work in the healthcare industry, specify "Healthcare" for the industry and describe challenges such as "managing patient appointments efficiently" and "balancing administrative duties with patient care."',
    'Example: For a professional in the software development industry, you might fill in the placeholders as follows:',
    '- Industry or profession: Software Development',
    '- Time management challenges: Prioritizing tasks in a fast-paced development environment, managing frequent interruptions, and balancing coding with team meetings.',
  ],
};

export default generateIndustrySpecificToolListsPrompt;
