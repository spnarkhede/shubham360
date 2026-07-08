const generateMarketingGridsPrompt = {
  emoji: '🍱',
  title: 'Generate Marketing Grids',
  description: 'Create stunning 3x3 marketing grids with this AI prompt, featuring product photography, sensory themes, and hyperreal commercial-grade visual compositions.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Campaigns',
    'Photography',
    'Marketing',
    'Content Strategy',
  ],
  views: 82,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "task": "create_marketing_grid",
  "input": {
    "product": "UPLOAD_PRODUCT_IMAGE_HERE"
  },
  "canvas": {
    "layout": "3x3 grid",
    "cells": 9,
    "aspect_ratio": "1:1 overall",
    "background": "clean seamless studio backdrop"
  },
  "global_rules": {
    "product_accuracy": {
      "shape_locked": true,
      "label_locked": true,
      "color_locked": true,
      "no_distortion": true
    },
    "lighting": {
      "style": "clean soft studio lighting",
      "shadows": "soft diffused",
      "highlights": "controlled glossy beauty highlights"
    },
    "aesthetic": "[CAMPAIGN MOOD]",
    "quality": "hyperreal, ultra high resolution, commercial grade"
  },
  "cells": [
    {
      "position": "top_left",
      "concept": "[SENSORY THEME] hero shot",
      "description": "Product styled as the hero centerpiece surrounded by elevated [SENSORY THEME] elements, rich textures, luxurious plating"
    },
    {
      "position": "top_center",
      "concept": "[SENSORY THEME] drip macro",
      "description": "Extreme macro of glossy [SENSORY THEME]-inspired liquid dripping around or near the product, high viscosity detail, sensory shine"
    },
    {
      "position": "top_right",
      "concept": "[SENSORY THEME] soft form",
      "description": "Soft sculptural [SENSORY THEME]-textured forms embracing the product, airy texture, elegant curves"
    },
    {
      "position": "middle_left",
      "concept": "[SENSORY THEME] warm melt",
      "description": "Warm toasted or heated [SENSORY THEME] surface with melting texture interacting with product, golden tones"
    },
    {
      "position": "center",
      "concept": "sculptural [SENSORY THEME] textures",
      "description": "Abstract [SENSORY THEME] textures arranged like modern sculpture, product placed as premium centerpiece"
    },
    {
      "position": "middle_right",
      "concept": "floating [SENSORY THEME] splashes",
      "description": "High-speed captured [SENSORY THEME] splashes and fragments suspended mid-air around product"
    },
    {
      "position": "bottom_left",
      "concept": "[SENSORY THEME] gloss aesthetic",
      "description": "Glossy [SENSORY THEME] elements, vibrant textures, playful but premium composition"
    },
    {
      "position": "bottom_center",
      "concept": "[SENSORY THEME] ingredient macro",
      "description": "Extreme close-up [SENSORY THEME] ingredient textures with shallow depth of field, product in sharp focus"
    },
    {
      "position": "bottom_right",
      "concept": "surreal [SENSORY THEME] fusion still life",
      "description": "Unexpected fusion of [SENSORY THEME] elements in a refined surreal composition, product remains visually dominant"
    }
  ]
}`,
  whatItDoes: [
    'Creates a 3x3 marketing grid AI image with nine unique product shots in different styled scenes.',
    'Maintains exact product accuracy across all cells while varying creative backgrounds and sensory themes.',
    'Generates hyperrealistic commercial-grade visuals with studio lighting and customizable campaign moods.',
  ],
  tips: [
    'Upload a high-resolution product image on transparent background to ensure the AI image maintains accurate shape, color, and label details across all nine grid cells.',
    'Choose a sensory theme that connects to your product\'s core benefit, such as chocolate for indulgence, citrus for freshness, or botanical for natural wellness, to create cohesive visual storytelling.',
    'Define a campaign mood that matches your brand personality, like minimalist luxury, playful energy, or organic warmth, to guide the AI image prompt in generating consistent aesthetic across the marketing grid.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [CAMPAIGN MOOD] with your desired aesthetic (like elegant, playful, bold) and [SENSORY THEME] with your creative theme (like chocolate, citrus, floral).',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default generateMarketingGridsPrompt;
