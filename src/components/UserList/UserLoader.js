import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import LoaderSpinner from "../LoaderSpinner";
import {getUser} from '../../api';

function UserLoader(props) {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [isError, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);
 
    useEffect(()=>{
        load();
    },[page]); 

  const load = () => {
        getUser(page).then(data => {
            const {results} = data;
            setUsers(results);
        })
        .catch((error)=>{
           setError(error);
        })
        .finally(()=>{
            setLoading(false);
        })
    }


  const prevBtnHandler = () =>{
      setPage(page > 1 ? page-1 : 1);
    }

   const nextBtnHandler = () =>{
       setPage(page+1)
    }

    console.log('render');
        return (
            <>
            {isLoading && <LoaderSpinner />}
            {isError && <div>{isError.message}</div>}
                <button onClick={prevBtnHandler}>Previous page</button>
                <button onClick={nextBtnHandler}>Next page</button>
            {users.length && <UserList users={users}/>}
            </>
        );
}

export default UserLoader;
