import {
  FETCH_QUESTION_FULFILLED,
  FETCH_QUESTION_PENDING,
  SEARCH_AUTHOR_QUESTIONS,
  SEARCH_QUESTIONS,
  SEARCH_TAG_QUESTIONS,
} from './actions';

export interface IQuestion {
  userId: number;
  userName: string;
  title: string;
  answerCount: number;
  questionId: number;
  tags: string[];
}

export interface IQuestionState {
  items: IQuestion[];
  quickViewItems: IQuestion[];
  isLoading: boolean;
  isLoadingQuickView: boolean;
}

export interface ActionMetaPropertyTarget {
  container: string;
  progress: string;
}

export interface SearchQuestionAction {
  type: typeof SEARCH_QUESTIONS;
  payload: { query: string };
  meta: ActionMetaPropertyTarget;
}

export interface SearchAuthorQuestionAction {
  type: typeof SEARCH_AUTHOR_QUESTIONS;
  payload: { authorId: number };
  meta: ActionMetaPropertyTarget;
}

export interface SearchTagQuestionsAction {
  type: typeof SEARCH_TAG_QUESTIONS;
  payload: { tag: string };
  meta: ActionMetaPropertyTarget;
}

export interface FetchQuestionPending {
  type: typeof FETCH_QUESTION_PENDING;
  meta: ActionMetaPropertyTarget;
}

export interface FetchQuestionFulfilled {
  type: typeof FETCH_QUESTION_FULFILLED;
  payload: { items: IQuestion[] };
  meta: ActionMetaPropertyTarget;
}

export type QuestionActionTypes =
  | FetchQuestionFulfilled
  | FetchQuestionPending
  | SearchQuestionAction
  | SearchAuthorQuestionAction
  | SearchTagQuestionsAction;
