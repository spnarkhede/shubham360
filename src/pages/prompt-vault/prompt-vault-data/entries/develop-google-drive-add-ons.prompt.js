const developGoogleDriveAddOnsPrompt = {
  emoji: '🚀',
  title: 'Develop Google Drive Add-Ons',
  description: 'Create seamless Google Drive add-ons with this AI prompt, ensuring smooth integration and exceptional user experience.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'Claude',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Coding',
    'AI Prompts',
    'Google',
    'Drive',
  ],
  views: 140,
  recommendedTools: [
    'Claude',
    'Gemini',
  ],
  prompt: `<context>
You are operating in the competitive Google Workspace ecosystem where most Drive add-ons fail because they're clunky, require excessive clicks, or don't integrate smoothly into existing workflows. Users have abandoned countless solutions due to poor UX and friction. You must create a production-ready add-on that feels native to Google Drive, works instantly without friction, and provides genuine daily value that makes users wonder how they lived without it. This requires enterprise-grade architecture, modern UI principles, and bulletproof error handling that can withstand real-world usage by Fortune 500 companies.
</context>

<role>
Adopt the role of a top 0.1% full-stack developer and Google Workspace integration specialist tasked with building production-ready Google Drive add-ons. Your primary objective is to create a fully functional add-on with enterprise-grade architecture, modern UI design, and seamless user experience in a comprehensive, step-by-step implementation format that covers backend logic, frontend interface, OAuth configuration, and deployment strategy.
</role>

<information_about_me>
- My add-on core purpose: [INSERT THE EXACT PROBLEM YOUR ADD-ON SOLVES - e.g., "Auto-organize files by project tags", "Generate shareable reports from folder analytics", "Batch convert and compress images"]
- My target functionality: [INSERT SPECIFIC FEATURES AND OPERATIONS YOUR ADD-ON SHOULD PERFORM]
- My user interface requirements: [INSERT SPECIFIC UI ELEMENTS, LAYOUT PREFERENCES, AND DESIGN REQUIREMENTS]
- My technical constraints: [INSERT ANY SPECIFIC TECHNICAL LIMITATIONS, API REQUIREMENTS, OR PERFORMANCE TARGETS]
- My deployment timeline: [INSERT YOUR PROJECT TIMELINE AND TESTING REQUIREMENTS]
</information_about_me>

<output>
Structure your implementation guide with these sections:
● Architecture Planning and File Structure
● Backend Development with Apps Script
● Frontend UI Development with Modern Design
● Client-Server Communication and State Management
● OAuth Configuration and Security Setup
● Error Handling and Edge Case Management
● Testing, Documentation, and Production Deployment

Take a deep breath and work on this problem step-by-step. Present your output in bullet point format using ● with complete code examples, specific implementation details, and actionable deployment steps.
</output>`,
  whatItDoes: [
    'Provides a comprehensive guide to developing a Google Drive add-on with seamless integration.',
    'Ensures the add-on delivers a smooth user experience with enterprise-grade architecture.',
    'Guides through backend logic, frontend interface, OAuth configuration, and deployment strategy.',
  ],
  tips: [
    'Clearly define the exact problem your add-on solves to ensure it provides genuine daily value and integrates smoothly into existing workflows.',
    'Focus on modern UI principles and bulletproof error handling to create a frictionless user experience that feels native to Google Drive.',
    'Prioritize testing and documentation to ensure the add-on withstands real-world usage by Fortune 500 companies and meets deployment timelines.',
  ],
  howToUse: [
    'Fill in the [INSERT THE EXACT PROBLEM YOUR ADD-ON SOLVES], [INSERT SPECIFIC FEATURES AND OPERATIONS YOUR ADD-ON SHOULD PERFORM], [INSERT SPECIFIC UI ELEMENTS, LAYOUT PREFERENCES, AND DESIGN REQUIREMENTS], [INSERT ANY SPECIFIC TECHNICAL LIMITATIONS, API REQUIREMENTS, OR PERFORMANCE TARGETS], and [INSERT YOUR PROJECT TIMELINE AND TESTING REQUIREMENTS] placeholders with detailed information about your add-on\'s purpose, functionality, UI, technical constraints, and timeline.',
    'Example: "My add-on core purpose is to \'Auto-organize files by project tags\'. My target functionality includes tagging files, generating reports, and batch processing. My user interface requirements include a clean, intuitive dashboard with drag-and-drop features. My technical constraints involve using Google Drive API with a response time under 200ms. My deployment timeline is 3 months with a 2-week testing phase."',
  ],
};

export default developGoogleDriveAddOnsPrompt;
