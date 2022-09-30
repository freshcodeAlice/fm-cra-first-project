import React from 'react';
import Aloha from '../Aloha/Aloha';

class AlohaDashboard extends React.Component {
    constructor(props) {
       super(props);
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
          const users = userArray.map((user, index)=>{user.id = index;
              return user
        });
       this.state = {
            usersArray: users,
            sortDirection: true,
       }
    }
    
    userToAloha() {
        const {usersArray} = this.state;
        return usersArray.map((user)=> <li key={user.id} name={user.firstName} lastName={user.lastName}>text <button data-id={user.id}>X</button> </li>);
    }
    
    sortUsers(event) {
        console.log(event);
//         const {usersArray, sortDirection} = this.state;
//         const newArray = [...usersArray];
//         newArray.sort((a,b)=> {
//             if(sortDirection) {
//                 return a.firstName > b.firstName ? 1 : -1
//             } else {
//                 return a.firstName > b.firstName ? -1 : 1
//             }
//         });
//         this.setState({
//             usersArray: newArray,
//             sortDirection: !sortDirection
//         })
    }
    
   render() {
        
       return (
           <>
           <button onClick={(event)=>{this.sortUsers(event)}}>Sort</button>
           {this.userToAloha()}
           </>
       )
   }
}



export default AlohaDashboard
