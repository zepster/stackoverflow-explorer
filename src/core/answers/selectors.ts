import { IAnswer } from './types';
import { IAppState } from '../reducers';

export const getAnswers = (state: IAppState): [IAnswer[], boolean] => [
  state.answers.items,
  state.answers.isLoading,
];
