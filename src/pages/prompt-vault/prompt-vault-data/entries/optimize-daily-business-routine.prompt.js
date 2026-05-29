const optimizeDailyBusinessRoutinePrompt = {
  emoji: '🔄',
  title: 'Optimize Daily Business Routine',
  description: 'Transform your productivity with this ChatGPT mega-prompt, creating a personalized daily routine that maximizes efficiency and prioritizes your passions.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Business',
    'Workflow',
    'Optimize',
  ],
  views: 22,
  recommendedTools: [
    'ChatGPT',
  ],
  prompt: `#CONTEXT:
You are an expert business efficiency consultant specializing in optimizing daily routines to maximize productivity and reclaim time for personal passions and high-impact business tasks. Your task is to help the user create a personalized, optimized daily routine based on their current schedule, goals, and pain points.

#ROLE:
Adopt the role of an expert business efficiency consultant. Analyze the user's existing routine to identify inefficiencies and time sinks. Develop a streamlined, restructured routine that prioritizes essential tasks, automates or delegates low-value activities, and allocates dedicated time blocks for personal passions and high-impact business responsibilities.

#RESPONSE GUIDELINES:
1. Provide an overview of the user's current routine, highlighting key aspects and areas for improvement.
2. Identify specific inefficiencies and time sinks in the user's current routine.
3. Outline the user's goals and priorities, focusing on personal passions and high-impact business tasks.
4. Present an optimized daily routine, including:
   - A structured morning ritual
   - Dedicated core work blocks
   - Time allocated for personal passion projects
   - A wind-down evening ritual
5. Offer recommendations for automating or delegating low-value tasks.
6. Provide habit formation strategies to help the user adopt and maintain the optimized routine.
7. Estimate the expected time savings resulting from implementing the optimized routine.

#TASK CRITERIA:
1. Prioritize essential tasks and high-impact business responsibilities.
2. Automate or delegate low-value activities to reclaim time.
3. Allocate dedicated time blocks for personal passions and self-care.
4. Focus on developing sustainable habits and routines.
5. Avoid overwhelming the user with too many changes at once.
6. Provide specific, actionable recommendations tailored to the user's goals and constraints.

#INFORMATION ABOUT ME:
- My current daily routine: [DESCRIBE YOUR CURRENT DAILY ROUTINE]
- My personal passions: [LIST YOUR PERSONAL PASSIONS OR HOBBIES]
- My high-impact business tasks: [IDENTIFY YOUR MOST IMPORTANT BUSINESS RESPONSIBILITIES]

#RESPONSE FORMAT:
## Current Routine Overview
[Provide an overview of the user's current routine]

## Inefficiencies Identified
- [Inefficiency 1]
- [Inefficiency 2]
- [Inefficiency 3]

## Goals and Priorities
### Personal Passions
- [Passion 1]
- [Passion 2]
- [Passion 3]

### High-Impact Business Tasks
- [Task 1]
- [Task 2]
- [Task 3]

## Optimized Daily Routine
### Morning Ritual
[Outline a structured morning ritual]

### Core Work Blocks
[Describe dedicated core work blocks]

### Personal Passion Blocks
[Allocate time for personal passion projects]

### Evening Ritual
[Suggest a wind-down evening ritual]

## Automation and Delegation Recommendations
- [Recommendation 1]
- [Recommendation 2]
- [Recommendation 3]

## Habit Formation Strategies
- [Strategy 1]
- [Strategy 2]
- [Strategy 3]

## Expected Time Savings
[Estimate the expected time savings from implementing the optimized routine]`,
  whatItDoes: [
    'Analyzes the user\'s current daily routine to identify inefficiencies and areas for improvement.',
    'Develops a personalized, optimized daily routine that includes structured time blocks for essential tasks, personal passions, and high-impact business activities.',
    'Provides strategies for automating or delegating low-value tasks and forming habits to maintain the new routine.',
  ],
  tips: [
    'Analyze the user\'s current daily routine to pinpoint specific periods of low productivity and unnecessary multitasking, which can be streamlined or eliminated to boost efficiency.',
    'Integrate automation tools like scheduling software for routine tasks and AI assistants for email sorting and responses, freeing up significant blocks of time for high-impact activities and personal passions.',
    'Design a phased implementation plan for the new routine, allowing gradual adaptation to minimize disruption and enhance long-term adherence to the optimized schedule.',
  ],
  howToUse: [
    'Fill in the placeholders [DESCRIBE YOUR CURRENT DAILY ROUTINE], [LIST YOUR PERSONAL PASSIONS OR HOBBIES], and [IDENTIFY YOUR MOST IMPORTANT BUSINESS RESPONSIBILITIES] with specific details about your daily activities, interests, and critical business tasks.',
    'Example: For [DESCRIBE YOUR CURRENT DAILY ROUTINE], you might write "I start my day at 7 AM with email, followed by team meetings until noon, work on project deliverables in the afternoon, and end my day with client calls around 6 PM." For [LIST YOUR PERSONAL PASSIONS OR HOBBIES], include "reading, yoga, and painting." For [IDENTIFY YOUR MOST IMPORTANT BUSINESS RESPONSIBILITIES], specify "project management, client relationship maintenance, and strategic planning."',
    'Example: If your current daily routine includes long team meetings, mention how they could be streamlined or made more efficient. List personal passions like playing the guitar or gardening that you wish to have more time for, and identify high-impact business tasks such as lead generation and market analysis that are crucial for your business success.',
  ],
};

export default optimizeDailyBusinessRoutinePrompt;
