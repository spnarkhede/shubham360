const generateVirtualTeamBuildingActivitiesPrompt = {
  emoji: '🧑💻',
  title: 'Generate Virtual Team-Building Activities',
  description: 'Boost team engagement with this ChatGPT mega-prompt, generating tailored virtual team-building activities that enhance collaboration, communication, and morale.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Remote Work',
    'Virtual',
    'Team',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert in organizational psychology and team dynamics, specializing in virtual team-building activities. Your task is to help the user generate a comprehensive list of engaging, interactive virtual team-building activities tailored to the specific needs and characteristics of a given team.

#ROLE:
Adopt the role of an expert in organizational psychology and team dynamics, with a specialty in virtual team-building activities.

#RESPONSE GUIDELINES:
1. Start with a team overview section that includes the following information:
   - Team size
   - Team type
   - Industry
   - Work style
   - Cultural background

2. Generate 5 distinct virtual team-building activities, each with the following details:
   - Activity name
   - Description
   - Duration
   - Materials required
   - Step-by-step instructions
   - Expected outcomes

3. Conclude with additional recommendations for fostering collaboration, communication, trust, and morale in a remote work setting.

#TASK CRITERIA:
1. Consider factors such as team size, industry, work style, and cultural background when suggesting activities.
2. Focus on activities that foster collaboration, communication, trust, and morale in a remote work setting.
3. Provide detailed step-by-step instructions for each activity to ensure ease of implementation.
4. Avoid suggesting activities that require in-person interaction or physical materials that may not be readily available to all team members.

#INFORMATION ABOUT ME:
- My team size: [TEAM SIZE]
- My team type: [TEAM TYPE]
- My team's industry: [INDUSTRY]
- My team's work style: [WORK STYLE]
- My team's cultural background: [CULTURAL BACKGROUND]

#RESPONSE FORMAT:
Team Overview:
- Team Size: [TEAM SIZE]
- Team Type: [TEAM TYPE]
- Industry: [INDUSTRY]
- Work Style: [WORK STYLE]
- Cultural Background: [CULTURAL BACKGROUND]

Activity 1:
- Name: [ACTIVITY NAME]
- Description: [ACTIVITY DESCRIPTION]
- Duration: [DURATION]
- Materials Required: [MATERIALS REQUIRED]
- Instructions: [STEP-BY-STEP INSTRUCTIONS]
- Expected Outcomes: [EXPECTED OUTCOMES]

[REPEAT FOR ACTIVITIES 2-5]

Additional Recommendations:
[ADDITIONAL RECOMMENDATIONS FOR FOSTERING COLLABORATION, COMMUNICATION, TRUST, AND MORALE IN A REMOTE WORK SETTING]`,
  whatItDoes: [
    'Generates a detailed overview of the team including size, type, industry, work style, and cultural background.',
    'Provides five tailored virtual team-building activities complete with names, descriptions, durations, required materials, instructions, and expected outcomes.',
    'Concludes with strategic recommendations to enhance collaboration, communication, trust, and morale in a remote work environment.',
  ],
  tips: [
    'Tailor each activity to reflect the unique cultural backgrounds and work styles of your team members to enhance relatability and engagement during the virtual team-building sessions.',
    'Utilize digital collaboration tools like Miro or Trello during activities to simulate a shared workspace, fostering a sense of unity and teamwork despite the physical distance.',
    'Follow up each team-building session with a quick anonymous feedback survey to gauge the effectiveness of the activity and gather suggestions for future sessions, ensuring continuous improvement and satisfaction.',
  ],
  howToUse: [
    'Fill in the placeholders [TEAM SIZE], [TEAM TYPE], [INDUSTRY], [WORK STYLE], and [CULTURAL BACKGROUND] with specific details about your team. For example, if your team consists of 10 members, works remotely, belongs to the tech industry, follows an agile work style, and has a diverse cultural background including members from Asia, Europe, and North America, these details should be included.',
    'Example: "My team size is 10, my team type is remote, my team\'s industry is technology, my team\'s work style is agile, and my team\'s cultural background includes Asian, European, and North American."',
  ],
};

export default generateVirtualTeamBuildingActivitiesPrompt;
