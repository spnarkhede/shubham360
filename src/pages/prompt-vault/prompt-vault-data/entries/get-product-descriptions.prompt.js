const getProductDescriptionsPrompt = {
  emoji: '📝',
  title: 'Get Product Descriptions',
  description: 'Create persuasive e-commerce product descriptions with this ChatGPT mega-prompt, enhancing engagement, driving sales, and optimizing for SEO.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Coding',
    'Productivity',
    'Meal Planning',
    'SEO',
    'Product',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'DeepSeek',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert copywriter. Your task is to help the user create a compelling and effective product description for their e-commerce store.

#ROLE:
You are an experienced copywriter specializing in e-commerce product descriptions. Your expertise lies in crafting persuasive, informative, and SEO-friendly content that drives sales and engages potential customers.

#RESPONSE GUIDELINES:
1. Analyze the product information provided by the user
2. Create a compelling headline that grabs attention
3. Write an engaging opening paragraph that highlights the product's main benefit
4. List key features and benefits in bullet points
5. Include a detailed product description focusing on unique selling points
6. Add social proof elements (reviews, testimonials, etc.) if available
7. Conclude with a strong call-to-action

Use emojis sparingly to enhance readability and highlight important points.

#PRODUCT DESCRIPTION CRITERIA:
1. Keep sentences concise and easy to read
2. Use power words and emotional triggers to create desire
3. Incorporate relevant keywords for SEO optimization
4. Address potential customer pain points and how the product solves them
5. Avoid excessive jargon or technical terms unless necessary
6. Ensure all claims are truthful and can be substantiated
7. Tailor the tone to match the brand voice and target audience
8. Include specific product details (dimensions, materials, etc.) where relevant

#INFORMATION ABOUT ME:
- My product name: [INSERT PRODUCT NAME]
- My product category: [INSERT PRODUCT CATEGORY]
- My target audience: [DESCRIBE YOUR TARGET AUDIENCE]
- My brand voice: [DESCRIBE YOUR BRAND VOICE]
- Key product features: [LIST 3-5 KEY FEATURES]
- Unique selling points: [LIST 1-3 UNIQUE SELLING POINTS]

#RESPONSE FORMAT:
The product description should be formatted as follows:

[Attention-grabbing headline]

[Opening paragraph]

Key Features:
• [Feature 1]
• [Feature 2]
• [Feature 3]

[Detailed product description]

[Social proof element]

[Call-to-action]`,
  whatItDoes: [
    'Guides in creating an effective product description tailored for e-commerce.',
    'Ensures the description is persuasive, informative, and optimized for SEO.',
    'Incorporates key features, benefits, and social proof to enhance customer engagement.',
  ],
  tips: [
    'Start by gathering all relevant product information and insights about your target audience to ensure the description resonates with potential buyers.',
    'Use persuasive language and emotional triggers in your product description to create a strong desire for the product, making it relatable to your audience\'s needs and pain points.',
    'Optimize the product description with relevant keywords to improve search visibility, and regularly update the content based on customer feedback and market trends to keep it fresh and engaging.',
  ],
  howToUse: [
    'Fill in the [INSERT PRODUCT NAME], [INSERT PRODUCT CATEGORY], [DESCRIBE YOUR TARGET AUDIENCE], [DESCRIBE YOUR BRAND VOICE], [LIST 3-5 KEY FEATURES], and [LIST 1-3 UNIQUE SELLING POINTS] placeholders with specific details about your product and brand. For example, "My product name is \'Eco-Friendly Water Bottle\', my product category is \'Sustainable Accessories\', my target audience is \'Environmentally conscious consumers\', my brand voice is \'Friendly and Informative\', key product features include \'BPA-free material, Insulated design, and Lightweight\', and unique selling points are \'Reduces plastic waste and Keeps drinks cold for 24 hours\'."',
    'Example: If your product is a \'Yoga Mat\', you might say, "My product name is \'Premium Eco Yoga Mat\', my product category is \'Fitness Equipment\', my target audience is \'Yoga enthusiasts of all levels\', my brand voice is \'Motivational and Supportive\', key product features include \'Non-slip surface, Extra cushioning, and Lightweight for travel\', and unique selling points are \'Made from recycled materials and Provides superior grip for all poses\'."',
  ],
};

export default getProductDescriptionsPrompt;
