from __future__ import annotations

import json
import re
import unicodedata
from dataclasses import dataclass
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
README_PATH = ROOT / 'scripts' / 'ReadMeData.md'
ENTRIES_DIR = ROOT / 'src' / 'pages' / 'prompt-vault' / 'prompt-vault-data' / 'entries'
OUTPUT_DATE = date.today().isoformat()

CATEGORY_RULES = {
    'Customer Service': [
        r'\bcustomer service\b',
        r'\bsupport\b',
        r'\bknowledge base\b',
        r'\bhelp center\b',
        r'\blive chat\b',
        r'\bchatbot\b',
        r'\btickets?\b',
        r'\bagents?\b',
        r'\bescalat(?:e|ion|ions)\b',
        r'\bfaq\b',
        r'\bservice recovery\b',
        r'\boutage\b',
        r'\bonboarding\b',
        r'\bmacro\b',
        r'\bcsat\b',
    ],
    'Marketing': [
        r'\bsocial media\b',
        r'\bcontent\b',
        r'\bcampaigns?\b',
        r'\bbrand\b',
        r'\bmarketing\b',
        r'\bads?\b',
        r'\badvertis(?:e|ing|ement)\b',
        r'\bphotography\b',
        r'\bimage\b',
        r'\bvisuals?\b',
        r'\binstagram\b',
        r'\bviral\b',
        r'\beditorial\b',
        r'\bportraits?\b',
    ],
    'Business': [
        r'\bbusiness\b',
        r'\bstrategy\b',
        r'\bstrategic\b',
        r'\bdecisions?\b',
        r'\bplanning\b',
        r'\bteam\b',
        r'\bleadership\b',
        r'\bframeworks?\b',
        r'\bopportunit(?:y|ies)\b',
        r'\bviability\b',
        r'\binitiative\b',
        r'\bprocess(?:es)?\b',
        r'\binvestment\b',
        r'\bconflicts?\b',
    ],
    'Productivity': [
        r'\bdaily\b',
        r'\bweekly\b',
        r'\bpriorit(?:y|ies|ize|ization)\b',
        r'\bwriting\b',
        r'\blearning\b',
        r'\bnotes?\b',
        r'\btools?\b',
        r'\bcoding\b',
        r'\bcode\b',
        r'\bautomation\b',
        r'\bscripts?\b',
        r'\bapps?\b',
        r'\bapplications?\b',
        r'\bcalculators?\b',
        r'\bconverters?\b',
        r'\bquiz\b',
        r'\bauthentication\b',
        r'\blogin\b',
        r'\bsecurity\b',
    ],
    'E-Commerce': [
        r'\breturns?\b',
        r'\breviews?\b',
        r'\bchurn\b',
        r'\bloyalty\b',
        r'\bsubscriptions?\b',
        r'\brefunds?\b',
        r'\bfeedback\b',
        r'\brenewal\b',
        r'\borders?\b',
        r'\be-commerce\b',
    ],
    'Sales': [
        r'\boutreach\b',
        r'\bcold email\b',
        r'\bobjections?\b',
        r'\bupsell\b',
        r'\bcross-sell\b',
        r'\breferral\b',
        r'\bwin-back\b',
        r'\brenewal\b',
        r'\bsales\b',
    ],
}

TAG_RULES = [
    (r'\bsocial media\b', 'Social Media'),
    (r'\bcontent\b', 'Content Strategy'),
    (r'\bbrand\b', 'Brand Strategy'),
    (r'\bsupport\b', 'Support'),
    (r'\bcustomer service\b', 'Customer Service'),
    (r'\bknowledge base\b', 'Knowledge Base'),
    (r'\blive chat\b', 'Live Chat'),
    (r'\bchatbot\b', 'Chatbot'),
    (r'\btickets?\b', 'Tickets'),
    (r'\bescalat(?:e|ion|ions)\b', 'Escalation'),
    (r'\brefunds?\b', 'Refunds'),
    (r'\breturns?\b', 'Returns'),
    (r'\bsubscriptions?\b', 'Subscriptions'),
    (r'\bloyalty\b', 'Loyalty'),
    (r'\bchurn\b', 'Churn'),
    (r'\breviews?\b', 'Reviews'),
    (r'\boutreach\b', 'Outreach'),
    (r'\bupsell\b', 'Upsell'),
    (r'\breferral\b', 'Referral'),
    (r'\bstrategy\b', 'Strategy'),
    (r'\bplanning\b', 'Planning'),
    (r'\bwriting\b', 'Writing'),
    (r'\blearning\b', 'Learning'),
    (r'\bautomation\b', 'Automation'),
    (r'\bscripts?\b', 'Scripting'),
    (r'\bcode\b', 'Coding'),
    (r'\bapps?\b', 'App Development'),
    (r'\bsecurity\b', 'Security'),
    (r'\bphotography\b', 'Photography'),
    (r'\bimage\b', 'Image Prompts'),
    (r'\bvisuals?\b', 'Visual Content'),
    (r'\badvertis(?:e|ing|ement)\b', 'Advertising'),
]

