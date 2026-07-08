const automateDataValidationPrompt = {
  emoji: '🔍',
  title: 'Automate Data Validation',
  description: 'Create comprehensive data validation logic with this AI prompt, ensuring data integrity across multiple dimensions for reliable information assets.',
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
    'Automate',
  ],
  views: 21,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
    'Grok',
    'DeepSeek',
  ],
  prompt: `Adopt the role of an expert data validation architect who spent a decade building enterprise data pipelines at Fortune 500 companies, survived countless data disasters, and now obsessively hunts down data quality issues before they become million-dollar mistakes. Your primary objective is to create comprehensive data validation logic and systematic quality assessment frameworks that transform messy datasets into reliable, trustworthy information assets in a detailed structured format. You operate in high-stakes environments where data quality failures cascade into business-critical decisions, regulatory violations, and operational chaos. Your validation systems must catch errors that slip past automated tools while providing actionable insights for data remediation. Design validation rules that systematically verify data integrity across multiple dimensions including completeness, accuracy, consistency, timeliness, and referential integrity. Create detailed error reporting mechanisms that pinpoint exactly which records fail which validation tests, calculate quantitative data quality scores, and provide specific recommendations for fixing common data issues. Structure your approach to separate clean validated data from quarantined problematic records while maintaining full audit trails. Take a deep breath and work on this problem step-by-step.

Begin by analyzing the data structure and business context to understand critical validation requirements. Design comprehensive validation rules covering acceptable value ranges, required field completeness, format pattern matching, cross-field consistency checks, and referential integrity constraints. Create systematic testing logic that evaluates each rule against every data record. Generate detailed error reports showing specific validation failures with record-level details and failure reasons. Calculate overall data quality scores and dimension-specific metrics. Provide targeted recommendations for resolving common data quality issues. Output separate clean and quarantined datasets with full documentation of validation results.

#INFORMATION ABOUT ME:
My data structure and format: [INSERT YOUR DATA STRUCTURE DETAILS AND FORMAT]
My critical validation requirements: [INSERT YOUR SPECIFIC VALIDATION RULES AND BUSINESS REQUIREMENTS]
My acceptable value ranges and constraints: [INSERT YOUR ACCEPTABLE RANGES, FORMATS, AND CONSTRAINTS]
My required fields and mandatory elements: [INSERT YOUR REQUIRED FIELDS AND COMPLETENESS RULES]
My referential integrity requirements: [INSERT YOUR CROSS-REFERENCE AND RELATIONSHIP VALIDATION NEEDS]

MOST IMPORTANT!: Structure your response with clear section headings and provide validation logic, error reports, and quality assessments in organized bullet point format with specific examples and actionable recommendations.`,
  whatItDoes: [
    'Provides a structured approach to creating comprehensive data validation logic.',
    'Ensures systematic quality assessment frameworks for transforming messy datasets.',
    'Offers actionable insights for data remediation and error reporting mechanisms.',
  ],
  tips: [
    'Clearly define your data structure and format to tailor validation logic to your specific needs, ensuring that all critical elements are covered.',
    'Regularly review and update your validation rules to align with evolving business requirements and industry standards, maintaining data integrity and reliability.',
    'Leverage automated tools to complement your validation systems, catching errors that may slip through manual checks and enhancing overall data quality.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR DATA STRUCTURE DETAILS AND FORMAT], [INSERT YOUR SPECIFIC VALIDATION RULES AND BUSINESS REQUIREMENTS], [INSERT YOUR ACCEPTABLE RANGES, FORMATS, AND CONSTRAINTS], [INSERT YOUR REQUIRED FIELDS AND COMPLETENESS RULES], and [INSERT YOUR CROSS-REFERENCE AND RELATIONSHIP VALIDATION NEEDS] placeholders with your specific data details and validation needs.',
    'Example: "My data structure is a relational database format with tables for customer information and transactions. My critical validation requirements include ensuring all customer IDs are unique and transactions are linked to valid customer records. Acceptable value ranges include transaction amounts between $0.01 and $10,000. Required fields include customer name, email, and transaction date. Referential integrity requires that all transactions must have a corresponding customer ID in the customer table."',
  ],
};

export default automateDataValidationPrompt;
