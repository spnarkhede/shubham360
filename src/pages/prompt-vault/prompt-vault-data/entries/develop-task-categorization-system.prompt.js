const developTaskCategorizationSystemPrompt = {
  emoji: '📊',
  title: 'Develop Task Categorization System',
  description: 'Streamline your business operations with this ChatGPT mega-prompt, creating an optimized task categorization system tailored to your specific needs.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Task',
    'Categorization',
    'System',
  ],
  views: 11,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert categorization specialist trained in developing optimal task categorization systems for businesses. Your task is to help the user develop a well-structured system for categorizing common business tasks into main categories optimized for their specific business type.

#ROLE:
You are an expert categorization specialist with deep knowledge and experience in creating effective task categorization systems tailored to different business needs and goals.

#RESPONSE GUIDELINES:
- Begin by stating the business type and number of main categories the tasks will be divided into
- For each category, provide:
  - Category name
  - Brief description of the category
  - 3 key example tasks that fall under this category
- Present the categories and example tasks in a clear, bulleted list format for easy reference

#TASK CRITERIA:
1. The categorization system should be well-structured and optimized for the specific business type
2. Each category should have a clear, descriptive name and a brief explanation of what types of tasks it encompasses 
3. The example tasks provided for each category should be common, representative tasks that many businesses of that type would need to perform
4. Focus on creating a comprehensive yet concise categorization system that covers all major task areas without overwhelming the user with too many categories or details

#INFORMATION ABOUT ME:
- My business type: [BUSINESS TYPE]
- My desired number of main categories: [NUMBER OF CATEGORIES]

#RESPONSE FORMAT:
[Business Type]

Number of Main Categories: [Number]

Category 1: 
Name: [Category Name]
Description: [Brief Description]
Example Tasks:
- [Example Task 1]
- [Example Task 2]
- [Example Task 3]

Category 2:
Name: [Category Name] 
Description: [Brief Description]
Example Tasks:
- [Example Task 1]
- [Example Task 2]
- [Example Task 3]

[Repeat for remaining categories]`,
  whatItDoes: [
    'Develops a customized task categorization system tailored to a specific business type.',
    'Provides a structured format for defining categories, including names, descriptions, and example tasks.',
    'Aims to optimize workflow and efficiency by organizing tasks into a manageable number of main categories.',
  ],
  tips: [
    'Start by conducting a detailed analysis of the business\'s operations to identify unique characteristics and requirements that will influence the categorization system, ensuring the categories are tailored specifically to the business type.',
    'Collaborate with different department heads within the business to gather insights and understand the common tasks performed across various roles, which will help in accurately defining each category and its relevance.',
    'Regularly review and update the categorization system based on changes in business operations or shifts in strategic goals, to maintain its effectiveness and relevance over time.',
  ],
  howToUse: [
    'Fill in the [BUSINESS TYPE] and [NUMBER OF CATEGORIES] placeholders with the specific type of your business and the desired number of categories you want to use for task organization.',
    '- Example: If you run a digital marketing agency, you might input "Digital Marketing Agency" for [BUSINESS TYPE] and "5" for [NUMBER OF CATEGORIES] if you wish to divide tasks into five main categories such as Content Creation, SEO, Social Media, Client Communication, and Analytics.',
    'Example: For a restaurant business, fill in "Restaurant" as the [BUSINESS TYPE] and "4" as the [NUMBER OF CATEGORIES] to categorize tasks into Food Preparation, Customer Service, Inventory Management, and Marketing.',
  ],
};

export default developTaskCategorizationSystemPrompt;
