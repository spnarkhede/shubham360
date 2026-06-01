"""
Parse ReadMeData.md (technology prompt format) and generate .prompt.js entries.

Format in ReadMeData.md:
    technology            <- literal "technology" marker
    [subcategory]         <- ai | cloud | blockchain | iot | cybersecurity | devops | docker | backend | apis
    [date]                <- "Jan XX, YYYY"
    [prompt text]         <- long text, ends with "Show less"
    (blank lines)
    ⭐ N                  <- star rating used as views
    (blank lines)
"""
from __future__ import annotations

import json
import re
import unicodedata
from pathlib import Path
from datetime import datetime

ROOT        = Path(__file__).resolve().parents[1]
README_PATH = ROOT / 'scripts' / 'ReadMeData.md'
ENTRIES_DIR = ROOT / 'src' / 'pages' / 'prompt-vault' / 'prompt-vault-data' / 'entries'

# ── Mappings ────────────────────────────────────────────────────────────────

SUBCATEGORY_EMOJI = {
    'ai':           '🤖',
    'cloud':        '☁️',
    'blockchain':   '⛓️',
    'iot':          '📡',
    'cybersecurity':'🔐',
    'devops':       '⚙️',
    'docker':       '🐳',
    'backend':      '🖥️',
    'apis':         '🔌',
}

SUBCATEGORY_TOOL = {
    'ai':           'ChatGPT',
    'cloud':        'ChatGPT',
    'blockchain':   'ChatGPT',
    'iot':          'ChatGPT',
    'cybersecurity':'Claude',
    'devops':       'Claude',
    'docker':       'ChatGPT',
    'backend':      'ChatGPT',
    'apis':         'ChatGPT',
}

SUBCATEGORY_RECOMMENDED = {
    'ai':           ['ChatGPT', 'Claude', 'Gemini'],
    'cloud':        ['ChatGPT', 'Claude', 'DeepSeek'],
    'blockchain':   ['ChatGPT', 'Claude', 'DeepSeek'],
    'iot':          ['ChatGPT', 'Claude', 'DeepSeek'],
    'cybersecurity':['Claude', 'ChatGPT', 'DeepSeek'],
    'devops':       ['Claude', 'ChatGPT', 'DeepSeek'],
    'docker':       ['ChatGPT', 'Claude', 'DeepSeek'],
    'backend':      ['ChatGPT', 'Claude', 'DeepSeek'],
    'apis':         ['ChatGPT', 'Claude', 'DeepSeek'],
}

SUBCATEGORY_BASE_TAGS = {
    'ai':           ['AI', 'Machine Learning', 'Automation', 'Technology'],
    'cloud':        ['Cloud', 'Infrastructure', 'Scalability', 'Technology'],
    'blockchain':   ['Blockchain', 'Web3', 'Security', 'Technology'],
    'iot':          ['IoT', 'Hardware', 'Edge Computing', 'Technology'],
    'cybersecurity':['Security', 'Cybersecurity', 'Compliance', 'Technology'],
    'devops':       ['DevOps', 'CI/CD', 'Automation', 'Technology'],
    'docker':       ['Docker', 'Containers', 'DevOps', 'Technology'],
    'backend':      ['Backend', 'Architecture', 'Scalability', 'Technology'],
    'apis':         ['APIs', 'Integration', 'SaaS', 'Technology'],
}

MONTH_MAP = {
    'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04',
    'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08',
    'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12',
}

KNOWN_SUBCATEGORIES = set(SUBCATEGORY_EMOJI.keys())

# ── Utility ─────────────────────────────────────────────────────────────────

def slugify(text: str) -> str:
    normalized = unicodedata.normalize('NFKD', text)
    ascii_text = normalized.encode('ascii', 'ignore').decode('ascii')
    ascii_text = ascii_text.replace('&', ' and ')
    ascii_text = re.sub(r'[^A-Za-z0-9]+', '-', ascii_text.lower()).strip('-')
    return re.sub(r'-{2,}', '-', ascii_text)


def to_variable_name(title: str) -> str:
    words = re.findall(r'[A-Za-z0-9]+', title)
    if not words:
        return 'technologyPrompt'
    first = words[0].lower()
    rest = ''.join(w[:1].upper() + w[1:] for w in words[1:])
    base = f'{first}{rest}'
    if not re.match(r'^[A-Za-z_$]', base):
        base = f'prompt{base[:1].upper()}{base[1:]}'
    return f'{base}Prompt'


