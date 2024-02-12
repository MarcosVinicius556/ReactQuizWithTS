//CSS
import styles from './Footer.module.css';

//React
import { memo } from 'react'

const Footer = memo(() => {
        return (
            <footer className={styles.footerContainer}>
                Desenvolvido por Marcos Vinicius
            </footer>
        )
    }
)

export default Footer