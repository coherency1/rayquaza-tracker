# 🐉 Rayquaza Collection Tracker

A lightweight static web app for tracking your Rayquaza Pokémon TCG collection at card shows and conventions. Live TCGPlayer market prices, persistent checkboxes, mobile-first.

---

## Features

- **43 unique English Rayquaza cards** across every era (2003–SWSH)
- **Live TCGPlayer market prices** via the Pokémon TCG API
- **Persistent checklist** — checkboxes survive between sessions via localStorage
- **Collection value** — totals up owned cards with known prices
- **Missing filter** — at a show, one tap to see only what you need
- **Card images** fetched and cached from the API
- **Direct TCGPlayer links** on each card
- **No build step, no framework, no server** — 3 files, drop into S3

---

## Stack

| Layer | Choice |
|-------|--------|
| HTML | Semantic, single `index.html` shell |
| CSS | Custom properties, no framework |
| JS | Vanilla ES6+, no dependencies |
| Fonts | Bebas Neue + DM Mono + DM Sans (Google Fonts CDN) |
| Prices | [Pokémon TCG API](https://pokemontcg.io/) — free, no key required |
| Storage | `localStorage` for owned state, prices cache, and images |

---

## Deployment (AWS S3)

### 1. Upload files

```
index.html
app.js
style.css
```

### 2. Enable static website hosting

In your S3 bucket → **Properties** → **Static website hosting** → Enable  
Set **Index document** to `index.html`

### 3. Set bucket policy (public read)

In **Permissions** → **Bucket policy**, paste:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
    }
  ]
}
```

Replace `YOUR-BUCKET-NAME` with your actual bucket name.

### 4. Access your app

```
http://your-bucket-name.s3-website-[region].amazonaws.com
```

> **Free tier note:** S3 static hosting is free within AWS Free Tier limits (5GB storage, 20K GET requests/month). This app is 24KB — you'd need serious traffic to exceed limits.

---

## How It Works

### Prices

On first load the app auto-fetches all 43 cards from `api.pokemontcg.io/v2/cards/{id}` sequentially with an 80ms delay between requests to respect rate limits. Prices, images, and TCGPlayer URLs are cached in `localStorage` so subsequent visits are instant. Hit **↻ Prices** anytime to force a refresh.

The API returns TCGPlayer market price broken down by print type. The app checks in this order: `holofoil → normal → 1stEditionHolofoil → reverseHolofoil`.

### Owned State

Tapping a card toggles it owned/unowned. State is written to `localStorage` immediately — no save button needed. Works offline after the first price fetch.

### localStorage Keys

| Key | Contents |
|-----|----------|
| `rq-owned` | `{ [cardId]: boolean }` |
| `rq-prices` | `{ [cardId]: { market, url, state } }` |
| `rq-images` | `{ [cardId]: imageUrl }` |

---

## Card List

| # | Card | Set | Era |
|---|------|-----|-----|
| 1 | Rayquaza | POP Series 1 | Early Era |
| 2 | Rayquaza | EX Deoxys | Early Era |
| 3 | Rayquaza | EX Emerald | Early Era |
| 4 | Rayquaza δ | EX Delta Species | Early Era |
| 5 | Rayquaza δ (Water) | EX Holon Phantoms | Early Era |
| 6 | Rayquaza δ (Fire) | EX Holon Phantoms | Early Era |
| 7 | Rayquaza ex | EX Dragon | Old ex Era |
| 8 | Rayquaza ex | EX Deoxys | Old ex Era |
| 9 | Rayquaza ex δ | EX Dragon Frontiers | Old ex Era |
| 10 | Rayquaza ex | Nintendo Black Star Promos | Old ex Era |
| 11 | Rayquaza ☆ | EX Deoxys | Old ex Era |
| 12 | Rayquaza | Legends Awakened | D&P Era |
| 13 | Rayquaza C | Supreme Victors | Platinum Era |
| 14 | Rayquaza C LV.X | Supreme Victors | Platinum Era |
| 15 | Rayquaza | Call of Legends | HGSS Era |
| 16 | Rayquaza & Deoxys LEGEND (Top) | Undaunted | HGSS Era |
| 17 | Rayquaza & Deoxys LEGEND (Bottom) | Undaunted | HGSS Era |
| 18 | Rayquaza | Dragons Exalted | BW Era |
| 19 | Rayquaza-EX | Dragons Exalted | BW Era |
| 20 | Rayquaza-EX | BW Black Star Promos | BW Era |
| 21 | Rayquaza | XY Black Star Promos (XY64) | XY Era |
| 22 | Rayquaza | XY Black Star Promos (XY141) | XY Era |
| 23 | Rayquaza-EX (Dragon) | Roaring Skies | XY Era |
| 24 | Rayquaza-EX (Colorless) | Roaring Skies | XY Era |
| 25 | Rayquaza-EX | XY Black Star Promos (XY66) | XY Era |
| 26 | Shiny Rayquaza-EX | XY Black Star Promos (XY69) | XY Era |
| 27 | M Rayquaza-EX (Dragon) | Roaring Skies | XY Era |
| 28 | M Rayquaza-EX (Colorless) | Roaring Skies | XY Era |
| 29 | M Rayquaza-EX (Shiny) | Ancient Origins | XY Era |
| 30 | Rayquaza | Guardians Rising | SM Era |
| 31 | Shining Rayquaza | Shining Legends | SM Era |
| 32 | Rayquaza-GX | Celestial Storm | SM Era |
| 33 | Rayquaza | SWSH Black Star Promos | SWSH Era |
| 34 | Rayquaza | Vivid Voltage | SWSH Era |
| 35 | M Rayquaza-EX (Celebrations) | Celebrations | SWSH Era |
| 36 | Rayquaza V | Evolving Skies | SWSH Era |
| 37 | Rayquaza V (Full Art) | Evolving Skies | SWSH Era |
| 38 | Rayquaza V | SWSH Black Star Promos | SWSH Era |
| 39 | Rayquaza V | Crown Zenith | SWSH Era |
| 40 | Rayquaza VMAX | Evolving Skies | SWSH Era |
| 41 | Rayquaza VMAX (TG) | Silver Tempest | SWSH Era |
| 42 | Rayquaza VMAX | Crown Zenith | SWSH Era |
| 43 | Rayquaza VMAX (Alt Art) | Crown Zenith | SWSH Era |

---

## Excluded Cards

The following were intentionally left out:

- **Jumbo/Oversized cards** — not standard collectibles
- **Japanese-only prints** — no English release
- **Championship/tournament promos** — not obtainable at card shows
- **`_____'s Rayquaza`** — Japanese PLAY promo only
- **Sky's Rayquaza** — Japanese Movie VS Pack only
- **Full Art / Secret Rare duplicates** — same card design, collapsed into one entry

---

## Local Development

No build step needed. Just open `index.html` in a browser, or serve locally:

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

> Prices won't load over `file://` due to CORS — use a local server.

---

## Data Source

Card list sourced from [Bulbapedia — Rayquaza (TCG)](https://bulbapedia.bulbagarden.net/wiki/Rayquaza_(TCG)).  
Prices and images from [Pokémon TCG API](https://pokemontcg.io/) (community project, not affiliated with Nintendo/TPCi).
