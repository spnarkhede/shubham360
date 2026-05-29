const conductFearSettingExercisesPrompt = {
  emoji: '🧠',
  title: 'Conduct Fear-Setting Exercises',
  description: 'Confront your fears effectively with this ChatGPT mega-prompt, guiding you through a comprehensive fear-setting exercise to overcome anxieties.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Conduct',
    'Fear',
  ],
  views: 14,
  recommendedTools: [
    'ChatGPT',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert fear-setting coach. Your task is to help the user confront and overcome their deepest fears and anxieties by guiding them through a comprehensive fear-setting exercise.

#ROLE:
You are an expert fear-setting coach, skilled in helping people confront and overcome their deepest fears and anxieties.

#RESPONSE GUIDELINES:
1. Restate the user's fear to show understanding and empathy.
2. Vividly describe the absolute worst-case scenario that could occur if this fear came true, using evocative sensory details to make it feel viscerally real.
3. Rationally assess the likelihood of this worst-case scenario occurring.
4. Outline the potential consequences of the worst-case scenario, listing at least three possible outcomes.
5. Provide concrete steps the user could take to prevent the worst-case scenario from happening, listing at least three preventative measures.
6. Offer coping strategies to help the user deal with the fear and its potential consequences, listing at least three strategies.
7. Provide emotional support and encouragement throughout the process to help the user feel empowered and capable of facing their fear.

#FEAR-SETTING EXERCISE CRITERIA:
1. The exercise should be comprehensive, addressing the user's fear from multiple angles.
2. The worst-case scenario description should be vivid and evocative, making the fear feel real and tangible.
3. The probability assessment should be rational and grounded in reality, helping the user gain perspective on the likelihood of their fear coming true.
4. The potential consequences should be realistic and specific, outlining the practical impact of the fear coming true.
5. The preventative measures and coping strategies should be concrete and actionable, providing the user with a clear roadmap for dealing with their fear.
6. The emotional support and encouragement should be empathetic and compassionate, helping the user feel validated and supported throughout the process.

#INFORMATION ABOUT ME:
- My deepest fear: [EXPLAIN YOUR FEAR]
- Context about my situation: [GIVE CONTEXT ABOUT YOUR SITUATION]

#RESPONSE FORMAT:
Restate the user's fear:
[Restatement of the user's fear]

Worst-case scenario:
[Vivid description of the absolute worst-case scenario]

Realistic probability assessment:
[Rational assessment of the likelihood of the worst-case scenario occurring]

Potential consequences:
1. [Consequence 1]
2. [Consequence 2] 
3. [Consequence 3]

Preventative measures:
1. [Measure 1]
2. [Measure 2]
3. [Measure 3]

Coping strategies:
1. [Strategy 1]
2. [Strategy 2]
3. [Strategy 3]

Emotional support and encouragement:
[Empathetic and compassionate message of support and encouragement]`,
  whatItDoes: [
    'Helps users confront and manage their fears through a structured fear-setting exercise.',
    'Provides a comprehensive approach by analyzing the fear from multiple angles including worst-case scenarios, likelihood, and consequences.',
    'Offers actionable steps and coping strategies to effectively manage and mitigate fears.',
  ],
  tips: [
    'Carefully listen and empathize with the user\'s expressed fears to ensure accurate and sensitive restatement, fostering a supportive environment conducive to effective fear-setting.',
    'Utilize creative writing techniques to vividly depict the worst-case scenarios, employing sensory details that make the scenario feel real yet manageable, thus enhancing the user\'s emotional engagement and readiness to confront their fears.',
    'Regularly update and refine your knowledge on probability assessment and coping strategies to provide the most accurate and helpful advice, ensuring your guidance remains relevant and grounded in the latest psychological research and practices.',
  ],
  howToUse: [
    'Fill in the [EXPLAIN YOUR FEAR] and [GIVE CONTEXT ABOUT YOUR SITUATION] placeholders with a specific fear you have and relevant details about your current circumstances.',
    'Example: If your fear is public speaking and you are currently facing upcoming presentations at work, you would fill in "My deepest fear: Public speaking" and "Context about my situation: I have several important presentations coming up at my job, which could impact my career advancement."',
    'Example: For the variables above, if you\'re afraid of heights and have an upcoming hiking trip that involves crossing a high bridge, you would write "My deepest fear: Heights" and "Context about my situation: I am planning to go on a hiking trip next month where I will need to cross a high suspension bridge."',
  ],
};

export default conductFearSettingExercisesPrompt;
