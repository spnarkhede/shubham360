# LLM Basic Notes 

## Introduction to Generative AI and Large Language Models

This comprehensive lecture covers fundamental concepts of Large Language Models (LLMs), their architecture, training methods, tooling frameworks, and practical applications through AI agents. The material explores both theoretical foundations and practical implementations.

---

## 1. Generative Models: Autoregressive vs Non-Autoregressive

### Autoregressive (AR) Models

Autoregressive models generate output **one token at a time**, with each token conditioned on all previously generated tokens. This sequential approach creates a dependency chain where the model predicts the next element based on historical context.[1][2]

**Key Characteristics:**
- **Sequential Generation**: Must wait for each token before generating the next
- **High Quality**: Strong dependency modeling produces coherent, contextually appropriate outputs
- **Slow Speed**: Sequential nature limits parallelization
- **Examples**: GPT-3, GPT-4, and most modern LLMs[3][1]

The mathematical formulation represents the joint probability as a product of conditional probabilities, where each variable depends on all preceding variables.[3]

### Non-Autoregressive (NAR) Models

Non-autoregressive models generate **all tokens simultaneously** in parallel, without conditioning on previous outputs.[1]

**Key Characteristics:**
- **Parallel Generation**: All outputs produced at once
- **High Speed**: Significantly faster inference due to parallelization
- **Lower Quality**: Lack of dependency modeling can reduce coherence
- **Applications**: Real-time translation, low-latency tasks[1]

### Comparison Table

| Feature | AR Model | NAR Model |
|---------|----------|-----------|
| **Parallelism** | Low | High |
| **Speed** | Slow | Fast |
| **Quality** | High | Lower |
| **Use Case** | High-quality text generation | Real-time applications |

### Hybrid Approaches

Modern architectures combine both methods to balance speed and quality:[4][5]

1. **Encoder-Decoder Architecture**: AR model generates intermediate representations, NAR model produces final output
2. **Iterative Refinement**: NAR model generates multiple drafts that are progressively refined
3. **Speculative Decoding**: NAR model rapidly generates candidate tokens, AR model verifies them in parallel

***

## 2. Speculative Decoding: Accelerating LLM Inference

Speculative decoding is an optimization technique that achieves **2-3× speedup** without sacrificing output quality.[6][7][4]

### How It Works

The technique employs two models working in tandem:[5][8][4]

1. **Draft Model**: A smaller, faster model proposes multiple candidate tokens
2. **Target Model**: The larger, high-quality model verifies candidates in parallel

**Process Flow:**
1. Draft model generates K speculative tokens (fast)
2. Target model verifies all tokens simultaneously (parallel verification)
3. Accepted tokens become output; rejected tokens are discarded
4. Target model generates one additional token
5. Process repeats with new context

### Performance Gains

Real-world implementations show impressive results:[7][6]
- **Llama3 8B**: 2× speedup
- **Granite 20B code models**: 3× speedup
- **Guaranteed equivalence**: Output distribution identical to standard decoding

The speedup depends heavily on the **acceptance rate** of draft tokens. If 2 out of 4 draft tokens are accepted on average, the effective time per token can be halved.[8]

### Key Insight

Speculative decoding exploits two observations:[4][6]
1. LLM inference is **memory-bound**, leaving GPU compute underutilized
2. Many tokens are **easy to predict** and can be accurately proposed by smaller models

***

## 3. Scaling Laws: Predicting LLM Performance

### Chinchilla Scaling Laws

The Chinchilla scaling laws provide data-optimal guidelines for training LLMs:[9][10][11]

**Key Formula**: For optimal performance, use approximately **20 tokens per parameter**[10]

**Examples:**
- A 70B parameter model should be trained on ~1.4 trillion tokens
- GPT-3 (175B parameters) was undertrained with only 300B tokens
- To be data-optimal, GPT-3 should have used ~3.5 trillion tokens (11× more data)[10]

### Beyond Chinchilla: Inference Considerations

Recent research shows the original Chinchilla laws don't account for inference costs. When considering deployment with high inference demand:[11][12]

- **Train smaller models longer** than Chinchilla-optimal
- **Inference efficiency** becomes more important than training efficiency
- Models like Llama are deliberately trained beyond Chinchilla point[13][11]

