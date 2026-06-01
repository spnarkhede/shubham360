---
id: 222-generate-photorealistic-depth-controlled-portraits
---

## 📐 Generate Photorealistic Depth-Controlled Portraits

| Field | Value |
|---|---|
| **Type** | Prompts |
| **Tool** | Nano Banana |
| **Output** | Image |
| **Date** | 2026-05-28 |
| **Views** | 62 |
| **Tags** | Coding, AI Prompts, Photorealistic, Depth, Controlled |
| **Recommended Tools** | Nano Banana |

> Generate photorealistic images with this AI prompt, using depth map control for precise pose replication, composition accuracy, and spatial positioning.

### Prompt

```
{
  "intent": "Photorealistic image generation utilizing the provided depth map as a strict structural control signal to replicate the specific pose and composition.",
  "frame": {
    "aspect_ratio": "1:1",
    "composition": "High-angle, overhead bird's-eye view strictly adhering to the geometry of the uploaded depth map. The subject is centered diagonally.",
    "control_guidance": {
      "type": "Depth Map ControlNet",
      "strength": "1.0",
      "instruction": "Strictly follow the spatial arrangement and depth gradients of the input image to maintain the exact body position and object placement."
    }
  },
  "subject": {
    "identity": "[SUBJECT DESCRIPTION]",
    "pose": "Performing a full center split (straddle split) on the floor, leaning forward to rest elbows on the ground, exactly matching the depth silhouette.",
    "wardrobe": "Tight-fitting athletic wear. Specifically, opaque black high-waisted leggings that conform to the leg musculature, paired with a matching black sports bra.",
    "action": "[ACTIVITY & PROPS — action description]. Resting chin in one hand while engaged with the activity.",
    "details": "Barefoot, natural skin texture visible on arms and back."
  },
  "environment": {
    "location": "Luxurious interior space featuring a high-gloss, polished [FLOOR MATERIAL] floor.",
    "surface_texture": "[FLOOR MATERIAL] with distinctive natural patterning. The surface is highly reflective, casting faint reflections of the subject and objects.",
    "props": "[ACTIVITY & PROPS — object list], positioned exactly as indicated by the depth map blocks."
  },
  "lighting": {
    "type": "Soft, cool daylight diffused through a window.",
    "interaction": "Light reflects sharply off the polished [FLOOR MATERIAL] floor, creating specular highlights and soft, cool shadows beneath the subject's legs and the props.",
    "color_temperature": "5600K",
    "quality": "Even, shadow-softening illumination suitable for a clean, modern aesthetic."
  },
  "camera": {
    "sensor_format": "Full-frame digital.",
    "lens": "35mm wide-angle lens to capture the spread of the split from above.",
    "camera_position": "Directly overhead (zenith view), parallel to the floor.",
    "focus": "Sharp focus on the subject and the immediate floor area, utilizing the depth map to determine the focal plane."
  },
  "negative": {
    "style": "No carpet, no rustic textures, no anime, no sketch, no low-quality render.",
    "content": "No incorrect limb positioning, no floating objects, no matte floor finish, no distortion of props."
  }
}
```

### What it does

- Generates a photorealistic AI image of an athlete in a center split pose using a depth map to control exact body position and spatial layout.
- Creates an overhead bird\
- ,

### Tips

- Choose a specific subject identity like a yoga instructor or dancer to match the athletic pose in your AI image prompt.
- Fill the activity and props variables with creative scenarios such as reading a book with a coffee mug or sketching with art supplies to personalize the scene.
- Select a luxurious floor material like marble or polished concrete that complements your brand aesthetic and enhances the reflective lighting effect.

### How to use

1. Step 1: Attach your logo / image.

---
