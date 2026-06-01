const optimizeProjectPostMortemProcessPrompt = {
  emoji: '🔍',
  title: 'Optimize Project Post-Mortem Process',
  description: 'Optimize your project management with this ChatGPT mega-prompt, providing a detailed process for effective post-mortem analyses to enhance task management.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Project',
    'Post',
    'Mortem',
  ],
  views: 11,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert project manager and process engineer highly skilled at optimizing workflows and conducting thorough post-mortem analyses. Your task is to help the user create a comprehensive, step-by-step process for conducting effective post-mortem analyses on completed projects, focusing on identifying areas for improvement in task management.

#ROLE:
You are an expert project manager and process engineer highly skilled at optimizing workflows and conducting thorough post-mortem analyses.

#RESPONSE GUIDELINES:
The response should be organized into a numbered list of main steps, with sub-bullets detailing specific actions within each step. The goal is to provide a clear, actionable process for conducting post-mortem analyses that identify areas for improvement in task management.

#TASK CRITERIA:
1. Focus on identifying areas for improvement in task management.
2. Provide a comprehensive, step-by-step process.
3. Use a numbered list for the main steps, with sub-bullets detailing specific actions within each step.

#INFORMATION ABOUT ME:
- My project: [DESCRIBE YOUR PROJECT]
- My team size: [SPECIFY TEAM SIZE]
- My project duration: [SPECIFY PROJECT DURATION]

#RESPONSE FORMAT:

1. $main_step1
   - $sub_action1 
   - $sub_action2
   - $sub_action3

2. $main_step2 
   - $sub_action1
   - $sub_action2
   - $sub_action3

3. $main_step3
   - $sub_action1 
   - $sub_action2
   - $sub_action3

4. $main_step4
   - $sub_action1
   - $sub_action2 
   - $sub_action3

5. $main_step5
   - $sub_action1
   - $sub_action2
   - $sub_action3`,
  whatItDoes: [
    'Converts user input into a structured, step-by-step guide for conducting post-mortem analyses on projects.',
    'Focuses on identifying areas for improvement in task management.',
    'Organizes the process into a clear, numbered list format with detailed actions under each main step.',
  ],
  tips: [
    'Prepare a structured template for the post-mortem analysis that includes sections for each phase of the project, key tasks, and stakeholders involved. This will help in organizing the data systematically and ensure that no critical aspect is overlooked.',
    'Encourage full participation from the team by creating an environment where feedback is valued and everyone feels comfortable sharing their insights. This can be achieved by conducting the analysis in a non-judgmental, open forum setting.',
    'Utilize project management tools and software to track and analyze task performance data. This will provide quantitative insights into task delays, budget overruns, and other inefficiencies that can be targeted for improvement.',
  ],
  howToUse: [
    'Fill in the [DESCRIBE YOUR PROJECT], [SPECIFY TEAM SIZE], and [SPECIFY PROJECT DURATION] placeholders with details about your specific project, the number of team members involved, and the total time taken to complete the project.',
    '- Example: "My project involved developing a new software tool for data analysis, my team size was 8 members, and the project duration was 6 months."',
    'Use this structured format to systematically analyze your project\'s outcomes, identify what went well, what didn\'t, and how similar projects can be improved in the future. This methodical approach ensures a thorough review and enhances project management practices.',
  ],
};

export default optimizeProjectPostMortemProcessPrompt;
