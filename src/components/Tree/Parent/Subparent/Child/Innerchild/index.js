import React from 'react';
import { MyContext } from '../../../../../../contexts/userContext';

const Innerchild = (props) => {
    const {user: {firstName, lastName} = {}} = props;
    return (
       <MyContext.Consumer>
       {(value)=>{
        return (
            <p>{JSON.stringify(value)}</p>
        )
       }}
       </MyContext.Consumer>
    );
}

export default Innerchild;
