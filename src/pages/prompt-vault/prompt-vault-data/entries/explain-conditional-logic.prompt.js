const explainConditionalLogicPrompt = {
  emoji: '🌳',
  title: 'Explain Conditional Logic',
  description: 'Analyze conditional logic code with this AI prompt, creating decision trees and simplifying nested logic for clarity.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Coding',
    'AI Prompts',
    'Explain',
    'Conditional',
  ],
  views: 16,
  recommendedTools: [
    'ChatGPT',
    'Grok',
    'Claude',
    'Gemini',
  ],
  prompt: `Adopt the role of an expert programming instructor and structured logic analyst who specializes in Dijkstra's control flow principles and decision tree visualization. Your primary objective is to analyze conditional logic code and create comprehensive decision tree mappings that demonstrate clear branching paths, minimize nested complexity, and trace execution scenarios in a visual and educational format. You combine deep knowledge of structured programming theory with practical code analysis to help users understand how their conditional statements create decision pathways. Apply Dijkstra's emphasis on obvious outcomes and clarity verification by breaking down each condition into its fundamental decision points, mapping true/false branches systematically, and demonstrating how nested logic creates compound decision trees. Take a deep breath and work on this problem step-by-step.

Start by examining the provided code to identify all conditional statements and their hierarchy. Create a visual decision tree showing each condition as a decision node with clear true/false branches. Trace through multiple test scenarios to demonstrate which execution paths the code follows under different input conditions. Analyze the complexity and suggest improvements based on structured programming principles where nested logic could be simplified or clarified.

#INFORMATION ABOUT ME:
My conditional code to analyze: [INSERT YOUR CONDITIONAL CODE HERE]
My programming language: [INSERT THE PROGRAMMING LANGUAGE YOU'RE USING]
My specific areas of confusion: [INSERT WHAT ASPECTS OF THE LOGIC YOU FIND CONFUSING]
My experience level with programming: [INSERT YOUR PROGRAMMING EXPERIENCE LEVEL]
My preferred learning style: [INSERT WHETHER YOU PREFER VISUAL, TEXT-BASED, OR EXAMPLE-DRIVEN EXPLANATIONS]

MOST IMPORTANT!: Structure your analysis with clear headings including Decision Tree Diagram, Execution Path Traces, Complexity Analysis, and Improvement Recommendations. Use ASCII art or text-based diagrams for the decision tree visualization and provide step-by-step execution traces for at least 3 different input scenarios.`,
  whatItDoes: [
    'Analyzes conditional logic code to create decision tree mappings.',
    'Breaks down conditions into decision points, mapping true/false branches.',
    'Suggests improvements to simplify nested logic using structured programming principles.',
  ],
  tips: [
    'Clearly define your conditional code and programming language to ensure accurate analysis and visualization.',
    'Identify specific areas of confusion to focus the analysis on aspects that need clarification, enhancing your understanding.',
    'Choose a preferred learning style to tailor the explanation format, whether visual, text-based, or example-driven, for optimal comprehension.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR CONDITIONAL CODE HERE], [INSERT THE PROGRAMMING LANGUAGE YOU\'RE USING], [INSERT WHAT ASPECTS OF THE LOGIC YOU FIND CONFUSING], [INSERT YOUR PROGRAMMING EXPERIENCE LEVEL], and [INSERT WHETHER YOU PREFER VISUAL, TEXT-BASED, OR EXAMPLE-DRIVEN EXPLANATIONS] placeholders with your specific code, language, confusion points, experience level, and learning preference.',
    'Example: "My conditional code to analyze is a Python if-else statement. I am confused about how nested conditions affect the flow. I am a beginner in programming and prefer visual explanations."',
  ],
};

export default explainConditionalLogicPrompt;
