import React from 'react';

export const PROMPT_ENTRY_TEMPLATE = {
  title: 'Replace with prompt title',
  description: 'Write a short summary of what this prompt helps the user achieve.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['tag-one', 'tag-two'],
  views: 0,
  recommendedTools: ['ChatGPT', 'Claude', 'Gemini'],
  prompt: `# CONTEXT:\nDescribe context here\n\n# ROLE:\nDescribe role here\n\n# RESPONSE GUIDELINES:\nList clear requirements here\n\n# TASK CRITERIA:\n1. Add criteria\n2. Add criteria\n\n# INFORMATION ABOUT ME:\n- Topic: [ENTER TOPIC]`,
  markdown: `# Replace with prompt title\n\nShort intro.\n\n## Prompt\n\n\`\`\`\nPaste full prompt text here\n\`\`\`\n\n## What this prompt does\n\n- Add bullet points\n\n## Tips for this prompt\n\n- Add tips\n\n## How to use the prompt\n\n- Add usage steps`,
  whatItDoes: ['Add what this prompt does'],
  tips: ['Add one practical tip'],
  howToUse: ['Add one usage step'],
};

export default function PromptEntryTemplate() {
  return (
    <section>
      <h2>Prompt Entry Template</h2>
      <p>Use this structure when creating a new PromptVault entry file.</p>
      <pre>{JSON.stringify(PROMPT_ENTRY_TEMPLATE, null, 2)}</pre>
    </section>
  );
}
