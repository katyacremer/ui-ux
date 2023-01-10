import { useState } from 'react'
import '../styles/counter.css'

const counter = () => {
    const [count, setCount] = useState(0);
  
    const handleIncrement = () => {
      setCount((count) => count + 1);
    }
  
    const handleDecrement = () => {
      setCount((count) => count - 1);
    }

    return (
        <div className={"counter_background"}>
          <p className={"counter_text"}>Counter</p>
            <p className={"counter_text"}>{count}</p>
            <div className={"button_container"}>
              <button className={"counter_button"} onClick={handleDecrement}>-</button>
              <button className={"counter_button"} onClick={handleIncrement}>+</button>
            </div>
        </div>
    )
}

export default counter;
