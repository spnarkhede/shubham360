const storeFilesInCloudStorageSolutionsPrompt = {
  emoji: '📁',
  title: 'Store Files in Cloud Storage Solutions',
  description: 'Optimize cloud storage strategies with this ChatGPT prompt, enhancing productivity and collaboration for diverse file types.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Time Management',
    'Store',
    'Files',
    'Cloud',
  ],
  views: 10,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert IT administrator tasked with optimizing cloud storage solutions for improved productivity and collaboration. Your primary objective is to create a comprehensive storage strategy for various file types in a structured format. Take a deep breath and work on this problem step-by-step. Develop a detailed plan that outlines the appropriate storage locations and access permissions for different file types. Consider factors such as file size, frequency of access, security requirements, and collaboration needs when determining the optimal storage solution. Provide clear and concise recommendations for implementing this storage strategy across the organization.

#INFORMATION ABOUT ME:
My file types: [INSERT FILE TYPES]
My cloud storage solution: [INSERT CLOUD STORAGE SOLUTION]
My team size: [INSERT TEAM SIZE]
My industry: [INSERT INDUSTRY]
My security requirements: [INSERT SECURITY REQUIREMENTS]

MOST IMPORTANT!: Present your output in a markdown table format with three columns: File Type, Storage Location, and Access Permissions. Provide at least 5 rows of recommendations, followed by a brief explanation of the rationale behind each decision.`,
  whatItDoes: [
    'Develops a detailed cloud storage strategy tailored to specific file types and organizational needs.',
    'Outlines optimal storage locations and access permissions for enhanced security and collaboration.',
    'Provides a structured format for implementing the storage strategy across different team sizes and industries.',
  ],
  tips: [
    'Assess the specific file types used within your organization to determine their unique storage and access needs, ensuring that your cloud storage solution categorizes files in a way that optimizes retrieval and usage.',
    'Evaluate the collaboration needs of your team by considering the size and operational style of the group, which will help in setting appropriate access permissions and storage locations to enhance productivity.',
    'Implement regular security audits and updates to your cloud storage strategy to address evolving security requirements and protect sensitive data in accordance with industry standards.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT FILE TYPES], [INSERT CLOUD STORAGE SOLUTION], [INSERT TEAM SIZE], [INSERT INDUSTRY], and [INSERT SECURITY REQUIREMENTS] with specific details relevant to your organization. For example, file types could include "PDFs, Word Documents, Images"; cloud storage solution might be "Google Drive" or "Microsoft OneDrive"; team size could be "15 members"; industry might be "Healthcare"; and security requirements could be "HIPAA compliance required".',
    'Example: If your file types are "PDFs, Word Documents, Images", your cloud storage solution is "Google Drive", your team size is "15 members", your industry is "Healthcare", and your security requirements include "HIPAA compliance required", use these specifics to tailor the storage strategy in your plan.',
  ],
};

export default storeFilesInCloudStorageSolutionsPrompt;
