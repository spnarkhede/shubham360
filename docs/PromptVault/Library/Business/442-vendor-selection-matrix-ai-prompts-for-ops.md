---
id: 442-vendor-selection-matrix-ai-prompts-for-ops
---

### 1. Vendor Evaluation Criteria List Prompt

**Use Case**: You are about to pick new operations software. Before you even talk to vendors, you need a complete list of what actually matters. This prompt generates a comprehensive criteria list so nothing important gets missed.

**Target Personas**: Operations Managers, Procurement Leads, IT Ops, Vendor Management Specialists

**Tags**: `vendor-selection`, `criteria-definition`, `ai-prompts`, `operations`, `procurement`

**Prompt**:

```
Generate a comprehensive vendor evaluation criteria list for selecting a warehouse management system for a mid-size e-commerce fulfillment operation. The criteria should cover: functional capabilities including inventory tracking, order management, and labor management; technical requirements including integration with e-commerce platforms, shipping carriers, and ERP systems; operational requirements including scalability during peak seasons and real-time visibility; vendor requirements including implementation support, training, and ongoing support; and strategic considerations including vendor roadmap direction and ecosystem compatibility. For each category, identify the sub-criteria that should be evaluated.
```

---

### 2. Criteria Weighting Prompt

**Use Case**: Not all criteria are equally important. If you weight the wrong things highest, you will pick the vendor that looks best on paper — not the one that serves you best in reality. This prompt forces honest weighting based on actual business priorities.

**Target Personas**: Operations Managers, Procurement Leads, IT Directors, Cross-Functional Decision Makers

**Tags**: `criteria-weighting`, `decision-framework`, `ai-prompts`, `operations`, `vendor-management`

**Prompt**:

```
Analyze the criteria that should receive highest weight based on business context for selecting operations software for [COMPANY TYPE] in the [INDUSTRY] sector. Assess whether current weighting reflects actual priorities or political compromises. Identify the criteria that are must-haves versus nice-to-haves. Recommend how to handle criteria that different stakeholders weight differently. Provide a recommended weight distribution across all criteria categories.
```

---

### 3. Evaluation Matrix Building Prompt

**Use Case**: Criteria and weights are useless without a scoring framework. This prompt builds the actual evaluation matrix — the structure that lets you score every vendor consistently and fairly.

**Target Personas**: Operations Managers, Procurement Leads, IT Ops, Project Managers

**Tags**: `evaluation-matrix`, `scoring-framework`, `ai-prompts`, `operations`, `vendor-selection`

**Prompt**:

```
Build a vendor evaluation matrix for selecting [SOFTWARE TYPE] for [COMPANY CONTEXT]. Specify the matrix structure including criteria, weights, and scoring scales. Provide guidance on scoring definitions that ensure consistent application across evaluators. Describe approaches for handling criteria where vendor information is incomplete. Include a process for incorporating multiple evaluator perspectives into a single consolidated score.
```

---

### 4. Vendor Scoring Prompt

**Use Case**: Scoring is where bias sneaks in. This prompt forces evidence-based scoring — not "I liked their demo" scoring. It tells you what evidence to collect and how to interpret it consistently.

**Target Personas**: Operations Managers, Procurement Leads, IT Ops, Cross-Functional Evaluation Teams

**Tags**: `vendor-scoring`, `evidence-based`, `ai-prompts`, `operations`, `bias-reduction`

**Prompt**:

```
Score the following vendors for [SOFTWARE TYPE] selection: [VENDOR NAMES]. For each vendor, identify the evidence available for each evaluation criterion. Provide guidance on interpreting evidence consistently across vendors. Describe approaches for evaluating vendor claims against actual capabilities. Recommend how to document scoring rationale so the decision can be defended later. Score each vendor on a 1-10 scale for every criterion with justification.
```

---

### 5. Skeptical Review Prompt

**Use Case**: Vendors show you their best side. This prompt plays devil's advocate — it surfaces every risk, limitation, and scenario where each vendor would fail. This is the prompt that saves you from a costly mistake.

**Target Personas**: Operations Managers, Procurement Leads, IT Directors, Risk-Aware Decision Makers

**Tags**: `skeptical-review`, `risk-assessment`, `ai-prompts`, `operations`, `vendor-selection`

**Prompt**:

```
Act as a skeptical operations leader reviewing the following vendor shortlist for [SOFTWARE TYPE]: [VENDOR NAMES]. For each vendor, identify the concerns that a skeptical reviewer would raise. Analyze the specific scenarios where each vendor would perform poorly. Assess vendor limitations that the demo or pitch would not surface. Evaluate whether each vendor's weaknesses are showstoppers or manageable issues. Rank vendors by risk level from highest to lowest.
```

---

### 6. Total Cost of Ownership Prompt

