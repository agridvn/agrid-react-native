import type { Agrid } from '../agrid-rn';
import { PostHogFlagsResponse } from '@agrid/core';
export declare function useFeatureFlags(client?: Agrid): PostHogFlagsResponse['featureFlags'] | undefined;
