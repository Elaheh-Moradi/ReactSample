import { createContext } from "react";
import '../../style/main.css'
export const theme = {
    light : {
        color:"var(--main)",
        background : "var(--secondary)"
    },
    dark:{
        color:"var(--secondary)",
        background :"var(--main)"
    }
}

const ThemeContext = createContext(theme.light);

export default ThemeContext;