import { useState } from "react"
import style from "./style.css"

function Counter(){
    var[count,setCount] = useState(0)

    function increment(){
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }
    return(
        <div className="container">
            <div className="box">
            <h1>{count}</h1>
            <button onClick={increment} className="inc">INC</button>
            <button onClick={decrement} className="dec">DEC</button>
            </div>
        </div>
    )
}

export default Counter