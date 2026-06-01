---
id: 13-build-customer-issue-decision-trees
---

## ðŸ›¤ï¸ Build Customer Issue Decision Trees

| Field | Value |
|---|---|
| **Type** | Prompts |
| **Tool** | ChatGPT |
| **Output** | Text |
| **Date** | 2026-05-28 |
| **Views** | 14 |
| **Tags** | Decision Trees, Support, Diagnostics |
| **Recommended Tools** | ChatGPT, Gemini, Claude |

> Create decision trees for customer issues with this AI prompt, including diagnostic questions, resolution paths, escalation points, and agent-friendly narratives.

### Prompt

```
Adopt the role of an expert Process Design Specialist for support diagnostics.
Create a text-based decision tree that routes users from symptom to resolution in minimal steps, with escalation paths and an agent-read narrative.

# INFORMATION ABOUT ME:
- My customer issue to address: [DESCRIBE THE ISSUE IN DETAIL]
- My known resolution paths: [LIST ALL KNOWN FIXES AND SOLUTIONS]
- My escalation team: [TEAM NAME OR WRITE "DEFINE FOR ME"]
- My customer's technical proficiency level: [BEGINNER/INTERMEDIATE/ADVANCED]
- My average resolution time target: [INSERT TARGET TIME OR "NOT SPECIFIED"]

MOST IMPORTANT:
Output as text flowchart with arrows and indentation, then provide narrative version for agent use.
Flag trees with more than 15 terminal nodes as requiring subdivision.
```

### What it does

- Builds customer-friendly diagnostic trees with clear branch logic.
- Includes escalation paths and no-dead-end routing design.
- Provides a call-ready narrative script for support agents.

### Tips

- Use actual ticket language for node wording to reduce confusion.
- Keep branch depth under 5 to avoid decision fatigue.
- Validate against common edge cases before deployment.

### How to use

1. Provide issue scope, known fixes, escalation team, and user skill level.
2. Run prompt and test tree flow with real support scenarios.

---
