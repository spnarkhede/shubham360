const conductEffectiveGoalReviewsPrompt = {
  emoji: '📈',
  title: 'Conduct Effective Goal Reviews',
  description: 'Achieve effective goal review and adjustment sessions with this ChatGPT mega-prompt, providing a detailed, actionable process for meaningful progress.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Goal Setting & Tracking',
    'Conduct',
    'Effective',
    'Goal',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `#CONTEXT:
You are working with an individual or organization looking to conduct effective goal review and adjustment sessions. Your task is to create a detailed, step-by-step process that incorporates proven techniques and best practices to ensure meaningful progress and adaptability.

#ROLE:
You are an expert in goal setting, tracking, and optimization with extensive knowledge of individual and organizational productivity strategies.

#RESPONSE GUIDELINES:
Provide a clear, actionable step-by-step process for conducting effective goal review and adjustment sessions. The process should include the following sections:

1. Prepare for the review session
2. Assess progress and identify obstacles
3. Analyze root causes and explore solutions
4. Adjust goals and strategies
5. Create an action plan and accountability measures
6. Schedule the next review session

Each section should include 2-3 specific action steps or techniques to ensure a comprehensive and effective review process.

#TASK CRITERIA:
- Focus on proven techniques and best practices for goal review and adjustment
- Ensure the process leads to meaningful progress and adaptability
- Present the information in a clear, actionable format
- Avoid unnecessary jargon or complex terminology
- Provide concrete examples or templates where appropriate to support implementation

#INFORMATION ABOUT ME:
- My role in the organization: [ROLE]
- My current goal-setting process: [CURRENT PROCESS]
- My biggest challenge in goal achievement: [BIGGEST CHALLENGE]

#RESPONSE FORMAT:
1. Prepare for the review session
   - [Preparation Step 1]
   - [Preparation Step 2]
   - [Preparation Step 3]

2. Assess progress and identify obstacles
   - [Assessment Step 1]
   - [Assessment Step 2]
   - [Assessment Step 3]

3. Analyze root causes and explore solutions
   - [Analysis Step 1]
   - [Analysis Step 2]
   - [Analysis Step 3]

4. Adjust goals and strategies
   - [Adjustment Step 1]
   - [Adjustment Step 2]
   - [Adjustment Step 3]

5. Create an action plan and accountability measures
   - [Action Plan Step 1]
   - [Action Plan Step 2]
   - [Action Plan Step 3]

6. Schedule the next review session
   - [Scheduling Step 1]
   - [Scheduling Step 2]`,
  whatItDoes: [
    'Outlines a structured process for conducting goal review and adjustment sessions.',
    'Emphasizes the use of proven techniques and best practices to ensure meaningful progress.',
    'Provides a clear, actionable format for each step of the process to enhance adaptability and accountability.',
  ],
  tips: [
    'Prepare for the review session by collecting all relevant data on current goals, performance metrics, and feedback from stakeholders to have a comprehensive overview ready for discussion.',
    'Utilize tools like SWOT analysis during the \'Assess progress and identify obstacles\' phase to systematically evaluate strengths, weaknesses, opportunities, and threats related to the goals.',
    'Implement regular, structured follow-ups after adjusting goals and strategies to monitor progress and ensure continuous alignment with the overall objectives.',
  ],
  howToUse: [
    'Fill in the [ROLE], [CURRENT PROCESS], and [BIGGEST CHALLENGE] placeholders with specific details about your role, your current goal-setting process, and the main challenges you face in achieving your goals.',
    '- Example: If your role is "Team Leader", your current process might be "Monthly team meetings to review objectives", and your biggest challenge could be "Ensuring consistent team engagement."',
    'Example: "My role in the organization is Team Leader, focusing on enhancing team productivity and alignment. My current goal-setting process involves quarterly strategic planning sessions with key stakeholders to align on priorities and resources. My biggest challenge in goal achievement is maintaining momentum and commitment from all team members throughout the project lifecycle."',
  ],
};

export default conductEffectiveGoalReviewsPrompt;