### Important Caveat

Current pre-training data demands **far exceed** scaling law estimates. Models continue improving with massive datasets, and **no saturation point** has been definitively observed—Transformer architectures exhibit excellent data scalability.[14]

***

## 4. Emergent Abilities of Large Language Models

### Definition

Emergent abilities are capabilities that are **absent in smaller models but present in larger models**. These abilities cannot be predicted by extrapolating performance from smaller-scale systems.[15][16]

### Key Emergent Abilities

**In-Context Learning**: The ability to learn from example demonstrations without parameter updates[17][16]

**Instruction Following**: Understanding and executing complex instructions

**Step-by-Step Reasoning**: Chain-of-thought problem-solving[17]

**Specific Examples**:[17]
- Arithmetic reasoning
- Decoding International Phonetic Alphabet
- Unscrambling words
- Understanding spatial relationships and cardinal directions
- Multi-language understanding (e.g., Hinglish offensive content detection)

### The Debate

The emergence phenomenon is contested:[18][19]
- **Proponents**: Truly emergent capabilities arise unpredictably at scale
- **Skeptics**: "Emergence" may result from metric choice, in-context learning, and model memory rather than fundamental phase transitions[19][18]

Recent research suggests emergent abilities might be better explained as combinations of **in-context learning, model memory, and linguistic knowledge** rather than genuinely novel capabilities.[19]

***

## 5. ChatGPT Training Pipeline

ChatGPT represents a sophisticated three-stage training process:

### Stage 1: Pre-Training
**Objective**: Learn language patterns through next-token prediction

- **Method**: Self-supervised learning on massive web-scale corpora
- **Task**: Predict the next word given previous context
- **Result**: Foundation model with broad language understanding

### Stage 2: Instruction Tuning (IT)
**Objective**: Guide model toward helpful, instruction-following behavior

- **Method**: Supervised learning on human-annotated question-answer pairs
- **Data**: Carefully curated examples of desired behaviors
- **Result**: Model aligned with user intent

### Stage 3: Reinforcement Learning from Human Feedback (RLHF)

**Objective**: Optimize outputs based on human preferences[20][21][22][23]

**Process**:[21][24]

1. **Reward Model Training**:
   - Collect human rankings of multiple model outputs
   - Train separate reward model to predict human preferences
   - Reward model scores output quality automatically

2. **RL Optimization**:
   - Use reward model as objective function
   - Apply Proximal Policy Optimization (PPO) algorithm
   - Iteratively improve policy to maximize reward

**Three H's of Alignment**:[22][14]
- **Helpfulness**: Provides useful, relevant information
- **Honesty**: Truthful and accurate responses
- **Harmlessness**: Avoids harmful, biased, or unsafe content

### Alignment

The combination of Instruction Tuning and RLHF is called **alignment**—ensuring AI systems behave in accordance with human values and intentions.[23][14][22]

***

## 6. Diffusion Models for Image Generation

Diffusion models are generative models that create images through a two-stage process.[25][26][27]

### Forward Process (Diffusion)

Gradually adds Gaussian noise to data over T timesteps:[26][27]

- Start with real image x₀
- Add small amounts of noise at each step: x₁, x₂, ..., xT
- After T steps, image becomes pure Gaussian noise
- Process is deterministic and predefined

**Mathematical Property**: Can sample noisy image at **any timestep t** using closed-form equation[27]

### Reverse Process (Denoising)

Neural network learns to reverse the diffusion and remove noise:[28][25][26]

- Start with pure noise xT ~ N(0, I)
- Predict and remove noise step-by-step
- Gradually reconstruct coherent image
- Result: New sample from learned data distribution

**Key Challenge**: Cannot directly compute reverse distribution q(xt-1|xt)[28][29]. Instead, train neural network to **approximate** this distribution by predicting noise patterns.

### Stable Diffusion

Stable Diffusion operates in **latent space** rather than pixel space:[14]
- Encoder compresses images to lower-dimensional latent representations
- Diffusion process occurs in compact latent space (more efficient)
- Decoder reconstructs final image from denoised latent

