import React from "react";
import MouseTracker from "./MouseTracker";
import Counter from './NewCounter/counter';
import UserLoader from './UserList/UserLoader';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

 
    render(){
        console.log('App');
        const {user, theme} = this.state;
        return (
          <UserLoader />
        )
    }
}


export default App;




