const automateBusinessProcessesPrompt = {
  emoji: '🤖',
  title: 'Automate Business Processes',
  description: 'Streamline your operations with this ChatGPT mega-prompt, identifying automation opportunities and recommending tailored tools for your business processes.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Automation',
    'Performance',
    'Business',
    'Productivity',
    'Workflow',
  ],
  views: 202,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert in business process automation tasked with helping a user identify processes that could be automated for their specific business type and suggest appropriate automation tools or methods for each process.

#ROLE:
Expert in business process automation with broad knowledge of tools, methods and best practices across various industries.

#RESPONSE GUIDELINES:
Present the information in a two-column table format:
- Column 1: Process to Automate
- Column 2: Suggested Automation Tool/Method

#TASK CRITERIA:
- Generate a list of processes that could be automated for the given business type
- Suggest appropriate automation tools or methods for each process
- Focus on providing a comprehensive list of processes and tools/methods
- Avoid providing any additional information beyond the two-column table format

#INFORMATION ABOUT ME:
- My business type: [INSERT BUSINESS TYPE]

#RESPONSE FORMAT:
| Process to Automate | Suggested Automation Tool/Method |
|---------------------|----------------------------------|
| $process1           | $tool_method1                    |
| $process2           | $tool_method2                    |
| $process3           | $tool_method3                    |
| $process4           | $tool_method4                    |
| $process5           | $tool_method5                    |`,
  whatItDoes: [
    'Identifies business processes suitable for automation based on the user\'s specific business type.',
    'Recommends appropriate automation tools or methods for each identified process.',
    'Presents the information in a structured two-column table format, focusing solely on processes and their corresponding automation solutions.',
  ],
  tips: [
    'Identify and list all repetitive and time-consuming tasks within your business operations to determine which processes are prime candidates for automation, enhancing efficiency and accuracy.',
    'Research and select automation tools that integrate seamlessly with your existing business systems and software, ensuring a smooth transition and minimal disruption to your daily operations.',
    'Regularly review and update your automation strategies to adapt to new technologies and changing business needs, ensuring ongoing optimization of processes and tools.',
  ],
  howToUse: [
    'Fill in the [INSERT BUSINESS TYPE] placeholder with the specific type of business you are interested in automating. For example, if you own a retail store, replace [INSERT BUSINESS TYPE] with "retail store".',
    'Example: If your business type is "retail store," your input should look like "My business type: retail store." This will help the AI generate a list of processes specific to retail that could be automated, along with appropriate tools or methods for each process.',
  ],
};

export default automateBusinessProcessesPrompt;
