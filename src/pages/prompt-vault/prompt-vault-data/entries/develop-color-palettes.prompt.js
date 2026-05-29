const developColorPalettesPrompt = {
  emoji: '🎨',
  title: 'Develop Color Palettes',
  description: 'Develop a strategic color system with this AI prompt, ensuring accessibility, brand identity, and user interaction clarity.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Branding',
    'Coding',
    'AI Prompts',
    'Color',
  ],
  views: 23,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
  ],
  prompt: `Adopt the role of an expert UX/UI color strategist who combines deep knowledge of color theory from "Designing for the Digital Age" by Kim Goodwin with WCAG accessibility compliance expertise. Your primary objective is to create a comprehensive color palette system that serves functional purposes beyond aesthetics—establishing clear hierarchy, defining interactive states, and reinforcing brand identity while ensuring accessibility compliance. You understand that colors must work systematically across digital interfaces, supporting user comprehension and interaction patterns while meeting strict contrast ratio requirements for inclusive design.

Analyze the provided brand information and accessibility requirements to develop a strategic color system. Define primary colors for core brand expression and key actions, secondary colors for supporting elements and content organization, and accent colors for alerts, notifications, and special states. For each color, provide exact hex codes and specify their intended usage contexts including backgrounds, text, interactive elements, and system feedback. Calculate and document contrast ratios to ensure WCAG AA compliance (minimum 4.5:1 for normal text, 3:1 for large text). Explain the psychological and functional meaning of each color within the specific application context to enable consistent implementation across the entire user experience. Take a deep breath and work on this problem step-by-step.

#INFORMATION ABOUT ME:
My existing brand colors (if any): [INSERT YOUR CURRENT BRAND COLORS OR "NONE"]
My app's mood and personality: [INSERT YOUR APP'S INTENDED MOOD AND PERSONALITY]
My target audience: [INSERT YOUR TARGET AUDIENCE DETAILS]
My accessibility requirements: [INSERT YOUR SPECIFIC ACCESSIBILITY NEEDS]
My app/product type: [INSERT YOUR APP OR PRODUCT DESCRIPTION]

MOST IMPORTANT!: Structure your response with clear sections for Primary Colors, Secondary Colors, and Accent Colors. For each color, provide the hex code, contrast ratios, specific usage guidelines, and contextual meaning in a well-organized format with bullet points for maximum clarity.`,
  whatItDoes: [
    'Assists in developing a comprehensive color palette system for digital interfaces.',
    'Ensures the color system meets WCAG accessibility compliance for inclusive design.',
    'Provides guidelines for color usage to reinforce brand identity and user interaction.',
  ],
  tips: [
    'Clearly define your app\'s mood and personality to align the color palette with your brand\'s identity and user experience goals.',
    'Conduct thorough research on your target audience to ensure the color choices resonate with their preferences and enhance user engagement.',
    'Regularly test and validate the color contrast ratios to maintain WCAG compliance, ensuring accessibility for all users.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR CURRENT BRAND COLORS OR "NONE"], [INSERT YOUR APP\'S INTENDED MOOD AND PERSONALITY], [INSERT YOUR TARGET AUDIENCE DETAILS], [INSERT YOUR SPECIFIC ACCESSIBILITY NEEDS], and [INSERT YOUR APP OR PRODUCT DESCRIPTION] placeholders with specific information about your brand and app.',
    'Example: "My existing brand colors are blue and white. My app\'s mood is playful and energetic. My target audience is young adults aged 18-25. My accessibility requirements include ensuring all text has a minimum contrast ratio of 4.5:1. My app is a social media platform for sharing creative content."',
  ],
};

export default developColorPalettesPrompt;
