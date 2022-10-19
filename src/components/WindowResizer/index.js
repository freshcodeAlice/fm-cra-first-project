import React, { useState, useEffect } from 'react';

function WindowResizer (props) {
    const [sizes, setSizes] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        window.addEventListener('resize', eventHandler);
        return () => {
            window.removeEventListener('resize', eventHandler)
        };
    }, []);
  
   

    eventHandler = () => {
        setSizes({
                x: window.innerWidth,
                y: window.innerHeight
            })
    }


        const {x, y} = sizes;
        return (
            <div>
               <p>Current viewport width: {x}px</p> 
               <p>Current vieport height: {y}px</p> 
            </div>
        );
}

export default WindowResizer;
