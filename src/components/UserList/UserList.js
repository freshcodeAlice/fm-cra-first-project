import React, {useState} from "react";

import UserCard from "./UserCard";
import './style.css';


function UserList (props) {
    const [filterInput, setInput] = useState('');

   const changeSubmit = ({target: {value, name}}) => {
        setInput(value);
    }

   const filterHandler = (value) => {
       return props.users.filter((user) => 
             `${user.name.first} ${user.name.last}`
             .toLowerCase()
             .includes(value));
    }



    const renderUsers = () => {
       return filterHandler(filterInput)
        .sort((a,b)=> b.name.first > a.name.first ? -1 : 1)
        .map((user)=> <UserCard user={user} key={user.email}/>)
    }

            return (
            <>
            <input type="text" name="filterValue" value={filterInput} onChange={changeSubmit}/>
            <section className="card-container"> {renderUsers()}</section>
            </>
        )
}

export default UserList;

