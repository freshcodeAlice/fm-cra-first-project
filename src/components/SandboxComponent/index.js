import React, {useState, useCallback, useEffect} from 'react';

const Clicker = () => {
    const [click, setClick] = useState(0);
    const [value, setValue] = useState('');

   const handler = useCallback(()=>{
        setClick(click => click+1);
    }, []);

   const changeHandler = ({target: {value}}) => {
        setValue(value)
    }

    const logValue = useCallback(() => {
            let sum = 0;
            for(let i = 0; i<400000000; i++) {
                sum+=i;
            }
                console.log(value);
            },[value]);
            

    useEffect(()=>{
             console.log('logValue has changed');
    }, [logValue]);


    return (
        <>
            <h1> {click} </h1>
            <button onClick={handler}>Click</button>
            <input type="text" value={value} onChange={changeHandler}/>
            <button onClick={logValue}>Click to log value</button>
        </>
    );
}

export default Clicker;
