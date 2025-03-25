
import { Link, Outlet } from 'react-router-dom';
import '../pages/DashBoard.css'
import zap from '../pages/zap2.svg'
import linkdin from '../pages/linkdin.svg'
import Drive from '../pages/drive.svg'


export const DashBoard = () => {
    return (

        <div className='body'>
            <header className="cabecalho">
                <h2>Meu Portfólio - SPA</h2>
            </header>

            <div className="barraNav">
                <ul className="menu">
                    <li> <Link to='/arquetipo_portfolio/'>Início </Link></li>
                    <li><a style={{ color: '#d3d3d3' }} href="#sobre"><s>Sobre mim</s></a></li>
                    <li><a style={{ color: '#d3d3d3' }} href="#projetos"><s>Meus projetos</s></a></li>
                </ul>
            </div>

            <div className="principal">
                <h3 >Minha área</h3>
                <ul className="minhaArea">
                    <li><Link to='Curriculo'> Curriculo </Link></li>
                    <li className="itemArea"><a href='#Objetivos'><s>Objetivos</s></a></li>
                    <li className="itemArea"><a href='#Robbies'><s>Robbies</s></a></li>
                    <li className="itemArea"><a href='#Tecnologias'><s>Tecnologias</s></a></li>
                </ul>
            </div>

            <div className="lateral">
                <h3>Meus projetos</h3>
                <p >Veja alguns dos meus projetos da faculdade</p>
                <br />
                <main className="auto">
                    <div className="elementos"> Alpha </div>
                    <div className="elementos"> Bravo </div>
                    <div className="elementos"> Charlie </div>
                    <div className="elementos"> Delta </div>
                    <div className="elementos"> Echo </div>
                    <div className="elementos"> Foxtrot </div>
                    <div className="elementos"> Golf </div>
                    <div className="elementos"> Hotel </div>
                    <div className="elementos"> Juliett </div>
                    <div className="elementos"> India</div>
                    <div className="elementos"> Alfa</div>
                    <div className="elementos">extra</div>
                </main>

            </div>
            <aside className="lateral2">
                <a href="https://wa.me/" target="_blank"><img className='iconesLE' src={zap} alt="" /></a>
                <a href="https://www.linkedin.com/in/kaio-l-433767230/" target="_blank"><img className='iconesLE' src={linkdin} alt="" /></a>
                <a href="https://drive.google.com/drive/folders/1hTGtOUlA5tcWwCRRx6Ufgq4w-vLURDqn" target="_blank"><img className='iconesLE' src={Drive} alt="" /></a>
            </aside>
            <Outlet />
            <footer className="footer">
                <p>&copy; 2025 Meu Portfólio. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}
