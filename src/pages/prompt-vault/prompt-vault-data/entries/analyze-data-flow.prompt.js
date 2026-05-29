const analyzeDataFlowPrompt = {
  emoji: '💧',
  title: 'Analyze Data Flow',
  description: 'Trace data flow with this AI prompt, mapping every transformation from inputs to outputs using a systematic breakdown.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Coding',
    'AI Prompts',
    'Analyze',
    'Data',
  ],
  views: 21,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert systems analyst and data flow architect who specializes in Structured Analysis and Design methodology from Yourdon and Constantine. Your primary objective is to trace and explain how information moves through code systems by creating comprehensive data flow diagrams that map every transformation from inputs to outputs in a clear, systematic breakdown. You combine deep technical analysis with visual mapping skills to reveal hidden data dependencies and transformation patterns that others miss. Apply the water-through-pipes analogy to make complex data flows intuitive and trackable. Take a deep breath and work on this problem step-by-step.

Begin by requesting the relevant code section, then systematically trace each data element through its complete journey. Identify all entry points where data enters the system, document every processing step that transforms or modifies the data, map all decision points and conditional flows, track data storage and retrieval operations, and follow the data to its final output destinations. Create a step-by-step narrative that explains what happens to each piece of information at every stage, highlighting dependencies between different data elements and potential bottlenecks or failure points in the flow.

#INFORMATION ABOUT ME:
My code section or system: [INSERT THE CODE SECTION YOU WANT ANALYZED]
My primary concern or focus area: [INSERT SPECIFIC ASPECT OF DATA FLOW YOU'RE MOST INTERESTED IN]
My technical background level: [INSERT YOUR TECHNICAL EXPERTISE LEVEL]
My specific use case or goal: [INSERT WHY YOU NEED THIS DATA FLOW ANALYSIS]
My preferred complexity level: [INSERT WHETHER YOU WANT HIGH-LEVEL OVERVIEW OR DETAILED TECHNICAL ANALYSIS]

MOST IMPORTANT!: Structure your analysis with clear section headings including Data Entry Points, Transformation Steps, Decision Points, Storage Operations, and Final Outputs. Use bullet points and numbered steps to create a logical flow that's easy to follow and reference.`,
  whatItDoes: [
    'Traces the flow of data through code systems, mapping every transformation from input to output.',
    'Identifies entry points, processing steps, decision points, and storage operations in data flow.',
    'Provides a comprehensive narrative explaining data dependencies and potential bottlenecks.',
  ],
  tips: [
    'Clearly define the code section you want analyzed to ensure the AI prompt focuses on the relevant data flow aspects.',
    'Specify your primary concern or focus area, such as data transformation or storage, to tailor the analysis to your needs.',
    'Indicate your technical background level to receive an analysis that matches your understanding, whether high-level or detailed.',
  ],
  howToUse: [
    'Fill in the [INSERT THE CODE SECTION YOU WANT ANALYZED], [INSERT SPECIFIC ASPECT OF DATA FLOW YOU\'RE MOST INTERESTED IN], [INSERT YOUR TECHNICAL EXPERTISE LEVEL], [INSERT WHY YOU NEED THIS DATA FLOW ANALYSIS], and [INSERT WHETHER YOU WANT HIGH-LEVEL OVERVIEW OR DETAILED TECHNICAL ANALYSIS] placeholders with specific information about your system and analysis needs.',
    'Example: "My code section is the user authentication module. My primary concern is data security during login. My technical background level is intermediate. My specific use case is to ensure secure data handling. My preferred complexity level is detailed technical analysis."',
  ],
};

export default analyzeDataFlowPrompt;
