import React, {useContext} from 'react';
import { UserContext } from '../../../../../../contexts/userContext';


const Innerchild = (props) => {
    const userContextValue = useContext(UserContext);

        return (
            <>
            <p>{user.firstName}</p>
            <img src={user.avatar} style={{width: '80px', height: '80px'}}/>
            <button onClick={()=>{}}>Logout</button>
            </>
        );
}

export default Innerchild;

/*
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

*/