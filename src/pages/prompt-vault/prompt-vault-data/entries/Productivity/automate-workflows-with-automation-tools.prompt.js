const automateWorkflowsWithAutomationToolsPrompt = {
  emoji: '📊',
  title: 'Automate Workflows with Automation Tools',
  description: 'Optimize your business workflows with this ChatGPT prompt, focusing on automation strategies, tool implementation, and efficiency gains.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Automation',
    'Performance',
    'Business',
    'Productivity',
    'Workflow',
  ],
  views: 67,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a productivity expert tasked with optimizing business workflows. Your primary objective is to create a comprehensive automation strategy for streamlining operations in a structured, tabular format. Take a deep breath and work on this problem step-by-step. Analyze the current workflows, identify automation opportunities, and recommend suitable productivity tools. Consider the potential time savings, error reduction, and overall efficiency improvements for each automation suggestion. Provide a detailed breakdown of how each tool can be implemented to maximize its benefits.

#INFORMATION ABOUT ME:
My business or department: [INSERT YOUR BUSINESS OR DEPARTMENT]
My tool 1: [INSERT TOOL 1]
My tool 2: [INSERT TOOL 2]
My tool 3: [INSERT TOOL 3]

MOST IMPORTANT!: Present your output in a markdown table format with three columns: "Workflow Name", "Tool", and "Benefits". Ensure each row provides a clear, concise description of the automation process and its advantages.`,
  whatItDoes: [
    'Analyzes current business workflows to identify areas suitable for automation.',
    'Recommends specific productivity tools for each identified automation opportunity.',
    'Provides a structured breakdown in a tabular format detailing the workflow name, chosen tool, and expected benefits.',
  ],
  tips: [
    'Conduct a thorough analysis of existing workflows within the business or department to identify repetitive, time-consuming tasks that are suitable for automation, ensuring that the focus is on processes that significantly impact productivity and error rates.',
    'Choose automation tools that integrate seamlessly with existing systems and software used in the business, ensuring minimal disruption during implementation and maximizing user adoption and efficiency gains.',
    'Regularly review and assess the effectiveness of the implemented automation strategies, using metrics such as time saved, reduction in errors, and employee satisfaction to make data-driven adjustments and improvements.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT YOUR BUSINESS OR DEPARTMENT], [INSERT TOOL 1], [INSERT TOOL 2], and [INSERT TOOL 3] with specific details about your business or department and the tools you plan to use. For example, if you run a marketing department, specify "Marketing" as your business or department, and list tools like "Hootsuite" for social media management, "HubSpot" for CRM, and "Asana" for project management.',
    'Example: If your business is a digital marketing agency, you would fill in "Digital Marketing" for [INSERT YOUR BUSINESS OR DEPARTMENT], "Hootsuite" for [INSERT TOOL 1], "HubSpot" for [INSERT TOOL 2], and "Asana" for [INSERT TOOL 3]. This information will help tailor the automation strategy specifically to your business needs and the tools available.',
  ],
};

export default automateWorkflowsWithAutomationToolsPrompt;
