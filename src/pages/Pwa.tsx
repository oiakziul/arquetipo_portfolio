
import PWA from "../assets/images/PWA.gif";
import PWAPC from "../assets/images/PWAPC.gif";
import styles from '../assets/styles/components/pwa.module.css';


export const Pwa = () => {

    return (
    <div>
        <img src={PWA} alt="Modo offline SmartPHone" className={styles.gifStyleSMT} />
        <img src={PWAPC} alt="Modo offline PC" className={styles.gifStylePC} />
    </div>
  )
}





            