This architecture dramatically reduces computational requirements while maintaining quality.

***

## 7. LangChain: Framework for LLM Applications

LangChain provides modular components to simplify LLM application development.[30][31][32]

### Core Architecture

LangChain follows a **pipeline approach** with distinct modules:[30]

1. **User Query** → Input processing
2. **Vector Representation** → Semantic search in vector database
3. **Information Retrieval** → Fetch relevant context
4. **LLM Processing** → Generate response with context
5. **Output** → Formatted response to user

### Key Modules

#### 1. Model I/O Module[32][33]

Normalizes interaction with different LLMs through unified interface:

**Components:**
- **LLMs/Chat Models**: Text completion or conversational interfaces
- **Prompt Templates**: Reusable, parameterized prompts
- **Output Parsers**: Structure and format model outputs

**Example**:
```typescript
const template = PromptTemplate.fromTemplate('List 10 {subject}.\n{format_instructions}')
const model = new OpenAI({ temperature: 0 })
const listParser = new CommaSeparatedListOutputParser()

const chain = RunnableSequence.from([template, model, listParser])
const result = await chain.invoke({
  subject: 'countries',
  format_instructions: listParser.getFormatInstructions(),
})
```

#### 2. Retrieval Module[32][30]

Implements Retrieval-Augmented Generation (RAG):

**Components:**
- **Document Loaders**: Ingest data from various sources (CSV, PDF, databases)
- **Text Splitters**: Chunk documents into manageable pieces
- **Embeddings**: Convert text to vector representations
- **Vector Stores**: Efficient semantic search databases
- **Retrievers**: Query and fetch relevant information

#### 3. Chains Module[33]

Link multiple tasks into sequences using LangChain Expression Language (LCEL):

- Compose operations with pipe operator (`|`)
- Each component implements `Runnable` interface
- Automatic handling of data flow between stages

#### 4. Agents Module

Dynamic systems that choose actions based on LLM reasoning:

- Access to **tools** (functions the agent can execute)
- LLM decides which tools to use and when
- Unlike hardcoded chains, agents adapt behavior dynamically

***

## 8. AI Agents: Advanced LLM Applications

AI agents are autonomous systems powered by sophisticated prompting techniques that can interact with environments and use tools.

### Agent Instruction Design

**Best Practices**:[14]

1. **Use Existing Documents**: Convert procedures and policies to LLM-friendly routines
2. **Break Down Tasks**: Smaller, clearer steps reduce ambiguity
3. **Define Clear Actions**: Each step corresponds to specific output
4. **Capture Edge Cases**: Include conditional logic and alternative paths

### Agent Orchestration Patterns

#### Single-Agent Systems

Simple architecture with one agent and multiple tools:

```
Input → Agent (Instructions + Tools + Guardrails) → Output
```

#### Multi-Agent: Manager Pattern

Central manager coordinates specialist agents:[14]

```
User Query → Manager Agent → [Spanish Agent, French Agent, Italian Agent]
                          → Aggregated Results
```

Manager treats specialist agents as **tools**, calling them as needed for specific subtasks.

#### Multi-Agent: Decentralized Pattern

Peer agents with handoff capabilities:[14]

```
User Query → Triage Agent → [Technical Support | Sales | Order Management]
                          → Specialized Response
```

Triage agent **routes** queries to appropriate specialist based on query classification.

### Agent Guardrails

Safety measures to ensure reliable, secure agent behavior:[14]

**Types of Guardrails:**

1. **Relevance Classifier**: Keeps responses on-topic
2. **Safety Classifier**: Detects jailbreak attempts and prompt injection
3. **PII Filter**: Prevents leakage of personal information
4. **Content Moderation**: Blocks harmful or inappropriate content
5. **Tool Safety**: Risk assessment (read-only vs. write, reversibility, financial impact)
6. **Rule-Based Protection**: Blacklists, regex filters, input validation
7. **Output Validation**: Ensures brand alignment and quality

**Human-in-the-Loop**: Trigger human intervention for high-risk operations or when failure thresholds exceeded.[14]

***

## 9. Model Context Protocol (MCP)

MCP is an **open standard** for connecting AI applications with external tools and data sources.[34][35][36][37]

