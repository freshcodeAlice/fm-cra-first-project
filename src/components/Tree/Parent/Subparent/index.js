import React from 'react';
import Child from './Child';
import { ThemeContext } from '../../../../contexts/themeContext';
import { UserContext } from '../../../../contexts/userContext';
import CONSTANTS from '../../../../constants';
import { withTheme, withUser } from '../../../../HOC';
const {THEMES} = CONSTANTS;

const Subparent = (props) => {
    console.log('Subparent')
    const nextTheme = props.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    return (
                <div style={{border: 'inherit', padding: '25px'}}>
                    Subparent
                    <p>{props.user.firstName}</p>
                    <button onClick={()=>{props.setTheme(nextTheme)}}>Click to change theme</button>
                    <Child />
                </div>
    )
}


/*
const SubparentWithTheme = withTheme(Subparent);

const SubparentWithThemeWithUser = withUser(SubparentWithTheme);

export default SubparentWithThemeWithUser;

*/


export default withUser(withTheme(Subparent));