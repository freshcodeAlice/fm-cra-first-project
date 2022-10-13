
/*
Написати компоненту WindowResizer
Яка виводить розмір вьюпорта на поточний момент.

Current viewport width: ....px
Current vieport height: .....px

*/

import React, { Component } from 'react';

class WindowResizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
        }
    }
    componentDidMount() {
        window.addEventListener('resize', this.eventHandler);
    }

    eventHandler = () => {
            this.setState({
                x: window.innerWidth,
                y: window.innerHeight
            })
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.eventHandler)
    }
    
    render() {

        const {x, y} = this.state;
        return (
            <div>
               <p>Current viewport width: {x}px</p> 
               <p>Current vieport height: {y}px</p> 
            </div>
        );
    }
}

export default WindowResizer;
