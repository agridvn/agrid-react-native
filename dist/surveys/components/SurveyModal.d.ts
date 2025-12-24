import { SurveyAppearanceTheme } from '../surveys-utils';
import { Survey } from '@agrid/core';
export type SurveyModalProps = {
    survey: Survey;
    appearance: SurveyAppearanceTheme;
    onShow: () => void;
    onClose: (submitted: boolean) => void;
};
export declare function SurveyModal(props: SurveyModalProps): JSX.Element | null;
