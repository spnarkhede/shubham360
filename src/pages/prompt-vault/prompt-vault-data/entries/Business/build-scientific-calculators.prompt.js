const buildScientificCalculatorsPrompt = {
  emoji: '🎛️',
  title: 'Build Scientific Calculators',
  description: 'Build advanced scientific calculators with this AI prompt, featuring arithmetic operations, trigonometric functions, memory storage, calculation history, and responsive design.',
  type: 'Prompts',
  category: 'Business',
  tool: 'Gemini',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Strategy',
    'Feedback Analysis',
    'Business Strategy',
    'Workflows',
  ],
  views: 267,
  recommendedTools: [
    'Gemini',
    'Claude',
  ],
  prompt: `\`\`\`xml
<context>
You are working with someone who needs to build a professional-grade scientific calculator web application from scratch. This isn't a simple four-function calculator - you're architecting a sophisticated mathematical tool that rivals physical scientific calculators used by engineers and students. The application must handle complex mathematical operations with precision, provide an intuitive user experience across all devices, and include advanced features like calculation history, memory operations, and accessibility options. Your guidance must be technically precise yet implementable, covering frontend architecture, mathematical logic, responsive design patterns, and user experience considerations that separate amateur calculators from professional tools.
</context>

<role>
Adopt the role of an expert frontend developer and mathematical software architect tasked with guiding the creation of a professional scientific calculator application. Your primary objective is to provide comprehensive technical specifications, implementation strategies, and code architecture guidance for building a feature-rich calculator using HTML5, CSS3, and JavaScript in a structured, step-by-step development format.
</role>

<information_about_me>
- My current web development experience level: [INSERT YOUR EXPERIENCE WITH HTML/CSS/JAVASCRIPT]
- My familiarity with mathematical operations and algorithms: [INSERT YOUR UNDERSTANDING OF MATHEMATICAL CONCEPTS]
- My preferred development approach: [INSERT WHETHER YOU PREFER VANILLA JS, FRAMEWORKS, OR SPECIFIC METHODOLOGIES]
- My target users and use cases: [INSERT WHO WILL USE THIS CALCULATOR AND FOR WHAT PURPOSE]
- My deployment environment and constraints: [INSERT WHERE THIS WILL BE HOSTED AND ANY TECHNICAL LIMITATIONS]
</information_about_me>

<output>
Structure your comprehensive calculator development guide with these sections:

● Project Architecture and File Structure: Organize HTML, CSS, and JavaScript components for maintainability

● Core Calculator Engine: Implement arithmetic operations with proper order of operations (PEMDAS/BODMAS) and expression parsing

● Scientific Functions Implementation: Build trigonometric (sin, cos, tan, inverse functions), logarithmic (log, ln), exponential (power, square root, factorial), and statistical functions with degree/radian mode toggle

● Memory Operations System: Create M+, M-, MR, MC functionality with visual memory indicators and persistent storage

● Calculation History Feature: Implement scrollable history log with save, clear, and recall capabilities using local storage

● Keyboard Integration: Map keyboard inputs to calculator functions with shortcuts (Enter for equals, Escape for clear, etc.)

● Error Handling Framework: Build robust validation for division by zero, domain errors, overflow conditions, and invalid operations with user-friendly error messages

● Responsive Design System: Create adaptive layouts that transform between standard and scientific modes based on viewport size and device orientation

● Theme System Implementation: Develop multiple visual themes (classic, modern, high contrast) with CSS variables and theme switching logic

● Audio Feedback System: Add optional button press sounds with volume control and mute toggle

● Copy/Paste Functionality: Implement clipboard operations for results and mathematical expressions

● Testing and Validation Strategy: Ensure mathematical accuracy and edge case handling

Take a deep breath and work on this problem step-by-step. Present your output with clear section headings, bullet points using ●, code snippets where appropriate, and actionable implementation steps that progress from basic functionality to advanced features.
</output>
\`\`\``,
  whatItDoes: [
    'Creates a full-featured scientific calculator web application with basic and advanced math functions.',
    'Adds user-friendly features like memory storage, calculation history, keyboard shortcuts, and error handling.',
    'Designs a responsive interface with multiple themes, sound options, and copy-paste capabilities.',
  ],
  tips: [
    'Test your AI prompt with real user scenarios before deployment to ensure the calculator handles edge cases like nested parentheses and complex scientific expressions that users will actually input.',
    'Create a simple user guide or tooltip system that explains keyboard shortcuts and advanced functions, since the AI prompt builds a feature-rich calculator that may overwhelm first-time users.',
    'Monitor which calculator features users engage with most through basic analytics, allowing you to refine the AI prompt for future versions that prioritize the most valuable functions for your audience.',
  ],
  howToUse: [
    'Fill in this AI prompt by copying and pasting it directly into your AI tool since it contains no [VARIABLES] in an <information_about_me> section - this AI prompt is ready to use as written and will generate a complete scientific calculator project with HTML5, CSS3, and JavaScript code.',
    'Example: Simply paste this entire AI prompt into ChatGPT, Claude, or your preferred AI assistant, then press enter to receive the full calculator code with all requested features like trigonometric functions, memory operations, calculation history, keyboard support, error handling, responsive design, themes, and sound feedback.',
  ],
};

export default buildScientificCalculatorsPrompt;
