const craftOnboardingNotificationSequencesPrompt = {
  emoji: '🧭',
  title: 'Craft Onboarding Notification Sequences',
  description: 'Write engaging onboarding messages with this AI prompt, covering profile setup, feature highlights, milestone celebrations, tips, social proof, and support invitations.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Support',
    'Customer Experience',
    'Onboarding',
    'Brand Strategy',
  ],
  views: 208,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `Adopt the role of an expert mobile UX copywriter who spent years crafting micro-copy for billion-user platforms, obsessively A/B testing every word until you developed an instinct for what makes people tap without feeling manipulated. Your primary objective is to write a 7-day onboarding message sequence that guides new customers through key milestones in a conversational, non-pushy tone that feels like helpful nudges from a friend rather than marketing automation. You understand that modern users are hyper-aware of manipulation tactics and respond better to authentic, varied communication that respects their intelligence and autonomy.

#CONTEXT:
The user needs an onboarding sequence for customers who just downloaded their app or provided contact information. These users are in the critical first-week window where engagement patterns solidify. Previous generic messaging likely failed because it sounded robotic or overly enthusiastic. The challenge is driving specific actions across seven days without triggering notification fatigue, unsubscribes, or the dreaded "this feels spammy" reaction. Each message must work independently since open rates vary, while collectively building a relationship that increases product stickiness.

Craft seven distinct messages following this strategic progression: Day 1 prompts profile completion or initial setup, Day 2 highlights the core feature, Day 3 celebrates a small milestone, Day 4 shares a practical tip, Day 5 leverages social proof, Day 6 addresses common hesitation, and Day 7 invites deeper engagement. For each day, write the message text constrained to under 160 characters for SMS compatibility and under 100 characters for push notifications. Specify whether each message works best as SMS, push notification, or both formats. Vary your punctuation and energy levels across the sequence—avoid exclamation points in every message and eliminate overused phrases like "Don't miss out!" or "Act now!" that trigger marketing fatigue. Write each message to stand alone since customers may not see all previous messages. Focus on conversational language that sounds like a helpful human who genuinely wants them to succeed, not a marketing automation system checking boxes. Take a deep breath and work on this problem step-by-step.

#INFORMATION ABOUT ME:
My product description: [INSERT YOUR PRODUCT DESCRIPTION]
My key onboarding actions: [INSERT THE SPECIFIC ACTIONS YOU WANT NEW CUSTOMERS TO COMPLETE]
My product's main value proposition: [INSERT WHAT MAKES YOUR PRODUCT VALUABLE]
My target customer profile: [INSERT WHO YOUR TYPICAL NEW CUSTOMER IS]
My brand voice characteristics: [INSERT HOW YOUR BRAND COMMUNICATES - FORMAL, CASUAL, PLAYFUL, ETC.]

MOST IMPORTANT!: For each of the 7 days, provide the day number, the message text, character count, and a note specifying whether it works best as SMS, push notification, or both. Format your response with clear day-by-day sections for maximum readability.`,
  whatItDoes: [
    'Creates a 7-day sequence of onboarding messages for new app users or customers.',
    'Writes short, friendly push notifications or SMS texts that guide users through key product actions.',
    'Ensures each AI prompt-generated message feels personal and helpful without sounding pushy or automated.',
  ],
  tips: [
    'Test different message tones with small user segments before rolling out the full 7-day sequence to ensure your AI prompt generates copy that resonates with your specific audience.',
    'Track which day\'s message drives the highest engagement and adjust timing or content based on user behavior patterns to optimize your onboarding flow.',
    'Use the AI prompt output as a foundation, then personalize messages with user names or specific actions they\'ve taken in the app to increase relevance and response rates.',
  ],
  howToUse: [
    'Fill in the [DESCRIBE THE PRODUCT AND WHAT KEY ACTIONS YOU WANT NEW CUSTOMERS TO TAKE] placeholder with details about your app or service and the specific behaviors you want users to complete during onboarding.',
    'Example: "My product is a meditation app. Key actions I want new customers to take are: completing their profile with sleep and stress preferences, trying their first guided meditation, setting daily reminder times, and exploring different meditation categories."',
  ],
};

export default craftOnboardingNotificationSequencesPrompt;
