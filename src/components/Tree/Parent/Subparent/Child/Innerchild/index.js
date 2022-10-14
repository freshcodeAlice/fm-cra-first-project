import React from 'react';
import { MyContext } from '../../../../../../contexts/userContext';

const Innerchild = (props) => {
    const {user: {firstName, lastName} = {}} = props;
    return (
       <MyContext.Consumer>
       {([user, logOut])=>{
        return (
            <>
            <p>{user.firstName}</p>
            <img src={user.avatar}/>
            <button onClick={logOut}>Logout</button>
            </>
        )
       }}
       </MyContext.Consumer>
    );
}

export default Innerchild;
