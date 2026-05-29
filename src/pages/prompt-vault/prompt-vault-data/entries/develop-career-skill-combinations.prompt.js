const developCareerSkillCombinationsPrompt = {
  emoji: '🛠️',
  title: 'Develop Career Skill Combinations',
  description: 'Unlock your career potential with this ChatGPT mega-prompt, designed to identify valuable skill combinations and provide tailored learning paths for success.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Career',
    'Skill',
  ],
  views: 22,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert skill stack architect tasked with designing a comprehensive "Skill Stack Optimizer" tool to help individuals identify the most valuable and synergistic skill combinations for their target industry or role. The tool should provide clear strategies and learning paths to efficiently develop these optimized skill stacks.

#ROLE:
As an expert skill stack architect with deep knowledge across industries and roles, your role is to create a tool that empowers individuals to identify and develop the most valuable skill combinations for their career goals.

#RESPONSE GUIDELINES:
1. Begin with a clear description of the Skill Stack Optimizer tool and its purpose.
2. List the key features of the tool, focusing on how it helps users identify valuable skill combinations and provides learning paths.
3. For each of the three industries, provide:
   - The industry name
   - Three high-value skill stacks for that industry
   - Three development strategies for building those skill stacks
4. Generate personalized recommendations based on the user's current skills, experience, and career goals, including:
   - Three recommended skill stacks to focus on
   - Three strategies to efficiently build those skill stacks
5. Provide a list of five additional resources to support the user's skill development journey.

#TASK CRITERIA:
1. Focus on identifying the most valuable and synergistic skill combinations for each industry or role.
2. Provide clear, actionable strategies and learning paths for developing the recommended skill stacks.
3. Tailor personalized recommendations based on the user's current skills, experience, and career goals.
4. Avoid generic advice and ensure that all recommendations are specific and relevant to the user's situation.
5. Prioritize the most impactful skill stacks and development strategies for each industry and the individual user.

#INFORMATION ABOUT ME:
- My target industry: [TARGET INDUSTRY]
- My current skills: [CURRENT SKILLS]
- My experience level: [EXPERIENCE LEVEL]
- My career goals: [CAREER GOALS]

#RESPONSE FORMAT:
## Skill Stack Optimizer: Your Guide to High-Impact Skill Combinations

### Tool Description
[Insert tool description here]

### Key Features
- [Feature 1]
- [Feature 2]
- [Feature 3]
- [Feature 4]
- [Feature 5]

### Industry-Specific Skill Stacks and Development Strategies

#### Industry 1: [Industry Name]
##### High-Value Skill Stacks
1. [Skill Stack 1]
2. [Skill Stack 2]
3. [Skill Stack 3]

##### Development Strategies
- [Strategy 1]
- [Strategy 2]
- [Strategy 3]

#### Industry 2: [Industry Name]
##### High-Value Skill Stacks
1. [Skill Stack 1]
2. [Skill Stack 2]
3. [Skill Stack 3]

##### Development Strategies
- [Strategy 1]
- [Strategy 2]
- [Strategy 3]

#### Industry 3: [Industry Name]
##### High-Value Skill Stacks
1. [Skill Stack 1]
2. [Skill Stack 2]
3. [Skill Stack 3]

##### Development Strategies
- [Strategy 1]
- [Strategy 2]
- [Strategy 3]

### Personalized Recommendations for [Your Name]
Based on your current skills, experience, and career goals, the Skill Stack Optimizer recommends focusing on developing the following skill stacks:

1. [Skill Stack 1]
2. [Skill Stack 2]
3. [Skill Stack 3]

To efficiently build these skill stacks, consider the following strategies:

- [Strategy 1]
- [Strategy 2]
- [Strategy 3]

### Additional Resources
- [Resource 1]
- [Resource 2]
- [Resource 3]
- [Resource 4]
- [Resource 5]`,
  whatItDoes: [
    'Converts user input into a structured format to create a "Skill Stack Optimizer" tool.',
    'Provides a detailed plan for identifying and developing valuable skill combinations tailored to specific industries and roles.',
    'Generates personalized skill development strategies and resources based on the user\'s current skills, experience level, and career goals.',
  ],
  tips: [
    'Leverage industry-specific data to ensure the Skill Stack Optimizer tool includes the most in-demand skills and trends, enhancing its relevance and utility for users.',
    'Incorporate an adaptive learning system within the tool that adjusts the recommended skill stacks and development strategies based on user feedback and progress, ensuring personalized and effective learning paths.',
    'Regularly update the tool’s database with new skills and emerging industry requirements to keep the Skill Stack Optimizer current and valuable for ongoing career development.',
  ],
  howToUse: [
    'Fill in the [TARGET INDUSTRY], [CURRENT SKILLS], [EXPERIENCE LEVEL], and [CAREER GOALS] placeholders with specific details about your professional background and aspirations. For example, if you are in the tech industry, have skills in software development and data analysis, are at an intermediate level, and aim to become a data scientist, these should be clearly stated.',
    'Example: "My target industry is Technology. My current skills include Python programming, machine learning, and statistical analysis. My experience level is intermediate, having worked in the field for 3 years. My career goals are to advance to a senior data scientist position focusing on AI applications."',
  ],
};

export default developCareerSkillCombinationsPrompt;
