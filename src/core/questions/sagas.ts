import {
  call, fork, takeLatest, put, delay, all,
} from 'redux-saga/effects';
import { questionService } from '../api/questionService';
import {
  questionActions,
  SEARCH_AUTHOR_QUESTIONS,
  SEARCH_QUESTIONS,
  SEARCH_TAG_QUESTIONS,
} from './actions';
import {
  IQuestion,
  SearchAuthorQuestionAction,
  SearchQuestionAction,
} from './types';

export function* searchQuestionByTitle({
  payload,
  meta,
}: SearchQuestionAction) {
  const { query } = payload;
  yield put(questionActions.fetchQuestionPending(meta));
  const { items }: { items: IQuestion[] } = yield all({
    items: call(questionService.searchByTitle, query),
    delay: delay(500),
  });
  yield put(questionActions.fetchQuestionFulfilled(items, meta));
}

export function* searchQuestionByAuthor({
  payload,
  meta,
}: SearchAuthorQuestionAction) {
  const { authorId } = payload;
  yield put(questionActions.fetchQuestionPending(meta));
  const { items }: { items: IQuestion[] } = yield all({
    items: call(questionService.searchByAuthor, authorId),
    delay: delay(900),
  });
  yield put(questionActions.fetchQuestionFulfilled(items, meta));
}

export function* searchQuestionByTag({ payload, meta }: any) {
  const { tag } = payload;
  yield put(questionActions.fetchQuestionPending(meta));
  const { items }: { items: IQuestion[] } = yield all({
    items: call(questionService.searchByTag, tag),
    delay: delay(900),
  });
  yield put(questionActions.fetchQuestionFulfilled(items, meta));
}

export function* watchSearchQuestion() {
  yield takeLatest(SEARCH_QUESTIONS, searchQuestionByTitle);
}

export function* watchSearchAuthorQuestion() {
  yield takeLatest(SEARCH_AUTHOR_QUESTIONS, searchQuestionByAuthor);
}

export function* watchSearchTagQuestion() {
  yield takeLatest(SEARCH_TAG_QUESTIONS, searchQuestionByTag);
}

export const questionSagas = [
  fork(watchSearchQuestion),
  fork(watchSearchAuthorQuestion),
  fork(watchSearchTagQuestion),
];
