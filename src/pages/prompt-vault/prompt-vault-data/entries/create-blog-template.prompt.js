const createBlogTemplatePrompt = {
  emoji: '📜',
  title: 'Create Blog Template',
  description: 'Create a comprehensive blog template with this AI prompt, focusing on readability, accessibility, and clean design aesthetics.',
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
    'Blog',
  ],
  views: 33,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `Adopt the role of an expert web developer and typography specialist who combines Robert Bringhurst's typographic principles with modern semantic HTML and user experience design. Your primary objective is to create a comprehensive blog template structure that prioritizes readability, accessibility, and clean design aesthetics in a detailed HTML structure with accompanying design specifications. You understand that exceptional blog design balances visual hierarchy, optimal reading comfort, and semantic markup to create an engaging user experience that keeps readers focused on content without distractions. 

Begin by determining the specific layout type needed, then create semantic HTML structure with proper article tags, meta information, and content sections. Apply Bringhurst's readability guidelines including 45-75 character line lengths, appropriate line spacing, clear typographic hierarchy, and generous margins. Design the template with featured image placement, readable typography with proper heading structure, metadata display for date/author/categories, related posts section, and comment area placeholder. Take a deep breath and work on this problem step-by-step.

Structure the template with semantic HTML5 elements, implement proper heading hierarchy (H1-H6), create responsive design considerations, establish consistent spacing and margins, design clean navigation elements, and ensure the layout remains distraction-free while maintaining visual interest. Include specific typography recommendations, color scheme suggestions, and spacing measurements that align with optimal readability standards.

#INFORMATION ABOUT ME:
My blog topic/niche: [INSERT YOUR BLOG TOPIC OR NICHE]
My preferred layout type: [INSERT SINGLE-POST OR ARCHIVE LAYOUT PREFERENCE]
My target audience: [INSERT YOUR TARGET AUDIENCE DESCRIPTION]
My brand colors: [INSERT YOUR PREFERRED COLOR SCHEME]
My content style: [INSERT YOUR WRITING STYLE - FORMAL, CASUAL, TECHNICAL, ETC.]

MOST IMPORTANT!: Provide your output as a complete HTML template with embedded CSS styling, followed by detailed implementation notes in bullet point format for maximum clarity and usability.`,
  whatItDoes: [
    'Guides in creating a comprehensive blog template structure that prioritizes readability and accessibility.',
    'Combines Robert Bringhurst\'s typographic principles with modern semantic HTML and user experience design.',
    'Ensures the template includes semantic HTML5 elements, proper heading hierarchy, and responsive design considerations.',
  ],
  tips: [
    'Determine your blog\'s specific layout type and ensure it aligns with your content goals and audience preferences.',
    'Use Robert Bringhurst\'s typographic principles to enhance readability, focusing on line lengths, spacing, and hierarchy.',
    'Regularly test your template\'s design on various devices to ensure a distraction-free and engaging user experience.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR BLOG TOPIC OR NICHE], [INSERT SINGLE-POST OR ARCHIVE LAYOUT PREFERENCE], [INSERT YOUR TARGET AUDIENCE DESCRIPTION], [INSERT YOUR PREFERRED COLOR SCHEME], and [INSERT YOUR WRITING STYLE - FORMAL, CASUAL, TECHNICAL, ETC.] placeholders with specific details about your blog.',
    'Example: "My blog topic/niche is sustainable living. My preferred layout type is a single-post layout. My target audience is environmentally-conscious millennials. My brand colors are green and earth tones. My content style is casual and informative."',
  ],
};

export default createBlogTemplatePrompt;
