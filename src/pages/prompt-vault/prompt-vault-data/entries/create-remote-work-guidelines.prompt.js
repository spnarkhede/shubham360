const createRemoteWorkGuidelinesPrompt = {
  emoji: '🏡',
  title: 'Create Remote Work Guidelines',
  description: 'Establish effective work-life boundaries with this ChatGPT mega-prompt, providing actionable guidelines on physical space, time management, and communication.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Remote Work',
    'Time Management',
    'Remote',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'DeepSeek',
  ],
  prompt: `#CONTEXT:
You are an experienced work-from-home expert with deep knowledge in productivity, time management, and maintaining a healthy work-life balance. Your task is to help the user create a comprehensive set of guidelines for effectively maintaining work-life boundaries while working remotely.

#ROLE:
Adopt the role of an experienced work-from-home expert with deep knowledge in productivity, time management, and maintaining a healthy work-life balance.

#RESPONSE GUIDELINES:
- Organize the guidelines into relevant categories 
- Present the guidelines in an easy-to-follow bulleted list format
- Include at least 3 guidelines per category
- Use 5 categories in total, with the first 3 being "Physical Space", "Time Management", and "Communication"
- Choose appropriate names for the remaining 2 categories based on your expertise

#TASK CRITERIA:
- Focus on providing practical, actionable advice for maintaining work-life boundaries while working remotely
- Cover a wide range of aspects related to remote work, including physical space, time management, communication, and other relevant areas
- Ensure that the guidelines are easy to understand and implement for the user
- Avoid providing overly general or vague advice
- Do not include any irrelevant or off-topic information

#INFORMATION ABOUT ME:
- My work-from-home experience level: [BEGINNER/INTERMEDIATE/ADVANCED]
- My biggest challenge with work-life balance: [DESCRIBE YOUR BIGGEST CHALLENGE]
- My work setup: [DESCRIBE YOUR WORK SETUP]

#RESPONSE FORMAT:
<category1>Physical Space</category1>

- $guideline1 
- $guideline2
- $guideline3

<category2>Time Management</category2>

- $guideline1
- $guideline2 
- $guideline3

<category3>Communication</category3>

- $guideline1
- $guideline2
- $guideline3

<category4>$category_name</category4>

- $guideline1
- $guideline2
- $guideline3

<category5>$category_name</category5>

- $guideline1
- $guideline2
- $guideline3`,
  whatItDoes: [
    'Organizes user input into a structured guideline format for maintaining work-life boundaries while working remotely.',
    'Categorizes the guidelines into five specific areas, including Physical Space, Time Management, and Communication.',
    'Provides actionable advice tailored to the user\'s experience level and specific challenges in remote work.',
  ],
  tips: [
    'Designate a specific area in your home solely for work purposes to clearly define your physical workspace, helping to separate professional tasks from personal activities.',
    'Establish a daily schedule with fixed start and end times to enhance time management, ensuring you have defined work hours that prevent overworking.',
    'Set boundaries for communication by specifying \'office hours\' during which colleagues can reach you, and communicate these hours clearly to maintain expectations and reduce after-hours work interruptions.',
  ],
  howToUse: [
    'Fill in the [BEGINNER/INTERMEDIATE/ADVANCED], [DESCRIBE YOUR BIGGEST CHALLENGE], and [DESCRIBE YOUR WORK SETUP] placeholders in the #INFORMATION ABOUT ME section. For example, choose "INTERMEDIATE" for your experience level, describe your biggest challenge as "finding time for regular breaks," and detail your work setup as "a dedicated home office with dual monitors and ergonomic seating."',
    'Example: If you are an intermediate-level remote worker, struggle with managing distractions, and work from a small desk in your living room, fill in the variables as follows: "My work-from-home experience level: INTERMEDIATE, My biggest challenge with work-life balance: managing distractions during work hours, My work setup: a compact desk in the living room, close to natural light."',
  ],
};

export default createRemoteWorkGuidelinesPrompt;
