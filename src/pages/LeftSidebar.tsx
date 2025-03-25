import { BiCodeBlock, BiFile, BiLogoLinkedinSquare, BiLogoReact, BiLogoWhatsapp } from "react-icons/bi"
import { Link } from "react-router-dom"
import styles from '../assets/styles/components/leftSidebar.module.css'

export const LeftSidebar = () => {
    const phoneNumber = '5521969452115';

    const handleCopy = async () => {
        if (/Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent)) {
            try {
                await navigator.clipboard.writeText(phoneNumber);
                alert('Número copiado!');
            } catch (err) {
                console.error('Falha ao copiar: ', err);
                alert('Falha ao copiar!');
            }
        }
    };

    return (

        <div className={styles.leftSidebar}>
            <ul className={styles.sidebarMenu}>
                <li>
                    <Link to="Curriculo">Curriculo</Link>
                    <Link to="Curriculo">
                        <BiFile className={styles.iconesLeftSidebar} />
                    </Link>
                </li>

                <li>
                    <a
                        href="https://wa.me/5521969452115?text=Ol%C3%A1%20*Kaio*,%0AMe%20chamo%20*[ Nome ]*,%20da%20*[ Empresa ]*.%0AEncontrei%20seu%20contato%20atrav%C3%A9s%20do%20portf%C3%B3lio%20e%20[ Mensagem ]."
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleCopy}
                    >
                        Contato
                    </a>
                    <a href="https://wa.me/5521969452115?text=Ol%C3%A1%20*Kaio*,%0AMe%20chamo%20*[ Nome ]*,%20da%20*[ Empresa ]*.%0AEncontrei%20seu%20contato%20atrav%C3%A9s%20do%20portf%C3%B3lio%20e%20[ Mensagem ]." target="_blank" rel="noopener noreferrer" onClick={handleCopy}>
                        <BiLogoWhatsapp className={styles.iconesLeftSidebar} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/kaio-l-433767230/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <a href="https://www.linkedin.com/in/kaio-l-433767230/" target="_blank" rel="noopener noreferrer">
                        <BiLogoLinkedinSquare className={styles.iconesLeftSidebar} />
                    </a>
                </li>
                <li className="itemArea">
                    <Link to="Temporario">Projetos</Link>
                    <Link to="Temporario">
                        <BiCodeBlock className={styles.iconesLeftSidebar} />
                    </Link>
                </li>
                <li className="itemArea">
                    <Link to="Temporario">Recursos</Link>
                    <Link to="Temporario">
                        <BiLogoReact className={styles.iconesLeftSidebar} color="#ffffff" />
                    </Link>
                </li>
            </ul>
        </div>
    )
}