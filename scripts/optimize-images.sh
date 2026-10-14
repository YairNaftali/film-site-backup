#!/bin/sh
# Regenerates the web-sized media in public/images/ from the full-resolution
# files in originals/ (which are kept in the repo but never published).
# Only images referenced from src/ are processed.
# Requires ImageMagick (magick) and ffmpeg.   Run: npm run images
set -eu
cd "$(dirname "$0")/.."
out=public/images
mkdir -p "$out/thumb" "$out/full"

# size  resize-geometry  quality   (thumb: short edge 900px, full: long edge 2000px; never upscaled)
convert() {
  [ "$4" -nt "$1" ] || magick "$1" -auto-orient -resize "$2" +profile '!icc,*' -quality "$3" "$4"
}

grep -rhoE "/images/[^'\"]+\.(jpe?g|png)" src | sort -u | while IFS= read -r ref; do
  name=${ref#/images/}
  [ -f "originals/$name" ] || { echo "missing original: originals/$name" >&2; exit 1; }
  convert "originals/$name" '900x900^>' 78 "$out/thumb/${name%.*}.webp"
  convert "originals/$name" '2000x2000>' 80 "$out/full/${name%.*}.webp"
done

# Golem hero loop: 39 MB GIF -> H.264 video + first-frame poster
[ "$out/golem.mp4" -nt originals/golem.gif ] || ffmpeg -v error -y -i originals/golem.gif \
  -an -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p -movflags +faststart \
  -vf 'scale=trunc(iw/2)*2:trunc(ih/2)*2' "$out/golem.mp4"
[ "$out/golem-poster.webp" -nt originals/golem.gif ] || magick 'originals/golem.gif[0]' -quality 80 "$out/golem-poster.webp"

# Social sharing preview (must be JPEG for broad crawler support)
[ public/og.jpg -nt originals/beddark.jpeg ] || magick originals/beddark.jpeg -auto-orient \
  -resize '1200x630^' -gravity center -extent 1200x630 -strip -quality 82 public/og.jpg
