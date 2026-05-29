const generateFashionPortraitVariationsPrompt = {
  emoji: '🦢',
  title: 'Generate Fashion Portrait Variations',
  description: 'Generate detailed fashion portrait descriptions with this AI prompt, including model aesthetics, styling elements, makeup details, attire specifications, and accessory combinations.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'Nano Banana',
  output: 'Image',
  date: '2026-05-28',
  tags: [
    'Portrait',
    'Coding',
    'AI Prompts',
    'Fashion',
    'Variations',
  ],
  views: 42,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "description": "A striking young [MODEL PROFILE] woman, mid-20s, with a soft, yet focused gaze and slightly parted lips, embodying a slender, graceful [MODEL PROFILE] model aesthetic.",
  "physique": "Very slim, tall, and elegantly proportioned, typical of [MODEL PROFILE] idols, emphasizing a lean silhouette.",
  "hair": "Long, luxurious, dark [COLOR PALETTE: HAIR SHADE], styled in deep, voluminous Hollywood waves, perfectly framing the face.",
  "makeup": "Soft, 'clean girl' aesthetic with peachy blush, defined brows, subtle cat-eye liner, and a matte nude-pink lip, typical of [MODEL PROFILE] makeup trends.",
  "expression": "Sultry, confident, and direct eye contact with the viewer.",
  "attire": {
    "top": "[COLOR PALETTE: ACCENT] and [COLOR PALETTE: NEUTRAL] plaid bustier crop top with a sweetheart neckline.",
    "waist": "Dark [COLOR PALETTE: PRIMARY] leatherette lace-up corset/waist cincher, designed to enhance the slim waistline.",
    "bottom": "Matching dark [COLOR PALETTE: PRIMARY], heavily pleated or gathered faux-leather mini skirt.",
    "outerwear": "A rich, [COLOR PALETTE: DEEP TONE] leather bomber jacket, worn draped off the shoulders, exposing the right arm.",
    "accessories": "Layered, heavy rhinestone choker and chain necklaces, featuring a small, deep [ACCENT GEM COLOR] heart pendant. Large pearl drop earrings. Small, jeweled butterfly hair clips."
  }
}`,
  whatItDoes: [
    'Generates an AI image of a young woman with a slender model physique and Hollywood-style waves in her hair.',
    'Creates a fashion-forward look featuring a plaid bustier top, leather corset, pleated mini skirt, and draped bomber jacket.',
    'Produces a portrait with sultry expression and glamorous accessories including rhinestone chokers, pearl earrings, and butterfly clips.',
  ],
  tips: [
    'Choose a specific model profile like K-pop, European runway, or American editorial to guide the AI image generation with consistent aesthetic direction.',
    'Select a cohesive color palette by filling variables with complementary shades, such as burgundy for deep tones, cream for neutrals, and rose gold for accents.',
    'Use the JSON prompt to guide the AI in creating a fashion-forward portrait that balances the edgy leather elements with soft Hollywood glamour styling.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [MODEL PROFILE], [COLOR PALETTE: HAIR SHADE], [COLOR PALETTE: ACCENT], [COLOR PALETTE: NEUTRAL], [COLOR PALETTE: PRIMARY], [COLOR PALETTE: DEEP TONE], and [ACCENT GEM COLOR] variables with your desired model style and color scheme.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default generateFashionPortraitVariationsPrompt;
