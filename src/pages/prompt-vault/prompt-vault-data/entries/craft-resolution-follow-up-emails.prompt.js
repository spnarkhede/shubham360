const craftResolutionFollowUpEmailsPrompt = {
  emoji: '🪡',
  title: 'Craft Resolution Follow-Up Emails',
  description: 'Create personalized follow-up emails with this AI prompt, including resolution confirmation, prevention strategies, relationship building, and customer retention optimization.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Support',
    'Customer Experience',
    'Subscriptions',
    'Retention',
  ],
  views: 91,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `Adopt the role of an expert customer retention strategist and email communication specialist with deep expertise in post-resolution engagement, relationship nurturing, and churn prevention. You have spent over a decade designing follow-up communication frameworks for subscription businesses, service providers, and support-heavy organizations where the post-resolution touchpoint is the single highest-leverage moment for turning a frustrated customer into a loyal advocate.

##PHASE 1: Personal Acknowledgment

* Opening: Address the customer by name and reference their specific situation in natural language. Example: "Hi [Name], I wanted to personally follow up after the billing issue you dealt with last week."
* Research Needs: Gather the customer's name, issue details, and resolution specifics.
* User Input: None.
* Processing: Analyze the tone and details for personal acknowledgment.
* Output: Personalized introduction to the email with human connection.
* Transition: Confirm the resolution with specificity.

##PHASE 2: Resolution Confirmation

* Opening: Clearly state what was done to fix the problem and expected outcomes.
* Research Needs: Details on what was resolved and any customer history that informs the resolution.
* User Input: None.
* Processing: Identify the specifics of the resolution.
* Output: Specific details in the email confirming resolution.
* Transition: Bridge to prevention.

##PHASE 3: Prevention Recommendations

* Opening: Offer proactive guidance to prevent issue recurrence.
* Research Needs: Customer history and issue nature.
* User Input: None.
* Processing: Develop recommendations that are genuine and non-upselly.
* Output: Prevention guidance included in the email as valuable advice.
* Transition: Add a relationship-building element.

##PHASE 4: Relationship-Building Element

* Opening: Reference a specific element of the customer's journey.
* Research Needs: Customer history, usage milestones, or past interactions.
* User Input: None.
* Processing: Identify relevant historical elements for relational emphasis.
* Output: Transform email to relational with specific customer references.
* Transition: Close with an invitation to continue the conversation.

##PHASE 5: Conversation Invitation

* Opening: Provide a direct and low-friction invitation to continue the dialogue.
* Research Needs: Preparedness for continued customer interaction.
* User Input: None.
* Processing: Determine the most favorable method for ongoing engagement.
* Output: Closing invitation in the email.
   
**Output:**
   
Delivered email with subject line, full email body, and a brief parenthetical note explaining the strategic reasoning behind prevention recommendation and relationship-building element.`,
  whatItDoes: [
    'Guides through a five-step email drafting process that transforms support closures into relationship-building moments.',
    'Collects customer details including issue history, resolution specifics, account tenure, and brand tone preferences through structured intake.',
    'Delivers a personalized follow-up email with subject line, body copy, and strategic reasoning notes for retention impact.',
  ],
  tips: [
    'Review past support tickets and customer journey milestones before running this AI prompt to provide complete context that enables truly personalized messaging.',
    'Answer the customer history questions with specific dates, usage patterns, and emotional tone from previous interactions to help the AI prompt craft authentic relationship-building language.',
    'Test the generated email with your support team before sending, then create a template library organized by issue type to speed up future personalization while maintaining quality.',
  ],
  howToUse: [
    'Run the full prompt and provide detailed context for each field the AI prompt requests: customer name and tenure, the support issue and resolution details, relevant customer history including previous tickets and account information, and your brand\'s communication tone.',
    'Example: "Customer name: Sarah Chen, Customer for: 2 years, Issue and resolution: Billing error where she was charged twice for monthly subscription, refunded $49 within 24 hours, Customer history: Had one previous billing question 6 months ago, uses Premium tier, logs in daily, Brand tone: Warm and conversational with professional clarity"',
  ],
};

export default craftResolutionFollowUpEmailsPrompt;
