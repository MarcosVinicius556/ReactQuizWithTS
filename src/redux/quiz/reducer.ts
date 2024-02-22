/* eslint-disable @typescript-eslint/no-explicit-any */
import { IQuizTypes } from "./actionTypes";
import { QuizActions, IQuizState } from "./types";
import { IQuestion } from "../../interfaces/Question";
import { GameStage } from "../../enums/GameStage";


const INITIAL_APP_STATE: IQuizState = {
    gameStage: null,
    questions: [],
    currentQuestion: 0,
    score: 0,
    isAnswered: false,
    subject: 'TypeScript',
    loading: false,
    error: null
}

const quizReducer = (state: IQuizState = INITIAL_APP_STATE, action: QuizActions) => {
    switch(action.type) {
        case IQuizTypes.START_GAME:{
                console.log('Iniciou o jogo');
                
                return { 
                    ...state,
                    gameStage: GameStage.START,
                    currentQuestion: 0,
                    score: 0,
                    isAnswered: false,
                    loading: false,
                    error: null
                }
            }
        case IQuizTypes.NEXT_QUESTION: {
                console.log('Avançou 1 questão');
                let nextQuestion = state.currentQuestion;
                let endgame = false;

                nextQuestion += 1;
                if(!state.questions[nextQuestion]){
                    endgame = true;
                } 

                return {
                    ...state,
                    currentQuestion: nextQuestion - 1, //subtrai um para manter correto com o array....
                    gameStage: endgame ? GameStage.END : GameStage.PLAYING,
                    isAnswered: false,
                }
            }
        case IQuizTypes.VERIFY_ANSWER:{
                console.log('Verificando a resposta');

                if(state.isAnswered) return;

                const answer = action.payload.answer;
                const correctAnswer = action.payload.question.answer
                let correct = 0;

                if(answer === correctAnswer) correct = 1;

                return { 
                    ...state,
                    isAnswered: correctAnswer !== null,
                    score: state.score + correct
                }
            }
        case IQuizTypes.END_GAME:{
                console.log('Fim de jogo');
                return { 
                    ...state 
                }
            }
        case IQuizTypes.LOAD_QUESTIONS_REQUEST:{
                console.log('Buscando questões');
                return {
                    ...state,
                    loading: true
                }
            }
        case IQuizTypes.LOAD_QUESTIONS_SUCCESS:{
                console.log('Encontrado questões...');
                /**
                 * Reordena as questões
                 */
                let reorderedQuestions: IQuestion[] = [];

                if (action.payload.questions) {
                    reorderedQuestions = [...action.payload.questions];
                    reorderedQuestions = reorderedQuestions.sort(() => Math.random() - 0.5);

                    /**
                     * Reordena as opções de cada questão
                     */
                    reorderedQuestions = reorderedQuestions.map((question: IQuestion) => {
                        const updatedQuestion = { ...question };
                        updatedQuestion.options = [...updatedQuestion.options].sort(() => Math.random() - 0.5);
                        return updatedQuestion;
                    });
                }
                return { 
                    ...state,
                    questions: reorderedQuestions,
                    loading: false
                }
            }
        case IQuizTypes.LOAD_QUESTIONS_FAILURE:{
                console.log('Não foi encontrado nenhuma questão...');
                return { 
                    ...state,
                    error: action.payload.error,
                    loading: false
                }
            }
        default:
            return state;
    }
}

export default quizReducer;