# 📄 Best AI Prompts for Cinematic Video Generation with Midjourney

> **TL;DR**: Midjourney doesn't make video — it makes *amazing still frames* that you feed into video tools like Runway or Pika. The secret? Keep every frame consistent (same face, same camera, same lighting). Use `--cref` and lock your seed. That's how you kill the "morphing face" problem.

---

## 📌 Why Midjourney for Video? (Quick Read)

| ✅ What Midjourney Does Well | ❌ What It Doesn't Do |
|---|---|
| Creates film-quality still frames | Does NOT generate video itself |
| Keeps characters consistent with `--cref` | Can't animate anything on its own |
| Lets you lock camera, lighting, lens | Won't fix bad source frames later |
| Feeds into Runway, Pika, Kling AI | Garbage in = garbage video out |

> 🔑 **Golden Rule**: Midjourney = Art Direction. Runway/Pika = Animation. **Consistency in Midjourney = Quality in Video.**

---

## 🔥 The 4 Prompts (Copy-Paste Ready)

---

### 1. Cinematic Frame Prompt Formula

**Use Case**: You need one killer frame that looks like it came from a real movie. Use this formula every time — it's the blueprint for all video-ready Midjourney images.

**Target Personas**: Video Producers, AI Filmmakers, Content Creators, Creative Directors, Social Media Managers

**Tags**: `cinematic-frame`, `midjourney-formula`, `video-source`, `film-look`, `claude`

**Prompt**:

```
A weathered man in his mid-50s with deep-set grey eyes, salt-and-pepper beard, wearing a dark wool overcoat over a charcoal turtleneck, standing in a dimly lit rain-soaked Tokyo alleyway at night, neon signs casting pink and blue reflections on wet pavement, medium shot at eye level, 50mm lens, shallow depth of field with the background fading to bokeh, tungsten street lights mixed with neon, cinematic lighting inspired by Ridley Scott's Blade Runner, shot on 35mm Kodak Vision3 500T film --style raw --s 200 --v 6.1 --ar 16:9
```

---

### 2. Character Consistency with —cref and Seed Management

**Use Case**: You need 4 frames of the *same person* in different scenes — without their face changing every time. This is the #1 fix for the "morphing face" problem.

**Target Personas**: AI Filmmakers, Video Editors, Storyboard Artists, Content Creators, Brand Video Producers

**Tags**: `character-consistency`, `--cref`, `seed-management`, `multi-frame`, `midjourney-video`

**Prompt**:

```
Generate 4 key frames for a short cinematic AI video sequence featuring the same character. The character is: [DETAILED CHARACTER DESCRIPTION - include face, hair, clothing with specific colors and textures, build, age, distinguishing features]. Use the --cref parameter with a seed image [IF YOU HAVE A REFERENCE IMAGE URL] or use the character description consistently across all prompts.

Frame 1 - Opening shot: [SCENE DESCRIPTION - what the character is doing, where, what the camera sees]
Frame 2 - Mid sequence: [SCENE DESCRIPTION - different scene, same character, continuation of story]
Frame 3 - Tension moment: [SCENE DESCRIPTION - elevated conflict or drama]
Frame 4 - Resolution: [SCENE DESCRIPTION - conclusion of the scene]

For each frame:
- Include the full detailed character description in every prompt
- Specify the same camera angle and lens for consistency (lock the camera)
- Use the same time-of-day and lighting setup (locked lighting)
- Vary only the environment and the character's action, not the camera or lighting
- Apply --seed [SAME SEED NUMBER] to all four frames if your video tool supports seed-based consistency
```

---

### 3. Shot Sequence Prompt (6-Frame Storyboard)

**Use Case**: You need a full cinematic sequence — wide shot, medium shot, close-up, reaction — all from the same scene. This prompt generates a complete storyboard in one go.

**Target Personas**: Film Directors, AI Video Creators, Storyboard Artists, Marketing Video Producers, Social Media Strategists

**Tags**: `shot-sequence`, `storyboard`, `6-frame`, `cinematic-narrative`, `midjourney-video`

**Prompt**:

