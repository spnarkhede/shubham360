const designCookieBannersPrompt = {
  emoji: '🔒',
  title: 'Design Cookie Banners',
  description: 'Create a GDPR-compliant cookie banner with this AI prompt, ensuring legal compliance and optimal user experience.',
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
    'Cookie',
  ],
  views: 21,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `Adopt the role of an expert web developer and privacy compliance specialist who has implemented GDPR-compliant cookie management systems for Fortune 500 companies across multiple jurisdictions. Your primary objective is to create a comprehensive, legally compliant cookie banner implementation guide that ensures full GDPR and ePrivacy Directive compliance while maintaining optimal user experience in a detailed step-by-step format. You operate in an environment where privacy regulations are constantly evolving, non-compliance can result in massive fines, and user expectations for transparency are at an all-time high. Legal teams demand bulletproof compliance while marketing teams need granular tracking capabilities, creating tension that requires sophisticated technical solutions.

Begin by analyzing the specific cookie usage patterns and regional compliance requirements, then design a complete cookie banner system including technical implementation, legal compliance features, and user experience optimization. Create detailed specifications for banner appearance, consent management logic, category-based cookie controls, and persistent consent storage. Include code structure recommendations, compliance validation steps, and testing procedures to ensure the implementation meets all regulatory requirements while providing users with clear, granular control over their data. Take a deep breath and work on this problem step-by-step.

#INFORMATION ABOUT ME:
My website's cookie usage: [INSERT DETAILED LIST OF COOKIES YOUR SITE USES AND THEIR PURPOSES]
My target user regions: [INSERT THE GEOGRAPHIC REGIONS WHERE YOUR USERS ARE LOCATED]
My current website platform: [INSERT YOUR WEBSITE PLATFORM - WordPress, React, HTML/CSS, etc.]
My technical skill level: [INSERT YOUR CODING/TECHNICAL EXPERIENCE LEVEL]
My existing privacy policy status: [INSERT WHETHER YOU HAVE A PRIVACY POLICY AND ITS CURRENT STATE]

MOST IMPORTANT!: Structure your response with clear section headings and provide all technical specifications, legal requirements, and implementation steps in detailed bullet point format for maximum clarity and actionability.`,
  whatItDoes: [
    'Analyzes specific cookie usage patterns and regional compliance requirements to ensure GDPR and ePrivacy Directive compliance.',
    'Designs a comprehensive cookie banner system that balances legal compliance with optimal user experience.',
    'Provides detailed specifications for banner appearance, consent management logic, and persistent consent storage.',
  ],
  tips: [
    'Conduct a thorough audit of your website\'s cookies to understand their purposes and ensure they align with GDPR requirements.',
    'Regularly update your cookie management system to reflect changes in privacy regulations and user expectations.',
    'Collaborate with legal and marketing teams to create a balanced approach that satisfies compliance needs and marketing goals.',
  ],
  howToUse: [
    'Fill in the [INSERT DETAILED LIST OF COOKIES YOUR SITE USES AND THEIR PURPOSES], [INSERT THE GEOGRAPHIC REGIONS WHERE YOUR USERS ARE LOCATED], [INSERT YOUR WEBSITE PLATFORM - WordPress, React, HTML/CSS, etc.], [INSERT YOUR CODING/TECHNICAL EXPERIENCE LEVEL], and [INSERT WHETHER YOU HAVE A PRIVACY POLICY AND ITS CURRENT STATE] placeholders with specific information about your website\'s cookie usage, target regions, platform, technical skills, and privacy policy status.',
    'Example: "My website uses analytics cookies for tracking user behavior, targeting users in the EU and the US. The platform is WordPress, and I have intermediate coding skills. My privacy policy is up-to-date with GDPR guidelines."',
  ],
};

export default designCookieBannersPrompt;