### Architecture

**Three Core Components**:[35][38][34]

1. **MCP Host**: AI application (Claude Desktop, IDE, chatbot) containing the LLM
2. **MCP Client**: Lives inside host, manages connections to servers
3. **MCP Server**: External service exposing capabilities via standardized API

**Communication**: JSON-RPC 2.0 messages over standard transport protocols[36][34]

### Server Primitives[38][35]

MCP servers expose three types of capabilities:

1. **Tools (Model-controlled)**: Functions LLMs can invoke (e.g., weather API, database query)
2. **Resources (Application-controlled)**: Data sources for context (read-only, like GET endpoints)
3. **Prompts (User-controlled)**: Pre-defined templates for optimal tool/resource usage

### Benefits

**Solves M×N Problem**:[37][35]
- **Before**: M applications × N data sources = M×N custom integrations
- **After**: M clients + N servers = M+N implementations

**Ecosystem Growth**: Official servers for Google Drive, Slack, GitHub, Postgres, Puppeteer, and many more[39][37]

### Example MCP Servers

Popular implementations include:
- **Sequential Thinking**: Enhanced reasoning capabilities
- **Context7**: Specialized context management
- **Playwright/Puppeteer**: Browser automation
- **Git/GitHub**: Version control integration
- **Database Connectors**: MySQL, Postgres access
- **Design Tools**: Figma, Notion integration[14]

***

## 10. AI Prompting Techniques for Agents

Effective prompting is crucial for agent performance.[40][41][42]

### Core Techniques

#### 1. Zero-Shot Prompting[41]
Simplest approach—direct question without examples:
```
Explain how recursion works in programming.
```
**Use Case**: Simple queries where context is clear

#### 2. Few-Shot Prompting[42][40][41]
Provide 1-3 examples showing desired format:
```
Summarize in one sentence:
Input: [long paragraph about caffeine study]
Output: Caffeine temporarily improved reaction times for 4-5 hours.

Input: [new paragraph to summarize]
```
**Use Case**: Tasks requiring specific format or style

#### 3. Chain-of-Thought (CoT)[40][42]
Encourage step-by-step reasoning:
```
Analyze the error message and identify possible causes. 
Then, break down debugging steps to fix the issue.
```
**Use Case**: Complex reasoning, debugging, mathematical problems

#### 4. Role-Based Prompting[40]
Assign expert persona:
```
You are a cybersecurity expert. Identify vulnerabilities 
in the given code and suggest fixes.
```
**Use Case**: Domain-specific tasks requiring specialized knowledge

#### 5. ReAct Prompting[42]
**Re**asoning + **Act**ing framework for tool-using agents:
- **Reason**: Think through the problem
- **Act**: Take action using tools
- **Observe**: Process results and iterate

**Use Case**: Multi-step tasks with tool execution and feedback loops

***

## Conclusion

This lecture covered the fundamental concepts powering modern LLM systems:

- **Generative architectures** balancing speed (NAR) and quality (AR)
- **Optimization techniques** like speculative decoding for faster inference
- **Scaling principles** guiding model development and resource allocation
- **Training methodologies** including pre-training, instruction tuning, and RLHF
- **Application frameworks** like LangChain simplifying development
- **Agent systems** enabling autonomous, tool-using AI
- **Standardization efforts** like MCP creating interoperable ecosystems
- **Prompting strategies** maximizing agent capabilities

These concepts form the foundation for building sophisticated, production-ready LLM applications that are both powerful and safe.

