# @tradejs/strategy-grid

TradeJS strategy plugin providing `Grid`.

## Strategy overview

`Grid` is a trend-aware adaptive grid, not a fixed ladder around an arbitrary
price. Fast and slow EMA plus ATR regimes define direction and spacing; entries
use pullback recovery or breakout-retest continuation, with bounded levels and
exits for regime flips or volatility shocks.

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

Publishing is triggered by a GitHub release and delegated to the pinned
`TradeJS-Workflows@v1` reusable workflow.

Keywords: ai, claude, codex.
