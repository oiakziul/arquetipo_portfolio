
import { Link, Outlet } from 'react-router-dom';
import '../pages/DashBoard.css'

export const DashBoard = () => {
    return (

        <div className='body'>
            <header className="cabecalho">
                <h2>Meu Portfólio</h2>
            </header>

            <div className="barraNav">
                <ul className="menu">
                    <li> <Link to='/DashBoard'>Início </Link></li>
                    <li><a style={{ color: '#d3d3d3', fontWeight: 'normal' }} href="#sobre">Sobre mim</a></li>
                    <li><a style={{ color: '#d3d3d3', fontWeight: 'normal' }} href="#projetos">Meus projetos</a></li>
                </ul>
            </div>

            <div className="principal">
                <h3 >Minha área</h3>
                <ul className="minhaArea">
                    <li><Link to="Curriculo">Curriculo</Link></li>
                    <li className="itemArea"><a href=""><s>Objetivos</s> </a></li>
                    <li className="itemArea"><a href=""><s>Robbies</s> </a></li>
                    <li className="itemArea"><a href=""><s>Tecnologias</s></a></li>
                </ul>
            </div>

            <div className="lateral">
                <h3>Informações Extras</h3>
                <p >Aqui ficam links ou informações complementares.</p>
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
                <a href="https://wa.me/" target="_blank"> <s>link</s> </a>
                <a href="https://wa.me/" target="_blank"> <s>link</s> </a>
                <a href="https://wa.me/" target="_blank"> <s>link</s> </a>
                <a href="https://wa.me/" target="_blank"> <s>link</s> </a>
                <a href="https://wa.me/" target="_blank"> <s>link</s> </a>
            </aside>
            <Outlet />
            <footer className="footer">
                <p>&copy; 2025 Meu Portfólio. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}
