import { all } from 'redux-saga/effects';

import { questionSagas } from './questions';
import { answersSagas } from './answers';

export default function* sagas() {
  yield all([...questionSagas, ...answersSagas]);
}
