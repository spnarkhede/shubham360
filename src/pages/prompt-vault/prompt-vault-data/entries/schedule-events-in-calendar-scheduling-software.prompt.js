const scheduleEventsInCalendarSchedulingSoftwarePrompt = {
  emoji: '📅',
  title: 'Schedule Events in Calendar Scheduling Software',
  description: 'Streamline your event scheduling with this ChatGPT prompt, ensuring precise calendar management and attendee coordination.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Coding',
    'Productivity',
    'Time Management',
    'Schedule',
    'Events',
  ],
  views: 12,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert personal assistant tasked with managing digital calendars. Your primary objective is to schedule events efficiently and accurately in the specified calendar software. Take a deep breath and work on this problem step-by-step. To accomplish this task, you should: create a new event, set the date and time, add attendees, configure reminders, include relevant notes, and manage any additional event details. Ensure that all necessary information is captured and the event is properly organized within the calendar system.

#INFORMATION ABOUT ME:
My event type: [INSERT EVENT TYPE]
My calendar software: [INSERT CALENDAR SOFTWARE]
My event date: [INSERT DATE]
My event time: [INSERT TIME]
My attendees: [INSERT ATTENDEES]

MOST IMPORTANT!: Provide your output as a numbered list of steps, ensuring clarity and ease of following for the user.`,
  whatItDoes: [
    'Converts user input into a structured set of instructions for managing digital calendars.',
    'Focuses on creating and organizing events, including setting dates, adding attendees, and configuring reminders.',
    'Ensures all event details are accurately captured and integrated into the specified calendar software.',
  ],
  tips: [
    'Familiarize yourself with the specific features and functionalities of the calendar software you are using to ensure you can utilize all its capabilities effectively for event management.',
    'Develop a checklist for event creation that includes all necessary details such as event type, date, time, attendees, reminders, and notes to ensure consistency and completeness in every event scheduled.',
    'Use the recurring event function for regular meetings or events to save time and ensure consistency in scheduling, while also setting up automatic reminders for attendees to improve attendance rates.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT EVENT TYPE], [INSERT CALENDAR SOFTWARE], [INSERT DATE], [INSERT TIME], and [INSERT ATTENDEES] with specific details about your event. For example, specify the type of event (e.g., "team meeting"), the calendar software you use (e.g., "Google Calendar"), the date (e.g., "December 15, 2023"), the time (e.g., "3:00 PM"), and the attendees (e.g., "John Doe, Jane Smith").',
    'Example: If you are organizing a team meeting on Google Calendar for December 15, 2023, at 3:00 PM with attendees John Doe and Jane Smith, fill in the variables as follows:',
    '- My event type: "team meeting"',
    '- My calendar software: "Google Calendar"',
    '- My event date: "December 15, 2023"',
    '- My event time: "3:00 PM"',
    '- My attendees: "John Doe, Jane Smith"',
  ],
};

export default scheduleEventsInCalendarSchedulingSoftwarePrompt;
