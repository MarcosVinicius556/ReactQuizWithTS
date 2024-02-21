/* eslint-disable @typescript-eslint/no-explicit-any */
import { put } from "redux-saga/effects";
import data from "../../data/AppQuestions";
import { IQuestion } from "../../interfaces/Question";
import {
    loadQuestionsSuccess,
    loadQuestionsFailures
} from "./actions";

export function* loadQuestionsSaga() {
    const questions: IQuestion[] = data;

    try {
        yield put(loadQuestionsSuccess({
            questions
        }));
    } catch (error: any) {
        yield put(loadQuestionsFailures({
            error: error.message
        }));
    }

}