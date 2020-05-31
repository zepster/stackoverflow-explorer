import {
  FetchAnswersFulfilled,
  FetchAnswersPending,
  LoadAnswers,
} from './types';

export const LOAD_ANSWERS = 'LOAD_ANSWERS';

export const FETCH_ANSWERS_FULFILLED = 'FETCH_ANSWERS_FULFILLED';
export const FETCH_ANSWERS_PENDING = 'FETCH_ANSWERS_PENDING';

export const answersActions = {
  loadAnswers: (questionId: number): LoadAnswers => ({
    type: LOAD_ANSWERS,
    payload: {
      questionId,
    },
  }),

  // request
  fetchAnswersPending: (): FetchAnswersPending => ({
    type: FETCH_ANSWERS_PENDING,
  }),

  fetchAnswersFulfilled: (items: []): FetchAnswersFulfilled => ({
    type: FETCH_ANSWERS_FULFILLED,
    payload: {
      items,
    },
  }),
};
