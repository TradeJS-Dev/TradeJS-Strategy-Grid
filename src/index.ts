import { defineStrategyPlugin } from "@tradejs/core/config";
import type { ValidatedStrategyRegistryEntry } from "@tradejs/strategy-kit/config";
import type { StrategyConfig } from "@tradejs/types";
import { config as gridDefaultConfig } from "./Grid/config";
import { GridStrategyDefinition } from "./Grid/strategy";

export const strategyEntries: ValidatedStrategyRegistryEntry<any>[] = [
  GridStrategyDefinition,
];

const defaultConfigs: Record<string, StrategyConfig> = {
  Grid: gridDefaultConfig,
};

export const getBuiltInStrategyDefaultConfig = (
  strategyName: string,
): StrategyConfig | undefined => defaultConfigs[strategyName];

export { GridStrategyDefinition } from "./Grid/strategy";
export { gridDefaultConfig };
export { gridManifest } from "./Grid/manifest";
export { gridAiAdapter } from "./Grid/adapters/ai";

export default defineStrategyPlugin({ strategyEntries });
