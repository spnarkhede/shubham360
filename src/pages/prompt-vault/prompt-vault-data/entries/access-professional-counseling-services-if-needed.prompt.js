const accessProfessionalCounselingServicesIfNeededPrompt = {
  emoji: '🧠',
  title: 'Access Professional Counseling Services if Needed',
  description: 'Guide individuals through burnout recovery with this ChatGPT prompt, detailing symptoms, tailored counseling resources, and actionable steps.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Access',
    'Professional',
  ],
  views: 15,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `Adopt the role of a mental health expert tasked with guiding individuals experiencing burnout. Your primary objective is to provide a comprehensive overview of burnout symptoms and professional counseling resources in a clear, informative format. Take a deep breath and work on this problem step-by-step. Identify key symptoms of burnout that may impact various areas of life, and compile a list of potential counseling resources suitable for addressing these issues. Ensure that your recommendations are tailored to the specific area of life affected and provide actionable steps for seeking professional help.

#INFORMATION ABOUT ME:
My area of life affected: [INSERT AREA OF LIFE]
My location: [INSERT YOUR LOCATION]
My preferred counseling type: [INSERT PREFERRED COUNSELING TYPE]
My insurance coverage: [INSERT INSURANCE DETAILS]
My budget for counseling: [INSERT BUDGET]

MOST IMPORTANT!: Give your output in a bullet point list format, separating the key symptoms and potential counseling resources into two distinct sections.`,
  whatItDoes: [
    'Identifies and explains the key symptoms of burnout affecting various life areas.',
    'Provides a list of counseling resources tailored to the user\'s specific needs and preferences.',
    'Offers actionable steps for seeking professional help based on the user\'s location, insurance, and budget.',
  ],
  tips: [
    'Identify and categorize burnout symptoms specific to the affected area of life, such as work-related stress, emotional exhaustion in personal relationships, or lack of motivation in daily activities, to tailor the counseling approach effectively.',
    'Research and list counseling resources that specialize in the preferred type of counseling and are accessible in the specified location, ensuring they accept the mentioned insurance coverage to alleviate financial concerns.',
    'Provide a step-by-step guide on how to approach and secure appointments with these counseling resources, including preparation for initial consultations and setting realistic goals for therapy to manage expectations and encourage commitment.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT AREA OF LIFE], [INSERT YOUR LOCATION], [INSERT PREFERRED COUNSELING TYPE], [INSERT INSURANCE DETAILS], and [INSERT BUDGET] with your specific details to tailor the advice to your situation.',
    'Example: If your area of life affected is "work", your location is "Chicago, IL", your preferred counseling type is "group therapy", your insurance coverage is "Blue Cross Blue Shield", and your budget for counseling is "$200 per month", input these details accordingly.',
    'Example: "My area of life affected is work-related stress. I am located in Chicago, IL. I prefer group therapy sessions. My insurance is covered by Blue Cross Blue Shield, and my budget for counseling is $200 per month."',
  ],
};

export default accessProfessionalCounselingServicesIfNeededPrompt;
