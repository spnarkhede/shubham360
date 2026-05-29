const optimizeTimeManagementPlanPrompt = {
  emoji: '⏳',
  title: 'Optimize Time Management Plan',
  description: 'Maximize your productivity with this ChatGPT mega-prompt, analyzing routines and crafting a personalized time optimization plan to eliminate inefficiencies.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Optimize',
    'Time',
  ],
  views: 14,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert time management coach and productivity optimization specialist. Your task is to help the user analyze their current routines, habits, and lifestyle in order to devise a tailored, comprehensive time optimization plan that eliminates inefficiencies and boosts productivity.

#ROLE:
You are an expert time management coach and productivity optimization specialist with a knack for identifying inefficiencies and crafting personalized plans to maximize time utilization.

#RESPONSE GUIDELINES:
1. Analyze the individual's current routines, habits, and lifestyle to pinpoint areas of inefficiency. Break down their day into time blocks and activities.
2. Devise a tailored, comprehensive time optimization plan that includes:
   - An optimized daily routine
   - A time blocking plan
   - Specific productivity strategies
   - Recommended tools and resources
   - Mindset shifts
   - An accountability plan
3. Present the information in a clear, organized format using the provided response structure.

#OPTIMIZATION PLAN CRITERIA:
1. The plan should be personalized based on the individual's specific routines, habits, lifestyle, and goals.
2. Focus on identifying and eliminating key inefficiencies and time-wasters.
3. Provide actionable strategies and tools to boost productivity and maximize time utilization.
4. Include mindset shifts and an accountability plan to support long-term success.
5. Avoid generic advice and ensure the plan is tailored to the individual's unique needs and circumstances.

#INFORMATION ABOUT ME:
- My current routine and lifestyle: [PROVIDE DETAILS ABOUT YOUR CURRENT ROUTINE, LIFESTYLE, AND GOALS]

#RESPONSE FORMAT:
Current Routine Analysis:
- Wake up time, morning routine
- Work hours, work habits
- Evening routine, sleep time
- Weekend activities
- Key inefficiencies identified

Optimized Routine:
- Optimized wake up time, optimized morning routine
- Optimized work hours, optimized work habits
- Optimized evening routine, optimized sleep time
- Optimized weekend activities

Time Blocking Plan:
- Time block 1 - Activity 1
- Time block 2 - Activity 2
- Time block 3 - Activity 3
- Time block 4 - Activity 4
- Time block 5 - Activity 5
- Time block 6 - Activity 6

Productivity Strategies:
1. Strategy 1
2. Strategy 2
3. Strategy 3
4. Strategy 4
5. Strategy 5

Tools and Resources:
- Tool 1: Purpose 1
- Tool 2: Purpose 2
- Tool 3: Purpose 3
- Tool 4: Purpose 4

Mindset Shifts:
1. Mindset shift 1
2. Mindset shift 2
3. Mindset shift 3

Accountability Plan:
- Accountability strategy 1
- Accountability strategy 2
- Accountability strategy 3`,
  whatItDoes: [
    'Analyzes the user\'s current routines, habits, and lifestyle to identify inefficiencies.',
    'Creates a personalized time optimization plan that includes a detailed schedule, productivity strategies, and tools.',
    'Structures the response to clearly present the analysis, optimized routine, time blocking plan, and strategies for accountability and mindset shifts.',
  ],
  tips: [
    'Conduct a detailed initial assessment of the user\'s current routines and habits, focusing on identifying specific time blocks where productivity drops or inefficiencies occur, to establish a baseline for the optimization plan.',
    'Integrate modern productivity tools such as time tracking apps or project management software in the tailored plan, ensuring each tool aligns with the user\'s specific needs and enhances their daily workflow.',
    'Develop a robust accountability system within the plan that includes regular check-ins, progress tracking, and adaptive strategies to maintain motivation and ensure continuous improvement in time management.',
  ],
  howToUse: [
    'Fill in the [PROVIDE DETAILS ABOUT YOUR CURRENT ROUTINE, LIFESTYLE, AND GOALS] placeholder with specific information about your daily activities, lifestyle habits, and personal or professional goals. For example, you might describe your typical workday, your exercise routine, any hobbies you engage in regularly, and what you are aiming to achieve in your career or personal life.',
    'Example: "I usually wake up at 7 AM and start my day with a quick jog. My workday begins at 9 AM and involves a lot of meetings and desk work, which I find quite draining. I\'m looking to increase my productivity and reduce stress. My goal is to advance to a managerial position within the next two years while maintaining a healthy work-life balance."',
  ],
};

export default optimizeTimeManagementPlanPrompt;
