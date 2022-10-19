import React, {useState} from "react";
import MouseTracker from "./MouseTracker";
import Counter from './NewCounter/counter';
import UserLoader from './UserList/UserLoader';
import Tree from './Tree';
import {ThemeContext} from '../contexts/themeContext';
import CONSTANTS from '../constants';
import { UserContext } from "../contexts/userContext";
const {THEMES} = CONSTANTS;

function App (props) {
    const [user, setUser] = useState({
                        firstName: 'John',
                        lastName: 'Snow'
                    });
    const [theme, setTheme] = useState(THEMES.DARK)
 
        return (
          <UserContext.Provider value={[user, ()=>{}]}> 
            <ThemeContext.Provider value={[theme, setTheme]}>
                <Tree />
            </ThemeContext.Provider>  
          </UserContext.Provider> 
        )
}


export default App;




