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
        return usersArray.map((user)=> <Aloha key={user.id} name={user.firstName} lastName={user.lastName}/>);
    }
    
    sortUsers() {
        const {usersArray, sortDirection} = this.state;
        const newArray = [...usersArray];
        newArray.sort((a,b)=> {
            if(sortDirection) {
                return a.firstName > b.firstName ? 1 : -1
            } else {
                return a.firstName > b.firstName ? -1 : 1
            }
        });
        this.setState({
            usersArray: newArray,
            sortDirection: !sortDirection
        })
    }
    
   render() {
        
       return (
           <>
           <button onClick={()=>{this.sortUsers()}}>Sort</button>
           {this.userToAloha()}
           </>
       )
   }
}



export default AlohaDashboard
