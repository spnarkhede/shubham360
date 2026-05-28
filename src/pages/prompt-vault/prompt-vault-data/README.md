# Prompt Vault Data Folder

Add new PromptVault entries by creating a new file in `entries/`.

## File naming

Use `*.prompt.js` names, for example:

- `seo-blog.prompt.js`
- `knowledge-loop.prompt.js`

## Export shape

Each file should default-export a single object with these fields:

- `title` (string)
- `description` (string)
- `type` (`Prompts | Agents | System Prompts | Guide`)
- `category` (string)
- `tool` (string)
- `output` (`Text | Image`)
- `date` (YYYY-MM-DD)
- `tags` (array of strings)
- `views` (number)
- Optional: `recommendedTools` (array of strings)
- Optional: `prompt` (string)
- Optional: `markdown` (string)
- Optional: `markdownFile` (string, public/static URL)
- Optional: `whatItDoes`, `tips`, `howToUse` (arrays of strings)

## Quick start

1. Duplicate `entries/_template.prompt.js`.
2. Rename the copy (e.g. `my-new-prompt.prompt.js`).
3. Fill in the object fields.
4. Save the file.
5. PromptVault page automatically includes the new entry.
