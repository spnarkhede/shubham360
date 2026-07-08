const analyzeWorkoutPerformanceDataPrompt = {
  emoji: '📊',
  title: 'Analyze Workout Performance Data',
  description: 'Maximize your fitness potential with this ChatGPT mega-prompt, delivering personalized workout analysis, insights, and actionable recommendations for optimal performance.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Coding',
    'Productivity',
    'Goal Setting & Tracking',
    'Workout',
    'Performance',
  ],
  views: 11,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `#CONTEXT:
Adopt the role of a highly experienced fitness data analyst with a deep understanding of exercise science, performance metrics, and personalized training. Your task is to meticulously examine workout logs to assess progress, identify trends, and offer expert insights. By analyzing the data, you will pinpoint strengths, highlight areas needing improvement, and suggest tailored adjustments to optimize the workout routine. This approach aims to enhance overall fitness performance, accelerate progress towards fitness goals, and ensure the training is both efficient and effective.

#GOAL:
You will deliver a comprehensive analysis of the provided workout data, offering personalized insights and actionable recommendations. This analysis will focus on maximizing the effectiveness of the workout routine, identifying opportunities for improvement, and ensuring that the training aligns with the individual's fitness objectives.

#RESPONSE GUIDELINES:
Follow this structured approach to analyze the workout data and provide recommendations:

1. **Compile and Categorize Workout Data**: Start by organizing the workout logs by date, type of exercise (e.g., cardio, strength, flexibility), intensity levels, and any other relevant metrics (such as reps, sets, duration, and rest periods).
2. **Assess Progress Over Time**: Examine changes in performance metrics (e.g., increased weights, longer durations, improved recovery times) across different periods. Look for patterns of improvement, plateaus, or regression in various aspects of the workout routine.
3. **Identify Strengths and Areas for Improvement**: Highlight areas where performance has consistently improved or exceeded goals. Conversely, pinpoint exercises or metrics showing less progress or stagnation. Consider factors like exercise variety, intensity, frequency, and recovery.
4. **Analyze Workout Balance and Variety**: Evaluate the balance between different types of workouts (strength, cardio, flexibility) and muscle group targeting. Determine if there is an overemphasis or neglect of certain areas that could lead to imbalances or increased injury risk.
5. **Offer Personalized Recommendations**:
    - Suggest adjustments to exercise types, intensities, and frequencies based on the identified patterns and goals.
    - Recommend strategies to overcome plateaus (e.g., altering set/rep schemes, incorporating new exercises).
    - Propose changes to improve workout balance and address neglected areas.
    - Advise on recovery strategies and nutritional considerations to support workout goals.
6. **Simplify the Findings**: Present the analysis and recommendations in straightforward, easy-to-understand language. Use analogies or common scenarios to explain complex concepts, ensuring the advice is accessible and actionable.

#INFORMATION ABOUT ME:
- My fitness goals: [FITNESS GOALS]
- My workout routine details: [WORKOUT ROUTINE DETAILS]
- Areas of particular interest or concern: [AREAS OF INTEREST OR CONCERN]
- Any known injuries or physical limitations: [INJURIES OR LIMITATIONS]

#OUTPUT:
The output will be a detailed report that includes:
- An overview of workout progress over time, highlighting trends and patterns.
- A clear identification of strengths and areas needing improvement, supported by data from the workout logs.
- Customized recommendations for adjusting the workout routine, aimed at enhancing performance, addressing weaknesses, and achieving fitness goals more effectively.
- The report will be structured to facilitate easy comprehension, with sections dedicated to overall progress, specific insights, and actionable advice.`,
  whatItDoes: [
    'Analyzes workout data to assess progress and identify performance trends.',
    'Highlights strengths and areas for improvement in the workout routine.',
    'Provides personalized recommendations to optimize the effectiveness of the workout routine.',
  ],
  tips: [
    'Utilize advanced data visualization tools to create clear and engaging charts or graphs that illustrate workout progress, trends, and patterns, making the analysis more accessible and understandable for the client.',
    'Develop a standardized template for workout data entry and analysis that can be reused for future assessments, ensuring consistency and efficiency in tracking progress and making adjustments to the workout routine.',
    'Implement a follow-up schedule to re-evaluate the client\'s progress post-recommendations, allowing for ongoing adjustments and fine-tuning of the workout plan based on continuous data analysis and feedback.',
  ],
  howToUse: [
    'Fill in the [FITNESS GOALS], [WORKOUT ROUTINE DETAILS], [AREAS OF INTEREST OR CONCERN], and [INJURIES OR LIMITATIONS] placeholders with specific information about your fitness objectives, current exercise regimen, key focus areas, and any physical constraints you have.',
    '- Example: "My fitness goals are to increase muscle mass and improve cardiovascular health. My workout routine includes strength training four times a week and cardio three times a week. I am particularly interested in optimizing my recovery times and concerned about my lower back pain."',
    'Example: If your fitness goals include building endurance and losing weight, your workout routine details might involve daily cardio sessions and controlled diet plans, with a focus on areas like stamina building and fat reduction. If you have a knee injury, include it in the injuries or limitations section to tailor the analysis and recommendations accordingly.',
  ],
};

export default analyzeWorkoutPerformanceDataPrompt;
