const manageStressTimePrompt = {
  emoji: '📝',
  title: 'Manage Stress & Time',
  description: 'Boost your productivity with this ChatGPT mega-prompt, offering tailored hacks to streamline workflows and enhance technical writing efficiency.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Manage',
    'Stress',
    'Time',
  ],
  views: 12,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `#CONTEXT:
Adopt the role of a productivity expert with a specialization in optimizing work routines for technical writers. Your task is to develop a set of productivity hacks designed to streamline their workflow, minimize disruptions, and enhance the quality and efficiency of their output. Consider the unique challenges that technical writers face, such as managing complex documentation projects, translating technical jargon into understandable terms for a lay audience, and coordinating with technical and development teams to ensure accuracy and completeness.

#GOAL:
You will provide actionable advice on time management, tools, techniques, and strategies that technical writers can implement immediately to achieve better outcomes in their writing projects. These recommendations should be practical and specifically tailored to the demands and challenges of the technical writing role.

#RESPONSE GUIDELINES:
Follow a step-by-step approach below to create the productivity hacks:

1. **Establish Clear Goals and Milestones**: Before starting any documentation project, set clear, achievable goals and milestones. Break down larger projects into manageable tasks, and set deadlines for each.
   
2. **Utilize Project Management Tools**: Adopt project management and documentation tools that facilitate collaboration and organization, such as Trello, Asana, or Jira, and Confluence or Notion for documentation.

3. **Implement a Distraction-Free Writing Environment**: Use tools like Cold Turkey or Freedom to block distracting websites during work hours. Consider utilizing a minimalist text editor designed for focus, like iA Writer or WriteMonkey.

4. **Develop Templates and Reusable Components**: Create templates for common document types and maintain a library of reusable components (e.g., standard descriptions, disclaimers). Tools like Snagit for screenshots and diagrams can save time.

5. **Regularly Sync with Technical Teams**: Schedule regular check-ins with development or technical teams to clarify details and verify information. Use communication platforms like Slack effectively for quick queries.

6. **Embrace Markdown for Writing Efficiency**: Learn Markdown for writing documentation. It simplifies the formatting process and is compatible with many CMS platforms, allowing for easier content transfer and publication.

7. **Practice Time Blocking**: Dedicate specific blocks of time to different tasks (writing, editing, researching, meetings) to enhance focus and efficiency. Use a digital calendar like Google Calendar for planning these blocks.

8. **Master Shortcuts and Automation Tools**: Learn keyboard shortcuts for your most-used software tools. Use text expansion software like TextExpander or PhraseExpress to save time on repetitive typing tasks.

9. **Prioritize Continuous Learning**: Stay updated with the latest tools, technologies, and best practices in technical writing and the specific industry you're writing for. Allocate time for learning and professional development.

10. **Conduct User Testing on Documentation**: Regularly seek feedback from end-users or beta testers on your documentation. Use their input to make your guides more intuitive and easier to understand.

#INFORMATION ABOUT ME:
- My current documentation project: [CURRENT DOCUMENTATION PROJECT]
- My preferred project management tools: [PREFERRED PROJECT MANAGEMENT TOOLS]
- Types of technical documentation I frequently work on: [TYPES OF TECHNICAL DOCUMENTATION]
- My current learning goals in technical writing or related technologies: [CURRENT LEARNING GOALS]

#OUTPUT:
Your productivity hacks should be detailed, actionable, and directly applicable to your day-to-day work as a technical writer. Implementing these strategies should lead to noticeable improvements in workflow efficiency, project management, and the quality of your technical documentation.`,
  whatItDoes: [
    'Converts user input into actionable productivity hacks for technical writers.',
    'Focuses on optimizing workflow, minimizing disruptions, and enhancing output quality.',
    'Tailors advice specifically to the challenges and demands of technical writing.',
  ],
  tips: [
    'Integrate the use of Markdown into daily writing tasks to streamline the formatting process, ensuring that documents are easy to edit and update, which is especially beneficial for handling complex technical content.',
    'Apply the time blocking technique to allocate specific periods for intense writing sprints, followed by shorter breaks to maintain high levels of concentration and productivity throughout the day.',
    'Develop a habit of conducting regular user testing with a small group of end-users for your documentation, to gather actionable insights that can be used to refine and enhance the clarity and usability of your technical documents.',
  ],
  howToUse: [
    'Fill in the [CURRENT DOCUMENTATION PROJECT], [PREFERRED PROJECT MANAGEMENT TOOLS], [TYPES OF TECHNICAL DOCUMENTATION], and [CURRENT LEARNING GOALS] placeholders with specific details about your work and objectives. Example: If you are currently working on a software integration manual, use Trello for project management, often write API documentation, and aim to learn more about API testing tools.',
    'Example: "My current documentation project is a software integration manual. My preferred project management tools are Trello and Confluence. I frequently work on API and user manuals. My current learning goals include mastering API testing tools and improving my documentation design skills."',
  ],
};

export default manageStressTimePrompt;
