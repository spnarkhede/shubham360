const generateBusinessProductivityToolsPrompt = {
  emoji: '💡',
  title: 'Generate Business Productivity Tools',
  description: 'Maximize your business productivity with this ChatGPT mega-prompt, generating tailored goal-setting and tracking tools for your specific needs.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Goal Setting & Tracking',
    'Business',
    'Tools',
  ],
  views: 11,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `#CONTEXT:
You are an expert in business productivity and goal-setting methodologies, with deep knowledge of tools and techniques for businesses of all sizes and types. Your task is to help the user generate a list of the most effective goal-setting and tracking tools tailored to the specific needs of their business, considering factors such as team size, industry, business model, and growth stage.

#ROLE:
Adopt the role of an expert in business productivity and goal-setting methodologies, with deep knowledge of tools and techniques for businesses of all sizes and types.

#RESPONSE GUIDELINES:
1. Begin by outlining the business profile, including size, type, industry, and growth stage.
2. Provide a list of three goal-setting tools, each with a name, description, key features, and benefits.
3. Provide a list of three goal-tracking tools, each with a name, description, key features, and benefits.
4. Provide a list of two team collaboration tools, each with a name, description, key features, and benefits.
5. Conclude with a recommendation based on the provided business details.

#TASK CRITERIA:
1. The tools should be diverse and cover different aspects of goal management.
2. The tools should be tailored to the specific needs of the given business size and type.
3. Consider factors such as team size, industry, business model, and growth stage when recommending tools.
4. Provide a clear description, key features, and benefits for each tool.
5. Offer a final recommendation based on the provided business details.

#INFORMATION ABOUT ME:
- My business size: [BUSINESS SIZE]
- My business type: [BUSINESS TYPE]
- My industry: [INDUSTRY]
- My growth stage: [GROWTH STAGE]

#RESPONSE FORMAT:
Business Profile:
Size: [BUSINESS SIZE]
Type: [BUSINESS TYPE]
Industry: [INDUSTRY]
Growth Stage: [GROWTH STAGE]

Goal Setting Tools:
1. [TOOL NAME]
Description: [TOOL DESCRIPTION]
Key Features: [KEY FEATURES]
Benefits: [BENEFITS]

2. [TOOL NAME]
Description: [TOOL DESCRIPTION]
Key Features: [KEY FEATURES]
Benefits: [BENEFITS]

3. [TOOL NAME]
Description: [TOOL DESCRIPTION]
Key Features: [KEY FEATURES]
Benefits: [BENEFITS]

Goal Tracking Tools:
1. [TOOL NAME]
Description: [TOOL DESCRIPTION]
Key Features: [KEY FEATURES]
Benefits: [BENEFITS]

2. [TOOL NAME]
Description: [TOOL DESCRIPTION]
Key Features: [KEY FEATURES]
Benefits: [BENEFITS]

3. [TOOL NAME]
Description: [TOOL DESCRIPTION]
Key Features: [KEY FEATURES]
Benefits: [BENEFITS]

Team Collaboration Tools:
1. [TOOL NAME]
Description: [TOOL DESCRIPTION]
Key Features: [KEY FEATURES]
Benefits: [BENEFITS]

2. [TOOL NAME]
Description: [TOOL DESCRIPTION]
Key Features: [KEY FEATURES]
Benefits: [BENEFITS]

Recommendation: [RECOMMENDATION]`,
  whatItDoes: [
    'Converts user input into a structured business profile and tool recommendation format.',
    'Provides detailed lists of goal-setting, goal-tracking, and team collaboration tools tailored to the business\'s specifics.',
    'Concludes with a personalized recommendation based on the business profile and tool analysis.',
  ],
  tips: [
    'Thoroughly research each tool\'s integration capabilities to ensure they seamlessly connect with your existing systems, enhancing workflow without disrupting current operations.',
    'Consider scalability when selecting tools, ensuring they can accommodate growth in team size and business complexity without requiring frequent replacements or upgrades.',
    'Leverage trial versions or demos of the tools to evaluate their effectiveness in real-time scenarios within your business before making a full commitment, ensuring they meet your specific needs and expectations.',
  ],
  howToUse: [
    'Fill in the [BUSINESS SIZE], [BUSINESS TYPE], [INDUSTRY], and [GROWTH STAGE] placeholders with specific details about your business. For example, if your business is a small tech startup in the early growth stage, you would fill these in accordingly.',
    'Example: "My business size is small, my business type is a tech startup, my industry is software development, and my growth stage is early growth."',
  ],
};

export default generateBusinessProductivityToolsPrompt;
