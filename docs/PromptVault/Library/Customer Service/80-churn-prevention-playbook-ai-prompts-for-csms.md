---
id: 80-churn-prevention-playbook-ai-prompts-for-csms
---

# 🛡️ Churn Prevention Playbook AI Prompts for CSMs

> **TL;DR**: Churn risk is synthesized, not spotted — individual signals are weak, their combination predicts churn. AI helps CSMs combine signals, prioritize attention, and have the conversations that prevent churn before renewal becomes cancellation. The goal: surface insights that inform human decisions that save accounts.

---

## 📝 Prompt 1. Churn Risk Signal Synthesis

**Use Case**: You have an account with mixed signals — some good, some bad. You need AI to combine ALL signals (usage, support, engagement, relationship, financial) into one clear risk assessment with a confidence level and recommended first action.

**Target Personas**: Customer Success Managers, CSM Team Leads, RevOps Analysts

**Tags**: `risk-synthesis`, `churn-signals`, `multi-signal-analysis`, `account-health`

**Prompt**:
```
I need to synthesize churn risk signals for [ACCOUNT NAME].

ACCOUNT CONTEXT:
- Industry: [INDUSTRY]
- ARR: [AMOUNT]
- Customer since: [DATE]
- CSM: [NAME]
- Primary contact: [NAME AND TITLE]
- Champion: [NAME AND TITLE]

USAGE SIGNALS:
- Product adoption score (last 30 days): [SCORE]
- Product adoption score (90 days ago): [SCORE]
- Feature usage trend: [INCREASING / DECREASING / FLAT]
- Core feature usage: [ACTIVE / PARTIAL / NEGLECTED]
- Power users: [COUNT AND TREND]

SUPPORT SIGNALS:
- Open tickets: [COUNT]
- Ticket sentiment trend: [IMPROVING / WORSENING]
- Escalated tickets: [COUNT AND TOPICS]
- Time to resolution average: [DAYS]
- Recurring ticket topics: [TOPICS]

ENGAGEMENT SIGNALS:
- Last QBR date: [DATE]
- QBR completion rate: [PERCENTAGE]
- Emails opened (last 30 days): [PERCENTAGE]
- Executive sponsor engagement: [HIGH / MEDIUM / LOW]
- References given: [YES/NO]

RELATIONSHIP SIGNALS:
- Relationship score (internal estimate): [1-10]
- Escalations to leadership: [YES/NO]
- References requested recently: [YES/NO]
- Competitive intelligence mentioned: [YES/NO]

FINANCIAL SIGNALS:
- Payment history: [ON TIME / DELAYED / OVERDUE]
- Renewal date: [DATE]
- Expansion history: [EXPANDED / CONTRACTION / FLAT]
- Invoice disputes: [YES/NO AND TOPICS]

RISK SIGNAL SYNTHESIS:

Pattern 1 — USAGE DECAY → CHURN:
"If [USAGE DECAY] combined with [SUPPORT TICKETS], then
[CHURN PROBABILITY]."

Pattern 2 — RELATIONSHIP EROSION → CHURN:
"If [CHAMPION DEPARTURE] combined with [LOW ENGAGEMENT], then
[CHURN PROBABILITY]."

Pattern 3 — VALUE MISALIGNMENT → CHURN:
"If [FEATURE NEGLECT] combined with [NO QBR], then
[CHURN PROBABILITY]."

OVERALL RISK ASSESSMENT:
Risk Level: [CRITICAL / HIGH / MEDIUM / LOW]
Confidence in assessment: [HIGH / MEDIUM / LOW]
Primary risk driver: [WHAT IS DRIVING RISK]
Secondary risk driver: [WHAT IS CONTRIBUTING]

Most important intervention: [WHAT TO DO FIRST]
```

---

## 📝 Prompt 2. At-Risk Account Profile Identification

**Use Case**: Not all at-risk accounts look the same. You need to match your account against known churn profiles (Power User Who Stopped, Executive Disengaged, Misaligned Buyer, Competitive Takeover) so you know which save approach will actually work.

**Target Personas**: Customer Success Managers, CSM Team Leads, VP of Customer Success

