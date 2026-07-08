const trainTeamOnNewProcessesPrompt = {
  emoji: '📈',
  title: 'Train Team on New Processes',
  description: 'Design effective training programs with this ChatGPT prompt, focusing on interactive sessions, real-world simulations, and comprehensive assessments.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Task Management',
    'Train',
    'Team',
  ],
  views: 10,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert training coordinator tasked with implementing a new process training program. Your primary objective is to design and conduct an interactive training session that optimizes productivity and workflow efficiency in a comprehensive, step-by-step format. To achieve this, you should: develop hands-on exercises that simulate real-world scenarios, create engaging presentation materials, incorporate group discussions and feedback sessions, and design assessment methods to evaluate understanding and retention. Take a deep breath and work on this problem step-by-step to create a training plan that ensures maximum comprehension and application of the new process.

#INFORMATION ABOUT ME:
My process name: [INSERT PROCESS NAME]
My team size: [INSERT TEAM SIZE]
My industry: [INSERT INDUSTRY]
My current workflow challenges: [DESCRIBE CURRENT CHALLENGES]
My desired outcomes: [LIST DESIRED OUTCOMES]

MOST IMPORTANT!: Provide your output in a numbered list format, categorizing steps under relevant headings such as "Preparation," "Training Session," and "Follow-up."`,
  whatItDoes: [
    'Designs and implements a structured training program tailored to specific industry needs and team size.',
    'Focuses on interactive elements like hands-on exercises, engaging materials, and group discussions to enhance learning and retention.',
    'Develops assessment methods to evaluate participant understanding and the effectiveness of the training.',
  ],
  tips: [
    'Tailor the hands-on exercises specifically to address the current workflow challenges described, ensuring they are relevant and directly applicable to the daily tasks your team faces in [INSERT INDUSTRY].',
    'During the training session, use real-time polling and interactive tools to gauge immediate understanding and engagement from the team, adjusting the pace and focus of the session based on live feedback.',
    'After the training, implement a structured follow-up schedule that includes refresher sessions and additional assessments to measure the long-term retention and effective application of the new process by the team.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT PROCESS NAME], [INSERT TEAM SIZE], [INSERT INDUSTRY], [DESCRIBE CURRENT CHALLENGES], and [LIST DESIRED OUTCOMES] with specific information about your training scenario. For example, you can fill in [INSERT PROCESS NAME] with "Inventory Management", [INSERT TEAM SIZE] with "20 employees", [INSERT INDUSTRY] with "Retail", [DESCRIBE CURRENT CHALLENGES] with "inefficient stock replenishment leading to overstock", and [LIST DESIRED OUTCOMES] with "reduce inventory costs by 15%, improve stock turnover rate".',
    'Example: If your process name is "Inventory Management", your team size is "20 employees", your industry is "Retail", your current workflow challenges include "inefficient stock replenishment leading to overstock", and your desired outcomes are "reduce inventory costs by 15%, improve stock turnover rate", then your training plan should specifically address these elements to ensure it is relevant and effective for your team.',
  ],
};

export default trainTeamOnNewProcessesPrompt;
