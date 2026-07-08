const draftCustomerOnboardingEmailsPrompt = {
  emoji: '🪴',
  title: 'Draft Customer Onboarding Emails',
  description: 'Create warm welcome emails with this AI prompt, including onboarding messaging, next steps, customer reassurance, and personalized tone for new signups.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Brand Strategy',
    'Support',
    'Tickets',
    'Writing',
  ],
  views: 107,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `# CONTEXT:
Adopt the role of onboarding momentum architect. A new customer just crossed the signup threshold but hasn't taken their first real action yet. They're in the psychological danger zone—excited enough to commit, but vulnerable to buyer's remorse, distraction, or analysis paralysis. Competitors' emails are flooding their inbox. Their internal skeptic is asking "Did I make the right choice?" They need immediate validation and a frictionless path forward before the moment passes. Generic corporate communications have already trained them to ignore automated messages. You have one shot to feel human enough to break through while guiding them to that critical first experience that transforms a signup into an engaged user.

# ROLE:
You're a former therapist-turned-copywriter who spent five years studying the exact moment people abandon new commitments, discovered that the first 10 minutes after signup predict 80% of long-term retention, and now obsessively crafts onboarding emails that feel like a friend texting you exactly what to do next—not a corporation processing you through a funnel. Your mission: write a welcome email that makes a new customer feel seen, reassured, and gently pulled toward one clear next action. Before writing, think step by step: What emotion are they feeling right now? What doubt might be creeping in? What's the smallest action that creates the biggest momentum shift? How would I write this if it were going to my best friend?

# RESPONSE GUIDELINES:
This email must accomplish four psychological objectives in under 200 words:

**Section 1: The Human Greeting (15-25 words)**
- Goal: Break the "automated message" pattern instantly
- Create immediate warmth without corporate fakeness
- Acknowledge them as an individual, not a database entry

**Section 2: The Confirmation (30-50 words)**
- Goal: Eliminate confusion about what just happened
- Briefly validate their decision without overselling
- Confirm what they now have access to in plain language

**Section 3: The Single Next Step (40-60 words)**
- Goal: Remove all friction and decision fatigue
- Give ONE specific, achievable action (not a menu of options)
- Make it feel like the natural next move, not homework
- Create urgency without pressure

**Section 4: The Personal Close (20-35 words)**
- Goal: Establish human availability without corporate boilerplate
- Make support feel accessible, not like a ticket system
- End with something that sounds like a real person signing off

**Subject Line Requirements:**
- Must create curiosity or immediate value
- Avoid "Welcome to [Company]" or "Thanks for signing up"
- Should feel personal enough to open first

# TASK CRITERIA:

**What This Email Must Do:**
1. Sound like it came from a specific human on the team, not a marketing automation sequence
2. Eliminate the "what do I do now?" confusion that kills momentum
3. Create one clear path forward—no multiple CTAs competing for attention
4. Reassure without being needy or over-promising
5. Stay under 200 words total (excluding subject line)

**What to Avoid:**
- Generic corporate phrases: "We're thrilled to have you," "Don't hesitate to reach out," "Dear Valued Customer"
- Feature dumps or product tours in this first message
- Multiple calls-to-action that create decision paralysis
- Jargon, buzzwords, or industry-speak
- Anything that sounds like it was written by a committee
- Overly formal or overly casual extremes
- Apologies, disclaimers, or legal language
- Links to everything—just one clear next step

**What to Focus On:**
- The specific emotional state of someone who just committed but hasn't experienced value yet
- Making the next action feel inevitable and easy, not optional
- Tone that matches how a competent, warm colleague would actually write
- Specificity over vagueness (name the actual thing they signed up for)
- Building trust through clarity, not through claims

**Limitations:**
- Cannot exceed 200 words (body copy only)
- Must include exactly ONE primary call-to-action
- Cannot use more than one exclamation point in the entire email
- Must be scannable in under 30 seconds

# INFORMATION ABOUT ME:
- My product/service name: [INSERT PRODUCT/SERVICE NAME]
- My company name: [INSERT COMPANY NAME]
- My primary value proposition: [WHAT PROBLEM YOU SOLVE OR BENEFIT YOU PROVIDE]
- My desired first action for new users: [SPECIFIC NEXT STEP - e.g., "complete profile," "schedule onboarding call," "explore dashboard," "watch 2-minute tutorial"]
- My brand tone: [DESCRIBE YOUR BRAND VOICE - e.g., "friendly but professional," "witty and irreverent," "calm and reassuring"]
- My sender name (optional): [WHO THIS EMAIL SHOULD APPEAR FROM - e.g., "Sarah from [Company]," "The [Company] Team," your actual name]

# RESPONSE FORMAT:
Provide the complete email in standard email format:

**Subject Line:** [One compelling subject line]

**Email Body:**
[Full email text organized in natural paragraphs, not bullet points or sections. Should flow like an actual email a human would write. Include the call-to-action naturally embedded in the copy, not as a separate button or link (though you can indicate where a link/button would go). End with an appropriate sign-off and sender name.]`,
  whatItDoes: [
    'Creates a warm welcome email that new customers receive right after they sign up',
    'Confirms what the customer now has access to and gives one clear action to take next',
    'Uses a friendly and personal tone that makes the customer feel supported and ready to start',
  ],
  tips: [
    'Test multiple subject lines with your email platform to see which one drives the highest open rates, then use that insight to refine future welcome emails and improve first impressions.',
    'Send a follow-up email 2–3 days after the welcome message to check in on progress and gently guide customers who haven\'t taken the first action yet, keeping momentum alive without being pushy.',
    'Track which next step gets the most engagement from new customers and use that data to optimize your onboarding flow, ensuring the AI prompt consistently points users toward the action that drives the best results.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR BUSINESS NAME], [INSERT YOUR PRODUCT/SERVICE], [INSERT ONE SPECIFIC NEXT ACTION], and [INSERT SUPPORT CONTACT METHOD] placeholders with details about your company, what customers signed up for, the first step they should take, and how they can reach your team.',
    'Example: "My business name is CloudTask, my product is a project management tool for remote teams, the next action is \'create your first project board,\' and support contact is \'reply to this email or use the chat icon in your dashboard.\'"',
  ],
};

export default draftCustomerOnboardingEmailsPrompt;
