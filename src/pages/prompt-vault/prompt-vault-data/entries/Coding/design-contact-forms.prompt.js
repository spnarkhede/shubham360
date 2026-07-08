const designContactFormsPrompt = {
  emoji: '📝',
  title: 'Design Contact Forms',
  description: 'Design effective contact forms with this AI prompt, maximizing user completion rates and collecting essential visitor information efficiently.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Design',
    'Coding',
    'AI Prompts',
    'Contact',
  ],
  views: 13,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `Adopt the role of an expert UX/UI designer and web form specialist who has spent over a decade implementing Luke Wroblewski's Web Form Design principles across hundreds of high-conversion websites. Your primary objective is to create a comprehensive contact form design and implementation guide that maximizes user completion rates while collecting essential visitor information in a structured, actionable format. You understand that poor form design is the silent killer of lead generation, causing potential customers to abandon their inquiry mid-process. Your expertise combines behavioral psychology with technical implementation, ensuring every form element serves both user experience and business objectives. Design a complete contact form solution that includes field selection strategy, validation patterns, error messaging, mobile optimization, and success flow handling. Take a deep breath and work on this problem step-by-step.

Start by analyzing what information truly needs to be collected versus what would be nice to have, then structure the form using clear visual hierarchy with labels positioned above fields for optimal scanning patterns. Implement logical field grouping and progressive disclosure where appropriate. Create specific inline validation rules with helpful, non-judgmental error messages that guide users toward successful completion. Design mobile-first touch targets with adequate spacing and appropriate input types for each field. Include clear visual indicators for required fields and provide immediate feedback for successful submissions.

#INFORMATION ABOUT ME:
My website/business type: [INSERT YOUR WEBSITE OR BUSINESS TYPE]
My primary contact goals: [INSERT WHAT YOU WANT TO ACHIEVE WITH THE CONTACT FORM]
My target audience: [INSERT YOUR TARGET AUDIENCE DESCRIPTION]
My technical implementation level: [INSERT YOUR TECHNICAL SKILL LEVEL - BEGINNER/INTERMEDIATE/ADVANCED]
My current form completion challenges: [INSERT ANY CURRENT ISSUES WITH EXISTING FORMS]

MOST IMPORTANT!: Structure your response with clear headings including Form Strategy, Field Selection, Technical Implementation, Validation Rules, Mobile Optimization, and Success Messaging. Provide specific code examples and actionable implementation steps in bullet point format.`,
  whatItDoes: [
    'Guides in creating a comprehensive contact form design and implementation guide.',
    'Focuses on maximizing user completion rates while collecting essential visitor information.',
    'Combines behavioral psychology with technical implementation for optimal user experience and business objectives.',
  ],
  tips: [
    'Identify the essential information needed from users to minimize form abandonment and enhance lead generation.',
    'Utilize clear visual hierarchy and logical field grouping to improve form usability and scanning patterns.',
    'Implement mobile-first design principles with appropriate input types and touch targets to ensure a seamless user experience across devices.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR WEBSITE OR BUSINESS TYPE], [INSERT WHAT YOU WANT TO ACHIEVE WITH THE CONTACT FORM], [INSERT YOUR TARGET AUDIENCE DESCRIPTION], [INSERT YOUR TECHNICAL SKILL LEVEL - BEGINNER/INTERMEDIATE/ADVANCED], and [INSERT ANY CURRENT ISSUES WITH EXISTING FORMS] placeholders with specific details about your business and form objectives.',
    'Example: "My website/business type is an e-commerce platform. My primary contact goals are to increase customer inquiries and feedback. My target audience is tech-savvy millennials. My technical implementation level is intermediate. My current form completion challenges include high abandonment rates and unclear error messages."',
  ],
};

export default designContactFormsPrompt;
