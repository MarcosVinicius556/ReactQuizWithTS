//CSS
import styles from './App.module.css';
//Components
import Footer from './components/Footer';
import Header from './components/Header';

//React Router DOM
import { BrowserRouter } from 'react-router-dom';

//Routes
import RoutesConfiguration from './routes/RoutesConfiguration';


function App() {

  return (
    <section className={styles.mainSection}>
      <div className={styles.pageContent}>
        <Header />
        <BrowserRouter>
          <RoutesConfiguration />
        </BrowserRouter>
        <Footer />
      </div>
    </section>
  )
}

export default App
