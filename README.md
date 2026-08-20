# @tradejs/strategy-grid

TradeJS strategy plugin providing `Grid`.

## Strategy overview

`Grid` is a trend-aware adaptive grid, not a fixed ladder around an arbitrary
price. Fast and slow EMA plus ATR regimes define direction and spacing; entries
use pullback recovery or breakout-retest continuation, with bounded levels and
exits for regime flips or volatility shocks.

## Logic at a glance

![Grid strategy logic](https://raw.githubusercontent.com/TradeJS-Dev/TradeJS-Strategy-Grid/main/docs/strategy-logic.svg)

## Signal on an example chart

Unlike a fixed ladder, the illustrated grid follows the detected uptrend; a pullback into an ATR-spaced level and recovery releases the entry.

![Grid signal on an illustrative ticker chart](https://raw.githubusercontent.com/TradeJS-Dev/TradeJS-Strategy-Grid/main/docs/signal-example.svg)

The illustration is schematic, not market data. Exact thresholds, confirmation
rules, and risk parameters come from the active TradeJS strategy config.

## Install

```bash
yarn add @tradejs/strategy-grid
```

Register the package in `tradejs.config.ts`:

```ts
import { defineConfig } from "@tradejs/core/config";

export default defineConfig({
  strategies: ["@tradejs/strategy-grid"],
});
```

The package exports `strategyEntries` for the TradeJS plugin loader together
with its strategy definitions, manifests, default configs, and public AI/ML
adapters. Strategy implementation changes are released from this repository,
independently of the TradeJS engine.

## Development

```bash
yarn install --immutable
yarn checks
```

Publishing is beta-first and delegated to the pinned
`TradeJS-Workflows@v1` reusable workflow. A relevant push publishes a unique
prerelease and moves the npm `beta` tag only after the production-like Project
image passes. The current verified beta is promoted to one stable `latest`
release by the weekly automation; production never consumes prereleases.

Keywords: ai, claude, codex.

## Runtime host contract

All `@tradejs/*` runtime packages are peer dependencies. The consuming TradeJS Project owns their exact installed versions and package manifest, so this package never loads a hidden nested engine, types package, indicator package, or Strategy Kit. Repository builds use matching dev dependencies only.