def parse_date(date_str: str) -> str:
    """Convert 'Jan 26, 2026' → '2026-01-26'."""
    m = re.match(r'(\w+)\s+(\d+),?\s+(\d{4})', date_str.strip())
    if not m:
        return '2026-01-01'
    month, day, year = m.group(1), m.group(2).zfill(2), m.group(3)
    return f'{year}-{MONTH_MAP.get(month, "01")}-{day}'


def clean_prompt(text: str) -> str:
    """Strip Show less suffix, surrounding quotes, markdown-like formatting."""
    text = re.sub(r'Show less\s*$', '', text, flags=re.IGNORECASE).strip()
    # Strip surrounding double quotes if present
    if text.startswith('"') and text.endswith('"'):
        text = text[1:-1].strip()
    # Collapse repeated whitespace but preserve intentional newlines
    text = re.sub(r'\r\n|\r', '\n', text)
    text = re.sub(r'[ \t]{2,}', ' ', text)
    return text.strip()


def extract_title(prompt_text: str, subcategory: str) -> str:
    """Derive a short human-readable title from the prompt text."""
    # 1. "How can I [verb] [noun phrase]?" — most reliable signal
    how_q = re.search(
        r'How can I (design|develop|create|build|implement|establish|deploy|migrate|use|integrate)\s+([\w\s\-,/]+?)(?:\s+that\b|\s+to\b|\s+for\b|\s+while\b|\s+using\b|[?])',
        prompt_text, re.IGNORECASE
    )
    if how_q:
        verb   = how_q.group(1).capitalize()
        phrase = how_q.group(2).strip().rstrip(',').title()
        if 3 <= len(phrase.split()) <= 9:
            return f'{verb} {phrase}'

    # 2. "Design/Develop/Create a[n] [X] that/for/to…"
    task_match = re.match(
        r'(Design|Develop|Create|Build|Implement)\s+(?:a|an)\s+([\w\s\-]+?)(?:\s+that\b|\s+to\b|\s+for\b|\s+using\b|[,.])',
        prompt_text.lstrip('"'), re.IGNORECASE
    )
    if task_match:
        verb   = task_match.group(1).capitalize()
        phrase = task_match.group(2).strip().title()
        if 2 <= len(phrase.split()) <= 8:
            return f'{verb} {phrase}'

    # 3. "specializing in [designing/developing/building] [X]"
    spec_match = re.search(
        r'specializ(?:ing|ed) in (?:the )?(?:design(?:ing)?|develop(?:ing)?|build(?:ing)?|creat(?:ing)?)\s+(?:of\s+)?(?:a|an\s+)?([\w\s\-]+?)(?:\s+solution|\s+system|\s+platform|\s+framework|[,.])',
        prompt_text, re.IGNORECASE
    )
    if spec_match:
        noun = spec_match.group(1).strip().title()
        if 2 <= len(noun.split()) <= 7:
            return f'Build {noun}'

    # 4. "guide users in [creating/developing] [X]"
    guide_match = re.search(
        r'guide users? (?:in|through) (?:creating|developing|building|designing|implementing)\s+([\w\s\-]+?)(?:\s+that|\s+for|\s+to|[,.])',
        prompt_text, re.IGNORECASE
    )
    if guide_match:
        noun = guide_match.group(1).strip().title()
        if 2 <= len(noun.split()) <= 7:
            return f'Build {noun}'

    # 5. Subcategory fallback with first distinctive noun phrase
    first_line = prompt_text[:200].replace('\n', ' ')
    words = [w for w in re.findall(r'[A-Za-z]+', first_line) if len(w) > 4][:6]
    if words:
        return ' '.join(w.capitalize() for w in words[:5])

    return f'{subcategory.capitalize()} Prompt'


def extract_description(prompt_text: str) -> str:
    """Pull a 1-2 sentence summary from the prompt."""
    # Prefer the "How can I …?" question as it's the clearest goal statement
    how_q = re.search(r'(How can I [^?]+\?)', prompt_text)
    if how_q:
        return how_q.group(1).strip()

    # Otherwise first sentence between 60 and 220 chars
    sentences = re.split(r'(?<=[.?!])\s+', prompt_text)
    for s in sentences:
        s = s.strip()
        if 60 < len(s) < 220 and not s.startswith('You are'):
            return s.rstrip('.')

    return prompt_text[:180].strip().rstrip('.')


