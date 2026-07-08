const generateCSSStylesheetsPrompt = {
  emoji: '🎨',
  title: 'Generate CSS Stylesheets',
  description: 'Create scalable CSS stylesheets with this AI prompt, using BEM methodology for maintainable design systems.',
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
    'Stylesheets',
  ],
  views: 17,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `Adopt the role of an expert CSS architect and front-end systems designer who specializes in scalable design systems and has mastered the BEM (Block Element Modifier) methodology created by Yandex. Your primary objective is to create comprehensive, maintainable CSS stylesheets that follow BEM naming conventions and establish robust design system foundations in a well-organized, production-ready format. You understand that great CSS architecture prevents specificity wars, enables team collaboration, and scales effortlessly across large applications. Begin by asking targeted questions about the design system requirements including color palette, typography preferences, spacing scale, and specific component needs. Then generate a complete CSS stylesheet featuring custom properties for design tokens, CSS reset/normalize styles, typography scale, utility classes, and component-specific styles with proper BEM naming conventions. Take a deep breath and work on this problem step-by-step.

Start with diagnostic questions about design requirements, brand guidelines, and component inventory. Structure the CSS with logical sections including CSS custom properties for colors and spacing, base styles and resets, typography system, utility classes, and component styles using block__element--modifier naming. Include comprehensive comments explaining each section's purpose and provide guidance on extending the system. Ensure all class names follow strict BEM methodology to avoid specificity conflicts and promote reusability.

#INFORMATION ABOUT ME:
My project type: [INSERT PROJECT TYPE - e.g., e-commerce site, blog, web app]
My design system requirements: [INSERT COLOR PALETTE, FONTS, AND VISUAL STYLE PREFERENCES]
My component needs: [INSERT SPECIFIC COMPONENTS NEEDED - e.g., buttons, cards, navigation]
My target devices: [INSERT DEVICE TARGETS - desktop, mobile, tablet]
My existing brand guidelines: [INSERT ANY EXISTING BRAND COLORS, FONTS, OR STYLE REQUIREMENTS]

MOST IMPORTANT!: Provide the complete CSS stylesheet with proper sectioning, detailed comments, and ensure all class names strictly follow BEM methodology (block__element--modifier). Format with clear headings and proper indentation for maximum readability.`,
  whatItDoes: [
    'Guides in creating a scalable and maintainable CSS architecture using BEM methodology.',
    'Assists in gathering design system requirements through targeted questions.',
    'Generates a comprehensive CSS stylesheet with custom properties, resets, and component styles.',
  ],
  tips: [
    'Clearly define your design system requirements, including color palette, typography, and component needs, to ensure the CSS architecture aligns with your project\'s goals.',
    'Conduct a thorough analysis of your existing brand guidelines and target devices to tailor the CSS stylesheet for consistency and responsiveness.',
    'Regularly review and update your CSS architecture to incorporate feedback and evolving design trends, ensuring it remains scalable and maintainable.',
  ],
  howToUse: [
    'Fill in the [INSERT PROJECT TYPE], [INSERT COLOR PALETTE, FONTS, AND VISUAL STYLE PREFERENCES], [INSERT SPECIFIC COMPONENTS NEEDED], [INSERT DEVICE TARGETS], and [INSERT ANY EXISTING BRAND COLORS, FONTS, OR STYLE REQUIREMENTS] placeholders with detailed information about your project and design system needs.',
    'Example: "My project type is an e-commerce site. My design system requirements include a color palette of blue and white, with sans-serif fonts and a modern visual style. I need components like buttons, cards, and navigation. My target devices are desktop and mobile. My existing brand guidelines include using the brand colors navy blue and light gray, with Arial as the primary font."',
  ],
};

export default generateCSSStylesheetsPrompt;
