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
 
    render(){
        console.log(MyContext);
        return (
            <MyContext.Provider value={this.state.user}>
                <Tree/>
            </MyContext.Provider>
        )
    }
}


export default App;




