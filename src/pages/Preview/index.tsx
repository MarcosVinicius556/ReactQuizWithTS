/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './Preview.module.css';

import { useNavigate } from 'react-router-dom';

import Fade from 'react-reveal/Fade';
import { FaChevronDown } from 'react-icons/fa';

import { useDispatch } from 'react-redux';
import { nextQuestion } from '../../redux/quiz/actions';

import { useSelector } from 'react-redux';
import { getSubjectSelector } from '../../redux/quiz/selector';

const Preview = () => {

  const subject = useSelector(getSubjectSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCallQuestions = () => {
    dispatch(nextQuestion());

    navigate('/questions')
  }

  return (
    <Fade up>
        <section className={styles.previewSection}>
            <h1>Preparado de testar seus conhecimentos em {subject}?</h1>
            <p>
                Quando estiver pronto basta clicar no botão abaixo e iniciar o teste, Boa Sorte!
            </p>
            <a onClick={() => handleCallQuestions()}>
                <span>
                    <FaChevronDown />
                </span>
            </a>
        </section>
    </Fade>
  )
}

export default Preview;