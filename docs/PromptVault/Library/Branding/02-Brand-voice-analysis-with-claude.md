# 📄 Best AI Prompts for Brand Voice Analysis with Claude

> **TL;DR**: Claude's huge context window lets you paste your ENTIRE content library and audit your brand voice all at once — not piece by piece. The output isn't vague "friendly but professional" fluff. It's specific, observable voice traits with before/after examples writers can actually use.

---

## 📌 Why Claude for Brand Voice? (Quick Read)

| ✅ Claude Does Well | ❌ Generic AI Fails At |
|---|---|
| Analyzes entire content libraries at once | Token limits force sampling |
| Finds voice drift across time and channels | Only sees one piece at a time |
| Converts vague adjectives into precise rules | Gives you "be friendly" and nothing else |
| Compares your voice vs competitors side-by-side | Can't hold multiple brands in context |
| Produces "write this, not that" style sheets | Generic guidelines nobody follows |

> 🔑 **Golden Rule**: Brand voice drift is silent and cumulative. The only defense is systematic auditing. Claude makes it practical.

---

## 🔥 The 5 Prompts (Copy-Paste Ready)

---

### 1. Comprehensive Content Library Audit

**Use Case**: You have 20+ content pieces across channels. You need to know if they all sound like the same brand — or if your voice has fractured. This prompt audits everything at once.

**Target Personas**: Brand Managers, Content Strategists, Marketing Directors, Content Leads, Communications Managers

**Tags**: `brand-voice-audit`, `content-library`, `voice-consistency`, `claude`, `b2b-saas`

**Prompt**:

```
I am conducting a comprehensive brand voice audit of our content library. I have pasted the complete text of 20 content pieces representing our main content channels: website homepage and about page, 8 blog posts from the last 6 months, 6 customer email newsletters, and 5 case studies.

Our brand is a mid-market B2B SaaS company selling a data analytics platform to operations teams. Our stated brand voice guidelines describe our voice as "precise and confident, like a data scientist who can also explain things to a CEO."

Analyze this entire content library and provide:

1. **Voice Signature Analysis**: What are the 5 most distinctive and consistent voice characteristics across the entire library? For each characteristic, provide 3 specific examples from different pieces that demonstrate the pattern. Use direct quotes.

2. **Channel-Specific Deviations**: Where does each content type (homepage, blog, email, case study) deviate from the overall voice signature? Are certain channels systematically more formal, more technical, or more casual than others?

3. **Tone Consistency Score**: Give the overall library a score from 1-10 on voice consistency, with 10 being "every piece sounds like it was written by the same person" and 1 being "each piece sounds like a completely different brand." Explain your reasoning.

4. **Reader Perspective Analysis**: Who does the content seem to address most frequently: the technical practitioner who wants to understand how the tool works, or the executive who wants to understand business impact? Is this ratio appropriate for our target audience of operations leaders who need both?

5. **Voice Evolution Over Time**: If the blog posts span the 6-month period, do you detect any change in voice from earlier to more recent posts? If so, in what direction?

Here is the full content library:
[PASTE ALL 20 CONTENT PIECES]
```

---

### 2. Precision Attribute Profiling

**Use Case**: Your brand voice guidelines say "friendly, professional, innovative, customer-focused." That's useless. This prompt turns those vague words into specific writing rules with before/after examples.

**Target Personas**: Content Writers, Brand Managers, Marketing Managers, Content Strategists, Creative Directors

**Tags**: `voice-attributes`, `before-after`, `precision-profiling`, `brand-guidelines`, `claude`

**Prompt**:

```
Our current brand voice guidelines use these descriptors: "friendly, professional, innovative, and customer-focused." These are too vague to guide a writer.

For each of these four attributes, I want you to do the following transformation:

1. Define what this attribute looks like in practice with specific writing choices (word choice, sentence structure, rhetorical approach).
2. Identify what the opposite of this attribute sounds like (the anti-pattern).
3. Provide a 2-sentence "before/after" example: one sentence that sounds like the opposite (the anti-pattern to avoid) and one that sounds like the target attribute (the pattern to pursue).

For example, for "friendly":
- What it looks like in practice: uses contractions, addresses the reader as "you," acknowledges the reader's situation before pitching, occasional light humor is acceptable.
- Anti-pattern: sounds like a corporate PR document or a help desk auto-response.
- Before/after: Anti-pattern: "Our platform provides comprehensive functionality for enterprise data analytics requirements." Target: "You have too much data and not enough time. We built this to fix that."

Do this transformation for all four attributes (friendly, professional, innovative, customer-focused) and add two additional attributes you think are implied but not explicitly stated based on the content samples provided.
```

---

### 3. Cross-Functional Voice Calibration

**Use Case**: Your marketing team and customer success team both write content for the brand — but they sound like two different companies. This prompt finds where they match, where they diverge, and how to fix it.

**Target Personas**: Brand Managers, Marketing Directors, Customer Success Leads, Content Strategists, Communications Managers

**Tags**: `cross-functional`, `voice-calibration`, `team-alignment`, `brand-consistency`, `claude`

**Prompt**:

