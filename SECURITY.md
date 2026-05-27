# Security Policy

## 🔒 Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| Latest (main branch) | ✅ |
| Older versions | ❌ |

## 🐛 Reporting a Vulnerability

I take security seriously. If you discover a security vulnerability, please follow these steps:

### ✅ Do:
1. **Email me privately** through the [contact form](https://shubhamnarkhede.com/contact) with subject "Security Vulnerability Report"
2. Include detailed steps to reproduce the vulnerability
3. Provide any proof-of-concept code (if applicable)
4. Allow reasonable time for a fix before public disclosure

### ❌ Don't:
- Open a public GitHub issue for security vulnerabilities
- Exploit the vulnerability beyond proof-of-concept
- Publicly disclose the vulnerability before it's patched

## 🔍 Scope

This portfolio website includes:
- Static site generation (Docusaurus)
- Client-side JavaScript/React code
- Third-party integrations (EmailJS, Google Analytics)
- Content Security Policy implementation

### In Scope:
- Cross-Site Scripting (XSS)
- Cross-Site Request Forgery (CSRF)
- Security misconfiguration
- Sensitive data exposure
- Broken authentication/authorization
- Content injection

### Out of Scope:
- Social engineering attacks
- Physical attacks
- DDoS attacks
- Issues in third-party services (EmailJS, GitHub Pages)

## 🛡️ Security Measures

This project implements:

- **Content Security Policy (CSP)** — Prevents XSS attacks
- **X-Frame-Options** — Prevents clickjacking
- **X-Content-Type-Options** — Prevents MIME sniffing
- **Referrer-Policy** — Privacy protection
- **Permissions-Policy** — Browser feature restrictions
- **CodeQL Security Analysis** — Automated code scanning
- **Dependency Audits** — Regular npm audit checks

## 📋 Security Updates

- Security patches are released as soon as possible
- Critical vulnerabilities receive immediate attention
- All security updates are documented in commit messages

## 🙏 Recognition

Responsible disclosure researchers who follow this policy will be:
- Acknowledged in the fix commit (if desired)
- Listed in the security acknowledgments section (optional)

## 📞 Contact

For security concerns: Use the [contact form](https://shubhamnarkhede.com/contact) with "Security" in the subject line.

---

**Last updated:** May 27, 2026
