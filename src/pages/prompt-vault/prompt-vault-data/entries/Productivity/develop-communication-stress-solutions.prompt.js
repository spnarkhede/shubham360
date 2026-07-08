const developCommunicationStressSolutionsPrompt = {
  emoji: '📧',
  title: 'Develop Communication Stress Solutions',
  description: 'Transform your email communication with this ChatGPT mega-prompt, offering tailored strategies, practical tips, and stress management techniques for enhanced efficiency.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Stress Management',
    'Communication',
    'Stress',
    'Solutions',
  ],
  views: 6,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an email and communication stress management expert with deep knowledge in psychology, productivity, and digital communication best practices. Your task is to help the user develop a comprehensive set of best practices for managing email and communication-related stress, considering different personas and their unique challenges, and offering tailored strategies, practical tips, tools, and techniques to reduce stress and improve communication efficiency.

#ROLE:
You are an email and communication stress management expert with deep knowledge in psychology, productivity, and digital communication best practices.

#RESPONSE GUIDELINES:
The response should be organized into the following sections for each persona:
1. Persona Description
2. Email and Communication Challenges
3. Best Practices (3 items)
4. Tools and Techniques (3 items)

Additionally, include:
5. General Tips (3 items)
6. Stress Management Techniques (3 items)

#TASK CRITERIA:
- Focus on providing practical, actionable advice tailored to each persona's unique challenges
- Offer a mix of best practices, tools, techniques, and general tips to reduce stress and improve communication efficiency
- Avoid generic or overly simplistic advice
- Ensure that the strategies and techniques provided are grounded in psychology, productivity, and digital communication best practices

#INFORMATION ABOUT ME:
- My expertise level in email and communication stress management: [EXPERTISE LEVEL]
- My target audience for this advice: [TARGET AUDIENCE]
- Specific communication channels to focus on (e.g., email, instant messaging, video calls): [COMMUNICATION CHANNELS]

#RESPONSE FORMAT:
Persona 1:
Description: 
Challenges:
Best Practices:
1. 
2.
3.
Tools and Techniques:
- 
-
-

Persona 2:
Description:
Challenges: 
Best Practices:
1.
2.
3. 
Tools and Techniques:
-
-
-

Persona 3:
Description:
Challenges:
Best Practices:
1.
2.
3.
Tools and Techniques:
-
-
-

General Tips:
1.
2.
3.

Stress Management Techniques:
-
-
-`,
  whatItDoes: [
    'Converts user input into a structured response format focusing on managing email and communication-related stress.',
    'Provides tailored strategies, practical tips, tools, and techniques for different personas to reduce stress and improve communication efficiency.',
    'Ensures the advice is practical, actionable, and based on expertise in psychology, productivity, and digital communication best practices.',
  ],
  tips: [
    'Develop a detailed persona profile for each target group, including age, job role, and typical communication habits, to tailor the stress management strategies effectively.',
    'Create a structured daily routine for checking and responding to emails and messages, which can be recommended to each persona to minimize the stress associated with constant connectivity.',
    'Evaluate and suggest specific digital tools that integrate seamlessly with the communication platforms used by each persona, enhancing their efficiency and reducing the overload.',
  ],
  howToUse: [
    'Fill in the [EXPERTISE LEVEL], [TARGET AUDIENCE], and [COMMUNICATION CHANNELS] placeholders with specific details about your level of expertise, the audience you are addressing, and the communication methods you are focusing on.',
    '- Example: For [EXPERTISE LEVEL], you might specify "Advanced," indicating you have extensive experience in the field. For [TARGET AUDIENCE], you could write "Corporate professionals aged 30-50." For [COMMUNICATION CHANNELS], list "Email, Slack, and Microsoft Teams."',
    'Use the information filled in the #INFORMATION ABOUT ME section to tailor the advice in the response sections, ensuring relevance and applicability to the specified target audience and communication channels. This will help in providing more personalized and effective stress management strategies.',
  ],
};

export default developCommunicationStressSolutionsPrompt;
