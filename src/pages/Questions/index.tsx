//CSS
import { Link } from 'react-router-dom';
import styles from './Questions.module.css';

import Fade from 'react-reveal/Fade';
import { FaChevronDown } from 'react-icons/fa';

import { useSelector } from 'react-redux';

import {
  getCurrentQuestionSelector,
  getQuestionsSelector,
  isAnsweredSelector,
  getScoreSelector  
} from '../../redux/quiz/selector';
import { IQuestion } from '../../interfaces/Question';

const Questions = () => {

  const currentQuestion: number = useSelector(getCurrentQuestionSelector) || 0;
  const questions: IQuestion[] = useSelector(getQuestionsSelector) || [];
  const isAnswered: boolean = useSelector(isAnsweredSelector) || false;
  const score: number = useSelector(getScoreSelector) || 0;

  return (
    <Fade up>
      <main className={styles.mainContainer}>
        <div className={styles.questionsContent}>
            <p>Questão Nº {currentQuestion + 1}</p>
            <h3>{questions[currentQuestion].question}</h3>
            <div className={styles.optionsContainer}>
              <span>
                <a href="#">{questions[currentQuestion].options[0]}</a>
                <a href="#">{questions[currentQuestion].options[1]}</a>
              </span>
              <span>
                <a href="#">{questions[currentQuestion].options[2]}</a>
                <a href="#">{questions[currentQuestion].options[3]}</a>
              </span>
            </div>
          <Link to='/questions' className={styles.nextButton}>
            <span>
              <FaChevronDown />
            </span>
          </Link>
        </div>
      </main>
    </Fade>
  )
}

export default Questions