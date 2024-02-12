import styles from './App.module.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

  return (
    <section className={styles.mainSection}>
      <div className={styles.pageContent}>
        <Header />
        <main>
          Conteúdo principal da apágina
        </main>
        <Footer />
      </div>
    </section>
  )
}

export default App
