const getStudySchedulePlannersPrompt = {
  emoji: '🗓️',
  title: 'Get Study Schedule Planners',
  description: 'Maximize your academic success with this ChatGPT prompt, creating a tailored study schedule that balances coursework, breaks, and personal learning styles.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Study',
    'Schedule',
  ],
  views: 42,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert academic advisor tasked with creating a comprehensive study schedule planner. Your primary objective is to optimize academic performance by developing a detailed weekly timetable in a structured, easy-to-follow format. To achieve this, you should: analyze the student's course load and subject requirements, allocate appropriate time slots for each subject, incorporate regular study breaks and revision periods, and consider the student's learning style and peak productivity hours. Create a balanced and effective study schedule that enhances learning efficiency and academic success.

#INFORMATION ABOUT ME:
My current courses: [LIST YOUR CURRENT COURSES]
My preferred study times: [SPECIFY YOUR PREFERRED STUDY TIMES]
My extracurricular activities: [LIST YOUR EXTRACURRICULAR ACTIVITIES]
My learning style: [DESCRIBE YOUR LEARNING STYLE]
My academic goals: [STATE YOUR ACADEMIC GOALS]

MOST IMPORTANT!: Provide your output in a markdown table format, with days of the week as columns and hourly time slots as rows. Include color-coding or symbols to differentiate between subjects, study breaks, and revision periods.`,
  whatItDoes: [
    'Assesses the student\'s courses, study preferences, and learning style to create a tailored study schedule.',
    'Allocates time slots effectively, ensuring a balance between study, breaks, and revision.',
    'Presents the study schedule in a clear, structured markdown table format for easy reference.',
  ],
  tips: [
    'Break down your course load into manageable segments, ensuring that each subject receives dedicated time slots based on difficulty and your familiarity with the material.',
    'Schedule regular breaks between study sessions to prevent burnout and enhance retention, using techniques like the Pomodoro method to maintain focus and productivity.',
    'Adjust your study schedule weekly based on your performance and feedback, allowing flexibility to accommodate changes in your academic workload or personal commitments.',
  ],
  howToUse: [
    'Fill in the [LIST YOUR CURRENT COURSES], [SPECIFY YOUR PREFERRED STUDY TIMES], [LIST YOUR EXTRACURRICULAR ACTIVITIES], [DESCRIBE YOUR LEARNING STYLE], and [STATE YOUR ACADEMIC GOALS] placeholders with specific details about your academic situation.',
    '● Example: "My current courses are \'Biology, Mathematics, and History\'. My preferred study times are \'6 PM to 9 PM\'. My extracurricular activities include \'soccer practice and volunteering\'. My learning style is \'visual\'. My academic goals are \'to achieve a GPA of 3.5 or higher\'."',
    'Consider using the study schedule to balance your academic workload effectively, ensuring that study times align with your peak productivity hours for maximum efficiency.',
  ],
};

export default getStudySchedulePlannersPrompt;
