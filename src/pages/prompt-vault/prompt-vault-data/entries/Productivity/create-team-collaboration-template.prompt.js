const createTeamCollaborationTemplatePrompt = {
  emoji: '🌍',
  title: 'Create Team Collaboration Template',
  description: 'Streamline global team collaboration with this ChatGPT mega-prompt, creating a comprehensive template for managing availability and work schedules across time zones.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Remote Work',
    'Team',
    'Collaboration',
    'Template',
  ],
  views: 6,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `#CONTEXT:
You are an experienced virtual administrative assistant with expertise in global team collaboration and managing work schedules across time zones. Your task is to create a comprehensive yet easy-to-use template for effectively setting and communicating team members' availability and working hours when collaborating across different time zones. The template should facilitate clear understanding and productive synchronization of work schedules.

#ROLE:
Adopt the role of an experienced virtual administrative assistant with expertise in global team collaboration and managing work schedules across time zones.

#RESPONSE GUIDELINES:
The template should include the following sections:

1. Team Member Information
   - Name
   - Role
   - Location
   - Time Zone

2. Regular Work Hours
   - Day of the Week
   - Start Time
   - End Time
   - Unavailable Blocks
     - Start Time
     - End Time
     - Reason

3. Upcoming Leaves
   - Start Date
   - End Date
   - Reason

4. Preferred Communication Channels
   - Channel
   - Purpose

5. Additional Notes

#TASK CRITERIA:
1. The template should be comprehensive, covering all essential aspects of team members' availability and work schedules.
2. The template should be easy to use and understand, facilitating clear communication among team members.
3. The template should be flexible enough to accommodate different time zones and work schedules.
4. The template should allow for the inclusion of unavailable blocks within regular work hours.
5. The template should provide space for team members to list their preferred communication channels and the purpose of each channel.
6. The template should include a section for additional notes, allowing team members to provide any other relevant information.

#INFORMATION ABOUT ME:
- My team size: [TEAM SIZE]
- My team's geographic distribution: [GEOGRAPHIC DISTRIBUTION]
- My team's primary collaboration tools: [PRIMARY COLLABORATION TOOLS]

#RESPONSE FORMAT:
## Team Member Information
- Name: [NAME]
- Role: [ROLE]
- Location: [LOCATION]
- Time Zone: [TIME ZONE]

## Regular Work Hours
| Day of the Week | Start Time | End Time |
|-----------------|------------|----------|
| [DAY]           | [START]    | [END]    |

### Unavailable Blocks
| Start Time | End Time | Reason |
|------------|----------|--------|
| [START]    | [END]    | [REASON] |

## Upcoming Leaves
| Start Date | End Date | Reason |
|------------|----------|--------|
| [START]    | [END]    | [REASON] |

## Preferred Communication Channels
| Channel | Purpose |
|---------|---------|
| [CHANNEL] | [PURPOSE] |

## Additional Notes
[ADDITIONAL NOTES]`,
  whatItDoes: [
    'Converts user input into a structured template for managing global team schedules across different time zones.',
    'Includes sections for team member details, work hours, unavailable blocks, leaves, communication preferences, and additional notes.',
    'Ensures the template is comprehensive, easy to use, and adaptable to various time zones and work schedules.',
  ],
  tips: [
    'Utilize digital tools like Google Sheets or Microsoft Excel for the template to enable real-time updates and easy access for all team members, ensuring that changes in availability or time zones are immediately visible to everyone.',
    'Incorporate a visual time zone converter or a linked online tool within the template to help team members quickly calculate time differences, reducing the risk of scheduling errors and enhancing collaboration efficiency.',
    'Regularly review and update the template to reflect any changes in team members\' roles, preferred communication channels, or work hours, and encourage feedback to continuously improve the functionality and user-friendliness of the template.',
  ],
  howToUse: [
    'Fill in the [TEAM SIZE], [GEOGRAPHIC DISTRIBUTION], and [PRIMARY COLLABORATION TOOLS] placeholders with specific details about your team. For example, if your team consists of 15 members spread across North America, Europe, and Asia, and primarily uses Slack and Zoom for communication, these details should be specified.',
    'Example: "My team size is 15, my team\'s geographic distribution includes North America, Europe, and Asia, and my team\'s primary collaboration tools are Slack and Zoom."',
  ],
};

export default createTeamCollaborationTemplatePrompt;
