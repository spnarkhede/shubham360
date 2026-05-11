# Chapter 10 — Soft Skills and Technical Leadership
## Communication, Mentorship, Influence, and the Human Side of Architecture

> Stage 4–5 | Technical excellence + human skills = real impact

---

## Chapter Overview

Technical skills get you to Staff Engineer. Human skills determine your impact at that level and beyond. This chapter covers the communication frameworks, leadership patterns, and influence techniques that separate engineers who are technically brilliant from engineers who actually change how their organizations build software.

```
Chapter 10 Map

  10.1 Communication frameworks
   ├── SBI for feedback and disagreement
   ├── Radical Candor
   └── Running effective technical discussions

  10.2 Introducing new technology
   ├── The 4-phase process (Spike → PoC → Pilot → Rollout)
   └── Handling resistance

  10.3 Influence without authority
   ├── Radiating intent
   ├── The RFC process
   └── Building technical credibility

  10.4 Mentoring and growing engineers
   ├── Structured 1:1 mentorship
   ├── Code review as teaching
   └── Sponsorship vs mentorship

  10.5 Navigating organizational dynamics
   ├── Stakeholder mapping
   ├── DACI decision framework
   └── Handling technical disagreements
```

---

## 10.1 Communication Frameworks

### 10.1.1 SBI — Situation, Behavior, Impact

SBI is the sentence-level tool for giving specific, actionable feedback without personal attacks.

```
Structure:
  Situation  → the specific time and place
  Behavior   → the observable action (no interpretation, no motive-assignment)
  Impact     → the concrete consequence on people or outcomes

Formula:
  "In [situation], when you [behavior], [impact]."

Examples:

  Feedback on a code review interaction:
  "In last Tuesday's PR review for the checkout feature,
   when you left 15 comments without any positive observations,
   two engineers on the team told me they felt demoralized going into the sprint."

  Feedback on an architecture proposal:
  "In yesterday's architecture review,
   when you proposed adding Redux without presenting any trade-off analysis,
   the team spent 3 hours researching it — time we did not have before the deadline."

  Positive SBI (equally important):
  "In this morning's guild meeting,
   when you walked through the performance budget analysis with live data,
   three engineers immediately started applying the same methodology in their PRs."

What SBI prevents:
  ✗ "You always dismiss other people's ideas." (generalization)
  ✗ "You were being arrogant." (character judgment)
  ✗ "You clearly don't care about team velocity." (motive attribution)
```

### 10.1.2 Radical Candor (Kim Scott)

```
Two dimensions:
  Care Personally  → do you genuinely care about this person's growth?
  Challenge Directly → are you willing to say the hard thing?

                   HIGH CHALLENGE
                         │
   Obnoxious             │        Radical
   Aggression            │        Candor
   (challenge w/o care)  │        (goal)
                         │
──────────────────────── │ ──────────────────── CARE
   Low care              │          High care
                         │
   Manipulative          │        Ruinous
   Insincerity           │        Empathy
   (neither)             │        (care w/o challenge)
                         │
                   LOW CHALLENGE

Ruinous Empathy is the most common failure mode for technically strong
engineers who become leads: they care about teammates but avoid hard
conversations to protect feelings in the short term — which causes
larger problems over weeks and months.

Obnoxious Aggression is the second most common: direct feedback
without evident care for the person receiving it. Creates fear,
not growth.

Radical Candor = SBI (the delivery tool) + genuine care (the mindset).
```

### 10.1.3 Running Effective Technical Discussions

```
Before the meeting:
  → Pre-read required: share the ADR draft or design doc 48 hours ahead
  → Define the decision type upfront: "We are deciding on X today"
  → Set a timer: most architecture decisions can be made in 60 minutes
    with the right preparation

During the meeting:
  → State the problem before presenting solutions
    "Does everyone agree this is the problem we are solving?"
    Get agreement here before any solution is proposed
  → Use "yes, and" before "but" — build on ideas before critiquing
  → Separate data from opinion:
    "The data shows X" vs "I believe X" — both valid, but different weights
  → Call out blocking vs non-blocking concerns explicitly:
    "This is a blocking concern for me: ..."
    "This is a preference, not a blocker: ..."

After the meeting:
  → Decision documented in ADR within 24 hours
  → Decision shared with everyone affected, not just attendees
  → Clear owner for the next action
  → "Disagree and commit" stated explicitly if applicable
    "I disagree with this decision, but I commit to implementing it."
    This is healthy and normal. Silence is not consent.
```

