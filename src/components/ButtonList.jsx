import './styles/navbar.css'
import { Link } from 'react-router-dom';

const ButtonList = () => {
    return (
        <div className={"button_list"}>
          <Link to={"/counter"}>
            <button className={"button"}>Кнопка 1</button>
          </Link>
          <Link to={"/git_avatar"}>
            <button className={"button"}>Кнопка 2</button>
          </Link>
          <button className={"button"}>Кнопка 3</button>
          <button className={"button"}>Кнопка 4</button>
          <button className={"button"}>Кнопка 5</button>
        </div>
    )
}

export default ButtonList;
