/* CSS */
import { IoMenu } from 'react-icons/io5';
import styles from './Header.module.css';

/* React */
import { memo } from 'react'
import { CiShare2 } from 'react-icons/ci';

const Header = memo(() => {
        return (
            <header className={styles.headerContainer}>
                <span className={styles.headerItemGroup}>
                    <div className={styles.headerMenu}>
                        <IoMenu size={45}/>
                    </div>
                </span>
                <span className={styles.headerItemGroup}>
                    &lt; TS Quiz /&gt;
                </span>
                <span className={styles.headerItemGroup}>
                    <div className={styles.headerShareMenu}>
                        <CiShare2 size={45}/>
                    </div>
                </span>
            </header>
        )
    }
)

export default Header