---
name: image-generator
description: >
  Generates images using Google's Nano Banana 2 model (gemini-3.1-flash-image-preview).
  Use this skill whenever the user asks to generate, create, or produce any image,
  illustration, visual, hero image, banner, background, or visual asset — including
  for websites, landing pages, and sections. Also trigger when the user mentions
  "Nano Banana", "Gemini image", image generation, or wants any kind of visual output.
  Default to landscape 16:9 at 1K resolution unless told otherwise. Save outputs
  to the "generated images" folder at the project root.
---

# Image Generator — Nano Banana 2

Generate images with Google's `gemini-3.1-flash-image-preview` model via the `google-genai` Python library.

## Requirements

- `GEMINI_API_KEY` environment variable must be set
- Dependency: `pip install google-genai` (install if not already present)

## Default settings

Always use these defaults unless the user explicitly asks for something different:

| Setting       | Default  | Reason                                      |
|---------------|----------|---------------------------------------------|
| Resolution    | `1K`     | High quality, good balance of speed/size    |
| Aspect ratio  | `16:9`   | Landscape — ideal for web hero/banner images|

## Supported options

**Resolutions** (`image_size`):
- `"512"` — low resolution, fast
- `"1K"` — standard/high resolution *(default)*
- `"2K"` — very high resolution
- `"4K"` — ultra high resolution

**Aspect ratios** (`aspect_ratio`):
- `"1:1"` — square
- `"4:3"` — standard
- `"16:9"` — landscape/wide *(default)*
- `"9:16"` — portrait/vertical
- `"21:9"` — ultra-wide cinematic

## Workflow

1. Identify the prompt, resolution (default `1K`), and aspect ratio (default `16:9`) from the user's request.
2. Derive a short `slug` from the prompt (lowercase, spaces → underscores, max 5 words) to name the output file.
3. Run the generation script (see below), passing the prompt, slug, resolution, and aspect ratio.
4. Confirm the saved file path to the user.

## Generation script

Use the bundled script at `scripts/generate_image.py`. Run it via bash:

```bash
python "scripts/generate_image.py" \
  --prompt "YOUR PROMPT HERE" \
  --slug "short_slug" \
  --size "1K" \
  --ratio "16:9" \
  --out-dir "generated images"
```

The script will:
- Create the `generated images` directory if needed
- Call the Gemini API and stream back the result
- Save the image as `generated images/<slug>_<timestamp>.<ext>`
- Print the final file path

If `google-genai` is not installed, install it first:
```bash
pip install google-genai
```

## Example interactions

**User:** "Generate a hero image of a futuristic city skyline at dusk"
→ prompt: `"futuristic city skyline at dusk"`, size: `1K`, ratio: `16:9`

**User:** "Make a square logo placeholder, low res"
→ prompt: `"logo placeholder"`, size: `512`, ratio: `1:1`

**User:** "I need a ultra-wide banner of an abstract tech pattern in 4K"
→ prompt: `"abstract tech pattern"`, size: `4K`, ratio: `21:9`
