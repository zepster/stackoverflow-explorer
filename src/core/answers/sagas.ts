import {
  call, fork, takeLatest, put, delay, all,
} from 'redux-saga/effects';
import { answerService } from '../api/answerService';
import { answersActions, LOAD_ANSWERS } from './actions';
import { LoadAnswers } from './types';

export function* loadAnswers({ payload }: LoadAnswers) {
  const { questionId } = payload;
  yield put(answersActions.fetchAnswersPending());
  const { items } = yield all({
    items: call(answerService.loadAnswers, questionId),
    delay: delay(500),
  });
  yield put(answersActions.fetchAnswersFulfilled(items));
}

export function* watchLoadAnswers() {
  yield takeLatest(LOAD_ANSWERS, loadAnswers);
}

export const answersSagas = [fork(watchLoadAnswers)];
