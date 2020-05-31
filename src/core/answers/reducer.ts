import { FETCH_ANSWERS_FULFILLED, FETCH_ANSWERS_PENDING } from './actions';
import { AnswerActionTypes, IAnswersState } from './types';

const initialState: IAnswersState = {
  items: [],
  isLoading: false,
};

export const answersReducer = (
  state = initialState,
  action: AnswerActionTypes,
): IAnswersState => {
  switch (action.type) {
    case FETCH_ANSWERS_FULFILLED:
      return {
        ...state,
        items: action.payload.items,
        isLoading: false,
      };
    case FETCH_ANSWERS_PENDING:
      return {
        ...state,
        isLoading: true,
        items: [],
      };
    default:
      return state;
  }
};
