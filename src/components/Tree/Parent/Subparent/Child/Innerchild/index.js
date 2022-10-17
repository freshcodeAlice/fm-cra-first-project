import React from 'react';
import { UserContext } from '../../../../../../contexts/userContext';

const Innerchild = (props) => {
    const {user: {firstName, lastName} = {}} = props;
    return (
       <UserContext.Consumer>
       {([user, logOut])=>{
         console.log('innerchild')
        return (
            <>
            <p>{user.firstName}</p>
            <img src={user.avatar} style={{width: '80px', height: '80px'}}/>
            <button onClick={logOut}>Logout</button>
            </>
        )
       }}
       </UserContext.Consumer>
    );
}

export default Innerchild;
