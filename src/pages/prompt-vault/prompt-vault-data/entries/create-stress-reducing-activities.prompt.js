const createStressReducingActivitiesPrompt = {
  emoji: '🧘',
  title: 'Create Stress-Reducing Activities',
  description: 'Discover effective stress-reducing activities with this ChatGPT mega-prompt, providing diverse options for quick breaks in any work environment.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Stress Management',
    'Stress',
    'Reducing',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `#CONTEXT:
You are an expert in stress management tasked with helping a user find effective stress-reducing activities that can be easily implemented during short breaks or lunch hours in various work environments. The goal is to generate a diverse list of activities that cater to different individual preferences and can be performed with minimal resources or preparation.

#ROLE:
Adopt the role of a stress management expert with extensive knowledge in psychology, mindfulness, and wellness practices.

#RESPONSE GUIDELINES:
- Provide a list of 5 distinct stress-reducing activities
- For each activity, include:
  - Name of the activity
  - Duration in minutes
  - Description of the activity
  - Stress reduction benefits
- Conclude with additional stress management tips

#TASK CRITERIA:
- Focus on activities that can be easily implemented during short breaks or lunch hours
- Consider various work environments and individual preferences
- Suggest activities that require minimal resources or preparation
- Avoid activities that may disrupt the work environment or colleagues

#INFORMATION ABOUT ME:
- My work environment: [DESCRIBE YOUR WORK ENVIRONMENT]
- My typical break duration: [SPECIFY TYPICAL BREAK DURATION]
- My personal preferences: [LIST ANY PERSONAL PREFERENCES OR LIMITATIONS]

#RESPONSE FORMAT:
Activity 1:
Name: [Activity Name]
Duration: [Duration in Minutes]
Description: [Activity Description]
Benefits: [Stress Reduction Benefits]

Activity 2:
Name: [Activity Name]
Duration: [Duration in Minutes] 
Description: [Activity Description]
Benefits: [Stress Reduction Benefits]

Activity 3:
Name: [Activity Name]
Duration: [Duration in Minutes]
Description: [Activity Description] 
Benefits: [Stress Reduction Benefits]

Activity 4:
Name: [Activity Name]
Duration: [Duration in Minutes]
Description: [Activity Description]
Benefits: [Stress Reduction Benefits]

Activity 5:
Name: [Activity Name]
Duration: [Duration in Minutes]
Description: [Activity Description]
Benefits: [Stress Reduction Benefits]

Additional Stress Management Tips:
- [Tip 1]
- [Tip 2]
- [Tip 3]`,
  whatItDoes: [
    'Converts user input into a list of five stress-reducing activities tailored for various work environments and preferences.',
    'Each activity includes its name, duration, a detailed description, and its specific stress reduction benefits.',
    'Provides additional general stress management tips to enhance overall well-being.',
  ],
  tips: [
    'Tailor each activity to fit within the typical break durations specified by the user, ensuring they can fully engage in the activity without feeling rushed.',
    'Incorporate a variety of sensory experiences in the activities, such as tactile, auditory, or visual elements, to cater to different personal preferences and enhance the stress reduction effects.',
    'Provide clear, concise instructions for each activity to ensure they can be easily understood and implemented by anyone, regardless of their prior experience with stress management techniques.',
  ],
  howToUse: [
    'Fill in the [DESCRIBE YOUR WORK ENVIRONMENT], [SPECIFY TYPICAL BREAK DURATION], and [LIST ANY PERSONAL PREFERENCES OR LIMITATIONS] placeholders with details about your specific work setting, usual break times, and any personal likes or constraints.',
    '- Example: "My work environment is mostly quiet with a personal office space. My typical break duration is 15 minutes. My personal preferences include quiet activities due to a high noise sensitivity."',
    'Example: If you work in a busy open office, prefer low-impact physical activities, and usually have 30-minute breaks, you might describe it as: "My work environment is a busy open office with little private space. My typical break duration is 30 minutes. I prefer activities that are physically light and can be done in small or crowded spaces."',
  ],
};

export default createStressReducingActivitiesPrompt;
