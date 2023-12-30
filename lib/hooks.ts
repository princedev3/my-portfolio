import { useActiveSectionContext } from "@/context/ActiveSectionContent"

import { useEffect } from "react"
import { useInView } from 'react-intersection-observer'
import { sectionName } from "./types"



export function useSectionInView (sectionName:sectionName,threshold=0.75){
    const {active,setActive,timeOfLast } =useActiveSectionContext()
    const {ref,inView} = useInView({threshold})
  
    useEffect(()=>{
      
      if(inView  && Date.now() - timeOfLast >1000){
        setActive(sectionName)
      }
    },[inView,setActive,sectionName])

    return {
        ref
    }
}