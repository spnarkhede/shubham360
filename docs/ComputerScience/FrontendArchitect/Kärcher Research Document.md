# Kärcher — Complete Theoretical Research
## Frontend Architect (React) | Digital Channel Products | Interview Intelligence

> **Purpose:** This document answers every possible question you could face before, during, and after the interview. Every claim is explained. Every technology is defined. Every data point is connected to what it means for your role. Read end to end once, then use the table of contents to drill into gaps.

> **May 2026 | Sources: SimilarWeb, Craft.co, Tracxn, LeadIQ, Owler, Kärcher job descriptions, commercetools documentation**

---

## Table of Contents

1. [The Company: What Kärcher Actually Is](#1-the-company-what-kärcher-actually-is)
2. [The Digital Product Landscape](#2-the-digital-product-landscape)
3. [Traffic and Engagement: Every Number Explained](#3-traffic-and-engagement-every-number-explained)
4. [Marketing Channels: Why Each One Matters to Frontend](#4-marketing-channels-why-each-one-matters-to-frontend)
5. [Geography and Internationalization Depth](#5-geography-and-internationalization-depth)
6. [Technology Stack: Deep Explanation of Every Tool](#6-technology-stack-deep-explanation-of-every-tool)
7. [Architecture Research: MACH and Composable Commerce](#7-architecture-research-mach-and-composable-commerce)
8. [commercetools: Everything You Need to Know](#8-commercetools-everything-you-need-to-know)
9. [Competitor Analysis: Deep Research](#9-competitor-analysis-deep-research)
10. [SEO Architecture for Frontend Engineers](#10-seo-architecture-for-frontend-engineers)
11. [IoT Frontend Architecture](#11-iot-frontend-architecture)
12. [Performance Architecture at Kärcher Scale](#12-performance-architecture-at-kärcher-scale)
13. [Design System Theory and Practice](#13-design-system-theory-and-practice)
14. [E-Commerce Frontend Patterns](#14-e-commerce-frontend-patterns)
15. [Security, Compliance, and GDPR in Frontend](#15-security-compliance-and-gdpr-in-frontend)
16. [AI Personalization Integration](#16-ai-personalization-integration)
17. [Backlink, Domain Authority, and Technical SEO](#17-backlink-domain-authority-and-technical-seo)
18. [Conversion Rate Optimization Analysis](#18-conversion-rate-optimization-analysis)
19. [Interview: Every Question Answered Thoroughly](#19-interview-every-question-answered-thoroughly)
20. [Questions to Ask Kärcher](#20-questions-to-ask-kärcher)
21. [Key Facts Reference Card](#21-key-facts-reference-card)

---

## 1. The Company: What Kärcher Actually Is

### 1.1 Founding and Ownership Structure

Alfred Kärcher SE & Co. KG was founded in 1935 by Alfred Kärcher in Stuttgart, Germany. The company is family-owned, meaning it has no public shareholders and does not report to a stock market. This is significant for your interview because family-owned companies prioritize long-term value over quarterly metrics. Decisions move differently than in a public company — there is less short-termism, but also a strong cultural emphasis on the founding family's values.

The legal form "SE & Co. KG" is a German corporate structure combining a Societas Europaea (an EU-level stock corporation) with a Kommanditgesellschaft (a limited partnership). In practice this means the Kärcher family retains control through the partnership structure while the SE provides governance transparency required for a company of this size.

### 1.2 Scale and Market Position

Kärcher is the world's largest manufacturer of cleaning technology by revenue and market share. In 2021 it recorded EUR 3.09 billion in revenue, the highest in its history. The company operates in over 60 countries through sales subsidiaries and 50,000+ dealer and retail partners worldwide.

With approximately 14,700 employees globally and around 6,800 in the division tracked by LeadIQ in March 2026, Kärcher is a mid-size multinational by European standards but a dominant player in its specific segment.

**Why this matters to you:** The scale means the frontend systems you architect will serve millions of users per month across dozens of languages, currencies, and regulatory environments. This is not a startup where you build for one country and iterate later. Architecture decisions need to be right at global scale from the design phase.

### 1.3 Leadership

- **CEO:** Hartmut Jenner — Chairman of the Board of Management. Has led Kärcher's international expansion. Public speaking and press statements are searchable and worth reading before your interview.
- **CFO:** Steffen Pietsch — Member of the Board of Management, responsible for finance and some operational decisions.

In a German family-owned enterprise, the Board of Management (Vorstand) answers to a Supervisory Board (Aufsichtsrat), which represents the family and other stakeholders. Knowing this hierarchy helps you understand why digital transformation at Kärcher is deliberate and well-funded rather than reactive.

### 1.4 Strategic Investments and Acquisitions

Kärcher has made 8 strategic investments signaling its technology direction:

- **Skyline Robotics:** A company building robotic window cleaning systems for skyscrapers. Direct signal that autonomous cleaning robots are a commercial roadmap item.
- **InOrbit ($10M investment):** An AI-powered robot orchestration platform. InOrbit lets operators manage fleets of robots across multiple sites. Kärcher investing here means fleet management dashboards for connected cleaning robots are a real product future — and someone has to build the frontend for that.
- **TULU:** IoT device sharing platform. Relevant to Kärcher's connected cleaning services.
- **Armapipl and Max Holder (acquired):** Expand Kärcher's industrial and municipal cleaning capabilities.

**Interview talking point:** "I noticed Kärcher invested $10M in InOrbit's robot orchestration platform. What does that tell me? It tells me that in 3-5 years, the Digital Channel Products team will need to build fleet management dashboards for cleaning robot operators. That is exactly the kind of real-time, IoT-heavy frontend I want to architect."

---

## 2. The Digital Product Landscape

### 2.1 The Website Ecosystem Explained

Kärcher's digital presence is distributed across owned, operated, and dealer-affiliated websites. Understanding each domain's role is critical because the Frontend Architect at Kärcher may interact with all of them.

| Domain | Global Rank | Role | Technical Significance |
|---|---|---|---|
| **kaercher.com** | #15,691 | International flagship | Primary e-commerce, IoT portal, B2B and B2C. The main product being worked on. |
| **kaercher.de** | #3,481 Germany | German market hub | Localised version, highest-intent German traffic, key SEO battleground |
| **kaerchershop-schreiber.de** | #17,223 | Authorized dealer e-shop | Highest-ranking dealer site. Competes for Kärcher brand search traffic. |
| **kaercher-center-mueller.com** | #118,823 | Authorized dealer | Physical + digital dealer. Uses Kärcher product data feed. |
| **kaerchercenter-schamp.de** | #121,256 | Authorized dealer | Same pattern as Müller. |
| **kaercher-schmitz.de** | Outside top 200K | Local dealer | Small regional presence. |
| **kaercher.net** | Regional sub-brand | Redirect network | Routes international users to correct locale. Architecture decision. |
| **s1.kaercher-media.com** | CDN | Asset delivery | 15.6% of outbound traffic. Product images, videos. Probably Akamai or Cloudflare. |

**The dealer tension:** kaerchershop-schreiber.de ranks #17,223 globally — higher than most dealer sites in any category. It competes directly with kaercher.de for branded search traffic. This creates the classic manufacturer-vs-dealer digital channel conflict. The Frontend Architect needs to understand this because it affects how product data is syndicated to dealers, how canonical URLs are managed, and whether a shared component library makes sense for the dealer network.

### 2.2 The Digital Channel Products Department

The position sits in **Digital Channel Products**, not in IT infrastructure, not in marketing operations. This distinction is important.

- You build customer-facing product, not internal tools.
- Your output is directly experienced by the 2.88 million people who visit kaercher.com every month.
- Your architecture decisions affect conversion rates, which have direct revenue impact.
- You collaborate with UX designers, product managers, and AI engineers — not just developers.

This team builds and owns:
1. The global e-commerce storefront (product discovery, cart, checkout, account management)
2. The IoT device management interfaces (connected cleaning machines, fleet dashboards)
3. The B2B portal (account-specific pricing, bulk ordering, fleet management)
4. Supporting tools: component libraries, design systems, CI/CD pipelines

---

## 3. Traffic and Engagement: Every Number Explained

### 3.1 Total Visits: 8.645M (Feb–Apr 2026)

This is the total number of visits to kaercher.com across all countries, all devices, over the three-month window. A visit is counted when someone arrives at the site, regardless of how many pages they view. A new visit begins after 30 minutes of inactivity.

**What 8.6M quarterly visits means in practice:**
- Average of about 96,000 visits per day.
- Peak days (product launches, campaigns, spring cleaning season) could reach 150,000–200,000 visits.
- The frontend must serve these loads without degradation. Static generation, CDN edge caching, and horizontal scaling are architectural necessities.

### 3.2 Monthly Visits: 2.881M (+20.23%)

April 2026 saw 2.881 million visits, up 20.23% from March 2026. This is the April spring cleaning surge — the single biggest seasonal demand peak for Kärcher in Europe.

**Why this matters architecturally:** A 20% traffic spike in one month is manageable with static generation (SSG) and CDN edge delivery. But if a product page is dynamically rendered on every request without caching, a spike of this magnitude can cause server overload and slow load times, which directly increases bounce rate and reduces conversion. The Frontend Architect decides whether pages use SSR (server-side rendering on every request) or SSG (pre-built static pages served from CDN edge nodes). This is not just a performance decision — it is a revenue decision.

### 3.3 Unique Visitors: 1.742M | Deduplicated Audience: 1.539M

**Unique visitors** counts each browser/device combination once per month. **Deduplicated audience** uses probabilistic identity matching across devices to estimate true unique humans. The difference (1.742M vs 1.539M) means about 203,000 people use multiple devices to access kaercher.com per month — likely browsing on mobile and then completing purchase on desktop.

**Frontend implication:** Cross-device user journeys are real at Kärcher scale. A user starts researching a pressure washer on their phone during a commute and completes the purchase on their laptop that evening. This means:
- Cart persistence must work across devices (server-side cart state, not localStorage).
- The product discovery experience on mobile must be as complete as desktop.
- The checkout must be streamlined enough to complete on mobile for the subset that does.

### 3.4 Visit Duration: 2m 41s

The average visitor spends 2 minutes and 41 seconds on kaercher.com. For an e-commerce site, this is on the lower end. B2C e-commerce averages range from 2m 30s to 4m 00s depending on the category.

**What causes short visits:**
- Users searching for a specific product, finding it quickly, and leaving to think about it (research behavior).
- Users bouncing because the page loaded slowly or did not match their search intent.
- Users who arrived via branded search, verified the product exists, and will return later.

**What the Frontend Architect can do:**
- Improve product page load speed so the 2m 41s is spent reading, not waiting.
- Implement better related products, upsell, and cross-sell to extend sessions.
- Add product comparison features that keep research-phase users engaged on-site.

### 3.5 Pages Per Visit: 3.40

An average visitor views 3.4 pages. This includes the entry page, typically a product page or category page, plus two more page views (possibly another product, a product detail, or the cart).

**What drives pages per visit in e-commerce:**
- Quality of internal search results (bad search → frustration → exit).
- Quality of category navigation and filtering.
- Effectiveness of product recommendations ("you might also like").
- Page load speed — slow pages cut sessions short.

The nunami.ai AI personalization integration (new in 2025-2026) is explicitly designed to increase pages per visit by serving relevant product recommendations. A Frontend Architect must integrate this without introducing layout shift (CLS) or blocking JavaScript that slows the critical rendering path.

### 3.6 Bounce Rate: 43.30%

A bounce occurs when a visitor views one page and leaves without interacting. 43.30% bounce rate compares favorably to the industry average of 44.4% (Adilo study, 2026 benchmarks across 2,001 websites).

**Reading bounce rate correctly:**
- Not all bounces are bad. A user who searches for "kärcher K2", finds the exact product page, reads the specs, and saves it for later is a bounce that contributes to a future purchase.
- A 43.3% bounce rate with 2m 41s average session duration means many bounces are not quick exits — users are reading before leaving.
- Mobile bounce rates are typically 5–10% higher than desktop. Given Kärcher's 67% mobile split, the blended 43.3% is actually good.

**What reduces bounce rate (frontend actions):**
- Faster page loads, especially LCP (Largest Contentful Paint). Google data shows a 1-second LCP improvement can reduce bounce by 20%+.
- Better page relevance for landing pages from paid search.
- Mobile layout that makes it easy to continue browsing after the initial page.

### 3.7 Global Rank: #15,691 | Germany Rank: #3,481

SimilarWeb global rank is based on total estimated traffic across all tracked websites. #15,691 out of ~300M+ domains means kaercher.com is in the top 0.005% of websites by traffic globally. Industry rank #4 in Gardening confirms Kärcher's dominance within its category.

Germany rank #3,481 reflects the home market strength — significant German-language organic traffic and direct brand recall.

---

## 4. Marketing Channels: Why Each One Matters to Frontend

### 4.1 Organic Search: 50.40%

Organic search is kaercher.com's single largest traffic channel, responsible for more than half of all visits. This comes from users finding Kärcher pages in Google, Bing, Yahoo, and increasingly AI-powered search interfaces.

**What determines organic search success:**
1. **Technical SEO** (frontend responsibility): Crawlability, page speed, Core Web Vitals, structured data markup, hreflang tags, canonical URLs, sitemap freshness, JavaScript rendering.
2. **Content relevance** (marketing + product responsibility): Quality of product descriptions, user reviews, blog content.
3. **Backlink authority** (marketing responsibility): Links from other high-authority sites.

The Frontend Architect owns items in category 1. Every architecture decision that affects crawlability or speed directly affects 50.4% of Kärcher's traffic.

**Why SSR matters here:** Google renders JavaScript-heavy SPAs, but imperfectly and with delays. Pages that require JavaScript execution to display meaningful content may be crawled and indexed later than server-rendered pages. For a site where 50% of traffic comes from organic search, this delay costs real visits and real revenue. The Frontend Architect must ensure product pages, category pages, and key landing pages are server-side rendered or statically generated.

### 4.2 Direct Traffic: 17.62%

Direct traffic comes from users who type the URL directly, use a bookmark, or arrive via an untracked link (email without UTM parameters, Slack messages, some mobile app links).

High direct traffic (17.62%) means Kärcher has strong brand recall. People know the name and seek it directly. This also means the logged-in returning customer experience matters — users who know Kärcher and return repeatedly expect a personalized, fast experience.

**Frontend implications:** Performance for returning visitors (cached assets, service worker pre-caching, fast TTFB) is critical because these are high-intent customers. Account management UX (order history, saved products, reorder) serves this audience.

### 4.3 Paid Search: 15.13%

Paid search (Google Ads, Bing Ads) drives 15.13% of traffic. This is a significant investment of marketing budget, and the landing page performance directly determines the return on that investment.

**Google Ads Quality Score** is a metric Google uses to rate your landing page experience. It affects how much you pay per click (CPC). A better landing page — faster, more relevant, better UX — lowers your CPC. Google specifically measures:
- Landing page load speed (Core Web Vitals, especially LCP)
- Mobile friendliness
- Relevance of page content to the keyword
- Bounce rate on landing page

If the Frontend Architect improves LCP from 4 seconds to 1.5 seconds on a paid landing page, the Quality Score improves, CPC drops, and the same marketing budget generates more traffic. This is a direct, measurable financial return from frontend architecture.

### 4.4 Referrals: 6.52%

Top referrers:
- **sovendus-network.com (8.42% of referrals):** Sovendus is a German affiliate and voucher network. They drive users from checkout confirmation pages on partner sites to Kärcher. Integration: tracking pixel in Kärcher's checkout confirmation page, and Kärcher's voucher displayed in partner checkouts.
- **karcher.com / kaercher.net (cross-domain):** Regional redirect traffic between domains. The kaercher.net subdomain network routes users to country-specific URLs.
- **stepstone.de (3.38%):** Germany's major job listing site. Traffic from Kärcher's job postings — candidates visiting kaercher.com after seeing a job ad. This is not customer traffic, but it is non-trivial volume.

### 4.5 Display Advertising: 3.84%

Display ads are banner and rich media ads served on third-party websites. The 3.84% of traffic from display indicates active retargeting campaigns (showing ads to users who previously visited kaercher.com) and prospecting campaigns.

**Frontend implications:**
- Cookie consent management (CookieBot or OneTrust integration in the frontend) determines whether retargeting pixels fire at all in EU markets.
- GDPR compliance requires explicit consent for tracking cookies. Without consent, retargeting audiences shrink.
- The Frontend Architect owns the implementation of consent management in the codebase, not the marketing team.

### 4.6 Gen AI Traffic: 0.58%

AI search referrals (from ChatGPT, Perplexity, Gemini, Claude when users ask product questions) are at 0.58% but growing. This is a new channel that did not exist 18 months ago.

**Why it matters to architecture:**
- AI crawlers access pages differently than Googlebot. 46% of ChatGPT bot visits begin in "reader mode" — a plain HTML version with no CSS, JavaScript, or images.
- If your product page requires JavaScript to render the product name and price, ChatGPT cannot read it in reader mode and cannot cite your product accurately.
- The Frontend Architect must ensure that critical product information is in the initial HTML payload (SSR or SSG) and not injected by client-side JavaScript.

---

## 5. Geography and Internationalization Depth

### 5.1 Top 5 Countries and Their Implications

| Country | Traffic Share | YoY Change | Language | Currency | UX Notes |
|---|---|---|---|---|---|
| Germany | 14.03% | +11.73% | German | EUR | Home market. Formal "Sie" vs informal "du" matters in copy. High data privacy expectations. |
| France | 13.15% | +50.51% | French | EUR | Fastest-growing major market. French SEO keywords performing well. |
| UK | 10.23% | +16.29% | English | GBP | Post-Brexit pricing complexity. Strong vacuum cleaner market (Dyson competition). |
| Turkey | 5.53% | +43.91% | Turkish | TRY | High inflation environment affects pricing display. Mobile-dominant market. |
| Japan | 4.32% | +55.81% | Japanese | JPY | Highest growth rate. Full-width characters (Zenkaku). Specific UX conventions. Right-to-left product display sometimes. |

### 5.2 What Internationalization Means in Frontend Architecture

**Internationalization (i18n)** is the process of designing software that can be adapted to different languages and regions without code changes. **Localization (l10n)** is the actual adaptation for a specific locale.

A Frontend Architect at Kärcher must design i18n at the architecture level, not as an afterthought.

#### Routing Strategy
Two main approaches exist:

**Subdirectory routing:** `kaercher.com/de/`, `kaercher.com/fr/`, `kaercher.com/ja/`
- Single domain. Good for domain authority consolidation.
- Simpler CDN setup.
- Recommended by Google for international SEO.

**Subdomain routing:** `de.kaercher.com`, `fr.kaercher.com`
- Allows different server configurations per country.
- Slightly more complex hreflang setup.

Kärcher uses kaercher.net as a regional redirect network, suggesting the primary approach may use subdirectory routing on kaercher.com with kaercher.net as a vanity alias layer.

#### hreflang Tags
Every page must include `<link rel="alternate" hreflang="de" href="https://kaercher.com/de/product"/>` for every language variant. This tells Google which language version to serve to which country's users. Incorrect hreflang causes international SEO cannibalization — pages competing with each other instead of complementing each other.

For a site with 60 country markets, this generates thousands of hreflang declarations. The Frontend Architect must implement these programmatically from the routing configuration, not manually.

#### Currency and Number Formatting
- EUR uses comma as decimal separator in Germany and France: 1.299,00 €
- GBP uses period as decimal separator: £1,299.00
- JPY has no decimal places: ¥142,900
- TRY has specific display requirements given inflation

The `Intl.NumberFormat` browser API handles this correctly when given the right locale code. Do not build custom formatting — use the platform.

#### Date Formatting
- Germany: 15.05.2026 (DD.MM.YYYY)
- UK: 15/05/2026 (DD/MM/YYYY)
- Japan: 2026年5月15日 (YYYY年MM月DD日)

Use `Intl.DateTimeFormat` with locale-aware options.

#### Content Fallback Strategy
When a product description is not yet translated to Japanese, what does the user see? Options:
1. Show English (poor UX but safe)
2. Show machine-translated content (risk of error)
3. Show a "content not available in your language" message
4. Block the product from appearing in Japanese results

The Frontend Architect defines this fallback behavior in the i18n configuration. This is an architecture decision with business implications.

#### Japanese-Specific Considerations
- Full-width alphanumeric characters (Zenkaku: Ａｌｆｒｅｄ vs Alfred)
- Line-breaking rules differ for Japanese (no spaces between words)
- Font size preferences differ (Japanese text often renders at 14px where English uses 12px)
- Reading direction is left-to-right for modern Japanese web content, but vertical text (tategumi) appears in some product descriptions
- Touch target sizes: Japanese mobile users often have smaller screen sizes than EU average

---

## 6. Technology Stack: Deep Explanation of Every Tool

### 6.1 commercetools

**What it is:** commercetools is a cloud-native, API-first e-commerce platform built on MACH architecture (Microservices, API-first, Cloud-native, Headless). It provides the commerce backend — product catalog, pricing, cart, checkout, customer accounts, promotions, and B2B features — through a GraphQL and REST API.

**Why Kärcher uses it:** Kärcher needed a platform that could:
- Serve 60+ country markets with different currencies, tax rules, and product catalogs.
- Support both B2C (consumer) and B2B (professional cleaning companies) on the same backend.
- Integrate with SAP ERP for inventory, logistics, and financial data.
- Allow the frontend team to iterate on the UI without being blocked by the commerce backend.

commercetools provides this through its "headless" model — there is no built-in frontend. The frontend team builds whatever experience they choose using commercetools' APIs.

**Key commercetools concepts you must know:**
- **Project:** The top-level container. Kärcher likely has one project per region or one global project with multiple stores.
- **Store:** A virtual store within a project, with its own product selection, prices, and languages. Kärcher may use stores to power different country sites.
- **Channel:** A distribution or supply channel. Used for B2B vs B2C pricing differentiation.
- **Customer Group:** Groups of customers with different prices. B2B accounts get trade pricing via customer groups.
- **Product Projection:** The read-optimized view of a product with all attributes, variants, prices, and images. Used for product display pages.
- **Cart:** The server-side cart object. Persisted in commercetools, not in localStorage.
- **Order:** Created from a cart after payment confirmation.

### 6.2 Vue.js (Existing Stack)

**What it is:** Vue.js is a progressive JavaScript framework for building user interfaces. It uses a template syntax for HTML, a reactivity system for state management, and a component model similar to React.

**Why it appears in the stack:** Vue.js was likely adopted before the current push toward React. Kärcher's tech stack on LeadIQ confirmed Vue.js, and the Frontend Architect React job description confirms the migration direction.

**What you need to know about Vue.js for the interview:** You do not need expert Vue.js knowledge for this role. You need to understand:
- Why a migration from Vue to React is a significant architecture project (not just a rewrite).
- How to plan an incremental migration without stopping feature delivery (strangler fig pattern).
- What patterns from Vue translate to React (components, lifecycle, reactivity) and what does not (Vue's Options API vs React hooks).

### 6.3 SAP ERP

**What it is:** SAP is the world's leading enterprise resource planning software. Kärcher uses SAP to manage inventory across its global warehouses, track orders through fulfillment, manage supplier relationships, handle financial accounting, and process payroll.

**How it connects to the frontend:** The product availability shown on kaercher.com ("In stock", "Ships in 3-5 days") comes from SAP inventory data. This data flows through an integration layer — typically an event-driven middleware or an API gateway — to commercetools, which the frontend queries.

The Frontend Architect does not work with SAP directly. But understanding that SAP is the source of truth for inventory, pricing, and order status helps you design the frontend data layer correctly — including how to handle SAP sync delays (stock showing available when it is not), error states (SAP down, commercetools shows stale data), and real-time vs cached stock information.

### 6.4 Adobe Analytics (SiteCatalyst)

**What it is:** Adobe Analytics is an enterprise-level web analytics platform, more powerful and expensive than Google Analytics. It is used by companies that need advanced segmentation, real-time reporting, and integration with Adobe's marketing cloud.

**Why it matters to frontend architecture:**
- Every user interaction that should be tracked (page views, product views, add-to-cart, checkout steps, purchases) requires a JavaScript call to the Adobe Analytics data layer.
- The Frontend Architect designs the event tracking architecture: what events to fire, when, with what data, and in a way that respects GDPR consent settings.
- Adobe Analytics uses a `s.t()` (track page view) and `s.tl()` (track link) model. Modern implementations use Adobe's Web SDK or Launch (Tag Management System).
- Poorly implemented analytics can slow page load. Analytics calls must be non-blocking and loaded asynchronously.

### 6.5 Facebook Pixel

**What it is:** Meta's tracking pixel. A small piece of JavaScript that fires when users visit pages, add products to cart, or complete purchases. This data is sent to Meta's advertising platform to enable retargeting ads and conversion tracking.

**GDPR implications:** The Facebook Pixel cannot fire without explicit user consent in the EU. The Frontend Architect must integrate the consent management system (likely CookieBot or OneTrust) with the Pixel loading logic. If a user declines tracking cookies, the Pixel must not load.

**Implementation pattern:** The Pixel should be loaded conditionally based on consent state. Never load it unconditionally. This is a frontend architecture decision.

### 6.6 Worldpay (Payment Processor)

**What it is:** Worldpay (owned by FIS) is one of the world's largest payment processors. It handles credit/debit card payments, PayPal, Apple Pay, Google Pay, local payment methods (SOFORT in Germany, iDEAL in Netherlands, etc.).

**Why 9% of outbound traffic goes to worldpay.com:** The checkout process on kaercher.com redirects users to a Worldpay-hosted payment page (or embeds a Worldpay iframe) to complete payment. When users submit their card details, they are interacting with Worldpay's infrastructure, which is why the traffic shows as "outbound" to worldpay.com.

**Frontend implications:**
- The checkout flow up to the payment step is Kärcher's own frontend. Everything from cart to payment method selection is built and owned by the Digital Channel Products team.
- The payment form itself is Worldpay's (either an iframe or a redirect).
- The order confirmation page, after Worldpay confirms payment, is Kärcher's frontend again.
- The Frontend Architect designs the handoff between Kärcher's checkout and Worldpay, the loading states during payment processing, and the error handling for failed payments.

### 6.7 nunami.ai (New AI Personalization)

**What it is:** nunami.ai is an AI personalization platform that appears in Kärcher's outbound link data as a new integration (appeared without prior period comparison, labeled "new"). It is likely a real-time product recommendation engine that uses machine learning to serve personalized product suggestions based on browsing behavior.

**How AI personalization integrations work technically:**
1. The platform's JavaScript SDK is loaded on the storefront (adds a few KB to the bundle).
2. The SDK tracks user behavior (product views, searches, category visits) and sends this data to nunami.ai's servers.
3. When a product recommendation slot is rendered (homepage "Recommended for you", product page "You may also like"), the frontend calls nunami.ai's API with the user identifier.
4. nunami.ai returns a ranked list of product IDs.
5. The frontend fetches those products from commercetools and renders them.

**Architecture concerns:**
- The API call to nunami.ai must not block page rendering. Use React's `Suspense` with a loading skeleton for recommendation slots.
- User identity must be handled carefully (anonymous vs logged-in users, GDPR compliance).
- The recommendation slot must render its correct layout dimensions before content loads to prevent CLS (Cumulative Layout Shift).

### 6.8 AWS IoT Core

**What it is:** Amazon Web Services IoT Core is a managed service that allows IoT devices (sensors, machines, robots) to communicate securely with cloud applications at scale. Kärcher's connected cleaning machines send telemetry data (usage hours, water consumption, error codes, location for fleet vehicles) to AWS IoT Core.

**How it connects to the frontend:** The Frontend Architect building IoT dashboards must design a frontend that:
- Connects to the IoT data layer via WebSockets or a GraphQL subscription.
- Displays live machine status (online/offline, current mode, error state) with real-time updates.
- Shows historical telemetry (usage over time, maintenance intervals) with time-series charts.
- Allows operators to send commands to machines (start, stop, change mode) through control interfaces.

The data path is: Machine → AWS IoT Core → Backend service (Lambda or EC2) → WebSocket or GraphQL subscription → Frontend.

### 6.9 DynamoDB

**What it is:** Amazon DynamoDB is a fully managed NoSQL database known for single-digit millisecond read performance at any scale. Kärcher uses it (confirmed in the Principal Engineer job description for Kärcher Connected Cleaning) to store IoT device state.

**Why NoSQL for IoT:** IoT device state changes rapidly and unpredictably. A relational database with strict schema and transaction costs is a poor fit for high-velocity, high-volume IoT events. DynamoDB's key-value and document model with automatic scaling handles thousands of device state updates per second without configuration.

**Frontend implication:** The Frontend Architect does not design DynamoDB schemas, but understands that the data structure coming from the IoT backend reflects a document model — device state as a JSON document, not as relational rows. This affects how you type the data in TypeScript and how you handle missing or partial fields from the API.

---

## 7. Architecture Research: MACH and Composable Commerce

### 7.1 What MACH Means

MACH stands for:
- **M — Microservices:** Each business capability is built as an independently deployable service. Kärcher's product catalog, cart, payments, customer accounts, and IoT telemetry are separate services.
- **A — API-first:** Every service exposes its functionality through APIs. The frontend does not reach into a monolithic database — it calls APIs. commercetools is API-first by design.
- **C — Cloud-native:** Services run on cloud infrastructure (AWS, Azure, GCP) and scale automatically. Kärcher's IoT layer on AWS demonstrates this.
- **H — Headless:** The frontend (the "head") is decoupled from the backend. The backend has no opinion on how the UI is built. This is the fundamental shift that allows the Digital Channel Products team to build in React independently of the commerce backend team.

### 7.2 Why Headless Commerce Matters for the Frontend Architect

In a traditional monolithic e-commerce platform (Magento, older Hybris implementations, WooCommerce), the frontend is tightly coupled to the backend. Templates are server-rendered by the platform, and customizing the UI requires deep knowledge of the platform's PHP or Java templating engine.

In a headless architecture, the frontend team:
- Chooses their own framework (React).
- Controls the rendering strategy (SSR, SSG, ISR, CSR).
- Manages the frontend deployment independently.
- Can iterate on UI without deploying backend changes.
- Can use modern frontend tooling (Vite, Turbo, Next.js, Storybook).

The tradeoff is that the frontend team now owns more of the stack. The Frontend Architect must design not just components but the entire data-fetching layer, rendering strategy, caching architecture, and deployment pipeline.

### 7.3 commercetools Frontend vs Custom Next.js

Two implementation paths exist for a commercetools-powered storefront:

**commercetools Frontend (FEaaS — Frontend as a Service):**
- A pre-built frontend framework provided by commercetools.
- Uses Next.js under the hood with server-side rendering.
- Includes a Studio visual editor for marketers to create pages.
- Pre-integrated with commercetools APIs.
- Faster to launch. Less custom flexibility.

**Custom Next.js frontend:**
- Built from scratch by the frontend team.
- Full control over architecture, component design, performance optimization.
- Requires more upfront investment.
- Greater flexibility for complex custom requirements (IoT integrations, B2B-specific flows, deep personalization).

Given that Kärcher has a dedicated Frontend Architect React role, they are likely building a custom Next.js frontend (or planning to). The commercetools Frontend product is typically chosen by teams without strong frontend engineering capacity. Kärcher is building that capacity.

**Interview question to ask:** "Is the team using commercetools Frontend as the foundation, or are you building a custom Next.js application that consumes the commercetools GraphQL API directly?"

---

## 8. commercetools: Everything You Need to Know

### 8.1 The commercetools GraphQL API

commercetools exposes a GraphQL API at `https://api.europe-west1.gcp.commercetools.com/{{projectKey}}/graphql`.

A typical product query looks like:

```graphql
query GetProduct($productSlug: String!, $locale: Locale!) {
  product(slug: $productSlug) {
    id
    masterData {
      current {
        name(locale: $locale)
        description(locale: $locale)
        masterVariant {
          sku
          prices {
            value {
              currencyCode
              centAmount
              fractionDigits
            }
          }
          images {
            url
            dimensions { width height }
          }
          attributes {
            name
            value
          }
        }
        variants {
          sku
          attributes { name value }
          prices { value { currencyCode centAmount } }
        }
      }
    }
  }
}
```

**Key concepts:**
- Prices are stored in `centAmount` (integer) with `fractionDigits`. A price of EUR 49.99 is stored as `centAmount: 4999, fractionDigits: 2`. The frontend must convert: `price / Math.pow(10, fractionDigits)`.
- Localized fields require a `locale` argument. If you query `name(locale: "de-DE")` and the product has no German name, the response is null. The frontend must handle this with a fallback.
- Variants (different sizes, colors, models) are part of the same product object. The frontend renders variant selectors from the variants array.

### 8.2 Apollo Client with commercetools

Apollo Client is the most commonly used GraphQL client for React applications. For a commercetools integration:

```typescript
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: `https://api.europe-west1.gcp.commercetools.com/${process.env.CT_PROJECT_KEY}/graphql`,
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: `Bearer ${getAccessToken()}`,
  },
}));

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      ProductProjection: {
        keyFields: ['id'],
      },
      Cart: {
        keyFields: ['id'],
      },
    },
  }),
});
```

**Cache normalization:** The `InMemoryCache` normalizes objects by their `__typename` and a key field (typically `id`). When the same product appears in a category page query and a product detail query, Apollo stores it once and serves it from cache for both. This is efficient but requires that your type policies are correctly configured.

**Fetch policy options:**
- `cache-first`: Use cache if available, fetch only if missing. Good for stable data like product descriptions.
- `network-only`: Always fetch from network. Good for real-time data like stock availability.
- `cache-and-network`: Serve cache immediately (for fast initial render), then fetch and update. Good for product listings.

### 8.3 Cart Management with commercetools

A cart in commercetools is a server-side object. The flow:

1. **Anonymous cart:** Created when a guest user adds their first item. Returns a `cart.id` and `cart.version`. Store these in localStorage (or a cookie for SSR).
2. **Add to cart:** `addLineItem` mutation on the existing cart. Cart `version` increments with every mutation. You must send the current version to prevent concurrent modification conflicts.
3. **Merge cart:** When an anonymous user logs in, their anonymous cart merges with their logged-in account cart.
4. **Order creation:** Calls the `createOrderFromCart` mutation after payment confirmation from Worldpay.

**Optimistic updates:** When a user clicks "Add to Cart", show the cart immediately with the new item (optimistic UI) before the commercetools API confirms the addition. If the API call fails, roll back.

```typescript
const [addToCart] = useMutation(ADD_LINE_ITEM, {
  optimisticResponse: {
    updateCart: {
      __typename: 'Cart',
      id: cartId,
      lineItems: [...currentLineItems, optimisticNewItem],
      totalPrice: { centAmount: newTotal, currencyCode: 'EUR' },
    },
  },
});
```

---

## 9. Competitor Analysis: Deep Research

### 9.1 Nilfisk

**Headquarters:** Brondby, Denmark  
**Founded:** 1906  
**Revenue:** ~EUR 1.0 billion  
**Web traffic:** 806,535 visits (vs Kärcher's 8.64M — Kärcher has 10x more web traffic)

Nilfisk is Kärcher's most direct professional/industrial competitor. Their product range almost exactly mirrors Kärcher's: pressure washers, industrial vacuums, floor scrubbers, sweepers, and vehicle wash systems.

**Where they compete:** Industrial and professional B2B segment. Nilfisk's B2C presence is much weaker than Kärcher's consumer brand.

**Digital position:** Nilfisk's significantly lower web traffic (~10% of Kärcher's) reflects weaker consumer brand recognition and less investment in digital channels.

### 9.2 Dyson

**Headquarters:** Singapore (British brand, engineering in UK)  
**Founded:** 1991 by James Dyson  
**Revenue:** ~£7.1 billion (2023)  
**Web traffic (dyson.co.uk):** 3.86M visits

Dyson competes with Kärcher in the consumer vacuum and floor care segment. Dyson's brand positioning is premium technology and design. Their website is a masterclass in product photography and performance.

**Kärcher vs Dyson digital:** Kärcher outranks Dyson globally by traffic (8.6M vs 3.8M), but Dyson dominates the UK premium vacuum segment.

**What the Frontend Architect learns from Dyson:** Dyson's website is known for fast product pages, immersive 3D product views, and a very polished mobile experience. If the interviewer asks "what websites do you look to for inspiration?", Dyson is a legitimate answer in this context.

### 9.3 Shark (SharkNinja)

**Headquarters:** Needham, MA, USA  
**Web traffic (sharkclean.co.uk):** 5.52M visits

SharkNinja is the fastest-growing cleaning appliance brand in the UK and North America. Their aggressive digital marketing and product launches have challenged Kärcher and Dyson in the consumer segment. Their web traffic (5.52M) is the closest competitor to kaercher.com's 8.64M.

**What Shark does well digitally:** Very strong on social commerce, influencer marketing, YouTube reviews. High-quality product comparison pages.

### 9.4 Roborock

**What it is:** Chinese robot vacuum manufacturer. Competing directly in the autonomous cleaning segment where Kärcher is expanding.

**Why significant for Kärcher:** The paid search data shows Kärcher bidding on "roborock" as a keyword — `>5,000% growth` in that keyword bid. This means Kärcher's marketing team is actively targeting Roborock consideration-phase buyers to convert them to Kärcher robots. The Frontend Architect must ensure that Kärcher's robot vacuum product pages convert well when visited by someone who searched for "roborock".

### 9.5 The Dealer Network as a Competitor

This is a nuanced competitive dynamic that most candidates miss.

**kaerchershop-schreiber.de ranks #17,223 globally.** This is a reseller, not Kärcher itself. But when someone in Germany searches "Kärcher K2 kaufen" (Kärcher K2 buy), the dealer site may rank alongside or above kaercher.de.

Why does this happen?
- Dealers often have more optimized product pages with actual customer reviews.
- Dealers use performance-based SEO more aggressively.
- Dealers can offer lower prices, which helps conversion signals.

**The Frontend Architect's role in this dynamic:** Kärcher may want to build tools that help dealers display products correctly and consistently — a white-label component library or a product widget that dealers embed on their sites. Alternatively, Kärcher may want kaercher.de's UX to be so superior that brand-loyal users prefer the official site. Both approaches have frontend architecture implications.

---

## 10. SEO Architecture for Frontend Engineers

### 10.1 Why SEO is an Architecture Problem, Not a Content Problem

SEO is typically thought of as a marketing task: write keyword-rich content, build backlinks. But 50.4% of Kärcher's traffic coming from organic search means that technical SEO — which lives in the frontend architecture — is a primary driver of business.

**Technical SEO decisions the Frontend Architect makes:**

1. **Rendering strategy (SSR vs SSG vs CSR)**
   - CSR (Client-Side Rendering): JavaScript runs in the browser, fetches data, renders HTML. Google can crawl this but with delays. Bad for time-sensitive SEO.
   - SSR (Server-Side Rendering): HTML is generated on every request on the server. Google gets complete HTML immediately. Good for dynamic content (personalized pages, real-time stock).
   - SSG (Static Site Generation): HTML is pre-built at build time, served from CDN. Fastest possible delivery. Good for product pages that change infrequently.
   - ISR (Incremental Static Regeneration): Pages are pre-built but regenerated in the background when stale. Best of SSG and SSR. Ideal for product pages.

2. **Structured data (Schema.org)**
   - Product schema: `@type: "Product"` with name, description, price, availability, SKU, images.
   - BreadcrumbList: Shows the navigation path in Google results (e.g., "Kärcher > High-Pressure Cleaners > K2").
   - FAQPage: Appears as expandable Q&A in Google results.
   - Organization: Corporate entity information.
   
   These are JSON-LD scripts embedded in `<head>` or at the bottom of the page body. They must be server-rendered (not injected by JavaScript after load) to be reliably picked up.

3. **Canonical URLs**
   - `<link rel="canonical" href="https://kaercher.com/de/product-name"/>` tells Google which URL is the authoritative version.
   - Without canonical tags, filtered and sorted category pages (e.g., `/category?sort=price&filter=color:yellow`) can appear as duplicate pages.
   - The CDN URL and the media server URL for product images must not be accidentally indexed.

4. **XML Sitemaps**
   - A sitemap lists all URLs that should be indexed, with optional priority and last-modified date hints.
   - For a site with 10,000+ products in 60+ countries, the sitemap is generated programmatically.
   - Sitemap must be submitted to Google Search Console and updated when new products are added.

5. **Core Web Vitals**
   - LCP (Largest Contentful Paint): The largest visible element on screen (usually the hero image or product image) must render within 2.5 seconds on mobile networks.
   - INP (Interaction to Next Paint): Time between user interaction (click, tap) and the next visual response. Must be under 200ms.
   - CLS (Cumulative Layout Shift): Content must not shift unexpectedly. Reserve space for images, lazy-loaded content, and ad slots before they load.

### 10.2 Specific SEO Architecture for Kärcher

**Product pages:**
- Use ISR (Next.js `revalidate: 3600`) to serve pre-built pages from CDN edge, refreshed hourly.
- Embed full product JSON-LD schema including current price and stock status.
- Ensure canonical tags point to the primary locale URL.
- Use `<img>` with explicit `width` and `height` attributes to prevent CLS from images loading in.

**Category pages:**
- Use SSG for the base category page (no filters applied).
- Use SSR for filtered pages, but add `noindex` meta tag for deep filter combinations that generate low-value URLs.
- Implement faceted search with URL parameters that are canonical-tagged back to the unfiltered page.

**Multi-language:**
- Implement `hreflang` tags for every page in every language variant.
- Use `x-default` hreflang for the international fallback.
- Ensure Google Search Console has all language versions submitted in separate sitemaps.

---

## 11. IoT Frontend Architecture

### 11.1 What "Connected Cleaning" Means Technically

Kärcher's connected products (pressure washers with IoT sensors, robot floor cleaners, fleet management for commercial cleaning) generate real-time telemetry data. A connected pressure washer might report:
- Current operating pressure
- Water flow rate
- Total operating hours
- Last maintenance date
- Error codes
- GPS location (for fleet vehicles)
- Power consumption

This data flows from the device to AWS IoT Core, into a time-series datastore (likely DynamoDB or Amazon Timestream), and then to a backend API that the frontend queries.

### 11.2 WebSocket Architecture for Real-Time Dashboards

**Why WebSockets over HTTP polling:**
HTTP polling (making an API request every 5 seconds) wastes server resources when nothing has changed. WebSockets maintain a persistent connection, and the server pushes updates only when device state changes.

```typescript
// WebSocket connection with reconnection logic
class DeviceWebSocket {
  private ws: WebSocket | null = null;
  private reconnectDelay = 1000;
  private maxReconnectDelay = 30000;
  
  connect(deviceId: string, onMessage: (data: DeviceState) => void) {
    this.ws = new WebSocket(`wss://iot.kaercher.com/devices/${deviceId}`);
    
    this.ws.onmessage = (event) => {
      const data: DeviceState = JSON.parse(event.data);
      onMessage(data);
    };
    
    this.ws.onclose = () => {
      // Exponential backoff reconnection
      setTimeout(() => {
        this.reconnectDelay = Math.min(this.reconnectDelay * 2, this.maxReconnectDelay);
        this.connect(deviceId, onMessage);
      }, this.reconnectDelay);
    };
    
    this.ws.onopen = () => {
      this.reconnectDelay = 1000; // Reset on successful connection
    };
  }
}
```

### 11.3 React State Management for IoT

IoT dashboards have specific state management requirements:
- Many devices updating simultaneously (a fleet of 100 floor cleaners).
- Stale data must be clearly indicated (device has not reported for 5 minutes).
- Historical data for charts (last 24 hours of usage) coexists with live data.

**Recommended pattern:** Use TanStack Query (React Query) for historical/cached data and a custom WebSocket hook for live updates. Combine them in the component:

```typescript
function DeviceDashboard({ deviceId }: { deviceId: string }) {
  // Historical data: fetched once, cached
  const { data: history } = useQuery({
    queryKey: ['device', deviceId, 'history'],
    queryFn: () => fetchDeviceHistory(deviceId, '24h'),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
  
  // Live data: WebSocket updates
  const liveState = useDeviceWebSocket(deviceId);
  
  // Connection status
  const { status, lastUpdated } = useWebSocketStatus(deviceId);
  
  return (
    <Dashboard
      currentState={liveState}
      history={history}
      connectionStatus={status}
      lastUpdated={lastUpdated}
    />
  );
}
```

### 11.4 Time-Series Data Visualization

Kärcher's IoT dashboards need charts showing device usage over time. Key decisions:

**Library choice:**
- **Recharts:** React-native, composable, good for standard charts. Best for most use cases.
- **D3.js:** Maximum flexibility, steep learning curve. Use for custom, complex visualizations.
- **uPlot:** Extremely fast for large time-series datasets. Consider for fleet-level dashboards with thousands of data points.

**Performance considerations:**
- A fleet of 100 devices, each with hourly data points over 90 days = 216,000 data points.
- Rendering 216,000 SVG elements will freeze the browser.
- Solution: Aggregate data at the API level (hourly → daily rollups for the 90-day view), or use canvas-based rendering instead of SVG.

---

## 12. Performance Architecture at Kärcher Scale

### 12.1 Core Web Vitals: The Business Case

Google uses Core Web Vitals as a ranking signal. Poor Core Web Vitals can reduce organic rankings, which affects Kärcher's largest traffic channel (50.4%). Additionally:

- Amazon found that every 100ms of load time improvement increased revenue by 1%.
- Google found that sites loading in 5 seconds earn 70% more ad revenue than sites loading in 19 seconds.
- A 1-second delay in mobile page load time decreases conversion rates by 20%.

For kaercher.com with 2.88M monthly visits, these are not theoretical numbers. A 1-second improvement in mobile load time could meaningfully increase monthly conversion volume.

### 12.2 LCP Optimization for Product Pages

**Largest Contentful Paint (LCP)** is typically the hero product image on a Kärcher product page.

**Optimization steps:**

1. **Preload the LCP image:** Add `<link rel="preload" as="image" href="/product-hero.webp"/>` in the `<head>`. This tells the browser to fetch the image as soon as possible, before it parses the CSS or JavaScript.

2. **Use modern image formats:** WebP reduces file size by 25-35% vs JPEG. AVIF reduces by a further 20-30% vs WebP. Both are widely supported. Next.js Image component handles format selection automatically based on browser capabilities.

3. **Correct image sizing:** Never serve a 3000px image for a 400px display slot. Use responsive images with `srcset` to serve the correct size for each device.

4. **CDN edge delivery:** Kärcher already uses s1.kaercher-media.com as a CDN. Ensure product images are served from the nearest CDN edge node to the user.

5. **No lazy loading for LCP:** The LCP element must not have `loading="lazy"`. Only lazy-load images below the fold.

### 12.3 CLS Prevention

**Cumulative Layout Shift (CLS)** occurs when elements move after initial render. Common causes:

- Images without `width` and `height` attributes (browser does not know the space to reserve).
- Dynamically injected content (ads, cookie banners, chat widgets) that push content down.
- Fonts loading and causing FOUT (Flash of Unstyled Text) that changes text dimensions.

**Solutions for Kärcher:**
- Always include `width` and `height` on `<img>` elements, or use `aspect-ratio` CSS.
- Reserve space for the nunami.ai recommendation widget before it loads (fixed-height skeleton).
- Use `font-display: optional` or `font-display: swap` with size-adjust to prevent font shifts.
- Load cookie consent banners in a fixed-position overlay, not in the document flow.

### 12.4 Bundle Architecture

Next.js provides automatic code splitting per route. But the Frontend Architect must ensure:

1. **Third-party scripts are loaded asynchronously:** Adobe Analytics, Facebook Pixel, nunami.ai SDK. Never in the `<head>` with `defer` missing.

2. **Heavy libraries are dynamically imported:** A chart library (Recharts: ~150KB gzipped) should only load when a page with charts is visited. Use `next/dynamic` with `ssr: false` for client-only chart components.

3. **Bundle analysis is routine:** Run `@next/bundle-analyzer` in CI and set size budgets. If a PR adds 50KB to the main bundle, it should require explicit approval.

---

## 13. Design System Theory and Practice

### 13.1 What a Design System Is and Why It Matters at Kärcher

A design system is a collection of reusable components, design tokens, guidelines, and documentation that enables teams to build consistent products efficiently.

At Kärcher, a design system is necessary because:
- Multiple product teams (e-commerce storefront, IoT dashboard, B2B portal, dealer tools) must have a consistent visual language.
- Different teams working in parallel without shared components leads to 5 different button implementations, 3 different modal patterns, and inconsistent spacing.
- Marketing wants brand consistency across all digital touchpoints.

### 13.2 Design Token Architecture

**Design tokens** are the smallest reusable design decisions, stored as named values.

**Three-layer token system:**

```
Layer 1 — Global tokens (raw values):
  color-blue-500: #2563EB
  spacing-4: 16px
  font-size-base: 16px

Layer 2 — Alias tokens (semantic meaning):
  color-brand-primary: {color-blue-500}
  spacing-component-padding: {spacing-4}
  font-size-body: {font-size-base}

Layer 3 — Component tokens (specific usage):
  button-background-primary: {color-brand-primary}
  button-padding-horizontal: {spacing-component-padding}
  button-label-size: {font-size-body}
```

This layering means you can update the brand primary color from blue to a different shade by changing `color-brand-primary` once, and every component that uses it updates automatically.

**Kärcher's yellow:** Kärcher's corporate color is a specific yellow (#FDD500 or similar). This must be the `color-brand-primary` token. Every button, highlight, and accent should derive from this token. If Kärcher ever updates its brand guidelines, one token change updates everything.

### 13.3 Storybook for Component Documentation

Storybook is a development environment for UI components. Each component has "stories" — different states and variants demonstrated in isolation.

```typescript
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Add to Cart',
    variant: 'primary',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Out of Stock',
    variant: 'primary',
    disabled: true,
  },
};
```

For Kärcher's interview, being able to explain how Storybook serves as living documentation — so a new developer joining the team can browse all available components and their variants before writing any code — demonstrates mature design system thinking.

---

## 14. E-Commerce Frontend Patterns

### 14.1 Product Listing Page (PLP) Architecture

The product listing page is where users browse and filter products (e.g., "High-Pressure Cleaners" category showing 47 products).

**URL structure:** `kaercher.com/de/home-garden/high-pressure-cleaners.html?sort=price-asc&filter=max_bar:130`

**Technical requirements:**
- **Filtering:** Real-time filtering without full page reload. Filter state in URL query parameters (allows sharing, bookmarking, browser back navigation).
- **Sorting:** Price ascending, price descending, popularity, newest. URL parameter.
- **Pagination vs infinite scroll:** Infinite scroll is worse for SEO (Google cannot crawl dynamically loaded content) and worse for accessibility (keyboard users lose position). Use traditional pagination with "Load more" as a progressive enhancement.
- **Faceted search:** Filters derived from product attributes (max pressure: 100-180 bar, weight: under 10kg). Facets update as filters are applied. Unfilterable combinations show "0 results" gracefully.

**Performance:** Server-render the initial page with the first 24 products. Load additional pages client-side.

### 14.2 Product Detail Page (PDP) Architecture

The most important page on kaercher.com. Converts browsers into buyers.

**Components:**
1. Product image gallery — hero image + thumbnails. Lightbox on click. Swipe on mobile.
2. Product title, model number, tagline.
3. Price — current price, RRP (Recommended Retail Price), discount badge.
4. Variant selector — if the product comes in different power ratings or colors.
5. Stock status — "In stock", "Ships in 3-5 days", "Available in stores only".
6. Add to cart button — with quantity selector. Primary CTA. Must be above the fold on mobile.
7. Key features — bullet list.
8. Technical specifications — table with expandable rows.
9. Product description — rich text.
10. Accessories and compatible products — cross-sell.
11. Customer reviews.
12. Related products — recommendation widget (this is where nunami.ai integration lives).

**Technical decisions:**
- Stock status must come from a real-time API call (not SSG cache) — use a client-side fetch after initial page load.
- Image gallery must not cause CLS — predefine the gallery height before images load.
- The add-to-cart action calls commercetools and must handle network errors gracefully.

### 14.3 Cart and Checkout Architecture

**Cart page:** Displays line items, prices, total, promotional codes, and proceeds to checkout. Must work with server-side cart state from commercetools.

**Checkout steps:**
1. Shipping address (with address autocomplete — Google Places API or similar).
2. Shipping method selection (standard, express, click & collect).
3. Payment method selection (credit card, PayPal, SOFORT for Germany, etc.).
4. Payment information entry — handled by Worldpay iframe or redirect.
5. Order review and confirmation.
6. Order confirmation page — triggers affiliate pixels (Sovendus), analytics events, email confirmation.

**Guest vs logged-in checkout:** Guest checkout (no account required) reduces checkout abandonment. The Kärcher checkout should support both, with the option to create an account at the end.

---

## 15. Security, Compliance, and GDPR in Frontend

### 15.1 GDPR and Cookie Consent

The General Data Protection Regulation (GDPR) requires explicit user consent before setting non-essential cookies or tracking user behavior. For a site serving Germany, France, UK, and the rest of the EU, GDPR compliance is mandatory.

**What requires consent:**
- Google Analytics / Adobe Analytics tracking cookies.
- Facebook Pixel.
- Advertising/retargeting cookies.
- Personalization cookies (nunami.ai user identifier).

**What does not require consent:**
- Strictly necessary cookies (session cookies, cart state, login state).
- Security cookies (CSRF tokens).

**Implementation pattern:**
```typescript
// Consent-aware analytics initialization
const { consent } = useCookieConsent();

useEffect(() => {
  if (consent.analytics) {
    // Initialize Adobe Analytics
    window.s = new AppMeasurement();
    window.s.account = 'kaerchercom';
  }
  if (consent.marketing) {
    // Initialize Facebook Pixel
    fbq('init', 'PIXEL_ID');
    // Initialize nunami.ai
    nunami.init({ userId: getAnonymousId() });
  }
}, [consent]);
```

### 15.2 XSS Prevention in E-Commerce

Cross-Site Scripting (XSS) attacks inject malicious scripts into web pages. E-commerce sites are high-value targets because attackers can steal payment information or session tokens.

React escapes JSX output by default, preventing most XSS. But risks exist:
- `dangerouslySetInnerHTML` for product descriptions that contain HTML (Kärcher product descriptions likely come from a PIM and contain HTML formatting).
- Solution: Always sanitize HTML before rendering with DangerouslySetInnerHTML using DOMPurify.

```typescript
import DOMPurify from 'dompurify';

function ProductDescription({ html }: { html: string }) {
  const sanitized = DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['p', 'strong', 'em', 'ul', 'li', 'br', 'h3', 'h4'],
    ALLOWED_ATTR: [],
  });
  return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;
}
```

### 15.3 Secure Checkout Implementation

- Card number input must never touch Kärcher's servers. Worldpay handles it via iframe.
- HTTPS everywhere — enforce with HSTS header.
- `Content-Security-Policy` header must list Worldpay's domains as allowed frame sources.
- No sensitive data in URL parameters (cart IDs, user IDs can appear in URLs, but payment information never should).

---

## 16. AI Personalization Integration

### 16.1 How nunami.ai Works (Inferred)

AI personalization platforms follow a common pattern:

1. **Data collection phase:** Track user behavior (pageviews, product views, searches, add-to-cart events) via a JavaScript SDK. Build a behavioral profile per user (anonymous or identified).

2. **Model training phase:** The platform's ML models analyze collective behavioral data to find patterns ("users who viewed K2 pressure washers also tend to buy the foam nozzle accessory").

3. **Recommendation serving phase:** When the frontend requests recommendations for a user, the API returns a ranked list of product IDs based on that user's behavioral profile and collective patterns.

### 16.2 Frontend Integration Pattern

```typescript
function ProductRecommendations({ currentProductId }: { currentProductId: string }) {
  const { userId } = useAnonymousId();
  
  // Fetch recommendation IDs from nunami.ai
  const { data: recommendationIds, isLoading } = useQuery({
    queryKey: ['recommendations', currentProductId, userId],
    queryFn: () => nunami.getRecommendations({
      productId: currentProductId,
      userId,
      limit: 4,
    }),
    staleTime: 5 * 60 * 1000,
  });
  
  // Fetch actual product data from commercetools
  const { data: products } = useQuery({
    queryKey: ['products', recommendationIds],
    queryFn: () => fetchProductsByIds(recommendationIds ?? []),
    enabled: !!recommendationIds,
  });
  
  if (isLoading) return <RecommendationSkeleton count={4} />;
  if (!products?.length) return null;
  
  return (
    <section aria-label="Recommended products">
      <h2>You may also like</h2>
      <ProductGrid products={products} />
    </section>
  );
}
```

**Key architecture decisions:**
- Use a skeleton loader to reserve space (prevents CLS).
- The `enabled: !!recommendationIds` option prevents the commercetools query from running before nunami.ai has responded.
- If nunami.ai is unavailable, the component returns `null` — the page degrades gracefully rather than breaking.
- GDPR: Only send behavioral tracking data to nunami.ai if the user has given marketing consent.

---

## 17. Backlink, Domain Authority, and Technical SEO

### 17.1 Understanding Domain Authority at Kärcher's Scale

Domain Authority (DA) is a metric developed by Moz, estimating how likely a site is to rank in search results based on backlink quality and quantity. A DA of 70+ is considered strong for a commercial site.

Kärcher's indicators suggest DA 70+:
- Global rank #15,691 with 8.6M quarterly visits.
- 50.4% organic traffic share.
- Strong topical authority in cleaning equipment (industry rank #4).
- 90+ years of brand history generating natural backlinks.

**Natural backlink sources for Kärcher:**
- Product review sites (Which?, Which.co.uk, Stiftung Warentest).
- Press releases picked up by news sites.
- Dealer websites linking to manufacturer product pages.
- User forums discussing products (Reddit, specialist forums).
- YouTube creators reviewing Kärcher products linking in descriptions.

### 17.2 The s1.kaercher-media.com CDN Issue

15.6% of outgoing traffic goes to `s1.kaercher-media.com`. This is Kärcher's media CDN. When product images are served from this subdomain, they are technically on a different domain from kaercher.com.

**Technical SEO concern:** If product images on s1.kaercher-media.com have no canonical tags and are crawlable, Google may index them separately or attribute their link equity to the CDN subdomain rather than kaercher.com.

**Solution:** Ensure the CDN serves images with `X-Robots-Tag: noindex` or that the image URLs are only accessible via the main domain (with canonical tags pointing to kaercher.com).

**The Frontend Architect's role:** Implement image serving through Next.js Image optimization which adds appropriate cache headers, and ensure image URLs in structured data reference the canonical kaercher.com domain.

---

## 18. Conversion Rate Optimization Analysis

### 18.1 Kärcher's Conversion Funnel

Based on the traffic data, here is the implied conversion funnel:

```
8.64M visits (3 months)
  → 43.3% bounce = 4.9M visits see more than 1 page
  → 3.4 pages/visit = active browsing users
  → Outbound to Worldpay.com = 9% of outbound = checkout attempts
  → Orders converted (estimate: 2-3% of sessions = ~50,000-90,000 orders/month)
```

Note: These are estimates. Actual conversion rate is internal Kärcher data.

### 18.2 Where Conversions Are Lost

**Stage 1 — Landing page bounce (43.3%):** Users arrive and leave immediately. Caused by:
- Slow page load on mobile (67% of traffic).
- Page content does not match search intent.
- Irrelevant paid search landing pages.

**Frontend fix:** Improve LCP, ensure landing pages match keyword intent, add clear calls to action above the fold.

**Stage 2 — Product page abandonment:** Users view the product but do not add to cart. Caused by:
- Price not visible without scrolling.
- No clear stock status.
- Confusing variant selection.
- Slow product image loading.

**Frontend fix:** Ensure price and add-to-cart are above the fold on mobile. Real-time stock status. Clear image gallery.

**Stage 3 — Cart abandonment:** Users add to cart but do not complete checkout. Caused by:
- Surprise shipping costs revealed late in checkout.
- Checkout too many steps.
- Payment form friction.
- Lack of preferred payment method (missing SOFORT for German users, for example).

**Frontend fix:** Show shipping cost estimate early. Reduce checkout steps. Offer guest checkout.

### 18.3 The Mobile Checkout Problem

67% mobile traffic but mobile checkout conversion rates are typically 30-50% lower than desktop in e-commerce. This is the single largest conversion opportunity.

**What makes mobile checkout hard:**
- Small touch targets on form fields.
- Keyboard covering form fields when typing address.
- Credit card number entry is tedious on mobile.
- Users are often interrupted on mobile (notifications, calls).

**Frontend solutions:**
- Implement Apple Pay and Google Pay via Worldpay's SDK. One tap for the growing base of Apple/Google Pay users.
- Use `autocomplete` attributes on all form fields to trigger browser autofill.
- Use `inputmode="numeric"` on card number and CVV fields to show the numeric keyboard.
- Implement a persistent mini-cart that survives navigation away.

---

## 19. Interview: Every Question Answered Thoroughly

### 19.1 Technical Questions

---

**Q: How would you architect a product listing page on kaercher.com that serves 67% mobile users and ranks well organically?**

A complete answer covers four dimensions:

**Rendering strategy:** Use Next.js ISR (Incremental Static Regeneration) with `revalidate: 3600`. The base category page (no filters) is pre-built at deploy time and served from CDN edge nodes worldwide. Filtered pages use SSR to maintain fresh data without generating millions of static variants. This gives fast TTFB for the common case (base category) while remaining flexible for filtered states.

**Mobile-first design:** The page layout uses CSS Grid with a 1-column layout on mobile, 2-column at 640px, 4-column at 1024px. Product cards have 44px minimum touch targets. The filter drawer on mobile is a full-screen overlay rather than an inline sidebar. Image sizes use `srcset` to serve 400px images for mobile, 600px for tablet, 800px for desktop.

**SEO implementation:** Base category URL is canonical. Filtered URLs include `<link rel="canonical" href="/category"/>` to avoid index bloat from filter combinations. Pagination uses `rel="next"` and `rel="prev"` link elements. Product grid items include microdata attributes for rich snippet eligibility. Language variants have hreflang tags.

**Performance:** Product images use WebP format, served from CDN, with explicit width/height attributes. The first 8 products use `loading="eager"`, remaining use `loading="lazy"`. The `fetchpriority="high"` attribute on the first product image improves LCP.

---

**Q: Explain how you would set up a React + GraphQL integration with commercetools.**

**Client configuration:** Apollo Client with `InMemoryCache` configured with type policies for commercetools object types (Product, Cart, Customer). Normalization by `id` field prevents duplicate cache entries.

**Authentication:** commercetools uses OAuth 2.0. For server-side pages (SSR/ISR), use the backend-to-backend `client_credentials` flow. For client-side operations (add to cart, login), use the customer token flow. Store tokens in httpOnly cookies, not localStorage.

**Cache strategy per query type:**
- Product data: `cache-first` with long stale time. Product descriptions do not change frequently.
- Cart data: `network-only`. The cart must always reflect the current server state.
- Category listings: `cache-and-network`. Serve cached results instantly, update in background.
- Stock availability: `network-only`. Must be real-time.

**Code generation:** Use `graphql-codegen` to generate TypeScript types from the commercetools GraphQL schema. Every query and mutation produces typed hooks. This eliminates an entire class of runtime errors where you assume a field exists but it does not.

**Error handling:** Wrap critical mutations (add to cart, checkout) in try-catch with user-facing error messages. Use Apollo's `errorPolicy: 'all'` to receive partial data alongside errors rather than failing completely.

---

**Q: How do you design a component library that works across an e-commerce storefront and IoT device dashboards?**

The key insight is that both applications share primitive components (Button, Input, Modal, Typography) but diverge at the feature level (ProductCard is only for e-commerce, DeviceStatusCard is only for IoT).

**Architecture:**

```
packages/
  design-tokens/         # Design tokens only: colors, spacing, typography
  ui-primitives/         # Button, Input, Modal, Typography, Icon, Badge
  ui-ecommerce/          # ProductCard, CartItem, CheckoutStep, PriceDisplay
  ui-iot/                # DeviceCard, TelemetryChart, StatusIndicator, AlertBadge
```

**Shared in all packages:** Design tokens. Every component derives colors, spacing, and typography from the token system.

**Not shared:** Domain-specific business logic. A DeviceStatusCard knows about device states (online, offline, error, maintenance). A ProductCard knows about pricing, variants, and availability. These concerns must not bleed into each other.

**Versioning:** Each package follows semantic versioning. Breaking changes in `ui-primitives` get a major version bump. Applications pin to major versions and upgrade intentionally.

---

**Q: How would you migrate a Vue.js codebase to React without stopping feature delivery?**

Use the **strangler fig pattern**: wrap the old application with the new one, route new features to React, gradually replace existing Vue pages, decommission Vue when fully replaced.

**Phase 1 — Infrastructure (Weeks 1-4):**
Set up Next.js with TypeScript alongside the Vue application. Configure routing so `/new/*` URLs go to Next.js, all others to Vue. Set up shared design tokens and Storybook.

**Phase 2 — New features in React (Months 2-6):**
All new features are built in React. The Vue app is in maintenance mode (bug fixes only). Teams build React fluency on real work.

**Phase 3 — Migrate high-traffic pages (Months 6-12):**
Prioritize by traffic. Product detail pages first (highest traffic, most conversion impact). Implement route by route, measuring performance before and after each migration.

**Phase 4 — Decommission Vue (Months 12-18):**
Remove Vue application once all routes are migrated. Delete Vue dependencies.

**Risk management:** Feature flags control which users see the React version. Roll out to 5%, then 20%, then 100% per page. Roll back immediately if conversion drops.

---

**Q: How would you implement a real-time device dashboard for a Kärcher connected cleaning machine?**

**Data architecture:**
- REST API for initial device state and historical data (React Query with `staleTime`).
- WebSocket connection for live updates (custom hook with reconnection logic).
- GraphQL subscription as an alternative if the IoT backend exposes it.

**Component architecture:**
```
<DeviceDashboard>
  <DeviceHeader status={liveState.status} lastSeen={liveState.timestamp} />
  <MetricsGrid metrics={liveState.metrics} />
  <UsageChart data={historicalData} liveDataPoint={liveState.currentMetric} />
  <AlertList alerts={liveState.alerts} onAcknowledge={handleAcknowledge} />
  <DeviceControls deviceId={deviceId} onCommand={sendCommand} />
</DeviceDashboard>
```

**Connection resilience:**
Show a connection status indicator. If WebSocket disconnects, fall back to polling every 10 seconds. Show a "Last updated X seconds ago" timestamp that turns orange at 30 seconds and red at 60 seconds to indicate stale data.

**Device commands:** Commands (start, stop, change mode) are sent via REST POST to the IoT backend, which relays to AWS IoT Core via MQTT. The command response is optimistic — show "Starting..." immediately, then update based on the WebSocket event confirming the state change.

---

### 19.2 System Design Questions

---

**Q: Design the frontend architecture for kaercher.com's product catalog with 10,000+ SKUs across 60+ countries.**

**Data model:** Each product in commercetools has a product type (defining its attribute schema), master variant (primary version), and variants (different models/configurations). Product projections are read-optimized views with locale-specific data.

**Rendering strategy:**
- Category pages: ISR, revalidated hourly. Edge-cached globally.
- Product pages: ISR, revalidated every 15 minutes (to pick up price changes quickly). Edge-cached.
- Search results: SSR (personalized, cannot be statically cached).

**URL structure:** `/[countryCode]/[language]/[category]/[product-slug]`. Example: `/de/de/home-garden/hochdruckreiniger/k2-basic.html`

**Sitemap:** Generated at build time, listing all country/language/product combinations. Submitted to Google Search Console per locale.

**Image delivery:** All product images served from s1.kaercher-media.com CDN via Next.js Image component which handles format selection (WebP/AVIF), responsive sizing, and lazy loading.

**i18n:** next-i18next for client-side translations, server-side props pass locale to `getStaticProps`. Every page knows its locale from the URL.

---

**Q: Design a frontend component library that can be shared across three separate React projects.**

Use an **npm monorepo** with a tool like Turborepo or NX. Publish packages to a private npm registry (GitHub Packages, npm private registry).

**Package structure:**
```
packages/
  tokens/      # Design tokens as CSS variables and JS exports
  icons/       # SVG icon components
  primitives/  # Button, Input, Select, Modal, Typography
  patterns/    # SearchBar, Pagination, FilterPanel
apps/
  storefront/  # kaercher.com
  b2b-portal/  # Professional accounts portal
  iot-dashboard/ # Connected cleaning management
```

**Versioning:** Changesets for version management. Every PR that changes a package requires a changeset file describing the change and its impact level (major/minor/patch).

**Testing:** Storybook for visual testing. Chromatic for visual regression. jest + React Testing Library for behavior.

**Documentation:** Storybook deployed to a shared URL. Every component has usage examples, prop documentation, and accessibility notes.

---

### 19.3 Behavioral Questions

---

**Q: Tell me about a time you made a significant architectural decision that affected multiple teams.**

Structure your answer with STAR (Situation, Task, Action, Result):

**What Kärcher wants to hear:**
- You owned a decision end-to-end (not just implemented someone else's).
- You considered the impact on other teams before deciding.
- You communicated the decision clearly (ADR, team meeting, documentation).
- The outcome was measurable.

**Good answer pattern:** "We needed to choose between Apollo Client and URQL for our GraphQL data layer. I ran a proof of concept with both for one week, wrote an ADR documenting the performance characteristics, bundle size difference, and ecosystem support. I presented the recommendation to both the frontend team and the backend API team. We chose Apollo for its mature normalized cache and better DevTools, despite URQL's smaller bundle size. Three months later, the normalized cache prevented what would have been significant duplication in our product catalog queries."

---

## 20. Questions to Ask Kärcher

These questions are ordered by priority. Ask the top 3-4 depending on available time.

**Architecture depth questions:**

1. "Is the Digital Channel Products team using commercetools Frontend as the foundation, or building a custom Next.js application that consumes the GraphQL API directly? And how much of the existing frontend is in Vue.js today?"

   *Why ask:* Shows you understand the technical choice they face. Sets up a conversation about migration strategy, which is likely a key part of the role.

2. "What is the current state of Core Web Vitals on kaercher.com product pages on mobile? What are the LCP and CLS scores, and what are the team's targets?"

   *Why ask:* References your knowledge that 67% of their traffic is mobile. Shows you think in measurable terms.

3. "How does the IoT device dashboard connect to the e-commerce storefront? Is there shared component infrastructure, or are they built as completely separate applications?"

   *Why ask:* Reveals the true scope of the design system challenge. If they are completely separate, you have a larger architecture challenge.

**Team and process questions:**

4. "How is the transition from Vue.js to React being sequenced? Is there an incremental migration plan, or is the new work entirely in React while Vue is maintained separately?"

5. "How does the team approach testing? What is the current mix of unit, integration, and E2E tests, and are there Lighthouse CI budgets in the pipeline?"

6. "What does the collaboration between the Digital Channel Products team and the UX design team look like? Is there a shared Figma library that feeds into the component library?"

**Growth and opportunity questions:**

7. "Given the InOrbit and Skyline Robotics investments, what does the 3-year vision for the connected cleaning product interfaces look like? How does Digital Channel Products fit into that?"

---

## 21. Key Facts Reference Card

Use this section as a quick-access summary during final preparation.

### Company Facts

| Fact | Value |
|---|---|
| Full name | Alfred Kärcher SE & Co. KG |
| Founded | 1935, Winnenden, Germany |
| Ownership | Family-owned (Kärcher family) |
| Revenue | EUR 3.09B (2021) |
| Employees | 14,700+ globally |
| Countries | 60+ |
| CEO | Hartmut Jenner |
| Position sits in | Digital Channel Products department |

### Traffic Facts (Feb–Apr 2026)

| Metric | Value | Why It Matters |
|---|---|---|
| Total quarterly visits | 8.645M | Enterprise-level scale |
| Monthly visits | 2.881M (+20.23%) | Spring seasonal surge |
| Mobile share | 67.26% | Mobile-first is mandatory |
| Desktop share | 32.74% | B2B research demographic |
| Global rank | #15,691 | Top 0.005% globally |
| Germany rank | #3,481 | Home market dominance |
| Industry rank | #4 (Gardening/Cleaning) | Sector leader |
| Bounce rate | 43.30% | Slightly below avg (44.4%) |
| Pages per visit | 3.40 | Moderate engagement |
| Session duration | 2m 41s | Room to improve with speed |

### Marketing Channel Facts

| Channel | Share | Key Frontend Implication |
|---|---|---|
| Organic search | 50.40% | SSR + structured data = business critical |
| Direct | 17.62% | Account UX matters for repeat visitors |
| Paid search | 15.13% | Landing page LCP directly affects CPC |
| Referrals | 6.52% | Affiliate tracking, UTM handling |
| Display | 3.84% | Cookie consent controls retargeting |
| Social | 2.81% + 0.58% | OpenGraph tags, AI search visibility |

### Geography Facts

| Country | Share | YoY Growth |
|---|---|---|
| Germany | 14.03% | +11.73% |
| France | 13.15% | +50.51% |
| UK | 10.23% | +16.29% |
| Turkey | 5.53% | +43.91% |
| Japan | 4.32% | +55.81% |

### Technology Stack

| Tool | Role | Why You Need to Know It |
|---|---|---|
| commercetools | Commerce backend | GraphQL API for all product/cart/order data |
| Vue.js | Existing frontend | Being migrated to React |
| React | Target frontend | The role's primary technology |
| GraphQL | API layer | Native to commercetools, used for all data fetching |
| TypeScript | Type safety | Expected with React in all JDs |
| SAP ERP | Inventory/finance | Source of truth for stock and pricing |
| Adobe Analytics | Web analytics | Event tracking architecture your responsibility |
| Facebook Pixel | Retargeting | Consent-gated implementation required |
| Worldpay | Payments | 9% of outbound traffic — checkout integration |
| AWS IoT Core | IoT backend | Real-time device telemetry |
| DynamoDB | IoT data store | Device state persistence |
| nunami.ai | AI personalization | New integration — product recommendations |
| Sovendus | Affiliate | Checkout pixel, voucher network |

### Competitor Traffic Comparison

| Competitor | Traffic | Relationship |
|---|---|---|
| sharkclean.co.uk | 5.52M | Closest consumer competitor |
| dyson.co.uk | 3.86M | Premium vacuum competitor |
| nilfisk.com | 806K | Professional cleaning competitor |
| bissell.co.uk | 196K | Floor care competitor |
| kaerchershop-schreiber.de | #17,223 rank | Dealer competing for branded search |

### Interview Preparation Priorities

| Priority | Area | What to Practice |
|---|---|---|
| P1 | React + TypeScript | Hooks depth, reconciliation, concurrent features, type system |
| P1 | GraphQL + Apollo | commercetools schema, cache normalization, code generation |
| P1 | Frontend architecture | Component design, ADRs, design system, i18n |
| P1 | Mobile performance | Core Web Vitals, LCP optimization, CLS prevention |
| P2 | IoT frontend | WebSocket patterns, real-time state, time-series charts |
| P2 | E-commerce patterns | Cart, checkout, PLP, PDP, search |
| P2 | MACH architecture | Headless commerce, composable commerce, MACH principles |
| P2 | German/English | Technical discussions in English, possible German meetings |
| P3 | AWS basics | IoT Core context, S3, Lambda conceptual understanding |

---

*Complete theoretical research document for Kärcher Frontend Architect (React) interview preparation. May 2026.*