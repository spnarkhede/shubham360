const createProfessionalNetworkingFrameworkPrompt = {
  emoji: '🌐',
  title: 'Create Professional Networking Framework',
  description: 'Build a powerful professional network with this ChatGPT mega-prompt, offering actionable strategies, industry insights, and relationship nurturing techniques.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Personal Development',
    'Professional',
    'Networking',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert in professional networking with a strategic mindset and deep industry knowledge. Your task is to help the user create a comprehensive framework for building and maintaining a strong professional network in their specified industry.

#ROLE:
You are an expert in professional networking with a strategic mindset and deep industry knowledge.

#RESPONSE GUIDELINES:
The framework should be structured using headings, subheadings, and bullet points to clearly outline effective networking strategies and best practices. Ensure the framework is actionable, insightful, and tailored to the unique dynamics of the industry.

The response should include the following sections:

1. Industry Overview
   - Industry characteristics
   - Key players
   - Career paths

2. Networking Mindset
   - Mindset shift 1
   - Mindset shift 2
   - Mindset shift 3

3. Strategic Networking Approach
   - Approach 1
     - Substep 1
     - Substep 2
   - Approach 2
     - Substep 1
     - Substep 2
   - Approach 3
     - Substep 1
     - Substep 2

4. Online Networking Tactics
   - Tactic 1
   - Tactic 2
   - Tactic 3

5. In-Person Networking Tactics
   - Tactic 1
   - Tactic 2
   - Tactic 3

6. Nurturing Relationships
   - Nurturing tip 1
   - Nurturing tip 2
   - Nurturing tip 3

7. Leveraging Network
   - Leveraging strategy 1
   - Leveraging strategy 2
   - Leveraging strategy 3

8. Tracking and Measuring
   - Tracking method 1
   - Tracking method 2
   - Tracking method 3

#TASK CRITERIA:
- Focus on providing actionable strategies and best practices tailored to the specified industry
- Ensure the framework is comprehensive, covering all aspects of professional networking
- Organize the information in a clear and easy-to-follow structure
- Avoid generic advice and instead provide industry-specific insights

#INFORMATION ABOUT ME:
- My industry: [SPECIFY INDUSTRY]

#RESPONSE FORMAT:
The response should be formatted using markdown, with headings, subheadings, and bullet points to clearly organize the information. Avoid using XML tags in the response.`,
  whatItDoes: [
    'Converts user input into a structured framework for professional networking tailored to a specific industry.',
    'Organizes the framework using headings, subheadings, and bullet points to outline networking strategies and best practices.',
    'Focuses on actionable, industry-specific insights to enhance professional networking effectiveness.',
  ],
  tips: [
    'Research the specific industry thoroughly to understand its unique characteristics, key players, and career paths before drafting the "Industry Overview" section, ensuring the content is highly relevant and informative.',
    'For the "Networking Mindset" section, interview industry professionals to gather insights on the mindset shifts necessary for effective networking in that field, providing real-world examples and actionable advice.',
    'Utilize interactive online tools such as webinars and virtual workshops to demonstrate the "Online Networking Tactics" and "In-Person Networking Tactics," making the strategies more engaging and easier to grasp for users.',
  ],
  howToUse: [
    'Fill in the [SPECIFY INDUSTRY] placeholder with the specific industry you are focusing on.',
    '- Example: If you are in the technology sector, you would fill in "technology" as your industry.',
    'Use this tailored information to generate a comprehensive networking framework that is specific to your industry, ensuring all advice and strategies are relevant and actionable.',
  ],
};

export default createProfessionalNetworkingFrameworkPrompt;
