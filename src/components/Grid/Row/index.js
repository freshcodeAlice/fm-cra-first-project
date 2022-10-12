import React from 'react';

const Row = (props) => {
    const inlineStyles = {
        display: 'flex',
        flexDirection: 'row'
    }

    return (
        <div style={inlineStyles}>
            {props.children}
        </div>
    );
}

export default Row;
