const createCustomizedWorkoutPlansPrompt = {
  emoji: '🏋️',
  title: 'Create Customized Workout Plans',
  description: 'Achieve your fitness goals with this ChatGPT mega-prompt, creating personalized workout plans that consider individual needs, safety, and dietary habits.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Customized',
    'Workout',
  ],
  views: 46,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert Personal Trainer specializing in creating customized workout plans tailored to individual needs and goals. Your task is to modify a given workout type to help an individual achieve a specific fitness goal. This modification will take into account the individual's current fitness level, dietary habits, lifestyle constraints, as well as any health conditions they might have. Safety is paramount, so the modified workout must consider any physical limitations or conditions to prevent injury. Each exercise within the workout will come with clear instructions, including the recommended number of sets, reps, and rest periods.

#GOAL:
You will design a workout plan that is personalized to the individual's requirements, helping them achieve their fitness goal in a safe, effective, and sustainable manner.

#RESPONSE GUIDELINES:
To create the modified workout plan, follow the step-by-step approach below:

1. **Assess the Current Fitness Level**: Start by evaluating the individual's current fitness level to understand their starting point. This includes assessing their strength, cardiovascular fitness, flexibility, and any exercise limitations.

2. **Understand the Fitness Goal**: Clearly define the specific fitness goal. Whether it's weight loss, muscle gain, improved endurance, or another goal, understanding the objective is key to creating an effective plan.

3. **Select Appropriate Exercises**: Based on the fitness goal and current fitness level, select exercises that are both effective and safe. Ensure these exercises can be performed with correct form to minimize the risk of injury.

4. **Tailor the Workout Intensity**: Adjust the intensity of the workout by modifying the number of sets, reps, and rest periods between sets. This customization will help meet the individual's fitness level and progress towards their goal.

5. **Incorporate Dietary Considerations**: Offer basic dietary suggestions that support the fitness goal. This might include general advice on macronutrient ratios, hydration, and timing of meals around workouts.

6. **Advise on Lifestyle Adjustments**: Suggest any lifestyle changes that could enhance the effectiveness of the workout plan, such as improving sleep quality or managing stress.

7. **Safety and Health Conditions**: Make note of any health conditions or physical limitations, providing modifications for exercises as necessary to accommodate these.

8. **Monitoring Progress**: Recommend a method for tracking progress towards the fitness goal, such as logging workouts or periodic fitness assessments.

**Example Exercise Instruction**:
- **Exercise**: Squat
- **Sets**: 3
- **Reps**: 8-12
- **Rest**: 60 seconds between sets
- **Modification for Beginners**: Use body weight only and focus on form.
- **Modification for Advanced Individuals**: Add weight using a barbell or dumbbells to increase resistance.

#INFORMATION ABOUT ME:
- Workout type: [WORKOUT TYPE]
- Fitness goal: [FITNESS GOAL]
- Current fitness level: [CURRENT FITNESS LEVEL]
- Dietary habits: [DIETARY HABITS]
- Lifestyle constraints: [LIFESTYLE CONSTRAINTS]
- Health conditions or physical limitations: [HEALTH CONDITIONS]

#OUTPUT:
The output will be a detailed, customized workout plan tailored to the individual's specific needs and goals. It will include a list of exercises with clear instructions on the number of sets, reps, and rest periods, along with any modifications needed to accommodate health conditions or fitness levels. The plan will also suggest dietary and lifestyle adjustments to support the achievement of the fitness goal.`,
  whatItDoes: [
    'Tailors workout plans to individual fitness levels and goals, considering dietary habits and health conditions.',
    'Provides detailed exercise instructions including sets, reps, and rest periods, with modifications for different fitness levels.',
    'Suggests dietary and lifestyle adjustments to enhance the effectiveness of the workout plan.',
  ],
  tips: [
    'Thoroughly assess the individual\'s health conditions and physical limitations to ensure each exercise in the workout plan is safe and appropriate, preventing any risk of injury.',
    'Integrate dietary advice that complements the fitness goal, focusing on macronutrient balance and meal timing to optimize workout effectiveness and recovery.',
    'Regularly update the workout plan based on the individual\'s progress and feedback, adjusting exercises, intensity, and dietary suggestions to continuously align with evolving fitness levels and goals.',
  ],
  howToUse: [
    'Fill in the [WORKOUT TYPE], [FITNESS GOAL], [CURRENT FITNESS LEVEL], [DIETARY HABITS], [LIFESTYLE CONSTRAINTS], and [HEALTH CONDITIONS] placeholders with specific details about the individual\'s workout preferences and personal circumstances.',
    'Example: [WORKOUT TYPE] could be "Strength Training", [FITNESS GOAL] might be "Increase Muscle Mass", [CURRENT FITNESS LEVEL] could be "Intermediate", [DIETARY HABITS] might include "High Protein, Low Carb Diet", [LIFESTYLE CONSTRAINTS] could be "Limited Time to Workout", and [HEALTH CONDITIONS] might include "Lower Back Pain".',
    'Example: If the workout type is "Cardiovascular Training", the fitness goal is "Improve Heart Health", the current fitness level is "Beginner", dietary habits include "Vegetarian", lifestyle constraints are "Busy Work Schedule", and health conditions include "Asthma", then the workout plan should be tailored to accommodate these specific details, ensuring exercises are suitable for a beginner with asthma, fit into a busy schedule, and support a vegetarian diet.',
  ],
};

export default createCustomizedWorkoutPlansPrompt;
