const evaluateProjectsWithRICEScoringModelPrompt = {
  emoji: '📊',
  title: 'Evaluate Projects with RICE Scoring Model',
  description: 'Prioritize projects effectively with this ChatGPT prompt, using the RICE scoring model for strategic decision-making.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Evaluate',
    'Projects',
    'RICE',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
  ],
  prompt: `Adopt the role of a project management expert tasked with evaluating potential projects using the RICE scoring model. Your primary objective is to prioritize tasks effectively by assessing each project's Reach, Impact, Confidence, and Effort scores. Take a deep breath and work on this problem step-by-step. Create a comprehensive evaluation that will help decision-makers understand the potential value and resource requirements of each project. Provide clear explanations for each score, ensuring that the rationale behind each rating is transparent and justifiable.

#INFORMATION ABOUT ME:
My project list: [INSERT LIST OF PROJECTS TO EVALUATE]
My organization's goals: [DESCRIBE YOUR ORGANIZATION'S MAIN OBJECTIVES]
My available resources: [OUTLINE AVAILABLE RESOURCES (e.g., TIME, BUDGET, PERSONNEL)]
My industry: [SPECIFY YOUR INDUSTRY]
My evaluation timeframe: [INDICATE THE TIME PERIOD FOR EVALUATION]

MOST IMPORTANT!: Present your output in a markdown table format with the following columns: PROJECT NAME, REACH SCORE, IMPACT SCORE, CONFIDENCE SCORE, EFFORT SCORE, and RICE SCORE (calculated as (Reach * Impact * Confidence) / Effort). Include a brief explanation for each score beneath the table.`,
  whatItDoes: [
    'Evaluates potential projects using the RICE scoring model to prioritize tasks based on Reach, Impact, Confidence, and Effort.',
    'Provides a structured format for presenting the evaluation results in a markdown table, including calculated RICE scores.',
    'Offers clear explanations for each project\'s scores to aid decision-makers in understanding the value and resource requirements.',
  ],
  tips: [
    'Develop a clear understanding of your organization\'s main objectives and align each project\'s potential impact with these goals to ensure that the RICE scoring reflects strategic priorities.',
    'Establish standardized criteria for assessing Reach, Impact, Confidence, and Effort across all projects to maintain consistency in scoring and provide a transparent evaluation process that stakeholders can trust.',
    'Regularly review and adjust the RICE scoring parameters as your industry evolves and as new information about project outcomes and resource availability comes to light, ensuring that the prioritization remains relevant and effective.',
  ],
  howToUse: [
    'Fill in [INSERT LIST OF PROJECTS TO EVALUATE], [DESCRIBE YOUR ORGANIZATION\'S MAIN OBJECTIVES], [OUTLINE AVAILABLE RESOURCES (e.g., TIME, BUDGET, PERSONNEL)], [SPECIFY YOUR INDUSTRY], and [INDICATE THE TIME PERIOD FOR EVALUATION] with specific details about your projects, organizational goals, resources, industry, and the timeframe for evaluation.',
    '- Example:',
    '- [INSERT LIST OF PROJECTS TO EVALUATE] could be "Website Redesign, New Product Launch, Customer Service Improvement"',
    '- [DESCRIBE YOUR ORGANIZATION\'S MAIN OBJECTIVES] might be "Increase market share, improve customer satisfaction, enhance operational efficiency"',
    '- [OUTLINE AVAILABLE RESOURCES] could be "100 man-hours per week, $50,000 budget, 20 team members"',
    '- [SPECIFY YOUR INDUSTRY] could be "Technology"',
    '- [INDICATE THE TIME PERIOD FOR EVALUATION] might be "Q1 2024"',
    'Example: If your list of projects includes "Website Redesign, New Product Launch, Customer Service Improvement", your organization\'s main objectives are to "Increase market share and improve customer satisfaction", your available resources include "100 man-hours per week, a $50,000 budget, and 20 team members", your industry is "Technology", and your evaluation timeframe is "Q1 2024", fill these details accordingly to tailor the evaluation to your specific scenario.',
  ],
};

export default evaluateProjectsWithRICEScoringModelPrompt;
