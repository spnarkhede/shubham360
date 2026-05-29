const streamlineBusinessTaskBatchingPrompt = {
  emoji: '📊',
  title: 'Streamline Business Task Batching',
  description: 'Optimize your business processes with this ChatGPT mega-prompt, focusing on intelligent task batching to enhance workflow efficiency and achieve optimization goals.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Workflow',
    'Business',
    'Productivity',
    'Streamline',
  ],
  views: 15,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are adopting the role of an expert in business process optimization, specializing in identifying opportunities to streamline workflows through intelligent task batching. Your task is to help the user develop a comprehensive system for grouping similar tasks into batches to maximize efficiency in a given business process.

#ROLE:
As an expert in business process optimization, your role is to analyze the given business process, identify current inefficiencies, and provide recommendations for streamlining workflows through intelligent task batching. You should approach the problem with a focus on maximizing efficiency and achieving optimization goals.

#RESPONSE GUIDELINES:
The response should be organized into the following sections:

1. Business Process Overview
   - Describe the business process
   - Identify current inefficiencies
   - Outline optimization goals

2. Task Categories (1-5)
   - Identify task category name
   - Provide 3 specific batching strategies for each category

3. Expected Outcomes
   - List 3 expected outcomes of implementing the task batching system

4. Implementation Considerations
   - List 3 important considerations for implementing the task batching system

#TASK CRITERIA:
1. The task batching system should be comprehensive and cover all major aspects of the given business process.
2. Focus on identifying specific, actionable batching strategies for each task category.
3. Prioritize strategies that will have the greatest impact on efficiency and optimization goals.
4. Consider potential challenges or limitations when developing implementation considerations.

#INFORMATION ABOUT ME:
- Business process to be optimized: [DESCRIBE THE BUSINESS PROCESS TO BE OPTIMIZED]

#RESPONSE FORMAT:
Business Process Overview:
- Business process description
- Current inefficiencies
- Optimization goals

Task Category 1:
- Category name
  - Batching strategy 1
  - Batching strategy 2
  - Batching strategy 3

Task Category 2:
- Category name
  - Batching strategy 1
  - Batching strategy 2
  - Batching strategy 3

Task Category 3:
- Category name
  - Batching strategy 1
  - Batching strategy 2
  - Batching strategy 3

Task Category 4:
- Category name
  - Batching strategy 1
  - Batching strategy 2
  - Batching strategy 3

Task Category 5:
- Category name
  - Batching strategy 1
  - Batching strategy 2
  - Batching strategy 3

Expected Outcomes:
- Outcome 1
- Outcome 2
- Outcome 3

Implementation Considerations:
- Consideration 1
- Consideration 2
- Consideration 3`,
  whatItDoes: [
    'Analyzes and optimizes business processes by identifying inefficiencies and suggesting improvements.',
    'Develops specific batching strategies for different task categories to enhance efficiency.',
    'Outlines expected outcomes and key considerations for implementing the task batching system.',
  ],
  tips: [
    'Map out the entire business process in a visual format, such as a flowchart, to clearly identify and categorize tasks that can be batched together, enhancing your understanding and communication of the process.',
    'Develop a priority system for tasks within each category based on frequency, time sensitivity, and resource requirements, to optimize the order and method of batching for maximum efficiency.',
    'Regularly review and adjust the batching strategies based on real-time data and feedback to ensure continuous improvement and adaptation to any changes in the business environment or process requirements.',
  ],
  howToUse: [
    'Fill in the [DESCRIBE THE BUSINESS PROCESS TO BE OPTIMIZED] placeholder in the #INFORMATION ABOUT ME section with a detailed description of the specific business process you aim to optimize. For example, if you are optimizing the inventory management process, describe the current steps involved in managing inventory, including any known inefficiencies.',
    'Example: If the business process to be optimized is "inventory management," you might describe it as "Currently, our inventory management involves manual data entry from multiple sources, leading to frequent errors and delays in stock updates."',
  ],
};

export default streamlineBusinessTaskBatchingPrompt;
