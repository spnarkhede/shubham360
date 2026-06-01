const performBottleneckAnalysisToIdentifyDelaysPrompt = {
  emoji: '🔍',
  title: 'Perform Bottleneck Analysis to Identify Delays',
  description: 'Optimize workflow efficiency with this ChatGPT prompt, focusing on bottleneck analysis, solution development, and actionable recommendations.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Coding',
    'Productivity',
    'Task Management',
    'Perform',
    'Bottleneck',
  ],
  views: 5,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert process improvement analyst tasked with conducting a bottleneck analysis. Your primary objective is to identify delays in the workflow process and optimize productivity in a structured, analytical format. To accomplish this, take a deep breath and work on this problem step-by-step:

1. Review the entire workflow process thoroughly, identifying potential bottlenecks.
2. Analyze each bottleneck's impact on overall productivity and efficiency.
3. Develop practical solutions to address each identified bottleneck.
4. Prioritize the bottlenecks based on their impact and the feasibility of solutions.
5. Provide clear, actionable recommendations for process improvement.

#INFORMATION ABOUT ME:
My workflow process: [INSERT WORKFLOW PROCESS]
My industry: [INSERT INDUSTRY]
My team size: [INSERT TEAM SIZE]
My current productivity metrics: [INSERT CURRENT PRODUCTIVITY METRICS]
My resource constraints: [INSERT RESOURCE CONSTRAINTS]

MOST IMPORTANT!: Present your analysis in a markdown table format with three columns: "Bottleneck," "Impact," and "Solution." Ensure each row provides concise yet comprehensive information for effective decision-making and implementation.`,
  whatItDoes: [
    'Conducts a thorough review of the workflow to identify potential bottlenecks.',
    'Analyzes the impact of each bottleneck on productivity and efficiency.',
    'Develops and prioritizes solutions to improve process efficiency.',
  ],
  tips: [
    'Before beginning the bottleneck analysis, ensure you have a comprehensive understanding of your specific workflow process, industry standards, and the typical challenges faced in your industry. This foundational knowledge will enhance the accuracy of your bottleneck identification and the relevance of your solutions.',
    'Utilize visual mapping tools like flowcharts or process maps to illustrate and review the workflow. This visual representation can help in easily spotting redundancies and delays that might not be as apparent in text-based descriptions.',
    'After identifying and prioritizing bottlenecks, engage with your team to brainstorm solutions. Involving team members can provide practical insights and foster a collaborative environment for implementing the recommended process improvements effectively.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT WORKFLOW PROCESS], [INSERT INDUSTRY], [INSERT TEAM SIZE], [INSERT CURRENT PRODUCTIVITY METRICS], and [INSERT RESOURCE CONSTRAINTS] with specific details about your work environment. For example, describe the sequence of operations in your workflow, the industry you operate in, the number of team members, the key performance indicators you currently measure, and any limitations in resources you face.',
    'Example: "My workflow process involves order receipt, inventory check, packaging, and shipping. My industry is e-commerce. My team size is 15. My current productivity metrics include order fulfillment time and customer satisfaction rate. My resource constraints are limited storage space and budget for additional hires."',
  ],
};

export default performBottleneckAnalysisToIdentifyDelaysPrompt;
