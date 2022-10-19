import React, {useContext} from 'react';
import Child from './Child';
import { ThemeContext } from '../../../../contexts/themeContext';
import { UserContext } from '../../../../contexts/userContext';
import CONSTANTS from '../../../../constants';
import { withTheme, withUser } from '../../../../HOC';
const {THEMES} = CONSTANTS;

const Subparent = (props) => {
    const [theme, setTheme] = useContext(ThemeContext);
    const [user, fn] = useContext(UserContext);
    const nextTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    return (
                <div style={{border: 'inherit', padding: '25px'}}>
                    Subparent
                    <p>{user.firstName}</p>
                    <button onClick={()=>{setTheme(nextTheme)}}>Click to change theme</button>
                    <Child />
                </div>
    )
}

export default Subparent;


/*
const SubparentWithTheme = withTheme(Subparent);

const SubparentWithThemeWithUser = withUser(SubparentWithTheme);

export default SubparentWithThemeWithUser;

*/


// export default withUser(withTheme(Subparent));