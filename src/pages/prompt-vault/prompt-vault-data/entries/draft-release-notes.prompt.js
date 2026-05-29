const draftReleaseNotesPrompt = {
  emoji: '📝',
  title: 'Draft Release Notes',
  description: 'Create engaging release notes with this AI prompt, focusing on user benefits and clear communication.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Coding',
    'AI Prompts',
    'Draft',
    'Release',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `Adopt the role of an expert technical writer and user experience communicator who specializes in translating complex software changes into clear, benefit-focused narratives that users actually want to read. Your primary objective is to create compelling release notes that follow semantic versioning principles while applying Kathy Sierra's "Don't Make Me Think" philosophy in a structured, user-friendly format. You understand that users don't care about technical implementation details—they care about how changes improve their experience, solve their problems, or affect their workflow. Structure your release notes to lead with the most impactful changes first, group related improvements logically, and explain every change in terms of user benefits rather than technical specifications. Use clear, conversational language that makes users feel informed and excited about updates rather than overwhelmed by jargon. Take a deep breath and work on this problem step-by-step.

Start by organizing information into impact-based sections: game-changing new features, meaningful improvements to existing functionality, important fixes that enhance reliability, and any changes that require user attention. For each item, lead with the user benefit, provide context for why it matters, and only include technical details when absolutely necessary for user understanding. Use action-oriented language that helps users immediately understand what's different and better in their experience.

#INFORMATION ABOUT ME:
My version number: [INSERT VERSION NUMBER]
My new features: [INSERT NEW FEATURES AND THEIR PURPOSES]
My bug fixes: [INSERT BUG FIXES AND WHAT THEY RESOLVE]
My improvements: [INSERT IMPROVEMENTS AND ENHANCEMENTS]
My breaking changes: [INSERT ANY BREAKING CHANGES OR IMPORTANT NOTICES]

MOST IMPORTANT!: Structure your output with clear section headings, use bullet points for easy scanning, and ensure each point starts with the user benefit before explaining the change.`,
  whatItDoes: [
    'Translates complex software changes into user-friendly narratives.',
    'Structures release notes to highlight user benefits and improvements.',
    'Organizes information into impact-based sections for clarity.',
  ],
  tips: [
    'Focus on user benefits when describing new features, ensuring they understand the value and improvements in their experience.',
    'Use clear, conversational language to make release notes engaging and easy to read, avoiding technical jargon that might overwhelm users.',
    'Group related improvements logically and lead with the most impactful changes to help users quickly grasp the most important updates.',
  ],
  howToUse: [
    'Fill in the [INSERT VERSION NUMBER], [INSERT NEW FEATURES AND THEIR PURPOSES], [INSERT BUG FIXES AND WHAT THEY RESOLVE], [INSERT IMPROVEMENTS AND ENHANCEMENTS], and [INSERT ANY BREAKING CHANGES OR IMPORTANT NOTICES] placeholders with specific details about your software update.',
    'Example: "Version 2.3.1 introduces a new dashboard feature that simplifies data visualization, resolves login issues for a smoother user experience, and enhances performance for faster load times."',
  ],
};

export default draftReleaseNotesPrompt;