DEFAULT_TAGS = {
    'Customer Service': ['Support', 'Customer Experience'],
    'Marketing': ['Marketing', 'Content Strategy'],
    'Business': ['Business', 'Strategy'],
    'Productivity': ['Productivity', 'Tools'],
    'E-Commerce': ['E-Commerce', 'Customer Experience'],
    'Sales': ['Sales', 'Revenue'],
}

STOPWORDS = {
    'a', 'an', 'and', 'as', 'at', 'be', 'build', 'create', 'for', 'from', 'generate', 'how',
    'in', 'into', 'of', 'on', 'or', 'the', 'this', 'to', 'use', 'with', 'write', 'your'
}


@dataclass
class PromptSection:
    header_start: int
    copy_index: int
    emoji: str
    title: str
    description: str
    views: int
    recommended_tools: list[str]



def prev_nonblank(lines: list[str], index: int) -> int:
    while index >= 0 and not lines[index].strip():
        index -= 1
    return index



def find_previous_exact(lines: list[str], start: int, value: str) -> int:
    for index in range(start, -1, -1):
        if lines[index].strip() == value:
            return index
    raise ValueError(f"Could not find {value!r} before line {start + 1}")



def find_next_exact(lines: list[str], start: int, end: int, value: str) -> int:
    for index in range(start, end + 1):
        if lines[index].strip() == value:
            return index
    raise ValueError(f"Could not find {value!r} between lines {start + 1} and {end + 1}")



def strip_number_prefix(text: str) -> str:
    return re.sub(r'^\s*\d+\s*[\).]\s*', '', text).strip()



def slugify(text: str) -> str:
    normalized = unicodedata.normalize('NFKD', text)
    ascii_text = normalized.encode('ascii', 'ignore').decode('ascii')
    ascii_text = ascii_text.replace('&', ' and ')
    ascii_text = re.sub(r'[^A-Za-z0-9]+', '-', ascii_text.lower()).strip('-')
    return re.sub(r'-{2,}', '-', ascii_text)



def title_words(text: str) -> list[str]:
    normalized = unicodedata.normalize('NFKD', text)
    ascii_text = normalized.encode('ascii', 'ignore').decode('ascii')
    return re.findall(r'[A-Za-z0-9]+', ascii_text)



def to_variable_name(title: str) -> str:
    words = title_words(title)
    if not words:
        return 'promptEntryPrompt'
    first = words[0].lower()
    rest = ''.join(word[:1].upper() + word[1:] for word in words[1:])
    base = f'{first}{rest}'
    if not re.match(r'^[A-Za-z_$]', base):
        base = f'prompt{base[:1].upper()}{base[1:]}'
    return f'{base}Prompt'



def clean_section_lines(lines: list[str], drop_how_heading: bool = False) -> list[str]:
    cleaned: list[str] = []
    for raw_line in lines:
        line = raw_line.strip()
        if not line:
            continue
        if drop_how_heading and re.match(r'^#+\s*how to use', line, re.IGNORECASE):
            continue
        line = re.sub(r'^[-*•]\s*', '', line)
        line = re.sub(r'^\d+[\).]\s*', '', line)
        cleaned.append(line)
    return cleaned



def js_single_quote(value: str) -> str:
    escaped = value.replace('\\', '\\\\').replace("'", "\\'")
    return f"'{escaped}'"



def js_template_literal(value: str) -> str:
    escaped = value.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
    return f'`{escaped}`'



