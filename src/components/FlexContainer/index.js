
/*
Створити компоненту FlexContainer, яка відображає всі передані їй елменти як флекс-дітей. При цьому flex-direction, align-items, justify-content мають передаватись цій компоненті як пропси

*/

import React from 'react';

const FlexContainer = (props) => {
    const {flexDirection = 'row', 
            alignItems = 'flex-start', 
            justifyContent = 'flex-start'} = props;

    const inlineStyles = {
        display: 'flex',
        flexDirection,
        alignItems,
        justifyContent
    }

    return (
        <div style={inlineStyles}>
            {props.children}
        </div>
    );
}

export default FlexContainer;
