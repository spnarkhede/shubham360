const automateTasksViaZapierPrompt = {
  emoji: '🤖',
  title: 'Automate Tasks via Zapier',
  description: 'Streamline your workflows with this ChatGPT prompt, designed to guide you through automating repetitive tasks using Zapier.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Automate',
    'Tasks',
  ],
  views: 19,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert automation specialist tasked with streamlining workflows using Zapier. Your primary objective is to create a comprehensive guide for automating repetitive tasks to boost productivity in a clear, step-by-step format. To achieve this, you should: identify key repetitive tasks suitable for automation, outline the setup process for each Zap, explain how to test and troubleshoot automations, and provide best practices for maintaining and optimizing workflows. Use dependency grammar framework to structure your documentation, ensuring clarity and logical flow. Take a deep breath and work on this problem step-by-step.

#INFORMATION ABOUT ME:
My business type: [INSERT TYPE OF BUSINESS]
My main repetitive tasks: [LIST KEY REPETITIVE TASKS]
My current workflow pain points: [DESCRIBE WORKFLOW CHALLENGES]
My team's technical proficiency: [SPECIFY TEAM'S TECHNICAL SKILL LEVEL]
My desired outcomes: [LIST AUTOMATION GOALS]

MOST IMPORTANT!: Provide your output in a structured format with clear headings, subheadings, and bullet points for each automation process.`,
  whatItDoes: [
    'Identifies and lists key repetitive tasks suitable for automation based on user input.',
    'Provides a detailed, step-by-step guide on setting up each Zap, including testing and troubleshooting methods.',
    'Offers best practices for maintaining and optimizing automated workflows to enhance productivity.',
  ],
  tips: [
    'Begin by listing and categorizing all repetitive tasks within your business, focusing on those that are time-consuming and do not require complex decision-making, to identify prime candidates for automation with Zapier.',
    'Develop a clear, step-by-step guide for setting up each Zap, including triggers and actions specific to your business needs, ensuring each step is documented in a way that matches the technical skill level of your team.',
    'Regularly review and optimize your Zaps by tracking performance metrics and gathering feedback from your team, adjusting automations as necessary to improve efficiency and meet your desired automation goals.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT TYPE OF BUSINESS], [LIST KEY REPETITIVE TASKS], [DESCRIBE WORKFLOW CHALLENGES], [SPECIFY TEAM\'S TECHNICAL SKILL LEVEL], and [LIST AUTOMATION GOALS] with specific information about your business and automation needs.',
    'Example: [INSERT TYPE OF BUSINESS] could be "E-commerce store", [LIST KEY REPETITIVE TASKS] might include "order processing, customer follow-ups, inventory updates", [DESCRIBE WORKFLOW CHALLENGES] could be "time-consuming manual data entry, error-prone order tracking", [SPECIFY TEAM\'S TECHNICAL SKILL LEVEL] might be "moderate, with basic knowledge of CRM tools", and [LIST AUTOMATION GOALS] could be "reduce manual entry errors, speed up order processing, improve customer response time".',
    'Example: If you run an e-commerce store, your key repetitive tasks might include processing orders, updating inventory, and sending customer follow-ups. Your workflow challenges could involve slow manual processes and frequent errors. Your team\'s technical proficiency might be moderate, familiar with basic e-commerce platforms but not advanced automation tools. Your automation goals could include reducing manual entry errors, speeding up order processing, and improving response times to customer inquiries.',
  ],
};

export default automateTasksViaZapierPrompt;
