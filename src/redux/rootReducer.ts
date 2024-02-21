import { combineReducers } from "redux";

import quizReducer from "./quiz/reducer";

const rootReducer = combineReducers({
    quiz: quizReducer
});

export type QuizState = ReturnType<typeof rootReducer>;

export default rootReducer;