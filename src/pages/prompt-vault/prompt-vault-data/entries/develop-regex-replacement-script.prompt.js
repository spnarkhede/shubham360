const developRegexReplacementScriptPrompt = {
  emoji: '🛠️',
  title: 'Develop Regex Replacement Script',
  description: 'Create comprehensive find-and-replace scripts with this AI prompt, ensuring safety, precision, and reversibility in text transformations.',
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
    'Regex',
  ],
  views: 12,
  recommendedTools: [
    'ChatGPT',
    'Grok',
    'Gemini',
    'Claude',
  ],
  prompt: `Adopt the role of an expert regular expression engineer and text processing specialist who combines Jeffrey Friedl's "Mastering Regular Expressions" methodologies with enterprise-grade file management practices. Your primary objective is to create comprehensive find-and-replace scripts that prioritize safety, precision, and reversibility while handling bulk text transformations across multiple files and formats. You understand that hasty replacements can corrupt entire datasets, so you emphasize careful pattern anchoring, thorough testing, and complete audit trails. Design systematic approaches that preview all matches before execution, implement robust backup strategies, maintain detailed logs with line-by-line tracking, and provide foolproof rollback mechanisms when replacements go wrong. Take a deep breath and work on this problem step-by-step.

Begin by analyzing the provided sample files to understand text structure and potential edge cases. Create precise regular expression patterns that avoid unintended matches through proper anchoring and boundary detection. Design preview systems that show exactly what will change before any modifications occur. Implement case sensitivity controls and format-specific handling for different file types. Establish automatic backup creation with timestamp versioning. Create comprehensive logging that records every replacement with file names, line numbers, original text, and replacement text. Build rollback functionality that can reverse changes using the detailed logs. Test patterns on sample data to identify potential issues before bulk processing.

#INFORMATION ABOUT ME:
My sample files or text examples: [INSERT YOUR SAMPLE FILES OR TEXT EXAMPLES]
My find patterns (what to search for): [INSERT THE TEXT PATTERNS YOU WANT TO FIND]
My replacement patterns (what to replace with): [INSERT THE REPLACEMENT TEXT OR PATTERNS]
My file types and formats: [INSERT THE FILE FORMATS YOU'RE WORKING WITH]
My case sensitivity preferences: [INSERT WHETHER YOU NEED CASE SENSITIVE OR INSENSITIVE MATCHING]

MOST IMPORTANT!: Structure your response with clear headings and provide the complete script code in code blocks, along with step-by-step testing instructions and safety checklists in bullet point format.`,
  whatItDoes: [
    'Provides a structured approach to creating find-and-replace scripts for text processing.',
    'Emphasizes safety, precision, and reversibility in bulk text transformations.',
    'Ensures thorough testing, backup strategies, and detailed logging for secure operations.',
  ],
  tips: [
    'Define clear objectives for the text patterns you want to find and replace, ensuring they align with your data management goals and maintain data integrity.',
    'Conduct a thorough analysis of your sample files to understand text structure and potential edge cases, guiding the creation of precise regular expression patterns.',
    'Continuously test and refine your scripts on sample data, using preview systems to identify potential issues before executing bulk transformations.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR SAMPLE FILES OR TEXT EXAMPLES], [INSERT THE TEXT PATTERNS YOU WANT TO FIND], [INSERT THE REPLACEMENT TEXT OR PATTERNS], [INSERT THE FILE FORMATS YOU\'RE WORKING WITH], and [INSERT WHETHER YOU NEED CASE SENSITIVE OR INSENSITIVE MATCHING] placeholders with your specific file examples, text patterns, replacement patterns, file formats, and case sensitivity preferences.',
    'Example: "My sample files include text documents and CSV files. I want to find patterns like \'error\' and replace them with \'issue\'. The file formats I\'m working with are .txt and .csv, and I need case insensitive matching."',
  ],
};

export default developRegexReplacementScriptPrompt;
