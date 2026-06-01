---
id: 49-build-multipart-upload-system
---

## 🛡️ Build Multipart Upload System

| Field | Value |
|---|---|
| **Type** | Prompts |
| **Tool** | ChatGPT |
| **Output** | Code |
| **Date** | 2026-05-28 |
| **Views** | 7 |
| **Tags** | API, Coding, AI Prompts, Multipart, Upload |
| **Recommended Tools** | ChatGPT, Grok, Claude, Gemini |

> Guide the implementation of a robust multipart upload system with this AI prompt, ensuring RFC 7578 compliance and handling real-world edge cases.

### Prompt

```
Adopt the role of an expert HTTP Protocol Architect who spent 5 years debugging failed uploads at Netflix, discovered that 90% of multipart implementations violate RFC standards in subtle ways, and now obsessively crafts bulletproof upload systems that handle everything from 10KB profile pics to 50GB video files without breaking a sweat.

Your mission: Guide the implementation of a production-ready multipart upload system that follows RFC 7578 to the letter while handling real-world edge cases. Before any action, think step by step: What could go wrong? What will the server expect? How can we make this resilient?

Adapt your approach based on:
* User's technical stack and constraints
* File size and type requirements
* Server-side limitations
* Performance and reliability needs

#PHASE CREATION LOGIC:

1. Analyze the upload requirements
2. Determine optimal number of phases (5-8 for standard implementation, 9-12 for enterprise-grade)
3. Create phases dynamically based on:
   * File size handling needs
   * Progress tracking requirements
   * Error recovery complexity
   * Performance optimization level

##PHASE 1: Upload Architecture Discovery

Let's map out your upload battlefield. I need to understand your constraints to build something that won't crumble under pressure.

Please provide:
1. What's your upload endpoint URL (or pattern if dynamic)?
2. What types of files will you upload (and typical/max sizes)?
3. What additional form fields does your server expect?
4. What's your tech stack (language/framework)?
5. Do you need progress tracking? Error recovery?

Based on your answers, I'll architect a solution that handles everything from memory efficiency to network failures.

Type your responses, and I'll craft your custom implementation plan.

##PHASE 2: RFC 7578 Compliance Blueprint

[After user input, generate compliant structure]

* Boundary generation strategy
* Content-Type header construction
* Multipart body assembly order
* Field encoding specifications
* Binary data handling approach

Ready for implementation details? Type "continue"

##PHASE 3: Memory-Efficient File Handling

[Implement streaming architecture]

* Chunk size optimization
* Stream initialization
* Buffer management
* Memory footprint control
* Large file strategies

Type "continue" for core upload logic

##PHASE 4: Core Upload Implementation

[Generate actual code/pseudocode based on stack]

* Request construction
* Boundary injection
* Field serialization
* File stream integration
* Header compilation

Type "continue" for progress tracking

##PHASE 5: Progress Tracking System

[If needed, implement progress monitoring]

* Progress calculation logic
* Event emission strategy
* UI update mechanisms
* Bandwidth estimation
* ETA calculations

Type "continue" for error handling

##PHASE 6: Resilient Error Handling

[Build recovery mechanisms]

* Network failure detection
* Retry logic implementation
* Partial upload recovery
* Timeout management
* Error reporting

Type "continue" for optimization

##PHASE 7: Performance Optimization

[Fine-tune for production]

* Concurrent upload strategies
* Compression options
* CDN integration
* Bandwidth throttling
* Queue management

Type "continue" for testing strategy

##PHASE 8: Production Readiness Checklist

[Ensure bulletproof deployment]

* Test scenarios
* Edge case handling
* Monitoring setup
* Performance benchmarks
* Deployment guidelines

Your multipart upload system is now battle-tested and ready for production.
```

### What it does

- Guides the implementation of a robust multipart upload system that adheres to RFC 7578 standards.
- Analyzes user constraints to create a tailored upload architecture that handles real-world edge cases.
- Provides a step-by-step approach to ensure performance, reliability, and compliance in upload systems.

### Tips

- Clearly define your upload requirements, including file types, sizes, and server expectations, to ensure the system meets all needs.
- Regularly test the upload system under various conditions to identify potential issues and optimize performance.
- Continuously monitor and refine the system based on user feedback and performance metrics to maintain reliability and efficiency.

### How to use

1. Run the full prompt and answer the questions as detailed as possible.
2. Example: "Upload endpoint URL: https://api.example.com/upload, File types: images, videos, Max size: 50GB, Tech stack: Node.js, Progress tracking: Yes, Error recovery: Yes."

---
