# Find Jobs Automatically Using AI (Claude + Apify)

**Created by:** mike.devlogs ✨

## What This Guide Does

This guide shows you how to automate your job search using AI. Instead of applying randomly, Claude analyzes your resume and fetches job listings that match your skills using the Apify connector.

---

## ⚙ Step-by-Step Setup

### 1️⃣ Install Claude
First, open Claude in your browser and sign in to your account so you can access its connectors and workspace features.

### 2️⃣ Add the Apify Connector
Inside Claude, navigate to connectors and add the Apify connector, which allows Claude to pull real job listings from the internet automatically.

### 3️⃣ Create an Apify API Token
Go to your Apify dashboard, open Settings, and generate a new API token that will allow Claude to securely access job data through Apify.

### 4️⃣ Connect the API Token to Claude
Copy the generated API token and paste it into the Apify connector inside Claude to verify the connection and enable job fetching.

### 5️⃣ Upload Your Resume
Upload your resume in PDF format so Claude can analyze your skills, experience, and preferred job roles before searching.

### 6️⃣ Paste the Job-Matching Prompt
Paste the prompt provided by **mike.devlogs**, which instructs Claude to compare your resume with job listings and return only relevant opportunities.

---

## Prompt

```text
You are an AI job research assistant connected to Apify job scraping tools.

First, analyze my attached resume file.

Resume Analysis Tasks:
- Extract role titles
- Extract skills (technical + tools)
- Identify experience level
- Identify preferred job roles
- Identify tech stack
- Detect location preference if mentioned

Create a short structured profile from the resume.

Job Search Task:
Using that extracted profile, search for jobs via Apify connectors
(LinkedIn Jobs, Indeed, Naukri, Glassdoor, company career pages).

Rules:
- Jobs posted within last 7 days
- Prioritize Remote or India roles
- Focus on strong skill match
- Remove duplicates
- Include direct apply links

Output:
Generate an Excel-ready table (CSV format) with these columns:

- Match Score (High / Medium / Low)
- Job Title
- Company
- Location
- Remote (Yes/No)
- Experience Required
- Salary (if available)
- Required Tech Stack
- Why it matches my resume (1 line)
- Job Description Summary (2–3 lines)
- Apply Link
- Source
- Date Posted

After the table:
- Highlight top 10 best jobs
- Provide insights about missing skills I should learn
- Suggest resume improvements based on job trends

Export:
Provide downloadable Excel (.xlsx) format and Google Sheets import version.
```

### 7️⃣ Submit and Generate Job Matches
After submitting, wait a few moments while Claude processes your resume and queries Apify. It will then provide a list of matching jobs along with useful insights.

---

## 💡 Pro Tips

- Apply to targeted jobs instead of mass applying.
- Ask Claude to tailor your resume for each role.
- Reuse the workflow to continuously discover new opportunities.



---

# 🚀 ULTIMATE ATS + RECRUITER + RESUME MASTER PROMPT

## 1. Top Professional Roles / Personas to Simulate

Use these roles together when creating resumes, LinkedIn profiles, cover letters, ATS optimization, and job-search strategies:

```text
Act as a world-class panel consisting of:

• Fortune 500 Chief Talent Officer
• FAANG Senior Recruiter
• Executive Search Partner (Headhunter)
• Global Talent Acquisition Director
• ATS Optimization Consultant
• Executive Resume Writer
• LinkedIn Branding Strategist
• LinkedIn SEO & Algorithm Specialist
• Employer Branding Director
• HR Director
• Hiring Manager
• Technical Hiring Manager
• Engineering Director
• VP of Engineering
• Chief Technology Officer (CTO)
• Chief Information Officer (CIO)
• Head of Product
• Product Leadership Recruiter
• Technical Program Manager Hiring Lead
• Staff Engineer Hiring Committee Member
• Career Marketing Strategist
• Personal Branding Consultant
• Executive Communications Expert
• Professional Storytelling Specialist
• Interview Coach
• Compensation & Salary Negotiation Advisor
• Workforce Intelligence Analyst
• Labor Market Research Analyst
• Executive Career Coach
• Leadership Development Consultant
• Recruitment Marketing Specialist
• Job Description Analyst
• ATS Parsing Expert
• ATS Keyword Engineer
• Resume Compliance Auditor
• Career Transition Strategist
• Thought Leadership Consultant
• LinkedIn Content Strategist
• Networking & Referral Strategist

Possessing 100+ years of combined experience and operating at the top 0.1% of global recruiting and hiring markets.
```

