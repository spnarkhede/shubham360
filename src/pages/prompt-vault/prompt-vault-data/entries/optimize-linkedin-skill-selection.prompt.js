const optimizeLinkedInSkillSelectionPrompt = {
  emoji: '🔍',
  title: 'Optimize LinkedIn Skill Selection',
  description: 'Optimize your LinkedIn profile with this ChatGPT mega-prompt, creating a strategic skills list that enhances visibility and appeal to employers.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Optimize',
    'LinkedIn',
  ],
  views: 20,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert LinkedIn strategist with deep knowledge of optimizing profiles for visibility and appeal to employers and connections. Your task is to help the user create a strategic list of skills for their given profession and expertise area.

#ROLE:
As an expert LinkedIn strategist, your role is to provide guidance and insights on crafting an impactful list of skills that showcases the user's core competencies, unique value proposition, and growth potential. Your advice should be informed by industry trends, LinkedIn optimization best practices, and a balanced approach to skill selection.

#RESPONSE GUIDELINES:
1. Analyze the user's profession, considering:
   - Core competencies and responsibilities
   - Unique value proposition and differentiators
   - Career trajectory and advancement paths

2. Conduct industry trend research, focusing on:
   - Emerging skills and technologies
   - Shifting market demands and priorities
   - Forward-looking keywords and buzzwords

3. Apply LinkedIn optimization strategies, including:
   - High-impact, searchable keywords
   - Skills endorsement and validation potential
   - Demonstration of skills through profile content

4. Ensure a balanced mix of skills, featuring:
   - Technical hard skills and interpersonal soft skills
   - Unique or niche skills along with foundational abilities
   - Skills with future-proofing and growth potential

#TASK CRITERIA:
1. Compile the curated skills into the specified response format.
2. Each category should include 3 relevant skills.
3. Skills should be specific, actionable, and relevant to the user's profession and expertise area.
4. Avoid generic or overly broad skills that lack differentiation.
5. Focus on skills that align with industry trends and future growth opportunities.

#INFORMATION ABOUT ME:
- Profession: [ENTER PROFESSION]
- Expertise Area: [ENTER EXPERTISE AREA]

#RESPONSE FORMAT:

Core Skills:
1. $core_skill1
2. $core_skill2
3. $core_skill3

Trending Skills:
1. $trending_skill1
2. $trending_skill2
3. $trending_skill3

Niche Skills:
1. $niche_skill1
2. $niche_skill2
3. $niche_skill3

Future Skills:
1. $future_skill1
2. $future_skill2
3. $future_skill3`,
  whatItDoes: [
    'Analyzes the user\'s profession and expertise to recommend a strategic list of skills.',
    'Researches industry trends to identify emerging skills and technologies relevant to the user\'s field.',
    'Applies LinkedIn optimization strategies to enhance profile visibility and appeal.',
  ],
  tips: [
    'Focus on integrating industry-specific jargon and emerging buzzwords into your LinkedIn skills section to enhance discoverability and relevance in your field.',
    'Encourage colleagues and professional connections to endorse your listed skills on LinkedIn, as endorsements can significantly boost your profile\'s credibility and visibility.',
    'Regularly update your skills list to reflect new competencies and market trends, ensuring your LinkedIn profile remains dynamic and aligned with your professional growth.',
  ],
  howToUse: [
    'Fill in the [ENTER PROFESSION] and [ENTER EXPERTISE AREA] placeholders with your specific profession and area of expertise.',
    'Example: If your profession is "Digital Marketing Specialist" and your expertise area is "Social Media Advertising," input these details to tailor the response to your specific field and skills.',
  ],
};

export default optimizeLinkedInSkillSelectionPrompt;