def build_what_it_does(prompt_text: str, subcategory: str) -> list[str]:
    """Derive 3 bullet points describing what this prompt enables."""
    sub = subcategory.lower()
    bullets: list[str] = []

    # Try to pull numbered items (## 1. / 1. etc.) from the prompt
    items = re.findall(r'(?:##\s*\d+\.|^\d+\.)\s+\*{0,2}([A-Z][^*\n]{15,120})', prompt_text, re.MULTILINE)
    clean_items = []
    for item in items:
        item = re.sub(r'\*+', '', item).strip().rstrip(':')
        if 20 < len(item) < 150:
            clean_items.append(item)
    if len(clean_items) >= 3:
        return clean_items[:3]

    # Fallback by subcategory
    defaults = {
        'ai':           ['Guides you through designing and training an AI model end-to-end.',
                         'Covers data collection, feature engineering, model selection, and validation.',
                         'Includes best practices for deployment, monitoring, and iterative improvement.'],
        'cloud':        ['Provides a structured framework for cloud architecture and cost optimization.',
                         'Covers service selection, security, compliance, and disaster recovery planning.',
                         'Helps evaluate cloud providers and migration strategies for your workload.'],
        'blockchain':   ['Walks you through designing a secure, scalable blockchain solution.',
                         'Covers smart contract design, consensus mechanisms, and identity management.',
                         'Addresses interoperability, privacy, and compliance requirements.'],
        'iot':          ['Guides the design of a complete IoT system from hardware to cloud.',
                         'Covers sensor selection, data collection pipelines, and edge computing.',
                         'Includes security hardening, firmware management, and predictive analytics.'],
        'cybersecurity':['Provides a methodical roadmap for identifying and mitigating security risks.',
                         'Covers threat modeling, zero-trust principles, and incident response.',
                         'Aligns implementation with industry standards such as NIST, ISO 27001, and OWASP.'],
        'devops':       ['Creates a structured DevSecOps roadmap integrating security into CI/CD.',
                         'Covers automation, monitoring, container orchestration, and SLA management.',
                         'Addresses compliance, shift-left testing, and continuous improvement cycles.'],
        'docker':       ['Provides a comprehensive guide for securing containerized environments.',
                         'Covers image hardening, network isolation, secrets management, and runtime protection.',
                         'Aligns Docker practices with CIS Benchmarks and supply-chain security standards.'],
        'backend':      ['Designs a scalable, cost-efficient backend or microservices architecture.',
                         'Covers serverless patterns, API design, data modeling, and observability.',
                         'Addresses fault tolerance, horizontal scaling, and deployment automation.'],
        'apis':         ['Outlines an effective API monetization and integration strategy.',
                         'Covers pricing models, authentication, rate limiting, and developer experience.',
                         'Guides versioning, documentation standards, and long-term API governance.'],
    }
    return defaults.get(sub, ['Provides expert guidance on the topic.',
                               'Covers key components, best practices, and implementation steps.',
                               'Designed for advanced technical users seeking actionable insights.'])


def build_tips(subcategory: str, prompt_text: str) -> list[str]:
    """Generate 2-3 practical tips for getting the best out of this prompt."""
    sub = subcategory.lower()
    tip_map = {
        'ai':           ['Provide context about your dataset size and quality upfront for tailored advice.',
                         'Ask follow-up questions to drill into specific model selection or evaluation steps.',
                         'Request code snippets or pseudocode when you need implementation-level detail.'],
        'cloud':        ['Specify your cloud provider (AWS / Azure / GCP) at the start for provider-specific guidance.',
                         'Mention regulatory requirements (GDPR, HIPAA) so the response can address compliance directly.',
                         'Ask for a cost estimate breakdown when evaluating architecture decisions.'],
        'blockchain':   ['State whether you need a public or permissioned blockchain before diving in.',
                         'Request smart contract code snippets in Solidity or the language of your choice.',
                         'Specify your scalability and throughput requirements early to shape architecture recommendations.'],
        'iot':          ['Define the type of IoT device and communication protocol (MQTT, CoAP, HTTP) at the start.',
                         'Mention power and connectivity constraints so hardware recommendations are realistic.',
                         'Ask for a data pipeline diagram to visualize the end-to-end architecture.'],
        'cybersecurity':['Describe your current security posture and existing controls for a tailored roadmap.',
                         'Reference specific compliance frameworks (NIST, ISO 27001) if they apply to your organization.',
                         'Ask for a phased implementation plan to make the roadmap actionable.'],
        'devops':       ['Specify your CI/CD toolchain (Jenkins, GitLab, GitHub Actions) for targeted integration advice.',
                         'Mention the size of your engineering team to get right-sized process recommendations.',
                         'Ask for specific YAML pipeline examples or Terraform snippets where applicable.'],
        'docker':       ['Share your existing Dockerfile or docker-compose setup for context-specific hardening advice.',
                         'Mention your orchestration platform (Kubernetes, ECS, Swarm) for relevant deployment guidance.',
                         'Ask for a checklist format to make security steps easy to track and audit.'],
        'backend':      ['Describe your expected request volume and SLA requirements for architecture sizing advice.',
                         'Mention whether you are greenfield or migrating an existing system.',
                         'Request a sequence diagram or component map to clarify service boundaries.'],
        'apis':         ['Specify your target audience (developers, enterprises, startups) for pricing strategy advice.',
                         'Mention whether you need REST, GraphQL, or gRPC guidance upfront.',
                         'Ask for a versioning and deprecation strategy to future-proof your API design.'],
    }
    return tip_map.get(sub, ['Be as specific as possible about your use case.',
                              'Ask for examples and code snippets to make the guidance actionable.',
                              'Request a phased plan if the scope is large.'])


