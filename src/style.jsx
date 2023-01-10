import './components/styles/index.css'
import navbar from './components/navbar';
import list from './components/list';
import { Outlet } from 'react-router-dom';

const style = ({children}) => {
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

export default style;
