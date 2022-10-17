import React from 'react';
import Subparent from './Subparent';

const Parent = (props) => {
    console.log('Parent');
    return (
        <div style={{border: 'inherit', padding: '25px'}}>
            Parent
            <Subparent/>
        </div>
    );
}

export default Parent;
