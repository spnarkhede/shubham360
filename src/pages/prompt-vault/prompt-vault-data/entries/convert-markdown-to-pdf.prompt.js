const convertMarkdownToPDFPrompt = {
  emoji: '📄',
  title: 'Convert Markdown To PDF',
  description: 'Create professional-grade PDFs from Markdown with this AI prompt, ensuring semantic structure and technical accuracy.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Automation',
    'Scripting',
    'Coding',
    'AI Prompts',
    'Convert',
  ],
  views: 19,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
    'DeepSeek',
    'Grok',
  ],
  prompt: `Adopt the role of an expert technical documentation specialist and PDF conversion engineer who combines deep knowledge of The Chicago Manual of Style with Pandoc's semantic preservation philosophy. Your primary objective is to generate comprehensive conversion scripts and instructions that transform Markdown files into professional-grade PDFs while maintaining document integrity and technical writing standards in a detailed, step-by-step format. You understand that semantic structure must be preserved during format adaptation, and you prioritize both technical accuracy and visual professionalism. Create conversion workflows that handle complex document elements including hierarchical headings, syntax-highlighted code blocks, mathematical notation, cross-references, and multimedia elements. Ensure the output maintains consistent typography, proper spacing, and professional formatting while supporting custom styling options. Generate complete conversion scripts with proper metadata handling, bookmark creation, and quality assurance checks. Take a deep breath and work on this problem step-by-step.

Begin by analyzing the provided Markdown files for structural complexity and content types. Create a comprehensive conversion script that includes preprocessing steps, Pandoc command configurations, CSS styling options, and post-processing validation. Provide detailed instructions for handling edge cases, troubleshooting common conversion issues, and optimizing output quality. Include recommendations for custom styling, font selection, page layout, and professional formatting standards.

#INFORMATION ABOUT ME:
My Markdown file paths or content: [INSERT YOUR MARKDOWN FILE PATHS OR PASTE MARKDOWN CONTENT]
My preferred PDF styling requirements: [INSERT YOUR STYLING PREFERENCES - FONTS, COLORS, LAYOUT]
My document type and purpose: [INSERT DOCUMENT TYPE - TECHNICAL MANUAL, REPORT, BOOK, ETC.]
My target audience and formatting standards: [INSERT AUDIENCE AND ANY SPECIFIC FORMATTING REQUIREMENTS]
My system environment: [INSERT YOUR OPERATING SYSTEM AND AVAILABLE TOOLS]

MOST IMPORTANT!: Provide your output as a comprehensive guide with clear section headings, complete conversion scripts in code blocks, and step-by-step instructions in bullet point format for maximum clarity and implementation.`,
  whatItDoes: [
    'Guides in creating comprehensive conversion scripts for Markdown to PDF.',
    'Ensures semantic structure and technical writing standards are preserved.',
    'Provides detailed instructions for handling complex document elements.',
  ],
  tips: [
    'Clearly define your Markdown file paths and content to ensure accurate conversion and maintain document integrity.',
    'Specify your preferred PDF styling requirements, including fonts, colors, and layout, to achieve a professional and visually appealing output.',
    'Understand your document type and purpose, as well as your target audience and formatting standards, to tailor the conversion process to meet specific needs and expectations.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR MARKDOWN FILE PATHS OR PASTE MARKDOWN CONTENT], [INSERT YOUR STYLING PREFERENCES - FONTS, COLORS, LAYOUT], [INSERT DOCUMENT TYPE - TECHNICAL MANUAL, REPORT, BOOK, ETC.], [INSERT AUDIENCE AND ANY SPECIFIC FORMATTING REQUIREMENTS], and [INSERT YOUR OPERATING SYSTEM AND AVAILABLE TOOLS] placeholders with your specific Markdown file details, styling preferences, document type, audience, and system environment.',
    'Example: "My Markdown file paths are located in /documents/markdown_files. I prefer using Times New Roman font with a blue color scheme and a two-column layout. The document type is a technical manual aimed at software developers, requiring a clean and professional format. My system environment is Windows 10 with Pandoc and LaTeX installed."',
  ],
};

export default convertMarkdownToPDFPrompt;
