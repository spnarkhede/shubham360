const optimizeStressFreeWorkspacesPrompt = {
  emoji: '🏢',
  title: 'Optimize Stress-Free Workspaces',
  description: 'Transform your workspace with this ChatGPT mega-prompt, offering tailored recommendations for layout, lighting, furniture, and decor to reduce stress.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Stress Management',
    'Stress',
    'Free',
    'Workspaces',
  ],
  views: 11,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Your task is to help a user design a physical work environment optimized for reducing stress. You will provide specific, actionable recommendations considering all relevant factors, from layout and lighting to furniture and decor choices.

#ROLE:
Adopt the role of an expert in workplace wellness and ergonomics, with deep knowledge of how physical environments impact stress levels and productivity. 

#RESPONSE GUIDELINES:
Return recommendations organized into the following sections:

## Workspace Layout
✅ Layout recommendation 1
✅ Layout recommendation 2
✅ Layout recommendation 3

## Lighting 
✅ Lighting recommendation 1
✅ Lighting recommendation 2 
✅ Lighting recommendation 3

## Temperature and Air Quality
✅ Temperature recommendation 1
✅ Temperature recommendation 2
✅ Air quality recommendation 1 
✅ Air quality recommendation 2

## Furniture and Equipment
✅ Ergonomic recommendation 1
✅ Ergonomic recommendation 2
✅ Ergonomic recommendation 3
✅ Equipment recommendation 1
✅ Equipment recommendation 2

## Color and Decor
✅ Color psychology recommendation 1
✅ Color psychology recommendation 2 
✅ Decor recommendation 1
✅ Decor recommendation 2
✅ Decor recommendation 3

## Biophilic Design Elements
✅ Nature incorporation recommendation 1
✅ Nature incorporation recommendation 2
✅ Nature incorporation recommendation 3

## Noise Reduction
✅ Acoustic recommendation 1
✅ Acoustic recommendation 2
✅ Policy recommendation 1

## Relaxation and Privacy Zones
✅ Relaxation zone recommendation 1 
✅ Relaxation zone recommendation 2
✅ Privacy zone recommendation 1
✅ Privacy zone recommendation 2

#TASK CRITERIA:
1. Provide comprehensive, specific and actionable recommendations for each section
2. Focus on factors that directly impact stress levels and productivity
3. Prioritize evidence-based recommendations backed by research when possible
4. Avoid vague or overly general suggestions

#INFORMATION ABOUT ME:
- Workspace type: [DESCRIBE THE TYPE OF WORKSPACE E.G. OFFICE, HOME OFFICE, COWORKING SPACE] 
- Number of occupants: [SPECIFY THE NUMBER OF PEOPLE USING THE SPACE]
- Any specific needs or constraints: [LIST ANY UNIQUE REQUIREMENTS OR LIMITATIONS]

#RESPONSE FORMAT:
Organize the recommendations into clearly defined sections using markdown formatting. Utilize emojis to highlight each individual recommendation for easy readability. Aim for 2-3 recommendations per section.`,
  whatItDoes: [
    'Converts user input into a structured set of recommendations for designing a stress-reducing physical work environment.',
    'Organizes the recommendations into specific categories such as workspace layout, lighting, and furniture.',
    'Utilizes markdown formatting and emojis for clarity and easy readability of the recommendations.',
  ],
  tips: [
    'Focus on creating a balanced workspace layout that promotes both collaboration and individual work, incorporating flexible, movable furniture to easily adapt to different work needs and group sizes.',
    'Implement a lighting strategy that combines natural light with adjustable artificial lighting options, allowing individuals to customize light levels according to their comfort and the task at hand.',
    'Introduce biophilic design elements such as indoor plants, natural light, and materials that mimic nature to enhance relaxation and reduce stress levels in the work environment.',
  ],
  howToUse: [
    'Fill in the placeholders [DESCRIBE THE TYPE OF WORKSPACE E.G. OFFICE, HOME OFFICE, COWORKING SPACE], [SPECIFY THE NUMBER OF PEOPLE USING THE SPACE], and [LIST ANY UNIQUE REQUIREMENTS OR LIMITATIONS] with specific details about your workspace. For example, describe whether it\'s a small home office or a large open-plan coworking space, mention if it\'s typically used by just you or by multiple people, and note any special needs like accessibility considerations or space constraints.',
    'Example: "The type of workspace is a small home office. The number of occupants is just myself. Specific needs include a quiet environment due to frequent video calls and limited space for large furniture."',
  ],
};

export default optimizeStressFreeWorkspacesPrompt;
