import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { FaChevronDown } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

const Home = () => {
  return (
    <Fade up>
      <main className={styles.mainContainer}>
          <div className={styles.homeContent}>
              <h1>
                  Olá, seja bem vindo o TS Quiz, um quiz para testar seus conhecimentos em <span> &lt;TypeScript/&gt; </span>
              </h1>
              <p>
                  Este quiz foi desenvolvido em React com TypeScript, o foco dele é ser um projeto para estudos de tecnologias como TypeScript, CSS Modules, Redux, Redux-Saga, sinta-se a vontade para testar a aplicação e explorar seu fonte <a href="">aqui</a>! 
              </p>
              <Link to='/questions' >
                <span >
                  <FaChevronDown />
                </span>
              </Link>
          </div>
      </main>
    </Fade>
  )
}

export default Home