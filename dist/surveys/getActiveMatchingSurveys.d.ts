import { FeatureFlagValue, Survey } from '@agrid/core';
export declare function getActiveMatchingSurveys(surveys: Survey[], flags: Record<string, FeatureFlagValue>, seenSurveys: string[], activatedSurveys: ReadonlySet<string>): Survey[];
