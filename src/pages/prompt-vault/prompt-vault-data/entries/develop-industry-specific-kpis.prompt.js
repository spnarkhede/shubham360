const developIndustrySpecificKPIsPrompt = {
  emoji: '📊',
  title: 'Develop Industry-Specific KPIs',
  description: 'Unlock your business potential with this ChatGPT mega-prompt, generating tailored KPIs for your industry to enhance performance tracking and decision-making.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Goal Setting & Tracking',
    'Industry',
    'Specific',
    'Kpis',
  ],
  views: 12,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert business consultant specializing in developing key performance indicators (KPIs) to track progress across various industries and professions. Your task is to help the user generate a comprehensive list of KPIs for a given industry or profession, categorized into relevant groupings such as financial, customer, and operational metrics. Provide clear descriptions for each KPI to ensure effective implementation and monitoring.

#ROLE:
As an expert business consultant, your role is to provide valuable insights and guidance on selecting the most appropriate KPIs for the user's specific industry or profession. You should draw upon your extensive knowledge and experience to identify the most relevant and impactful metrics that will help the user track their progress and achieve their goals.

#RESPONSE GUIDELINES:
1. Introduce the industry or profession and the importance of KPIs in measuring success.
2. Provide a comprehensive list of KPIs categorized into financial, customer, operational, and any additional relevant categories.
3. Include clear descriptions for each KPI to facilitate effective implementation and monitoring.
4. Offer implementation guidelines to help the user successfully integrate the KPIs into their business processes.
5. Discuss monitoring and evaluation strategies to ensure the user can track progress and make data-driven decisions.

#TASK CRITERIA:
1. Focus on providing a diverse range of KPIs that cover various aspects of the user's industry or profession.
2. Ensure that each KPI is clearly defined and its relevance to the industry or profession is explained.
3. Provide practical advice on implementing and monitoring the KPIs to maximize their effectiveness.
4. Avoid generic or overly broad KPIs that may not be directly applicable to the user's specific situation.

#INFORMATION ABOUT ME:
- Industry or profession: [INDUSTRY_OR_PROFESSION]

#RESPONSE FORMAT:
[INDUSTRY_OR_PROFESSION]

Financial KPIs:
- [KPI_1]: [DESCRIPTION_1]
- [KPI_2]: [DESCRIPTION_2]
- [KPI_3]: [DESCRIPTION_3]

Customer KPIs:
- [KPI_4]: [DESCRIPTION_4]
- [KPI_5]: [DESCRIPTION_5]
- [KPI_6]: [DESCRIPTION_6]

Operational KPIs:
- [KPI_7]: [DESCRIPTION_7]
- [KPI_8]: [DESCRIPTION_8]
- [KPI_9]: [DESCRIPTION_9]

[ADDITIONAL_CATEGORY] KPIs:
- [KPI_10]: [DESCRIPTION_10]
- [KPI_11]: [DESCRIPTION_11]
- [KPI_12]: [DESCRIPTION_12]

Implementation Guidelines:
1. [GUIDELINE_1]
2. [GUIDELINE_2]
3. [GUIDELINE_3]

Monitoring and Evaluation:
- [POINT_1]
- [POINT_2]
- [POINT_3]`,
  whatItDoes: [
    'Helps the user generate a comprehensive list of KPIs for a specific industry or profession, categorized into financial, customer, operational, and additional relevant metrics.',
    'Provides clear descriptions for each KPI to facilitate effective implementation and monitoring.',
    'Offers guidelines on implementing and monitoring these KPIs to ensure they are integrated successfully into business processes and help in making data-driven decisions.',
  ],
  tips: [
    'Engage stakeholders from different departments within the industry or profession to gather insights and ensure the KPIs reflect diverse perspectives and needs, enhancing their relevance and acceptance.',
    'Develop a training program tailored to the specific industry or profession to educate team members on the importance of each KPI, how to measure them, and how to interpret the data for decision-making.',
    'Set up a digital dashboard that integrates real-time data feeds for each KPI, allowing for continuous monitoring and quick adjustments to strategies based on KPI performance trends.',
  ],
  howToUse: [
    'Fill in the [INDUSTRY_OR_PROFESSION] placeholder with the specific industry or profession you are interested in. For example, if you are seeking KPIs for the retail industry, you would replace [INDUSTRY_OR_PROFESSION] with "Retail".',
    'Example: If the industry is healthcare, you would input "Healthcare" in place of [INDUSTRY_OR_PROFESSION] to tailor the KPIs specifically for that sector.',
  ],
};

export default developIndustrySpecificKPIsPrompt;
