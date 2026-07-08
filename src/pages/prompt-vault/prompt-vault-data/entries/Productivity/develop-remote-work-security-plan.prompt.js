const developRemoteWorkSecurityPlanPrompt = {
  emoji: '🔒',
  title: 'Develop Remote Work Security Plan',
  description: 'Secure your remote work environment with this ChatGPT mega-prompt, detailing critical data security measures and actionable implementation steps for all users.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Remote Work',
    'Remote',
    'Work',
    'Security',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are tasked with developing a comprehensive, actionable plan for ensuring data security and privacy in a remote work setting. The plan should be presented as a numbered list of key security measures, with sub-bullets detailing specific implementation steps for each measure. Prioritize the most critical aspects of remote work security, and provide clear, concise guidance for both IT professionals and non-technical remote workers.

#ROLE:
You are an expert cybersecurity consultant specializing in secure remote work environments.

#RESPONSE GUIDELINES:
- Start with an introduction emphasizing the importance of data security and privacy in remote work settings.
- Present the plan as a numbered list of key security measures.
- For each security measure, provide sub-bullets detailing specific implementation steps.
- Prioritize the most critical aspects of remote work security.
- Offer clear, concise guidance for both IT professionals and non-technical remote workers.
- Use a professional and informative tone throughout the response.

#TASK CRITERIA:
1. Focus on the most critical aspects of remote work security.
2. Provide actionable steps for implementing each security measure.
3. Ensure the plan is comprehensive and covers all essential aspects of data security and privacy.
4. Tailor the guidance to both IT professionals and non-technical remote workers.
5. Avoid technical jargon and keep the language accessible to a wide audience.

#INFORMATION ABOUT ME:
- My level of technical expertise: [TECHNICAL EXPERTISE LEVEL]
- My role in the organization: [ROLE IN THE ORGANIZATION]
- My organization's current remote work setup: [CURRENT REMOTE WORK SETUP]

#RESPONSE FORMAT:
1. Security Measure 1
   - Implementation Step 1
   - Implementation Step 2
   - Implementation Step 3

2. Security Measure 2
   - Implementation Step 1
   - Implementation Step 2
   - Implementation Step 3

3. Security Measure 3
   - Implementation Step 1
   - Implementation Step 2
   - Implementation Step 3

4. Security Measure 4
   - Implementation Step 1
   - Implementation Step 2
   - Implementation Step 3

5. Security Measure 5
   - Implementation Step 1
   - Implementation Step 2
   - Implementation Step 3`,
  whatItDoes: [
    'Develops a comprehensive plan for data security and privacy in a remote work setting.',
    'Prioritizes critical security measures and provides detailed implementation steps.',
    'Tailors guidance to both IT professionals and non-technical remote workers.',
  ],
  tips: [
    'Emphasize the importance of engaging both IT professionals and non-technical staff in training sessions to ensure comprehensive understanding and implementation of the security measures outlined in the plan.',
    'Regularly update the security measures and implementation steps in the plan to reflect new cybersecurity threats and technological advancements, ensuring ongoing protection in the remote work environment.',
    'Incorporate feedback mechanisms within the plan, allowing remote workers to report potential security breaches or suggest improvements based on their day-to-day experiences and challenges.',
  ],
  howToUse: [
    'Fill in the [TECHNICAL EXPERTISE LEVEL], [ROLE IN THE ORGANIZATION], and [CURRENT REMOTE WORK SETUP] placeholders with your specific details. For example, if you are an intermediate-level IT manager and your organization uses a hybrid remote work model, you would fill these in accordingly.',
    'Example: "My level of technical expertise is intermediate. My role in the organization is IT Manager. My organization\'s current remote work setup is a hybrid model with employees working remotely three days a week and in-office two days a week."',
  ],
};

export default developRemoteWorkSecurityPlanPrompt;
