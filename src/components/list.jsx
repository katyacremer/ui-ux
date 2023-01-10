import './styles/navbar.css'
import { Link } from 'react-router-dom';

const list = () => {
    return (
        <div className={"button_list"}>
          <Link to={"/counter"}>
            <button className={"button"}>Button 1</button>
          </Link>
          <Link to={"/gt_avt"}>
            <button className={"button"}>Button 2</button>
          </Link>
          <button className={"button"}>Button 3</button>
          <button className={"button"}>Button 4</button>
          <button className={"button"}>Button 5</button>
        </div>
    )
}

export default list;
