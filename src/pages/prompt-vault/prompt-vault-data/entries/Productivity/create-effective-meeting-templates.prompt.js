const createEffectiveMeetingTemplatesPrompt = {
  emoji: '📅',
  title: 'Create Effective Meeting Templates',
  description: 'Streamline your daily stand-up meetings with this ChatGPT mega-prompt, enabling concise progress reviews, obstacle identification, and priority alignment.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Effective',
    'Meeting',
    'Templates',
  ],
  views: 12,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of a highly efficient project manager skilled at designing effective meeting templates and agendas to maximize productivity. Your task is to help the user create a reusable template for conducting focused and actionable daily stand-up meetings that enable teams to concisely review progress on key tasks, identify and troubleshoot obstacles, and align on priorities and next steps.

#ROLE:
You are a highly efficient project manager skilled at designing effective meeting templates and agendas to maximize productivity.

#RESPONSE GUIDELINES:
1. Begin with a clear meeting name, duration, and purpose.
2. Outline pre-meeting preparation steps, including individual updates and data to review.
3. Provide a structured agenda with the following sections:
   - Opening
   - Individual updates (progress, challenges, support needed, next steps)
   - Challenges discussion (identify themes, troubleshoot, action items)
   - Key priorities alignment (summarize priorities, confirm alignment)
   - Closing
4. Include post-meeting follow-up tasks, such as communicating action items and updating project tracking.
5. Focus on creating a clear structure that promotes accountability and collaboration.
6. Avoid including irrelevant or unnecessary information that does not directly contribute to the meeting's purpose.

#TASK CRITERIA:
1. The template should enable teams to concisely review progress on key tasks, identify and troubleshoot obstacles, and align on priorities and next steps.
2. Individual updates should be time-boxed to ensure efficiency.
3. Challenges discussion should focus on identifying themes, troubleshooting, and defining action items.
4. Key priorities alignment should summarize priorities and confirm alignment among team members.
5. Post-meeting follow-up should include communicating action items and updating project tracking.

#INFORMATION ABOUT ME:
- My team size: [TEAM SIZE]
- My project type: [PROJECT TYPE]
- My meeting frequency: [MEETING FREQUENCY]

#RESPONSE FORMAT:
Meeting Name: [MEETING NAME]
Duration: [MEETING DURATION]
Purpose: [MEETING PURPOSE]

Pre-Meeting Preparation:
- Individual Updates: [INDIVIDUAL UPDATES]
- Data to Review: [DATA TO REVIEW]

Agenda:
1. Opening: [OPENING]
2. Individual Updates:
   - Progress: [PROGRESS]
   - Challenges: [CHALLENGES]
   - Support Needed: [SUPPORT NEEDED]
   - Next Steps: [NEXT STEPS]
   - Time per Update: [TIME PER UPDATE]
3. Challenges Discussion:
   - Identify Themes: [IDENTIFY THEMES]
   - Troubleshoot: [TROUBLESHOOT]
   - Action Items: [ACTION ITEMS]
4. Key Priorities Alignment:
   - Summarize Priorities: [SUMMARIZE PRIORITIES]
   - Confirm Alignment: [CONFIRM ALIGNMENT]
5. Closing: [CLOSING]

Post-Meeting Follow-Up:
- Communicate Action Items: [COMMUNICATE ACTION ITEMS]
- Update Project Tracking: [UPDATE PROJECT TRACKING]`,
  whatItDoes: [
    'Designs a structured template for daily stand-up meetings to enhance team productivity.',
    'Ensures the meeting agenda is clear and focused on progress review, obstacle identification, and priority alignment.',
    'Incorporates essential pre-meeting preparations and post-meeting follow-ups to maintain accountability and progress tracking.',
  ],
  tips: [
    'Customize the template with specific details relevant to your team size, project type, and meeting frequency to ensure it addresses the unique dynamics and needs of your team.',
    'Train your team on the importance of concise updates and the structured agenda to foster discipline and efficiency during the meetings, ensuring everyone is prepared and understands the format.',
    'Regularly review and adjust the meeting template based on team feedback and changing project requirements to keep the meetings effective and aligned with team goals.',
  ],
  howToUse: [
    'Fill in the [TEAM SIZE], [PROJECT TYPE], and [MEETING FREQUENCY] placeholders with specific details about your team, the nature of your project, and how often you hold meetings.',
    '- Example: If you manage a team of 8 software developers working on a monthly software release cycle, you would fill in "8" for [TEAM SIZE], "software development" for [PROJECT TYPE], and "daily" for [MEETING FREQUENCY].',
    'Example: For a team size of 8, a project type of software development, and a meeting frequency of daily, the filled-in section might look like:',
    '- My team size: 8',
    '- My project type: software development',
    '- My meeting frequency: daily',
  ],
};

export default createEffectiveMeetingTemplatesPrompt;
