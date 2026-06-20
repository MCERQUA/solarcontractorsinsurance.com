#!/usr/bin/env bash
# Generate all images for solarcontractorsinsurance.com via HuggingFace FLUX.1-schnell
# Robust: retries up to 4 times, verifies each is a valid image >= 30KB
set -uo pipefail

OUT="/workspace/Websites/solarcontractorsinsurance.com/public/images"
mkdir -p "$OUT"

gen() {
  local fname="$1"; shift
  local prompt="$1"; shift
  local steps="${1:-4}"; shift || true
  local w="${1:-1024}"; shift || true
  local h="${1:-1024}"; shift || true
  local dest="$OUT/$fname"
  local attempt=0
  while [ $attempt -lt 4 ]; do
    attempt=$((attempt+1))
    echo "[$fname] attempt $attempt (steps=$steps ${w}x${h})..."
    curl -s --max-time 200 \
      https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell \
      -H "Authorization: Bearer $HF_TOKEN" \
      -H "Content-Type: application/json" \
      -d "$(jq -nc --arg p "$prompt" --argjson s "$steps" --argjson w "$w" --argjson h "$h" '{inputs:$p, parameters:{num_inference_steps:$s, width:$w, height:$h}}')" \
      -o "$dest"
    local ftype; ftype=$(file -b "$dest" 2>/dev/null)
    local sz; sz=$(stat -c%s "$dest" 2>/dev/null || echo 0)
    if echo "$ftype" | grep -qiE "image|jpeg|png" && [ "$sz" -ge 30000 ]; then
      echo "[$fname] OK ($sz bytes, $ftype)"
      return 0
    fi
    echo "[$fname] FAIL (size=$sz, type=$ftype)"
    if echo "$ftype" | grep -qi "text\|json"; then head -c 200 "$dest"; echo ""; fi
    sleep 4
  done
  echo "[$fname] GAVE UP after $attempt attempts"
  return 1
}

# === 12 images — SOLAR CONTRACTOR insurance ===

gen "hero.jpg" \
  "Photorealistic cinematic wide shot of a solar installation crew mounting solar panels on a large residential or commercial rooftop: workers in hard hats and safety vests on a sun-drenched rooftop with rows of gleaming solar panels, blue sky and sunlight, bright energetic atmosphere, professional commercial photography, no text, no watermark" 4

gen "coverage.jpg" \
  "Photorealistic elevated aerial view of a large commercial rooftop covered with solar panels and a solar installation crew completing the installation, blue sky with few clouds, bright sunlight, professional drone photography perspective, no text" 4

gen "about.jpg" \
  "Photorealistic authentic portrait of a confident solar contractor owner standing on a rooftop with installed solar panels in background, hard hat in hand, bright sunlight, warm genuine expression, professional commercial photography, no text" 4

gen "og-image.jpg" \
  "Photorealistic wide cinematic view of solar panels on rooftops in a sunny residential neighborhood with a solar installation crew at work, bright blue sky, clean renewable energy atmosphere, professional commercial photography, no text, no watermark" 4 1216 640

gen "general-liability.jpg" \
  "Photorealistic photo of a solar installation crew on a residential rooftop: workers in hard hats and safety gear carefully mounting solar panels in bright sunlight, safety harnesses visible, professional rooftop solar installation photography, no text" 4

gen "workers-compensation.jpg" \
  "Photorealistic photo of solar installation workers in safety vests and hard hats working on a rooftop solar array installation, proper fall protection equipment visible, clear blue sky, professional construction safety photography, no text" 4

gen "installation-floater.jpg" \
  "Photorealistic photo of solar panels and inverter equipment staged at a job site ready for installation: rows of solar panels in packaging and unpackaged, inverter boxes, racking components, organized staging area in bright sunlight, professional product photography, no text" 4

gen "commercial-auto.jpg" \
  "Photorealistic photo of a fleet of clean solar contractor vans and trucks with roof racks and solar panel carriers parked at a solar installation site, bright sunny day, professional commercial vehicle photography, no text" 4

gen "professional-liability.jpg" \
  "Photorealistic photo of a solar system designer and contractor reviewing a solar panel layout proposal and energy production estimates on a laptop at a modern office desk, professional business attire, clean bright environment, professional commercial photography, no text" 4

gen "umbrella.jpg" \
  "Photorealistic photo of a professional business meeting between a solar contractor and insurance advisor reviewing a commercial solar project contract in a modern glass office, bright natural light, business attire, clean corporate environment, professional photography, no text" 4

gen "tools-equipment.jpg" \
  "Photorealistic photo of specialized solar installation tools and equipment: multimeter, solar panel tester, drill, wire connectors, and specialized solar installation tools on a clean work surface in bright light, professional product photography, no text" 4

gen "bonds.jpg" \
  "Photorealistic photo of a solar contractor signing official contractor license and surety bond documents on a desk, professional business attire, clean modern office environment, official paperwork, commercial photography, no text" 4

echo "=== ALL IMAGE GENERATION ATTEMPTS COMPLETE ==="
ls -la "$OUT"