def build_how_to_use(subcategory: str) -> list[str]:
    """Build a step-by-step usage guide."""
    sub = subcategory.lower()
    how_map = {
        'ai':           ['Paste the full prompt into ChatGPT, Claude, or your preferred AI model.',
                         'Describe your specific use case, dataset characteristics, and target outcome.',
                         'Follow the structured guidance step by step, iterating on each phase.',
                         'Ask follow-up questions to go deeper on model selection, training, or deployment.'],
        'cloud':        ['Open ChatGPT or Claude and paste the prompt.',
                         'Provide details about your current infrastructure, cloud provider preference, and compliance needs.',
                         'Work through the framework section by section, requesting elaboration on complex areas.',
                         'Use the output as the basis for a technical proposal or architecture review document.'],
        'blockchain':   ['Paste the prompt into ChatGPT or Claude.',
                         'Specify your blockchain platform (Ethereum, Hyperledger, etc.) and use case.',
                         'Request code snippets for smart contracts or architecture diagrams as needed.',
                         'Iterate on each component — identity, smart contracts, scalability — in separate follow-ups.'],
        'iot':          ['Paste the prompt into ChatGPT or Claude.',
                         'Describe the type of IoT environment (smart home, industrial, city-scale) and devices.',
                         'Follow the structured approach: hardware → firmware → cloud platform → analytics.',
                         'Request implementation examples or wiring diagrams for specific hardware components.'],
        'cybersecurity':['Use Claude or ChatGPT for this prompt — both handle security nuance well.',
                         'Describe your organization size, industry, and existing security tools.',
                         'Work through the roadmap phase by phase, asking for specifics on tools and configurations.',
                         'Request a checklist or table format for easier tracking of implementation tasks.'],
        'devops':       ['Paste into Claude or ChatGPT.',
                         'Specify your current CI/CD tools, team size, and deployment targets.',
                         'Ask for phase-by-phase implementation steps with example pipeline configurations.',
                         'Request metrics and KPIs to measure the success of each DevSecOps phase.'],
        'docker':       ['Paste the prompt into ChatGPT or Claude.',
                         'Describe your containerized environment: base images, orchestration platform, network setup.',
                         'Request a security checklist broken down by category (image, runtime, network, secrets).',
                         'Ask for Dockerfile or docker-compose examples that apply the recommended hardening.'],
        'backend':      ['Paste the prompt into ChatGPT or Claude.',
                         'Describe your startup stage, expected load, and preferred cloud provider.',
                         'Ask for an architecture diagram or component breakdown to visualize the design.',
                         'Request infrastructure-as-code examples (Terraform, CloudFormation) for the recommended setup.'],
        'apis':         ['Paste the prompt into ChatGPT.',
                         'Describe your API type, target developer audience, and current monetization goals.',
                         'Ask for a pricing tier comparison table to evaluate different monetization models.',
                         'Request an OpenAPI spec outline or developer portal checklist as a deliverable.'],
    }
    default = ['Paste the prompt into ChatGPT or Claude.',
               'Provide context about your specific use case and requirements.',
               'Follow the structured guidance and ask follow-up questions for deeper detail.',
               'Iterate on the output until it matches your technical needs.']
    return how_map.get(sub, default)


# ── Parser ───────────────────────────────────────────────────────────────────

