import React from "react";
import TreeWithTheme from './Tree';
import {UserContext} from '../contexts/userContext';
import {ThemeContext} from '../contexts/themeContext';
import CONSTANTS from "../constants";
const {THEMES} = CONSTANTS;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: 'John',
                lastName: 'Doe',
                email: 'johndoe@mail.com',
                avatar: 'https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png'
            },
            theme: THEMES.LIGHT
        }
    }

    setTheme = theme => {
        this.setState({
            theme
        })
    }

    logOut = () => {
        this.setState({
                user: {}
            })
    }
 
    render(){
        console.log('App');
        const {user, theme} = this.state;
        return (
            <ThemeContext.Provider value={[theme, this.setTheme]}>
                <UserContext.Provider value={[user,this.logOut]}>
                    <TreeWithTheme/>
                </UserContext.Provider>
            </ThemeContext.Provider>
        )
    }
}


export default App;