**Use Case**: The sticker price is never the real price. Implementation, integration, training, internal labor — it all adds up. This prompt calculates the true total cost of ownership so you compare apples to apples, not sticker prices.

**Target Personas**: Operations Managers, Procurement Leads, Finance Partners, IT Directors

**Tags**: `tco`, `total-cost-of-ownership`, `ai-prompts`, `operations`, `budget-planning`

**Prompt**:

```
Calculate the total cost of ownership for the following vendors for [SOFTWARE TYPE] over a [NUMBER]-year lifecycle: [VENDOR NAMES]. Identify all cost categories beyond initial purchase price including implementation costs, integration costs, training costs, ongoing licensing, and internal resources required to operate the software. Estimate implementation and integration costs based on vendor data and industry benchmarks. Analyze ongoing operational costs including internal headcount required. Calculate and compare total cost of ownership for each vendor.
```

---

### 7. Reference Call Questions Prompt

**Use Case**: Vendors lie in demos. Their existing customers tell the truth in reference calls — if you ask the right questions. This prompt gives you the exact questions that surface real strengths and hidden problems.

**Target Personas**: Operations Managers, Procurement Leads, IT Ops, Vendor Evaluation Teams

**Tags**: `reference-calls`, `validation`, `ai-prompts`, `operations`, `due-diligence`

**Prompt**:

```
Generate reference call questions for [VENDOR NAME] who is being evaluated for [SOFTWARE TYPE] at [COMPANY CONTEXT]. Specify questions that reveal software strengths and limitations. Describe approaches for verifying vendor claims against reference experience. Include questions about implementation challenges and ongoing operational burden. Provide guidance on interpreting mixed or inconsistent reference feedback. List 10 questions organized by category: implementation, daily usage, support, and long-term value.
```

---

### 8. Final Vendor Selection Prompt

**Use Case**: You have the matrix, the scores, the TCO, and the reference feedback. Now you need to make the call. This prompt combines everything into a final recommendation with full rationale documentation.

**Target Personas**: Operations Managers, Procurement Leads, IT Directors, Executive Decision Makers

**Tags**: `final-selection`, `decision-rationale`, `ai-prompts`, `operations`, `vendor-management`

**Prompt**:

```
Based on the following vendor evaluation data for [SOFTWARE TYPE], recommend the final vendor selection: [PASTE SCORES, TCO, REFERENCE FEEDBACK, AND CRITERIA WEIGHTS]. Analyze how final scores compare to selection criteria priorities. Identify the non-quantifiable factors that should influence the decision. Recommend which vendor represents the best choice given all available information. Document the complete rationale for the final decision including why other vendors were not selected.
```

---

## 📋 Quick Reference: Vendor Selection Prompt Cheat Sheet

| Step | What Matters Most | Prompt # |
|---|---|---|
| Define Criteria | Know what to evaluate before talking to vendors | 1 |
| Weight Criteria | Weight by business priority, not politics | 2 |
| Build Matrix | Structure that enables consistent scoring | 3 |
| Score Vendors | Evidence-based, not impression-based | 4 |
| Skeptical Review | Surface risks vendors will not tell you | 5 |
| Calculate TCO | Compare real costs, not sticker prices | 6 |
| Reference Calls | Ask questions that reveal the truth | 7 |
| Final Selection | Combine data with judgment, document why | 8 |

> **Golden Rule**: The matrix guides the decision, it does not make it. The highest scorer wins only if the scoring was honest and the non-quantifiable risks were accounted for.

---

## ❓ FAQ

**Q: How many vendors should we evaluate?**
A: Three to five vendors is the sweet spot. Fewer than three limits your options. More than five dilutes evaluation quality. Enough to have real choice, not so many that you cannot evaluate deeply.

**Q: Should we always pick the highest-scoring vendor?**
A: No. The score is a guide, not a verdict. Check if scoring was accurate, consider non-quantified risks, and ask if the top scorer has weaknesses the matrix did not capture.

**Q: What if our team disagrees about criteria weights?**
A: Disagreement usually means different people see different priorities. Facilitate the conversation, find the root cause, reach consensus where possible. Document disagreements and how they were resolved.

**Q: How do we handle selection when timeline pressure is intense?**
A: Time pressure is real but rarely justifies skipping steps. Do not reduce evaluation comprehensiveness. Instead, extend the timeline if possible, or pick a short-term solution while planning a rigorous re-evaluation at renewal.

**Q: How do we validate that AI-generated analysis is accurate?**
A: AI output is hypothesis until validated. Cross-check against vendor data, stakeholder interviews, and reference calls. Never present AI analysis as final conclusion — present it as a starting point for deeper validation.

---

**Tags**: `Operations`, `Artificial Intelligence`, `Procurement`, `Vendor Management`, `Productivity`