```
Our marketing team and our customer success team both produce written content that represents the brand. They currently operate with separate voice guidelines that have drifted apart. I have pasted samples of marketing content (website copy, ad headlines, email campaigns) and customer success content (onboarding emails, check-in templates, renewal communications) below.

Analyze both content sets and identify:

1. **Voice Convergence Points**: Where do both teams currently use the same voice characteristics? These are the anchor points that represent our "true" brand voice regardless of team.

2. **Voice Divergence Points**: Where do the two teams sound noticeably different? Provide specific examples where the same concept or message is expressed differently by each team.

3. **Team-Specific Tendencies**: What does the marketing content consistently do that the customer success content does not, and vice versa? Are there valid reasons for these differences (e.g., marketing needs to attract attention, CS needs to build trust)?

4. **Calibration Recommendation**: For each divergence point, recommend whether it should be resolved (both teams should use the same approach) or whether it represents a legitimate channel-specific adaptation. Provide specific guidance for each.

Content samples:
[PASTE MARKETING CONTENT]
[PASTE CUSTOMER SUCCESS CONTENT]
```

---

### 4. Competitive Voice Gap Analysis

**Use Case**: You think your brand sounds more "human" than competitors — but is that actually true? This prompt compares your voice against 2 competitors side-by-side and finds your differentiation gap.

**Target Personas**: Brand Strategists, Competitive Intelligence, Marketing Directors, Content Strategists, Brand Managers

**Tags**: `competitive-analysis`, `voice-gap`, `differentiation`, `competitor-comparison`, `claude`

**Prompt**:

```
Conduct a three-way competitive voice analysis for our B2B SaaS brand. We believe our primary voice differentiator is that we sound more "human" and less "enterprise software" than competitors.

I have provided samples below of: our own content, Content from Competitor A (the established market leader), and Content from Competitor B (a well-funded new entrant).

For each brand, analyze:
1. The ratio of technical specificity to emotional/situational framing (how much is "here is what the product does" vs. "here is what your life is like without it"?)
2. Sentence-level patterns: average sentence length, use of the passive voice, presence of hedging language ("we believe," "may help," "can support")
3. Humor and levity: does any of the content attempt lightness or wit, or is it uniformly serious?
4. First-person usage: how often does each brand use "we/our" vs "you/your"? What does this ratio signal about their voice?
5. Sentence-opening patterns: what types of words/sentence structures open most sentences? (e.g., subject-verb-object, rhetorical questions, data statements, imperative)

Then provide:
- A voice positioning summary for each brand
- Which brand you believe is most differentiated and why
- One specific gap in our own voice that we could lean into to strengthen differentiation

Content samples:
[PASTE ALL THREE CONTENT SETS]
```

---

### 5. Actionable Voice Style Sheet Generator

**Use Case**: You've done the audit. Now you need a style sheet that a new writer can read in 10 minutes and start producing on-brand content immediately. This prompt generates the complete sheet.

**Target Personas**: Brand Managers, Content Leads, Marketing Directors, Content Strategists, Creative Directors

**Tags**: `voice-style-sheet`, `actionable-guide`, `writer-onboarding`, `brand-document`, `claude`

**Prompt**:

```
Based on all the brand voice analysis we have conducted, generate a comprehensive but practical brand voice style sheet. This style sheet will be used by our writers (both internal team and agency/freelancer) to ensure all published content is voice-consistent.

Structure the style sheet as follows:

**The One-Paragraph Voice Summary** (for the top of the document — the 30-second version)

**Voice Attribute Definitions** (4-6 attributes with precise, observable definitions)

**Word Choices**
- 15 words/phrases we embrace (with one-sentence rationale for each)
- 15 words/phrases we avoid (with the alternative to use instead)

**Sentence-Level Rules** (6 dos and 6 don'ts with examples)

**Point of View Guidelines** (first-person/second-person/third-person rules by content type)

**The Five Things We Never Do** (concrete prohibitions with explanations)

**The Five Things We Always Do** (commitments that every piece should reflect)

**Channel Adaptations** (how voice shifts for: social media, email, blog, website, case studies)

**How to Use This Style Sheet** (a brief note to writers on how to apply this in practice, including what to do when two guidelines seem to conflict)
```

---

## ❓ FAQ (Quick Answers)

| Question | Answer |
|---|---|
| **How often should I audit brand voice?** | Comprehensive audit every 6 months. Quarterly spot-checks on 3-5 recent pieces between audits |
| **How to onboard new writers fast?** | Give them the one-paragraph summary + before/after examples first. Have them rewrite 2 short pieces and review against the style sheet |
| **Can Claude analyze non-English content?** | Yes. Specify the primary language in your prompt for best results |
| **Brand voice vs content style guide?** | Voice = personality. Style guide = voice + grammar + formatting + channel rules. Voice is the soul; style guide is the body |
| **How to handle AI-generated content + brand voice?** | Always review AI drafts against the voice style sheet before publishing. Use the sheet as a checklist, not a suggestion |

---

## 🎯 Key Takeaways (The 5 Rules)

| # | Rule |
|---|---|
| 1️⃣ | Brand voice drift is silent. Audit systematically or lose consistency at scale |
| 2️⃣ | Vague adjectives ("friendly") are useless. Convert them into observable writing rules |
| 3️⃣ | Cross-functional calibration prevents jarring voice shifts between teams |
| 4️⃣ | Competitive gap analysis finds unclaimed voice territory you can own |
| 5️⃣ | The style sheet must include a 30-second summary + before/after pairs or writers won't use it |

> **Your brand voice deserves a systematic audit, not a vibes check. Use Claude to find the drift, fix the gaps, and lock the standard. 🚀**

---