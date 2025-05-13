import curriculo from '../assets/images/CurriculoNew-1.jpg';
import LeftRight from '../assets/images/LeftRight.gif';
import styles from '../assets/styles/components/curriculo.module.css';

export const Curriculo = () => {
    return (
        <main className={styles.corpoCurriculo}>
            <div>
                <img className={styles.imagemCurriculo} src={curriculo} alt="Curriculo" />
                <img className={styles.swipe} src={LeftRight} />
                <img src="https://i.imgur.com/gFYfTTe.gif" alt="Swipe Esquerda e Direita" />
            </div>
        </main>
    );
};