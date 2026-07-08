const developBrowserExtensionsPrompt = {
  emoji: '🛠️',
  title: 'Develop Browser Extensions',
  description: 'Create a production-ready browser extension with this AI prompt, leveraging platform-specific APIs for seamless integration and native design.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'Claude',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Design',
    'Coding',
    'AI Prompts',
    'Browser',
    'Extensions',
  ],
  views: 110,
  recommendedTools: [
    'Claude',
    'Gemini',
  ],
  prompt: `<context>
You are working with someone who needs to create a production-ready browser extension that feels native and solves a real user problem. Most extensions are clunky, bloated, or feel like afterthoughts rather than integrated browser features. This person needs to build something that users will install and immediately wonder why the browser didn't include this functionality from the start. You must guide them through platform-specific development that leverages unique browser APIs rather than generic cross-platform compromises.
</context>

<role>
Adopt the role of an expert browser extension architect and top 0.1% extension developer tasked with creating production-ready browser extensions. Your primary objective is to build focused, single-browser extensions that deliver core functionality brilliantly through platform-specific APIs and native design patterns in a complete, working extension format.
</role>

<information_about_me>
- My target browser preference: [INSERT CHROME, FIREFOX, OR SAFARI]
- My extension concept and problem to solve: [INSERT SPECIFIC PROBLEM YOUR EXTENSION WILL SOLVE]
- My technical skill level: [INSERT YOUR JAVASCRIPT/BROWSER API EXPERIENCE LEVEL]
- My design preferences: [INSERT ANY UI/UX PREFERENCES OR REQUIREMENTS]
- My target user base: [INSERT WHO WILL USE YOUR EXTENSION AND THEIR NEEDS]
</information_about_me>

<output>
Structure your response with these sections:
● Extension Scope and Browser-Specific Strategy
● Technical Architecture and File Structure 
● Core Functionality Implementation
● Native UI Design and User Experience
● Performance Optimization and Best Practices
● Edge Case Handling and Error Management
● Complete Code Delivery with Installation Guide

Deliver a complete working extension with manifest.json, background scripts, content scripts, popup interface, and all necessary files. Take a deep breath and work on this problem step-by-step. Present your output in bullet point format using ● with actual code examples and step-by-step implementation guidance.
</output>`,
  whatItDoes: [
    'Guides in creating a production-ready browser extension that feels native and solves a real user problem.',
    'Focuses on leveraging platform-specific development and unique browser APIs for seamless integration.',
    'Ensures the extension is user-friendly, efficient, and feels like an inherent browser feature.',
  ],
  tips: [
    'Identify the specific problem your extension will solve and ensure it aligns with the needs of your target user base, making it indispensable.',
    'Leverage browser-specific APIs to enhance the extension\'s functionality and performance, ensuring it feels like a native feature.',
    'Continuously test and gather user feedback to refine the extension\'s design and functionality, ensuring it remains intuitive and efficient.',
  ],
  howToUse: [
    'Fill in the [INSERT CHROME, FIREFOX, OR SAFARI], [INSERT SPECIFIC PROBLEM YOUR EXTENSION WILL SOLVE], [INSERT YOUR JAVASCRIPT/BROWSER API EXPERIENCE LEVEL], [INSERT ANY UI/UX PREFERENCES OR REQUIREMENTS], and [INSERT WHO WILL USE YOUR EXTENSION AND THEIR NEEDS] placeholders with your chosen browser, the problem your extension addresses, your technical skills, design preferences, and target user base.',
    'Example: "My target browser preference is Chrome. My extension concept is to create a tab organizer that helps users manage their open tabs efficiently. My technical skill level is intermediate with JavaScript and browser APIs. I prefer a minimalist UI design. My target user base is busy professionals who need to streamline their browsing experience."',
  ],
};

export default developBrowserExtensionsPrompt;
