const generateRemoteWorkToolsTablePrompt = {
  emoji: '📊',
  title: 'Generate Remote Work Tools Table',
  description: 'Optimize your remote work strategy with this ChatGPT mega-prompt, generating a detailed table of essential tools and software tailored for your business type.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Strategy',
    'Business',
    'Productivity',
    'Workflow',
  ],
  views: 14,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert business analyst and consultant specializing in evaluating remote work setups for various industries. Your task is to help the user generate a comprehensive table of essential tools and software for enabling effective remote work in their given business type.

#ROLE:
Adopt the role of an expert business analyst and consultant specializing in evaluating remote work setups for various industries.

#RESPONSE GUIDELINES:
Generate a comprehensive table with the following columns:
- Tool Category 
- Recommended Software
- Purpose

Aim to cover all critical aspects of remote work for the given industry. Provide specific software recommendations and explain the purpose of each tool in the remote work context.

#TASK CRITERIA:
1. Identify the most essential tool categories for enabling effective remote work in the given business type.
2. Provide specific, well-known software recommendations for each tool category.
3. Clearly explain the purpose and importance of each tool in the context of remote work for the given industry.
4. Ensure that all critical aspects of remote work for the industry are covered in the table.
5. Focus on providing a comprehensive, well-organized table that is easy for the user to understand and apply to their business.

#INFORMATION ABOUT ME:
- My business type: [INSERT BUSINESS TYPE]

#RESPONSE FORMAT:
| Tool Category | Recommended Software | Purpose |
|-|-|-|
| $tool_category1 | $recommended_software1 | $purpose1 |
| $tool_category2 | $recommended_software2 | $purpose2 |
| $tool_category3 | $recommended_software3 | $purpose3 |
| $tool_category4 | $recommended_software4 | $purpose4 |
| $tool_category5 | $recommended_software5 | $purpose5 |
| $tool_category6 | $recommended_software6 | $purpose6 |
| $tool_category7 | $recommended_software7 | $purpose7 |
| $tool_category8 | $recommended_software8 | $purpose8 |`,
  whatItDoes: [
    'Identifies essential tool categories for effective remote work in a specific business type.',
    'Provides specific software recommendations for each identified tool category.',
    'Explains the purpose and importance of each tool in the context of remote work for the specified industry.',
  ],
  tips: [
    'Research and identify the primary tool categories necessary for the specific business type, focusing on communication, project management, security, and collaboration to ensure comprehensive coverage.',
    'Select well-known, highly rated software for each tool category, considering user reviews and industry recommendations to provide reliable and effective solutions for remote work setups.',
    'Clearly define and articulate the purpose of each tool in the table, emphasizing how they specifically aid in enhancing productivity, security, and collaboration in a remote work environment.',
  ],
  howToUse: [
    'Fill in the [INSERT BUSINESS TYPE] placeholder with the specific type of business you are focusing on. For example, if you are analyzing tools for a marketing agency, replace [INSERT BUSINESS TYPE] with "marketing agency".',
    'Example: If your business type is "e-commerce," your table should include tools and software that specifically enhance remote work for an e-commerce business, such as inventory management software, customer service tools, and digital marketing platforms.',
  ],
};

export default generateRemoteWorkToolsTablePrompt;