**Tags**: `at-risk-profiles`, `churn-archetypes`, `save-difficulty`, `pattern-matching`

**Prompt**:
```
I need to identify the at-risk profile patterns for accounts
similar to [ACCOUNT NAME].

ACCOUNT TYPE: [SMB / MID-MARKET / ENTERPRISE]
INDUSTRY: [INDUSTRY]
USE CASE: [HOW THEY USE THE PRODUCT]

CHURNED ACCOUNT PROFILES IN THIS SEGMENT:

Profile A — The Power User Who Stopped:
Warning signs:
- Usage dropped [X]% over [PERIOD]
- Last login date: [DATE]
- Active users decreased from [X] to [Y]
- Feature usage shifted from [FEATURE] to [FEATURE]
- Support tickets increased: [TOPICS]

Save difficulty: [EASY / MODERATE / HARD]
Why: [REASONING]
Effective save approach: [APPROACH]

Profile B — The Executive Disengaged:
Warning signs:
- QBRs declined or canceled
- Executive sponsor changed
- Communication frequency dropped
- Renewals handled by procurement, not business owner
- References not provided when asked

Save difficulty: [EASY / MODERATE / HARD]
Why: [REASONING]
Effective save approach: [APPROACH]

Profile C — The Misaligned Buyer:
Warning signs:
- Product used for different purpose than sold
- Key use case not addressed by current plan
- ROI never formally established
- Champion cannot justify value to leadership
- Budget scrutiny

Save difficulty: [EASY / MODERATE / HARD]
Why: [REASONING]
Effective save approach: [APPROACH]

Profile D — The Competitive Takeover:
Warning signs:
- Competitive solution evaluated
- "Exploring alternatives" mentioned
- Contact from competitor to champion
- Renewal pushed or delayed without clear reason
- Pricing objections escalated

Save difficulty: [EASY / MODERATE / HARD]
Why: [REASONING]
Effective save approach: [APPROACH]

FOR [ACCOUNT NAME]:

Which at-risk profile fits best? [PROFILE]
Risk factors matching this profile:
- [FACTOR]: [EVIDENCE]
- [FACTOR]: [EVIDENCE]

Risk factors NOT matching this profile:
- [FACTOR]: [WHY THIS DIFFERS]

What early warning signs should we have caught?
```

---

## 📝 Prompt 3. Reengagement Conversation Preparation

**Use Case**: You need to prepare for a reengagement call that is NOT a QBR. This is a different conversation with a different goal. Use this to get the opening, structure, objection responses, and hard-conversation frameworks ready before you dial.

**Target Personas**: Customer Success Managers, Account Managers, CSM Team Leads

**Tags**: `reengagement`, `conversation-prep`, `objection-handling`, `save-conversation`

