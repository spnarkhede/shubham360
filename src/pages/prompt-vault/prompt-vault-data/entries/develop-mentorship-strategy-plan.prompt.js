const developMentorshipStrategyPlanPrompt = {
  emoji: '🧭',
  title: 'Develop Mentorship Strategy Plan',
  description: 'Unlock mentorship opportunities with this ChatGPT mega-prompt, guiding you through actionable steps to find and cultivate valuable mentor relationships.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Personal Development',
    'Mentorship',
    'Strategy',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are tasked with helping a user identify and pursue mentorship opportunities in their chosen field or industry. The goal is to create a comprehensive, step-by-step guide that breaks down the process into clear, actionable steps using a flowchart-style bullet point system.

#ROLE:
Adopt the role of a mentorship expert with deep knowledge of various fields and industries and a knack for guiding people in finding the right mentors.

#RESPONSE GUIDELINES:
The step-by-step guide should be organized into five main sections:

1. Clarify your mentorship goals
- Identify specific areas where guidance is needed
- Define the type of mentor the user is looking for
- Set SMART goals for the mentorship journey

2. Identify potential mentors
- Leverage existing networks
- Attend industry events and conferences
- Join professional associations and online communities
- Research thought leaders and experts in the field

3. Reach out to potential mentors
- Craft a compelling introduction email
- Request an informational interview or meeting
- Follow up politely if no response is received

4. Prepare for mentorship meetings
- Research the mentor's background and achievements
- Prepare thoughtful questions and discussion topics
- Set clear expectations for the mentorship relationship

5. Cultivate and maintain the mentorship relationship
- Show gratitude and respect for the mentor's time and advice
- Offer value to the mentor when possible
- Regularly assess and adjust mentorship goals

#TASK CRITERIA:
- Focus on providing actionable advice and concrete steps the user can follow
- Tailor the guide to the specific field or industry provided by the user
- Emphasize the importance of setting clear goals, being proactive, and maintaining a respectful and mutually beneficial mentorship relationship
- Avoid generic or overly broad advice that may not be applicable to the user's situation

#INFORMATION ABOUT ME:
- My field or industry: [INSERT FIELD OR INDUSTRY]

#RESPONSE FORMAT:
Use a flowchart-style bullet point system to organize the step-by-step guide, with main steps as top-level bullets and sub-steps as indented bullets. Avoid using XML tags in the response.`,
  whatItDoes: [
    'Converts user input into a structured mentorship guide.',
    'Organizes the guide into five main sections with detailed steps.',
    'Tailors the guide to the user\'s specific field or industry.',
  ],
  tips: [
    'Tailor the mentorship guide specifically to the user\'s field by incorporating industry-specific examples and case studies in each section, enhancing the relevance and applicability of the advice.',
    'Encourage the user to leverage digital tools and platforms specific to their industry for identifying and connecting with potential mentors, such as LinkedIn for professionals, ResearchGate for academics, or Behance for creatives.',
    'Suggest regular review and adaptation of the mentorship goals and strategies based on industry trends and personal career developments, ensuring the mentorship remains dynamic and aligned with professional growth.',
  ],
  howToUse: [
    'Fill in the [INSERT FIELD OR INDUSTRY] placeholder with your specific field or industry to tailor the mentorship guide accordingly.',
    '- Example: If you are in the field of "software development," replace [INSERT FIELD OR INDUSTRY] with "software development."',
    'Example: "My field or industry is software development." This information helps tailor the mentorship guide specifically to the software development industry, ensuring the advice and steps are relevant and actionable.',
  ],
};

export default developMentorshipStrategyPlanPrompt;
