import temp from '../assets/images/engrenagem.gif'
import styles from '../assets/styles/components/temporario.module.css'

export const Temporario = () => {
    return (
      <div className={styles.corpoTemporario}>
          <div>
            <p style={{padding:'12px'}}>Em construção ...</p>
                <img className={styles.imagemTemporario} src={temp} alt="" />
          </div>
      </div>
    );
  };