---

## 10.2 Introducing New Technology

### 10.2.1 The 4-Phase Process

```
Phase 1: Spike (1–3 days, timeboxed)
─────────────────────────────────────
Purpose: answer "does this technology solve the problem?"
Output: written spike report (300–500 words)
Questions to answer:
  → What problem does it solve that our current approach cannot?
  → What are the constraints (license, performance, bundle size)?
  → What would migration look like (estimate: days, not hours)?
  → What risks did we find?

Rules:
  → No production code
  → No "proof of concept" that becomes production code
  → Timeboxed: if it takes more than 3 days, scope the spike down

Phase 2: Proof of Concept (1–2 weeks)
──────────────────────────────────────
Purpose: demonstrate technical viability in a realistic context
Output: working code + written findings + a go/no-go recommendation
What makes a good PoC:
  → Built against real production data shapes (not dummy data)
  → Tested under real team constraints (who will maintain this?)
  → Performance measured, not assumed
  → The "unhappy paths" are explored, not just the happy path

Phase 3: Pilot (1–3 months, one real project)
──────────────────────────────────────────────
Purpose: validate in production with bounded blast radius
Output: measured outcomes + team retrospective
Criteria for a good pilot project:
  → Real project with real users (not internal-only)
  → One team that is willing to be early adopters
  → Clear success metrics defined BEFORE the pilot begins
  → An explicit go/no-go review at the end

Phase 4: Rollout (incremental, structured)
──────────────────────────────────────────
Purpose: bring the rest of the organization along
Output: adoption across teams
Activities:
  → Write the migration guide (existing projects + new projects)
  → Run a workshop or recorded demo
  → Create a Slack channel or guild thread for questions
  → Add the technology to the Tech Radar (ADOPT ring)
  → Update starter templates and generators
  → "Add friction to the old way" (Tanya Reilly):
    deprecate the old pattern, add ESLint warnings for it
```

### 10.2.2 Handling Resistance

```
Common types of resistance and responses:

1. "We tried something similar before and it failed."
   Response: "Tell me what happened. What specifically caused the failure?
   Let me show you how this addresses those specific root causes."
   → Acknowledge the history. Show the diff.

2. "We don't have time for this."
   Response: "I agree — adoption needs to fit into normal sprint work.
   The pilot requires 2 days from one team. The rollout is opt-in.
   No one is blocked from shipping features."
   → Make the cost concrete and small.

3. "Why not just use [alternative]?"
   Response: "I evaluated [alternative] in the spike. Here are the
   trade-offs: [specific comparison]. I'd welcome a deeper look if
   you see something I missed."
   → Welcome scrutiny. Show your work.

4. "The team won't learn another tool."
   Response: "The PoC showed that engineers who haven't seen this before
   were productive within 2 days. The learning cost is real but one-time.
   The ongoing productivity gain is permanent."
   → Quantify the learning curve.

5. Silent resistance (the most dangerous)
   Response: Name it explicitly in the meeting:
   "I want to make sure everyone has a chance to raise concerns.
   If there are concerns you haven't shared, now is the time."
   After the meeting: 1:1 with the quiet people.
```

---

## 10.3 Influence Without Authority

### 10.3.1 Radiating Intent (Tanya Reilly)

```
What it means: work in the open before decisions are made.

In practice:
  → Share RFC drafts in progress, not after they are finished
  → Post design doc links in Slack when you start writing, not when complete
  → Share your reasoning for decisions, not just the decisions
  → Announce what you are thinking about at guild meetings
  → Ask for feedback on direction, not just on execution

Why it works:
  → People who feel informed do not feel excluded
  → Informed people give better feedback earlier (when it costs less)
  → Transparent reasoning builds trust over time
  → "You went off and decided this without us" complaints disappear

What it is NOT:
  → Asking for permission for every decision
  → Waiting for consensus before starting work
  → Sharing so much information that people tune out
  The signal-to-noise ratio matters.
```

### 10.3.2 The RFC Process

