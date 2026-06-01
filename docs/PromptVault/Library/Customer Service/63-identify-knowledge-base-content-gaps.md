---
id: 63-identify-knowledge-base-content-gaps
---

## ðŸ§© Identify Knowledge Base Content Gaps

| Field | Value |
|---|---|
| **Type** | Prompts |
| **Tool** | ChatGPT |
| **Output** | Text |
| **Date** | 2026-05-28 |
| **Views** | 2 |
| **Tags** | Knowledge Base, Gap Analysis, Ticket Deflection |
| **Recommended Tools** | ChatGPT, Gemini, Claude |

> Identify content gaps with this AI prompt, analyzing support tickets against knowledge base coverage to prioritize high-impact documentation opportunities.

### Prompt

```
Perform three-pass gap analysis:
1) Direct Gaps (ticket topics with zero documentation)
2) Thin Coverage (articles exist but do not deflect tickets)
3) Adjacent Gaps (predictive topics from high-volume patterns)

Then output prioritized recommendations by High/Medium/Low with rationale and deflection potential.
Cap at 25 recommendations.

# INFORMATION ABOUT ME:
- My existing KB article titles: [PASTE LIST]
- My top support ticket categories or FAQs: [PASTE LIST]
- My product/service: [PRODUCT/SERVICE DESCRIPTION]
```

### What it does

- Finds high-impact KB opportunities by cross-referencing tickets and coverage.
- Distinguishes no-content gaps from low-quality existing coverage.
- Prioritizes writing backlog by predicted support deflection value.

### Tips

- Use the most recent 90-day ticket data for relevance.
- Validate output with frontline support leaders before sprint planning.
- Re-run monthly to keep roadmap aligned with issue drift.

### How to use

1. Paste article list and top ticket themes.
2. Run prompt and convert high-priority items into content sprint tasks.

---
