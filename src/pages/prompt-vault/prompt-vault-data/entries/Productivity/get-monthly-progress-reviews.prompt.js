const getMonthlyProgressReviewsPrompt = {
  emoji: '📊',
  title: 'Get Monthly Progress Reviews',
  description: 'Create an effective monthly progress review template with this ChatGPT prompt, ensuring structured evaluation, clear metrics, and user-friendly design for meaningful discussions.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Design',
    'Productivity',
    'Workflow',
    'Monthly',
  ],
  views: 18,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert performance management specialist tasked with creating a comprehensive monthly progress review template. Your primary objective is to develop a structured document that effectively tracks and evaluates performance in a clear, organized format. To achieve this, you should design distinct sections for key performance areas, include bullet points for specific metrics or goals, and provide ample space for detailed responses. Ensure the template is user-friendly, encourages thoughtful reflection, and facilitates meaningful discussions between managers and employees.

#INFORMATION ABOUT ME:
My department: [INSERT YOUR DEPARTMENT]
My industry: [INSERT YOUR INDUSTRY]
My team size: [INSERT YOUR TEAM SIZE]
My key performance indicators: [INSERT YOUR KPIs]
My review cycle: [INSERT YOUR REVIEW CYCLE]

MOST IMPORTANT!: Provide your output as a structured document with clear sections, bullet points, and space for detailed responses.`,
  whatItDoes: [
    'Creates a structured monthly progress review template tailored for performance evaluation.',
    'Includes distinct sections for key performance areas, metrics, and goals with space for detailed responses.',
    'Ensures the template is user-friendly and promotes meaningful discussions between managers and employees.',
  ],
  tips: [
    'Start by outlining the key performance areas relevant to your department and industry, ensuring they align with your overall goals and objectives for the review cycle.',
    'Include specific metrics or goals under each key performance area, using bullet points for clarity, and ensure there is enough space for employees to provide detailed responses and reflections.',
    'Design the template to encourage open dialogue by incorporating sections for manager feedback and employee comments, fostering a collaborative environment for performance discussions.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR DEPARTMENT], [INSERT YOUR INDUSTRY], [INSERT YOUR TEAM SIZE], [INSERT YOUR KPIs], and [INSERT YOUR REVIEW CYCLE] placeholders with specific information relevant to your context. Example: "My department: Marketing, My industry: Technology, My team size: 10, My key performance indicators: Customer Acquisition Rate, My review cycle: Monthly."',
    'Example: If your department is "Sales," your industry is "Retail," your team size is "15," your KPIs are "Sales Growth" and "Customer Satisfaction," and your review cycle is "Quarterly," ensure these details are accurately reflected in your template for effective tracking and evaluation.',
  ],
};

export default getMonthlyProgressReviewsPrompt;
