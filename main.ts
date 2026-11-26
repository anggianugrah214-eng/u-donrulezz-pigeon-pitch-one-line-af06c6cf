// Pigeon Pitch, One Line — candidate drafts against the judge brief:
// Brief order: (1) a real elevator pitch from a city pigeon to investors for
// its startup, (2) a real joke that lands, not a mild pun, (3) original /
// surprising twist, (4) pigeon's voice + city life, (5) tight, <=200 chars.
//
// Candidates:
// 1. "Coo-ber Eats: we deliver crumbs to pigeons too lazy to peck the sidewalk."
//    - cute, but the joke is a mild brand pun; no investor ask.
// 2. "Investors, our couriers work for breadcrumbs — literally. Our burn rate is lunch."
//    - good crumbs joke, but no product: what is the startup actually selling?
// 3. "We built the original tweet: 140 characters, delivered by air, zero servers."
//    - surprising, but reads as a gag about Twitter, not a pitch with an ask.
// 4. "Airbnb for ledges: every windowsill in the city, rated by statue proximity."
//    - pigeon-specific and visual, but the payoff is a description, not a punchline.
// 5. "Drones need charging, GPS and permits. We have wings, crumbs and 5,000 years of routes."
//    - strong contrast, city voice, but no twist at the end; ends flat.
// 6. "Our delivery fleet poops on your competitors' statues. Marketing is included."
//    - funny and very pigeon, but the product is vague and slightly off-pitch.
// 7. "Investors: we eat your data after delivery, so your secrets stay secret. Fund us."
//    - the eating-the-message privacy twist is the best joke found so far,
//      but this draft wastes words and never says what is delivered or how.
// 8. "Fund PeckPal: pigeons carrying payments across the city, one crumb of commission."
//    - clear product, weak joke; "PeckPal" is exactly the mild pun the brief warns about.
// 9. "We know every shortcut, every bench and every dropped sandwich in this city."
//    - pure pigeon voice, but it is a boast, not a pitch and not a joke.
// 10. "Investors: for 5,000 years we've flown messages citywide, worked for literal
//     crumbs, and guaranteed privacy by eating every message after delivery."
//     - combines 2, 5 and 7: real pitch, real service, crumbs economics, and
//       the privacy-by-eating twist as the punchline. Needs a closing beat.
//
// First version (to be revised after a run):
// "Investors: for 5,000 years we've flown messages citywide, worked for literal
//  crumbs, and guaranteed privacy by eating every message after delivery. Coo-ld
//  you possibly say no to margins like that, my feathered friends?"
// Revision notes: the "coo-ld" pun is a dead pun and dilutes the eating joke;
// "my feathered friends" misaddresses the investors (they are humans with money);
// the closing should land a short, confident kicker instead of a second joke.

import { mkdirSync, writeFileSync } from "node:fs";

// Revised final: pun removed, closing replaced with two short confident
// beats — "Drones wish." (the modern rival, dismissed in two words) and
// "Fund the flock." (the actual investor ask, in pigeon voice).
const ENTRY =
  "Investors: for 5,000 years we've flown messages citywide, worked for literal crumbs, and guaranteed privacy by eating every message after delivery. Drones wish. Fund the flock.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
console.log("chars:", [...ENTRY].length);
