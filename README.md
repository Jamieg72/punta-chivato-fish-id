# Punta Chivato Fish ID

Separate from the beach-launch/tide app. Static, mobile-friendly fish guide. The complete first version is in `index.html` (HTML, CSS and JavaScript). `render.yaml` configures a Render Static Site.

## Fish and photo slots
- Leopard Grouper — Cabrilla: two original photo slots; ID tentatively *Mycteroperca rosacea*; caught October 12, 2026, spearfishing. Same individual not confirmed.
- Snook — Róbalo: one slot; exact species and catch year not confirmed; September 22, shore casting artificial lure.
- Barred Pargo — Pargo mulato: one slot; ID tentatively *Hoplopagrus guentherii*; September 20, 2026, shore casting artificial lure. Partly visible silver fish remains unidentified.
- Mahi-mahi — Dorado: one slot; also searchable as dolphinfish / dolphin fish; June 21, 2026, feather-lure trolling.

Exact catch locations and sizes are unknown. No fabricated catch statistics. No added stock images.

## First-version functions
Search (English/Spanish/alternate names), appearance finder, eight browse categories, optional open-water filter, fish pages, and swipe galleries. The photo picker stores images in the individual browser's IndexedDB; it **does not upload them for everyone**. Original photos still need to be provided and deliberately published. Photos remain placeholders until then.

## Render hosting
1. On Render select **New > Static Site** and connect `Jamieg72/punta-chivato-fish-id`.
2. Choose branch `main`; publish directory `.`. Leave build command blank, or use `echo "No build required"`.
3. Deploy, wait for Render's own confirmation and then open the HTTPS `onrender.com` URL it assigns.

PWA manifest and service worker are included as a starting point. Test **Add to Home Screen** and airplane-mode offline access on the actual iPhone before calling either verified. Never assume a hosted live URL, installability, or offline support from this GitHub code alone.

## Species references
Smithsonian Tropical Eastern Pacific Fishes: https://biogeodb.stri.si.edu/sftep/ ; NOAA Pacific mahimahi: https://www.fisheries.noaa.gov/species/pacific-mahimahi. Reference species names are not photo verification.

When catch logging is added later, separately count fish, trips, and distinct anglers. Reports by method do not themselves measure success rates.

## Month-by-month reported catch history (version 1.1)

The **Months** tab shows reports by month, including the fish name, Spanish/local name, report date, fishing method, and lure where known. Empty months display "No catch reports added for this month yet." A single fish record with two photos is **not** counted as two fish. The snook's report date is September 22 with the year unknown; the month filter includes it but does not assign a year.

These are **reported observations**, not seasonal prevalence, success rates, or conclusions about fish abundance. As submissions accumulate, future seasonal reporting must distinguish catch-record counts, verified fish counts, unique fishing trips, and unique anglers. Data quality, fishing effort, and geographic coverage matter.

## Community sharing: prototype versus public posting

The **Share** tab now has a mobile-friendly form for species (including unverified/other), date, fishing method, bait/lure, optional fish count, general area, optional display name, notes, and up to five photos.

**This is a local-only draft feature.** Text is stored in browser localStorage; selected images are stored in IndexedDB where supported. It does **not** submit to any server, Render, GitHub, or public gallery. The data is device/browser-specific and may disappear if the browser clears storage. There is no real multi-user upload feature yet.

A production community sharing system needs server-side submission APIs, persistent database, object storage for images, spam and size limits, optional contact/attribution privacy controls, moderation, and a clear distinction between unreviewed species labels and verified IDs. A Render **Static Site** alone cannot receive or persist community uploads.

Attribution/name and general catch area should remain optional. Never publish precise locations from uploaded image metadata without contributor consent; strip EXIF location by default during public photo processing. Species review should not imply an angler or catch is verified if only a tentative ID was reported.

## Planned future feature: Seasons by month (do not build yet)

User requirement (October 2026): **Every catch photo must belong to a dated catch report and be retrievable by catch month**, so a future **Seasons** tab can show species caught in January–December and how they were caught. Preserve full catch date when known; derive month from that date rather than from upload date or image file timestamp. If year/day is unknown, record only the confirmed components without inventing a year. Photos of the same catch are grouped under one report, not counted as independent fish, trips or anglers. Track fish count, unique trip count, and distinct anglers separately when eventually supported, and never treat method reports as success rates. The Seasons tab and seasonal conclusions are **deferred** until sufficient real catch reports have accumulated. Existing month-view reports are a small sample, not evidence of normal/likely seasonal catches.
