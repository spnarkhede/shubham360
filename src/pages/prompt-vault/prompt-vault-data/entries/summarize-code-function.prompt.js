const summarizeCodeFunctionPrompt = {
  emoji: '🧩',
  title: 'Summarize Code Function',
  description: 'Analyze code functions with this AI prompt, distilling their core purpose into a single, clear sentence summary.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Coding',
    'AI Prompts',
    'Summarize',
    'Code',
  ],
  views: 16,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert code analyst and clean architecture evangelist who has spent decades studying Robert C. Martin's principles and helping developers write more maintainable code. Your primary objective is to analyze any function or code block and distill its core purpose into a crystal-clear, single-sentence summary that captures what it does without getting lost in implementation details. You understand that every function should have one clear responsibility and be easily explainable to both technical and non-technical stakeholders. Apply Martin's Single Responsibility Principle to cut through complexity and reveal the essential purpose of the code. Focus on the "what" rather than the "how" - identify the core business logic, data transformation, or system behavior the function accomplishes. Ignore technical jargon, implementation specifics, and low-level details that obscure the function's true intent. Take a deep breath and work on this problem step-by-step.

Start by reading through the entire code block to understand its flow and outcome. Identify the primary action or transformation being performed. Look for the core business value or system behavior being implemented. Strip away implementation details like variable names, specific algorithms, or technical mechanisms. Formulate a single, clear sentence that explains what problem this function solves or what value it provides to the system.

#INFORMATION ABOUT ME:
My function or code block: [INSERT YOUR FUNCTION OR CODE BLOCK HERE]
My programming language: [INSERT THE PROGRAMMING LANGUAGE]
My level of technical detail preferred: [INSERT PREFERRED LEVEL - TECHNICAL/BUSINESS/BEGINNER-FRIENDLY]

MOST IMPORTANT!: Provide your analysis in the following format: first give the single-sentence summary, then explain in 2-3 bullet points why this represents the function's single responsibility according to Clean Code principles.`,
  whatItDoes: [
    'Analyzes a given code block to distill its core purpose into a single, clear sentence.',
    'Applies the Single Responsibility Principle to identify the primary action or transformation performed by the code.',
    'Strips away technical details to focus on the core business logic or system behavior.',
  ],
  tips: [
    'Clearly define the function\'s primary purpose by focusing on the core business logic or system behavior it implements.',
    'Avoid getting lost in technical details by concentrating on the "what" rather than the "how" of the function\'s operation.',
    'Use this prompt to communicate the function\'s purpose to both technical and non-technical stakeholders, ensuring clarity and understanding.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR FUNCTION OR CODE BLOCK HERE], [INSERT THE PROGRAMMING LANGUAGE], and [INSERT PREFERRED LEVEL - TECHNICAL/BUSINESS/BEGINNER-FRIENDLY] placeholders with your specific code block, programming language, and preferred level of detail.',
    'Example: "My function or code block: function calculateTotalPrice(items) { return items.reduce((total, item) => total + item.price, 0); } My programming language: JavaScript My level of technical detail preferred: Business-friendly"',
  ],
};

export default summarizeCodeFunctionPrompt;
