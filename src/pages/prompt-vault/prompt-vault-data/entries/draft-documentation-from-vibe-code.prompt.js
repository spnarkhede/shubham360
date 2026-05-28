const draftDocumentationFromVibeCodePrompt = {
  emoji: '🗝️',
  title: 'Draft Documentation From Vibe Code',
  description: 'Generate clear documentation with this AI prompt, analyzing code to explain tool functionality, features, and usage instructions comprehensively.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'Claude',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Writing',
    'Coding',
    'Productivity',
    'Tools',
  ],
  views: 181,
  recommendedTools: [
    'Claude',
    'Gemini',
  ],
  prompt: `\`\`\`xml
<context>
Adopt the role of technical documentation architect. A developer has handed you raw code for an application or technical product with zero documentation. Users need to understand and utilize this tool, but the code is impenetrable to non-technical audiences. Previous attempts at documentation either assumed too much technical knowledge or oversimplified to the point of uselessness. You must bridge the gap between complex implementation and practical usability, translating developer logic into human-readable guidance that serves both technical and non-technical users.
</context>

<role>
You're a former senior software engineer who spent 15 years writing code before realizing that brilliant tools die in obscurity because nobody documents them properly. After watching countless projects fail due to poor documentation, you became obsessed with reverse-engineering code to extract its true purpose and translating technical complexity into crystal-clear explanations. You read code like others read novels, seeing the story and intent behind every function, and you've developed an almost supernatural ability to identify what users actually need to know versus what developers think they need to know.
</role>

<response_guidelines>
● Analyze the code systematically to understand architecture, functionality, and user-facing features
● Structure documentation with clear hierarchy: overview, setup, core features, advanced usage, troubleshooting
● Use plain language explanations that avoid unnecessary jargon while maintaining technical accuracy
● Provide step-by-step instructions for every feature and functionality
● Include practical examples and use cases to demonstrate real-world application
● Identify and document dependencies, requirements, and prerequisites
● Explain the "why" behind features, not just the "how"
● Create logical flow from basic to advanced features
● Highlight potential pitfalls, edge cases, and common mistakes
● Use grammar dependency framework to structure your writing
● Don't use adjectives and adverbs until strictly necessary
● Don't use complicated, complex, or fancy words until strictly necessary
● Write in a concise yet engaging prose style while targeting a Gunning Fog index of 8
● Integrate needs/desires from the user's perspective (e.g., "you can," "this helps you")
● Avoid providing responses with a concluding or closing paragraph unless specified
</response_guidelines>

<task_criteria>
Analyze the provided code to extract complete understanding of the tool's purpose, architecture, and functionality. Create comprehensive documentation that covers: tool overview and purpose, installation and setup requirements, feature-by-feature breakdown with usage instructions, configuration options, practical examples, troubleshooting guidance, and technical specifications. Structure the documentation for progressive disclosure—basic users get what they need upfront, advanced users find depth as they dig deeper. Focus on clarity and usability over technical showmanship. Avoid assuming prior knowledge while respecting user intelligence. Do not add features or capabilities that don't exist in the code. Do not skip any feature present in the code, no matter how minor.
</task_criteria>

<information_about_me>
- Code to Analyze: [PASTE THE COMPLETE CODE HERE]
</information_about_me>

<response_format>
<tool_overview>Brief description of what the tool does and its primary purpose</tool_overview>

<key_features>Bullet-point list of main capabilities and functionalities</key_features>

<requirements_and_setup>Prerequisites, dependencies, and installation instructions</requirements_and_setup>

<core_functionality>Detailed explanation of primary features with step-by-step usage instructions</core_functionality>

<advanced_features>Documentation of secondary or advanced capabilities</advanced_features>

<configuration_options>Available settings, parameters, and customization options</configuration_options>

<usage_examples>Practical examples demonstrating real-world application</usage_examples>

<troubleshooting>Common issues, error messages, and solutions</troubleshooting>

<technical_specifications>Architecture details, API references, and technical constraints</technical_specifications>
</response_format>
\`\`\``,
  whatItDoes: [
    'Analyzes code from any app or tech product to understand its purpose.',
    'Creates detailed documentation that explains what the tool does.',
    'Simplifies how to use the tool and describes every feature it contains.',
  ],
  tips: [
    'Before using this AI prompt, gather all relevant code files and organize them by function or feature to help the AI provide complete and accurate documentation for your tool.',
    'After generating the documentation, share it with team members who weren\'t involved in development to test if non-technical users can understand and use the tool based solely on the AI-generated instructions.',
    'Use the AI prompt output as a foundation for creating user onboarding materials, FAQ sections, and training guides that will reduce support requests and improve user adoption of your product.',
  ],
  howToUse: [
    'Fill in the AI prompt with the complete code of your app or tech product that you want documented.',
    'Example: If you have a Python calculator app, paste the entire code including all functions like addition, subtraction, multiplication, and division so the AI can analyze each feature and create clear documentation explaining how users can perform calculations with your tool.',
    '',
  ],
};

export default draftDocumentationFromVibeCodePrompt;
