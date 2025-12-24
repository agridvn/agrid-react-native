import React from 'react';
import { SurveyAppearance } from '@agrid/core';
import { Agrid } from '../agrid-rn';
export type AgridSurveyProviderProps = {
    /**
     * The default appearance for surveys when not specified in Agrid.
     */
    defaultSurveyAppearance?: SurveyAppearance;
    /**
     * If true, PosHog appearance will be ignored and defaultSurveyAppearance is always used.
     */
    overrideAppearanceWithDefault?: boolean;
    client?: Agrid;
    children: React.ReactNode;
};
export declare function AgridSurveyProvider(props: AgridSurveyProviderProps): JSX.Element;
