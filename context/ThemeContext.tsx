"use client"

import { useEffect, useState ,createContext, useContext} from "react"


type ThemeType = "light" | "dark"

type themecontextProp = {
    children:React.ReactNode
}

type valuesType ={
    theme:ThemeType, 
    toggleTheme:()=>void,
    setTheme:React.Dispatch<React.SetStateAction<ThemeType>>,
    
}
const ThemeSwitchProvider = createContext<valuesType| null>(null)


export default  function ThemeContextProvider({children}:themecontextProp){

    const [theme,setTheme] = useState<ThemeType>("light")
    const toggleTheme =()=>{
        if(theme === "light"){
            setTheme("dark")
            window.localStorage.setItem("theme","dark")
            document.documentElement.classList.add("dark")
        }else{
            setTheme("light")
            window.localStorage.setItem("theme","light")
            document.documentElement.classList.remove("dark")
        }
    }


    useEffect(()=>{
        const localtheme = window.localStorage.getItem("theme") as ThemeType| null;

        if(localtheme){
            setTheme(localtheme)
            if(localtheme ==="dark"){
                document.documentElement.classList.add("dark")
            }
        }else if(window.matchMedia(("prefers-color-scheme:dark")).matches){
            setTheme("dark")
            document.documentElement.classList.add("dark")
        }
    },[])

    return <ThemeSwitchProvider.Provider value={{theme,toggleTheme,setTheme}}>{children} </ThemeSwitchProvider.Provider>
}

export function useThemeSectionContext(){
    
    const context = useContext(ThemeSwitchProvider)

    if(context === null){
        throw new Error("context can not be null")
    }
    return context
}