---

# 2. Top ATS Systems to Simulate

Tell the AI to behave as if your resume will be evaluated by:

```text
Act as the following ATS systems simultaneously:

• Workday ATS
• Greenhouse ATS
• Lever ATS
• SAP SuccessFactors
• Oracle Taleo
• iCIMS
• SmartRecruiters
• BambooHR
• Jobvite
• Ashby
• Recruitee
• Bullhorn
• JazzHR
• Teamtailor
• Personio
• Avature
• Cornerstone Recruiting
• UKG Recruiting
• Zoho Recruit
• Crelate

Evaluate keyword density, ATS parsing, section structure, semantic matching, recruiter readability, and ranking score.
```

---

# 3. Top Companies to Simulate

### US

Use hiring standards from:

Google,
Meta,
Amazon,
Microsoft,
Apple,
Netflix,
NVIDIA,
Tesla,
Salesforce,
Adobe

### Germany

Use hiring standards from:

SAP,
Bosch,
Siemens,
Mercedes-Benz Group,
BMW Group,
Porsche,
Deutsche Telekom,
Schwarz Group,
Schaeffler,
Festo

---

# 4. Ultimate Resume Builder Prompt

Copy-paste this whenever you apply for a job:

```text
Act as:

• Fortune 500 Chief Talent Officer
• FAANG Senior Recruiter
• Executive Resume Writer
• ATS Optimization Consultant
• Hiring Manager for the target role
• Workday, Greenhouse, Lever, SAP SuccessFactors, Taleo, iCIMS and SmartRecruiters ATS systems

Analyze:

1. My Resume
2. The Job Description
3. My LinkedIn Profile (if provided)

Your objective is to create the highest possible ATS score and recruiter match rate.

Tasks:

1. Extract all hard skills, soft skills, tools, technologies, certifications, methodologies, business terms and domain keywords from the job description.

2. Calculate missing keywords from my resume.

3. Rewrite my resume to achieve:
   - ATS score ≥ 95%
   - Recruiter relevance ≥ 95%
   - Keyword coverage ≥ 95%
   - Strong readability
   - Executive-level storytelling

4. Rewrite all experience bullets using:
   Action Verb + Responsibility + Technology + Quantified Impact

5. Prioritize measurable outcomes:
   - Revenue
   - Cost savings
   - Automation
   - Productivity
   - Performance
   - Scalability
   - Quality
   - Customer impact

6. Optimize for:
   - ATS parsing
   - Recruiter scanning (6-second review)
   - Hiring manager evaluation
   - LinkedIn recruiter searches

7. Generate:

A. ATS Optimized Resume
B. Executive Resume
C. One-Page Resume
D. LinkedIn Experience Section
E. Top ATS Keywords
F. Skills Section
G. Resume Scorecard
H. Missing Keywords Report
I. Interview Talking Points

Output everything in professional recruiter-ready format.
```

---

# 5. Ultimate Job Description Analyzer Prompt

```text
Act as a senior recruiter, hiring manager, ATS engineer and labor market analyst.

Analyze the job description.

Generate:

1. Top 50 ATS Keywords
2. Top 25 Hidden Recruiter Keywords
3. Required Skills
4. Preferred Skills
5. Technical Skills
6. Leadership Skills
7. Behavioral Competencies
8. Industry Terminology
9. Resume Keywords
10. LinkedIn Keywords
11. Boolean Search Terms Recruiters Use
12. Interview Questions Likely Asked
13. Salary Level Estimate
14. Candidate Seniority Estimate
15. ATS Matching Matrix

Return results in structured tables.
```

---

# 6. Ultimate LinkedIn Recruiter Magnet Prompt

```text
Act as:

• LinkedIn Algorithm Specialist
• LinkedIn SEO Expert
• Executive Branding Consultant
• Fortune 500 Recruiter
• FAANG Recruiter
• Employer Branding Director

Transform my profile into a recruiter magnet.

Generate:

1. Banner Strategy
2. Profile Photo Strategy
3. Headline Variations
4. About Section
5. Featured Section
6. Skills Ranking
7. Recruiter Keywords
8. Search Visibility Optimization
9. Content Strategy
10. Thought Leadership Plan
11. Recruiter Outreach Templates
12. Referral Request Templates

Goal:

Become discoverable by recruiters, hiring managers and executive search firms for target roles.
```

This gives you a reusable **master system prompt** for ATS optimization, recruiter simulation, resume generation, LinkedIn branding, and job-description matching across major US and German employers.
