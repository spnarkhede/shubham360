const createHyperrealisticPortraitPhotographyShotsPrompt = {
  emoji: '🎞️',
  title: 'Create Hyperrealistic Portrait Photography Shots',
  description: 'Generate professional portrait images with this AI prompt, featuring customizable poses, environments, lighting styles, and hyper-realistic details for editorial photography.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Photography',
    'Image Prompts',
    'Marketing',
    'Content Strategy',
  ],
  views: 20,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "image_generation_parameters": {
    "main_prompt": "Shot on a Canon EOS R5 with an RF 85mm f/1.2L USM lens, a striking figure stands with confident allure in a [ENVIRONMENT SETTING], poised in a captivating '[POSE STYLE]'. Soft, diffused golden hour light streams dramatically through translucent sheer linen curtains, bathing her form in a painterly glow and creating a perfect, creamy bokeh that softens the background of exposed brick and minimalist decor.",
    "subject_details": {
      "outfit": "[OUTFIT DESCRIPTION] with a fluid, delicate sheen.",
      "skin_texture": "Hyper-realistic skin showcasing visible pores, devoid of airbrushed artificiality.",
      "hair": "Effortlessly styled with discernible individual strands and subtle flyaways.",
      "eyes": "Captivating eyes with a precise, soft rectangular catchlight mirroring the window."
    },
    "environment": {
      "location": "[ENVIRONMENT SETTING].",
      "background_elements": "Exposed brick, minimalist decor, translucent sheer linen curtains.",
      "lighting_style": "Golden hour, diffused, dramatic shadows, painterly glow."
    },
    "technical_specs": {
      "camera": "Canon EOS R5",
      "lens": "RF 85mm f/1.2L USM",
      "film_stock_emulation": "Portra 800",
      "visual_attributes": "Subtle grain, rich warm tones, creamy bokeh, editorial sophistication, high-fashion allure."
    },
    "face_consistency_instruction": "Maintain 100% face consistency with reference image."
  }
}`,
  whatItDoes: [
    'Generates a high-fashion portrait AI image shot with professional camera settings and golden hour lighting.',
    'Creates hyper-realistic skin textures and details while maintaining face consistency with a reference photo.',
    'Produces an editorial-style AI image with warm tones, creamy bokeh, and minimalist background elements.',
  ],
  tips: [
    'Select an environment setting that complements your creative vision, such as a sunlit loft apartment for modern elegance or a vintage studio for timeless appeal.',
    'Choose a pose style that conveys the desired emotion, like a relaxed lean against a wall for casual confidence or a dynamic turn toward the camera for editorial drama.',
    'Describe the outfit with specific fabric details and colors that work with golden hour lighting, such as a flowing silk slip dress in champagne tones or a structured linen blazer in warm earth colors.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [ENVIRONMENT SETTING], [POSE STYLE], and [OUTFIT DESCRIPTION] with your specific creative choices.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default createHyperrealisticPortraitPhotographyShotsPrompt;
