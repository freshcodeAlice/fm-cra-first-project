import React from 'react';
import SubparentWithTheme from './Subparent';

const Parent = (props) => {
    console.log('Parent');
    return (
        <div style={{border: 'inherit', padding: '25px'}}>
            Parent
            <SubparentWithTheme/>
        </div>
    );
}

export default Parent;
