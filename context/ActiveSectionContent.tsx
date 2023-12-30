"use client"

import { useState,createContext,useContext} from "react";
import { links } from "@/lib/data";
import { sectionName } from "@/lib/types";



type valueType ={
    active:"Home" | "About" | "Projects" | "Skills" | "Experience" | "Contact",
    setActive:React.Dispatch<React.SetStateAction<"Home" | "About" | "Projects" | "Skills" | "Experience" | "Contact">>,
    timeOfLast:number,
    setTimeOfLast:React.Dispatch<React.SetStateAction<number>>
}
export const contextProvider = createContext<valueType | null>(null)

export default  function ActiveSectionContent ({children}:{children:React.ReactNode}){
    const[active,setActive]=useState<sectionName>("Home")
    const[timeOfLast,setTimeOfLast]=useState(0)


    return <contextProvider.Provider value={{active,setActive,timeOfLast,setTimeOfLast}}>
        {children}
    </contextProvider.Provider>
}

export const   useActiveSectionContext=()=>{
    const context = useContext(contextProvider)

    if(context === null){
        throw new Error("context can not be null")
    }
    return context
}