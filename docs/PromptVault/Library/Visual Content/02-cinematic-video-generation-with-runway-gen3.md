# Best AI Prompts for Cinematic Video Generation with Runway Gen-3

Runway Gen-3 creates high-quality video when you use professional filmmaking language. It understands specific camera movements and motion verbs. Use these prompts to turn simple ideas into cinematic clips.

---

## Prompt Structures

### 1. Cinematic Prompt Structure

**Use Case:** Creating a professional, film-quality video shot with specific lighting and camera movement.

**Target Personas:** Video Editors, AI Artists, Filmmakers

**Tags:** `cinematic`, `structure`, `shot-list`, `production`

**Prompt:**

```
Medium close-up shot, centered. A man in his 40s with a weathered leather jacket stands still, turns his head slowly to look off-frame right. Camera slowly pushes in (dolly zoom, 20mm lens), 2-second push, subtle focus rack from eyes to background. Night exterior, rain-soaked parking lot, neon sign casting animated flickering teal and amber light on the subject's face. Cinematic color grade, desaturated teal shadows, warm amber highlights. Shot on ARRI Alexa. --motion 3 --length 10
```

---

### 2. Camera Movement Library

**Use Case:** Selecting the right camera movement terminology to get the desired shot type (dolly, pan, zoom, etc.).

**Target Personas:** Cinematographers, Directors, Video Creators

**Tags:** `camera-movement`, `dolly`, `tracking`, `crane`, `handheld`

**Prompt:**

```
[SELECT THE RELEVANT CAMERA MOVEMENT BELOW]

For a static wide shot: "Wide shot, camera locked off, no movement. [SUBJECT] does [ACTION] in [ENVIRONMENT]."

For a dolly in: "Medium shot, camera dollies forward at steady pace, closing distance to subject over 5 seconds."

For a tracking shot: "Over-the-shoulder tracking shot, camera follows [SUBJECT] walking [DIRECTION], maintaining consistent 2-meter distance."

For a crane up: "Wide shot, camera crane rises slowly from ground level to reveal [SUBJECT AND SCENE] over 8 seconds."

For a handheld feel: "Medium shot, handheld camera, subtle shake and drift, [SUBJECT] does [ACTION]."

For a rack focus: "Two-shot, [SUBJECT A] in foreground in focus, [SUBJECT B] in background slightly out of focus, then focus shifts to [SUBJECT B]."

For a pan: "Wide shot, camera pans left to right following [SUBJECT'S MOVEMENT DIRECTION], maintaining consistent height."

For a zoom: "Close-up, lens zooms from medium to extreme close-up on [SUBJECT'S EYES] over 3 seconds."
```

---

### 3. Motion Specificity

**Use Case:** Generating detailed facial expressions and subtle environmental motion to avoid "static" looking results.

**Target Personas:** Character Designers, VFX Artists, Storytellers

**Tags:** `motion`, `facial-expression`, `subtlety`, `detail`

**Prompt:**

```
Extreme close-up, tight framing on a woman's face, her eyes widen as she hears a sound off-frame. Camera holds steady. Candlelight flickers across her skin, creating moving shadows and highlights. Subtle rack focus from eyes to out-of-focus doorway behind her over 4 seconds. She doesn't move, only her expression changes. Film grain, shallow depth of field. --motion 2 --length 10
```

---

### 4. Iterative Refinement Workflow

**Use Case:** Improving a generated video over multiple attempts by fixing specific errors while keeping good elements.

**Target Personas:** AI Video Producers, Post-Production Supervisors

**Tags:** `workflow`, `iteration`, `refinement`, `troubleshooting`

**Prompt:**

```
[USE THE APPROPRIATE STAGE FOR YOUR CURRENT ITERATION]

For the first generation (establishing the shot):
"[WIDE SHOT DESCRIPTION with full scene detail]"

For the second generation (addressing "the motion is right but the lighting is wrong"):
"[SAME SHOT with modified lighting description] + Note: previous generation had [PROBLEM], preserve [WHAT WORKED]"

For the third generation (addressing "the composition is right but the motion is stiff"):
"[SAME COMPOSITION] + The action should feel more [SPECIFIC QUALITY - e.g., 'urgent,' 'weighted,' 'deliberate']. Motion should have [SPECIFIC QUALITY - e.g., 'natural momentum,' 'hesitant start,' 'smooth deceleration']. --motion 4"

For the fourth generation (getting to final):
"[REFINED PROMPT] + Previous generations achieved [LIST WHAT WORKED]. Final priority: [1-2 CRITICAL ELEMENTS that must be preserved]. Do not compromise on: [CRITICAL NON-NEGOTIABLES]."
```

---

### 5. Image-to-Video Generation

**Use Case:** Using a static image (like a Midjourney creation) as a starting point to generate video motion.

**Target Personas:** Concept Artists, Graphic Designers, Creative Directors

**Tags:** `image-to-video`, `midjourney`, `consistency`, `animation`

**Prompt:**

```
Using the uploaded image as the starting frame, generate a 10-second video clip with the following motion directions:

Starting frame: [DESCRIPTION OF UPLOADED IMAGE - subject position, camera angle, lighting, environment]

Motion instructions:
1. Camera: [STATIC, PAN LEFT/RIGHT, DOLLY FORWARD/BACK, etc.]
2. Subject motion: [NONE, [SPECIFIC ACTION description]]
3. Environment motion: [WHAT SHOULD MOVE in the background - e.g., "clouds drift slowly," "light flickers," "smoke rises"]
4. End frame expectation: [WHAT THE IMAGE LOOKS LIKE after 10 seconds of motion - does the subject stay in frame? move to a specific position? does lighting change?]

Lighting: [CONSISTENCY NOTE - e.g., "maintain the same warm tungsten key light throughout, do not introduce new light sources"]
Motion intensity: [LOW/MEDIUM/HIGH --motion 1/2/3]

Preserve: [SPECIFIC ELEMENTS from the source image that must remain consistent - e.g., "the subject's face and clothing must remain unchanged throughout"]
```

---

## Frequently Asked Questions (FAQ)

**Q: What does the `--motion` parameter do?**
A: It controls how much movement happens.
*   `--motion 1`: Minimal movement (good for landscapes).
*   `--motion 2`: Moderate movement (good for walking or talking).
*   `--motion 3`: High movement (good for action scenes).

**Q: How do I keep the character's face consistent?**
A: Use the same reference image (from Midjourney or similar) as the starting frame for every shot. You can also use character reference parameters (`--cref`) if available.

**Q: Why does my video look like a photo with just a zoom?**
A: The prompt likely lacked specific action verbs. Instead of "A woman stands," try "A woman turns toward the window, light shifts across her face, dust motes drift."

**Q: How do I get slow motion?**
A: Gen-3 does not have a slow-motion button. Generate the video normally, then slow it down in video editing software like Premiere Pro or CapCut.

## Conclusion

Runway Gen-3 works best when you act like a director. Use the four-part structure: **Shot Size + Subject/Action + Camera Behavior + Environment**. Remember that specific verbs create better motion, and iteration is key to perfection.