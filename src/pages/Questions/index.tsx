//CSS
import { Link } from 'react-router-dom';
import styles from './Questions.module.css';

import Fade from 'react-reveal/Fade';
import { FaChevronDown } from 'react-icons/fa';


const Questions = () => {

  return (
    <Fade up>
      <main className={styles.mainContainer}>
        <div className={styles.questionsContent}>
            <p>Questão Nº 1</p>
            <h3>Questão tal de tals e tal tal tal de tals e tal tal tal de tals e tal tal?</h3>
            <div className={styles.optionsContainer}>
              <span>
                <a href="#">Resposta 1 (Texto para aumentar)</a>
                <a href="#">Resposta 2 (Texto para aumentar)</a>
              </span>
              <span>
                <a href="#">Resposta 3 (Texto para aumentar)</a>
                <a href="#">Resposta 4 (Texto para aumentar)</a>
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