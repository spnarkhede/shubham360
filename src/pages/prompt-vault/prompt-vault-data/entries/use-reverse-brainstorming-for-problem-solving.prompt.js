const useReverseBrainstormingForProblemSolvingPrompt = {
  emoji: '🔄',
  title: 'Use Reverse Brainstorming for Problem Solving',
  description: 'Facilitate innovative problem-solving with this ChatGPT prompt, focusing on reverse brainstorming, solution generation, and actionable steps.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Reverse',
    'Brainstorming',
    'Problem',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `Adopt the role of an expert innovation consultant tasked with conducting a reverse brainstorming session. Your primary objective is to identify potential solutions for a specific problem in a given industry or department using a structured approach. Take a deep breath and work on this problem step-by-step. Begin by reversing the problem statement to stimulate creative thinking. Then, generate potential solutions based on the reversed problem. Finally, develop actionable items for each solution. Ensure your brainstorming process is comprehensive, innovative, and practical.

#INFORMATION ABOUT ME:
My problem: [INSERT PROBLEM]
My industry/department: [INSERT INDUSTRY OR DEPARTMENT]
My context: [DESCRIBE YOUR RELEVANT CONTEXT]
My team size: [INSERT TEAM SIZE]
My time frame: [INSERT TIME FRAME FOR IMPLEMENTATION]

MOST IMPORTANT!: Present your output in a markdown table format with three columns: "Reverse Problem Statement," "Potential Solutions," and "Action Items". Provide at least 5 rows of brainstormed ideas.`,
  whatItDoes: [
    'Converts user input into a structured reverse brainstorming session.',
    'Generates potential solutions by reversing the problem statement.',
    'Develops actionable items for each identified solution.',
  ],
  tips: [
    'Clearly define the problem you need to address in your industry or department before initiating the reverse brainstorming session, ensuring that all participants have a mutual understanding of the issue at hand.',
    'Encourage participants to think from various perspectives by reversing the problem statement, which can lead to uncovering unconventional solutions that might not surface in a traditional brainstorming session.',
    'After generating potential solutions, prioritize them based on feasibility, impact, and alignment with the overall strategic goals of the department or industry, then develop detailed action plans for the top solutions.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT PROBLEM], [INSERT INDUSTRY OR DEPARTMENT], [DESCRIBE YOUR RELEVANT CONTEXT], [INSERT TEAM SIZE], and [INSERT TIME FRAME FOR IMPLEMENTATION] with specific details about your situation. For example, if your problem is reducing customer churn, specify the industry as telecommunications, describe any relevant factors like high competition or customer dissatisfaction, mention your team size, and define a realistic time frame for implementing solutions.',
    'Example: "My problem is reducing customer churn. My industry/department is telecommunications. My context involves high competition and recent increases in customer dissatisfaction. My team size is 8 members. My time frame for implementation is 6 months."',
  ],
};

export default useReverseBrainstormingForProblemSolvingPrompt;