**Prompt**:
```
I need to prepare for a reengagement call with [ACCOUNT NAME].

ACCOUNT STATUS:
- Days since last meaningful conversation: [NUMBER]
- Current health score: [SCORE]
- Stated status: [WHAT THEY SAID]
- Actual status: [WHAT DATA SHOWS]

REENGAGEMENT GOAL:
What we want to accomplish: [GOAL]
What they want to accomplish: [WHAT WE THINK THEY WANT]
What both parties need: [ALIGNMENT]

CALL FRAMING:

How to open (do not start with status update):
"We have not connected in a while and I wanted to make sure
we are set up for success this quarter. I have some thoughts
I wanted to share and I would love to hear how things are
going from your perspective."

What not to open with:
- "I noticed your usage has declined..."
- "I wanted to check in on the renewal..."
- "I have some updates to share..."

CALL STRUCTURE:

Section 1 — LISTEN FIRST (First 10 minutes):
Questions to understand their situation:
1. "How are things going with [THEIR PRIORITY]?"
2. "What is top of mind for your team right now?"
3. "What is working well that we should keep doing?"
4. "What is not working that we should fix?"

What to listen for:
- [SIGNAL 1]
- [SIGNAL 2]
- [SIGNAL 3]

Section 2 — SHARE PERSPECTIVE (5 minutes):
Share relevant insights without blame:
"I wanted to share some patterns we are seeing that might be
helpful as you think about [THEIR GOAL]."

What to share:
- [INSIGHT]: [HOW TO PRESENT IT]
- [INSIGHT]: [HOW TO PRESENT IT]

Section 3 — COLLABORATE ON NEXT STEPS (10 minutes):
"How can we best support you in [THEIR PRIORITY]?"
"What would be most valuable for us to focus on?"
"What would success look like for you by [RENEWAL/QBR DATE]?"

COMMON OBJECTIONS AND RESPONSES:

Objection: "We are just too busy right now."
Response: [HOW TO RESPOND]

Objection: "Things are fine, I will reach out if I need something."
Response: [HOW TO RESPOND]

Objection: "We are evaluating other options."
Response: [HOW TO RESPOND]

HARD CONVERSATIONS:

If they say the product is not delivering value:
1. Acknowledge: "[HOW]"
2. Diagnose: "[QUESTIONS TO ASK]"
3. Reframe: "[HOW TO REFRAME VALUE]"
4. Path forward: "[WHAT TO OFFER]"

If they say the relationship is not working:
1. Acknowledge: "[HOW]"
2. Diagnose: "[WHAT SPECIFICALLY]"
3. Reframe: "[WHAT IS NEEDED]"
4. Path forward: "[WHAT WE CAN DO DIFFERENTLY]"

What is the single most important thing to accomplish on
this call?
```

---

## 📝 Prompt 4. Value Misalignment Reframing

**Use Case**: The product is delivering value, but the customer isn't seeing it. Use this to reframe the value narrative in terms the customer actually cares about — so you can save the account before they leave for a competitor.

**Target Personas**: Customer Success Managers, Product Managers, CSM Team Leads

**Tags**: `value-reframing`, `misalignment`, `reengagement`, `save-strategy`

**Prompt**:
```
I need to reframe the value narrative for [ACCOUNT NAME].

WHAT WE SELL: [PRODUCT/SERVICE]
WHAT THEY BOUGHT IT FOR: [ORIGINAL STATED GOAL]
WHAT THEY ARE ACTUALLY USING IT FOR: [CURRENT USE]

VALUE FRAMING PROBLEM:

Original value proposition: [WHAT WE PROMISED]
Current customer perception: [WHAT THEY THINK THEY GET]
Actual value being delivered: [WHAT DATA SHOWS THEY GET]

Where the gap exists:
- Gap 1: [MISALIGNMENT]
- Gap 2: [MISALIGNMENT]
- Gap 3: [MISALIGNMENT]

WHY THIS GAP EXISTS:

Possible explanations:
- [EXPLANATION 1]
- [EXPLANATION 2]
- [EXPLANATION 3]

What we might have missed in onboarding:
[WHAT TO REVIEW]

VALUE REALIGNMENT APPROACH:

Step 1 — Acknowledge the gap:
"I want to revisit how you are using [PRODUCT] because I
think there might be a gap between what you are getting and
what is possible."

Step 2 — Discover what matters most now:
"What has changed since we last talked about your goals?"
"What is the one thing you wish [PRODUCT] did better?"
"What does success look like for you in the next 90 days?"

Step 3 — Reframe around their current priorities:
Based on their current priorities, reframe value:
- Priority: [WHAT THEY SAID]
- Value angle: [HOW PRODUCT HELPS THIS]
- Specific example: "[STORY OR METRIC]"

Step 4 — Propose a new success metric:
"What if we measured [NEW METRIC] instead of [OLD METRIC]?
Based on what you told me, that would show [BENEFIT]."

Step 5 — Set new baseline:
"Let us establish a new starting point so we can track
progress against what matters to you now."

REFRAMING TALKING POINTS:

For [STATED CONCERN], reframe:
Original: "[HOW WE FRAMED IT]"
New frame: "[HOW TO REFRAME IT]"
Why new frame works: "[REASONING]"

For [STATED CONCERN], reframe:
Original: "[HOW WE FRAMED IT]"
New frame: "[HOW TO REFRAME IT]"
Why new frame works: "[REASONING]"

What is the single most compelling reframe for this account?
```

