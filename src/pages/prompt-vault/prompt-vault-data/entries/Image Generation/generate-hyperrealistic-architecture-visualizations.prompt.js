const generateHyperrealisticArchitectureVisualizationsPrompt = {
  emoji: '🧩',
  title: 'Generate Hyperrealistic Architecture Visualizations',
  description: 'Generate hyper-realistic commercial architecture designs with this AI prompt, featuring modular hybrid workspaces, terraces, public spaces, and collaboration-focused layouts.',
  type: 'Prompts',
  category: 'Image Generation',
  tool: 'Nano Banana',
  output: 'Image',
  date: '2026-05-28',
  tags: [
    'Architecture',
    'Image Generation',
    'Creative',
    'Hyperrealistic',
    'Visualizations',
  ],
  views: 26,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "project_type": "commercial architecture",
  "building_type": "[WORKSPACE TYPOLOGY]",
  "architectural_concept": "collaboration-driven hybrid workspace",
  "exterior_design": {
    "form": "modular volumes stacked and shifted for terraces",
    "facade": "[FACADE EXPRESSION]",
    "terraces": "shared outdoor working terraces"
  },
  "materials": [
    "[FACADE EXPRESSION]"
  ],
  "lighting": {
    "daytime": "bright and open with strong daylight",
    "nighttime": "lively interior lighting visible from outside"
  },
  "urban_context": {
    "location": "[DISTRICT CONTEXT]",
    "interaction": "public ground floor with cafes and event spaces"
  },
  "visual_style": {
    "realism": "hyper-realistic architectural visualization",
    "camera": "three-quarter exterior perspective",
    "details": "people interacting, realistic materials"
  },
  "atmosphere": "dynamic, inclusive, innovative",
  "avoid": [
    "corporate stiffness",
    "isolated building layout"
  ]
}`,
  whatItDoes: [
    'Generates a hyper-realistic AI image of a modern commercial workspace with stacked modular volumes and outdoor terraces.',
    'Shows people interacting in public ground floor spaces like cafes while interior lighting creates a lively atmosphere.',
    'Captures a three-quarter exterior view that emphasizes collaboration-friendly design and urban integration.',
  ],
  tips: [
    'Fill the workspace typology variable with creative options like co-working hub, tech campus, or creative studio to match your AI image prompt vision.',
    'Choose facade expression that reflects your brand identity, such as parametric metal panels for innovation or warm timber louvers for sustainability.',
    'Select district context that aligns with your project goals, like urban tech district for startups or cultural neighborhood for creative industries.',
  ],
  howToUse: [
    'Step 1: Fill in the [WORKSPACE TYPOLOGY], [FACADE EXPRESSION], and [DISTRICT CONTEXT] variables with your specific building type, facade material style, and urban location details.',
    'Step 2: Run the JSON prompt above.',
  ],
};

export default generateHyperrealisticArchitectureVisualizationsPrompt;
