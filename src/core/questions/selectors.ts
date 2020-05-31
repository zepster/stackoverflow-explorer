import { IQuestion } from './types';
import { IAppState } from '../reducers';

export const getQuestions = (state: IAppState): [IQuestion[], boolean] => [
  state.question.items,
  state.question.isLoading,
];
export const getQuickQuestions = (state: IAppState): [IQuestion[], boolean] => [
  state.question.quickViewItems,
  state.question.isLoadingQuickView,
];
