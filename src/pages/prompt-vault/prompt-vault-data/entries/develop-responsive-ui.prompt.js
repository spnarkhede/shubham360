const developResponsiveUIPrompt = {
  emoji: '📱',
  title: 'Develop Responsive UI',
  description: 'Create responsive web designs with this AI prompt, focusing on mobile-first methodology and optimal user experiences across devices.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Coding',
    'AI Prompts',
    'Responsive',
  ],
  views: 33,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `Adopt the role of an expert responsive web designer and front-end developer who specializes in mobile-first design methodology based on Ethan Marcotte's foundational principles. Your primary objective is to create clean, semantic HTML structures with corresponding CSS that follows mobile-first responsive design patterns using fluid grids, flexible images, and strategic media queries in a comprehensive code format. You understand that responsive design isn't just about making things fit different screens, but about creating optimal user experiences across all devices by starting with the most constrained environment and progressively enhancing for larger viewports. Begin by asking targeted questions about the required content sections and target devices to understand the project scope. Then generate semantic HTML markup with proper document structure, followed by CSS that uses relative units (rem, em, percentages) and implements breakpoints at common device widths. Include the essential viewport meta tag and demonstrate how elements naturally reflow and adapt across different screen sizes. Take a deep breath and work on this problem step-by-step.

Start with diagnostic questions about content requirements, target audience devices, and specific functionality needs. Create semantic HTML structure using appropriate tags for accessibility and SEO. Develop mobile-first CSS using relative units and fluid layouts. Implement strategic breakpoints for tablet and desktop viewports. Demonstrate responsive behavior patterns and provide clear explanations of how each element adapts across screen sizes.

#INFORMATION ABOUT ME:
My website content sections needed: [INSERT THE MAIN CONTENT SECTIONS YOU NEED]
My target devices and screen sizes: [INSERT YOUR TARGET DEVICES AND SCREEN SIZES]
My design preferences or brand colors: [INSERT YOUR DESIGN PREFERENCES OR BRAND COLORS]
My specific functionality requirements: [INSERT ANY SPECIFIC FEATURES OR FUNCTIONALITY NEEDED]
My technical skill level: [INSERT YOUR CURRENT HTML/CSS SKILL LEVEL]

MOST IMPORTANT!: Provide your output with clear section headings, complete HTML and CSS code blocks, and include comments explaining the responsive behavior patterns for maximum understanding and implementation.`,
  whatItDoes: [
    'Guides in creating a responsive web design using mobile-first methodology.',
    'Helps in structuring semantic HTML and CSS for optimal user experiences.',
    'Assists in implementing fluid grids, flexible images, and strategic media queries.',
  ],
  tips: [
    'Identify the main content sections and prioritize them for mobile-first design, ensuring they align with user needs and business goals.',
    'Understand the target devices and screen sizes to tailor the design and breakpoints effectively, enhancing user experience across all devices.',
    'Incorporate brand colors and design preferences into the CSS to maintain brand consistency while ensuring accessibility and readability.',
  ],
  howToUse: [
    'Fill in the [INSERT THE MAIN CONTENT SECTIONS YOU NEED], [INSERT YOUR TARGET DEVICES AND SCREEN SIZES], [INSERT YOUR DESIGN PREFERENCES OR BRAND COLORS], [INSERT ANY SPECIFIC FEATURES OR FUNCTIONALITY NEEDED], and [INSERT YOUR CURRENT HTML/CSS SKILL LEVEL] placeholders with your specific project details.',
    'Example: "My website content sections needed: Home, About, Services, Contact. My target devices and screen sizes: Smartphones, Tablets, Desktops. My design preferences or brand colors: Blue and White. My specific functionality requirements: Contact form, Image gallery. My technical skill level: Intermediate."',
  ],
};

export default developResponsiveUIPrompt;
