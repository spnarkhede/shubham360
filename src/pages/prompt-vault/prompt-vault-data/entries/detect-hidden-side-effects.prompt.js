const detectHiddenSideEffectsPrompt = {
  emoji: '🔍',
  title: 'Detect Hidden Side Effects',
  description: 'Analyze JavaScript functions for hidden side effects with this AI prompt, ensuring code purity and stability.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'JavaScript',
    'Performance',
    'Coding',
    'AI Prompts',
    'Detect',
  ],
  views: 17,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `Adopt the role of an expert functional programming code auditor who spent years debugging enterprise JavaScript applications plagued by hidden side effects and unpredictable behavior. Your primary objective is to systematically analyze JavaScript functions and identify hidden side effects that masquerade as pure functions, then provide concrete refactoring recommendations based on Luis Atencio's functional programming principles in a comprehensive analysis format. You understand that seemingly innocent functions often harbor mutations, global state modifications, and implicit I/O operations that make codebases fragile and untestable. Apply rigorous functional programming analysis to trace data flow through functions, detect object mutations of passed parameters, identify global state modifications, spot implicit I/O operations, and recommend specific refactoring strategies toward pure functions with explicit parameters and return values. Take a deep breath and work on this problem step-by-step.

Begin by examining each function's signature and implementation for purity violations. Trace the complete data flow to identify where external state gets modified. Analyze parameter handling to detect mutations of passed objects or arrays. Check for global variable access or modification patterns. Identify implicit I/O operations like DOM manipulation, API calls, or console logging. Map out dependencies that aren't explicitly declared in function parameters. Provide specific refactoring recommendations that transform impure functions into pure ones with explicit inputs and outputs.

#INFORMATION ABOUT ME:
My JavaScript functions to analyze: [INSERT THE JAVASCRIPT FUNCTIONS YOU WANT ANALYZED]
My codebase context: [DESCRIBE THE APPLICATION CONTEXT AND USAGE PATTERNS]
My testing requirements: [SPECIFY YOUR TESTING AND PREDICTABILITY NEEDS]
My refactoring constraints: [DESCRIBE ANY LIMITATIONS OR REQUIREMENTS FOR CHANGES]

MOST IMPORTANT!: Structure your analysis with clear headings for each function including "Side Effect Detection", "Data Flow Analysis", "Mutation Points", "Global State Issues", "Implicit I/O Operations", and "Pure Function Refactoring Recommendations" in a detailed breakdown format.`,
  whatItDoes: [
    'Analyzes JavaScript functions for hidden side effects and unpredictable behavior.',
    'Identifies mutations, global state changes, and implicit I/O operations in code.',
    'Provides refactoring recommendations to transform impure functions into pure ones.',
  ],
  tips: [
    'Clearly define the JavaScript functions you want analyzed, ensuring they align with your debugging and refactoring goals.',
    'Describe the application context and usage patterns to provide a comprehensive understanding of how the functions operate within your codebase.',
    'Specify your testing and predictability needs to ensure the refactoring recommendations meet your quality assurance standards.',
  ],
  howToUse: [
    'Fill in the [INSERT THE JAVASCRIPT FUNCTIONS YOU WANT ANALYZED], [DESCRIBE THE APPLICATION CONTEXT AND USAGE PATTERNS], [SPECIFY YOUR TESTING AND PREDICTABILITY NEEDS], and [DESCRIBE ANY LIMITATIONS OR REQUIREMENTS FOR CHANGES] placeholders with specific information about your JavaScript functions and codebase context.',
    'Example: "My JavaScript functions to analyze include data processing functions in a web application. The application context involves real-time data updates and user interactions. My testing requirements focus on ensuring consistent behavior across different browsers. My refactoring constraints include maintaining backward compatibility with existing APIs."',
  ],
};

export default detectHiddenSideEffectsPrompt;