```
RFC (Request for Comments) structure:

Header:
  RFC-042: Adopt Zustand for Client UI State Management
  Author: Shubham Narkhede
  Date: 2026-03-10
  Status: OPEN for comments until 2026-03-24

Problem Statement (1–2 paragraphs)
  → Describe the problem without solution language
  → "We have 6 different patterns for managing UI state across 4 teams.
     This inconsistency increases the review burden and onboarding time."

Options Considered (table or list)
  Option A: Continue with no standard (status quo)
  Option B: Adopt Zustand
  Option C: Adopt Redux Toolkit
  Option D: Adopt Jotai

Option Analysis (honest trade-offs for each)
  → Do not write a sales pitch for your preferred option
  → Show the real costs of the recommended option

Recommendation
  → Clear statement: "I recommend Option B"
  → Justification linked to requirements, not preference

Risks and Mitigations

Open Questions (invite specific input)
  → "Question for security team: does Zustand's persist middleware
     comply with our data classification policy for session data?"
  → "Question for mobile team: does this affect the React Native apps?"

Decision (filled in after comment period)
  → Who made the decision and when
  → Which option was chosen
  → What drove the final choice if it differed from recommendation

RFC Rules:
  → Comment deadline is firm (2 weeks typical)
  → Late comments are welcomed but do not reopen the decision
  → Every comment gets a response (even if just "acknowledged")
  → Decision is captured in an ADR linked from the RFC
```

### 10.3.3 Building Technical Credibility

```
Credibility is built slowly and lost quickly. Tactics that work:

1. Be right about technical predictions in public
   → When you predict a problem 3 months in advance and it happens,
     people remember. When you are wrong, own it publicly.

2. Show up on cross-cutting concerns
   → Review PRs that are not in your team's scope (security, performance, a11y)
   → Engineers remember "the architect caught that injection vulnerability"

3. Sponsor other engineers' good ideas
   → "This is [name]'s idea — I think it deserves broader consideration"
   → Sponsorship is different from mentorship: you use your credibility
     to amplify their work, not to teach them

4. Publish internal artifacts
   → Guild presentation slides shared in the wiki
   → Blog posts in the internal engineering blog
   → Stacks Overflow or internal Q&A answers

5. Solve problems others cannot
   → The "solver" archetype (Will Larson): engineers come to you with
     the hardest problems and you unblock them
   → This is the most direct form of credibility-building
```

---

## 10.4 Mentoring and Growing Engineers

### 10.4.1 Structured Mentorship

```
1:1 Mentorship Framework (30 min bi-weekly):

Week 1–2: Diagnose
  → "What are you working on that excites you?"
  → "What are you working on that frustrates you?"
  → "Where do you want to be in 18 months?"
  → Listen 80%, talk 20%

Week 3–4: Set a focus area
  → Choose ONE skill or knowledge gap to develop together
  → Define what "good" looks like (a concrete output they will produce)
  → "In 6 weeks, you will have delivered [X] at a quality level that
     demonstrates [skill]."

Ongoing: Bounded visible work
  → Assign progressively harder problems within their stretch zone
  → Give feedback using SBI immediately after key events
  → Publicly credit good work in PRs, Slack, and meeting summaries

Signs of good mentoring:
  ✓ Engineer solves problems independently that they could not before
  ✓ Engineer articulates their own reasoning, not just executes your instructions
  ✓ Engineer starts mentoring more junior engineers

Signs of poor mentoring (common traps):
  ✗ Solving problems for them instead of guiding them to solve
  ✗ Vague praise ("good job") with no specific feedback
  ✗ Only meeting during crises, not proactively
```

### 10.4.2 Code Review as Teaching

```
The review comment spectrum:

Level 1: Blocking — must change before merge
  "This pattern creates an XSS vulnerability because [reason].
   Use [alternative] instead. Here is an example: [code snippet]"

Level 2: Suggestion — consider changing
  "Consider extracting this logic into a custom hook — it's used
   identically in 3 places and would make testing much easier."

Level 3: Question — asking to understand
  "I'm not familiar with this pattern — can you explain the trade-off
   vs the approach we use in [other component]?"

Level 4: Nit — low priority style
  "nit: variable name 'data' is vague here — 'userProfile' would be clearer"

Level 5: Positive feedback (often skipped, should not be)
  "Great use of the useOptimistic hook here — this is exactly the pattern
   we discussed in the guild meeting. Adding this to the internal examples doc."

Code review anti-patterns:
  ✗ 30 nits and no substantive comments — signals you reviewed style, not logic
  ✗ Only commenting on problems, never on good patterns
  ✗ Rubber-stamp approvals ("LGTM") without reading
  ✗ Using review as a lecture platform (correct once, then stop)
```

