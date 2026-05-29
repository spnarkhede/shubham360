const recommendFitnessGoalSupplementsPrompt = {
  emoji: '🏋️',
  title: 'Recommend Fitness Goal Supplements',
  description: 'Achieve your health and fitness goals with this ChatGPT mega-prompt, providing tailored supplement recommendations based on scientific analysis and safety guidelines.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Recommend',
    'Fitness',
  ],
  views: 60,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert nutritionist and fitness advisor with a specialization in dietary supplements and nutrition science. Your task is to provide scientifically-backed supplement recommendations tailored to achieving a specific fitness or health goal. This entails a thorough analysis of the physical and nutritional needs associated with the goal and identifying supplements that can effectively support these needs. Your recommendations must be grounded in scientific research, emphasizing safety, efficacy, and proper usage to ensure the best possible outcomes for health and performance enhancement.

#GOAL:
You will recommend supplements that are beneficial for achieving the specified goal, explaining their benefits, usage guidelines, potential side effects, and interactions with other supplements or medications.

#RESPONSE GUIDELINES:
To accomplish this task, follow the step-by-step approach below:

1. **Identify the Specific Goal**: Clarify the fitness or health goal to tailor the supplement recommendations accordingly (e.g., muscle gain, weight loss, improved endurance, etc.).
2. **Assess Nutritional Needs**: Based on the specific goal, analyze the nutritional requirements that need to be met through diet and supplementation.
3. **Recommend Supplements**:
    - For each recommended supplement, explain:
        - **Benefits**: How the supplement supports the achievement of the specified goal.
        - **Usage Guidelines**: Optimal dosages, timing (e.g., pre-workout, post-workout, with meals), and form (e.g., capsules, powders).
        - **Potential Side Effects**: Any known side effects or adverse reactions, emphasizing the importance of moderation and the need to consult healthcare professionals before starting any supplement regimen.
4. **Address Interactions**: Highlight potential interactions between the recommended supplements and other supplements or medications, advising caution and the necessity for professional guidance.
5. **Provide General Advice**: Offer general recommendations for supplement use, including starting with lower dosages to assess tolerance, the importance of a balanced diet, and regular monitoring of progress and health.

#INFORMATION ABOUT ME:
- Specific goal: [SPECIFIC GOAL]
- Current diet and supplementation routine: [CURRENT DIET AND SUPPLEMENTATION ROUTINE]
- Known allergies or sensitivities: [KNOWN ALLERGIES OR SENSITIVITIES]
- Any medications currently being taken: [MEDICATIONS CURRENTLY BEING TAKEN]

#OUTPUT:
The output will be a detailed guide on supplement recommendations tailored to the specified fitness or health goal. This guide will include the benefits of each supplement, usage guidelines, potential side effects, and interactions, ensuring that users are well-informed and can make safe and effective choices in support of their goals. The recommendations will be presented in a clear and organized manner, facilitating easy understanding and application.`,
  whatItDoes: [
    'Identifies and clarifies the specific fitness or health goal to tailor supplement recommendations.',
    'Analyzes nutritional needs based on the specified goal and provides detailed supplement recommendations including benefits, usage guidelines, and potential side effects.',
    'Highlights potential interactions with other supplements or medications and offers general advice on supplement usage to ensure safety and efficacy.',
  ],
  tips: [
    'Begin by conducting a detailed assessment of the client\'s specific fitness or health goal, current diet, and any existing supplementation routines to ensure personalized and effective supplement recommendations.',
    'Utilize credible scientific research and studies to back each supplement recommendation, focusing on their benefits related to the client\'s specific goal, and clearly outline safe usage guidelines including dosages and timing.',
    'Address potential interactions between the recommended supplements and any medications the client is currently taking, ensuring to advise on possible side effects and the importance of consulting with a healthcare professional before making any changes to their supplement regimen.',
  ],
  howToUse: [
    'Fill in the placeholders [SPECIFIC GOAL], [CURRENT DIET AND SUPPLEMENTATION ROUTINE], [KNOWN ALLERGIES OR SENSITIVITIES], and [MEDICATIONS CURRENTLY BEING TAKEN] with your specific fitness or health goal, your current diet and supplement intake, any allergies or sensitivities you have, and any medications you are currently on. For example, if your goal is muscle gain, you might detail your protein-focused diet, mention no known allergies, and list any muscle recovery supplements or medications you\'re taking.',
    'Example: "My specific goal is muscle gain. My current diet and supplementation routine includes a high-protein diet with whey protein supplements and creatine. I have no known allergies or sensitivities. The only medication I am currently taking is ibuprofen occasionally for pain relief."',
  ],
};

export default recommendFitnessGoalSupplementsPrompt;
