import { GameStage } from "../../enums/GameStage";
import { IQuestion } from "../../interfaces/Question";
import { IQuizTypes } from "./actionTypes";

export interface IQuizState {
    gameStage: GameStage | null,
    questions: IQuestion[] | null,
    currentQuestion: number,
    score: number,
    isAnswered: boolean,
    subject: string | null,
    loading: boolean,
    error: string | null
}

export interface StartGamePayload { }

export interface NextQuestionPayload { }

export interface EndGamePayload { }

export interface LoadQuestionPayload { }

export interface LoadQuestionSuccessPayload { 
    questions: IQuestion[] | null;
}

export interface LoadQuestionFailurePayload { 
    error: string | null;
}

export interface StartGame {
    type: typeof IQuizTypes.START_GAME;
    payload: StartGamePayload;
}

export interface NextQuestion {
    type: typeof IQuizTypes.NEXT_QUESTION;
    payload: NextQuestionPayload;
}

export interface EndGame {
    type: typeof IQuizTypes.END_GAME;
    payload: EndGamePayload;
}

export interface LoadQuestionsRequest {
    type: typeof IQuizTypes.LOAD_QUESTIONS_REQUEST;
    payload: LoadQuestionPayload;
}

export interface LoadQuestionsSuccess {
    type: typeof IQuizTypes.LOAD_QUESTIONS_SUCCESS;
    payload: LoadQuestionSuccessPayload;
}

export interface LoadQuestionsFailure {
    type: typeof IQuizTypes.LOAD_QUESTIONS_FAILURE;
    payload: LoadQuestionFailurePayload;
}

export type QuizActions = 
                | StartGame
                | NextQuestion
                | EndGame
                | LoadQuestionsRequest 
                | LoadQuestionsSuccess 
                | LoadQuestionsFailure;
