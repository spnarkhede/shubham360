const createShadowPlayProductVisualsPrompt = {
  emoji: '🌓',
  title: 'Create Shadow Play Product Visuals',
  description: 'Create stunning shadow play product visuals with this AI prompt, featuring minimal sunlit walls, precise shadows, and projected label typography.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Campaigns',
    'Image Generation',
    'Visual Content',
    'Marketing',
  ],
  views: 51,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "task": "shadow_play_product_visual",
  "input": {
    "product": "UPLOAD_PRODUCT_IMAGE_HERE"
  },
  "scene": {
    "environment": "minimal sunlit wall",
    "wall": {
      "color": "[WALL TONE]",
      "texture": "smooth plaster with subtle natural imperfections",
      "grain": "soft film grain"
    },
    "lighting": {
      "type": "warm afternoon sunlight",
      "direction": "side angled light creating elongated shadows",
      "quality": "gently diffused but sharp shadow edges",
      "mood": "soft dreamy atmosphere"
    }
  },
  "composition": {
    "style": "ultra minimal",
    "framing": "centered shadow composition",
    "aesthetic": "[CAMPAIGN AESTHETIC]",
    "no_extra_objects": true,
    "color_restriction": "no colors except natural wall tone and white typography"
  },
  "shadow_subject": {
    "human_element": "[SHADOW POSE]",
    "product_shadow_accuracy": {
      "shape_locked": true,
      "cap_locked": true,
      "edges_precise": true,
      "proportions_exact": true,
      "silhouette_recreated_from_upload": true
    }
  },
  "label_projection": {
    "source": "label text extracted from uploaded product image",
    "projection_style": "projected onto the product shadow",
    "typography": {
      "color": "clean crisp white",
      "placement_exact": true,
      "spacing_exact": true,
      "size_exact": true,
      "alignment_precise": true
    }
  },
  "quality": {
    "resolution": "ultra high resolution",
    "detail_level": "hyperreal shadow edges and wall texture fidelity",
    "finish": "editorial luxury skincare finish"
  }
}`,
  whatItDoes: [
    'Creates an AI image showing a product\'s shadow cast on a minimal sunlit wall with precise shape accuracy.',
    'Projects the product label text in clean white typography directly onto the shadow for artistic branding.',
    'Generates a luxury editorial visual using warm afternoon light and hyperreal details for skincare campaigns.',
  ],
  tips: [
    'Upload a high-resolution product image on transparent background to ensure the AI image accurately recreates the shadow silhouette with precise edges and proportions.',
    'Choose a wall tone that complements your product packaging, such as warm beige for earthy brands or soft gray for modern aesthetics, to enhance the AI image prompt\'s visual harmony.',
    'Select a shadow pose that tells your brand story, like hands gently holding the product for skincare or reaching toward it for aspirational campaigns, and use the JSON prompt to guide the AI in creating the shadow play composition.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [WALL TONE] with your preferred wall color, [CAMPAIGN AESTHETIC] with your brand style, and [SHADOW POSE] with the human gesture you want casting the shadow.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default createShadowPlayProductVisualsPrompt;
