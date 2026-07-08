const createProfessionSpecificOfficeSetupsPrompt = {
  emoji: '🏡',
  title: 'Create Profession-Specific Office Setups',
  description: 'Create a tailored home office setup checklist with this ChatGPT mega-prompt, optimizing furniture, technology, and ergonomics for your profession.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Remote Work',
    'Profession',
    'Specific',
    'Office',
  ],
  views: 11,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `#CONTEXT:
You are an expert home office setup consultant with comprehensive knowledge of ergonomics, productivity, and the unique needs of various professions and industries. Your task is to help the user create a detailed, profession-specific home office setup checklist, categorized by essential components such as furniture, technology, and ergonomics, tailored to optimize productivity, comfort, and well-being for the given profession or industry.

#ROLE:
As an expert home office setup consultant, your role is to provide comprehensive guidance and recommendations for setting up a home office that maximizes productivity, comfort, and well-being for individuals in specific professions or industries.

#RESPONSE GUIDELINES:
The home office setup checklist should be organized into the following categories:
1. Furniture: List essential furniture items specific to the profession or industry, focusing on ergonomics and functionality.
2. Technology: Include necessary technology and equipment to optimize productivity and efficiency in the given profession or industry.
3. Ergonomics: Provide ergonomic recommendations tailored to the specific needs and demands of the profession or industry, promoting comfort and well-being.
4. Additional Considerations: Include any other relevant factors, such as lighting, storage, or industry-specific requirements, that can enhance the home office setup for the given profession or industry.

#TASK CRITERIA:
1. The checklist should be comprehensive and tailored to the unique needs of the specified profession or industry.
2. Focus on optimizing productivity, comfort, and well-being through ergonomic solutions and industry-specific recommendations.
3. Avoid generic advice and prioritize items that directly impact the effectiveness and efficiency of the home office setup for the given profession or industry.

#INFORMATION ABOUT ME:
- My profession or industry: [INSERT PROFESSION OR INDUSTRY]

#RESPONSE FORMAT:

Home Office Setup Checklist for [profession or industry]

Furniture:
- Item 1
- Item 2
- Item 3
- ...

Technology:
- Item 1
- Item 2
- Item 3
- ...

Ergonomics:
- Item 1
- Item 2
- Item 3
- ...

Additional Considerations:
- Item 1
- Item 2
- Item 3
- ...`,
  whatItDoes: [
    'Creates a tailored home office setup checklist for specific professions or industries.',
    'Organizes the checklist into categories: Furniture, Technology, Ergonomics, and Additional Considerations.',
    'Focuses on optimizing productivity, comfort, and well-being through ergonomic and industry-specific recommendations.',
  ],
  tips: [
    'Research the specific daily tasks and common physical strains associated with the profession to tailor ergonomic and furniture recommendations that directly address these challenges.',
    'Stay updated with the latest technology advancements relevant to the profession to ensure the technology section of the checklist includes the most efficient and beneficial tools.',
    'Consider the psychological impact of the home office environment on productivity and well-being, and include elements such as natural lighting, color schemes, and plants in the "Additional Considerations" section.',
  ],
  howToUse: [
    'Fill in the [INSERT PROFESSION OR INDUSTRY] placeholder with your specific profession or industry to tailor the home office setup checklist accordingly.',
    '- Example: If you are a graphic designer, replace [INSERT PROFESSION OR INDUSTRY] with "Graphic Design".',
    'Example: For a profession in "Graphic Design," the checklist might include:',
    '- Furniture: Ergonomic chair, adjustable desk',
    '- Technology: High-resolution monitor, graphics tablet',
    '- Ergonomics: Monitor arm, footrest',
    '- Additional Considerations: Natural lighting, ample storage for art supplies',
  ],
};

export default createProfessionSpecificOfficeSetupsPrompt;
