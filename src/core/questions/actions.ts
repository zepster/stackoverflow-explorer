import {
  ActionMetaPropertyTarget,
  FetchQuestionFulfilled,
  FetchQuestionPending,
  IQuestion,
  SearchAuthorQuestionAction,
  SearchQuestionAction,
  SearchTagQuestionsAction,
} from './types';

export const SEARCH_QUESTIONS = 'SEARCH_QUESTIONS';
export const SEARCH_AUTHOR_QUESTIONS = 'SEARCH_AUTHOR_QUESTIONS';
export const SEARCH_TAG_QUESTIONS = 'SEARCH_TAG_QUESTIONS';

export const FETCH_QUESTION_FULFILLED = 'FETCH_QUESTION_FULFILLED';
export const FETCH_QUESTION_PENDING = 'FETCH_QUESTION_PENDING';

export const questionActions = {
  searchQuestions: (query: string): SearchQuestionAction => ({
    type: SEARCH_QUESTIONS,
    payload: {
      query,
    },
    meta: {
      container: 'items',
      progress: 'isLoading',
    },
  }),

  searchAuthorQuestions: (authorId: number): SearchAuthorQuestionAction => ({
    type: SEARCH_AUTHOR_QUESTIONS,
    payload: {
      authorId,
    },
    meta: {
      container: 'quickViewItems',
      progress: 'isLoadingQuickView',
    },
  }),

  searchTagQuestions: (tag: string): SearchTagQuestionsAction => ({
    type: SEARCH_TAG_QUESTIONS,
    payload: {
      tag,
    },
    meta: {
      container: 'quickViewItems',
      progress: 'isLoadingQuickView',
    },
  }),

  // request
  fetchQuestionPending: (
    meta: ActionMetaPropertyTarget,
  ): FetchQuestionPending => ({
    type: FETCH_QUESTION_PENDING,
    meta,
  }),

  fetchQuestionFulfilled: (
    items: IQuestion[],
    meta: ActionMetaPropertyTarget,
  ): FetchQuestionFulfilled => ({
    type: FETCH_QUESTION_FULFILLED,
    payload: {
      items,
    },
    meta,
  }),
};
