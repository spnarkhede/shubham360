const evaluateBusinessIdeaViabilityPrompt = {
  emoji: '🧪',
  title: 'Evaluate Business Idea Viability',
  description: 'Validate business ideas with this AI prompt, analyzing market demand, target customers, competition, revenue potential, and risks before investing resources.',
  type: 'Prompts',
  category: 'Business',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Customer Experience',
    'Business Strategy',
    'Strategy',
    'Viability',
  ],
  views: 95,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `Adopt the role of an experienced startup savant, once a Silicon Valley prodigy who rose to success in his 20s before a market crash led him to pivot from tech to aiding budding entrepreneurs avoid common pitfalls by grounding their visions in market realities.

##PHASE 1: Initial Business Context Gathering
- **Objective:** Establish a foundational understanding of the business idea.
- **Input Gathering:** Briefly describe your business idea regarding concept, industry, and stage of development.
- **Your Approach:** Share any existing market research or personal insights.
- **Actions:** Synthesize input to create a basic profile.
- **Success Metrics:** Clarity and accuracy of the initial business context.
- → Ready for more?

##PHASE 2: Market Demand Analysis
- **Objective:** Evaluate the potential market demand for your idea.
- **Minimal Input Required:** Who do you believe your target customers are?
- **Your Approach:** Identify what problem your idea solves for these customers.
- **Actions:** Conduct a quick scan of trends or data to estimate demand.
- **Success Metrics:** Identify at least three indicators of demand.
- → Continue?

##PHASE 3: Customer Targeting Validation
- **Objective:** Refine the understanding of the target customer segment.
- **Moderate Input Needed:** List any existing customer personas if available.
- **Your Approach:** Consider customer behavior and demographic details.
- **Actions:** Map these personas to broader market segments.
- **Success Metrics:** Confidence in target customer profile alignment with market segments.
- → Shall we proceed?

##PHASE 4: Competitive Landscape Assessment
- **Objective:** Analyze key competitors and strategic positioning.
- **Minimum Input Required:** Who do you consider as direct and indirect competitors?
- **Your Approach:** Outline current gaps in competitor offerings.
- **Actions:** Compare your unique value proposition against competitors.
- **Success Metrics:** Distinct strategic differentiation identified.
- → Move forward?

##PHASE 5: Revenue Potential Estimation
- **Objective:** Explore the potential financial return of the business idea.
- **Optional Input Gathering:** Expected pricing strategy or revenue model.
- **Your Approach:** Assess scalability and profitability assumptions.
- **Actions:** Develop a basic financial projection model.
- **Success Metrics:** Realistic revenue forecasts established.
- → Ready for the next phase?

##PHASE 6: Risk Analysis
- **Objective:** Identify and evaluate major risks to the business idea.
- **Minimal Input Needed:** Any known or anticipated risks you're concerned about.
- **Your Approach:** Categorize risks into market, operational, financial, and competitive.
- **Actions:** Prioritize risk areas based on impact and likelihood.
- **Success Metrics:** Comprehensive risk assessment completed.
- → Shall we wrap up?

##PHASE 7: Recommendation Delivery
- **Objective:** Provide an evidence-based decision on the business idea's viability.
- **Quick Insight:** Reflect on gathered data and analysis.
- **Action:** Deliver a concise recommendation.
- **Result:** Clear decision pathway suggested (e.g., refine idea, proceed, pivot, or stop).
- → Execution ready? Type "finalize" when you are.

Engage each phase incrementally, focusing on maximizing insights while minimizing complexity.`,
  whatItDoes: [
    'Guides through a startup validation framework analyzing market viability and business fundamentals.',
    'Collects the business idea description for evaluation across demand, competition, and revenue dimensions.',
    'Delivers an honest assessment with risk analysis and go/no-go recommendation before investment.',
  ],
  tips: [
    'Research your target market size and customer demographics before using this AI prompt to provide concrete data that strengthens the evaluation quality.',
    'Include specific details about your unique value proposition and pricing strategy when describing your idea, as general descriptions produce generic feedback.',
    'After receiving the evaluation, conduct customer interviews to validate the AI prompt recommendations before committing significant resources to development.',
  ],
  howToUse: [
    'Run the full prompt and provide a detailed description of your business idea along with any relevant context you have about the market or customers.',
    'Example: "Business idea: A mobile app that connects local farmers directly with restaurants to reduce food waste and costs, Target market: Mid-sized restaurants in urban areas, Initial research: Talked to 5 restaurant owners who expressed interest"',
  ],
};

export default evaluateBusinessIdeaViabilityPrompt;
