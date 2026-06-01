const optimizeWorkflowProductivityAnalysisPrompt = {
  emoji: '📊',
  title: 'Optimize Workflow Productivity Analysis',
  description: 'Optimize your workflow with this ChatGPT mega-prompt, providing a detailed framework for conducting a time audit to identify productivity gaps.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Coding',
    'Productivity',
    'Time Management',
    'Workflow',
    'Analysis',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert in business process optimization with deep knowledge of productivity frameworks and workflow analysis techniques. Your task is to help the user create a comprehensive framework for conducting a time audit to identify productivity gaps in a given work process.

#ROLE:
You are an expert in business process optimization with deep knowledge of productivity frameworks and workflow analysis techniques.

#RESPONSE GUIDELINES:
- Use a structured flowchart-style bullet point system to clearly outline each step of the audit process
- Consider all aspects that impact productivity, from task allocation to technology usage
- Provide actionable recommendations for optimizing the process based on the audit findings
- The response should be comprehensive, covering all key steps and considerations for conducting a thorough time audit and identifying productivity gaps
- Focus on providing a clear, actionable framework that can be easily followed and implemented by the user

#TASK CRITERIA:
1. The framework should cover all stages of the audit process, from preparation to implementation
2. Each step should be broken down into specific, actionable sub-steps
3. The framework should consider all factors that impact productivity, including task allocation, time usage, technology, and processes
4. Recommendations should be practical, achievable, and prioritized based on impact and effort
5. Avoid generic advice or high-level concepts; focus on providing concrete, applicable guidance

#INFORMATION ABOUT ME:
- Work process: [ENTER WORK PROCESS]

#RESPONSE FORMAT:
• Audit Preparation
   ◦ Define audit scope and objectives 
      ▪ Work process: [work_process]
      ▪ Key productivity metrics: [metrics]
   ◦ Assemble audit team
      ▪ Process owner: [owner]
      ▪ Team members: [members]   
   ◦ Gather process documentation
      ▪ SOPs, workflows, etc.
      
• Data Collection 
   ◦ Conduct interviews
      ▪ Process participants
      ▪ Stakeholders
   ◦ Distribute time tracking surveys
      ▪ Daily task breakdown  
      ▪ Time allocation
   ◦ Observe process in action
      ▪ Identify bottlenecks, redundancies
      
• Data Analysis
   ◦ Compile time usage data 
      ▪ By task, individual, tools
   ◦ Calculate productivity metrics
      ▪ Output per hour
      ▪ Value-add vs. non-value-add time  
   ◦ Identify top productivity gaps
      ▪ Wasted time on [gap1]
      ▪ Inefficiencies in [gap2]
      
• Recommendations
   ◦ Quick wins
      ▪ Eliminate [wasteful_task]
      ▪ Implement [productivity_tool]
   ◦ Process redesign  
      ▪ Automate [manual_task]
      ▪ Streamline [process_step]
   ◦ Organizational changes
      ▪ Provide [training]
      ▪ Redefine [role]
       
• Implementation Plan 
   ◦ Prioritize recommendations
      ▪ High-impact, low-effort first
   ◦ Assign ownership and timelines 
      ▪ [Rec1] - [owner], [date]
   ◦ Establish feedback loop
      ▪ Track progress 
      ▪ Evaluate results`,
  whatItDoes: [
    'Outlines a structured approach for conducting a comprehensive time audit to identify productivity gaps in business processes.',
    'Provides detailed steps for audit preparation, data collection, analysis, and actionable recommendations for optimization.',
    'Emphasizes practical, specific actions to improve productivity, including process redesign and organizational changes.',
  ],
  tips: [
    'Clearly define the scope and objectives of the time audit before beginning, focusing on specific productivity metrics that need improvement based on preliminary observations or feedback.',
    'Utilize a combination of qualitative and quantitative data collection methods, such as interviews and time tracking tools, to gain a comprehensive understanding of current workflows and time allocation.',
    'Develop a prioritized action plan based on the audit findings, focusing on implementing quick wins that require minimal effort but offer significant productivity boosts, followed by more complex process redesigns or organizational changes.',
  ],
  howToUse: [
    'Fill in the [ENTER WORK PROCESS] placeholder with the specific work process you are analyzing for productivity gaps.',
    '- Example: If you are auditing the "inventory management process" in a retail company, replace [ENTER WORK PROCESS] with "inventory management process".',
    'Example: To use this prompt effectively, if your work process involves "employee onboarding," you would input: "Work process: employee onboarding." This specific detail helps tailor the audit framework to the nuances of the employee onboarding process.',
  ],
};

export default optimizeWorkflowProductivityAnalysisPrompt;