```
Generate a 6-frame cinematic shot sequence for a short AI video with the following narrative: [DESCRIBE THE SCENE YOU WANT TO CREATE - e.g., "A lone figure walks through an abandoned warehouse at dusk, discovers evidence of a past event, and makes a decision about what to do next"]

The sequence should follow standard film grammar:
1. **Establishing Wide**: Full shot showing the environment and the character in context. The character is small in the frame.
2. **Wide to Medium**: Second shot, same scene, slightly closer to emphasize the character's journey through the space.
3. **Point of Interest**: Shot showing what the character discovers in the environment.
4. **Reaction Close-Up**: The character's face, showing their emotional response to the discovery.
5. **The Object**: A detail shot of the specific evidence or item that drives the decision.
6. **Decision Shot**: The character making a choice (reaching for something, turning away, making a call).

Consistency requirements:
- Same character throughout (use detailed physical description)
- Same time of day (dusk/twilight)
- Same lighting palette (cool blue ambient mixed with warm interior light)
- Lock camera angle progression (the camera "moves closer" by changing lens from wide to close-up while keeping angle consistent)
- Color grade reference: desaturated with selective warm highlights (the "cold case" aesthetic)
```

---

### 4. Video Tool Optimized Frame Generation

**Use Case**: You're sending frames to Runway, Pika, or Kling AI. You need frames that won't break when the video tool animates them. This prompt optimizes every setting for downstream video generation.

**Target Personas**: AI Video Editors, Runway Users, Pika Labs Users, Kling AI Users, Generative Video Artists

**Tags**: `video-tool-optimized`, `runway-gen3`, `pika-labs`, `kling-ai`, `upscale`, `midjourney-video`

**Prompt**:

```
Generate a series of high-fidelity source frames optimized for AI video generation in [NAME YOUR VIDEO TOOL - e.g., Runway Gen-3, Pika Labs, Kling AI]. The target output resolution is [TARGET RESOLUTION - e.g., 1280x720 for HD, 1920x1080 for full HD].

For video tool compatibility, apply the following specifications:
- Resolution: Generate at 2x target resolution (2560x1440 for 1280x720 output) to allow for quality headroom
- Format: Upscale to maximum quality using --upbeta if available
- Contrast: Apply moderate contrast (not extreme high-contrast) to avoid clipping in video generation
- Detail level: High subject detail, moderate environment detail (video tools will add environmental motion that Midjourney's static detail can obscure)
- Motion anticipation: Avoid static "action" poses (mid-leap, mid-gesture) that are difficult for video models to animate smoothly; use poses at the start or end of movements instead

Subject: [DETAILED DESCRIPTION]
Environment: [DETAILED DESCRIPTION]
Style: Cinematic still photography, moody, [SPECIFIC REFERENCE]

Output will be used as source frames for [VIDEO TOOL NAME], so prioritize: subject clarity, lighting consistency, and poses that anticipate motion rather than freeze it.
```

---

## ❓ FAQ (Quick Answers)

| Question | Answer |
|---|---|
| **Biggest mistake with Midjourney + Video?** | Changing camera angle or lighting between frames. Lock everything. Vary only the story. |
| **How to keep the same face across frames?** | Use `--cref` + extremely specific face description in EVERY prompt. No vague terms like "attractive woman" |
| **What aspect ratio should I use?** | Match your video output. 16:9 for YouTube/cinematic. 9:16 for Reels/TikTok. Don't crop later |
| **Quality or speed for video frames?** | Always quality. Use `--upbeta`. Video tools magnify every flaw in your source frame |
| **How to avoid the "AI look"?** | Use real camera references: "shot on Hasselblad", "Kodak Portra 400", "35mm film stock" |

---

## 🎯 Key Takeaways (The 5 Rules)

| # | Rule |
|---|---|
| 1️⃣ | Midjourney = Art Direction. Runway/Pika = Animation. Never skip this step |
| 2️⃣ | Lock camera, lens, lighting across ALL frames. Only vary the story |
| 3️⃣ | Use `--cref` + specific face description = no more morphing faces |
| 4️⃣ | Generate at 2x your target resolution for quality headroom |
| 5️⃣ | Use poses at the START or END of movement — never mid-action |

> **Your video is only as good as your source frames. Master Midjourney first. 🎬**

---