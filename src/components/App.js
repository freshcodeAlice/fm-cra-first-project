import React from "react";
import SignUpForm from "./LoginForm";
import Tree from './Tree';


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
           <SignUpForm />
        )
    }
}


export default App;




