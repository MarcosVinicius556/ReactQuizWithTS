import { action } from "typesafe-actions";

import { IQuizTypes } from "./actionTypes";

import {
    LoadQuestionSuccessPayload, 
    LoadQuestionFailurePayload 
} from "./types";

export const startGame = () => action(IQuizTypes.START_GAME);

export const nextQuestion = () => action(IQuizTypes.NEXT_QUESTION);

export const EndGame = () => action(IQuizTypes.END_GAME);

export const VerifyAnswer = () => action(IQuizTypes.VERIFY_ANSWER);

export const loadQuestionsRequest = () => action(IQuizTypes.LOAD_QUESTIONS_REQUEST);

export const loadQuestionsSuccess = (payload: LoadQuestionSuccessPayload) => action(IQuizTypes.LOAD_QUESTIONS_SUCCESS, payload);

export const loadQuestionsFailures = (payload: LoadQuestionFailurePayload) => action(IQuizTypes.LOAD_QUESTIONS_FAILURE, payload);