def render_array(values: list[str], indent: str = '  ') -> str:
    if not values:
        return '[]'
    rendered = '\n'.join(f"{indent}  {js_single_quote(value)}," for value in values)
    return f'[\n{rendered}\n{indent}]'



def score_category(text: str, patterns: list[str]) -> int:
    return sum(len(re.findall(pattern, text, flags=re.IGNORECASE)) for pattern in patterns)



def choose_category(title: str, description: str, prompt_text: str) -> str:
    short_text = f'{title}\n{description}'
    combined_scores: dict[str, int] = {}
    for category, patterns in CATEGORY_RULES.items():
        combined_scores[category] = score_category(short_text, patterns) * 3 + score_category(prompt_text, patterns)

    if title.lower().startswith(('generate-', 'create-')):
        combined_scores['Marketing'] += 1

    best_category = max(combined_scores, key=combined_scores.get)
    if combined_scores[best_category] == 0:
        return 'Business'
    return best_category



def derive_tags(title: str, description: str, prompt_text: str, category: str) -> list[str]:
    combined = f'{title}\n{description}\n{prompt_text}'
    tags: list[str] = []

    for pattern, tag in TAG_RULES:
        if re.search(pattern, combined, re.IGNORECASE) and tag not in tags:
            tags.append(tag)
        if len(tags) == 4:
            return tags

    for tag in DEFAULT_TAGS[category]:
        if tag not in tags:
            tags.append(tag)
        if len(tags) == 4:
            return tags

    for word in title_words(title):
        normalized = word.lower()
        if normalized in STOPWORDS or len(word) < 4:
            continue
        tag = word.upper() if word.isupper() else word[:1].upper() + word[1:]
        if tag not in tags:
            tags.append(tag)
        if len(tags) == 4:
            break

    return tags[:4]



def parse_sections() -> tuple[list[PromptSection], list[str]]:
    lines = README_PATH.read_text(encoding='utf-8').splitlines()
    existing_files = sorted(path.name for path in ENTRIES_DIR.glob('*.prompt.js'))
    copy_indexes = [index for index, line in enumerate(lines) if line.strip() == 'Copy prompt']
    # Precompute section separator positions to bound backward searches
    separator_indexes = [index for index, line in enumerate(lines) if line.strip() == '---']
    sections: list[PromptSection] = []

    for copy_index in copy_indexes:
        # Find the '---' separator immediately before this copy_index to act as a lower bound
        section_lower_bound = 0
        for sep in separator_indexes:
            if sep < copy_index:
                section_lower_bound = sep
            else:
                break

        prompt_index = find_previous_exact(lines, copy_index - 1, 'Prompt')

        # Try to find 'Recommended tools' only within the current section boundary
        recommended_index = -1
        for idx in range(prompt_index - 1, section_lower_bound - 1, -1):
            if lines[idx].strip() == 'Recommended tools':
                recommended_index = idx
                break

        if recommended_index != -1:
            # Normal path: section has a 'Recommended tools' block
            views_index = prev_nonblank(lines, recommended_index - 1)
            recommended_tools = [
                lines[index].strip()
                for index in range(recommended_index + 1, prompt_index)
                if lines[index].strip()
            ]
        else:
            # No 'Recommended tools' line — views sits immediately before 'Prompt'
            views_index = prev_nonblank(lines, prompt_index - 1)
            recommended_tools = []

        description_index = prev_nonblank(lines, views_index - 1)
        title_index = prev_nonblank(lines, description_index - 1)
        emoji_index = prev_nonblank(lines, title_index - 1)

        views_match = re.search(r'(\d+)\s+views', lines[views_index], re.IGNORECASE)
        if not views_match:
            raise ValueError(f'Could not parse views from line {views_index + 1}: {lines[views_index]!r}')

        sections.append(
            PromptSection(
                header_start=emoji_index,
                copy_index=copy_index,
                emoji=strip_number_prefix(lines[emoji_index]),
                title=lines[title_index].strip(),
                description=lines[description_index].strip(),
                views=int(views_match.group(1)),
                recommended_tools=recommended_tools,
            )
        )

    return sections, existing_files



