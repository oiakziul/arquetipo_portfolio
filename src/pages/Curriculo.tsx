{/*import curriculo from '../assets/images/CurriculoNew-1.jpg';*/}
import LeftRight from '../assets/images/LeftRight.gif';
import styles from '../assets/styles/components/curriculo.module.css';
import { PdfViewer } from './PdfViewer';


export const Curriculo = () => {
    const pdfPath = 'docs/CurriculoPDF.pdf'; 
    return (
        <main className={styles.corpoCurriculo}>
            <div>
                {/*<img className={styles.imagemCurriculo} src={curriculo} alt="Curriculo" />*/}
                <img className={styles.swipe} src={LeftRight} />
                 <PdfViewer   pdfUrl={pdfPath} />
            </div>
        </main>
    );
};
