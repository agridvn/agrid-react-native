import { JsonType, FeatureFlagValue } from '@agrid/core';
import { Agrid } from '../agrid-rn';
export declare function useFeatureFlag(flag: string, client?: Agrid): FeatureFlagValue | undefined;
export type FeatureFlagWithPayload = [FeatureFlagValue | undefined, JsonType | undefined];
export declare function useFeatureFlagWithPayload(flag: string, client?: Agrid): FeatureFlagWithPayload;
