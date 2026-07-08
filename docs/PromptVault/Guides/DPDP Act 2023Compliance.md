# DPDP ACT 2023 — Digital Personal Data Protection Act
## Technical Compliance Checklist + Implementation Guide
### For Software Products, SaaS Platforms & Mobile Applications

> **India · MeitY · 2023** | Passed: August 11, 2023 | Gazette of India, Extraordinary
>
> **Reference:** dpdp.gov.in | meity.gov.in
>
> ⚠️ *For informational purposes. Consult qualified legal counsel for definitive compliance advice.*

---

## At a Glance

| Metric | Value |
|---|---|
| Compliance Modules | 9 |
| Checklist Items | 100+ |
| Penalty Tiers | 5 |
| Maximum Penalty | Rs. 250 Crore |

---

## Priority Legend

| Symbol | Level | Meaning |
|---|---|---|
| 🔴 CRITICAL | Immediate | Direct legal exposure — fix before launch |
| 🟠 HIGH | Strong risk | Significant compliance risk — fix within sprint |
| 🟡 MEDIUM | Best practice | Enforceable, not immediately critical |
| 🟢 LOW | Recommended | Enhancement that reduces future risk |

---

## Table of Contents

1. [What is DPDP Act 2023?](#section-1)
2. [Are You a Data Fiduciary? — Applicability Test](#section-2)
3. [Module 01 — Consent Management](#module-01)
4. [Module 02 — Authentication & OTP Compliance](#module-02)
5. [Module 03 — Data Collection & Minimization](#module-03)
6. [Module 04 — User Rights Implementation](#module-04)
7. [Module 05 — Children's Data Compliance](#module-05)
8. [Module 06 — Cross-Border Data Transfer](#module-06)
9. [Module 07 — Grievance Officer & Public Notice](#module-07)
10. [Module 08 — Data Breach Response Protocol](#module-08)
11. [Module 09 — Third-Party & Vendor Compliance](#module-09)
12. [Appendix A — Penalty Reference Table](#appendix-a)
13. [Appendix B — Compliance Score Tracker](#appendix-b)
14. [Implementation Guide — Steps for Existing Projects](#implementation-guide)

---

<a name="section-1"></a>
## Section 1 — What is DPDP Act 2023? {#section-1}

The Digital Personal Data Protection Act 2023 (DPDP Act) is India's first comprehensive legislation governing the collection, storage, processing, and transfer of digital personal data. Passed by the Parliament of India on August 11, 2023 and published in the Gazette of India (Extraordinary), it replaces prior patchwork data handling provisions under the IT Act 2000.

### Key Definitions

| Term | Definition |
|---|---|
| **Personal Data** | Any data that can identify a natural person — name, email, phone, IP address, location, device ID, biometric data. |
| **Data Principal** | The individual (user) whose personal data is being processed. They hold rights under the Act. |
| **Data Fiduciary** | Any entity — individual, company, startup, app — that determines the purpose and means of processing personal data. |
| **Data Processor** | Any entity that processes personal data on behalf of a Data Fiduciary (e.g. AWS, Firebase, Supabase, Razorpay). |
| **Significant Data Fiduciary (SDF)** | Data Fiduciaries designated by the Central Government based on volume, sensitivity, or national security risk. |
| **Consent Manager** | A registered entity that facilitates consent collection, management, and withdrawal between Data Principals and Fiduciaries. |
| **Data Protection Board** | Adjudicatory body constituted by the Central Government to handle complaints and impose penalties. |

---

<a name="section-2"></a>
## Section 2 — Are You a Data Fiduciary? Applicability Test {#section-2}

**If you answered YES to any one of the following questions, you are a Data Fiduciary under DPDP Act 2023 and this entire checklist applies to you.**

| # | Question | Answer |
|---|---|---|
| 01 | Does your app/website collect name, email, phone number, or any identifier from Indian users? | ☐ Yes ☐ No |
| 02 | Does your app process location data, device IDs, or IP addresses of Indian users? | ☐ Yes ☐ No |
| 03 | Does your SaaS platform store user account data on any server (including cloud)? | ☐ Yes ☐ No |
| 04 | Does your app use OTP-based authentication using phone numbers? | ☐ Yes ☐ No |
| 05 | Does your platform use analytics tools (Google Analytics, Mixpanel, Amplitude) on Indian users? | ☐ Yes ☐ No |
| 06 | Does your product serve users who could be under the age of 18? | ☐ Yes ☐ No |
| 07 | Does your app collect health, financial, or biometric data in any form? | ☐ Yes ☐ No |
| 08 | Does your app use third-party SDKs (Firebase, Crashlytics, Segment) that may collect user data? | ☐ Yes ☐ No |

---

<a name="module-01"></a>
## Module 01 — Consent Management {#module-01}

> All collection and processing of personal data must rest on valid consent or a recognised lawful basis.

### 1.1 Consent Requirements

- 🔴 **CRITICAL** — Consent is collected BEFORE any personal data is processed — not buried in T&C or inferred from use.
- ☐ No pre-ticked boxes at any point in registration or onboarding flow.
- ☐ No implicit consent derived from continued app usage.
- 🔴 **CRITICAL** — Consent request is written in clear, plain language — not legal jargon.
- ☐ Available in the language the user is engaging in.
- ☐ "I agree to Terms & Conditions" does NOT constitute DPDP-valid consent.
- 🔴 **CRITICAL** — Consent is specific and granular — separate consent for each distinct processing purpose.
- ☐ Consent for account creation is separate from consent for marketing emails.
- ☐ Consent for analytics is separate from consent for product usage.
- 🟠 **HIGH** — Consent is freely given — no "consent wall" blocking app usage unless data is strictly necessary.
- 🔴 **CRITICAL** — Consent withdrawal mechanism is single-click and as easy as giving consent.
- ☐ Withdrawal option is visible in account settings or profile page.
- ☐ Withdrawal does not require emailing support or navigating 3+ screens.
- 🟠 **HIGH** — Consent records are stored with: timestamp, consent version, IP/device ID, purpose text shown.
- 🟠 **HIGH** — When Privacy Policy or consent terms change, existing users are prompted to re-consent.
- 🔴 **CRITICAL** — Consent for sensitive data (health, biometric, financial) has heightened, explicit mechanism.

### 1.2 Lawful Bases Other Than Consent (Limited)

DPDP Act recognises very limited lawful bases beyond consent — primarily: (a) State functions and obligations, (b) compliance with legal obligations, (c) medical emergencies. Unlike GDPR, there is **NO "legitimate interest" basis** available to private companies. If your processing cannot fit consent or the narrow exemptions, it is unlawful under DPDP.

- 🔴 **CRITICAL** — All personal data processing has been mapped to either consent or one of the valid DPDP lawful bases.
- 🔴 **CRITICAL** — No processing is justified under "legitimate interest" — this basis does not exist in DPDP.
- 🟡 **MEDIUM** — Processing for employment/contractual obligations is documented with the specific legal basis cited.

---

<a name="module-02"></a>
## Module 02 — Authentication & OTP Compliance {#module-02}

> Phone number collection, OTP flows, session handling, and social login all carry distinct DPDP obligations.

### 2.1 Phone Number Collection & OTP Flow

- 🔴 **CRITICAL** — Explicit consent is obtained BEFORE the phone number input field is presented to the user.
- ☐ Consent notice must state: (a) purpose of collection, (b) how long it is retained, (c) whether it is shared with third parties (e.g. SMS gateway).
- 🔴 **CRITICAL** — OTP SMS is sent via a TRAI-registered sender ID and DLT-registered template.
- ☐ Non-registered templates are blocked by telecom operators and constitute TRAI violation separately.
- ☐ Principal Entity (PE) registration on the DLT portal is mandatory for businesses sending OTPs.
- 🔴 **CRITICAL** — Phone number is used ONLY for the stated authentication purpose — not added to marketing lists without separate consent.
- 🟠 **HIGH** — OTP expiry is enforced server-side — recommended maximum: 10 minutes.
- 🟠 **HIGH** — Failed OTP attempts are rate-limited and logged with timestamp and IP.
- 🔴 **CRITICAL** — After successful authentication, raw OTP value is not stored in logs, databases, or analytics.
- 🟠 **HIGH** — If the OTP flow involves a third-party SMS gateway (e.g. MSG91, Twilio, Kaleyra), a valid Data Processing Agreement (DPA) is in place.
  - MSG91 DPA: available via account dashboard.
  - Twilio DPA: available at twilio.com/legal/data-protection-addendum.
- 🟠 **HIGH** — Phone numbers are stored in hashed or encrypted form at rest.

### 2.2 Session & Token Management

- 🟠 **HIGH** — JWT or session tokens have a defined expiry — both access token and refresh token.
- 🟠 **HIGH** — Session tokens are invalidated server-side on logout — not just deleted client-side.
- 🟡 **MEDIUM** — Active session list is accessible to the user (device, location, last seen) — supports right to information.
- 🟡 **MEDIUM** — User can remotely terminate all active sessions from the account settings page.
- 🟠 **HIGH** — Tokens are never stored in localStorage on web — use HttpOnly Secure cookies.

### 2.3 Social Login & Third-Party Auth (Google, Apple, Facebook)

- 🔴 **CRITICAL** — Consent notice clearly discloses what data is fetched from the OAuth provider (name, email, profile photo, etc.).
- 🟠 **HIGH** — Only the minimum required OAuth scopes are requested — no excessive permissions.
- 🔴 **CRITICAL** — Data fetched via OAuth is subject to the same DPDP obligations as directly collected data.
- 🟠 **HIGH** — Users who signed up via social login can still exercise all DPDP rights (erasure, correction, information).

### 2.4 Biometric Authentication (Face ID, Fingerprint)

Biometric data is treated as sensitive personal data under DPDP. If your app uses device biometrics for authentication, the data must never leave the device (use OS-level APIs — Android BiometricPrompt, iOS LocalAuthentication). Processing biometric data on your servers requires enhanced consent and security measures.

- 🔴 **CRITICAL** — Biometric authentication uses device-native OS APIs — no raw biometric data transmitted to your servers.
- 🔴 **CRITICAL** — If any biometric data does reach your servers (e.g. facial recognition), explicit, separate consent is collected.
- 🟠 **HIGH** — Privacy policy specifically mentions biometric data collection and its purpose.

---

<a name="module-03"></a>
## Module 03 — Data Collection & Minimization {#module-03}

> Collect only what you need, for only as long as you need it.

### 3.1 Data Inventory (Mandatory First Step)

Before completing any other module, complete a Data Inventory. List every piece of personal data your product collects, the purpose for each, the retention period, and where it is stored. You cannot demonstrate compliance without this inventory.

| Data Field | Collection Point | Purpose | Retention Period | Storage Location | Shared With |
|---|---|---|---|---|---|
| Phone Number | Registration | OTP Auth | ______ | ______ | ______ |
| Email Address | Registration | Account ID | ______ | ______ | ______ |
| Full Name | Profile Setup | Display | ______ | ______ | ______ |
| Location Data | App Usage | Feature X | ______ | ______ | ______ |
| Device ID | App Launch | Analytics | ______ | ______ | ______ |
| *(Add rows)* | | | | | |

### 3.2 Minimization Principles

- 🔴 **CRITICAL** — Every data field collected has a specific, documented purpose — no "we might use this later" fields.
- 🟠 **HIGH** — Data is deleted or anonymized once the stated purpose is fulfilled.
- 🟠 **HIGH** — Retention periods are defined and enforced via automated deletion jobs — not manual processes.
- 🟡 **MEDIUM** — Analytics data is anonymized or pseudonymized before storage where possible.
- 🟠 **HIGH** — No personal data is collected purely for "business intelligence" without a clear, consented purpose.
- 🟡 **MEDIUM** — Log files containing personal data (IP, user ID, phone) have a maximum retention period of 90 days.

---

<a name="module-04"></a>
## Module 04 — User Rights Implementation {#module-04}

> Four enforceable rights must be technically implemented — not just stated in policy.

### 4.1 Right to Information

- 🔴 **CRITICAL** — Users can access a summary of all personal data held about them from within the app.
- 🟠 **HIGH** — The summary includes: data categories, purposes, retention periods, and list of third parties data is shared with.
- 🟠 **HIGH** — Data access requests are fulfilled within 30 days (implied statutory expectation).
- 🟡 **MEDIUM** — Data access mechanism does not require the user to email support — it is self-serve in the app/dashboard.

### 4.2 Right to Correction

- 🟠 **HIGH** — Users can edit and correct their personal data (name, email, phone) without contacting support.
- 🟡 **MEDIUM** — For data that cannot be self-edited (e.g. transaction records), a correction request mechanism exists.
- 🟡 **MEDIUM** — Corrections are propagated to all systems where the data was stored (main DB, analytics, backups if feasible).

### 4.3 Right to Erasure (Data Deletion)

- 🔴 **CRITICAL** — A "Delete My Account & Data" option is accessible in the app — not hidden or requiring email request.
- 🔴 **CRITICAL** — Account deletion triggers deletion of all associated personal data across all systems.
  - Primary database records.
  - Third-party analytics platforms (e.g. Mixpanel: use People API deleteUser).
  - Email marketing lists (Mailchimp/Brevo: unsubscribe + delete contact).
  - CRM entries if applicable.
- 🟠 **HIGH** — Backups are either excluded from personal data or have a defined purge cycle.
- 🟠 **HIGH** — After deletion request, data is purged within 30 days (best practice — law timeline pending rules).
- 🟡 **MEDIUM** — Deletion confirmation is sent to the user after completion.
- 🟠 **HIGH** — Data legally required to be retained (GST records, financial audit trails) is documented with legal basis and isolated.

### 4.4 Right to Nominate (India-Specific — Unique to DPDP)

This right does not exist in GDPR. Under DPDP Act, every Data Principal has the right to nominate another individual to exercise their data rights in the event of death or incapacity. While the operational rules for this are pending, the right is legally established. Platforms must plan for this mechanism.

- 🟡 **MEDIUM** — Data Fiduciary has internally documented a process for handling nomination-based rights requests.
- 🟡 **MEDIUM** — Privacy policy mentions the Right to Nominate and the process to register a nominee.
- 🟢 **LOW** — A mechanism (even email-based initially) exists for a nominee to submit and verify their claim.

---

<a name="module-05"></a>
## Module 05 — Children's Data Compliance {#module-05}

> Anyone under 18 is a child. Penalties for children's data violations: up to Rs. 200 Crore.

⚠️ **CRITICAL RISK AREA.** If any user under 18 accesses your platform without verifiable parental consent, you are in violation regardless of whether your app is "targeted" at children. A general-audience app accessed by a 16-year-old is still subject to these obligations. **"I am above 18" checkbox does NOT constitute verifiable parental consent.**

- 🔴 **CRITICAL** — Age verification mechanism is implemented beyond a self-declaration checkbox.
  - ✅ Acceptable: Government ID-based verification, credit/debit card verification (implies 18+), mobile number with Aadhaar linkage verification.
  - ❌ NOT acceptable: "I confirm I am above 18" checkbox.
- 🔴 **CRITICAL** — For identified users under 18: verifiable parental/guardian consent is obtained before any data processing.
- 🔴 **CRITICAL** — Zero behavioral tracking of any identified child user — no click tracking, session recording, heatmaps.
- 🔴 **CRITICAL** — Zero targeted advertising to child users — ad SDKs must be disabled or configured to exclude under-18 users.
- 🟠 **HIGH** — Parental consent process is documented and consent records are stored with timestamp and verification method.
- 🟠 **HIGH** — Privacy policy has a dedicated, clearly marked section on children's data handling.
- 🟠 **HIGH** — Data of child users is stored with enhanced access controls — restricted to minimum personnel.
- 🟡 **MEDIUM** — If your product does not intend to serve under-18 users, this is explicitly stated in Terms of Service with an enforcement mechanism.

---

<a name="module-06"></a>
## Module 06 — Cross-Border Data Transfer {#module-06}

> Every third-party cloud service used is a cross-border transfer. You are the Data Fiduciary — not your cloud provider.

**The most common misconception:** "Firebase/AWS will handle compliance." This is incorrect. Firebase (Google LLC, USA), Supabase (USA), Render (USA), Vercel (USA), AWS (USA) are your Data Processors. You are the Data Fiduciary. Legal liability rests with you. Cross-border transfers are permitted to all countries EXCEPT those the Central Government specifically blacklists. The blacklist is pending notification — but obligations exist now.

- 🔴 **CRITICAL** — All third-party services receiving Indian user data have been identified and listed.
  - Include: hosting (AWS, GCP, Azure), auth (Firebase, Auth0), analytics (Mixpanel, Amplitude), messaging (Twilio, MSG91), payments (Razorpay, Stripe), error tracking (Sentry), CDN (Cloudflare).
- 🔴 **CRITICAL** — A valid Data Processing Agreement (DPA) is signed with every third-party Data Processor.
  - Firebase/Google DPA: myaccount.google.com/data-and-privacy
  - AWS DPA: aws.amazon.com/agreement (included in standard AWS Customer Agreement)
  - Supabase DPA: supabase.com/privacy — request via DPA form.
  - Stripe DPA: stripe.com/legal/dpa
  - Razorpay: contact support for DPA — document the response.
- 🟠 **HIGH** — Privacy policy discloses cross-border data transfers and names the categories of recipient countries.
- 🟠 **HIGH** — Data transfer inventory is maintained: what data, to which service, in which country, under which DPA.
- 🔴 **CRITICAL** — Transfer only occurs to countries not on the Central Government blacklist (monitor meity.gov.in for updates).
- 🟡 **MEDIUM** — Sub-processor list is reviewed — your Data Processor's sub-processors also receive your users' data.

---

<a name="module-07"></a>
## Module 07 — Grievance Officer & Public Notice {#module-07}

> Mandatory appointment. Must be a named individual. Must be publicly accessible.

**The most commonly missed DPDP requirement.** Every Data Fiduciary must appoint a Grievance Officer and publish their contact details. "Contact support at support@yourapp.com" does NOT qualify. A named individual with a direct contact method is required.

- 🔴 **CRITICAL** — A named individual has been designated as the Grievance Officer.
  - Can be a founder, CTO, or legal counsel — must be a real, contactable person.
  - For Significant Data Fiduciaries: a Data Protection Officer (DPO) based in India is required.
- 🔴 **CRITICAL** — Grievance Officer's name and contact email/phone are published in the Privacy Policy.
- 🟠 **HIGH** — Grievance Officer contact is also visible in the app footer, settings page, or "Contact Us" section.
- 🟠 **HIGH** — A grievance submission mechanism exists — structured form or direct email — with auto-acknowledgment.
- 🟠 **HIGH** — Grievances are responded to within 30 days.
- 🟡 **MEDIUM** — Grievance log is maintained: complaint received date, nature of complaint, resolution, closure date.
- 🟠 **HIGH** — Privacy Notice is published as a standalone page — not only embedded in Terms of Service.
  - Must be in plain language.
  - Must list: data collected, purposes, retention, third-party sharing, user rights, grievance contact.

---

<a name="module-08"></a>
## Module 08 — Data Breach Response Protocol {#module-08}

> Mandatory notification to Data Protection Board and affected users. No defined timeline in rules yet — 72 hours is the global standard.

- 🟠 **HIGH** — A Data Breach Response Plan (DBRP) document exists — even a one-page internal SOP.
- 🟠 **HIGH** — Breach detection mechanisms are in place: anomaly alerts, unauthorized access monitoring, SIEM/logging.
- 🟠 **HIGH** — Upon detecting a breach: internal escalation path is defined (who is notified first, second, third).
- 🔴 **CRITICAL** — Data Protection Board notification is planned for within 72 hours of confirmed breach detection.
  - Board notification mechanism: to be released by Data Protection Board once constituted.
  - Monitor: dpdpboard.gov.in for updates.
- 🔴 **CRITICAL** — Affected Data Principals are notified of breach — nature of data affected, likely consequences, remediation steps.
- 🟠 **HIGH** — Breach is documented: discovery timestamp, affected records count, data categories compromised, root cause, remediation actions taken.
- 🟡 **MEDIUM** — Post-breach security audit is conducted and documented.
- 🟢 **LOW** — Breach insurance or legal retainer is evaluated for significant data processing operations.

---

<a name="module-09"></a>
## Module 09 — Third-Party & Vendor Compliance {#module-09}

> Your liability does not end at your own code. It extends to every SDK and service you embed.

- 🔴 **CRITICAL** — Every third-party SDK integrated into the app has been reviewed for data collection behavior.
  - Review: Firebase Analytics, Crashlytics, Google Ads SDK, Facebook SDK, Segment, AppsFlyer, Branch.
  - Disable data collection for SDKs not needed — do not leave defaults on.
- 🔴 **CRITICAL** — SDK data collection is disclosed in Privacy Policy — users are informed of third-party data processing.
- 🟠 **HIGH** — DPAs are executed with all vendors who process personal data on your behalf.
- 🟡 **MEDIUM** — Vendor security assessments are conducted before onboarding new processors.
- 🟠 **HIGH** — Contracts with sub-processors include DPDP-equivalent data protection obligations.
- 🟡 **MEDIUM** — Sub-processor list is reviewed quarterly for changes.
- 🟠 **HIGH** — Data shared with vendors is limited to what is strictly necessary for the contracted service.
- 🟠 **HIGH** — Vendor access to personal data is revoked immediately upon contract termination with documented deletion confirmation.

---

<a name="appendix-a"></a>
## Appendix A — Penalty Reference Table {#appendix-a}

| # | Violation Category | Section | Maximum Penalty |
|---|---|---|---|
| 01 | Failure to implement adequate security safeguards leading to data breach | Sec. 8(5) | **Rs. 250 Crore** |
| 02 | Failure to notify Data Protection Board and affected users of a personal data breach | Sec. 8(6) | **Rs. 200 Crore** |
| 03 | Violation of obligations related to children's data — including tracking, targeted ads, or processing without verifiable parental consent | Sec. 9 | **Rs. 200 Crore** |
| 04 | Failure to fulfill obligations of a Significant Data Fiduciary (SDF) | Sec. 10 | **Rs. 150 Crore** |
| 05 | Violation of duties of Data Fiduciary — including invalid consent, failure to enable rights, no grievance officer | Sec. 8 | **Rs. 50 Crore** |
| 06 | Violation of duties of Data Processor | Sec. 8(2) | **Rs. 10 Crore** |
| 07 | Breach of any other provision of the Act or Rules | General | **Rs. 50 Crore** |

> **Note on cumulative penalties:** Penalties apply per instance of violation. A non-compliant consent flow affecting 10,000 users could be treated as multiple instances. Penalties are imposed by the Data Protection Board after inquiry — they are not automatic. The Board has the power to reduce penalties based on cooperation and remediation.

---

<a name="appendix-b"></a>
## Appendix B — Compliance Score Tracker {#appendix-b}

Use this tracker to measure your current compliance status across all nine modules.

| Module | Name | Critical Items | Status | Score (0–10) | Notes |
|---|---|---|---|---|---|
| 01 | Consent Management | 6 | ☐ Started ☐ In Progress ☐ Done | ___/10 | |
| 02 | Authentication & OTP | 5 | ☐ Started ☐ In Progress ☐ Done | ___/10 | |
| 03 | Data Collection & Minimization | 2 | ☐ Started ☐ In Progress ☐ Done | ___/10 | |
| 04 | User Rights Implementation | 3 | ☐ Started ☐ In Progress ☐ Done | ___/10 | |
| 05 | Children's Data | 5 | ☐ Started ☐ In Progress ☐ Done | ___/10 | |
| 06 | Cross-Border Transfer | 3 | ☐ Started ☐ In Progress ☐ Done | ___/10 | |
| 07 | Grievance Officer | 2 | ☐ Started ☐ In Progress ☐ Done | ___/10 | |
| 08 | Data Breach Response | 3 | ☐ Started ☐ In Progress ☐ Done | ___/10 | |
| 09 | Third-Party Compliance | 2 | ☐ Started ☐ In Progress ☐ Done | ___/10 | |
| | **TOTAL** | | | **___/90** | |

### Score Interpretation

| Score | Rating | Interpretation |
|---|---|---|
| 81–90 | ✅ COMPLIANT | Strong compliance posture. Maintain and monitor rules updates. |
| 61–80 | 🟡 MOSTLY COMPLIANT | Address HIGH and CRITICAL gaps before enforcement begins. |
| 41–60 | 🟠 PARTIAL COMPLIANCE | Significant gaps. Prioritize critical items immediately. |
| 21–40 | 🔴 NON-COMPLIANT | Immediate remediation required. Legal exposure is significant. |
| 00–20 | 🚨 CRITICAL RISK | Cease data collection until core compliance is established. |

---

<a name="implementation-guide"></a>
## Implementation Guide — Steps to Apply DPDP Compliance to an Existing Project {#implementation-guide}

This section provides a concrete, ordered implementation roadmap for engineering and product teams retrofitting DPDP compliance into a live application.

---

### Phase 1 — Audit and Inventory (Week 1)

**Goal:** Know exactly what data you have, where it lives, and what touches it.

#### Step 1.1 — Run a Full Data Audit

Map every data field your application collects. For each field, document:
- What it is (name, phone, IP, device ID, etc.)
- Where it is collected (registration, checkout, analytics SDK, background service)
- Why it is collected (authentication, personalization, analytics, marketing)
- Where it is stored (primary DB, Redis, S3, third-party service)
- How long it is kept (indefinite, 30 days, until account deletion)
- Who it is shared with (Firebase, Stripe, Mixpanel, internal teams)

Use the Data Inventory table in Module 03 as your template. Store this as a living document in your internal wiki.

#### Step 1.2 — Audit All Third-Party SDKs and Services

List every SDK embedded in your mobile app or web frontend. For each:
- Check its default data collection settings
- Identify whether a DPA exists with that vendor
- Flag any SDK that collects data beyond its core function

Common SDKs to audit: Firebase Analytics, Crashlytics, Google Ads SDK, Facebook SDK, Segment, AppsFlyer, Branch, Mixpanel, Amplitude, Sentry, Intercom, Hotjar.

#### Step 1.3 — Map Your Consent Gaps

Walk through your current onboarding flow and answer:
- Is consent collected before data is collected?
- Is consent granular (separate for analytics, marketing, auth)?
- Is there a withdrawal mechanism visible without contacting support?
- Are consent records stored with timestamps?

Document every gap as a Jira/Linear ticket with CRITICAL or HIGH priority.

---

### Phase 2 — Consent Infrastructure (Week 2–3)

**Goal:** Build or retrofit a compliant consent layer.

#### Step 2.1 — Build a Consent Management Component

Create a `ConsentManager` service in your backend with these capabilities:

```
ConsentManager
  - recordConsent(userId, purpose, version, ipAddress, timestamp)
  - withdrawConsent(userId, purpose, timestamp)
  - getConsentStatus(userId, purpose) → boolean
  - getConsentHistory(userId) → [ ]
  - promptReConsent(userId) → when policy version changes
```

Store consent records in a dedicated table with columns:
`user_id | purpose | consented | version | ip_address | device_id | timestamp | withdrawn_at`

#### Step 2.2 — Update Onboarding and Registration Flows

- Move all data collection fields to appear only after explicit consent UI is shown.
- Replace single "I agree to T&C" with a purpose-specific consent screen.
- Add separate toggles for: analytics data, marketing communications, personalization.
- Pre-ticked boxes must be replaced with empty opt-in checkboxes.
- Store the exact text shown to the user at the time of consent alongside the consent record.

#### Step 2.3 — Build Consent Withdrawal UI

Add to account settings or profile page:
- A "Manage My Data Preferences" section.
- Toggle for each consent purpose currently granted.
- A single-click withdrawal that updates the ConsentManager and stops the associated processing.
- Withdrawal confirmation shown immediately without requiring page reload.

#### Step 2.4 — Handle Policy Version Changes

- Assign a version number to every iteration of your Privacy Policy and consent text.
- When a new version is published, trigger a re-consent prompt for all existing users on next login.
- Users who do not re-consent within a defined window should have their non-essential processing paused.

---

### Phase 3 — OTP and Authentication Hardening (Week 2)

**Goal:** Make every auth flow DPDP and TRAI compliant.

#### Step 3.1 — DLT Registration (If Sending OTPs)

- Register as a Principal Entity (PE) on the DLT portal (bharatdlt.com or jiotpe.com depending on telecom provider).
- Register your OTP SMS template. Template must match exactly what is sent — any deviation causes delivery failure.
- Use only TRAI-registered sender IDs (e.g. MYAPPOTP, not a random number).

#### Step 3.2 — OTP Flow Security

Implement these server-side controls:

```
OTP Generation:
  - Generate cryptographically random 6-digit OTP
  - Store only the hashed OTP (bcrypt or SHA-256), never plaintext
  - Set expiry: 10 minutes maximum
  - Set attempt limit: 3 attempts before blocking

OTP Verification:
  - Compare hash of submitted OTP against stored hash
  - Delete OTP record immediately after successful verification
  - Log: timestamp, IP, user_id, success/failure — never log the OTP value itself

Rate Limiting:
  - Max 3 OTP requests per phone number per 15 minutes
  - Block after 5 failed attempts for 30 minutes
  - Log all rate limit events
```

#### Step 3.3 — Session Token Hardening

- Set access token expiry: 15–60 minutes.
- Set refresh token expiry: 7–30 days.
- On logout: invalidate the refresh token server-side (delete from DB or add to blocklist).
- On web: use HttpOnly, Secure, SameSite=Strict cookies for tokens — never localStorage.
- Provide users a "Sessions" page showing active devices with a "Log out all devices" button.

#### Step 3.4 — Social Login Disclosure

- Before the OAuth redirect, show a modal listing exactly which data fields will be fetched from the provider.
- Request only the minimum OAuth scopes needed (typically: email, name — nothing else unless justified).
- After OAuth callback, apply the same ConsentManager recordConsent logic as direct registration.

---

### Phase 4 — User Rights Endpoints (Week 3–4)

**Goal:** All four DPDP rights must be exercisable by the user without contacting support.

#### Step 4.1 — Right to Information (Data Download)

Build a `/api/user/my-data` endpoint that returns a structured JSON or PDF summary of all data held:

```json
{
  "profile": { "name": "...", "email": "...", "phone": "..." },
  "consent_history": [ { "purpose": "analytics", "granted": "2024-01-01", "withdrawn": null } ],
  "activity_summary": { "last_login": "...", "sessions_count": 12 },
  "third_party_sharing": [ "Firebase Analytics", "Stripe" ],
  "data_retention": { "account_data": "Until deletion", "logs": "90 days" }
}
```

Surface this in the app under Settings → Privacy → Download My Data.

#### Step 4.2 — Right to Correction

- Audit every profile field. Make all editable fields directly editable in the UI.
- For fields that cannot be self-edited (e.g. verified phone used for billing), add a "Request Correction" form that creates an internal ticket with a 30-day SLA.
- When a field is updated, propagate the change to all systems (CRM, analytics, email platform) within 24 hours via internal event.

#### Step 4.3 — Right to Erasure (Account Deletion Pipeline)

Build a deletion pipeline that handles every data store:

```
DeletionPipeline.execute(userId):
  1. Mark account as "deletion_requested" with timestamp
  2. Revoke all active sessions and tokens
  3. Delete primary DB records (users, profiles, preferences)
  4. Delete from analytics: Mixpanel.deleteUser(userId), Amplitude.deleteUser(userId)
  5. Unsubscribe + delete from email platform (Mailchimp, Brevo, SendGrid)
  6. Delete from CRM (HubSpot, Salesforce) via API
  7. Anonymize transaction records where legal retention applies (replace PII with "DELETED_USER")
  8. Schedule backup purge after backup rotation cycle completes
  9. Send deletion confirmation email
  10. Log deletion event with timestamp and scope
```

Add "Delete My Account" under Settings → Account → Delete Account. Do not hide it behind multiple confirmation screens beyond one final confirmation modal.

#### Step 4.4 — Right to Nominate

For the current phase, implement a minimum viable process:
- Add a "Nominate a Representative" section to the Privacy Policy explaining the right.
- Set up a dedicated email (nominee@yourdomain.com) for nominee claims.
- Create an internal SOP for how the team will verify and process nominee requests.

---

### Phase 5 — Children's Data Controls (Week 3–4, if applicable)

**Goal:** Prevent under-18 access or enforce strict controls if they access the platform.

#### Step 5.1 — Age Gate Implementation

Replace the "I am 18+" checkbox with one of:
- **Option A (recommended):** Mobile number + Aadhaar OTP-based age verification via a licensed UIDAI API partner.
- **Option B:** Credit or debit card verification step (card ownership implies 18+).
- **Option C:** If your product strictly excludes minors — add ToS clause + rate-limit new account creation to detect abuse patterns.

#### Step 5.2 — If Minors Access Your Platform

If your product intentionally or potentially serves under-18 users:
- Build a parental consent flow: parent email → OTP to parent → consent record stored with parent's verified contact + timestamp.
- On identification of a minor user: disable all ad SDKs for that user (pass a `childDirected: true` flag to Google Ads SDK, Facebook SDK, etc.).
- Disable behavioral tracking SDKs entirely for the user session.
- Restrict data access internally — minor user data accessible only to minimum required personnel.

---

### Phase 6 — Cross-Border and Vendor DPAs (Week 4)

**Goal:** Have a signed DPA with every vendor touching Indian user data.

#### Step 6.1 — Collect All DPAs

Work through this list and collect or execute a DPA with each:

| Vendor | DPA Location | Action |
|---|---|---|
| Google / Firebase | myaccount.google.com/data-and-privacy | Accept online |
| AWS | aws.amazon.com/agreement | Included in standard agreement |
| Supabase | supabase.com/privacy | Request via DPA form |
| Stripe | stripe.com/legal/dpa | Accept online |
| Twilio | twilio.com/legal/data-protection-addendum | Accept online |
| MSG91 | Account dashboard | Download and sign |
| Razorpay | Contact support | Email and document response |
| Sentry | sentry.io/legal | Accept online |
| Mixpanel / Amplitude | Vendor legal pages | Request DPA form |
| Cloudflare | cloudflare.com/gdpr/introduction | Included in ToS |

Store all signed DPAs in a shared legal folder (Google Drive / Notion / Confluence) with expiry tracking.

#### Step 6.2 — Update Privacy Policy

Your Privacy Policy must be updated to:
- Name all third-party Data Processors and the countries where they process data.
- State that cross-border transfers occur and to which regions (e.g. USA, EU).
- Link to or reference the DPAs that govern those transfers.
- Commit to monitoring meity.gov.in for blacklist updates.

---

### Phase 7 — Grievance Officer Setup (Week 1 — Do This First)

**Goal:** Appoint a named Grievance Officer and make them publicly reachable.

#### Step 7.1 — Designate the Grievance Officer

Choose a real person (founder, CTO, legal counsel). Document internally:
- Their full name
- Their direct email address for grievances
- Their response SLA (30 days maximum)

#### Step 7.2 — Publish Contact Details

Add the following to your Privacy Policy:

```
Grievance Officer
Name: [Full Name]
Designation: [Title]
Email: grievance@yourdomain.com
Response time: Within 30 days of receipt
```

Also add a link to the Privacy Policy section in your app footer, settings page, and "Contact Us" page.

#### Step 7.3 — Build Grievance Intake

- Create a simple grievance form (Google Form, Typeform, or in-app form) that captures: name, email, description, type of grievance, supporting evidence.
- Set up an auto-acknowledgment email on submission.
- Route all submissions to a shared internal inbox (grievance@yourdomain.com) watched by the Grievance Officer.
- Maintain a spreadsheet or ticket log: received date, nature, assigned to, resolved date.

---

### Phase 8 — Data Breach Response Plan (Week 4)

**Goal:** Have a written plan before a breach happens.

#### Step 8.1 — Write the DBRP Document

Create a one-page internal SOP covering:

```
Data Breach Response Plan (DBRP)

Detection:
  - Sources: SIEM alerts, user reports, vendor notifications, penetration test findings

Containment (0–2 hours):
  - Isolate affected systems
  - Revoke compromised credentials
  - Preserve logs and evidence

Assessment (2–24 hours):
  - Identify data categories and volume affected
  - Determine root cause
  - Assess severity (low / medium / high / critical)

Notification (24–72 hours):
  - Notify Data Protection Board within 72 hours (when Board is constituted — monitor dpdpboard.gov.in)
  - Notify affected users: what happened, what data was exposed, what they should do

Documentation:
  - Timestamp of discovery
  - Records count and data categories affected
  - Root cause analysis
  - Remediation steps taken
  - Post-breach security changes

Post-Breach:
  - Internal security audit within 30 days
  - Update threat model
  - Communicate resolution to affected users
```

#### Step 8.2 — Set Up Detection Infrastructure

- Enable anomaly detection alerts in your cloud provider (AWS GuardDuty, GCP Security Command Center).
- Set up login anomaly alerts: multiple failed attempts, logins from new geographies, bulk data export events.
- Ensure logs are stored for a minimum of 90 days and accessible for forensic review.

---

### Phase 9 — Privacy Policy and Documentation (Week 4–5)

**Goal:** A standalone, compliant Privacy Policy that a user can actually understand.

#### Step 9.1 — Rewrite the Privacy Policy

Your Privacy Policy must be:
- A standalone page (not embedded in Terms of Service)
- Written in plain language (avoid legal jargon)
- Available in regional languages if your app serves non-English users

Required sections:
1. Who we are and who to contact (including Grievance Officer)
2. What personal data we collect and from where
3. Why we collect it (purpose for each category)
4. How long we keep it (retention period per category)
5. Who we share it with (list all third-party processors by name)
6. Cross-border data transfers (countries and basis)
7. Your rights (Information, Correction, Erasure, Nomination)
8. How to exercise your rights (with direct links, not "email us")
9. Children's data policy
10. How we handle data breaches
11. How this policy changes and how you will be notified

#### Step 9.2 — Version Control the Policy

- Assign a version number and effective date to every policy update.
- Maintain an archive of previous versions with their effective date ranges.
- Send in-app notification and email to all users when a material change is made.

---

### Implementation Timeline Summary

| Week | Phase | Key Deliverables |
|---|---|---|
| Week 1 | Audit + Grievance Officer | Data inventory, SDK audit, consent gap map, Grievance Officer appointed and published |
| Week 2 | OTP/Auth + Consent Layer | DLT registration, OTP hardening, ConsentManager service built |
| Week 3 | Consent UI + User Rights | Onboarding consent flow updated, Data Download + Correction + Deletion endpoints |
| Week 4 | Children + Cross-Border + Breach | Age gate (if needed), DPAs collected, DBRP document written, detection alerts set up |
| Week 5 | Privacy Policy + Docs | Privacy Policy rewritten, policy versioning system, compliance score tracker completed |

---

### Ongoing Compliance Tasks (Post-Launch)

- Monitor meity.gov.in and dpdp.gov.in monthly for new rules and blacklist updates.
- Review all consent records quarterly to confirm withdrawal requests were honored.
- Review sub-processor list quarterly for new additions or changes.
- Conduct an annual internal compliance audit against this checklist.
- Re-run the Compliance Score Tracker (Appendix B) every 6 months.
- Update Privacy Policy when any data collection practice changes — before the change goes live.

---

> **Disclaimer:** This document is a technical reference prepared for informational purposes based on the publicly available text of the Digital Personal Data Protection Act 2023. It does not constitute legal advice. Rules under the Act are pending notification by the Central Government and may alter specific compliance obligations. Organisations should consult qualified legal counsel before making compliance decisions. Monitor dpdp.gov.in and meity.gov.in for official updates.