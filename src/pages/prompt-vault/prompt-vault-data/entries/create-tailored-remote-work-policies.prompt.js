const createTailoredRemoteWorkPoliciesPrompt = {
  emoji: '📝',
  title: 'Create Tailored Remote Work Policies',
  description: 'Streamline your remote work strategies with this ChatGPT mega-prompt, generating tailored policies for communication, collaboration, productivity, security, and employee well-being.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Remote Work',
    'Tailored',
    'Remote',
    'Work',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'DeepSeek',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert in remote work policies and procedures, with comprehensive knowledge of best practices across various industries and business types. Your task is to help the user generate a list of remote work policies and procedures tailored to the specific needs and challenges of their business type, considering factors such as communication, collaboration, productivity, security, and employee well-being.

#ROLE:
You are an expert in remote work policies and procedures, with comprehensive knowledge of best practices across various industries and business types.

#RESPONSE GUIDELINES:
1. Start with the given business type.
2. Provide clear, actionable recommendations for communication policies, collaboration procedures, productivity measures, security protocols, and employee well-being initiatives.
3. Include additional recommendations that can be easily implemented.

#TASK CRITERIA:
1. Tailor the policies and procedures to the specific needs and challenges of the given business type.
2. Consider factors such as communication, collaboration, productivity, security, and employee well-being.
3. Provide clear, actionable recommendations that can be easily implemented.
4. Focus on providing comprehensive and practical solutions for the given business type.

#INFORMATION ABOUT ME:
- My business type: [INSERT BUSINESS TYPE]

#RESPONSE FORMAT:
Business Type: [BUSINESS TYPE]

Communication Policies:
1. [COMMUNICATION POLICY 1]
2. [COMMUNICATION POLICY 2] 
3. [COMMUNICATION POLICY 3]

Collaboration Procedures:
1. [COLLABORATION PROCEDURE 1]
2. [COLLABORATION PROCEDURE 2]
3. [COLLABORATION PROCEDURE 3]

Productivity Measures:
1. [PRODUCTIVITY MEASURE 1]
2. [PRODUCTIVITY MEASURE 2]
3. [PRODUCTIVITY MEASURE 3]

Security Protocols:
1. [SECURITY PROTOCOL 1]
2. [SECURITY PROTOCOL 2]
3. [SECURITY PROTOCOL 3]

Employee Well-being Initiatives:
1. [EMPLOYEE WELL-BEING INITIATIVE 1]
2. [EMPLOYEE WELL-BEING INITIATIVE 2] 
3. [EMPLOYEE WELL-BEING INITIATIVE 3]

Additional Recommendations:
1. [ADDITIONAL RECOMMENDATION 1]
2. [ADDITIONAL RECOMMENDATION 2]
3. [ADDITIONAL RECOMMENDATION 3]`,
  whatItDoes: [
    'Assists in creating tailored remote work policies and procedures for specific business types.',
    'Focuses on key areas such as communication, collaboration, productivity, security, and employee well-being.',
    'Provides clear, actionable recommendations that can be easily implemented.',
  ],
  tips: [
    'Customize the remote work policies by first conducting a detailed survey among your employees to identify their specific needs and challenges related to remote working, ensuring that the policies are directly relevant and beneficial.',
    'Develop a comprehensive training program for all employees that covers the use of communication tools, security protocols, and productivity software to ensure everyone is proficient and can work effectively from remote locations.',
    'Regularly review and update the remote work policies and procedures to adapt to new technologies, changes in employee needs, and evolving industry standards, maintaining a flexible approach to remote work arrangements.',
  ],
  howToUse: [
    'Fill in the [INSERT BUSINESS TYPE] placeholder in the #INFORMATION ABOUT ME section with the specific type of business you are focusing on. For example, if you are dealing with a technology startup, you would specify "technology startup" as your business type.',
    'Example: If your business type is a "healthcare clinic," you would fill in the placeholder with "healthcare clinic" to tailor the remote work policies and procedures specifically for a healthcare setting.',
  ],
};

export default createTailoredRemoteWorkPoliciesPrompt;
