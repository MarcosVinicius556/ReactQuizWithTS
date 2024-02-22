/* eslint-disable @typescript-eslint/no-explicit-any */
//React
import { useState, useEffect } from 'react';

//React-router-dom
import { useNavigate } from 'react-router-dom';

//CSS
import styles from './Questions.module.css';

//Actions
import {
  VerifyAnswer,
  nextQuestion
} from '../../redux/quiz/actions';

import Fade from 'react-reveal/Fade';
import { FaChevronDown } from 'react-icons/fa';

import { useSelector, useDispatch } from 'react-redux';

import {
  getCurrentQuestionSelector,
  getQuestionsSelector,
  isAnsweredSelector,
  getScoreSelector,
  getGameStageSelector
} from '../../redux/quiz/selector';

import { IQuestion } from '../../interfaces/Question';
import { GameStage } from '../../enums/GameStage';

const Questions = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [answer, setAnswer] = useState<string>();

  const gameStage: GameStage = useSelector(getGameStageSelector) || GameStage.PLAYING;
  const currentQuestion: number = useSelector(getCurrentQuestionSelector) || 0;
  const questions: IQuestion[] = useSelector(getQuestionsSelector) || [];
  const isAnswered: boolean = useSelector(isAnsweredSelector) || false;
  const score: number = useSelector(getScoreSelector) || 0;

  const handleSelectAnswer = (event: any) => {
    if(!isAnswered) {
      const data = event.target.value;
      setAnswer(data);
    }
  }

  const handleNextQuestion = () => {
      dispatch(nextQuestion());
  }

  useEffect(() => {
    if(gameStage !== GameStage.END){
      if(answer){
        dispatch(VerifyAnswer({ question: questions[currentQuestion], answer }));
        return;
      }
    }
  }, [answer, gameStage]);


  if(gameStage === GameStage.END) {
    navigate('/endGame');
    return
  }

  return (
    <Fade up>
      <main className={styles.mainContainer}>
        <div className={styles.questionsContent}>
            <p>Questão Nº {currentQuestion}</p>
            <h3>{questions[currentQuestion].question}</h3>
            <div className={styles.optionsContainer}>
              <span>
                <button 
                  className={`
                  ${isAnswered 
                      ? questions[currentQuestion].answer === questions[currentQuestion].options[0]
                            ? styles.correct : styles.wrong
                    : ''}`}
                  onClick={(e) => handleSelectAnswer(e)}
                  value={questions[currentQuestion].options[0]}>
                    {questions[currentQuestion].options[0]}
                </button>
                <button 
                className={`
                  ${isAnswered 
                      ? questions[currentQuestion].answer === questions[currentQuestion].options[1]
                            ? styles.correct : styles.wrong
                    : ''}`}
                  onClick={(e) => handleSelectAnswer(e)}
                  value={questions[currentQuestion].options[1]}>
                    {questions[currentQuestion].options[1]}
                </button>
              </span>
              <span>
                <button 
                  className={`
                  ${isAnswered 
                      ? questions[currentQuestion].answer === questions[currentQuestion].options[2]
                            ? styles.correct : styles.wrong
                    : ''}`}
                  onClick={(e) => handleSelectAnswer(e)}
                  value={questions[currentQuestion].options[2]}>
                    {questions[currentQuestion].options[2]}
                </button>
                <button 
                  className={`
                  ${isAnswered 
                      ? questions[currentQuestion].answer === questions[currentQuestion].options[3]
                            ? styles.correct : styles.wrong
                    : ''}`}
                  onClick={(e) => handleSelectAnswer(e)}
                  value={questions[currentQuestion].options[3]}>
                    {questions[currentQuestion].options[3]}
                </button>
              </span>
            </div>
            {isAnswered && 
              <a className={styles.nextButton} onClick={() => handleNextQuestion() }>
                <span>
                  <FaChevronDown />
                </span>
              </a>
            }
            <span className={styles.score}>
              <h4>Pontuação: {score}</h4>
            </span>
        </div>
        
      </main>
    </Fade>
  )
}

export default Questions