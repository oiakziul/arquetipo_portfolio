import { MdOutlineInstallDesktop, MdOutlineInstallMobile } from 'react-icons/md';
import styles from '../assets/styles/components/header.module.css'; // Seu import de CSS module

export const Header = () => {
    return (
        <header className={styles.header}>
            <h3>Portfólio - SPA</h3>
            <button className={styles.buttonPWA }>
                Use Offline <MdOutlineInstallMobile /> <MdOutlineInstallDesktop />
            </button>
        </header>
    );
};