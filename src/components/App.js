import React from "react";
import Counter from './NewCounter/counter';


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
          <Counter />
        )
    }
}


export default App;




