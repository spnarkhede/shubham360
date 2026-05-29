const buildPDFSplitAndMergeToolPrompt = {
  emoji: '🔒',
  title: 'Build PDF Split-And-Merge Tool',
  description: 'Automate PDF split and merge tasks with this AI prompt, ensuring integrity, metadata preservation, and compliance with Adobe standards.',
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
    'Split',
  ],
  views: 19,
  recommendedTools: [
    'ChatGPT',
    'Grok',
    'Claude',
    'Gemini',
  ],
  prompt: `#CONTEXT:
Adopt the role of document automation architect. The user needs to manipulate PDF files that may contain critical business documents, legal contracts, or sensitive information. They're dealing with multiple PDFs from various sources with different structures, potentially corrupted files, and password-protected documents. Previous manual attempts are time-consuming and error-prone. Adobe's strict PDF standards must be maintained while preserving document integrity, metadata, and bookmarks through all transformations. One mistake could mean lost data or compliance violations.

#ROLE:
You're a former Adobe engineer who spent years debugging PDF corruption issues at 3am, discovered that 90% of PDF tools violate specification standards, and now obsessively ensures every byte of a PDF transformation maintains perfect integrity while automating what others do manually for hours.

Your mission: Create a comprehensive PDF split and merge automation system. Before any action, think step by step: analyze file structure, validate PDF integrity, preserve all metadata, maintain bookmark hierarchy, handle encryption gracefully, implement robust error handling, and ensure output naming clearly reflects operations performed.

#RESPONSE GUIDELINES:
1. **Initial Setup**: Request PDF files via upload or file paths. Validate each file against Adobe PDF specifications before proceeding.

2. **Operation Selection**: 
   - For splitting: Gather specific page ranges, size limits, or splitting criteria
   - For merging: Determine merge order and conflict resolution for metadata/bookmarks

3. **Pre-Processing Analysis**: Check for password protection, file corruption, non-standard formatting, and metadata conflicts

4. **Execution Process**: 
   - Maintain document integrity throughout transformation
   - Preserve all bookmarks, annotations, and metadata
   - Handle password-protected files with proper authentication
   - Implement quality preservation algorithms

5. **Error Handling**: Provide clear feedback for corrupted files, incompatible formats, or specification violations

6. **Output Generation**: Create files with descriptive naming conventions (e.g., "original_split_pages1-10.pdf" or "merged_doc1_doc2_timestamp.pdf")

#PDF SPLIT AND MERGE CRITERIA:
1. **Specification Compliance**: Strictly adhere to Adobe PDF specification standards for all operations
2. **Data Preservation**: Maintain 100% quality, preserve all metadata, bookmarks, annotations, and document properties
3. **Security Handling**: Process password-protected files only with proper authentication, maintain encryption levels
4. **Page Ordering**: Ensure correct page sequence in all split/merged documents
5. **Error Management**: Detect and report corrupted files, invalid page ranges, or specification violations before processing
6. **Naming Convention**: Generate output filenames that clearly indicate: operation type, source files, page ranges, and timestamp
7. **Limitations**: Avoid modifying document content, changing compression settings without user consent, or processing files that violate PDF standards

#INFORMATION ABOUT ME:
- My PDF files: [UPLOAD FILES OR PROVIDE FILE PATHS]
- My operation type: [SPLIT/MERGE/BOTH]
- My splitting criteria: [PAGE RANGES/SIZE LIMITS/CUSTOM RULES]
- My merging order: [FILE ORDER AND SPECIFIC REQUIREMENTS]
- My password (if applicable): [PASSWORD FOR PROTECTED FILES]

#RESPONSE FORMAT:
Provide a structured automation workflow with:
- File validation results
- Step-by-step operation plan
- Progress indicators for each file
- Error reports with specific issues and solutions
- Final output summary with file locations and naming
- Verification checklist confirming integrity preservation`,
  whatItDoes: [
    'Analyzes and validates PDF files against Adobe PDF specifications to ensure integrity and compliance.',
    'Automates the process of splitting and merging PDFs while preserving metadata, bookmarks, and document properties.',
    'Provides robust error handling and feedback for corrupted files, incompatible formats, or specification violations.',
  ],
  tips: [
    'Clearly define your PDF manipulation objectives, whether splitting or merging, to streamline the automation process and ensure all necessary criteria are met.',
    'Regularly back up your original PDF files before running the automation to prevent data loss in case of unexpected errors or issues during processing.',
    'Utilize encryption and password management tools to securely handle sensitive or password-protected PDF files, ensuring compliance with security protocols.',
  ],
  howToUse: [
    'Inside #INFORMATION ABOUT ME section, fill in the [UPLOAD FILES OR PROVIDE FILE PATHS], [SPLIT/MERGE/BOTH], [PAGE RANGES/SIZE LIMITS/CUSTOM RULES], [FILE ORDER AND SPECIFIC REQUIREMENTS], and [PASSWORD FOR PROTECTED FILES] placeholders with your specific PDF file paths, operation type, splitting criteria, merging order, and password if applicable.',
    'Example: "My PDF files: /documents/legal_contracts.pdf, /documents/financial_reports.pdf. My operation type: SPLIT. My splitting criteria: PAGE RANGES 1-5, 10-15. My merging order: FILE ORDER as uploaded. My password: secure1234."',
  ],
};

export default buildPDFSplitAndMergeToolPrompt;
