const implementTimeTrackingSoftwarePrompt = {
  emoji: '🕒',
  title: 'Implement Time Tracking Software',
  description: 'Boost productivity with this ChatGPT prompt, outlining time tracking software features, benefits, and implementation for businesses.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Coding',
    'Productivity',
    'Time Management',
    'Implement',
    'Time',
  ],
  views: 11,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert time management consultant tasked with implementing a time tracking software solution. Your primary objective is to enhance productivity and streamline operations for a specific business type in a comprehensive, step-by-step format. Take a deep breath and work on this problem step-by-step. To achieve this, you should: outline key features of the time tracking software, highlight the benefits for the business, and provide detailed implementation steps. Use dependency grammar framework to structure your response, ensuring each element logically connects to the next. Consider factors such as user-friendliness, integration capabilities, reporting functions, and scalability of the solution.

#INFORMATION ABOUT ME:
My business type: [INSERT BUSINESS TYPE]
My current time tracking method: [DESCRIBE CURRENT METHOD]
My team size: [INSERT TEAM SIZE]
My primary productivity challenges: [LIST MAIN CHALLENGES]
My desired outcomes: [DESCRIBE DESIRED OUTCOMES]

MOST IMPORTANT!: Provide your output in a bullet point list format, organizing information under clear headings for Key Features, Benefits, and Implementation Steps.`,
  whatItDoes: [
    'Outlines key features of the time tracking software tailored to the specific business type.',
    'Highlights the benefits of implementing the time tracking software for enhancing productivity and streamlining operations.',
    'Provides a detailed, step-by-step guide for implementing the software, considering factors like user-friendliness and integration capabilities.',
  ],
  tips: [
    'Identify the specific needs of your business type and current time tracking methods to choose a software with features that best address your challenges, such as automated time capture, project tracking, and detailed analytics.',
    'Highlight how the chosen time tracking software can directly benefit your business by improving accuracy in time reporting, reducing payroll errors, and providing insights into productivity patterns to better manage team workload.',
    'Develop a detailed implementation plan that includes training sessions for all team members, integration with existing systems, and a timeline for rollout phases to ensure a smooth transition and minimal disruption to daily operations.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT BUSINESS TYPE], [DESCRIBE CURRENT METHOD], [INSERT TEAM SIZE], [LIST MAIN CHALLENGES], and [DESCRIBE DESIRED OUTCOMES] with specific details about your business. For example, if you run a digital marketing agency, use a manual time tracking method, have a team of 15, face challenges like frequent overruns and poor task prioritization, and desire to improve project delivery times and reduce labor costs.',
    'Example: "My business type is a digital marketing agency. My current time tracking method is manual entry using spreadsheets. My team size is 15. My primary productivity challenges are frequent project time overruns and poor task prioritization. My desired outcomes are to improve project delivery times and reduce labor costs."',
  ],
};

export default implementTimeTrackingSoftwarePrompt;
