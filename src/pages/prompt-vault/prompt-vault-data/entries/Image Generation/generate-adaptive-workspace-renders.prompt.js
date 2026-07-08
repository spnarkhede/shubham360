const generateAdaptiveWorkspaceRendersPrompt = {
  emoji: '🐝',
  title: 'Generate Adaptive Workspace Renders',
  description: 'Generate flexible commercial architecture designs with this AI prompt, featuring adaptive reuse concepts, community-focused workspaces, and photo-realistic urban renderings.',
  type: 'Prompts',
  category: 'Image Generation',
  tool: 'Nano Banana',
  output: 'Image',
  date: '2026-05-28',
  tags: [
    'Architecture',
    'Photography',
    'Image Generation',
    'Creative',
    'Adaptive',
  ],
  views: 26,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "project_type": "commercial architecture",
  "building_type": "[WORKSPACE TYPOLOGY]",
  "brand_inspiration": "[WORKSPACE TYPOLOGY]",
  "architectural_concept": "flexibility, community, and adaptive reuse",
  "exterior_design": {
    "form": "adaptive modern volume within existing urban block",
    "facade": "large [FACADE CHARACTER] windows with warm interior visibility",
    "entrance": "welcoming ground-floor lobby connected to street life"
  },
  "materials": [
    "[MATERIAL LANGUAGE]"
  ],
  "interior_visibility": "interior activity visible from outside",
  "lighting": {
    "daytime": "abundant daylight through large windows",
    "nighttime": "warm interior lighting showcasing social activity"
  },
  "urban_context": {
    "location": "[URBAN SETTING]",
    "interaction": "[URBAN SETTING]"
  },
  "visual_style": {
    "realism": "photo-realistic architectural render",
    "camera": "street-level perspective",
    "details": "urban wear, realistic glass reflections"
  },
  "atmosphere": "creative, social, energetic, modern",
  "avoid": [
    "formal corporate appearance",
    "closed-off facades"
  ]
}`,
  whatItDoes: [
    'Generates a photo-realistic AI image of a modern commercial workspace building integrated into an existing urban block.',
    'Features large windows with warm interior lighting that reveals community activity and creates street-level connection.',
    'Emphasizes flexible, welcoming architecture with adaptive reuse elements captured from a street-level perspective.',
  ],
  tips: [
    'Choose a workspace typology that matches your target audience, such as coworking hub for freelancers, tech incubator for startups, or creative studio for artists to define the building type and brand inspiration variables.',
    'Select facade character and material language that work together, like industrial-style windows with exposed brick and steel, or floor-to-ceiling glass with warm wood accents to create visual harmony in your AI image.',
    'Define your urban setting with specific neighborhood characteristics, such as historic downtown district, emerging arts quarter, or tech corridor to help the AI image prompt generate authentic street-level context and building interaction.',
  ],
  howToUse: [
    'Step 1: Fill in the [WORKSPACE TYPOLOGY], [FACADE CHARACTER], [MATERIAL LANGUAGE], and [URBAN SETTING] variables with your specific project details.',
    'Step 2: Run the JSON prompt above.',
  ],
};

export default generateAdaptiveWorkspaceRendersPrompt;
