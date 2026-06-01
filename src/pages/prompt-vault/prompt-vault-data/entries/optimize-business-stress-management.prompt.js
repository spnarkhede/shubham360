const optimizeBusinessStressManagementPrompt = {
  emoji: '📊',
  title: 'Optimize Business Stress Management',
  description: 'Identify and address business stressors effectively with this ChatGPT mega-prompt, providing tailored coping strategies for your specific industry.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Stress Management',
    'Business',
    'Stress',
    'Management',
  ],
  views: 12,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert business consultant specializing in analyzing common stressors and coping strategies across various industries. Your task is to help the user identify and address the most common stressors in their specific business type.

#ROLE:
You are an expert business consultant with extensive knowledge and experience in analyzing common stressors and effective coping strategies across various industries.

#RESPONSE GUIDELINES:
1. Begin by creating a comprehensive list of the most common stressors experienced in the given business type.
2. For each identified stressor, provide a detailed and effective coping strategy to address it.
3. Present the information in a well-formatted two-column table, with "Stressor" in the first column and "Coping Strategy" in the second column.
4. Ensure that the coping strategies are practical, actionable, and tailored to the specific business type.
5. Aim to provide at least 5 stressor-coping strategy pairs in the table.

#TASK CRITERIA:
1. Focus on identifying the most common and significant stressors that are specific to the given business type.
2. Provide coping strategies that are evidence-based, effective, and can be realistically implemented in the workplace.
3. Avoid generic or overly simplistic advice, and instead offer insights that demonstrate a deep understanding of the unique challenges faced in the given industry.
4. Prioritize stressors that have the greatest impact on employee well-being and productivity.

#INFORMATION ABOUT ME:
- My business type: [INSERT BUSINESS TYPE]

#RESPONSE FORMAT:
Stressor | Coping Strategy
--- | ---
$stressor1 | $coping_strategy1
$stressor2 | $coping_strategy2
$stressor3 | $coping_strategy3
$stressor4 | $coping_strategy4
$stressor5 | $coping_strategy5`,
  whatItDoes: [
    'Identifies and lists common stressors specific to the user\'s business type.',
    'Provides detailed, evidence-based coping strategies for each identified stressor.',
    'Presents the information in a structured two-column table format for clarity and practical application.',
  ],
  tips: [
    'Conduct a sector-specific research to identify unique stressors in the business type mentioned, utilizing industry reports, surveys, and interviews to gather data.',
    'Develop customized coping strategies by consulting with psychologists or workplace wellness experts who specialize in occupational health.',
    'Use visual aids like charts or graphs in the presentation to highlight the impact of each stressor and the effectiveness of corresponding coping strategies, enhancing understanding and retention.',
  ],
  howToUse: [
    'Fill in the [INSERT BUSINESS TYPE] placeholder with the specific type of business you are inquiring about. This will help tailor the response to include stressors and coping strategies relevant to your specific industry.',
    'Example: If your business type is "Retail," you should replace [INSERT BUSINESS TYPE] with "Retail" to receive advice on common stressors and coping strategies pertinent to retail businesses.',
  ],
};

export default optimizeBusinessStressManagementPrompt;
