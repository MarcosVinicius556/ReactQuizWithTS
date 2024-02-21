import { action } from "typesafe-actions";

import { IQuizTypes } from "./actionTypes";

import {
    StartGamePayload,
    NextQuestionPayload, 
    EndGamePayload, 
    LoadQuestionPayload, 
    LoadQuestionSuccessPayload, 
    LoadQuestionFailurePayload 
} from "./types";

export const startGame = (payload: StartGamePayload) => action(IQuizTypes.START_GAME, payload);

export const nextQuestion = (payload: NextQuestionPayload) => action(IQuizTypes.NEXT_QUESTION, payload);

export const EndGame = (payload: EndGamePayload) => action(IQuizTypes.END_GAME, payload);

export const loadQuestionsRequest = (payload: LoadQuestionPayload) => action(IQuizTypes.LOAD_QUESTIONS_REQUEST, payload);

export const loadQuestionsSuccess = (payload: LoadQuestionSuccessPayload) => action(IQuizTypes.LOAD_QUESTIONS_SUCCESS, payload);

export const loadQuestionsFailures = (payload: LoadQuestionFailurePayload) => action(IQuizTypes.LOAD_QUESTIONS_FAILURE, payload);