### 10.4.3 Sponsorship vs Mentorship

```
Mentorship (1:1): "I will teach you how to do this."
Sponsorship (using your platform): "I will tell others you should be
                                    doing this."

Sponsorship examples:
  → "I'd like [name] to present this ADR to the leadership team"
  → Nominating someone for a promotion, with specific evidence
  → "I'm going to be out of office — [name] will represent the FE team
     in the architecture review"
  → Including someone's name in a Slack message to senior leadership:
    "[name] built the performance monitoring system that caught the
     LCP regression last week"

Why sponsorship matters:
  Women and underrepresented engineers receive disproportionately
  more mentorship and less sponsorship than their peers
  (Herminia Ibarra research, 2010 and confirmed in subsequent studies).
  Sponsorship — using your credibility and access to open doors —
  is the more impactful of the two at Staff+ levels.
```

---

## 10.5 Navigating Organizational Dynamics

### 10.5.1 DACI Decision Framework

```
DACI clarifies who does what in a decision:

D = Driver
  The one person responsible for making sure the decision happens.
  Not necessarily the decision-maker — the coordinator and owner.
  "If this decision doesn't get made, the Driver has failed."

A = Approver
  The one person who makes the final call and is accountable for it.
  There is exactly ONE Approver. Multiple approvers = no approver.

C = Contributors
  People whose input is sought. They do not have veto power.
  "We value your expertise. You do not own the decision."

I = Informed
  People who are told the outcome but not consulted.

Example:
  Decision: Adopt TanStack Query across all teams
  Driver:     Shubham Narkhede (Frontend Architect)
  Approver:   Head of Frontend Engineering
  Contributors: 3 tech leads from affected teams, security team
  Informed:   All frontend engineers, PM team

Benefit: eliminates "but I thought I had a say" conflicts
         and "who approved this?" confusion after the fact
```

### 10.5.2 Handling Technical Disagreements at Scale

```
When a senior engineer disagrees with an architectural decision:

Step 1: Make space for the disagreement
  "I hear you disagree. Let's make sure I understand your concern fully
   before we proceed."

Step 2: Separate the concern from the solution
  "Do you disagree that we have a problem? Or do you disagree with
   this specific solution? Or both?"

Step 3: Present the decision criteria
  "I made this decision based on [criteria]. If you have data that
   challenges these criteria, let's look at it."

Step 4: Offer to revisit
  "If the pilot shows [specific negative outcome], we will revisit this.
   Let's define that threshold now."

Step 5: Disagree and commit
  "I understand you disagree. I'm going to move forward with this
   decision. I'd appreciate your help making it succeed."

What to never do:
  ✗ "I'm the architect, so this is my call." (authority without reasoning)
  ✗ Ignore the disagreement and hope it goes away
  ✗ Change the decision just to resolve discomfort (without new data)
  ✗ Allow passive non-participation ("I'll let you know if there are problems")
```

---

## Chapter 10 Summary

```
What you should now know:

Communication
  ✓ SBI: Situation-Behavior-Impact for specific, actionable feedback
  ✓ Radical Candor: care + challenge, not one without the other
  ✓ Running technical discussions: separate problem from solution

New Technology Adoption
  ✓ 4-phase process: Spike → PoC → Pilot → Rollout
  ✓ Handling the 5 types of resistance with evidence

Influence Without Authority
  ✓ Radiating intent: work in the open, early
  ✓ RFC process: problem → options → recommendation → decision
  ✓ Building credibility: be right publicly, sponsor others

Mentoring
  ✓ 1:1 structure: diagnose → focus → bounded work → SBI feedback
  ✓ Code review levels: blocking / suggestion / question / nit / praise
  ✓ Sponsorship vs mentorship: both matter, sponsorship is often skipped

Organizational Dynamics
  ✓ DACI: one Approver, explicit Contributors, Informed list
  ✓ Technical disagreements: 5-step process ending in "disagree and commit"
```

**Next:** Chapter 11 — Interview Preparation
