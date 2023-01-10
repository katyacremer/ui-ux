import './styles/index.css'
import navbar from './components/navbar';
import list from './components/list';
import { Outlet } from 'react-router-dom';

const design = ({children}) => {
    return (
        <div className="root">
            <navbar/>
            <list/>
            <main className={"main"}>
                {children}
                <Outlet/>
            </main>
        </div>
    )
}

export default design;
