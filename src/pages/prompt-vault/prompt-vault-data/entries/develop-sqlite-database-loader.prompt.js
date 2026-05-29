const developSQLiteDatabaseLoaderPrompt = {
  emoji: '📊',
  title: 'Develop SQLite Database Loader',
  description: 'Create a robust SQLite database loader system with this AI prompt, converting CSV files into normalized, indexed, and constrained tables.',
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
    'SQLite',
  ],
  views: 12,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `Adopt the role of an expert database architect and data engineer who specializes in relational database theory, particularly C.J. Date's principles of database normalization and data integrity. Your primary objective is to create a comprehensive SQLite database loader system that converts CSV files into properly normalized, indexed, and constrained database tables with full documentation and validation reporting. You have extensive experience in data type inference, constraint validation, and schema optimization for production systems. Apply rigorous database normalization principles to ensure data integrity through proper typing, indexing, and constraint definition. Generate Python code that intelligently infers appropriate data types from CSV samples, creates efficiently indexed tables, handles NULL values according to business rules, validates all data during import process, and provides detailed reporting on any rows that fail constraint validation. Take a deep breath and work on this problem step-by-step.

Begin by analyzing the provided CSV structure and relationships between datasets. Create a data type inference engine that samples CSV data to determine optimal SQLite column types. Design proper indexing strategies based on anticipated query patterns. Implement comprehensive constraint validation including primary keys, foreign keys, check constraints, and NOT NULL requirements. Generate detailed import logs showing successful imports and constraint violations. Create complete schema documentation explaining table structures, relationships, and business rules.

#INFORMATION ABOUT ME:
My CSV files to convert: [INSERT YOUR CSV FILE NAMES AND BRIEF DESCRIPTIONS]
My relationships between datasets: [DESCRIBE HOW YOUR TABLES RELATE TO EACH OTHER]
My specific data validation requirements: [INSERT ANY SPECIAL VALIDATION RULES OR CONSTRAINTS]
My expected query patterns: [DESCRIBE HOW YOU PLAN TO USE THE DATABASE]
My NULL value handling preferences: [INSERT HOW YOU WANT NULL VALUES TREATED]

MOST IMPORTANT!: Provide your output as complete Python code with detailed comments, followed by a markdown table showing the proposed schema structure with columns for Table Name, Column Name, Data Type, Constraints, and Index Strategy.`,
  whatItDoes: [
    'Converts CSV files into normalized, indexed, and constrained SQLite database tables.',
    'Infers data types, validates constraints, and optimizes schema for production systems.',
    'Provides detailed reporting on data import success and constraint violations.',
  ],
  tips: [
    'Clearly define the relationships between your datasets to ensure proper normalization and indexing, which will enhance query performance and data integrity.',
    'Specify any unique data validation rules or constraints to tailor the database loader system to your specific business needs, ensuring accurate data representation.',
    'Consider your expected query patterns to design an indexing strategy that optimizes database performance and meets your data retrieval requirements.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR CSV FILE NAMES AND BRIEF DESCRIPTIONS], [DESCRIBE HOW YOUR TABLES RELATE TO EACH OTHER], [INSERT ANY SPECIAL VALIDATION RULES OR CONSTRAINTS], [DESCRIBE HOW YOU PLAN TO USE THE DATABASE], and [INSERT HOW YOU WANT NULL VALUES TREATED] placeholders with specific information about your CSV files, table relationships, validation rules, query patterns, and NULL handling preferences.',
    'Example: "My CSV files to convert: \'customers.csv\' (contains customer details), \'orders.csv\' (contains order details). My relationships between datasets: \'orders.csv\' references \'customers.csv\' via customer_id. My specific data validation requirements: customer_id must be unique, order_date cannot be NULL. My expected query patterns: frequent joins between customers and orders. My NULL value handling preferences: treat NULLs as missing data, not errors."',
  ],
};

export default developSQLiteDatabaseLoaderPrompt;
