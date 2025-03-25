import { Outlet } from 'react-router-dom';
import '../pages/DashBoard.css';
import '../assets/styles/reset.css';
import { Header } from './Header';
import { Navigation } from './Navigation';
import { LeftSidebar } from './LeftSidebar';
import { Footer } from './Footer';

export const Home = () => {

    return (
        <div className='body'>
            <Header />
            <Navigation />
            <LeftSidebar />
            <div className='home'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};