import './components/styles/index.css'
import Navbar from './components/Navbar';
import ButtonList from './components/ButtonList';
import { Outlet } from 'react-router-dom';

const Layout = ({children}) => {
    return (
        <div className="root">
            <Navbar/>
            <ButtonList/>
            <main className={"main"}>
                {children}
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout;
