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
