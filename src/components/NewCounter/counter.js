import React, {useState} from 'react';



function Counter (props) {
    const [counter, setCounter] = useState(0);
    const [step, setStep] = useState(1);
    
    const increment = () => {
        setCounter(counter+step);
    }

    const changeHandler = ({target: {value}}) => {
        setStep(Number(value));
    }

    return (
        <div>
            {counter}
            <input name="step" onChange={changeHandler} value={step}/>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default Counter;
