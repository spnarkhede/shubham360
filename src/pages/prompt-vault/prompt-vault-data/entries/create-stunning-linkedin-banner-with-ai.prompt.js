const createStunningLinkedInBannerPrompt = {
  emoji: '🎨',
  title: 'Create a Stunning LinkedIn Banner with AI',
  description:
    'Generate a high-converting, visually vibrant LinkedIn banner (1584×396px) using Gemini. Answer 6 quick questions, upload your photo, and get a professional result in minutes.',

  type: 'Prompts',
  category: 'Design',
  tool: 'Gemini',
  output: 'Image',
  date: '2026-05-30',
  tags: ['LinkedIn', 'Personal Branding', 'Banner Design', 'AI Design', 'Social Media'],
  views: 0,

  recommendedTools: ['Gemini', 'ChatGPT', 'Midjourney'],

  prompt: `Act as a professional LinkedIn Banner Designer.

Your goal is to generate a high-converting, visually vibrant, and professional LinkedIn banner that fits the 1584 x 396 pixel dimension perfectly. The design should be dynamic and stand out.

Because you cannot generate this exact aspect ratio, you must generate a Wide (16:9) image, but you must concentrate the design into a thin horizontal strip in the absolute vertical center of the canvas.

To ensure the user can crop this correctly:
1. The top 35% of the image must be empty background color.
2. The bottom 35% of the image must be empty background color.
3. All content (Text, CTA, Face) must be squeezed into the middle 30% strip.

Before generating the image, please ask me for the following details so you can customize the design. Stop and wait for my response after asking:

1. What is the Primary Headline?
2. What is the Secondary Tagline?
3. What is the Call to Action (CTA) text?
4. What Social Proof, stats, or client logos should be included?
5. What are your Brand Colours (Hex codes)?
6. Please upload the realistic photo of yourself. Additionally, specify any REALISTIC professional changes you want made to your appearance (e.g., "Change my polo to a dark suit").

Once I provide these details, generate the banner adhering strictly to these layout rules within the central middle strip:

Layout Rules (Applied ONLY to the middle 30% of the image):

1. CTA Placement (Strict): The CTA button must be anchored precisely in the top-left corner of the central strip. It should be positioned high up, above the level of the subject's shoulder.

2. Subject Appearance (Realistic & Professional): Place the modified user photo in the center-left of the strip. Apply the requested changes but maintain a high-quality, realistic photographic style. Do NOT apply cartoon filters.

3. Headline and Tagline: Place the Headline on the right side of the strip, with the Tagline directly below it. Keep the text compact.

4. Social Proof: Place logos or stats in a small, clean row at the bottom-right of the strip.

5. Background (Vibrant & Geometric): Do not use a plain, flat background. Create a dynamic and modern background using your brand colors. Incorporate subtle geometric shapes, abstract lines, or a professional gradient pattern to add depth, energy, and a high-end feel. Ensure these background elements are subtle enough behind the text to maintain perfect legibility.

Please start by asking me the questions.`,

  whatItDoes: [
    'Guides Gemini to generate a perfectly proportioned LinkedIn banner (1584×396px) via a 16:9 canvas with a focused center strip.',
    'Customizes the banner to your brand: your photo, headline, tagline, CTA button, social proof stats, and brand colors.',
    'Maintains a realistic, professional photographic style — no cartoon filters or low-quality AI artifacts.',
    'Positions all elements (CTA, photo, headline, social proof) with strict layout rules so the final crop looks intentional and polished.',
  ],

  tips: [
    'Use Gemini 1.5 Pro or Gemini 2.0 Flash — they handle image generation + multi-turn conversation best.',
    'Upload a clean, well-lit headshot with a neutral background for the most accurate appearance edits.',
    'Keep your headline under 8 words and your tagline under 12 — brevity reads better at banner scale.',
    'For brand colors, provide 2–3 hex codes: a primary background, an accent for the CTA, and a text color.',
    'After generation, crop the result to the center 30% in Canva, Figma, or any photo editor before uploading to LinkedIn.',
    'Make all edits in the same Gemini chat so the model retains context about your photo and preferences.',
  ],

  howToUse: [
    'Open Gemini (gemini.google.com) and start a new chat.',
    'Paste the full prompt above into the message box and send it.',
    'Gemini will ask you 6 questions — answer each one clearly.',
    'On question 6, upload your headshot photo and describe any appearance changes you want (e.g., "add a blazer").',
    'Gemini generates your banner. Review it and ask for edits in the same chat (e.g., "move the CTA higher", "make the background darker").',
    'Once happy, download the image and crop it to the center horizontal strip using Canva, Figma, or your phone\'s crop tool.',
    'Upload the cropped image to your LinkedIn profile under "Edit background photo".',
  ],
};

export default createStunningLinkedInBannerPrompt;
