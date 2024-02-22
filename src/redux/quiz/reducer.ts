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
    subject: null,
    loading: false,
    error: null
}

const quizReducer = (state: IQuizState = INITIAL_APP_STATE, action: QuizActions) => {
    switch(action.type) {
        case IQuizTypes.START_GAME:{
                console.log('Iniciou o jogo');
                
                /**
                 * Reordena as questões
                 */
                let reorderedQuestions = state.questions;
                if(state.questions) {
                    reorderedQuestions = state.questions.sort(() => {
                        return Math.random() - 0.5
                    });

                    /**
                     * Reordena as opções de cada questão
                    */
                    reorderedQuestions.map((question: IQuestion) =>{ 
                        question.options = question.options.sort(() => {
                            return Math.random() - 0.5
                        });
                    });
                }
                return { 
                    ...state,
                    questions: reorderedQuestions
                }
            }
        case IQuizTypes.NEXT_QUESTION: {
                console.log('Avançou 1 questão');
                const nextQuestion = state.currentQuestion++;
                let endgame = false;

                if(!state.questions[nextQuestion]){
                    endgame = true;
                } 

                return {
                    ...state,
                    currentQuestion: nextQuestion,
                    gameStage: endgame ? GameStage.END : GameStage.PLAYING,
                    isAnswered: false
                    
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
                return { 
                    ...state,
                    questions: action.payload.questions,
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