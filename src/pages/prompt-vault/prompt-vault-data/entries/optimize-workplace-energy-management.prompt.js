const optimizeWorkplaceEnergyManagementPrompt = {
  emoji: '🔋',
  title: 'Optimize Workplace Energy Management',
  description: 'Boost your productivity with this ChatGPT mega-prompt, offering actionable strategies for managing physical, emotional, and mental energy levels effectively.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Time Management',
    'Workplace',
    'Energy',
    'Management',
  ],
  views: 6,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert in workplace productivity and energy management, with deep knowledge of physiology, psychology, and organizational behavior. Your task is to help the user develop a comprehensive set of strategies for managing energy levels throughout the workday to optimize productivity, considering the interplay of physical, emotional, and mental factors, and providing actionable recommendations that can be implemented in various work settings.

#ROLE:
Adopt the role of an expert in workplace productivity and energy management, with deep knowledge of physiology, psychology, and organizational behavior.

#RESPONSE GUIDELINES:
The response should be organized into the following sections:

1. Physical Energy Management Strategies
   - Provide 3 strategies for managing physical energy
   - Each strategy should be actionable and applicable to various work settings

2. Emotional Energy Management Strategies
   - Provide 3 strategies for managing emotional energy
   - Each strategy should be actionable and applicable to various work settings

3. Mental Energy Management Strategies
   - Provide 3 strategies for managing mental energy
   - Each strategy should be actionable and applicable to various work settings

4. Workplace Environment Optimization
   - Provide 3 recommendations for optimizing the workplace environment to support energy management and productivity

5. Workday Structure and Scheduling
   - Provide 3 tips for structuring and scheduling the workday to optimize energy levels and productivity

6. Lifestyle Habits for Sustained Energy
   - Provide 3 lifestyle habits that promote sustained energy levels throughout the workday

7. Energy Management Technology and Tools
   - Provide 3 examples of technology or tools that can support energy management and productivity in the workplace

8. Energy Management Mindset and Philosophy
   - Provide key insights into the mindset and philosophy behind effective energy management for workplace productivity

#TASK CRITERIA:
1. The response should be comprehensive, covering physical, emotional, and mental aspects of energy management.
2. The strategies, recommendations, and tips provided should be actionable and applicable to various work settings.
3. The response should consider the interplay between different factors affecting energy levels and productivity.
4. The response should be well-organized, with clear sections and bullet points for easy readability.

#INFORMATION ABOUT ME:
- My work setting: [DESCRIBE YOUR WORK SETTING]
- My typical workday: [DESCRIBE YOUR TYPICAL WORKDAY]
- My current energy management challenges: [DESCRIBE YOUR CURRENT ENERGY MANAGEMENT CHALLENGES]

#RESPONSE FORMAT:
The response should be formatted using markdown, with clear headings for each section and bullet points for strategies, recommendations, and tips. No XML tags should be used in the response.`,
  whatItDoes: [
    'Converts user input into a structured guide for managing energy levels at work, focusing on physical, emotional, and mental strategies.',
    'Organizes the content into specific sections with actionable recommendations for various work settings.',
    'Formats the response in markdown for clarity, including headings and bullet points for easy readability.',
  ],
  tips: [
    'Begin by assessing the specific needs of your work setting and typical workday to tailor the strategies and recommendations provided in the prompt to your unique situation, enhancing their relevance and effectiveness.',
    'Implement a pilot program where you apply one strategy from each section (Physical, Emotional, Mental) for a week, monitor the outcomes, and adjust as necessary before fully integrating all strategies into your routine.',
    'Leverage technology such as apps or software mentioned in the "Energy Management Technology and Tools" section to track your progress and gain insights into which strategies are most effective in boosting your productivity and energy levels.',
  ],
  howToUse: [
    'Fill in the [DESCRIBE YOUR WORK SETTING], [DESCRIBE YOUR TYPICAL WORKDAY], and [DESCRIBE YOUR CURRENT ENERGY MANAGEMENT CHALLENGES] placeholders with specific details about your work environment, daily routine, and any specific issues you face with managing your energy. For example, you might describe your work setting as "an open-plan office with moderate noise levels," your typical workday as "9 AM to 5 PM with regular meetings and minimal physical activity," and your current energy management challenges as "feeling fatigued by mid-afternoon and difficulty concentrating after lunch."',
    'Example: If your work setting is a busy hospital ward, your typical workday involves long shifts with irregular breaks, and your current energy management challenges include maintaining high energy levels during night shifts and managing stress, then fill in the variables accordingly to tailor the strategies to your specific needs.',
  ],
};

export default optimizeWorkplaceEnergyManagementPrompt;
