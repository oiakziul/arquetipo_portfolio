import curriculo from '../assets/images/CurriculoNew-1.jpg';
import styles from '../assets/styles/components/curriculo.module.css';

export const Curriculo = () => {
    return (
        <main className={styles.corpoCurriculo}>
            <div>
                <img className={styles.imagemCurriculo} src={curriculo} alt="Curriculo" />
            </div>
        </main>
    );
};