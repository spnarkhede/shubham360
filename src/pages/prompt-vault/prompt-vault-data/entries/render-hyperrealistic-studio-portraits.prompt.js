const renderHyperrealisticStudioPortraitsPrompt = {
  emoji: '🦢',
  title: 'Render Hyperrealistic Studio Portraits',
  description: 'Generate hyper-realistic studio portraits with this AI prompt, featuring customizable poses, lighting, outfits, and cinematic 8K quality results.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Marketing',
    'Content Strategy',
    'Render',
    'Hyperrealistic',
  ],
  views: 44,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "description": "A full-body portrait of a young woman sitting on a white modern chair against a plain light gray studio background.",
  "style": {
    "type": "Hyper-realistic",
    "resolution": "Cinematic 8K Ultra-HD",
    "lighting": "Soft and even studio light"
  },
  "subject": {
    "gender": "Female",
    "age_appearance": "Young adult",
    "hair": {
      "length": "[HAIR STYLE - length]",
      "style": "[HAIR STYLE - texture]",
      "color": "[HAIR STYLE - color]"
    },
    "expression": "Soft yet confident, looking directly at the camera.",
    "pose": {
      "body_position": "Sitting casually on a chair.",
      "hands": "Both hands resting on the chin."
    },
    "makeup": "Natural and subtle"
  },
  "outfit": {
    "top": "[OUTFIT - top]",
    "bottom": "[OUTFIT - bottom]",
    "outerwear": "[OUTFIT - outerwear]",
    "footwear": "[OUTFIT - footwear]"
  },
  "accessories": ["[ACCESSORIES]"],
  "background": {
    "type": "Studio",
    "color": "Minimalistic light gray",
    "feel": "Simple and bright"
  }
}`,
  whatItDoes: [
    'Generates a hyper-realistic AI image of a young woman in a full-body portrait sitting on a modern white chair.',
    'Uses soft studio lighting and cinematic 8K resolution to capture natural makeup and a confident expression.',
    'Places the subject against a minimalistic light gray background with customizable hair, outfit, and accessory options.',
  ],
  tips: [
    'Choose hair styles that match your brand aesthetic, such as long wavy brunette for bohemian fashion or sleek short platinum blonde for modern minimalist looks.',
    'Select outfit combinations that showcase your product line or brand identity, like pairing an oversized blazer with skinny jeans and ankle boots for contemporary workwear or a flowy midi dress with sandals for summer collections.',
    'Use the JSON prompt to guide the AI in creating a professional studio portrait that highlights specific accessories like statement earrings, layered necklaces, or designer handbags to feature your product catalog.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [HAIR STYLE - length], [HAIR STYLE - texture], [HAIR STYLE - color], [OUTFIT - top], [OUTFIT - bottom], [OUTFIT - outerwear], [OUTFIT - footwear], and [ACCESSORIES] with your desired details for the AI image.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default renderHyperrealisticStudioPortraitsPrompt;
