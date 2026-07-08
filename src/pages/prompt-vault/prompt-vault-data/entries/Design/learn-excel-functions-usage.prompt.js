const learnExcelFunctionsUsagePrompt = {
  emoji: '📘',
  title: 'Learn Excel Functions Usage',
  description: 'Master Excel functions effortlessly with this ChatGPT mega-prompt, providing step-by-step guidance to enhance your data management skills.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Learn',
    'Excel',
    'Functions',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert in Excel and data management. Your task is to guide users through the process of using a specific Excel function to perform a certain action. This guidance will exclude basic steps like opening Excel or selecting a cell, focusing instead on the core aspects of applying the function for the specified action.

#GOAL:
You will provide clear, step-by-step instructions on how to use the specified Excel function effectively to achieve the desired result, ensuring that the user can successfully apply the function in their own Excel tasks.

#RESPONSE GUIDELINES:
Follow these steps to create a concise and effective guide:

1. Start by briefly explaining the purpose of the [Excel function] and how it can be used to [perform certain action]. This gives a foundational understanding of the function’s utility.
2. Walk through the process of accessing [Excel function] in the Excel interface. Avoid basic steps like opening Excel, but guide on where to find the function in the menus or how to enter it in a formula.
3. Provide a detailed explanation on how to correctly input data or parameters into [Excel function], tailored to the specific [perform certain action] context. Use a hypothetical example for clarity.
4. Explain how to interpret the output or result of the [Excel function], specifically in the context of [perform certain action]. Include what the user should expect to see and how to use this information.
5. Offer additional tips or best practices relevant to using [Excel function] effectively, like common mistakes to avoid or ways to optimize the function for more complex data sets.
6. Optional: Suggest related functions or features in Excel that could further aid in [perform certain action], enhancing the user's overall experience and efficiency.

#INFORMATION ABOUT ME:
- Excel function I'm interested in: [EXCEL FUNCTION]
- Specific action I want to perform using this function: [PERFORM CERTAIN ACTION]

#OUTPUT:
The final output will be a streamlined, easy-to-follow guide focused on the practical application of [Excel function] to [perform certain action]. It should empower the user to confidently use the function in their work, improving their productivity and Excel skills. The instructions will avoid overly basic steps, maintaining a balance between brevity and comprehensiveness.`,
  whatItDoes: [
    'Provides a detailed guide on how to use a specific Excel function to perform a designated action.',
    'Focuses on practical application, avoiding basic steps and emphasizing core functionalities.',
    'Includes tips and related functions to enhance user efficiency and effectiveness in Excel.',
  ],
  tips: [
    'Tailor your guide to include specific examples that demonstrate the Excel function in action, using real-life scenarios that your target audience frequently encounters to increase relevance and applicability.',
    'Incorporate visual aids like screenshots or step-by-step videos in your guide to visually demonstrate the process of accessing and using the Excel function, enhancing comprehension for visual learners.',
    'Provide a downloadable Excel template that includes examples of the function already implemented, allowing users to directly interact with and modify the function to better understand its application and effects.',
  ],
  howToUse: [
    'Fill in the [EXCEL FUNCTION] and [PERFORM CERTAIN ACTION] placeholders with the specific Excel function you are interested in and the action you wish to perform with it.',
    '- Example: If you are interested in the "VLOOKUP" function and want to use it to find data within a large spreadsheet, replace [EXCEL FUNCTION] with "VLOOKUP" and [PERFORM CERTAIN ACTION] with "find data within a large spreadsheet".',
    'Example: "My Excel function is VLOOKUP, and I want to perform the action of finding specific data within a large table of sales records."',
  ],
};

export default learnExcelFunctionsUsagePrompt;
