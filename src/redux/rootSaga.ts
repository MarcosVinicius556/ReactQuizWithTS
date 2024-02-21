/* eslint-disable @typescript-eslint/no-explicit-any */
import { all, takeLatest } from 'redux-saga/effects';

import { IQuizTypes } from './quiz/actionTypes';

import { loadQuestionsSaga } from './quiz/saga';

export default function* rootSaga(): any {
    return yield all([
        takeLatest(IQuizTypes.LOAD_QUESTIONS_REQUEST, loadQuestionsSaga)
    ]);
}