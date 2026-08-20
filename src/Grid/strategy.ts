import { createStrategyConfigParser } from "@tradejs/strategy-kit/config";
import type { ValidatedStrategyRegistryEntry } from "@tradejs/strategy-kit/config";
import { config as DEFAULT_CONFIG, GridConfig } from "./config";
import { createGridCore } from "./core";
import { gridManifest } from "./manifest";

export const GridStrategyDefinition: ValidatedStrategyRegistryEntry<GridConfig> =
  {
    defaults: DEFAULT_CONFIG,
    parseConfig: createStrategyConfigParser({
      strategyName: "Grid",
      defaults: DEFAULT_CONFIG,
    }),
    createCore: createGridCore,
    manifest: gridManifest,
  };
