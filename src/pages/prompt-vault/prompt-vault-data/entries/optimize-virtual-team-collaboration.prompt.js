const optimizeVirtualTeamCollaborationPrompt = {
  emoji: '🔗',
  title: 'Optimize Virtual Team Collaboration',
  description: 'Optimize your virtual team communication with this ChatGPT mega-prompt, providing structured frameworks, best practices, and effective collaboration tools.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Remote Work',
    'Virtual',
    'Team',
    'Collaboration',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert in organizational communication and virtual team dynamics. Your task is to help the user develop a comprehensive, structured framework for optimizing virtual team communication and collaboration, incorporating best practices, tools, and strategies to enable seamless remote work.

#ROLE:
You are an expert in organizational communication and virtual team dynamics, with deep knowledge of digital collaboration tools and methods.

#RESPONSE GUIDELINES:
Return a structured framework for optimizing virtual team communication and collaboration, including:

1. Communication Channels:
- Name of channel
- Purpose of channel
- Best practices for using the channel effectively

2. Collaboration Tools:
- Name of tool
- Purpose of tool
- Best practices for using the tool effectively

3. Overall Team Best Practices:
- List of top 5 best practices for effective virtual team collaboration

Use clear headings, subheadings, and bullet points to organize the information for maximum readability and comprehension.

#TASK CRITERIA:
1. Focus on providing actionable, practical advice and strategies that can be easily implemented by virtual teams.
2. Prioritize the most important and impactful best practices, tools, and channels.
3. Avoid theoretical or overly complex concepts that may be difficult to apply in real-world scenarios.
4. Ensure that the framework is comprehensive and covers all key aspects of virtual team communication and collaboration.

#INFORMATION ABOUT ME:
- My team size: [TEAM SIZE]
- My team's primary goals: [TEAM GOALS]
- My team's biggest challenges: [TEAM CHALLENGES]

#RESPONSE FORMAT:
## Communication Channels

### Channel 1: [Name]
Purpose: [Purpose]
Best Practices:
- [Best Practice 1]
- [Best Practice 2]
- [Best Practice 3]

### Channel 2: [Name]
Purpose: [Purpose]
Best Practices:
- [Best Practice 1]
- [Best Practice 2] 
- [Best Practice 3]

### Channel 3: [Name]
Purpose: [Purpose]
Best Practices:
- [Best Practice 1]
- [Best Practice 2]
- [Best Practice 3]

## Collaboration Tools

### Tool 1: [Name]
Purpose: [Purpose]
Best Practices:
- [Best Practice 1]
- [Best Practice 2]
- [Best Practice 3]

### Tool 2: [Name]
Purpose: [Purpose] 
Best Practices:
- [Best Practice 1]
- [Best Practice 2]
- [Best Practice 3]

### Tool 3: [Name]
Purpose: [Purpose]
Best Practices:
- [Best Practice 1]
- [Best Practice 2]
- [Best Practice 3]

## Team Best Practices
1. [Best Practice 1]
2. [Best Practice 2]
3. [Best Practice 3]
4. [Best Practice 4]
5. [Best Practice 5]`,
  whatItDoes: [
    'Develops a structured framework for optimizing virtual team communication and collaboration.',
    'Focuses on practical, actionable advice using specific communication channels and collaboration tools.',
    'Organizes information with clear headings, subheadings, and bullet points for easy comprehension and application.',
  ],
  tips: [
    'Customize the framework to reflect your team\'s specific goals and challenges, ensuring that each recommended tool and channel directly addresses these points for maximum effectiveness.',
    'Regularly review and update the communication and collaboration framework to incorporate new technologies and feedback from team members, maintaining relevance and efficiency in your virtual team dynamics.',
    'Train your team on the best practices and proper use of each communication channel and collaboration tool listed in the framework to ensure everyone is proficient and aligned with the team\'s operational standards.',
  ],
  howToUse: [
    'Fill in the [TEAM SIZE], [TEAM GOALS], and [TEAM CHALLENGES] placeholders with specific details about your team. For example, if your team consists of 10 members, is focused on improving remote communication efficiency, and faces challenges with time zone differences, these should be clearly stated.',
    'Example: "My team size is 10 members. Our primary goals are to enhance remote communication efficiency and streamline project management. Our biggest challenges include managing time zone differences and ensuring consistent engagement from all team members."',
  ],
};

export default optimizeVirtualTeamCollaborationPrompt;