---

## 📝 Prompt 5. Champion Loss Detection and Response

**Use Case**: Your champion just left. This is the #1 churn predictor. Use this to detect the loss, reconnect with the new owner, rebuild the relationship, and prevent silent churn before it's too late.

**Target Personas**: Customer Success Managers, CSM Team Leads, VP of Customer Success

**Tags**: `champion-loss`, `org-change`, `advocate-rebuild`, `silent-churn`

**Prompt**:
```
I need to address champion loss at [ACCOUNT NAME].

CHAMPION STATUS:
- Original champion: [NAME, TITLE]
- Departure date: [DATE OR SUSPECTED DATE]
- New owner: [NAME, TITLE]
- Relationship with new owner: [NEW / EXISTING / UNKNOWN]

WHAT CHAMPION LOSS TYPICALLY CAUSES:
- Engagement drops: [WHY]
- Renewals get complicated: [WHY]
- Competitive vulnerability increases: [WHY]
- Usage can drift: [WHY]

FOR [ACCOUNT NAME]:

What was the champion's role:
- Executive sponsor: [YES/NO]
- Primary user: [YES/NO]
- Internal champion: [YES/NO]
- Budget owner: [YES/NO]

What do we lose when this champion leaves:
- [RELATIONSHIP ASSET]
- [CONTEXT ASSET]
- [INTERNAL SUPPORT ASSET]

CHAMPION LOSS RESPONSE PLAN:

Phase 1 — Detect (Immediately):
How to confirm champion departure:
- "[OUTREACH QUESTION]"
- "[OUTREACH QUESTION]"

Who to target for confirmation:
- [CONTACT]: [WHY THIS PERSON]
- [CONTACT]: [WHY THIS PERSON]

Phase 2 — Reconnect (Within 1 week):
What to say to the new contact:
"I wanted to introduce myself since I understand [CHAMPION]
has moved on. I am the CSM for [ACCOUNT] and I want to make
sure you have everything you need."

What to learn from the new contact:
- Their role and priorities: [QUESTIONS]
- Their current perception of our product: [QUESTIONS]
- Their authority and influence: [QUESTIONS]

Phase 3 — Rebuild (1-4 weeks):
How to build relationship with new champion:
- [APPROACH 1]
- [APPROACH 2]
- [APPROACH 3]

How to transfer institutional knowledge:
- What the champion knew: [KNOWLEDGE TO TRANSFER]
- Who else knows it: [CONTACTS]
- How to preserve it: [METHOD]

Phase 4 — Reinforce (Ongoing):
How to make the new champion successful:
- Quick wins to identify: [WHAT]
- Executive alignment to establish: [HOW]
- Success metrics to agree on: [WHAT]

What is the biggest risk from this champion loss?
What is the fastest way to mitigate it?
```

---

## 📝 Prompt 6. Building the Save Plan

**Use Case**: The account is at risk. The reengagement call is done. Now you need a formal save plan with specific actions, owners, timelines, concessions, and escalation triggers — so the save is accountable, not just hopeful.

**Target Personas**: Customer Success Managers, CSM Team Leads, VP of Customer Success

**Tags**: `save-plan`, `account-recovery`, `action-plan`, `escalation-triggers`

