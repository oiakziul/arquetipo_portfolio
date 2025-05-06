import { MdOutlineInstallDesktop, MdOutlineInstallMobile } from 'react-icons/md';
import styles from '../assets/styles/components/header.module.css';
import { Link } from 'react-router-dom';
export const Header = () => {

    return (
        <header className={styles.header}>
            <h3>Portfólio - SPA</h3>
            <button className={styles.buttonPWA}>
              <Link to='PWA'className={styles.buttonPWA}>  Use Offline <MdOutlineInstallMobile /> <MdOutlineInstallDesktop /></Link>
            </button>
        </header>
    );
};
