import { createSelector } from "reselect";

import { QuizState } from '../rootReducer';

const getGameStage = (state: QuizState) => state.quiz?.gameStage;
const getQuestions = (state: QuizState) => state.quiz?.questions;
const getCurrentQuestion = (state: QuizState) => state.quiz?.currentQuestion;
const getScore = (state: QuizState) => state.quiz?.score;
const isAnswered = (state: QuizState) => state.quiz?.isAnswered;
const getSubject = (state: QuizState) => state.quiz?.subject;
const getLoading = (state: QuizState) => state.quiz?.loading;
const getError = (state: QuizState) => state.quiz?.error;

export const getGameStageSelector = createSelector(getGameStage, (gameStage) => gameStage);
export const getQuestionsSelector = createSelector(getQuestions, (questions) => questions);
export const getCurrentQuestionSelector = createSelector(getCurrentQuestion, (currentQuestion) => currentQuestion);
export const getScoreSelector = createSelector(getScore, (score) => score);
export const isAnsweredSelector = createSelector(isAnswered, (isAnswered) => isAnswered);
export const getSubjectSelector = createSelector(getSubject, (subject) => subject);
export const getLoadingSelector = createSelector(getLoading, (loading) => loading);
export const getErrorSelector = createSelector(getError, (error) => error);
