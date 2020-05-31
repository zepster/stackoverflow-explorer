import { combineReducers } from 'redux';
import { questionReducer } from './questions';
import { answersReducer } from './answers';

export const reduxApp = combineReducers({
  question: questionReducer,
  answers: answersReducer,
});

export type IAppState = ReturnType<typeof reduxApp>;
