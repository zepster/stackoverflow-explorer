import {
  FETCH_ANSWERS_FULFILLED,
  FETCH_ANSWERS_PENDING,
  LOAD_ANSWERS,
} from './actions';

export interface IAnswer {
  userName: string;
  title: string;
  body: string;
  score: number;
  isAccepted: boolean;
}

export interface IAnswersState {
  items: IAnswer[];
  isLoading: boolean;
}

export interface LoadAnswers {
  type: typeof LOAD_ANSWERS;
  payload: { questionId: number };
}

export interface FetchAnswersPending {
  type: typeof FETCH_ANSWERS_PENDING;
}

export interface FetchAnswersFulfilled {
  type: typeof FETCH_ANSWERS_FULFILLED;
  payload: { items: IAnswer[] };
}

export type AnswerActionTypes =
  | LoadAnswers
  | FetchAnswersFulfilled
  | FetchAnswersPending;
