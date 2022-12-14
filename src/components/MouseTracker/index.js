import React,{useState, useEffect} from 'react';

const MouseTracker = (props) => {
    const [coordinates, setCoordinates] = useState({
                                            x: 0,
                                            y: 0
                                        });
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        window.addEventListener('mousemove', tracker);
        return ()=>{
            window.removeEventListener('mousemove', tracker);
        }
    },[]);


    const tracker = (event) => {
        setCoordinates((prevState) => {
            return {
                x: event.clientX,
                y: event.clientY
            }
        });
    }


    const clickHandler = () => {
       setCounter(counter+1);
    }
   
    return (
        <div onClick={clickHandler}>
          <p>X: {coordinates.x}</p>
          <p>Y: {coordinates.y}</p>  
          <p>Counter: {counter}</p>
        </div>
    );
}

export default MouseTracker;
