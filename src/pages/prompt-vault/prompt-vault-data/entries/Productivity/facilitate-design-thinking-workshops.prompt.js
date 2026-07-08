const facilitateDesignThinkingWorkshopsPrompt = {
  emoji: '🧠',
  title: 'Facilitate Design Thinking Workshops',
  description: 'Facilitate innovative workshops with this ChatGPT prompt, guiding through Design Thinking stages and structured outcome tables.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Design',
    'Productivity',
    'Workflow',
    'Facilitate',
  ],
  views: 14,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert Design Thinking facilitator tasked with conducting a workshop for innovative idea generation. Your primary objective is to guide participants through a collaborative brainstorming process focused on a specific business process, resulting in a structured table of outcomes. Take a deep breath and work on this problem step-by-step. Begin by introducing the Design Thinking methodology and its relevance to the chosen business process. Then, lead the group through the five stages of Design Thinking: Empathize, Define, Ideate, Prototype, and Test. For the Ideation phase, encourage diverse and creative thinking, using techniques such as mind mapping, reverse thinking, or SCAMPER. After generating ideas, guide the group in evaluating each idea's feasibility and potential impact. Conclude the workshop by organizing the outcomes into a clear, actionable format.

#INFORMATION ABOUT ME:
My business process: [INSERT BUSINESS PROCESS]
My team size: [INSERT TEAM SIZE]
My industry: [INSERT INDUSTRY]
My workshop duration: [INSERT WORKSHOP DURATION]
My specific challenge: [INSERT SPECIFIC CHALLENGE RELATED TO THE BUSINESS PROCESS]

MOST IMPORTANT!: Present your output in a markdown table format with three columns: Ideation, Feasibility, and Impact. Provide a brief explanation of how to use and interpret the table at the beginning of your response.`,
  whatItDoes: [
    'Guides participants through the five stages of Design Thinking: Empathize, Define, Ideate, Prototype, and Test.',
    'Encourages the use of creative thinking techniques such as mind mapping, reverse thinking, or SCAMPER during the Ideation phase.',
    'Concludes the workshop by organizing outcomes into a structured table with columns for Ideation, Feasibility, and Impact.',
  ],
  tips: [
    'Prepare a comprehensive introduction to Design Thinking tailored to your specific business process, emphasizing how each stage can address and potentially solve the identified challenges.',
    'Utilize a variety of ideation techniques such as mind mapping and SCAMPER during the brainstorming session to foster creativity and ensure a wide range of ideas, catering to different thinking styles within your team.',
    'Develop a clear, structured table format for the workshop outcomes, categorizing ideas into \'Ideation\', \'Feasibility\', and \'Impact\' to facilitate easy analysis and future reference, ensuring each idea is actionable and aligned with business goals.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT BUSINESS PROCESS], [INSERT TEAM SIZE], [INSERT INDUSTRY], [INSERT WORKSHOP DURATION], and [INSERT SPECIFIC CHALLENGE RELATED TO THE BUSINESS PROCESS] with specific details about your workshop. For example, if your business process is "Customer Service Improvement," your team size is "10 members," your industry is "Telecommunications," your workshop duration is "3 hours," and your specific challenge is "Reducing response time to customer queries."',
    'Example: "My business process is Customer Service Improvement. My team size is 10 members. My industry is Telecommunications. My workshop duration is 3 hours. My specific challenge is Reducing response time to customer queries."',
  ],
};

export default facilitateDesignThinkingWorkshopsPrompt;
