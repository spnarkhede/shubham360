# Complete Abbreviations Reference
## All Frontend Architect / Kärcher Interview Documents

> Every abbreviation used across all documents — the Frontend Architect Preparation Guide, the Kärcher Company Intelligence Report, and the Theoretical Research — is listed here with its full form, a plain-English explanation, and the context in which it appears.

> Organized alphabetically. Use Ctrl+F / Cmd+F to find any term instantly.

---

## Table of Contents

- [A](#a)
- [B](#b)
- [C](#c)
- [D](#d)
- [E](#e)
- [F](#f) 
- [G](#g)
- [H](#h)
- [I](#i)
- [J](#j)
- [K](#k)
- [L](#l)
- [M](#m)
- [N](#n)
- [O](#o)
- [P](#p)
- [Q](#q)
- [R](#r)
- [S](#s)
- [T](#t)
- [U](#u)
- [W](#w)
- [X](#x)
- [Y](#y)
- [Z](#z)
- [Quick Reference Table](#quick-reference-table)

---

## A

### AA
**Full form:** Accessibility Guidelines Level AA (part of WCAG)

The middle conformance level of the Web Content Accessibility Guidelines. Level A is the minimum, AA is the standard expected for most websites, AAA is the highest. When a document says "WCAG 2.1 AA compliance", it means the site meets the AA-level criteria including sufficient color contrast (4.5:1 ratio for normal text), keyboard navigability, and proper ARIA usage.

---

### ADR / ADRs
**Full form:** Architecture Decision Record / Architecture Decision Records

A document that captures an important architectural decision made during a project, including the context, the options considered, the decision made, and the consequences. ADRs are a lightweight documentation practice. A well-written ADR answers three questions: What problem were we solving? What options did we consider? Why did we choose this one?

In the documents: "Write 2 ADRs for decisions you already made" is a preparation exercise. At Kärcher, a Frontend Architect would write ADRs for decisions like "Why Apollo Client over URQL" or "Why ISR over SSR for product pages."

---

### AI
**Full form:** Artificial Intelligence

The simulation of human intelligence processes by machines, especially computer systems. In the documents, AI appears in multiple contexts:
- **AI personalization** (nunami.ai integration on kaercher.com)
- **Generative AI tools** (Claude Code, Cursor, GitHub Copilot used during development)
- **AI search referrals** (ChatGPT, Perplexity, Gemini sending traffic to websites)
- **AI-driven code generation** (building systems that generate frontend code automatically)
- **AIO** (AI Overviews in Google Search results)

---

### AIO
**Full form:** AI Overview

Google's AI-generated summary that appears at the top of search results pages, directly answering a user's question without requiring a click-through to a website. AIOs can reduce organic click-through rates because the answer appears on the results page itself. Relevant to Kärcher because it may reduce the effectiveness of their 50.4% organic search channel over time.

---

### API / APIs
**Full form:** Application Programming Interface / Application Programming Interfaces

A set of rules and protocols that allows different software applications to communicate with each other. An API defines what requests can be made, how to make them, and what responses to expect.

In the documents: commercetools exposes a GraphQL API and a REST API. The Frontend Architect queries these APIs to fetch product data, manage carts, and process orders. The IoT backend exposes APIs for device state and telemetry.

---

### ARIA
**Full form:** Accessible Rich Internet Applications

A technical specification published by the W3C (World Wide Web Consortium) that defines ways to make web content and applications more accessible to people with disabilities. ARIA provides a set of attributes you can add to HTML elements to convey meaning to assistive technologies like screen readers.

Common ARIA attributes in the documents:
- `aria-label`: Provides an accessible name for an element
- `aria-describedby`: Links an element to a description
- `aria-live`: Announces dynamic content changes to screen readers
- `aria-hidden`: Hides decorative elements from screen readers
- `aria-expanded`: Indicates whether a collapsible element is open or closed
- `role`: Overrides or supplements the native semantic meaning of an element

---

### AST
**Full form:** Abstract Syntax Tree

A tree representation of the structure of source code. An AST breaks code down into its logical components — variables, functions, operators, control flow — in a hierarchical tree structure that a program can read and manipulate.

In the documents: Used in the context of AI-driven code generation at Kärcher (CoCreate AI use case). The tool `ts-morph` manipulates TypeScript ASTs to generate or transform code programmatically. Understanding ASTs is relevant to the role that involves building systems that auto-generate frontend code from component libraries.

---

### AVIF
**Full form:** AV1 Image File Format

A modern image format developed by the Alliance for Open Media. AVIF provides significantly better compression than JPEG, PNG, and even WebP, resulting in smaller file sizes at equivalent visual quality. AVIF can reduce image file sizes by 50% compared to JPEG.

In the documents: Recommended as the preferred image format for product images on kaercher.com. Supported by all modern browsers. Next.js Image component automatically serves AVIF when the browser supports it, falling back to WebP, then JPEG.

---

### AWS
**Full form:** Amazon Web Services

Amazon's cloud computing platform, offering hundreds of services including computing, storage, databases, IoT, and machine learning. One of the three major cloud providers alongside Google Cloud Platform (GCP) and Microsoft Azure.

In the documents: Kärcher uses AWS for its IoT infrastructure. Specific AWS services mentioned:
- **AWS IoT Core:** The managed IoT connectivity service that handles device communication
- **AWS Lambda:** Serverless compute for event-driven processing
- **Amazon DynamoDB:** NoSQL database for IoT device state
- **Amazon S3:** Object storage for assets

---

## B

### BFF
**Full form:** Backend for Frontend

An architectural pattern where a dedicated backend service is built specifically to serve one frontend client. Rather than having all frontends share a single general-purpose API, each frontend (web app, mobile app, IoT dashboard) gets its own backend that is shaped exactly for its needs.

In the documents: STACKIT (Schwarz Digits) implements a BFF using Go, providing REST APIs specifically for their Angular frontend. For Kärcher, a BFF pattern could aggregate data from commercetools (product catalog), SAP (inventory), and AWS IoT Core (device state) into a single response optimized for the frontend.

Why BFF matters: The frontend no longer has to make 5 separate API calls and assemble the data itself. The BFF makes those calls server-to-server (faster, no CORS issues) and returns one shaped response.

---

## C

### CD
**Full form:** Continuous Delivery (in CI/CD context)

The practice of automatically releasing software to production (or to a staging environment) whenever code passes automated tests. CD ensures that software is always in a deployable state. Sometimes also means Continuous Deployment, where every passing build is automatically deployed without human approval.

In the documents: Part of the CI/CD pipeline. A typical pipeline for kaercher.com would be: code commit → CI (lint, type-check, tests, build) → CD (deploy to staging → deploy to production).

---

### CDN
**Full form:** Content Delivery Network

A geographically distributed network of servers that caches and delivers web content from locations physically close to the user. Instead of all requests going to a single origin server in Germany, a CDN serves cached copies of pages and assets from edge nodes worldwide.

In the documents:
- `s1.kaercher-media.com` is Kärcher's media CDN for product images and videos
- CDN edge caching is the recommended delivery strategy for ISR (Incremental Static Regeneration) pages on kaercher.com
- 15.6% of kaercher.com outbound traffic goes to the media CDN

Why CDN matters: A user in Tokyo gets the product page from a CDN edge node in Tokyo, not from a server in Germany. This reduces latency from ~300ms to ~20ms for static assets.

---

### CEO
**Full form:** Chief Executive Officer

The highest-ranking executive in a company, responsible for overall strategy, operations, and leadership. At Kärcher: **Hartmut Jenner** is CEO and Chairman of the Board of Management.

---

### CFO
**Full form:** Chief Financial Officer

The executive responsible for managing a company's finances, including financial planning, risk management, and financial reporting. At Kärcher: **Steffen Pietsch** is CFO and Member of the Board of Management.

---

### CI
**Full form:** Continuous Integration

The practice of automatically building and testing code every time a developer commits changes to version control. CI catches integration errors early by running a standardized test suite on every change.

In the documents: CI pipeline for a frontend project typically runs: lint (ESLint) → type-check (tsc) → unit tests (Vitest/Jest) → integration tests → build → E2E tests (Playwright). All must pass before code is merged.

---

### CLI
**Full form:** Command-Line Interface

A text-based interface where users interact with a program by typing commands. As opposed to a GUI (Graphical User Interface).

In the documents: Claude Code is described as a "CLI-based agentic coding tool." Tools like Vite, Next.js, NX, and npm all have CLI interfaces used during development. A Frontend Architect configures and uses CLI tools extensively.

---

### CLS
**Full form:** Cumulative Layout Shift

One of Google's Core Web Vitals. Measures the visual instability of a page — how much content unexpectedly moves after it has been displayed. A score of 0.1 or below is considered good, 0.25+ is poor.

Common CLS causes in the documents:
- Images without defined width and height (browser cannot reserve space before the image loads)
- Dynamically injected content that pushes existing content down (cookie banners, chat widgets)
- Fonts loading and changing text dimensions (FOUT)
- nunami.ai recommendation widgets loading into an undefined space

CLS directly affects user experience (content jumping while reading) and organic search rankings.

---

### CMS
**Full form:** Content Management System

Software that allows non-technical users to create, manage, and publish digital content without writing code. Examples: WordPress, Contentful, Storyblok, Payload CMS, Sanity.

In the documents:
- **Payload CMS** is used at loadbee GmbH
- Kärcher likely uses a headless CMS for marketing content on kaercher.com
- A **headless CMS** separates content management from content display — content is stored in the CMS and delivered via API to any frontend

---

### CPC
**Full form:** Cost Per Click

The amount an advertiser pays each time a user clicks on their paid search advertisement. Google Ads uses an auction model where Quality Score (based partly on landing page experience) influences CPC.

In the documents: A frontend architect who improves landing page LCP (Largest Contentful Paint) and reduces bounce rate indirectly lowers CPC by improving Google Ads Quality Score. This makes paid search more cost-efficient, which is a measurable business benefit of good frontend performance.

---

### CORS
**Full form:** Cross-Origin Resource Sharing

A browser security mechanism that restricts web pages from making requests to a different domain than the one that served the page. If kaercher.com's frontend tries to call `api.commercetools.com` directly, the browser checks for CORS headers that explicitly allow this.

In the documents: CORS appears in the REST API integration section. Preflight requests (OPTIONS) are sent by the browser before complex cross-origin requests to verify permissions. Understanding CORS is essential for debugging API integration issues in frontend development.

---

### CSP
**Full form:** Content Security Policy

An HTTP response header that controls which resources (scripts, styles, images, frames) a web page is allowed to load. CSP prevents XSS attacks by blocking unauthorized scripts from executing.

In the documents: For Kärcher's checkout integration with Worldpay, the CSP must explicitly allow `frame-src worldpay.com` (so the payment iframe can load) and `script-src nunami.ai` (so the personalization SDK can run). The Frontend Architect configures CSP headers.

---

### CSRF
**Full form:** Cross-Site Request Forgery

A web security vulnerability where an attacker tricks an authenticated user into unknowingly submitting a malicious request. For example, if a user is logged into kaercher.com and visits a malicious site, that site could send a forged request to kaercher.com that performs an unwanted action on behalf of the user.

In the documents: Prevention techniques include same-site cookies (which prevent the cookie from being sent on cross-origin requests) and CSRF tokens (unique secret values that must be included in state-changing requests).

---

### CSR
**Full form:** Client-Side Rendering

A rendering strategy where the browser downloads a minimal HTML file and JavaScript, then executes the JavaScript to fetch data and build the page in the browser. The page appears blank until JavaScript executes.

In the documents: CSR is contrasted with SSR and SSG as the three main rendering strategies. CSR is the default for Create React App. For SEO-critical pages like kaercher.com product pages, CSR is not recommended because Google may index the empty initial HTML before JavaScript executes.

---

### CSS
**Full form:** Cascading Style Sheets

The language used to describe the visual presentation of HTML documents — colors, typography, spacing, layout, animation. "Cascading" refers to the priority rules that determine which style applies when multiple rules target the same element.

In the documents: CSS is a required skill. Specific CSS areas covered include Flexbox, Grid, custom properties (CSS variables), SCSS/Sass preprocessing, responsive design with media queries and container queries, and performance considerations (will-change, containment, layout thrashing).

---

### CTA
**Full form:** Call to Action

A design element (usually a button or link) that prompts the user to take a specific action. On kaercher.com, the primary CTA on product pages is "Add to Cart" or "Buy Now."

In the documents: CTAs must be above the fold on mobile. Poor CTA placement (hidden below the fold on a 67% mobile traffic site) directly reduces conversion rate.

---

### CVV
**Full form:** Card Verification Value

The 3 or 4 digit security code on a credit or debit card. Also called CVC (Card Verification Code) or CSC (Card Security Code). Worldpay's payment form collects the CVV — it never passes through Kärcher's frontend.

In the documents: `inputmode="numeric"` on the CVV field shows the numeric keyboard on mobile, improving the checkout UX.

---

## D

### DA
**Full form:** Domain Authority

A metric developed by Moz (a SEO software company) that predicts how likely a website is to rank in search engine results. Scored 1-100, higher is better. Estimated based on the number and quality of backlinks pointing to a domain.

In the documents: Kärcher's DA is estimated at 70+ based on its global rank (#15,691) and the fact that 50.4% of its traffic comes from organic search. A DA of 70+ is considered strong for a commercial site.

---

### DOM
**Full form:** Document Object Model

A programming interface for HTML and XML documents. The DOM represents a web page as a tree of objects, where each HTML element is a node. JavaScript can read and manipulate the DOM to change what appears on the page.

In the documents: Understanding the DOM is fundamental to frontend development. DOM manipulation is what JavaScript does when React renders components. "Layout thrashing" (a performance problem) occurs when JavaScript reads and writes to the DOM in a rapid alternating pattern.

---

## E

### E2E
**Full form:** End-to-End (Testing)

A testing approach that tests the complete flow of an application from the user's perspective, simulating real user behavior across multiple pages and interactions. E2E tests verify that the entire system works together.

In the documents: Playwright and Cypress are the primary E2E testing tools. E2E tests should cover critical user journeys only: login flow, product search, add to cart, checkout completion. Not every edge case — that is what unit and integration tests are for.

---

### EMS
**Full form:** Energy Management System

Software that monitors, controls, and optimizes energy consumption in a facility or system. In the documents, PRAMAC builds an EMS for battery storage systems. Kärcher's IoT products (connected cleaning machines) share similar architectural patterns — real-time data, dashboards, and control interfaces.

---

### ERP
**Full form:** Enterprise Resource Planning

Integrated software that manages core business processes including inventory management, order processing, accounting, procurement, and human resources. SAP is the world's dominant ERP vendor.

In the documents: Kärcher uses SAP ERP. The product availability shown on kaercher.com flows from SAP → commercetools → frontend. Understanding this data flow helps the Frontend Architect design appropriate caching strategies and error states when upstream systems are slow or unavailable.

---

### EU
**Full form:** European Union

The political and economic union of 27 European countries. Relevant to frontend architecture primarily through the GDPR (data protection regulation) and potentially the Digital Services Act (DSA) and Digital Markets Act (DMA).

In the documents: GDPR compliance is mandatory for kaercher.com given its significant EU traffic (Germany, France, and other EU countries make up the majority of traffic).

---

### EUR
**Full form:** Euro

The official currency of the Eurozone, used in Germany, France, and most EU countries. In the documents, EUR is used in pricing discussions (EUR 3.09 billion revenue) and in currency formatting examples (where EUR uses comma as decimal separator in Germany: 1.299,00 €).

---

## F

### FaaS
**Full form:** Function as a Service

A cloud computing model where developers deploy individual functions that execute in response to events, without managing servers. AWS Lambda is the most common FaaS. Also referred to as serverless compute.

In the documents: Used in the context of Kärcher's AWS IoT architecture. Lambda functions likely process incoming device telemetry from AWS IoT Core before storing it or forwarding it to the frontend API.

---

### FEaaS
**Full form:** Frontend as a Service

A software category where a vendor provides a hosted, managed frontend framework that connects to a commerce backend via API. commercetools Frontend is an example of FEaaS — it provides a pre-built Next.js-based frontend studio that non-technical users can manage visually.

In the documents: The Kärcher research discusses whether the Digital Channel Products team uses commercetools Frontend (FEaaS) or builds a custom Next.js application. The existence of a dedicated Frontend Architect role suggests a custom build rather than FEaaS.

---

### FID
**Full form:** First Input Delay

A now-retired Core Web Vital (replaced by INP in March 2024) that measured the time from when a user first interacts with a page (click, tap, key press) to when the browser begins processing the response. FID was retired because it only measured the first interaction and did not reflect ongoing responsiveness.

In the documents: Mentioned in legacy context. INP (Interaction to Next Paint) is the current standard that replaced FID.

---

### FIS
**Full form:** Fidelity National Information Services

The parent company of Worldpay after FIS acquired Worldpay in 2019. In the documents, Worldpay (owned by FIS) is identified as Kärcher's payment processor based on the 9% of outbound traffic going to worldpay.com.

---

### FOUT
**Full form:** Flash of Unstyled Text

A visual artifact where text appears briefly in a fallback font before the custom web font loads. FOUT causes layout shift (CLS) because different fonts have different metrics and the text may reflow when the custom font loads.

In the documents: Prevented with `font-display: swap` (text immediately visible in fallback, swaps when font loads) combined with `size-adjust` to minimize the metric differences between fallback and custom font.

---

## G

### GBP
**Full form:** Great British Pound

The currency of the United Kingdom. In the documents, GBP appears in internationalization discussions — the UK market (10.23% of Kärcher's traffic) requires prices displayed in pounds with period as decimal separator (£1,299.00) rather than the European comma format.

---

### GCP
**Full form:** Google Cloud Platform

Google's cloud computing platform, one of three major providers alongside AWS and Microsoft Azure. In the documents: commercetools' GraphQL API endpoint includes `europe-west1.gcp.commercetools.com`, indicating commercetools runs on GCP infrastructure.

---

### GDPR
**Full form:** General Data Protection Regulation

The European Union's comprehensive data privacy regulation that came into effect in May 2018. GDPR governs how organizations collect, store, process, and protect personal data of EU residents.

In the documents: GDPR is a primary constraint for Kärcher's frontend architecture because:
- Tracking pixels (Facebook Pixel, Adobe Analytics, nunami.ai) require explicit user consent
- Cookie consent management must be implemented in the frontend
- GDPR non-compliance can result in fines up to 4% of global annual revenue (up to EUR 123M for Kärcher)
- Consent state must gate the loading of all non-essential tracking scripts

---

### GPS
**Full form:** Global Positioning System

A satellite-based navigation system providing location and time information. In the documents: GPS is mentioned in the context of Kärcher's IoT fleet management — commercial cleaning vehicles equipped with GPS sensors that send location data to AWS IoT Core, which then appears on fleet management dashboards.

---

## H

### HOC / HOCs
**Full form:** Higher-Order Component / Higher-Order Components

A React pattern where a function takes a component and returns a new component with additional props or behavior. HOCs were the primary pattern for code reuse in React before hooks were introduced in React 16.8.

In the documents: HOCs are covered in the component architecture patterns section. Custom hooks have largely replaced HOCs for logic reuse, but HOCs still appear for cross-cutting concerns like authentication guards and analytics instrumentation.

---

### HSTS
**Full form:** HTTP Strict Transport Security

An HTTP response header that tells browsers to always use HTTPS when communicating with the website, even if the user types http://. HSTS prevents downgrade attacks where an attacker intercepts an HTTP connection before it can redirect to HTTPS.

In the documents: Listed as a security requirement for Kärcher's checkout flow. The header looks like: `Strict-Transport-Security: max-age=31536000; includeSubDomains`.

---

### HTML
**Full form:** HyperText Markup Language

The standard markup language for creating web pages. HTML defines the structure and meaning (semantics) of web content through elements and attributes.

In the documents: HTML5 (the current major version) is a required skill. Semantic HTML — using the correct elements for their intended purpose (article, section, nav, header, button, anchor) — is emphasized for accessibility and SEO. The Frontend Architect must ensure the codebase uses semantic HTML consistently.

---

### HTTP / HTTPS
**Full form:** HyperText Transfer Protocol / HyperText Transfer Protocol Secure

HTTP is the protocol for transferring data on the web. HTTPS is the encrypted version using TLS (Transport Layer Security). All modern websites should use HTTPS.

In the documents:
- HTTP methods (GET, POST, PUT, PATCH, DELETE) are API fundamentals
- HTTPS is mandatory for kaercher.com, especially for the checkout flow
- HTTP status codes (200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Internal Server Error) are essential knowledge

---

## I

### i18n
**Full form:** Internationalization (shorthand: 18 letters between i and n)

The process of designing software so it can be adapted to different languages, regions, and cultural conventions without requiring code changes for each new locale. The counterpart is l10n (localization — adapting for a specific locale).

In the documents: i18n is a P1 (highest priority) skill for the Kärcher role given the company's 60+ country markets. Includes: locale-aware routing, hreflang tags, translation management, currency/number/date formatting, font support for non-Latin scripts (Japanese), and content fallback strategies.

---

### ICT
**Full form:** Information and Communications Technology

A broad term encompassing all technologies used for managing and communicating information digitally — computers, software, networking, and telecommunications.

In the documents: adesso SE won the "Best Employer in ICT" award in Germany, referenced in their job description.

---

### IG
**Full form:** Interessengemeinschaft (German abbreviation)

In the context of the documents: IG Metall — Germany's metalworkers' union, the largest individual trade union in the world. MLOG Logistics (Kardex) offers IG Metall tariff-bound pay, meaning salaries and working conditions are negotiated collectively by the union.

---

### INP
**Full form:** Interaction to Next Paint

A Core Web Vital (replaced FID in March 2024) that measures the responsiveness of a page throughout a user's visit. INP captures the latency of all interactions (clicks, taps, keyboard inputs) and reports the worst one. A score under 200ms is good, over 500ms is poor.

In the documents: INP is the current responsiveness metric. For Kärcher's product pages with complex filtering, variant selection, and add-to-cart interactions, keeping INP under 200ms requires efficient event handlers and avoiding long JavaScript tasks on the main thread.

---

### IoT
**Full form:** Internet of Things

The network of physical devices embedded with sensors, software, and connectivity that allows them to collect and exchange data. IoT enables physical objects to be monitored and controlled remotely over the internet.

In the documents: Kärcher's Connected Cleaning product line connects physical cleaning machines (pressure washers, floor scrubbers, robots) to the internet via AWS IoT Core. The Frontend Architect must build dashboards that display live telemetry from these devices and allow operators to send control commands.

---

### ISR
**Full form:** Incremental Static Regeneration

A Next.js rendering feature that allows static pages to be updated incrementally after deployment, without requiring a full rebuild. Pages are generated statically at build time and then regenerated in the background when they become stale (based on a `revalidate` time you set).

In the documents: ISR is the recommended rendering strategy for Kärcher's product pages. A `revalidate: 900` setting (15 minutes) means product pages are served from CDN cache and regenerated in the background every 15 minutes to pick up price or stock changes. This combines the performance of static delivery with the freshness of regular updates.

---

## J

### JAZ
**Full form:** Jahresarbeitszeitkonto (German)

Annual working hours account. A German employment model where total working hours per year are agreed, and employees can work more hours during busy periods and compensate with time off during quieter periods. Overtime accumulates in this account and can be taken as additional vacation.

In the documents: PwC Germany offers a JAZ model where overtime can be taken as compensatory time off, with remaining overtime paid out annually.

---

### JD / JDs
**Full form:** Job Description / Job Descriptions

In the documents: The analysis is based on 14 job descriptions collected from companies including adesso SE, Kärcher, Bluefish, STACKIT, PRAMAC, CoCreate AI, and others.

---

### JIT
**Full form:** Just-In-Time (compilation)

In the context of Tailwind CSS: JIT mode scans your code files as you develop and generates only the CSS classes you actually use, rather than generating the entire framework upfront. This results in much smaller CSS file sizes in development and production.

In the documents: Listed as a Tailwind CSS concept to know. Before JIT mode (introduced in Tailwind v2.1), Tailwind's production CSS required a purge step to remove unused classes. JIT makes this automatic and much faster.

---

### JPEG / JPG
**Full form:** Joint Photographic Experts Group

The organization that created the JPEG image format, now used as the name of the format itself. JPEG is a lossy compression format commonly used for photographs. In modern web development, JPEG is being replaced by WebP and AVIF for better compression.

In the documents: Product images on kaercher.com should be served as AVIF or WebP with JPEG as the fallback for older browsers. Next.js Image component handles this automatically.

---

### JPY
**Full form:** Japanese Yen

The currency of Japan. Relevant in the documents because Japan is Kärcher's fastest-growing traffic market (+55.81% YoY). JPY has no decimal places in standard display (¥142,900, not ¥142,900.00) and uses `Intl.NumberFormat` for correct formatting.

---

### JS
**Full form:** JavaScript

The programming language of the web. JavaScript runs in browsers (and on servers via Node.js) and is used to make web pages interactive. TypeScript is a superset of JavaScript that adds static type checking.

In the documents: JavaScript appears throughout. Key JavaScript concepts covered include closures, the event loop, the prototype chain, async/await, Promises, the microtask queue, browser APIs, and memory management.

---

### JSON
**Full form:** JavaScript Object Notation

A lightweight, text-based data format derived from JavaScript object syntax. JSON is the universal data interchange format for APIs — commercetools responses, IoT device telemetry, and GraphQL responses all use JSON.

In the documents: JSON-LD (JSON Linked Data) is used for structured data markup (Schema.org) in HTML pages, helping Google understand product information for rich search results.

---

### JSON-LD
**Full form:** JavaScript Object Notation for Linked Data

A method of encoding Linked Data using JSON. In SEO, JSON-LD is used to embed structured data (Schema.org vocabulary) in web pages within a `<script type="application/ld+json">` tag.

In the documents: Product JSON-LD on Kärcher product pages includes product name, description, price, availability, SKU, and images — helping Google display rich product results in search.

---

### JSX
**Full form:** JavaScript XML

A syntax extension for JavaScript that allows you to write HTML-like code directly in JavaScript files. JSX is used by React to describe what the UI should look like. Browsers do not understand JSX directly — it is transpiled by Babel or the TypeScript compiler into `React.createElement()` calls.

In the documents: JSX is how React components are written. Understanding how JSX transpiles to JavaScript calls is important for understanding React's rendering behavior and why React automatically escapes JSX output (preventing XSS).

---

### JWT
**Full form:** JSON Web Token

A compact, URL-safe token format used for securely transmitting information between parties. JWTs consist of three Base64-encoded parts separated by periods: a header (algorithm), a payload (claims/data), and a signature.

In the documents: JWTs are used for API authentication — a user logs in and receives a JWT access token, which is included in the `Authorization: Bearer <token>` header on subsequent API calls. Key security concerns include short expiry times, refresh token rotation, and whether to store tokens in httpOnly cookies (secure, XSS-resistant) or localStorage (accessible to JavaScript, XSS risk).

---

## K

### KB
**Full form:** Kilobyte

A unit of digital information equal to 1,000 bytes (or 1,024 bytes in binary). Used in the documents when discussing JavaScript bundle sizes. A well-optimized React application might have a main bundle under 100KB gzipped. Libraries like Recharts add ~150KB gzipped — significant enough to warrant code splitting.

---

### KG
**Full form:** Kommanditgesellschaft (German)

A limited partnership under German law. In "Alfred Kärcher SE & Co. KG", the KG indicates a limited partnership structure where the SE (Societas Europaea) is the general partner. This is a common structure for large German family-owned businesses — it provides corporate governance transparency while allowing the family to maintain control.

---

## L

### LAMP
**Full form:** Linux, Apache, MySQL, PHP

The original open-source web development stack from the early 2000s. Still used for many web applications including content management systems like WordPress.

In the documents: loadbee GmbH uses a LAMP-adjacent stack (PHP with MySQL). The Senior Full-Stack Developer role there requires LAMP experience, making it distinct from React-focused roles.

---

### l10n
**Full form:** Localization (shorthand: 10 letters between l and n)

The process of adapting an internationalized product for a specific locale. While i18n is the framework and infrastructure, l10n is the actual adaptation — translating text, formatting dates and currencies correctly, adjusting images or design for cultural appropriateness.

Referenced implicitly throughout the internationalization sections.

---

### LCP
**Full form:** Largest Contentful Paint

A Core Web Vital that measures loading performance — specifically, the time from when a page starts loading to when the largest visible element (text block or image) is fully rendered. Target: under 2.5 seconds on mobile.

In the documents: LCP is the most important Core Web Vital for Kärcher. With 67% mobile traffic and product images as the typical LCP element, optimizing LCP directly affects both organic rankings and conversion rate. Techniques include preloading the LCP image, using WebP/AVIF formats, serving from CDN, and avoiding render-blocking resources before the LCP element.

---

### LLM / LLMs
**Full form:** Large Language Model / Large Language Models

AI models trained on vast amounts of text data, capable of generating, understanding, and transforming language. Examples: GPT-4 (OpenAI), Claude (Anthropic), Gemini (Google).

In the documents: LLMs are relevant in multiple contexts:
- Building AI-powered product features (chatbots, product search, recommendation explanations)
- Using LLMs for code generation (Cursor, Claude Code, GitHub Copilot)
- AI-driven frontend generation (CoCreate AI use case: using LLMs to generate component code from a library)
- AI search referrals (0.58% of Kärcher's traffic from LLM-powered search interfaces)

---

## M

### MACH
**Full form:** Microservices, API-first, Cloud-native, Headless

A technology philosophy and architecture framework for modern enterprise software. The MACH Alliance (an industry group) promotes this architecture as the standard for future-proof digital commerce.

In the documents: Kärcher's tech stack with commercetools is explicitly MACH-aligned. Understanding MACH is essential for the Frontend Architect role because:
- **Microservices** means product catalog, cart, payments, and IoT are separate services
- **API-first** means the frontend consumes APIs rather than being coupled to the backend
- **Cloud-native** means infrastructure scales automatically (important for peak traffic)
- **Headless** means the frontend team makes their own technology choices (React, Next.js)

---

### MDN
**Full form:** Mozilla Developer Network

Mozilla's official web documentation resource (developer.mozilla.org). MDN provides comprehensive, authoritative documentation for HTML, CSS, JavaScript, and Web APIs. It is the primary reference for frontend developers.

In the documents: Listed as a primary documentation resource in the learning resources section.

---

### MDX
**Full form:** Markdown + JSX

A format that combines Markdown with JSX, allowing you to write React components directly in Markdown files. Used for documentation that needs interactive component examples.

In the documents: MDX is mentioned in the context of Storybook documentation — using MDX for narrative documentation pages that include both text and rendered component examples.

---

### ML
**Full form:** Machine Learning

A subset of AI where systems learn from data to improve their performance without being explicitly programmed. ML powers recommendation engines (nunami.ai), search ranking algorithms, and fraud detection.

In the documents: ML is the technology behind nunami.ai's product personalization on kaercher.com. The ML model learns from collective user behavior to predict which products a specific user is likely to be interested in.

---

### MLOG
**Full form:** MLOG Logistics GmbH

A company that is part of the Kardex Group, specializing in intralogistics systems and automated high-bay warehouses. One of the 14 companies whose job descriptions were analyzed for the Frontend Architect preparation guide.

---

### MPA
**Full form:** Multi-Page Application

A traditional web architecture where each page is a separate HTML document, fully rendered on the server and loaded from scratch on navigation. MPAs with interactive "islands" (partial hydration) are making a comeback with frameworks like Astro as an alternative to full SPAs.

In the documents: Astro uses the "islands architecture" — MPA with selective React/Vue/Svelte components added where interactivity is needed. Contrasted with SPAs for content-heavy sites where most content is static.

---

### MSW
**Full form:** Mock Service Worker

A browser API mocking library that intercepts HTTP requests at the Service Worker level and returns mocked responses. Unlike mocking `fetch` or `axios` directly in test code, MSW works at the network level, making tests more realistic.

In the documents: Recommended for integration testing of React components that make API calls. MSW is set up once with mock handlers for all API endpoints, and components are tested against realistic mock responses. Playwright E2E tests can also use MSW for mocking external APIs.

---

### MQTT
**Full form:** Message Queuing Telemetry Transport

A lightweight messaging protocol designed for IoT devices. MQTT uses a publish-subscribe model — devices "publish" sensor readings to "topics", and subscribers (like AWS IoT Core) receive those messages.

In the documents: Kärcher's connected cleaning machines likely communicate via MQTT to AWS IoT Core. The Frontend Architect does not implement MQTT directly but must design the frontend data layer to consume the data that flows from MQTT through the backend to the API.

---

### MUI
**Full form:** Material UI

A comprehensive React component library implementing Google's Material Design specification. MUI provides pre-built, accessible components like buttons, inputs, dialogs, tables, and data grids.

In the documents: Used at CoCreate AI (as "MUI" in their tech stack) and referenced in the component library section. The `sx` prop, theme system, and component overrides are key MUI concepts for customization.

---

## N

### NET
**Full form:** .NET (Microsoft's development platform)

Microsoft's open-source development platform for building applications. C# is the primary language for .NET applications. In the documents, C# and .NET backend knowledge is listed as a "nice to have" for the B2B Energy Storage Specialist role.

---

### NGO / NGOs
**Full form:** Non-Governmental Organization / Non-Governmental Organizations

Independent organizations not part of any government. In the documents: PwC Germany's Public Sector & Energy team advises NGOs (alongside Bund, Länder, municipalities, and universities) on digital transformation.

---

### NVDA
**Full form:** NonVisual Desktop Access

A free, open-source screen reader for Windows. NVDA reads the content of the screen aloud to visually impaired users. It is widely used for accessibility testing.

In the documents: Listed as the recommended screen reader for accessibility testing on Windows (paired with Firefox). The Frontend Architect should test keyboard navigation and screen reader behavior with at least one screen reader. On macOS, VoiceOver (built-in) with Safari is the equivalent.

---

### NX
**Full form:** Nx (formerly "Nrwl Extensions")

A build system and monorepo management tool for JavaScript/TypeScript projects. NX provides workspace structure, project dependency graph visualization, affected command running (only rebuild what changed), caching, and code generators.

In the documents: STACKIT (Schwarz Digits) uses NX for their monorepo. NX is the advanced alternative to Turborepo for complex monorepos with many interconnected packages.

---

## O

### OIDC
**Full form:** OpenID Connect

An authentication protocol built on top of OAuth 2.0. While OAuth 2.0 handles authorization (what you can access), OIDC adds authentication (who you are) by providing an ID token in addition to the access token.

In the documents: Used in the authentication flow context. Kärcher's customer login would use OIDC — the user authenticates with an identity provider (possibly Kärcher's own IdP or a service like Auth0), receives an ID token and access token, and the frontend uses the access token to make authenticated requests to commercetools.

---

## P

### PDP
**Full form:** Product Detail Page

The page that shows detailed information about a single product — images, description, price, specifications, variants (if applicable), and the add-to-cart button. The PDP is the most important conversion page on an e-commerce site.

In the documents: PDP architecture for kaercher.com is discussed in detail: ISR rendering, product schema markup, real-time stock status, variant selection, image gallery, and the add-to-cart interaction with optimistic UI.

---

### PET
**Full form:** Public & Energy Transformation (PwC business unit)

PwC Germany's team focused on digital transformation for public sector organizations and energy companies. The "PET AI Tech-Hub" mentioned in the PwC job description is this unit's AI-focused center.

---

### PHP
**Full form:** PHP: Hypertext Preprocessor (recursive acronym)

A server-side scripting language primarily used for web development. PHP powers WordPress, Drupal, and many other content management systems. It is the "P" in the LAMP stack.

In the documents: PHP is required for the loadbee role (LAMP stack, Twig templating). It is not required for the Kärcher Frontend Architect role.

---

### PIM
**Full form:** Product Information Management

A system that provides a central place to collect, manage, and enrich product information (descriptions, specifications, images, attributes) before distributing it to sales channels. PIM is the authoritative source for product data.

In the documents: Kärcher manages thousands of products across 60+ countries. A PIM ensures consistent product data across all markets and feeds into commercetools, which the frontend queries. Rich text HTML in product descriptions comes from the PIM and must be sanitized before rendering.

---

### PLP
**Full form:** Product Listing Page

A page that displays a grid or list of multiple products, typically for a category, search results, or a filtered collection. On kaercher.com, the "High-Pressure Cleaners" category page is a PLP.

In the documents: PLP architecture includes ISR for the base page, SSR for filtered pages, faceted filtering with URL parameters, pagination vs infinite scroll considerations, and structured data for the product grid.

---

### POUR
**Full form:** Perceivable, Operable, Understandable, Robust

The four foundational principles of the Web Content Accessibility Guidelines (WCAG). Every WCAG success criterion is organized under one of these four principles.

- **Perceivable:** Information must be presentable to users in ways they can perceive (alt text for images, captions for video, sufficient color contrast).
- **Operable:** User interface components and navigation must be operable (keyboard accessible, no seizure-inducing content, sufficient time to interact).
- **Understandable:** Information and UI operation must be understandable (readable text, predictable behavior, error identification).
- **Robust:** Content must be robust enough to be interpreted by a wide variety of user agents and assistive technologies.

---

### PRAMAC
**Full form:** Pramac (not technically an abbreviation)

A company that is part of a global energy technology group, building Battery Energy Storage Systems (BESS). One of the 14 companies whose job descriptions were analyzed. Their frontend role involves React, TypeScript, GraphQL, Storybook, and Capacitor (for iOS/Android deployment).

---

### PR / PRs
**Full form:** Pull Request / Pull Requests

A mechanism in Git-based version control where a developer proposes changes from a branch to be merged into the main codebase. PRs enable code review before changes are integrated.

In the documents: PRs are central to code quality in team environments. A good PR includes a clear description of the change, links to the relevant ticket, screenshots for UI changes, and passes all CI checks before requesting review. The Frontend Architect reviews PRs for architecture concerns, not just functional correctness.

---

## Q

### QS
**Full form:** Quality Score (Google Ads)

Google's rating of the quality and relevance of your paid search ads and landing pages. QS affects both ad position and cost per click. Factors include landing page experience (speed, mobile-friendliness, content relevance), expected click-through rate, and ad relevance.

In the documents: Improving kaercher.com landing page LCP and reducing bounce rate on paid search landing pages improves QS, which reduces CPC and makes the paid search budget more efficient.

---

## R

### README
**Full form:** Read Me

A text file (typically in Markdown) placed in the root of a software project that provides an introduction to the project, setup instructions, usage examples, and contribution guidelines. The name comes from the convention of writing "Read Me" on important documents.

In the documents: "Document the architecture in a README" is listed as a requirement for the portfolio project in the 12-week preparation plan. A good README demonstrates the ability to communicate technical context clearly.

---

### REST
**Full form:** Representational State Transfer

An architectural style for designing networked applications. RESTful APIs use HTTP methods (GET, POST, PUT, PATCH, DELETE) to perform operations on resources identified by URLs. REST is the most common API style for web services.

In the documents: REST APIs are used throughout the Kärcher tech stack — commercetools has both a REST and GraphQL API, SAP exposes REST APIs, and IoT commands are sent via REST POST requests. Understanding REST conventions (HTTP methods, status codes, authentication headers) is a P1 skill.

---

### RFID
**Full form:** Radio-Frequency Identification

A technology that uses radio waves to automatically identify and track tags attached to objects. RFID readers emit signals that power passive tags, which respond with their stored data.

In the documents: Listed in the logistics domain section as an input mechanism for warehouse management interfaces — RFID readers scanning items are a common input method in logistics software.

---

### RPM
**Full form:** Revolutions Per Minute (not a primary abbreviation in the documents)

More relevant in context: **RRP** (Recommended Retail Price) — see below.

---

### RRP
**Full form:** Recommended Retail Price

The price that a manufacturer suggests retailers charge for a product. On e-commerce sites, the RRP is often displayed alongside the actual selling price to show savings.

In the documents: Listed as a component of the Product Detail Page — displaying the current price alongside the RRP (crossed out) with a discount badge communicates value to the customer.

---

### RTK
**Full form:** Redux Toolkit

The official, opinionated toolkit for Redux state management in React applications. RTK simplifies Redux with utilities like `createSlice` (combines actions and reducers), `createAsyncThunk` (handles async state), and RTK Query (data fetching and caching).

In the documents: RTK is listed as the recommended approach for large applications with complex async state management. Key concepts: slices, `createAsyncThunk`, RTK Query (which competes with TanStack Query), DevTools integration, and Immer (used internally to allow "mutating" state in reducers).

---

### RTL
**Full form:** Right-to-Left (text direction)

The writing direction used by Arabic, Hebrew, Persian, and Urdu languages — text flows from right to left. RTL layouts require mirroring UI elements: navigation items, icons, text alignment, margins, and padding.

In the documents: RTL readiness is mentioned as part of i18n architecture. While none of Kärcher's current top 5 traffic markets uses RTL, being RTL-ready from the start is much easier than retrofitting later. CSS logical properties (`margin-inline-start` instead of `margin-left`) and `dir="rtl"` on the HTML element are the implementation approach.

Also used in the documents as: **RTL (React Testing Library)** — a testing utility library for React that provides utilities for testing React components in a way that resembles how users interact with the application.

---

## S

### SAP
**Full form:** Systems, Applications & Products in Data Processing (German: Systeme, Anwendungen und Produkte in der Datenverarbeitung)

SAP SE is the world's leading enterprise software company, headquartered in Walldorf, Germany. SAP ERP is the most widely deployed enterprise resource planning system globally.

In the documents: Kärcher uses SAP ERP for inventory management, order processing, financial accounting, and logistics. Product availability on kaercher.com ultimately comes from SAP data.

---

### SCSS / Sass
**Full form:** Sassy CSS / Syntactically Awesome Style Sheets

A CSS preprocessor that extends CSS with variables, nesting, mixins, functions, and inheritance. Sass files compile to standard CSS. SCSS is the syntax variant that resembles regular CSS (using braces and semicolons), while the original Sass syntax uses indentation.

In the documents: SCSS is a required skill. Key concepts include variables (`$color-primary: #FDD500`), nesting for component-scoped styles, mixins for reusable style patterns, and `@extend` for style inheritance. Excessive nesting is an anti-pattern to avoid.

---

### SDK
**Full form:** Software Development Kit

A collection of software development tools, libraries, documentation, and sample code that allows developers to integrate with a specific platform or service. The Facebook Pixel SDK, Worldpay SDK, and nunami.ai SDK are all examples.

In the documents: The nunami.ai SDK is loaded on kaercher.com to track user behavior. The Worldpay SDK is used at checkout for payment form integration. SDKs must be loaded conditionally based on GDPR consent.

---

### SDL
**Full form:** Schema Definition Language

The syntax used to define GraphQL schemas. SDL describes the types, queries, mutations, subscriptions, and relationships in a GraphQL API.

In the documents: SDL knowledge is required for GraphQL work with commercetools. You must be able to read a schema definition, understand type relationships, and use types to write valid queries.

---

### SE
**Full form:** Societas Europaea (Latin)

A public company registered under European Union company law, allowing a company to operate as a single entity across EU member states rather than as separate national companies. The "SE" in "Alfred Kärcher SE & Co. KG."

---

### SEO
**Full form:** Search Engine Optimization

The practice of improving a website's visibility in organic (non-paid) search engine results. SEO encompasses technical optimization (page speed, crawlability, structured data), content optimization (keyword relevance, quality), and authority building (backlinks).

In the documents: SEO is arguably the most important business concern for the Frontend Architect at Kärcher, because organic search delivers 50.4% of traffic. Technical SEO decisions — rendering strategy, structured data, hreflang, canonical URLs, Core Web Vitals — all sit in the frontend layer.

---

### SKU / SKUs
**Full form:** Stock Keeping Unit / Stock Keeping Units

A unique identifier for a product variant in inventory management. A Kärcher pressure washer might have multiple SKUs for different power ratings, colors, or regional variations. commercetools calls these "variants."

In the documents: Kärcher manages 10,000+ SKUs across 60+ countries. The product catalog architecture must efficiently handle this volume — ISR for individual product pages, sitemap generation covering all SKU URLs, and variant selectors in the UI.

---

### SPA / SPAs
**Full form:** Single Page Application / Single Page Applications

A web application architecture where the entire application loads once (a single HTML page) and subsequent interactions update the page dynamically using JavaScript, without full page reloads. React, Angular, and Vue are commonly used to build SPAs.

In the documents: SPA is one of the application architecture patterns discussed. SPAs excel for complex interactive applications but have challenges with SEO (initial HTML has no content) and initial load performance (must download JavaScript before rendering). Next.js and Nuxt.js add SSR/SSG capabilities to React/Vue SPAs.

---

### SSE
**Full form:** Server-Sent Events

A web technology that allows a server to push real-time updates to a browser over a persistent HTTP connection. SSE is one-directional (server to client only) and simpler than WebSockets.

In the documents: Listed as an alternative to WebSockets for IoT dashboard updates. SSE is appropriate when the client only needs to receive data (device telemetry) but not send data back. WebSockets are needed when bidirectional communication is required (sending control commands to devices).

---

### SSG
**Full form:** Static Site Generation

A rendering approach where HTML pages are generated at build time, before any user request. The pre-built HTML is then served from a CDN. SSG produces the fastest possible page loads but is only suitable for content that does not need to be personalized or updated frequently.

In the documents: SSG is recommended for marketing pages and documentation on kaercher.com, where content changes infrequently. Product pages use ISR (a form of SSG with periodic regeneration) rather than pure SSG because prices and stock levels change.

---

### SSR
**Full form:** Server-Side Rendering

A rendering approach where HTML pages are generated on-demand on the server for each request. The server fetches data, renders the full HTML, and sends it to the browser. SSR provides SEO benefits (Google gets complete HTML) and enables personalization but adds server load and latency compared to SSG.

In the documents: SSR is recommended for pages that require real-time personalization or data that changes too frequently for ISR (e.g., search results, personalized recommendations). The commercetools GraphQL API must be queried server-side for SSR pages.

---

### STACKIT
**Full form:** STACKIT (brand name, not an abbreviation)

The IT and digital platform of the Schwarz Group (Lidl and Kaufland's parent company), offering cloud infrastructure, cybersecurity, data & AI, and workspace solutions. One of the companies in the Frontend Architect job description analysis. Their specific role (Senior Full-Stack Developer) uses Angular, Go for BFF, Docker, Kubernetes, and NX.

---

### STAR
**Full form:** Situation, Task, Action, Result

A structured method for answering behavioral interview questions. You describe the Situation (context), the Task (what you needed to accomplish), the Action you took, and the Result.

In the documents: STAR is the recommended framework for preparing behavioral interview answers for the Kärcher Frontend Architect interview. Questions like "Tell me about a time you made a significant architectural decision" should be answered with STAR structure.

---

### SVG
**Full form:** Scalable Vector Graphics

An XML-based image format for two-dimensional graphics. SVG images are defined mathematically (as shapes, paths, and coordinates) rather than as pixels, so they scale perfectly to any size without quality loss.

In the documents:
- SVG icons in a component library (icon components that export SVG elements)
- SVG for warehouse floor plan visualization in logistics interfaces
- Storybook's `svg` format for exported image files

---

### SWR
**Full form:** Stale-While-Revalidate

A React data fetching library by Vercel. SWR takes its name from the HTTP cache-control strategy: serve stale (cached) data immediately while revalidating in the background. Simpler than TanStack Query but with less feature breadth.

In the documents: Listed as a server-state management option, particularly popular in Next.js applications (both are by Vercel). SWR is a lighter alternative to TanStack Query for simple data fetching scenarios.

---

## T

### TTFB
**Full form:** Time to First Byte

The time from when a browser sends a request to when it receives the first byte of the server's response. TTFB measures server response speed and network latency. A good TTFB is under 600ms.

In the documents: TTFB is mentioned in the context of SSR vs SSG/ISR. SSR pages have higher TTFB (server must process every request) than SSG/ISR pages (served from CDN with near-zero TTFB). Direct traffic visitors expect fast TTFB because brand-familiar users have high expectations.

---

### TRY
**Full form:** Turkish Lira (ISO 4217 currency code)

The currency of Turkey. In the documents, Turkey is identified as a rapidly growing market (+43.91% YoY traffic growth). High inflation in Turkey means price display UX must handle large nominal numbers (1 EUR ≈ 35+ TRY) without truncation or overflow. `Intl.NumberFormat` with `currency: 'TRY'` handles formatting correctly.

---

## U

### UI / UIs
**Full form:** User Interface / User Interfaces

The visual and interactive elements of a software application that a user sees and interacts with — buttons, forms, navigation menus, modals, text, images. UI is distinct from UX (the overall experience and feeling).

In the documents: UI appears throughout. The Frontend Architect is responsible for the architecture of the UI layer — component structure, design system, state management, rendering strategy.

---

### UK
**Full form:** United Kingdom

The country comprising England, Scotland, Wales, and Northern Ireland. In the documents, the UK is Kärcher's third-largest traffic market (10.23% share, +16.29% YoY growth). The UK uses GBP (pounds) and period as decimal separator. Post-Brexit, UK-specific pricing, VAT handling, and shipping rules apply.

---

### URL / URLs
**Full form:** Uniform Resource Locator / Uniform Resource Locators

A web address that specifies the location of a resource on the internet. A URL consists of protocol (https://), domain (kaercher.com), path (/de/home-garden/hochdruckreiniger), and optional query parameters (?sort=price&filter=category:professional).

In the documents: URL architecture is a SEO and UX concern. Kärcher's URLs should be human-readable, locale-aware, consistent, and canonical. Query parameters for filtering and sorting should be handled carefully to avoid creating thousands of indexable duplicate URLs.

---

### URQL
**Full form:** Universal React Query Library

A lightweight, flexible GraphQL client for React. URQL is simpler and has a smaller bundle size than Apollo Client but offers less built-in functionality (no normalized caching by default, fewer DevTools).

In the documents: URQL is contrasted with Apollo Client as an alternative GraphQL client. Apollo was recommended for Kärcher because its normalized InMemoryCache provides better efficiency for large product catalogs where the same product might appear in multiple queries.

---

### USA
**Full form:** United States of America

Appears in the documents in the context of competitor headquarters (SharkNinja: Needham MA, BISSELL: Grand Rapids MI, iRobot: Bedford MA) and in discussion of Kärcher's business operations (New York business operations for Bluefish, as a market for Kärcher products).

---

### UTM
**Full form:** Urchin Tracking Module

URL parameters added to links to track the source, medium, and campaign of incoming traffic in analytics tools. Named after "Urchin" — the analytics software Google acquired and turned into Google Analytics.

Common UTM parameters:
- `utm_source`: Where the traffic came from (google, newsletter, sovendus)
- `utm_medium`: Marketing channel (cpc, email, affiliate)
- `utm_campaign`: The specific campaign name

In the documents: UTM tracking must be correctly captured and passed through the frontend to analytics (Adobe Analytics for Kärcher). The Frontend Architect ensures UTM parameters are not stripped by client-side routing transitions.

---

### UX
**Full form:** User Experience

The overall experience a user has while interacting with a product or service — including how easy it is to use, how it makes them feel, and how efficiently they can accomplish their goals. UX encompasses research, information architecture, interaction design, and usability testing. It is distinct from UI (the visual interface itself).

In the documents: UX collaboration is a P2 skill for the Kärcher role. The Frontend Architect translates UX designer wireframes and prototypes into production code, contributes UI pattern suggestions based on technical feasibility, and partners with UX designers on design system decisions.

---

## W

### WCAG
**Full form:** Web Content Accessibility Guidelines

The international standard for web accessibility, published by the W3C (World Wide Web Consortium). WCAG defines success criteria for making web content accessible to people with disabilities, organized by the POUR principles (Perceivable, Operable, Understandable, Robust) and conformance levels (A, AA, AAA).

In the documents: WCAG 2.1 AA is the target conformance level. WCAG 2.2 was published in 2023 with additional success criteria. Key requirements include color contrast ratios, keyboard accessibility, error identification in forms, and sufficient time for timed interactions.

---

### WebP
**Full form:** Web Picture (format)

A modern image format developed by Google that provides superior lossless and lossy compression for images on the web. WebP files are 25-35% smaller than comparable JPEG files at the same quality.

In the documents: Recommended as the primary image format for kaercher.com, with AVIF preferred where supported and JPEG as fallback. Next.js Image component handles format selection automatically based on the Accept header in the browser request.

---

### WIP
**Full form:** Work in Progress

In Kanban methodology, WIP refers to the number of tasks actively being worked on at a given time. WIP limits restrict how many items can be in the "In Progress" column simultaneously, preventing bottlenecks and ensuring tasks are completed before new ones are started.

In the documents: WIP limits are mentioned in the Kanban section of the agile practices chapter.

---

## X

### XML
**Full form:** Extensible Markup Language

A markup language that defines rules for encoding documents in a format readable by both humans and machines. XML is more structured and verbose than JSON and is used in many older systems.

In the documents:
- **XML sitemaps:** The standard format for submitting page inventories to search engines (`sitemap.xml`)
- **hreflang in XML:** hreflang declarations can appear in XML sitemaps for multi-language sites
- loadbee works with XML as one of the data formats for product information syndication

---

### XSS
**Full form:** Cross-Site Scripting

A web security vulnerability where attackers inject malicious scripts into pages viewed by other users. If a website displays user-generated content without proper sanitization, an attacker can insert JavaScript that runs in other users' browsers, potentially stealing session tokens, redirecting to phishing sites, or capturing keystrokes.

In the documents: React prevents most XSS by escaping JSX by default — `<p>{userInput}</p>` is safe because React escapes HTML characters. The risk arises with `dangerouslySetInnerHTML`, which renders raw HTML. Kärcher product descriptions likely come as HTML from the PIM and must be sanitized with DOMPurify before rendering.

---

## Y

### YAML
**Full form:** YAML Ain't Markup Language (recursive acronym)

A human-readable data serialization format commonly used for configuration files. YAML uses indentation and line breaks to define structure, making it more readable than XML and more suitable for configuration than JSON.

In the documents: CI/CD pipeline configuration files use YAML — GitHub Actions workflow files (`.yml`), Azure DevOps pipeline files, Docker Compose files, and Kubernetes deployment manifests are all YAML.

---

### YoY
**Full form:** Year over Year

A comparison metric that measures how a value has changed compared to the same period in the previous year. Used to identify trends while accounting for seasonality.

In the documents: Used throughout the Kärcher traffic analysis. "France traffic +50.51% YoY" means France traffic in the Feb-Apr 2026 period is 50.51% higher than France traffic in the Feb-Apr 2025 period.

---

## Z

### Zenkaku
**Full form:** 全角 (Japanese: Full Width)

Japanese term for full-width characters — alphanumeric and ASCII characters displayed at the same width as CJK (Chinese, Japanese, Korean) characters. Full-width "Ａ" vs half-width "A". In web development, `font-variant-numeric`, CSS `width` calculations, and character encoding must account for full-width characters in Japanese text.

In the documents: Mentioned in the Japanese internationalization section. Kaercher.com's Japanese locale must correctly handle both full-width and half-width character input in search and form fields.

---

## Quick Reference Table

| Abbreviation | Full Form |
|---|---|
| AA | Accessibility Level AA (WCAG conformance) |
| ADR | Architecture Decision Record |
| AI | Artificial Intelligence |
| AIO | AI Overview (Google Search) |
| API | Application Programming Interface |
| ARIA | Accessible Rich Internet Applications |
| AST | Abstract Syntax Tree |
| AVIF | AV1 Image File Format |
| AWS | Amazon Web Services |
| BFF | Backend for Frontend |
| CD | Continuous Delivery / Continuous Deployment |
| CDN | Content Delivery Network |
| CEO | Chief Executive Officer |
| CFO | Chief Financial Officer |
| CI | Continuous Integration |
| CLI | Command-Line Interface |
| CLS | Cumulative Layout Shift |
| CMS | Content Management System |
| CPC | Cost Per Click |
| CORS | Cross-Origin Resource Sharing |
| CSP | Content Security Policy |
| CSRF | Cross-Site Request Forgery |
| CSR | Client-Side Rendering |
| CSS | Cascading Style Sheets |
| CTA | Call to Action |
| CVV | Card Verification Value |
| DA | Domain Authority |
| DOM | Document Object Model |
| E2E | End-to-End (Testing) |
| EMS | Energy Management System |
| ERP | Enterprise Resource Planning |
| EU | European Union |
| EUR | Euro |
| FaaS | Function as a Service |
| FEaaS | Frontend as a Service |
| FID | First Input Delay (retired Core Web Vital) |
| FIS | Fidelity National Information Services |
| FOUT | Flash of Unstyled Text |
| GBP | Great British Pound |
| GCP | Google Cloud Platform |
| GDPR | General Data Protection Regulation |
| GPS | Global Positioning System |
| HOC | Higher-Order Component |
| HSTS | HTTP Strict Transport Security |
| HTML | HyperText Markup Language |
| HTTP | HyperText Transfer Protocol |
| HTTPS | HyperText Transfer Protocol Secure |
| i18n | Internationalization |
| ICT | Information and Communications Technology |
| IG Metall | Interessengemeinschaft Metall (German metalworkers union) |
| INP | Interaction to Next Paint |
| IoT | Internet of Things |
| ISR | Incremental Static Regeneration |
| JAZ | Jahresarbeitszeitkonto (Annual Working Hours Account) |
| JD | Job Description |
| JIT | Just-In-Time (compilation, Tailwind CSS) |
| JPEG | Joint Photographic Experts Group |
| JPY | Japanese Yen |
| JS | JavaScript |
| JSON | JavaScript Object Notation |
| JSON-LD | JSON Linked Data |
| JSX | JavaScript XML |
| JWT | JSON Web Token |
| KB | Kilobyte |
| KG | Kommanditgesellschaft (German limited partnership) |
| KPI | Key Performance Indicator |
| l10n | Localization |
| LAMP | Linux, Apache, MySQL, PHP |
| LCP | Largest Contentful Paint |
| LLM | Large Language Model |
| MACH | Microservices, API-first, Cloud-native, Headless |
| MDN | Mozilla Developer Network |
| MDX | Markdown + JSX |
| ML | Machine Learning |
| MPA | Multi-Page Application |
| MQTT | Message Queuing Telemetry Transport |
| MSW | Mock Service Worker |
| MUI | Material UI |
| NGO | Non-Governmental Organization |
| NVDA | NonVisual Desktop Access |
| NX | Nx (monorepo build tool) |
| OIDC | OpenID Connect |
| PDP | Product Detail Page |
| PHP | PHP: Hypertext Preprocessor |
| PIM | Product Information Management |
| PLP | Product Listing Page |
| POUR | Perceivable, Operable, Understandable, Robust |
| PR | Pull Request |
| REST | Representational State Transfer |
| RFID | Radio-Frequency Identification |
| RPM | Revolutions Per Minute |
| RRP | Recommended Retail Price |
| RTK | Redux Toolkit |
| RTL | Right-to-Left (text) or React Testing Library |
| SAP | Systems, Applications & Products in Data Processing |
| SCSS | Sassy CSS |
| SDK | Software Development Kit |
| SDL | Schema Definition Language |
| SE | Societas Europaea |
| SEO | Search Engine Optimization |
| SKU | Stock Keeping Unit |
| SPA | Single Page Application |
| SSE | Server-Sent Events |
| SSG | Static Site Generation |
| SSR | Server-Side Rendering |
| STAR | Situation, Task, Action, Result |
| SVG | Scalable Vector Graphics |
| SWR | Stale-While-Revalidate |
| TTFB | Time to First Byte |
| TRY | Turkish Lira |
| UI | User Interface |
| UK | United Kingdom |
| URL | Uniform Resource Locator |
| URQL | Universal React Query Library |
| USA | United States of America |
| UTM | Urchin Tracking Module |
| UX | User Experience |
| WCAG | Web Content Accessibility Guidelines |
| WebP | Web Picture (format) |
| WIP | Work in Progress |
| XML | Extensible Markup Language |
| XSS | Cross-Site Scripting |
| YAML | YAML Ain't Markup Language |
| YoY | Year over Year |

---

*Abbreviations reference compiled from all Frontend Architect and Kärcher interview preparation documents. May 2026.*