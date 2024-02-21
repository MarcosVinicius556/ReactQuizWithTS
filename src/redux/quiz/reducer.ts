import { IQuizTypes } from "./actionTypes";
import { QuizActions, IQuizState } from "./types";

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

const quizReducer = (state = INITIAL_APP_STATE, action: QuizActions) => {
    switch(action.type) {
        case IQuizTypes.START_GAME:
            console.log('Iniciou o jogo');
            return { 
                ...state
            }
        case IQuizTypes.NEXT_QUESTION:
            console.log('Avançou 1 questão');
            return {
                ...state 
            }
        case IQuizTypes.END_GAME:
            console.log('Fim de jogo');
            return { 
                ...state 
            }
        case IQuizTypes.LOAD_QUESTIONS_REQUEST:
            console.log('Buscando questões');
            return {
                ...state 
            }
        case IQuizTypes.LOAD_QUESTIONS_SUCCESS:
            console.log('Encontrado questões...');
            return { 
                ...state 
            }
        case IQuizTypes.LOAD_QUESTIONS_FAILURE:
            console.log('Não foi encontrado nenhuma questão...');
            return { 
                ...state 
            }
        default:
            return state;
    }
}

export default quizReducer;