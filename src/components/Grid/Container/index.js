import React from 'react';

const Container = (props) => {
    const inlineStyles = {
        maxWidth: '1200px',
        border: '2px solid black'
    }

    return (
        <div style={inlineStyles}>
           {props.children} 
        </div>
    );
}

export default Container;
