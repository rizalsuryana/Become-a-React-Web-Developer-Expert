import { useState } from "react";
import DecreaseButton from "./button/DecreaseButton";
import IncreaseButton from "./button/IncreaseButton";
import Display from "./Display";

const CounterApp =() => {
    const [count, setCount] = useState(0);

    const increase = () => setCount((prevValue)=> prevValue +1);
    const decrease = () => setCount((prevValue) => prevValue <1 ? prevValue : prevValue-1);


    return(
        <>
        <Display count={count}/>
        <DecreaseButton decrease={decrease}/>
        <IncreaseButton increase={increase}/>
        </>
    )
}

export default CounterApp;