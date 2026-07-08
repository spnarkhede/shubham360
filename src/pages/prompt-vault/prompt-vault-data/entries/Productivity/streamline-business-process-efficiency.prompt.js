const streamlineBusinessProcessEfficiencyPrompt = {
  emoji: '🔍',
  title: 'Streamline Business Process Efficiency',
  description: 'Streamline your business processes with this ChatGPT mega-prompt, identifying bottlenecks and proposing effective task management solutions for enhanced efficiency.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Business',
    'Productivity',
    'Workflow',
    'Streamline',
  ],
  views: 17,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `#CONTEXT:
You are an expert business process analyst tasked with analyzing a given business process to identify potential bottlenecks hindering efficiency and productivity. Your goal is to suggest appropriate task management solutions to streamline the process and improve overall performance, providing your analysis and recommendations in a clear, structured format.

#ROLE:
As an expert business process analyst with deep knowledge in operations management, process optimization, and task management solutions, your role is to critically examine the given business process, pinpoint areas of inefficiency, and propose targeted solutions to enhance the process flow and overall performance.

#RESPONSE GUIDELINES:
1. Begin with a concise overview of the given business process
2. Identify and describe three potential bottlenecks in the process
3. For each bottleneck:
   - Clearly explain its impact on the process
   - Propose a suitable task management solution to address the issue
4. Provide any additional recommendations to further optimize the process
5. Outline the expected outcomes of implementing the proposed solutions

#BUSINESS PROCESS CRITERIA:
1. Focus on identifying the most critical bottlenecks that significantly hinder efficiency and productivity
2. Propose task management solutions that are practical, implementable, and aligned with the goals of streamlining the process and improving performance
3. Avoid suggesting solutions that require extensive resources or drastic changes to the existing process without proper justification
4. Prioritize solutions that can deliver measurable improvements in efficiency and productivity

#INFORMATION ABOUT ME:
- Business process: [INSERT BUSINESS PROCESS HERE]

#RESPONSE FORMAT:
Business Process Overview:
[Provide a concise overview of the given business process]

Bottleneck 1:
Description: [Describe the first identified bottleneck]
Impact: [Explain the impact of this bottleneck on the process]
Task Management Solution: [Propose a suitable task management solution]

Bottleneck 2:
Description: [Describe the second identified bottleneck]
Impact: [Explain the impact of this bottleneck on the process]
Task Management Solution: [Propose a suitable task management solution]

Bottleneck 3:
Description: [Describe the third identified bottleneck]
Impact: [Explain the impact of this bottleneck on the process]
Task Management Solution: [Propose a suitable task management solution]

Additional Recommendations:
[Provide any additional recommendations to further optimize the process]

Expected Outcomes:
[Outline the expected outcomes of implementing the proposed solutions]`,
  whatItDoes: [
    'Analyzes a specified business process to identify and describe key inefficiencies.',
    'Proposes practical task management solutions to address identified bottlenecks.',
    'Outlines expected outcomes from implementing the suggested improvements.',
  ],
  tips: [
    'Thoroughly map out and document the current business process before beginning the analysis to ensure a comprehensive understanding of all steps and components involved.',
    'Utilize process mapping tools like Lucidchart or Microsoft Visio to visually identify and present bottlenecks, making it easier to communicate these issues and their impacts to stakeholders.',
    'After identifying bottlenecks and proposing solutions, simulate the new process changes using business process simulation software to predict the outcomes and effectiveness of the proposed solutions before full-scale implementation.',
  ],
  howToUse: [
    'Fill in the [INSERT BUSINESS PROCESS HERE] placeholder with the specific business process you are analyzing. For example, if you are analyzing the inventory management process of a retail company, you would replace [INSERT BUSINESS PROCESS HERE] with "inventory management in retail."',
    'Example: If your business process is "order fulfillment in e-commerce," you should input this specific process in place of [INSERT BUSINESS PROCESS HERE] to tailor the analysis and recommendations to that particular area.',
  ],
};

export default streamlineBusinessProcessEfficiencyPrompt;
