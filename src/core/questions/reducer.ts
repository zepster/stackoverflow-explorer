import { IQuestionState, QuestionActionTypes } from './types';
import { FETCH_QUESTION_FULFILLED, FETCH_QUESTION_PENDING } from './actions';

const initialState: IQuestionState = {
  items: [],
  quickViewItems: [],
  isLoading: false,
  isLoadingQuickView: false,
};

export const questionReducer = (
  state = initialState,
  action: QuestionActionTypes,
): IQuestionState => {
  switch (action.type) {
    case FETCH_QUESTION_FULFILLED:
      return {
        ...state,
        [action.meta.container]: action.payload.items,
        [action.meta.progress]: false,
      };
    case FETCH_QUESTION_PENDING:
      return {
        ...state,
        [action.meta.progress]: true,
      };
    default:
      return state;
  }
};
