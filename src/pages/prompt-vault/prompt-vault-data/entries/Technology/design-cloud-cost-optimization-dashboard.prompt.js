const designCloudCostOptimizationDashboardPrompt = {
  emoji: '☁️',
  title: 'Design Cloud Cost Optimization Dashboard',
  description: 'Design a cloud cost optimization dashboard for FinOps teams that provides actionable insights to effectively manage and optimize cloud costs.** The dashboard should include the following components:** ## 1',
  type: 'Prompts',
  category: 'Technology',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-01-08',
  tags: [
    'Cloud',
    'Infrastructure',
    'Scalability',
    'Technology',
  ],
  views: 3,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'DeepSeek',
  ],
  prompt: `Design a cloud cost optimization dashboard for FinOps teams that provides actionable insights to effectively manage and optimize cloud costs.** The dashboard should include the following components:** ## 1. **Cost Overview**: *** Total Monthly Spend:** Display the total monthly cloud expenditure. *** Cost by Service:** Break down costs by cloud services (e.g., compute, storage, networking). *** Cost by Tag:** Show costs categorized by tags (e.g., department, project, environment). *** Cost by Region:** Highlight costs associated with different cloud regions. ## 2. **Anomaly Detection**: *** Cost Alerts:** Set up alerts for sudden spikes or unexpected increases in spending. *** Seasonality Analysis:** Identify recurring patterns and anomalies that deviate from these patterns. *** Threshold Alerts:** Trigger alerts when costs exceed predefined thresholds. ## 3. **Resource Utilization**: *** Idle Resources:** Identify underutilized or unused resources. * Right-**Sizing Recommendations:** Suggest optimal resource configurations based on usage patterns. *** Usage Trends:** Visualize trends in resource usage over time. ## 4. **Cost Optimization Suggestions**: *** Cost Savings Opportunities:** Provide actionable recommendations for reducing costs. *** Historical Cost Trends:** Show historical cost trends and forecasts. ## 5. **Interactive Features**: * Drill-**Down Capabilities:** Allow users to drill down into detailed cost breakdowns. *** Customizable Views:** Enable users to customize dashboard views based on their specific needs. *** Data Export:** Provide options to export data for further analysis. ## 6. **Integration and Automation**: *** Integration with Cloud Billing Systems:** Ensure seamless integration with cloud billing systems for real-time data. *** Automation of Cost Alerts:** Automate the process of sending alerts for cost anomalies. *** API Integration:** Allow for API integration to enable automation and scripting. ## 7. **User Interface and Experience**: * User-**Friendly Design:** Ensure the dashboard is intuitive and easy to navigate. * Real-**Time Updates:** Provide real-time updates to keep users informed about current costs. *** Mobile Accessibility:** Ensure the dashboard is accessible on mobile devices for on-the-go access. ## 8. **Security and Compliance**: *** Data Security:** Implement robust security measures to protect sensitive financial data. *** Compliance Reporting:** Include features for generating compliance reports as needed. ###** Example Use Case:** A FinOps team is aiming to reduce their cloud costs by 20% within the next quarter.** They need a dashboard that can:** * Identify cost anomalies and provide alerts for unexpected spikes. * Track resource utilization to identify idle or underutilized resources. * Suggest cost-saving opportunities based on historical data and usage patterns. ###** Steps to Design the Dashboard:** ## 1. **Define Objectives**: Clearly outline the goals of the dashboard, such as cost visibility, anomaly detection, and optimization suggestions. ## 2. **Data Collection**: Gather data from cloud billing systems and resource usage metrics. ## 3. **Data Analysis**: Analyze data to identify trends, anomalies, and optimization opportunities. ## 4. **Dashboard Design**: Create a user-friendly interface with interactive features and customizable views. ## 5. **Implementation**: Integrate the dashboard with cloud systems and automate cost alerts. ## 6. **Testing and Feedback**: Test the dashboard with a sample group and gather feedback for improvements. ## 7. **Deployment**: Deploy the dashboard to the FinOps team and provide training on its use. ## 8. **Monitoring and Maintenance**: Continuously monitor the dashboard's performance and make updates as needed. By following these steps and incorporating the key components outlined above, the dashboard will provide FinOps teams with the insights and tools they need to effectively manage and optimize cloud costs.`,
  whatItDoes: [
    'Cost Optimization Suggestions',
    'Integration and Automation',
    'User Interface and Experience',
  ],
  tips: [
    'Specify your cloud provider (AWS / Azure / GCP) at the start for provider-specific guidance.',
    'Mention regulatory requirements (GDPR, HIPAA) so the response can address compliance directly.',
    'Ask for a cost estimate breakdown when evaluating architecture decisions.',
  ],
  howToUse: [
    'Open ChatGPT or Claude and paste the prompt.',
    'Provide details about your current infrastructure, cloud provider preference, and compliance needs.',
    'Work through the framework section by section, requesting elaboration on complex areas.',
    'Use the output as the basis for a technical proposal or architecture review document.',
  ],
};

export default designCloudCostOptimizationDashboardPrompt;
