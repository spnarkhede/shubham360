const createCustomDashboardDesignsPrompt = {
  emoji: '🎯',
  title: 'Create Custom Dashboard Designs',
  description: 'Design your tailored goal-tracking dashboard with this ChatGPT mega-prompt, ensuring clear progress visualization and actionable insights for your business objectives.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Business',
    'Design',
    'Productivity',
    'Workflow',
  ],
  views: 26,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are a highly skilled goal-tracking dashboard designer tasked with creating an effective visual layout for a specific business type to monitor their progress. The dashboard should be tailored to the business's needs and provide a clear overview of their progress towards objectives.

#ROLE:
Adopt the role of an expert goal-tracking dashboard designer with proficiency in the preferred software specified by the user. Your task is to help the user design a comprehensive and visually appealing dashboard template that meets the specific needs of their business type.

#RESPONSE GUIDELINES:
1. Create a polished mock-up table featuring essential columns such as "Goal," "Current Status," "Target," and "Progress %" to provide a clear overview of the business's progress towards its objectives.
2. Incorporate best practices in data visualization and dashboard design to ensure the layout is intuitive, informative, and actionable for stakeholders.
3. Include additional visualizations to enhance the dashboard's effectiveness.
4. Specify the color scheme, typography, and interactive elements to create a visually appealing and engaging dashboard.

#TASK CRITERIA:
1. The dashboard must be tailored to the specific needs of the given business type.
2. Utilize the user's preferred software to create the mock-up table and visualizations.
3. Ensure the layout is intuitive, informative, and actionable for stakeholders.
4. Focus on providing a clear overview of the business's progress towards its objectives.
5. Avoid cluttering the dashboard with unnecessary information or design elements.

#INFORMATION ABOUT ME:
- My business type: [BUSINESS TYPE]
- My preferred software: [PREFERRED SOFTWARE]
- My top 3 goals: [GOAL 1], [GOAL 2], [GOAL 3]

#RESPONSE FORMAT:
[BUSINESS TYPE] Goal-Tracking Dashboard

Table:
| Goal | Current Status | Target | Progress % |
|------|----------------|--------|------------|
| [GOAL 1] | [CURRENT STATUS 1] | [TARGET 1] | [PROGRESS % 1] |
| [GOAL 2] | [CURRENT STATUS 2] | [TARGET 2] | [PROGRESS % 2] |
| [GOAL 3] | [CURRENT STATUS 3] | [TARGET 3] | [PROGRESS % 3] |

Additional Visualizations:
1. [VISUALIZATION 1]
2. [VISUALIZATION 2]

Color Scheme: [COLOR SCHEME]
Typography: [TYPOGRAPHY]
Interactive Elements: [INTERACTIVE ELEMENTS]`,
  whatItDoes: [
    'Designs a customized goal-tracking dashboard for a specific business type using the user\'s preferred software.',
    'Incorporates essential elements like goal status, targets, and progress percentages in a clear, tabular format.',
    'Enhances the dashboard with additional visualizations, color schemes, typography, and interactive elements for better stakeholder engagement.',
  ],
  tips: [
    'Customize the dashboard\'s color scheme and typography to reflect the branding of the specific business type, enhancing the visual coherence and professional appeal of the dashboard.',
    'Integrate interactive elements such as filters and drill-down capabilities to allow stakeholders to view data at different levels of granularity, making the dashboard more user-friendly and adaptable to different user needs.',
    'Regularly update the dashboard to reflect real-time data and include a feedback mechanism for users to suggest improvements or report issues, ensuring the dashboard remains an effective tool for tracking progress towards business goals.',
  ],
  howToUse: [
    'Fill in the [BUSINESS TYPE], [PREFERRED SOFTWARE], [GOAL 1], [GOAL 2], and [GOAL 3] placeholders with specific details about your business. For example, if you run a digital marketing agency, use "Digital Marketing Agency" for [BUSINESS TYPE], "Tableau" for [PREFERRED SOFTWARE], and "Increase website traffic", "Improve conversion rate", "Expand social media presence" for [GOAL 1], [GOAL 2], and [GOAL 3] respectively.',
    'Example: If your business type is "E-commerce", your preferred software is "Microsoft Power BI", and your top 3 goals are "Increase annual revenue", "Grow customer base by 20%", and "Launch 3 new products", you should fill in the placeholders as follows:',
    '[BUSINESS TYPE] = E-commerce',
    '[PREFERRED SOFTWARE] = Microsoft Power BI',
    '[GOAL 1] = Increase annual revenue',
    '[GOAL 2] = Grow customer base by 20%',
    '[GOAL 3] = Launch 3 new products',
  ],
};

export default createCustomDashboardDesignsPrompt;
