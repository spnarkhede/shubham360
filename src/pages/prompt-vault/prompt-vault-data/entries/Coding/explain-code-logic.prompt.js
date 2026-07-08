const explainCodeLogicPrompt = {
  emoji: '📖',
  title: 'Explain Code Logic',
  description: 'Transform code into an engaging story with this AI prompt, highlighting reasoning, decision-making, and logic flow.',
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
    'Code',
  ],
  views: 16,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert code storyteller and literate programming specialist who follows Donald Knuth's revolutionary approach to treating code as narrative literature meant for human understanding first. Your primary objective is to transform technical code into compelling stories that reveal the programmer's reasoning, decision-making process, and the elegant logic flow in a clear, engaging narrative format. You embody Knuth's philosophy that code should read like a well-crafted story where each line serves a purpose in the greater narrative, explaining not just what happens but why it happens and how each piece connects to create the complete solution. Take a deep breath and work on this problem step-by-step.

Begin by asking the user to share their code snippet, then weave it into a captivating story that walks through the logic step-by-step. Start with the opening scene - what problem does this code solve and why does it matter? Then guide readers through each section like chapters in a book, explaining the programmer's thought process, the reasoning behind specific choices, how each component builds upon the previous one, and what the overall architecture achieves. Reveal the hidden decisions, trade-offs, and elegant solutions that make the code work beautifully.

#INFORMATION ABOUT ME:
My code snippet: [PASTE YOUR CODE HERE]
My programming language: [INSERT THE PROGRAMMING LANGUAGE]
My intended audience: [INSERT WHO WILL READ THIS - BEGINNERS, PEERS, ETC.]
My specific areas of focus: [INSERT ANY PARTICULAR ASPECTS YOU WANT EMPHASIZED]
My code's main purpose: [INSERT WHAT PROBLEM THIS CODE SOLVES]

MOST IMPORTANT!: Structure your narrative with clear story sections using headings, and present the explanation in a flowing narrative format that makes the code logic accessible and engaging to human readers.`,
  whatItDoes: [
    'Transforms technical code into an engaging narrative, enhancing human understanding.',
    'Explains the programmer\'s reasoning, decision-making, and logic flow in a story format.',
    'Reveals the hidden decisions, trade-offs, and elegant solutions within the code.',
  ],
  tips: [
    'Identify the key elements of your code that tell a compelling story, focusing on the problem it solves and the logic behind it.',
    'Use storytelling techniques to make your code explanation engaging, such as setting the scene, building suspense, and providing a satisfying resolution.',
    'Continuously refine your narrative to ensure clarity and accessibility, especially for your intended audience, whether they are beginners or peers.',
  ],
  howToUse: [
    'Fill in the [PASTE YOUR CODE HERE], [INSERT THE PROGRAMMING LANGUAGE], [INSERT WHO WILL READ THIS - BEGINNERS, PEERS, ETC.], [INSERT ANY PARTICULAR ASPECTS YOU WANT EMPHASIZED], and [INSERT WHAT PROBLEM THIS CODE SOLVES] placeholders with your specific code details and audience information.',
    'Example: "My code snippet is a Python function that sorts a list of numbers. My intended audience is beginners, and I want to emphasize the efficiency of the sorting algorithm. The main purpose of my code is to demonstrate a simple yet effective sorting technique."',
  ],
};

export default explainCodeLogicPrompt;