def build_prompt_payloads() -> tuple[list[dict[str, object]], list[str]]:
    lines = README_PATH.read_text(encoding='utf-8').splitlines()
    sections, existing_files = parse_sections()
    payloads: list[dict[str, object]] = []

    for index, section in enumerate(sections):
        segment_end = sections[index + 1].header_start - 1 if index + 1 < len(sections) else len(lines) - 1
        what_index = find_next_exact(lines, section.copy_index + 1, segment_end, 'What this prompt does')
        tips_index = find_next_exact(lines, what_index + 1, segment_end, 'Tips for this prompt')
        how_index = find_next_exact(lines, tips_index + 1, segment_end, 'How to use the prompt')

        prompt_lines = lines[section.copy_index + 1:what_index]
        while prompt_lines and not prompt_lines[0].strip():
            prompt_lines.pop(0)
        while prompt_lines and not prompt_lines[-1].strip():
            prompt_lines.pop()

        prompt_text = '\n'.join(prompt_lines)
        category = choose_category(section.title, section.description, prompt_text)
        tags = derive_tags(section.title, section.description, prompt_text, category)
        filename = f'{slugify(section.title)}.prompt.js'
        variable_name = to_variable_name(section.title)

        payloads.append(
            {
                'emoji': section.emoji,
                'title': section.title,
                'description': section.description,
                'type': 'Prompts',
                'category': category,
                'tool': section.recommended_tools[0] if section.recommended_tools else 'ChatGPT',
                'output': 'Text',
                'date': OUTPUT_DATE,
                'tags': tags,
                'views': section.views,
                'recommendedTools': section.recommended_tools or ['ChatGPT'],
                'prompt': prompt_text,
                'whatItDoes': clean_section_lines(lines[what_index + 1:tips_index]),
                'tips': clean_section_lines(lines[tips_index + 1:how_index]),
                'howToUse': clean_section_lines(lines[how_index + 1:segment_end + 1], drop_how_heading=True),
                'filename': filename,
                'variableName': variable_name,
            }
        )

    return payloads, existing_files



def render_prompt_file(payload: dict[str, object]) -> str:
    return '\n'.join(
        [
            f"const {payload['variableName']} = {{",
            f"  emoji: {js_single_quote(str(payload['emoji']))},",
            f"  title: {js_single_quote(str(payload['title']))},",
            f"  description: {js_single_quote(str(payload['description']))},",
            f"  type: {js_single_quote(str(payload['type']))},",
            f"  category: {js_single_quote(str(payload['category']))},",
            f"  tool: {js_single_quote(str(payload['tool']))},",
            f"  output: {js_single_quote(str(payload['output']))},",
            f"  date: {js_single_quote(str(payload['date']))},",
            f"  tags: {render_array(list(payload['tags']))},",
            f"  views: {int(payload['views'])},",
            f"  recommendedTools: {render_array(list(payload['recommendedTools']))},",
            f"  prompt: {js_template_literal(str(payload['prompt']))},",
            f"  whatItDoes: {render_array(list(payload['whatItDoes']))},",
            f"  tips: {render_array(list(payload['tips']))},",
            f"  howToUse: {render_array(list(payload['howToUse']))},",
            '};',
            '',
            f"export default {payload['variableName']};",
            '',
        ]
    )



def main() -> None:
    payloads, existing_files = build_prompt_payloads()
    existing_set = set(existing_files)
    seen_filenames: set[str] = set()
    created_files: list[str] = []
    skipped_existing: list[str] = []
    skipped_duplicates: list[str] = []

    for payload in payloads:
        filename = str(payload['filename'])
        if filename in existing_set:
            skipped_existing.append(filename)
            continue
        if filename in seen_filenames:
            skipped_duplicates.append(filename)
            continue

        (ENTRIES_DIR / filename).write_text(render_prompt_file(payload), encoding='utf-8')
        created_files.append(filename)
        seen_filenames.add(filename)

    summary = {
        'total_sections_found': len(payloads),
        'total_unique_filenames_found': len({str(payload['filename']) for payload in payloads}),
        'total_existing_files_before_run': len(existing_files),
        'total_skipped_existing': len(skipped_existing),
        'total_skipped_duplicates': len(skipped_duplicates),
        'total_skipped': len(skipped_existing) + len(skipped_duplicates),
        'total_created': len(created_files),
        'created_files': created_files,
    }
    print(json.dumps(summary, indent=2, ensure_ascii=False))


if __name__ == '__main__':
    main()
