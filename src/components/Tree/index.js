import React, {useContext} from 'react';
import Parent from './Parent';
import { ThemeContext } from '../../contexts/themeContext';
import style from './Tree.module.css';
import cx from 'classnames';
import { withTheme } from '../../HOC';
import CONSTANTS from '../../constants';
const {THEMES} = CONSTANTS;

const Tree = (props) => {
    const [theme, setTheme] = useContext(ThemeContext);
   
        const clNames = cx(style.container, {
            [style.lightTheme]: theme === THEMES.LIGHT,
            [style.darkTheme]: theme === THEMES.DARK
        })
        return (
            <div className={clNames}>
             Tree
                 <Parent />
             </div>
        );
}
//HOC - High Order Component



// const TreeWithTheme = withTheme(Tree);

export default Tree;