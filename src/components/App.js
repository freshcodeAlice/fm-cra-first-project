import React from "react";
import Tree from './Tree';
import {MyContext} from '../contexts/userContext';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: 'John',
                lastName: 'Doe',
                email: 'johndoe@mail.com',
                avatar: 'https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png'
            }
        }
    }

    logOut = () => {
        this.setState({
                user: {}
            })
    }
 
    render(){
        const {user} = this.state;
        return (
            <MyContext.Provider value={[user,this.logOut]}>
                <Tree/>
            </MyContext.Provider>
        )
    }
}


export default App;