**REFERENCES**: 
[1](https://www.geeksforgeeks.org/artificial-intelligence/difference-between-autoregressive-and-non-autoregressive-models/)
[2](https://en.wikipedia.org/wiki/Autoregressive_model)
[3](https://deepgenerativemodels.github.io/notes/autoregressive/)
[4](https://bentoml.com/llm/inference-optimization/speculative-decoding)
[5](https://arxiv.org/html/2401.07851v2)
[6](https://research.google/blog/looking-back-at-speculative-decoding/)
[7](https://pytorch.org/blog/hitchhikers-guide-speculative-decoding/)
[8](https://www.baseten.co/blog/a-quick-introduction-to-speculative-decoding/)
[9](https://www.linkedin.com/pulse/understanding-km-chinchilla-scaling-laws-large-language-hemant-rawat)
[10](https://lifearchitect.ai/chinchilla/)
[11](https://arxiv.org/html/2401.00448v2)
[12](https://arxiv.org/abs/2401.00448)
[13](https://www.educatingsilicon.com/2024/04/29/revised-chinchilla-scaling-laws-impact-on-llm-compute-and-token-requirements/)
[14](https://github.com/sabertazimi)
[15](https://openreview.net/pdf?id=yzkSU5zdwD)
[16](https://research.google/pubs/emergent-abilities-of-large-language-models/)
[17](https://en.wikipedia.org/wiki/Large_language_model)
[18](https://papers.neurips.cc/paper_files/paper/2023/file/adc98a266f45005c403b8311ca7e8bd7-Paper-Conference.pdf)
[19](https://aclanthology.org/2024.acl-long.279/)
[20](https://arxiv.org/abs/2312.14925)
[21](https://huggingface.co/blog/rlhf)
[22](https://www.superannotate.com/blog/rlhf-for-llm)
[23](https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback)
[24](https://aws.amazon.com/what-is/reinforcement-learning-from-human-feedback/)
[25](https://en.wikipedia.org/wiki/Diffusion_model)
[26](https://huggingface.co/blog/Esmail-AGumaan/diffusion-models)
[27](https://lilianweng.github.io/posts/2021-07-11-diffusion-models/)
[28](https://www.superannotate.com/blog/diffusion-models)
[29](https://arxiv.org/html/2312.10393v1)
[30](https://www.geeksforgeeks.org/artificial-intelligence/introduction-to-langchain/)
[31](https://www.datacamp.com/tutorial/how-to-build-llm-applications-with-langchain)
[32](https://nanonets.com/blog/langchain/)
[33](https://www.freecodecamp.org/news/beginners-guide-to-langchain/)
[34](https://stytch.com/blog/model-context-protocol-introduction/)
[35](https://www.philschmid.de/mcp-introduction)
[36](https://cloud.google.com/discover/what-is-model-context-protocol)
[37](https://www.anthropic.com/news/model-context-protocol)
[38](https://opencv.org/blog/model-context-protocol/)
[39](https://github.com/appcypher/awesome-mcp-servers)
[40](https://www.freecodecamp.org/news/how-to-write-effective-prompts-for-ai-agents-using-langbase/)
[41](https://mastra.ai/blog/ai-prompting-techniques)
[42](https://www.reddit.com/r/AI_Agents/comments/1jviqm9/prompt_design_techniques_for_ai_agents/)
[43](https://aws.amazon.com/what-is/autoregressive-models/)
[44](https://arxiv.org/abs/2503.05788)
[45](https://www.reddit.com/r/deeplearning/comments/18kmezx/autoregressive_vs_nonautoregressive_decoding_when/)
[46](https://arxiv.org/abs/2402.01528)
[47](https://www.sciencedirect.com/science/article/pii/S2405896321022965)
[48](https://www.ibm.com/think/topics/autoregressive-model)
[49](https://docs.vllm.ai/en/v0.9.0/features/spec_decode.html)
[50](https://python.langchain.com/docs/tutorials/)
[51](https://aws.amazon.com/de/what-is/reinforcement-learning-from-human-feedback/)
[52](https://rnikhil.com/2023/11/28/llm-scaling)
[53](https://www.youtube.com/watch?v=nAmC7SoVLd8)
[54](https://www.ibm.com/de-de/think/topics/rlhf)
[55](https://www.reddit.com/r/LocalLLaMA/comments/1gm96gd/something_doesnt_add_up_with_chinchilla_scaling/)
[56](https://cloud.google.com/discover/what-is-prompt-engineering)
[57](https://www.augmentcode.com/blog/how-to-build-your-agent-11-prompting-techniques-for-better-ai-agents)
[58](https://theaisummer.com/diffusion-models/)
[59](https://www.promptingguide.ai/techniques)
[60](https://erdem.pl/2023/11/step-by-step-visual-introduction-to-diffusion-models/)
[61](https://modelcontextprotocol.io)