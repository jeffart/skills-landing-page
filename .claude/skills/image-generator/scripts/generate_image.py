#!/usr/bin/env python3
"""
Image generator using Google Nano Banana 2 (gemini-3.1-flash-image-preview).
Saves output images to the specified directory.
"""

import argparse
import mimetypes
import os
import re
import sys
from datetime import datetime

from google import genai
from google.genai import types


def save_binary_file(file_path: str, data: bytes) -> None:
    with open(file_path, "wb") as f:
        f.write(data)
    print(f"Image saved to: {file_path}")


def slugify(text: str, max_words: int = 5) -> str:
    words = re.sub(r"[^\w\s]", "", text.lower()).split()
    return "_".join(words[:max_words])


def generate(prompt: str, slug: str, size: str, ratio: str, out_dir: str) -> None:
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("ERROR: GEMINI_API_KEY environment variable is not set.", file=sys.stderr)
        sys.exit(1)

    os.makedirs(out_dir, exist_ok=True)

    client = genai.Client(api_key=api_key)
    model = "gemini-3.1-flash-image-preview"

    contents = [
        types.Content(
            role="user",
            parts=[types.Part.from_text(text=prompt)],
        ),
    ]

    generate_content_config = types.GenerateContentConfig(
        thinking_config=types.ThinkingConfig(thinking_level="MINIMAL"),
        image_config=types.ImageConfig(
            aspect_ratio=ratio,
            image_size=size,
        ),
        response_modalities=["IMAGE", "TEXT"],
    )

    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    file_index = 0

    print(f"Generating image: prompt='{prompt}', size={size}, ratio={ratio}")

    for chunk in client.models.generate_content_stream(
        model=model,
        contents=contents,
        config=generate_content_config,
    ):
        if chunk.parts is None:
            continue

        part = chunk.parts[0]
        if part.inline_data and part.inline_data.data:
            inline_data = part.inline_data
            ext = mimetypes.guess_extension(inline_data.mime_type) or ".png"
            # .jpe is the mimetypes default for jpeg — normalize it
            if ext == ".jpe":
                ext = ".jpg"
            file_name = f"{slug}_{timestamp}_{file_index}{ext}" if file_index > 0 else f"{slug}_{timestamp}{ext}"
            file_path = os.path.join(out_dir, file_name)
            save_binary_file(file_path, inline_data.data)
            file_index += 1
        else:
            if text := getattr(chunk, "text", None):
                print(text)


def main():
    parser = argparse.ArgumentParser(description="Generate images with Nano Banana 2")
    parser.add_argument("--prompt", required=True, help="Text prompt for image generation")
    parser.add_argument("--slug", default=None, help="Short file name slug (auto-derived from prompt if omitted)")
    parser.add_argument("--size", default="1K", choices=["512", "1K", "2K", "4K"], help="Image resolution (default: 1K)")
    parser.add_argument("--ratio", default="16:9", choices=["1:1", "4:3", "16:9", "9:16", "21:9"], help="Aspect ratio (default: 16:9)")
    parser.add_argument("--out-dir", default="generated images", help="Output directory (default: 'generated images')")

    args = parser.parse_args()
    slug = args.slug or slugify(args.prompt)

    generate(
        prompt=args.prompt,
        slug=slug,
        size=args.size,
        ratio=args.ratio,
        out_dir=args.out_dir,
    )


if __name__ == "__main__":
    main()
