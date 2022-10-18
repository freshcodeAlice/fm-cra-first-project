import React, {useState} from 'react';

const userArray =  [{
    firstName: 'Tony',
     lastName: 'Stark',
     }, {
     firstName: 'Bruce',
     lastName: 'Brenner',
     }, {
     firstName: 'Thor',
     lastName: 'Odinsson',
     },
     {
     firstName: 'Peter',
     lastName: 'Parker'
     }, {
     firstName: 'Natasha',
     lastName: 'Romanof'
     }];
const arrayOfUsers = userArray.map((user, index)=>{user.id = index;
   return user
});



const NewAlohaDashboard = () => {
    const [users, setUsers] = useState(arrayOfUsers);
    const [sortDirection, setSortDirection] = useState(true);

    const mapUsers = () => {
        return users.map((user) => <li key={user.id} name={user.firstName} lastName={user.lastName}>text <button data-id={user.id}>X</button> </li>)
    }
    
    const sortUsers = () => {
                const newArray = [...users];
                newArray.sort((a,b)=> {
                    if(sortDirection) {
                        return a.firstName > b.firstName ? 1 : -1
                    } else {
                        return a.firstName > b.firstName ? -1 : 1
                    }
                });
                setUsers(newArray);
                setSortDirection(!sortDirection);
    }

    return (
        <ul>
            <button onClick={sortUsers}>Sort</button>
            {mapUsers()}
        </ul>
    );
}

export default NewAlohaDashboard;
