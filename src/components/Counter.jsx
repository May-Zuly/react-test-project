import React,{useState} from 'react'

const Counter = () => {
    let [count,setCount] = useState(0);

    let increament = function () {
        setCount(count+1);
    };
    let decrement = function () {
        if(count <=0){
            setCount(0);
        }else{
            setCount(count-1);
        }
    };
    let reset = function () {
        setCount(0);
    };
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increament}>Increament</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter