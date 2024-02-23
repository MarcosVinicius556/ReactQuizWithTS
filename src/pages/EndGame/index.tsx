import styles from './EndGame.module.css';

import { useNavigate } from 'react-router-dom';

import { MdOutlineSentimentNeutral } from "react-icons/md"
import { RiEmotionHappyLine, RiEmotionSadLine } from "react-icons/ri"

import { useSelector } from 'react-redux';
import {
  getScoreSelector
} from '../../redux/quiz/selector';
import { FaChevronDown } from 'react-icons/fa';


const EndGame = () => {

  const navigate = useNavigate();

  const score: number | undefined = useSelector(getScoreSelector);

  const handleBackHome = () => {
    navigate('/')
  }

  return (
    <section className={styles.endGameSection}>
      <div>
        { (score !== undefined && score <= 5) && 
          <span className={styles.result}>
            <h1>Ah não! Parece que você não se saiu muito bem... Mas não desanima não, estude mais um pouco e tente novamente mais tarde.</h1>
            <p>Pontuação: {score}</p>
            <RiEmotionSadLine size={200}/>
          </span> 
        }
        { (score !== undefined && score > 5 && score < 7) &&  
          <span className={styles.result}>
            <h1>Quase lá! Você tirou uma boa pontuação, mas ainda falta mais um pouquinho para atingir a pontuação mínima.</h1>
            <p>Pontuação: {score}</p>
            <MdOutlineSentimentNeutral size={200} />
          </span>
        }

        { (score !== undefined && score > 7) &&  
          <span className={styles.result}>
            <h1>Parabéns! Você se saiu muito bem no teste!</h1>
            <p>Pontuação: {score}</p>
            <RiEmotionHappyLine size={200} />
          </span>
        }
        <a onClick={() => handleBackHome()}>
            <span>
                <FaChevronDown />
            </span>
        </a>
      </div>
    </section>
  )
}

export default EndGame;