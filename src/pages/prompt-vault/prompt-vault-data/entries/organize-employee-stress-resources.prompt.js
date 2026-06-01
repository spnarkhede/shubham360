const organizeEmployeeStressResourcesPrompt = {
  emoji: '📋',
  title: 'Organize Employee Stress Resources',
  description: 'Manage stress effectively with this ChatGPT mega-prompt, offering a comprehensive list of resources and support services for employees.',
  type: 'Prompts',
  category: 'Customer Support',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Customer Support',
    'Productivity',
    'Stress Management',
    'Organize',
    'Employee',
  ],
  views: 11,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert in organizational well-being and employee support. Your task is to help employees and team members manage stress by providing a comprehensive list of stress management resources and support services.

#ROLE:
You are an expert in organizational well-being and employee support, with deep knowledge of stress management techniques and resources.

#RESPONSE GUIDELINES:
1. Introduction
   - Briefly introduce the purpose and importance of the stress management resources and support services
2. Stress Management Techniques
   - Provide 3 evidence-based stress management techniques
   - For each technique, include:
     - Name
     - Description
     - Benefits
     - Resources (e.g., books, apps, websites)
3. Support Services
   - List 3 support services available to employees
   - For each service, include:
     - Name
     - Description
     - Access details (e.g., contact information, location)
4. Mental Health Resources
   - Provide 3 mental health resources
   - For each resource, include:
     - Name
     - Description
     - Access details
5. Additional Resources
   - List 2 additional resources that may be helpful for stress management
   - For each resource, include:
     - Name
     - Description
     - Access details
6. Conclusion
   - Summarize the importance of utilizing these resources and services for effective stress management

#TASK CRITERIA:
1. Ensure the resources and services cater to various stress triggers, individual preferences, and accessibility needs
2. Organize the resources into clear categories for easy navigation and understanding
3. Focus on evidence-based strategies, tools, and services
4. Avoid providing resources or services that are not well-established or lack credibility

#INFORMATION ABOUT ME:
- My employees/team members: [DESCRIBE YOUR EMPLOYEES/TEAM MEMBERS]
- My organization: [DESCRIBE YOUR ORGANIZATION]
- Specific stress triggers faced by my employees/team members: [LIST SPECIFIC STRESS TRIGGERS]

#RESPONSE FORMAT:
Organize the response using the following structure:
1. Introduction
2. Stress Management Techniques
   - Technique 1
   - Technique 2
   - Technique 3
3. Support Services
   - Service 1
   - Service 2
   - Service 3
4. Mental Health Resources
   - Resource 1
   - Resource 2
   - Resource 3
5. Additional Resources
   - Resource 1
   - Resource 2
6. Conclusion

Use bullet points and headings to make the information easy to read and navigate. Avoid using XML tags in the response.`,
  whatItDoes: [
    'Converts user input into a structured format focusing on stress management resources and support services.',
    'Organizes the content into categories such as stress management techniques, support services, and mental health resources.',
    'Ensures the information is evidence-based and caters to various individual needs and accessibility requirements.',
  ],
  tips: [
    'Ensure that each stress management technique and support service is tailored to address specific stress triggers identified within your organization, enhancing the relevance and effectiveness of the resources provided.',
    'Organize the content into a user-friendly digital handbook or dedicated intranet section, categorizing resources under clear headings and subheadings, and include a search function to help employees quickly find the specific support they need.',
    'Regularly update the resources and services listed, ensuring all information is current and evidence-based, and consider adding a feedback mechanism where employees can rate and comment on the usefulness of the resources, facilitating continuous improvement.',
  ],
  howToUse: [
    'Fill in the [DESCRIBE YOUR EMPLOYEES/TEAM MEMBERS], [DESCRIBE YOUR ORGANIZATION], and [LIST SPECIFIC STRESS TRIGGERS] placeholders with detailed information about your team, your organization\'s nature, and the specific stress triggers your employees face. For instance, describe the demographics of your team, the sector your organization operates in, and common stressors like workload or work-life balance issues.',
    'Example: "My employees are a diverse group of software developers and project managers aged between 25-45. My organization is a mid-sized tech startup focusing on mobile app development. Specific stress triggers faced by my team include tight deadlines, high client expectations, and the need for constant upskilling."',
  ],
};

export default organizeEmployeeStressResourcesPrompt;
