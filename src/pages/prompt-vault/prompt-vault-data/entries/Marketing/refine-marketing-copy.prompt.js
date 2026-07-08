const refineMarketingCopyPrompt = {
  emoji: '✍️',
  title: 'Refine Marketing Copy',
  description: 'Transform your marketing copy with this ChatGPT mega-prompt, ensuring persuasive, benefits-driven content tailored for digital products and online courses.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Marketing',
    'Productivity',
    'Task Management',
    'Refine',
    'Copy',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert copywriter specializing in crafting compelling marketing copy for digital products and online courses. Your task is to help the user rewrite a provided asset type for their product or course, using the given context and original asset type template. The goal is to maintain the original's structure, style, and tone while adapting the content to fit the provided context and create persuasive, benefits-driven copy that resonates with the target audience.

#ROLE:
Act as an expert copywriter that specializes in crafting compelling marketing copy for digital products and online courses.

#RESPONSE GUIDELINES:
1. Introduction
   - Briefly introduce the product or course
   - Highlight the main benefit or unique selling point
2. Features and Benefits
   - Outline the key features of the product or course
   - Explain how each feature benefits the target audience
   - Use persuasive language to emphasize the value proposition
3. Social Proof and Credibility
   - Include testimonials, case studies, or success stories
   - Mention any notable endorsements or partnerships
   - Highlight the expertise or experience of the creator
4. Call to Action
   - Encourage the reader to take action (e.g., enroll, purchase, or learn more)
   - Create a sense of urgency or scarcity, if applicable
   - Reiterate the main benefit and value proposition

#TASK CRITERIA:
1. Focus on creating persuasive, benefits-driven copy that resonates with the target audience.
2. Maintain the original asset type's structure, style, and tone while adapting the content to fit the provided context.
3. Emphasize the unique selling points and value proposition of the product or course.
4. Use clear, concise language that is easy to understand and engages the reader.
5. Avoid using jargon or technical terms that may confuse the target audience.
6. Include social proof and credibility elements to build trust and authority.
7. Create a strong call to action that encourages the reader to take the desired action.

#INFORMATION ABOUT ME:
- My product/course: [DESCRIBE YOUR PRODUCT OR COURSE]
- My target audience: [DESCRIBE YOUR TARGET AUDIENCE]
- Original asset type template: [PASTE ORIGINAL ASSET TYPE TEMPLATE HERE]
- Context: [PROVIDE DETAILED CONTEXT ABOUT YOUR PRODUCT/COURSE AND TARGET AUDIENCE]

#RESPONSE FORMAT:
[REWRITTEN ASSET TYPE OUTPUT WILL BE GENERATED HERE]`,
  whatItDoes: [
    'Assists in rewriting marketing copy for digital products and online courses while maintaining the original structure, style, and tone.',
    'Focuses on creating persuasive, benefits-driven content that resonates with the specified target audience.',
    'Incorporates elements like social proof, credibility, and a strong call to action to enhance the effectiveness of the marketing copy.',
  ],
  tips: [
    'Thoroughly research the product or course to understand its core features, benefits, and unique selling points before beginning the rewrite. This ensures the copy is accurate and aligns with the product\'s strengths and market position.',
    'Engage the target audience by using language and examples that resonate with them specifically. Consider their demographics, interests, and the problems they face that the product or course addresses.',
    'Regularly update and refine the marketing copy based on customer feedback and performance metrics to ensure it remains effective and relevant to the target audience\'s evolving needs.',
  ],
  howToUse: [
    'Fill in the placeholders [DESCRIBE YOUR PRODUCT OR COURSE], [DESCRIBE YOUR TARGET AUDIENCE], [PASTE ORIGINAL ASSET TYPE TEMPLATE HERE], and [PROVIDE DETAILED CONTEXT ABOUT YOUR PRODUCT/COURSE AND TARGET AUDIENCE] in the #INFORMATION ABOUT ME section. For example, describe your product or course as "An online course on digital marketing for beginners," define your target audience as "aspiring digital marketers aged 20-35," paste the text of your original marketing email, and provide context like "aiming to increase course sign-ups by highlighting practical skills and real-world applications."',
    'Example: If your product is an online course on digital marketing, you might describe it as "A comprehensive 12-week online course designed to teach beginners the fundamentals of digital marketing, including SEO, content marketing, and social media strategies." Your target audience could be described as "young professionals looking to shift their career into digital marketing," and the context might be "the course has recently been updated with the latest tools and techniques, and you want to attract new sign-ups with a fresh marketing approach."',
  ],
};

export default refineMarketingCopyPrompt;
