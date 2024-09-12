import React from "react";
import { useContext, useState } from "react";

const ThemeContext = React.createContext();

export function useDarkTheme() {
 return useContext(ThemeContext)
}

function ThemeWrapper ({ children }){
    const [isDark, updateTheme] = useState(false);
    const handleToggleTheme = () => {
      updateTheme(!isDark);
    };

    return <ThemeWrapper.provider value ={{isDark, handleToggleTheme}}>
        {children}
    </ThemeWrapper.provider>
}

export default ThemeWrapper;
