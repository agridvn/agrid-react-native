import { StyleProp, ViewStyle } from 'react-native';
import { SurveyAppearanceTheme } from '../surveys-utils';
import { Survey } from '@agrid/core';
import { Agrid } from '../../agrid-rn';
export declare const sendSurveyShownEvent: (survey: Survey, agrid: Agrid) => void;
export declare const sendSurveyEvent: (responses: Record<string, string | number | string[] | null> | undefined, survey: Survey, agrid: Agrid) => void;
export declare const dismissedSurveyEvent: (survey: Survey, agrid: Agrid) => void;
export declare function Questions({ survey, appearance, styleOverrides, onSubmit, }: {
    survey: Survey;
    appearance: SurveyAppearanceTheme;
    styleOverrides?: StyleProp<ViewStyle>;
    onSubmit: () => void;
}): JSX.Element;