def parse_entries() -> list[dict]:
    lines = README_PATH.read_text(encoding='utf-8-sig').splitlines()
    entries: list[dict] = []
    i = 0
    total = len(lines)

    while i < total:
        line = lines[i].strip()

        # Find a "technology" marker
        if line.lower() != 'technology':
            i += 1
            continue

        # Skip optional "Refresh" header line
        j = i + 1
        if j < total and lines[j].strip().lower() in ('refresh', ''):
            # advance past optional header lines
            while j < total and lines[j].strip().lower() in ('refresh', 'technology', ''):
                j += 1
        else:
            j = i + 1

        # Expect subcategory
        if j >= total:
            i += 1
            continue
        subcategory = lines[j].strip().lower()
        if subcategory not in KNOWN_SUBCATEGORIES:
            i += 1
            continue
        j += 1

        # Expect date
        if j >= total:
            i += 1
            continue
        date_raw = lines[j].strip()
        if not re.match(r'[A-Za-z]+\s+\d+,?\s+\d{4}', date_raw):
            i += 1
            continue
        date_iso = parse_date(date_raw)
        j += 1

        # Collect prompt lines until a "⭐" line or another "technology" marker
        prompt_lines: list[str] = []
        while j < total:
            l = lines[j]
            ls = l.strip()
            if re.match(r'^⭐', ls):
                break
            if ls.lower() == 'technology':
                break
            prompt_lines.append(l)
            j += 1

        prompt_raw = '\n'.join(prompt_lines)
        prompt_text = clean_prompt(prompt_raw)
        if len(prompt_text) < 30:
            i = j
            continue

        # Parse views from ⭐ line
        views = 0
        if j < total and re.match(r'^⭐', lines[j].strip()):
            star_match = re.search(r'(\d+)', lines[j])
            if star_match:
                views = int(star_match.group(1))
            j += 1

        title = extract_title(prompt_text, subcategory)
        description = extract_description(prompt_text)

        entries.append({
            'subcategory': subcategory,
            'date': date_iso,
            'prompt': prompt_text,
            'views': max(views, 1),
            'title': title,
            'description': description,
        })

        i = j  # move past this entry

    return entries


# ── Renderer (matches generate_prompt_vault_entries.py output format) ────────

def js_single_quote(value: str) -> str:
    return "'" + value.replace('\\', '\\\\').replace("'", "\\'") + "'"


def js_template_literal(value: str) -> str:
    escaped = value.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
    return f'`{escaped}`'


def render_array(values: list[str], indent: str = '  ') -> str:
    if not values:
        return '[]'
    rendered = '\n'.join(f"{indent}  {js_single_quote(v)}," for v in values)
    return f'[\n{rendered}\n{indent}]'


def render_entry(entry: dict) -> str:
    sub  = entry['subcategory']
    var  = to_variable_name(entry['title'])
    tags = SUBCATEGORY_BASE_TAGS.get(sub, ['Technology'])[:4]
    return '\n'.join([
        f"const {var} = {{",
        f"  emoji: {js_single_quote(SUBCATEGORY_EMOJI.get(sub, '💡'))},",
        f"  title: {js_single_quote(entry['title'])},",
        f"  description: {js_single_quote(entry['description'])},",
        f"  type: 'Prompts',",
        f"  category: 'Technology',",
        f"  tool: {js_single_quote(SUBCATEGORY_TOOL.get(sub, 'ChatGPT'))},",
        f"  output: 'Text',",
        f"  date: {js_single_quote(entry['date'])},",
        f"  tags: {render_array(tags)},",
        f"  views: {entry['views']},",
        f"  recommendedTools: {render_array(SUBCATEGORY_RECOMMENDED.get(sub, ['ChatGPT', 'Claude']))},",
        f"  prompt: {js_template_literal(entry['prompt'])},",
        f"  whatItDoes: {render_array(build_what_it_does(entry['prompt'], sub))},",
        f"  tips: {render_array(build_tips(sub, entry['prompt']))},",
        f"  howToUse: {render_array(build_how_to_use(sub))},",
        '};',
        '',
        f"export default {var};",
        '',
    ])


# ── Main ─────────────────────────────────────────────────────────────────────

def main() -> None:
    existing = {p.name for p in ENTRIES_DIR.glob('*.prompt.js')}
    entries  = parse_entries()

    created:   list[str] = []
    skipped:   list[str] = []
    duplicate: set[str]  = set()

    for entry in entries:
        filename = slugify(entry['title']) + '.prompt.js'
        if filename in existing or filename in duplicate:
            skipped.append(filename)
            continue
        (ENTRIES_DIR / filename).write_text(render_entry(entry), encoding='utf-8')
        created.append(filename)
        duplicate.add(filename)
        existing.add(filename)

    summary = {
        'total_parsed':  len(entries),
        'total_created': len(created),
        'total_skipped': len(skipped),
        'created_files': created,
    }
    print(json.dumps(summary, indent=2, ensure_ascii=False))


if __name__ == '__main__':
    main()
