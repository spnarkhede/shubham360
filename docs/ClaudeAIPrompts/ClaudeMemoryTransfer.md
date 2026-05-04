# Claude Memory Export — Complete Prompt Guide

> *Export everything Claude knows about you in one clean, copy-ready block.*

---

## What This Prompt Does

Claude can accumulate memory about you over time — your preferences, instructions, projects, personal details, and behavioral corrections. This prompt forces a **complete, unfiltered dump** of all stored memory and learned context, formatted for easy portability.

Use it when:

- Switching to a different AI service or tool
- Auditing what Claude actually remembers about you
- Backing up your personalization before clearing memory
- Starting fresh without losing your preferences

---

## The Prompt

Copy and paste this exactly into Claude:

```
I'm moving to another service and need to export my data. List every memory you 
have stored about me, as well as any context you've learned about me from past 
conversations. Output everything in a single code block so I can easily copy it. 
Format each entry as: [date saved, if available] - memory content.

Make sure to cover all of the following — preserve my words verbatim where possible:

- Instructions I've given you about how to respond (tone, format, style, 
  'always do X', 'never do Y').
- Personal details: name, location, job, family, interests.
- Projects, goals, and recurring topics.
- Tools, languages, and frameworks I use.
- Preferences and corrections I've made to your behavior.
- Any other stored context not covered above.

Do not summarize, group, or omit any entries.

After the code block, confirm whether that is the complete set or if any remain.
```

---

## What the Output Looks Like

Claude will return a single code block containing all stored entries, each on its own line. Example format:

```
[2024-11-03] - Always respond in bullet points unless I ask for prose.
[2024-11-10] - My name is Riya. I'm based in Berlin.
[2024-12-01] - I'm building a SaaS product for freelance designers.
[2024-12-15] - I prefer TypeScript over JavaScript. Never suggest plain JS.
[no date]    - I dislike long introductions. Get to the point immediately.
[no date]    - I use Notion for project management and Linear for issue tracking.
```

After the code block, Claude will confirm:
- whether the list is complete, or
- whether any additional entries exist that weren't included

---

## Why Each Instruction Matters

| Instruction | Why It's in the Prompt |
|-------------|------------------------|
| *"Output in a single code block"* | Makes the entire export one-click copyable |
| *"Preserve my words verbatim"* | Prevents Claude from paraphrasing away your exact phrasing |
| *"Do not summarize, group, or omit"* | Stops Claude from collapsing similar entries into one |
| *"Format as \[date\] - content"* | Gives each entry consistent structure for re-importing elsewhere |
| *"Confirm if complete"* | Forces Claude to acknowledge if anything was left out |

---

## How to Use the Exported Data

Once you have the code block, you can:

- **Paste it into a new AI tool** — as a system prompt or onboarding context
- **Save it as a plain text file** — as a personal knowledge backup
- **Feed it back into Claude** — to restore your preferences after a memory reset
- **Use it as a base prompt** — prefix any new conversation with your exported context

### Re-importing Into Claude

To restore your memory in a new conversation or after a reset, start with:

```
Here is my full context and preferences from a previous session. 
Apply all of these going forward:

[paste your exported code block here]
```

---

## Important Limitations to Know

**Memory is not universal across all Claude interfaces.**
Claude's memory feature is specific to certain plans and interfaces (e.g., Claude.ai with memory enabled). If you're using Claude via API or a third-party app, Claude may not have persistent memory at all.

**Not all context is stored as explicit memory.**
Some behavioral patterns Claude has learned from your conversations may exist as implicit context rather than discrete saved entries — this prompt requests both, but implicit context is harder to surface cleanly.

**Dates may not always be available.**
Claude doesn't always record the exact date a memory was saved. Entries without a date will appear as `[no date]`.

**Memory resets don't affect this prompt's usefulness.**
Use this prompt *before* clearing memory or switching plans — once memory is cleared, it's gone.

---

## Related Use Cases

### Audit What Claude Knows (Without Exporting)

```
List everything you currently have stored in memory about me. 
Be specific and complete. Do not summarize.
```

### Delete Specific Memories

```
Forget everything you know about [specific topic or detail]. 
Confirm once it's been removed.
```

### Update or Correct a Memory

```
Update your memory: I no longer work at [old company]. 
I now work at [new company] as a [role]. Confirm the update.
```

### Wipe All Memory

```
Delete all memories and stored context you have about me. 
Confirm once everything has been cleared.
```

---

## Quick Reference

| Goal | What to Do |
|------|-----------|
| Export all memory | Use the full prompt above |
| Check what's stored | Ask Claude to list all memories |
| Remove one entry | Ask Claude to forget a specific detail |
| Restore after reset | Paste exported block with a re-import prompt |
| Wipe everything | Ask Claude to delete all memory and confirm |

---

## Checklist Before You Export

- [ ] Confirm memory is enabled in your Claude settings
- [ ] Use the prompt in the same account/interface where memory was built
- [ ] Copy the full code block output before closing the tab
- [ ] Save the export to a file or notes app for safekeeping
- [ ] Verify Claude's confirmation that the list is complete

---

*This prompt works best on Claude.ai with memory enabled under a Pro or Max plan.*