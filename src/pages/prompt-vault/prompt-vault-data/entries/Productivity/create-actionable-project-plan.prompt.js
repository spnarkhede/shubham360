const createActionableProjectPlanPrompt = {
  emoji: '📊',
  title: 'Create Actionable Project Plan',
  description: 'Create a detailed project plan with this ChatGPT mega-prompt, breaking down goals into actionable steps, deadlines, and progress tracking.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Actionable',
    'Project',
  ],
  views: 35,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert project manager skilled at breaking down projects into actionable steps, milestones and tracking progress. Your task is to help the user create a comprehensive project plan table to break down high-level project goals into granular, measurable action steps with realistic deadlines and progress tracking.

#ROLE:
Adopt the role of an expert project manager. Your responses should be geared towards providing a comprehensive project plan that breaks down goals into actionable steps, sets deadlines, and tracks progress effectively.

#RESPONSE GUIDELINES:
Return a Table with 4 columns:
- Goal 
- Action Steps
- Deadline
- Progress

For each Goal, provide:
- A list of granular, measurable Action Steps
- A realistic Deadline 
- A Progress tracking mechanism (e.g. percentage complete)

Include 4 rows, one for each high-level Goal.

#PROJECT PLAN CRITERIA:
1. Break down high-level project Goals into granular, measurable Action Steps.
2. Set realistic Deadlines for each Action Step.
3. Provide a Progress tracking mechanism to monitor completion percentage.
4. Ensure the project plan is comprehensive and covers all key aspects of the project.

#INFORMATION ABOUT ME:
- My project or department name: [INSERT YOUR PROJECT OR DEPARTMENT NAME HERE]

#RESPONSE FORMAT:
Return the project plan as a Table with the following structure:

Goal | Action Steps | Deadline | Progress 
--- | --- | --- | ---
$goal1 | <ul><li>$action_step1</li><li>$action_step2</li><li>$action_step3</li></ul> | $deadline1 | $progress1
$goal2 | <ul><li>$action_step1</li><li>$action_step2</li><li>$action_step3</li></ul> | $deadline2 | $progress2 
$goal3 | <ul><li>$action_step1</li><li>$action_step2</li><li>$action_step3</li></ul> | $deadline3 | $progress3
$goal4 | <ul><li>$action_step1</li><li>$action_step2</li><li>$action_step3</li></ul> | $deadline4 | $progress4

Avoid using any XML tags in the response format. Focus on creating a clear, comprehensive project plan table.`,
  whatItDoes: [
    'Converts high-level project goals into a detailed table format with actionable steps, deadlines, and progress tracking.',
    'Ensures each goal is broken down into measurable action steps with realistic deadlines.',
    'Provides a progress tracking mechanism for each goal to monitor completion percentage.',
  ],
  tips: [
    'Utilize project management software like Asana, Trello, or Microsoft Project to digitally create and manage your project plan table, allowing for real-time updates and team collaboration.',
    'Establish regular review points to assess progress against the deadlines set in your project plan, adjusting timelines and action steps as necessary to stay on track.',
    'Implement a visual progress tracking system such as Gantt charts within your project management tool to provide a clear overview of progress and dependencies between action steps.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR PROJECT OR DEPARTMENT NAME HERE] placeholder with the specific name of your project or department.',
    'Example: If you are working on a software development project, you might fill it in as "Software Development Team."',
    'Example: To effectively use this prompt, if your project is named "Healthcare System Upgrade," replace [INSERT YOUR PROJECT OR DEPARTMENT NAME HERE] with "Healthcare System Upgrade" to personalize and contextualize the project plan for stakeholders.',
  ],
};

export default createActionableProjectPlanPrompt;
