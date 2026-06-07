id: 446-market-sizing-tam-sam-som-ai-prompts-for-founders

## 📝 Prompt Format Requirements
All prompts must follow this exact structure:
```markdown
### [Prompt Number]. [Prompt Name]
**Use Case**: [Specific scenario where this prompt is useful]
**Target Personas**: [Job roles that would benefit, comma-separated]
**Tags**: `tag1`, `tag2`, `tag3`
**Prompt**:
\```[The actual prompt text goes here]\```
---
```

---

### 1. Bottom-Up Market Sizing from First Principles

**Use Case**: Building a defensible market size starting from actual headcount/data rather than guessing a "huge number" from thin air.

**Target Personas**: Founder, CEO, VP of Strategy

**Tags**: `market-sizing`, `bottom-up`, `fundraising`, `analysis`

**Prompt**:
```
Help me build a bottom-up market sizing for [company description] targeting [specific customer segment]. Walk me through a calculation framework that starts with: the total number of potential customers in my target market (not a revenue estimate, a headcount estimate), the average annual revenue per customer in this segment today, the expected growth rate of this segment over the next five years, the percentage of this segment that would realistically consider switching to or adopting a solution like mine, and the realistic capture rate I could achieve in year three to five given competitive dynamics and go-to-market constraints. For each input, identify the specific data sources I should use, the assumptions I am making, and the range of outcomes if those assumptions prove optimistic or conservative.
```

---

### 2. TAM / SAM / SOM with Defensible Assumptions

**Use Case**: Clearly defining the three layers of market size so you don't confuse "Total Market" with "My Actual Opportunity" (the #1 investor red flag).

**Target Personas**: Founder, CFO, Fundraising Lead

**Tags**: `tam-sam-som`, `investor-ready`, `strategy`, `validation`

**Prompt**:
```
I am building a TAM/SAM/SOM analysis for my [industry] startup. Help me define each layer with specific parameters: TAM should represent the total market if my solution achieved full penetration globally, what specific market definition and pricing assumptions does this require? SAM should represent my serviceable addressable market given my current go-to-market geography, product stage, and technical constraints. What are the specific boundaries I am setting and why? SOM should represent my realistic share in year three to five, given my current team size, burn rate constraints, and competitive positioning. What is the specific go-to-market model that produces this share? For each layer, present the number, the calculation that produces it, the key assumption that is most likely to be wrong, and how the number changes if that assumption shifts.
```

---

### 3. Competitive Stress-Test for SOM

**Use Case**: Modeling what happens to your realistic market share (SOM) if a big competitor enters or growth slows down, so you aren't blindsided in the Q&A.

**Target Personas**: Founder, Strategy Lead, Competitive Intelligence

**Tags**: `stress-test`, `competition`, `risk-analysis`, `scenario-planning`

**Prompt**:
```
Model the impact on my SOM of the following competitive scenarios for [company description]: first, if a large incumbent with 10x my resources enters my target segment in year two, how does my obtainable market share compress, and over what time period? Second, if a direct competitor raises a Series A at a valuation that signals they are serious, what percentage of the total addressable market do they likely capture in 18 months? Third, if the market grows at half the rate I am projecting due to slower-than-expected adoption, how does my five-year revenue projection change? For each scenario, provide the revised SOM and the specific mechanism by which the scenario produces that compression.
```

---

### 4. Market Sizing to Fundraising Narrative

**Use Case**: Turning your dry spreadsheet numbers into a compelling story that positions TAM as a ceiling (not a promise) and SOM as the real opportunity.

**Target Personas**: Founder, CEO, Communications Lead

**Tags**: `storytelling`, `pitch-deck`, `narrative`, `fundraising`

**Prompt**:
```
Help me translate the following market sizing data into a fundraising narrative: TAM is [amount] based on [specific definition], SAM is [amount] based on [specific targeting constraints], SOM is [amount] in year three based on [specific go-to-market assumptions]. The narrative should: position the TAM as a realistic ceiling rather than a guaranteed outcome, explain why the SAM represents the right strategic target given current product-market fit, present the SOM as the most important number because it represents what we can realistically build, include a five-year revenue projection that is grounded in the SOM and realistic market penetration rates, and acknowledge the key risks to each assumption without undermining the overall opportunity.
```

---

### 5. Data Source Validation & Reliability Check

**Use Case**: Finding the *actual* sources (Govt, Gartner, etc.) to back up your numbers so investors don't think you just "made it up."

**Target Personas**: Founder, Analyst, Research Lead

**Tags**: `data-validation`, `sources`, `credibility`, `research`

**Prompt**:
```
I need to validate the following market sizing assumptions for [company description]: [list assumptions, e.g., number of target customers, average deal size, market growth rate]. Identify the specific data sources I should use for each assumption, categorized by reliability tier: first-party data (my own customer data, sales records), second-party data (industry reports from recognized research firms, government data), and third-party data (analyst estimates, media reports). For each data source, explain what specific data point it provides, how current the data is, and what the main limitation or potential bias in the data source is.
```

---

### Related Topics

#Startup Strategy #Fundraising #AI Prompts  #Market Research #Venture Capital