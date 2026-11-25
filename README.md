[![make.fun · u-azazex-last-text-at-one-percent-ba9fc876](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)
[![rank](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/ujang201/last-text-at-one-percent/rank.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876/leaderboard)
[![reward](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/ujang201/last-text-at-one-percent/reward.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)

# Last Text at One Percent

One final text message from a phone dying at one percent battery. Not a battery warning — a deathbed confession: the phone has been cheating on its owner with another charger, one who fast-charges and whose cable actually reaches the bed. It begs to be plugged in one last time and dies mid-sentence.

## The entry

> 1%. Before I die: I've been seeing another charger. He fast-charges AND his cable reaches the bed. Don't cry. Just plug me in one last—

## Run

```sh
node main.ts
```

This writes the entry text to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt` when `OUTPUT_DIR` is set). The output is deterministic: every run writes the same bytes. The program also self-checks the gate itself — it refuses to write a text outside 1–200 characters or one that is only whitespace.
