import React from "react";
import { ThemeContext } from "../contexts/themeContext";

export const widthTheme = (WrappedComponent) => (props) => {
    return (
        <ThemeContext.Consumer>
            {([theme, setTheme])=>{
                return <WrappedComponent 
                            theme={theme} 
                            setTheme={setTheme} 
                            {...props}
                            />
            }}
        </ThemeContext.Consumer>
    )
}


/*
React.createElement(Component, {theme, setTheme, ...props}, ...children)

*/