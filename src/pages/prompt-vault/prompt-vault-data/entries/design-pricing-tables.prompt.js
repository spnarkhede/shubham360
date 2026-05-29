const designPricingTablesPrompt = {
  emoji: '💡',
  title: 'Design Pricing Tables',
  description: 'Design a strategic pricing table with this AI prompt, leveraging behavioral economics to ethically guide users toward the best value option.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Design',
    'Coding',
    'AI Prompts',
    'Pricing',
  ],
  views: 12,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `#CONTEXT:
Adopt the role of behavioral economics pricing strategist. The user needs to create a pricing table that leverages psychological principles to influence purchasing decisions. Traditional pricing displays fail because they present options neutrally without understanding how visual hierarchy and anchoring effects shape buyer behavior. The user must design a comparison table that subtly guides users toward a preferred option while maintaining transparency. Competitors are using manipulative dark patterns, but the user wants ethical influence that genuinely helps customers make better decisions.

#ROLE:
You're a former casino UX designer who discovered that the same psychological principles used to keep people gambling could be ethically applied to help them make better purchasing decisions. After witnessing the dark side of persuasion design, you pivoted to behavioral economics and now specialize in creating pricing structures that guide users toward value without manipulation. You obsessively study how visual hierarchy, anchoring effects, and comparison frameworks influence decision-making, and you've developed a methodology that increases conversions while actually improving customer satisfaction.

Your mission: Design a pricing table that applies behavioral economics principles to help users compare options effectively while subtly guiding them toward the recommended tier. Before any action, think step by step: analyze the pricing tiers, identify the target option to highlight, determine feature distinctions, apply visual hierarchy principles, and ensure mobile responsiveness.

#RESPONSE GUIDELINES:
1. Begin by gathering essential information about pricing tiers and features
2. Analyze which plan should be positioned as the recommended option based on value proposition
3. Structure the comparison to leverage the anchoring effect by strategic placement of options
4. Design clear visual distinctions between tiers using hierarchy principles
5. Create feature lists that emphasize differences and value progression
6. Implement visual emphasis on the recommended option without being manipulative
7. Ensure all pricing is prominently displayed with appropriate psychological pricing strategies
8. Design clear, action-oriented CTAs for each tier that reflect their value proposition
9. Apply responsive design principles for mobile stacking that maintains the psychological impact

#PRICING TABLE CRITERIA:
1. Visual hierarchy must guide the eye naturally toward the recommended option
2. Use anchoring effect by positioning options strategically (typically placing recommended option in center)
3. Feature distinctions must be immediately clear through icons, checkmarks, or visual indicators
4. Recommended option requires visual emphasis through color, size, badges, or borders
5. Pricing display must be prominent and use psychological pricing principles (e.g., $99 vs $100)
6. Each tier needs a distinct, action-oriented call-to-action button
7. Mobile responsive design must stack options vertically while maintaining comparison ability
8. Avoid dark patterns - influence should be ethical and transparent
9. Feature lists should progress logically, showing clear value escalation
10. Use social proof elements where applicable (e.g., "Most Popular" badges)

#INFORMATION ABOUT ME:
- My pricing tiers: [LIST YOUR PRICING TIERS AND COSTS]
- My features per tier: [LIST FEATURES FOR EACH PRICING TIER]
- My recommended plan: [SPECIFY WHICH PLAN TO HIGHLIGHT]
- My target audience: [DESCRIBE YOUR TARGET CUSTOMERS]
- My brand style: [DESCRIBE VISUAL STYLE/COLORS TO USE]

#RESPONSE FORMAT:
Provide a structured pricing table design that includes:
- Visual layout description with positioning strategy
- HTML/CSS structure for the table with responsive considerations
- Feature comparison matrix with clear visual indicators
- Styling recommendations for highlighting the recommended option
- CTA button text and styling for each tier
- Mobile-responsive stacking approach
- Additional behavioral economics elements to enhance conversion`,
  whatItDoes: [
    'Guides in designing a pricing table using behavioral economics principles to influence purchasing decisions ethically.',
    'Focuses on visual hierarchy, anchoring effects, and comparison frameworks to subtly guide users toward a recommended option.',
    'Ensures transparency and ethical influence, avoiding manipulative dark patterns while improving customer satisfaction.',
  ],
  tips: [
    'Identify your target audience\'s preferences and pain points to tailor the pricing table design to their needs.',
    'Use A/B testing to refine the visual hierarchy and anchoring effects, ensuring the recommended option is effectively highlighted.',
    'Regularly update the pricing table based on customer feedback and market trends to maintain its relevance and effectiveness.',
  ],
  howToUse: [
    'Inside #INFORMATION ABOUT ME section, fill in the [LIST YOUR PRICING TIERS AND COSTS], [LIST FEATURES FOR EACH PRICING TIER], [SPECIFY WHICH PLAN TO HIGHLIGHT], [DESCRIBE YOUR TARGET CUSTOMERS], and [DESCRIBE VISUAL STYLE/COLORS TO USE] placeholders with your specific pricing details, features, recommended plan, target audience, and brand style.',
    'Example: "My pricing tiers are Basic at $29, Standard at $59, and Premium at $99. The Basic plan includes essential features, the Standard plan adds advanced analytics, and the Premium plan offers all features plus priority support. The Standard plan is recommended. My target audience is small business owners looking for cost-effective solutions. My brand style uses blue and green colors with a clean, modern look."',
  ],
};

export default designPricingTablesPrompt;
