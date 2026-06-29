# DPDP Act 2023
## Technical Compliance & Implementation Guide

*India · MeitY · 2023 · Passed August 11, 2023 · Gazette of India (Extraordinary)*

---

> **Authored by**
>
> **Shubham Narkhede**
> [www.shubhamnarkhede.com](https://www.shubhamnarkhede.com)

---

*For informational purposes only. Consult qualified legal counsel before acting on this document. Monitor dpdp.gov.in and meity.gov.in for official updates.*

---

## Table of Contents

| Reference | Section | Coverage |
|---|---|---|
| Section 01 | What is DPDP Act 2023? | Overview & Key Definitions |
| Section 02 | Are You a Data Fiduciary? | Applicability Test |
| Module 01 | Consent Management | Consent requirements & lawful bases |
| Module 02 | Authentication & OTP Compliance | OTP, sessions, social login, biometrics |
| Module 03 | Data Collection & Minimization | Data inventory & minimization principles |
| Module 04 | User Rights Implementation | Information, Correction, Erasure, Nomination |
| Module 05 | Children's Data Compliance | Age verification & parental consent |
| Module 06 | Cross-Border Data Transfer | DPAs and third-party processors |
| Module 07 | Grievance Officer & Public Notice | Appointment & grievance intake |
| Module 08 | Data Breach Response Protocol | Detection, notification & documentation |
| Module 09 | Third-Party & Vendor Compliance | SDK audit & vendor obligations |
| Appendix A | Penalty Reference Table | All 7 violation categories with amounts |
| Appendix B | Compliance Score Tracker | Self-assessment grid & rating scale |
| Part II | Implementation Guide | 9-phase step-by-step for existing projects |
| Part III | International Project Guidelines | GDPR, CCPA, PDPA, PIPL comparisons |

---

## Executive Summary

The Digital Personal Data Protection Act 2023 is India's first comprehensive data privacy law, establishing binding obligations on any organisation that collects, stores, or processes personal data of Indian users. Passed by Parliament on August 11, 2023, the Act replaces fragmented IT Act provisions and introduces a modern consent-first framework with significant financial penalties.

Unlike GDPR, DPDP does not recognise "legitimate interest" as a lawful basis for processing. This single difference has the widest practical impact — every product that passively collects behavioural data, runs analytics, or uses retargeting must obtain explicit, granular consent before that processing begins. The absence of rules does not mean the absence of obligations. Core compliance requirements are legally in force today.

**Key Findings**

- No "legitimate interest" basis exists in DPDP. Consent is the primary lawful basis for private entities.
- The children's data provisions apply to all general-audience products — not just apps targeting minors. Any user under 18 triggers the obligation.
- Every third-party cloud service (Firebase, AWS, Supabase) is a cross-border data transfer. The Data Fiduciary — not the cloud provider — carries the legal liability.
- Grievance Officer appointment is the most commonly missed requirement. A support email does not qualify. A named individual with published contact is mandatory.
- Penalties are cumulative per violation instance. A non-compliant consent flow affecting 50,000 users could be treated as 50,000 separate violations.

**Penalty Exposure at a Glance**

| Violation | Maximum Penalty |
|---|---|
| Inadequate security safeguards leading to breach | **Rs. 250 Crore** |
| Children's data violations or failure to notify breach | **Rs. 200 Crore** |
| Duties of Data Fiduciary — invalid consent, missing user rights | **Rs. 50 Crore** |

> **Decision Required**
>
> Rules under the Act are pending Central Government notification. Once notified, the Data Protection Board will begin enforcement. Products that begin retrofitting compliance today will have documented remediation efforts on record — a factor the Board is authorised to consider when determining penalty amounts. Products that wait will have no such record.

---

## Section 01 — What is DPDP Act 2023?

*Overview, History & Key Definitions*

The DPDP Act introduces a new legal category — the Data Fiduciary — and places the full weight of compliance on any entity that determines the purpose and means of processing personal data. This is a broader definition than most founders expect. It covers startups, solo apps, B2B SaaS platforms, and consumer products equally. Size is not a threshold for applicability.

### Core Terminology

| Term | Definition | Practical Example |
|---|---|---|
| Personal Data | Any data that identifies a natural person — name, email, phone, IP, device ID, location, biometric. | An email address collected at signup is personal data. An anonymised session count is not. |
| Data Principal | The individual whose personal data is being processed. They hold four enforceable rights under the Act. | Your app's end user. |
| Data Fiduciary | Any entity that determines the purpose and means of processing personal data. | Your company — regardless of whether you self-host or use cloud providers. |
| Data Processor | Any entity processing personal data on behalf of a Data Fiduciary. | AWS, Firebase, Supabase, Razorpay, Twilio. |
| Significant Data Fiduciary | A Data Fiduciary designated by Government based on data volume, sensitivity, or national security risk. | Large consumer platforms, health apps, financial aggregators — designation pending. |
| Consent Manager | A registered intermediary managing consent collection and withdrawal. | An independent DPDP-registered consent infrastructure provider. |

### How DPDP Differs from GDPR

| Aspect | GDPR (EU) | DPDP Act 2023 (India) | Action Required |
|---|---|---|---|
| Legitimate Interest | Available as lawful basis | Does not exist | Audit all LI processing — convert to consent or cease. |
| Children Age | 16 years (13 in some states) | 18 years — no exceptions | Any user possibly under 18 triggers full obligations. |
| Right to Nominate | Not available | Unique India right | Add nominee registration to Privacy Policy. |
| Data Localisation | No general mandate | Blacklist-based (pending) | Monitor meity.gov.in monthly. Map all cross-border flows. |
| DPO Requirement | For certain controllers | Significant Data Fiduciaries only | Designate Grievance Officer now. |
| Max Penalty | €20M or 4% global turnover | Rs. 250 Crore per violation | Per-instance model — user count × violation = exposure. |

---

## Section 02 — Are You a Data Fiduciary?

*Applicability Test — YES to any one = full compliance required*

> **Risk Alert**
>
> If you answered YES to any single question below, the entire Act applies to your product. There is no minimum size threshold, no revenue threshold, and no grace period for established products.

| # | Question |
|---|---|
| 01 | Does your app collect name, email, phone, or any identifier from Indian users? |
| 02 | Does your app process location data, device IDs, or IP addresses of Indian users? |
| 03 | Does your SaaS platform store user account data on any server — including cloud? |
| 04 | Does your app use OTP-based authentication using phone numbers? |
| 05 | Do you use analytics tools (Google Analytics, Mixpanel, Amplitude) on Indian users? |
| 06 | Could any user of your product be under 18? |
| 07 | Do you collect health, financial, or biometric data in any form? |
| 08 | Do you use third-party SDKs (Firebase, Crashlytics, Segment) that may collect user data? |

---

## Module 01 — Consent Management

*The foundation of every data processing decision in your product.*

Consent under DPDP is not a checkbox event. It is an ongoing, purpose-specific, withdrawable agreement that must be collected before data processing begins. The single most common compliance failure across Indian products today is processing data — analytics, OTP, behavioural tracking — before any consent mechanism is presented.

> **Risk Alert**
>
> "I agree to our Terms & Conditions" is not valid DPDP consent. DPDP requires consent to be: specific to purpose, obtained before processing, written in plain language, freely given without coercion, and as easy to withdraw as it was to give. Products currently relying on bundled T&C acceptance are in violation from the moment they process any Indian user's data.

### Why You Need This

Consent is the foundation of DPDP compliance. Invalid consent exposes you to Rs. 50 Crore penalties. Unlike GDPR, there is no legitimate interest basis — if processing cannot be tied to consent or a narrow exemption, it is unlawful.

### Checklist

| Priority | Item |
|---|---|
| `CRITICAL` | Consent collected before any personal data is processed. No pre-ticked boxes. No implicit consent from app usage. |
| `CRITICAL` | Consent written in plain language, available in user's language of engagement. "I agree to T&C" is invalid. |
| `CRITICAL` | Consent is granular — each distinct processing purpose has its own separate consent. |
| `HIGH` | Consent freely given — no blocking app access unless data is strictly necessary. |
| `CRITICAL` | Withdrawal is single-click and as accessible as giving consent. Not behind a support email. |
| `HIGH` | Consent records stored with: timestamp, version, IP/device ID, and exact purpose text shown. |
| `HIGH` | When Privacy Policy changes materially, existing users are re-consented. |
| `CRITICAL` | Sensitive data (health, biometric, financial) has a heightened, explicit consent mechanism. |
| `CRITICAL` | All processing mapped to consent or a valid DPDP lawful basis. Legitimate interest does not exist. |

### Implementation

**Step 01 — Consent Gap Audit**

Walk through your product's entire user journey and mark every point where data is collected. For each point, answer: does the user have an active consent record for this specific purpose before this data is collected?

Common gaps:
- Registration flow collects email/phone before any consent screen appears.
- Analytics SDK fires on first app launch before user sees onboarding.
- Crash reporting tools initialised before consent.
- Social login fetches profile data without disclosing what is fetched.

```sql
-- Consent Records Table
CREATE TABLE consent_records (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID NOT NULL REFERENCES users(id),
  purpose      VARCHAR(100) NOT NULL,
  consented    BOOLEAN NOT NULL,
  version      VARCHAR(20) NOT NULL,
  ip_address   INET,
  device_id    VARCHAR(255),
  consent_text TEXT NOT NULL,
  created_at   TIMESTAMPTZ DEFAULT NOW(),
  withdrawn_at TIMESTAMPTZ,
  UNIQUE(user_id, purpose)
);

CREATE INDEX idx_consent_user_purpose ON consent_records(user_id, purpose);
```

**Step 02 — ConsentManager Service**

```typescript
export class ConsentManager {
  async recordConsent(params: {
    userId: string;
    purpose: string;
    version: string;
    ipAddress: string;
    deviceId?: string;
    consentText: string;
  }): Promise<void> {
    await db.consentRecords.upsert({
      where:  { userId_purpose: { userId: params.userId, purpose: params.purpose } },
      create: { ...params, consented: true, createdAt: new Date() },
      update: { ...params, consented: true, withdrawnAt: null },
    });
  }

  async withdrawConsent(userId: string, purpose: string): Promise<void> {
    await db.consentRecords.update({
      where: { userId_purpose: { userId, purpose } },
      data:  { consented: false, withdrawnAt: new Date() },
    });
    await this.stopProcessingForPurpose(userId, purpose);
  }

  async getConsentStatus(userId: string, purpose: string): Promise<boolean> {
    const record = await db.consentRecords.findUnique({
      where: { userId_purpose: { userId, purpose } },
    });
    return record?.consented === true && record?.withdrawnAt === null;
  }
}
```

### System Prompt — Consent Management Audit & Implementation

```
## Role
You are a DPDP Act 2023 compliance engineer conducting a consent management audit
and implementation review.

## Context
- Indian law requires explicit, granular, pre-collection consent for every processing purpose.
- There is no legitimate interest basis available to private entities under DPDP.
- Consent withdrawal must be as simple as consent itself — single-click, from a visible
  settings page.
- Consent records must include: userId, purpose, policy version, IP, device ID, and exact
  text shown.

## Audit Task
Review the provided codebase or flow description and answer:
1. At which points does data collection occur before a consent screen is shown?
2. Which processing purposes lack their own separate consent toggle?
3. Is there a single-click withdrawal mechanism in account settings?
4. Are consent records stored with all required fields?
5. When the Privacy Policy changes, are existing users re-consented?

## Implementation Task
1. Generate the consent_records DB table schema (PostgreSQL).
2. Write the ConsentManager service with: recordConsent, withdrawConsent,
   getConsentStatus, getHistory.
3. Write the updated onboarding flow pseudocode.
4. Write the withdrawal UI component pseudocode.

## Output Format
Gap List: Location | Issue | Priority | Estimated Fix Time
ConsentManager code in the codebase language
DB schema SQL
Updated onboarding flow pseudocode

## Hard Constraints
- Never suggest "legitimate interest" as a justification.
- Never bundle multiple processing purposes into one consent item.
- Withdrawal must not require contacting support.
```

---

## Module 02 — Authentication & OTP Compliance

*Phone numbers, OTP flows, session management, social login, and biometrics.*

Phone numbers are personal data the moment they are entered into an input field. The obligation to obtain consent begins before the field is rendered — not after the user submits their number.

### Why You Need This

Phone numbers are personal data. Storing raw OTPs or insecure session tokens is a data breach risk. TRAI non-compliance (unregistered DLT templates) causes delivery failure and separate regulatory risk.

### Checklist

| Priority | Item |
|---|---|
| `CRITICAL` | Explicit consent obtained before the phone number input field is rendered. |
| `CRITICAL` | OTP SMS sent via a TRAI-registered sender ID and DLT-registered template. |
| `CRITICAL` | Phone number used only for stated authentication purpose — not added to marketing lists without separate consent. |
| `HIGH` | OTP expiry enforced server-side — maximum 10 minutes. |
| `HIGH` | Failed OTP attempts rate-limited and logged with timestamp and IP. |
| `CRITICAL` | Raw OTP value never stored in logs, databases, or analytics after verification. |
| `HIGH` | Third-party SMS gateway has a signed Data Processing Agreement. |
| `HIGH` | Phone numbers stored hashed or encrypted at rest. |
| `HIGH` | JWT/session tokens have defined expiry for both access and refresh tokens. |
| `HIGH` | Session tokens invalidated server-side on logout. |
| `HIGH` | Tokens stored in HttpOnly Secure cookies on web — never in localStorage. |
| `CRITICAL` | Consent notice discloses what data is fetched from OAuth provider before social login redirect. |
| `CRITICAL` | Biometric authentication uses device-native OS APIs — no raw biometric data sent to servers. |

### Implementation

**Step 01 — DLT Registration**

Register as a Principal Entity (PE) on bharatdlt.com before any OTP is sent. The template text must match exactly what is sent — any deviation causes delivery failure.

**Step 02 — Secure OTP Flow**

```typescript
export class OTPService {
  async generate(phone: string): Promise<string> {
    const otp = crypto.randomInt(100000, 999999).toString();
    const hash = await bcrypt.hash(otp, 10);

    await db.otpRecords.upsert({
      where:  { phone },
      create: { phone, hash, expiresAt: new Date(Date.now() + 10 * 60_000), attempts: 0 },
      update: { hash, expiresAt: new Date(Date.now() + 10 * 60_000), attempts: 0 },
    });

    return otp; // Send via SMS only — never persist the plaintext value
  }

  async verify(phone: string, submitted: string): Promise<boolean> {
    const record = await db.otpRecords.findUnique({ where: { phone } });

    if (!record)                        throw new Error('OTP not found');
    if (record.expiresAt < new Date())  throw new Error('OTP expired');
    if (record.attempts >= 3)           throw new Error('Too many attempts');

    await db.otpRecords.update({
      where: { phone },
      data:  { attempts: { increment: 1 } }
    });

    const valid = await bcrypt.compare(submitted, record.hash);

    if (valid || record.attempts >= 2) {
      await db.otpRecords.delete({ where: { phone } });
    }

    return valid;
  }
}
```

### System Prompt — OTP & Authentication Security Audit

```
## Role
You are a security and DPDP Act 2023 compliance engineer auditing authentication flows.

## Context
- Phone numbers are personal data. Consent must be shown before the phone input field appears.
- OTP values must never be stored in plaintext — only hashed.
- TRAI requires DLT-registered sender IDs and templates for all OTP SMS.
- Session tokens must be invalidated server-side on logout.
- Tokens must be in HttpOnly Secure cookies on web — not localStorage.

## Audit Questions
1. Is consent shown before the phone number input field?
2. Is the OTP hashed before storage? Is the raw value ever logged?
3. Is OTP expiry enforced server-side?
4. Are tokens invalidated server-side on logout?
5. Are tokens in HttpOnly cookies on web?
6. Does the app have DLT-registered sender ID and template?

## Output
Security gap table: Issue | Severity | Fix
Rewrite of OTP service in the codebase language
Session management architecture recommendation
DLT registration checklist
```

---

## Module 03 — Data Collection & Minimization

*Collect only what you need. Keep it only as long as necessary.*

Data minimization is not a compliance formality. Every data field without a documented purpose is a liability — it extends your breach surface, complicates deletion pipelines, and cannot be legally justified if questioned.

> **Insight**
>
> You cannot demonstrate DPDP compliance without a Data Inventory. The Data Inventory is the audit trail that maps every personal data field to a purpose, a retention period, and a storage location. Its absence is itself evidence of non-compliance.

### Data Inventory Template

| Field | Collected At | Purpose | Retention | Storage | Shared With |
|---|---|---|---|---|---|
| Phone Number | Registration | OTP authentication | Duration of account | Primary DB (hashed) | SMS gateway (DPA required) |
| Email Address | Registration | Account ID, notifications | Duration of account | Primary DB | Email platform (DPA required) |
| Full Name | Profile setup | Display, contracts | Duration of account | Primary DB | None |
| IP Address | All requests | Security, rate limiting | 90 days, then purge | Server logs | None |
| Device ID | App launch | Analytics | 30 days, anonymised after | Analytics DB | Analytics platform (DPA required) |
| Location | Feature use | Feature delivery only | Session only | Cache, not persisted | Maps SDK if applicable |

### Checklist

| Priority | Item |
|---|---|
| `CRITICAL` | Every data field has a specific, documented purpose. |
| `HIGH` | Data deleted or anonymised once the stated purpose is fulfilled. |
| `HIGH` | Retention periods enforced by automated jobs — not manual processes. |
| `MEDIUM` | Analytics data anonymised or pseudonymised before long-term storage. |
| `MEDIUM` | Log files with personal data purged after 90 days maximum. |

### Implementation

```sql
-- Automated retention deletion jobs

-- Purge server logs older than 90 days
DELETE FROM request_logs
WHERE created_at < NOW() - INTERVAL '90 days';

-- Anonymise analytics events after 30 days
UPDATE analytics_events
SET    user_id    = NULL,
       ip_address = NULL,
       device_id  = NULL,
       anonymised = true
WHERE  created_at < NOW() - INTERVAL '30 days'
  AND  anonymised = false;

-- Delete OTP records older than 15 minutes (safety net)
DELETE FROM otp_records
WHERE created_at < NOW() - INTERVAL '15 minutes';

-- Audit log
INSERT INTO compliance_audit_log (event, ran_at)
VALUES ('retention_purge', NOW());
```

### System Prompt — Data Inventory & Minimization Audit

```
## Role
You are a DPDP Act 2023 data governance engineer.

## Context
- Every personal data field must have a documented, lawful purpose.
- Data must be deleted or anonymised once its purpose is fulfilled.
- Retention periods must be automated — manual deletion is not compliant.
- Log files with PII must be purged at 90 days maximum.

## Task
1. Review the database schema and identify every personal data field.
2. For each field: document collection point, current retention, and purpose.
3. Flag fields with no documented purpose as CRITICAL violations.
4. Identify log tables with PII and no purge schedule.
5. Generate the completed Data Inventory table.
6. Write automated deletion/anonymisation SQL.
7. Recommend fields for removal.

## Output
Completed Data Inventory table
Gap list: Field | Issue | Priority
Automated deletion SQL
Fields recommended for removal
```

---

## Module 04 — User Rights Implementation

*Four enforceable rights that must be built — not just described in policy.*

DPDP establishes four rights that are individually enforceable by users through the Data Protection Board. A privacy policy that describes these rights but does not implement them technically is not compliant. The most common failure is treating data access and deletion as support tickets rather than self-service product features.

### Rights Summary

| Right | What It Requires | Common Failure |
|---|---|---|
| Right to Information | Self-serve data download in-app | "Email us for your data" — not compliant |
| Right to Correction | Editable profile fields without contacting support | Fields locked behind support requests |
| Right to Erasure | Deletion cascades to all systems — DB, analytics, email, CRM | Deletes primary DB only |
| Right to Nominate | Nominee registration published in Privacy Policy | Not mentioned anywhere |

### Checklist

| Priority | Item |
|---|---|
| `CRITICAL` | Users can download all personal data held about them from within the app — not via email request. |
| `CRITICAL` | "Delete My Account & Data" accessible in-app — not hidden, not behind a support email. |
| `CRITICAL` | Account deletion cascades to analytics, email platforms, CRM, and backups. |
| `HIGH` | Profile fields directly editable without contacting support. |
| `HIGH` | Data purged within 30 days of deletion request. |
| `MEDIUM` | Privacy Policy mentions the Right to Nominate and how to register a nominee. |

### Implementation — Account Deletion Pipeline

```typescript
export async function executeDeletion(userId: string): Promise<void> {

  // Step 0: Mark as pending — stop all further data processing
  await db.users.update({
    where: { id: userId },
    data:  { status: 'deletion_pending', deletionRequestedAt: new Date() }
  });

  // Step 1: Revoke all sessions and tokens
  await db.sessions.deleteMany({ where: { userId } });
  await db.refreshTokens.deleteMany({ where: { userId } });

  // Step 2: Delete primary records (cascade via DB foreign keys)
  await db.users.delete({ where: { id: userId } });

  // Step 3: Analytics platforms
  await mixpanel.people.delete({ $distinct_ids: [userId] });
  await amplitude.userPrivacy.deleteUser({ userId });

  // Step 4: Email platform
  await brevo.contacts.delete({ identifier: userEmail });

  // Step 5: CRM
  await hubspot.contacts.delete({ contactId: crmContactId });

  // Step 6: Anonymise financial records where legal retention applies
  await db.transactions.updateMany({
    where: { userId },
    data:  { userId: null, customerName: 'DELETED_USER', email: null }
  });

  // Step 7: Audit log
  await db.complianceAuditLog.create({
    data: {
      event: 'user_deletion_complete',
      userId,
      scope: ['users','sessions','analytics','email','crm','transactions'],
      completedAt: new Date()
    }
  });

  // Step 8: Deletion confirmation email
  await sendDeletionConfirmationEmail(userEmail);
}
```

### System Prompt — User Rights Implementation Audit

```
## Role
You are a DPDP Act 2023 engineer reviewing user rights technical implementation.

## Context
- 4 rights must be technically built: Information, Correction, Erasure, Nomination.
- Email-to-support is not acceptable for Information or Erasure.
- Data deletion must cascade to every system.
- All rights exercisable within 30 days.

## Audit Questions
1. Does a self-serve data download endpoint exist?
2. Does account deletion cascade to analytics, email, CRM, and backups?
3. Are all profile fields directly editable without contacting support?
4. Is the Right to Nominate mentioned in the Privacy Policy?

## Output
Rights audit: Right | Currently Available | Method | Gap | Fix
/api/user/my-data endpoint schema
DeletionPipeline code with all integrations
UI placement recommendations
```

---

## Module 05 — Children's Data Compliance

*The highest-penalty module. Any user possibly under 18 triggers full obligations.*

The 18-year threshold in DPDP is absolute. Unlike GDPR's member-state flexibility or COPPA's 13-year threshold, DPDP draws a hard line at 18. A general-audience productivity app accessed by a 17-year-old student carries the same obligations as an app explicitly targeted at children.

> **Risk Alert — Rs. 200 Crore Penalty**
>
> "I am above 18" checkbox is explicitly insufficient under DPDP. The Act requires verifiable age verification — a mechanism that can actually establish the user's age. Products that currently rely on age-declaration checkboxes are in direct violation.

### Checklist

| Priority | Item |
|---|---|
| `CRITICAL` | Age verification beyond a self-declaration checkbox. Acceptable: Government ID, Aadhaar-linked mobile, card verification. |
| `CRITICAL` | For identified users under 18: verifiable parental consent obtained before any data processing. |
| `CRITICAL` | Zero behavioural tracking for identified child users — no click tracking, session recording, heatmaps. |
| `CRITICAL` | Zero targeted advertising to child users — ad SDKs disabled or child-directed. |
| `HIGH` | Parental consent records stored with timestamp and verification method. |
| `HIGH` | Privacy Policy has a dedicated children's data section. |
| `HIGH` | Child user data access restricted to minimum required personnel. |

### Implementation — Disable SDKs for Child Users

```typescript
async function initialiseSDKsForUser(userId: string): Promise<void> {
  const user = await db.users.findUnique({ where: { id: userId } });

  if (user?.isMinor) {
    // Google Mobile Ads
    await MobileAds().setRequestConfiguration({
      tagForChildDirectedTreatment: true,
      tagForUnderAgeOfConsent: true,
    });

    // Firebase Analytics — disable entirely for minors
    await analytics().setAnalyticsCollectionEnabled(false);
    await crashlytics().setCrashlyticsCollectionEnabled(false);

    // Mixpanel
    mixpanel.opt_out_tracking();

    return; // Do not initialise any further tracking
  }

  // Only initialise after consent confirmed
  const hasConsent = await consentManager.getConsentStatus(userId, 'analytics');
  if (hasConsent) {
    await analytics().setAnalyticsCollectionEnabled(true);
    mixpanel.opt_in_tracking();
  }
}
```

### System Prompt — Children's Data Compliance Audit

```
## Role
You are a DPDP Act 2023 compliance engineer specialising in children's data protection.

## Context
- Anyone under 18 is a child — no exceptions.
- An "I am 18+" checkbox is explicitly insufficient.
- Behavioural tracking and targeted advertising are prohibited for minors.
- Penalty: up to Rs. 200 Crore.

## Audit Questions
1. What age verification mechanism currently exists?
2. Are analytics and ad SDKs configurable per user?
3. Does a parental consent flow exist for minor users?
4. Is child user data access restricted at the database level?

## Output
Age gate assessment (current vs required)
SDK configuration code
Parental consent flow pseudocode
Recommended age verification vendors
Privacy Policy children's section template
```

---

## Module 06 — Cross-Border Data Transfer

*Every third-party service is a cross-border transfer. The liability is yours.*

The most persistent misconception: "our cloud provider will handle it." Firebase, AWS, Supabase, Vercel, and Render are Data Processors. You are the Data Fiduciary. The legal obligation rests entirely with your organisation.

> **Risk Alert**
>
> Not having a signed DPA with your cloud providers is a direct DPDP violation. DPAs are available from all major vendors through self-service online acceptance. The gap between current state (no DPAs) and compliant state (all DPAs signed) can be closed in a single working day for most products.

### Checklist

| Priority | Item |
|---|---|
| `CRITICAL` | All third-party services receiving Indian user data identified and listed. |
| `CRITICAL` | A valid Data Processing Agreement (DPA) signed with every third-party Data Processor. |
| `HIGH` | Privacy Policy discloses cross-border transfers and names recipient countries. |
| `HIGH` | Data transfer inventory maintained: data, service, country, DPA reference. |
| `CRITICAL` | Transfer only to countries not on the Central Government blacklist — monitor meity.gov.in. |

### DPA Collection Table

| Vendor | DPA Location | Method | Done |
|---|---|---|---|
| Google / Firebase | myaccount.google.com/data-and-privacy | Online acceptance | ☐ |
| AWS | aws.amazon.com/agreement | Included in standard agreement | ☐ |
| Supabase | supabase.com/privacy | Request via DPA form | ☐ |
| Stripe | stripe.com/legal/dpa | Online acceptance | ☐ |
| Twilio | twilio.com/legal/data-protection-addendum | Online acceptance | ☐ |
| MSG91 | Account dashboard | Download and sign | ☐ |
| Razorpay | Contact support@razorpay.com | Email — document response | ☐ |
| Sentry | sentry.io/legal | Online acceptance | ☐ |
| Mixpanel | mixpanel.com/legal/privacy-policy | Request DPA form | ☐ |
| Cloudflare | cloudflare.com/gdpr/introduction | Included in standard ToS | ☐ |

### System Prompt — Cross-Border Transfer Audit & DPA Collection

```
## Role
You are a DPDP Act 2023 data transfer compliance specialist.

## Context
- Every third-party service receiving Indian user data is a cross-border transfer.
- The Data Fiduciary carries legal liability — not the cloud provider.
- A signed DPA must exist with every Data Processor.

## Task
1. List every third-party service in the tech stack receiving Indian user data.
2. Identify country, data types transferred, and DPA status for each.
3. Flag any service without a DPA as CRITICAL.
4. Draft the Privacy Policy cross-border section.

## Output
Inventory: Service | Country | Data Types | DPA Status | DPA URL
Gap list: Vendor | Missing | Priority | Action
Privacy Policy cross-border section draft
```

---

## Modules 07–09 — Grievance Officer, Breach Response & Vendor Compliance

### Module 07 — Grievance Officer & Public Notice

Every Data Fiduciary must appoint a named individual as Grievance Officer and publish their contact details in the Privacy Policy, app footer, and settings page. A support email alias is not sufficient.

| Priority | Item |
|---|---|
| `CRITICAL` | Named individual designated as Grievance Officer — name and direct contact in Privacy Policy. |
| `CRITICAL` | Grievance Officer contact visible in Privacy Policy, app footer, and settings page. |
| `HIGH` | Structured grievance form with auto-acknowledgment. Responses within 30 days. |
| `HIGH` | Privacy Notice as a standalone page — not embedded in Terms of Service. |

**Privacy Policy Template — Grievance Officer Section**

```
Grievance Officer

Name:        [Full Legal Name]
Designation: [Title]
Email:       grievance@yourdomain.com
Phone:       +91-XXXXXXXXXX (optional)
Address:     [Registered office address], India

Response time: Within 30 days of receipt.

Complaints may also be escalated to the Data Protection Board of India
at dpdpboard.gov.in.
```

### Module 08 — Data Breach Response Protocol

Failure to notify the Data Protection Board of a confirmed breach carries up to Rs. 200 Crore penalty. The notification must occur within 72 hours. The DBRP document must exist before a breach occurs.

| Priority | Item |
|---|---|
| `HIGH` | Data Breach Response Plan (DBRP) document exists. |
| `HIGH` | Breach detection mechanisms in place — anomaly alerts, SIEM/logging. |
| `HIGH` | Internal escalation path defined: who is notified first, second, third. |
| `CRITICAL` | Data Protection Board notification within 72 hours of confirmed breach. |
| `CRITICAL` | Affected users notified: what data, consequences, remediation steps. |

**DBRP One-Page SOP**

```
DETECTION:  SIEM alerts, user reports, vendor notifications, pen test findings

CONTAINMENT (0–2 hrs):
  Isolate affected systems. Revoke compromised credentials.
  Preserve logs — do not delete anything.

ASSESSMENT (2–24 hrs):
  Identify data categories, record count, users impacted.
  Determine root cause. Classify severity.

NOTIFICATION (within 72 hrs of confirmation):
  Notify Data Protection Board (monitor dpdpboard.gov.in for mechanism).
  Notify affected users: what happened, what data, what to do.

DOCUMENTATION:
  Discovery timestamp, records count, categories, root cause, remediation.

POST-BREACH:
  Internal security audit within 30 days. Update threat model.
```

### Module 09 — Third-Party & Vendor Compliance

Every SDK embedded in your app is a potential data collection agent. SDK data collection must be disabled by default and re-enabled only after the user grants the relevant consent.

| Priority | Item |
|---|---|
| `CRITICAL` | Every third-party SDK reviewed for default data collection behaviour. |
| `CRITICAL` | SDK data collection disclosed in Privacy Policy. |
| `HIGH` | DPAs executed with all vendors whose SDKs collect personal data. |
| `HIGH` | Data shared with vendors limited to what is strictly necessary. |

### System Prompt — Modules 07–09 Combined

```
## Role
You are a DPDP Act 2023 operational compliance engineer covering three modules.

## Module 07 — Grievance Officer
Audit: Is a named Grievance Officer designated and published?
Deliver: Privacy Policy grievance section. Auto-acknowledgment email template.

## Module 08 — Breach Response
Audit: Does a DBRP exist? Are detection mechanisms in place?
Deliver: Complete DBRP SOP. Cloud alert configuration. User breach notification template.

## Module 09 — Third-Party SDKs
Audit: List every SDK. For each: default data collection and whether it is disabled.
Deliver: SDK audit table. Disable-by-default configuration. Re-enable after consent code.

## Output
One consolidated output — gap tables per module, then all implementation deliverables.
```

---

## Appendix A — Penalty Reference Table

| # | Violation | Section | Max. Penalty |
|---|---|---|---|
| 01 | Inadequate security safeguards leading to data breach | Sec. 8(5) | **Rs. 250 Crore** |
| 02 | Failure to notify Board and users of breach | Sec. 8(6) | **Rs. 200 Crore** |
| 03 | Children's data — tracking, ads, no parental consent | Sec. 9 | **Rs. 200 Crore** |
| 04 | Failure to fulfil Significant Data Fiduciary obligations | Sec. 10 | **Rs. 150 Crore** |
| 05 | Duties of Data Fiduciary — invalid consent, missing rights, no grievance officer | Sec. 8 | **Rs. 50 Crore** |
| 06 | Violations by Data Processor | Sec. 8(2) | **Rs. 10 Crore** |
| 07 | Any other provision of the Act or Rules | General | **Rs. 50 Crore** |

> **Insight**
>
> Penalties apply per instance of violation. A consent flow that is non-compliant for 50,000 users could be classified as 50,000 separate violations. The Board has the power to reduce penalties based on documented cooperation and remediation — making early compliance work materially valuable regardless of completion state.

---

## Appendix B — Compliance Score Tracker

| Module | Name | Critical Items | Status | Score /10 |
|---|---|---|---|---|
| 01 | Consent Management | 6 | ☐ Started ☐ In Progress ☐ Complete | ___ |
| 02 | Authentication & OTP | 5 | ☐ Started ☐ In Progress ☐ Complete | ___ |
| 03 | Data Collection & Minimization | 2 | ☐ Started ☐ In Progress ☐ Complete | ___ |
| 04 | User Rights Implementation | 3 | ☐ Started ☐ In Progress ☐ Complete | ___ |
| 05 | Children's Data | 5 | ☐ Started ☐ In Progress ☐ Complete | ___ |
| 06 | Cross-Border Transfer | 3 | ☐ Started ☐ In Progress ☐ Complete | ___ |
| 07 | Grievance Officer | 2 | ☐ Started ☐ In Progress ☐ Complete | ___ |
| 08 | Data Breach Response | 3 | ☐ Started ☐ In Progress ☐ Complete | ___ |
| 09 | Third-Party Compliance | 2 | ☐ Started ☐ In Progress ☐ Complete | ___ |
| — | **TOTAL** | **31** | | **___ / 90** |

| Score | Rating | Interpretation | Next Action |
|---|---|---|---|
| 81–90 | Compliant | Strong posture. | Monthly monitoring of meity.gov.in. |
| 61–80 | Mostly Compliant | Address remaining HIGH and CRITICAL gaps. | Sprint-plan remaining items. |
| 41–60 | Partial Compliance | Significant gaps remain. CRITICAL items open. | Treat CRITICAL as P0 immediately. |
| 21–40 | Non-Compliant | Immediate remediation required. | Retain legal counsel. Document timeline. |
| 00–20 | Critical Risk | Direct legal exposure. | Consider pausing data collection. |

---

## Part II — Implementation Timeline

| Week | Phase | Key Deliverables |
|---|---|---|
| Week 1 | Audit + Grievance Officer | Data inventory, SDK audit, consent gap map, Grievance Officer appointed and published |
| Week 2 | OTP/Auth + Consent Layer | DLT registration, OTP hardening, ConsentManager service built, onboarding flow updated |
| Week 3 | User Rights | Data Download endpoint, Correction UI, Deletion Pipeline live across all systems |
| Week 4 | Children + Cross-Border + Breach | Age gate (if needed), all DPAs collected, DBRP written, cloud detection alerts configured |
| Week 5 | Privacy Policy + Documentation | Privacy Policy rewritten as standalone page, policy versioning, compliance score completed |

**Post-Launch Ongoing Tasks**

- Monitor meity.gov.in monthly for blacklist updates and new rules.
- Review consent records quarterly to confirm withdrawal requests were honoured.
- Review sub-processor list quarterly.
- Annual internal compliance audit against this checklist.
- Re-run Score Tracker every 6 months.
- Update Privacy Policy before any data collection practice changes — before the change goes live.

---

## Part III — International Compliance Guide

*For products serving users across multiple jurisdictions simultaneously.*

> **Insight**
>
> Compliant with GDPR does not mean compliant with DPDP. GDPR's legitimate interest processing — used extensively for analytics, personalisation, and fraud prevention — has no equivalent in DPDP. Every processing activity currently running under a legitimate interest basis must be converted to consent before it is applied to Indian users.

### Framework Comparison

| Aspect | DPDP 2023 (India) | GDPR (EU) | CCPA/CPRA (California) | PDPA (Singapore) | PIPL (China) |
|---|---|---|---|---|---|
| Legitimate Interest | No | Yes | Limited | Narrower than GDPR | No |
| Children Age | 18 years | 16 (13 in some) | 16 / 13 | Not specified | 14 years |
| Right to Delete | Yes | Yes | Yes | Yes | Yes |
| Right to Nominate | Yes — unique | No | No | No | No |
| Data Localisation | Blacklist (pending) | No | No | No | Yes — for CII |
| DPO Required | SDF only | Certain cases | No | Recommended | Yes — certain cases |
| Max Penalty | Rs. 250 Cr | €20M or 4% GTO | $7,500/incident | SGD 1M | RMB 50M or 5% GTO |

### Additional Requirements by Jurisdiction

**GDPR (EU) — Beyond DPDP**

- `HIGH` Records of Processing Activities (RoPA) for organisations over 250 employees or high-risk data.
- `HIGH` Data Protection Impact Assessment (DPIA) for high-risk processing.
- `HIGH` Standard Contractual Clauses (SCCs) for cross-border transfers to non-adequate countries.
- `HIGH` Legitimate Interest Assessments (LIA) for every LI-basis activity.
- `MEDIUM` ePrivacy Directive cookie consent — no pre-ticked boxes, no consent walls.

**CCPA / CPRA (California) — Beyond DPDP**

- `HIGH` "Do Not Sell or Share" opt-out link on homepage and privacy page.
- `HIGH` Consumer rights requests responded to within 45 days.
- `CRITICAL` Sharing personal data for targeted advertising qualifies as a "sale" — explicit disclosure required.
- `HIGH` Sensitive Personal Information (SPI) opt-out under CPRA.

**PDPA (Singapore) — Beyond DPDP**

- `HIGH` Data Protection Notice at or before data collection.
- `HIGH` Mandatory breach notification to PDPC within 3 business days for significant breaches.
- `HIGH` Do Not Call (DNC) registry checked before telemarketing to Singapore numbers.

**PIPL (China) — Beyond DPDP**

- `CRITICAL` Separate consent for each processing purpose — stricter than GDPR.
- `CRITICAL` Cross-border transfers require PIPL-compliant contract, security assessment, or certification.
- `CRITICAL` Critical Information Infrastructure operators must store data within China.
- `HIGH` Automated decision-making must be transparent with a meaningful opt-out.

### Multi-Jurisdiction Decision Matrix

| If You Serve... | Primary Framework | Extra Requirements Beyond DPDP |
|---|---|---|
| India only | DPDP Act 2023 | This document covers everything. |
| India + EU | DPDP + GDPR | RoPA, DPIA, SCCs, LIA for LI basis, ePrivacy cookie consent. |
| India + California | DPDP + CCPA/CPRA | "Do Not Sell" link, 45-day response, SPI opt-out, ad-sharing disclosure. |
| India + Singapore | DPDP + PDPA | DNC check, 3-day breach notification to PDPC, DPO registration. |
| India + China | DPDP + PIPL | Data localisation for CII, PIPL transfer contracts, security assessment. |
| All markets | GDPR as baseline | Apply GDPR globally. Layer DPDP India-specific items. Add CCPA, PDPA, PIPL controls. |

### System Prompt — Multi-Jurisdiction Compliance Gap Analysis

```
## Role
You are an international data privacy compliance specialist advising a product team.

## Context
- Different data protection laws apply to different user segments.
- For infrastructure and security, the highest standard across all frameworks applies.
- GDPR compliance does not equal DPDP compliance.

## Input Required
1. Which countries do your users come from?
2. Current tech stack and primary hosting region.
3. Product category: SaaS / mobile app / e-commerce / health / finance.
4. Current consent management approach.

## Analysis Task
1. Identify all applicable laws per user country.
2. For each law, identify requirements beyond DPDP.
3. Identify conflicting requirements between frameworks.
4. Build a consolidated gap list by risk priority.

## Deliverables
Applicable laws per country table
Consolidated gap list: Gap | Framework | Priority | Estimated Effort
Conflicting requirements with resolution recommendations
Geo-detection and consent routing pseudocode
Jurisdiction-specific Privacy Policy sections
DPA and contract templates per active framework
```

---

*This document is a technical reference prepared for informational purposes based on the publicly available text of the Digital Personal Data Protection Act 2023 and related international privacy frameworks. It does not constitute legal advice. Rules under the DPDP Act are pending notification by the Central Government and may alter specific compliance obligations. Organisations should consult qualified legal counsel before making compliance decisions. Monitor dpdp.gov.in and meity.gov.in for official updates.*

---

**This document is by**

**Shubham Narkhede**
[www.shubhamnarkhede.com](https://www.shubhamnarkhede.com)