**Prompt**:
```
I need to build a save plan for [ACCOUNT NAME].

ACCOUNT STATUS:
- Risk level: [CRITICAL / HIGH / MEDIUM]
- Risk drivers: [LIST]
- Days to renewal: [NUMBER]
- Account ARR: [AMOUNT]
- Strategic value beyond ARR: [STRATEGIC / STANDARD / AT-RISK]

SAVE OBJECTIVE:
Primary goal: [WHAT WE WANT TO ACHIEVE]
What success looks like: [MEASURABLE OUTCOME]
What failure looks like: [MEASURABLE OUTCOME]

SAVE PLAN COMPONENTS:

1. IMMEDIATE ACTIONS (This week):

Action 1: [ACTION]
Owner: [WHO]
Timeline: [DATE]
Success metric: [HOW WE KNOW IT WORKED]

Action 2: [ACTION]
Owner: [WHO]
Timeline: [DATE]
Success metric: [HOW WE KNOW IT WORKED]

2. SHORT-TERM ACTIONS (2-4 weeks):

Action 1: [ACTION]
Owner: [WHO]
Timeline: [DATE]
Success metric: [HOW WE KNOW IT WORKED]

Action 2: [ACTION]
Owner: [WHO]
Timeline: [DATE]
Success metric: [HOW WE KNOW IT WORKED]

3. RENEWAL PREP ACTIONS (Before renewal):

Action 1: [ACTION]
Owner: [WHO]
Timeline: [DATE]
Success metric: [HOW WE KNOW IT WORKED]

INTERNAL RESOURCES NEEDED:

To execute this save plan, we need:
- [RESOURCE 1]: [WHY NEEDED]
- [RESOURCE 2]: [WHY NEEDED]
- [RESOURCE 3]: [WHY NEEDED]

What we are willing to offer to save this account:
- [CONCESSION]: [WHAT WE WOULD OFFER]
- [CONCESSION]: [WHAT WE WOULD OFFER]
- [CONCESSION]: [WHAT WE WOULD OFFER]

RISK FACTORS:

What could derail this save plan:
1. [RISK]: Mitigation: [HOW]
2. [RISK]: Mitigation: [HOW]

ESCALATION TRIGGERS:

Escalate to VP/Executive level when:
- [TRIGGER 1]
- [TRIGGER 2]
- [TRIGGER 3]

Who should be informed of this save plan:
- [STAKEHOLDER]: [WHY]
- [STAKEHOLDER]: [WHY]

SAVE PLAN SUCCESS METRICS:

By [DATE], we need to see:
- Metric 1: [TARGET]
- Metric 2: [TARGET]
- Metric 3: [TARGET]

What percentage confidence do we have in saving this account?
[PERCENTAGE]: [REASONING]

Is the save plan worth the effort given the account value?
```

---

## 📝 Prompt 7. Measuring Save Effectiveness

**Use Case**: The save happened — but was it a real save or just a delayed churn? Use this to measure if the account is truly healthy or just temporarily patched, and capture lessons for future saves.

**Target Personas**: VP of Customer Success, CSM Team Leads, RevOps, Executives

**Tags**: `save-effectiveness`, `churn-measurement`, `lessons-learned`, `account-health`

**Prompt**:
```
I need to measure the effectiveness of the save plan for
[ACCOUNT NAME] and identify lessons for future saves.

SAVE PLAN EXECUTED:
Actions completed: [LIST]
Actions not completed: [LIST]
Concessions offered: [LIST]

IMMEDIATE OUTCOME:
- Renewal secured: [YES / NO / PARTIAL]
- Contract value: [AMOUNT]
- Contract length: [MONTHS]
- concessions required: [WHAT WAS GIVEN]

SHORT-TERM HEALTH (90 days post-renewal):
- Usage trend: [INCREASING / FLAT / DECREASING]
- Engagement trend: [IMPROVING / FLAT / DECLINING]
- Relationship score: [1-10]
- Open issues: [COUNT]

MEDIUM-TERM HEALTH (6 months post-renewal):
- Retention: [RETAINED / CHURNED]
- Expansion: [EXPANDED / FLAT / CONTRACTION]
- NPS if measured: [SCORE]
- Would they renew today: [YES / NO / MAYBE]

LONG-TERM HEALTH (12 months post-renewal):
- Still a customer: [YES / NO]
- NRR: [PERCENTAGE]
- References provided: [YES / NO]
- Advocacy behavior: [SIGNS]

SAVE QUALITY ASSESSMENT:

This save was:
- [PERMANENT SAVE]: They are committed and healthy
- [TEMPORARY SAVE]: They stayed but risk remains
- [CONCESSION BUY]: They renewed because of concessions, not value

Why this assessment: [REASONING]

SAVE EFFECTIVENESS ANALYSIS:

What worked in this save:
1. [APPROACH]: Why it worked: [REASONING]
2. [APPROACH]: Why it worked: [REASONING]

What did not work:
1. [APPROACH]: Why it did not work: [REASONING]
2. [APPROACH]: Why it did not work: [REASONING]

What we would do differently:
1. [CHANGE]: [WHY THIS WOULD BE BETTER]

PATTERN IDENTIFICATION FOR FUTURE SAVES:

Based on this save, update our at-risk profile guidance:
- New risk signal to watch: [WHAT]
- New save approach to try: [WHAT]
- New concession that works: [WHAT]

What is the most important lesson from this save?
```

