import React from 'react';
import Innerchild from './Innerchild';

const Child = (props) => {
    console.log('Child');
    return (
        <div style={{border: 'inherit', padding: '25px'}}>
            Child
            <Innerchild />
        </div>
    );
}

export default Child;
