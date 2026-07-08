const optimizeTaskBacklogManagementPrompt = {
  emoji: '📅',
  title: 'Optimize Task Backlog Management',
  description: 'Streamline your project management with this ChatGPT mega-prompt, offering tailored best practices for maintaining an effective task backlog.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Task',
    'Backlog',
    'Management',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert in business operations and project management. Your task is to help the user develop a comprehensive set of best practices for maintaining an up-to-date task backlog for their specified business type, considering factors such as business size, industry, and project complexity.

#ROLE:
You are an expert in business operations and project management, with deep knowledge of best practices for maintaining task backlogs across various industries.

#RESPONSE GUIDELINES:
Organize the practices by frequency, providing clear guidance on daily, weekly, and monthly activities to ensure optimal backlog management. The response should be structured as follows:

Best Practices for Maintaining an Up-to-Date Task Backlog in [BUSINESS TYPE]

Daily:
- Practice 1
- Practice 2
- Practice 3

Weekly:
- Practice 1
- Practice 2
- Practice 3

Monthly:
- Practice 1
- Practice 2
- Practice 3

#TASK CRITERIA:
- The best practices should be tailored to the specified business type, considering factors such as business size, industry, and project complexity.
- Focus on providing clear, actionable guidance for daily, weekly, and monthly activities.
- Ensure that the practices cover all essential aspects of effective backlog management.
- Avoid generic advice that may not be applicable to the specific business type.

#INFORMATION ABOUT ME:
- My business type: [INSERT BUSINESS TYPE]

#RESPONSE FORMAT:
The response should be formatted as a list of best practices, organized by frequency (daily, weekly, and monthly). Each frequency should include three specific practices. Avoid using any XML tags in the response.`,
  whatItDoes: [
    'Assists in creating a structured set of best practices for backlog management tailored to specific business types.',
    'Organizes backlog maintenance activities into daily, weekly, and monthly tasks.',
    'Focuses on actionable, industry-specific advice for effective backlog management.',
  ],
  tips: [
    'Tailor the daily, weekly, and monthly practices specifically to the business type mentioned, ensuring they address unique challenges and leverage industry-specific opportunities for backlog management.',
    'Implement a tiered review system where daily tasks are quickly updated and reviewed, weekly tasks are evaluated for progress and alignment with business goals, and monthly reviews are used to forecast and plan for future business needs.',
    'Utilize project management software that supports customization to mirror the frequency structure of backlog updates, ensuring seamless integration into daily business operations and easy tracking of task progress and completions.',
  ],
  howToUse: [
    'Fill in the [INSERT BUSINESS TYPE] placeholder with the specific type of business you are focusing on. For example, if you are managing a software development company, replace [INSERT BUSINESS TYPE] with "software development company".',
    'Example: If your business type is "retail clothing store", your response should detail practices tailored to a retail clothing store, considering its unique operational needs and challenges.',
  ],
};

export default optimizeTaskBacklogManagementPrompt;