---

## 💬 FAQ

| Question | Short Answer |
|----------|-------------|
| **What is the most reliable churn predictor?** | Champion loss + low executive engagement. Usage decline alone is less reliable — some accounts quietly plan to leave while usage looks fine. |
| **How early should CSMs intervene?** | At the FIRST risk signal, not when the account is visibly at risk. Early intervention = more options. Late intervention = concessions and firefighting. |
| **Should AI prompts be used DURING customer calls?** | No. Use AI to PREPARE: structure the conversation, anticipate responses, plan your reframe. Real-time AI responses feel robotic. Preparation is where AI adds value. |
| **How do you handle product-gap churn?** | Acknowledge directly. Don't defend. Addressable gaps → offer timeline, connect to PM, discuss workarounds. Unaddressable gaps → be honest, help them find a better fit. |
| **What's the right escalation level?** | Escalate when YOUR authority can't resolve it. Pricing concession only a VP can approve? Escalate before the renewal call. Don't wait until renewal day. |
| **How do you prioritize multiple at-risk accounts?** | By ARR + salvageability, not ARR alone. A medium-ARR account with a fixable issue gets aggressive investment. A high-ARR account that's nearly lost gets realistic expectations. Goal: maximize total ARR saved. |
| **How do you prevent save fatigue in CSM teams?** | Track save success rates, celebrate saves publicly, invest in product fixes that prevent churn, and cap how many saves one CSM owns. CSMs in permanent save mode burn out and make worse saves. |

---

## 🔑 Key Takeaways

| # | Insight |
|---|---------|
| 1 | **Churn risk is synthesized, not spotted.** Individual signals are weak. Their combination predicts churn. |
| 2 | **The reengagement call is NOT a QBR.** Different goal, different opening, different structure. Open with curiosity, not status updates. |
| 3 | **Champion loss is the #1 churn predictor.** When your advocate leaves, the new owner has no emotional investment in your success. Act within 1 week. |
| 4 | **Value misalignment is the most salvageable churn cause.** The product works — they just don't see it. Reframe, don't defend. |
| 5 | **The save plan makes saving accountable.** Specific actions, owners, timelines, concessions, escalation triggers. No hope — just execution. |
| 6 | **Not all saves are real saves.** Measure effectiveness at 90 days, 6 months, and 12 months. A concession buy is not a win. |
| 7 | **AI prepares the CSM to make the save.** It doesn't make the save. It surfaces insights that inform the human decisions that save accounts. |

---

## ⚠️ Common Pitfalls to Avoid

| Pitfall | Why It Hurts | Fix |
|---------|-------------|-----|
| **Opening with "I noticed your usage declined..."** | Triggers defensiveness immediately. They shut down. | Open with: "We haven't connected in a while — want to hear how things are going from your perspective." |
| **Waiting until renewal to escalate** | Too late. By renewal day, you're negotiating, not saving. | Escalate proactively when you need authority you don't have. |
| **Defending the product when it has gaps** | Destroys trust. Customers leave faster when you deny reality. | Acknowledge gaps directly. Offer workarounds or help them find a better fit. |
| **Treating all saves the same** | A temporary save looks like a win but churns in 6 months. | Measure save quality at 90/180/365 days. Classify as Permanent / Temporary / Concession Buy. |
| **CSM owns too many saves** | Save fatigue → worse saves → burnout → more churn. | Cap saves per CSM. Celebrate wins. Invest in prevention, not just firefighting. |
| **Using AI during live calls** | Customers feel the difference. It kills trust. | Use AI only for prep. During calls, be human. |

---

> 📌 **Save this file. Copy any prompt. Paste your account data. Get a clear, actionable save plan in seconds — before churn becomes cancellation.**