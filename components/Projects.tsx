"use client"
import React,{useEffect} from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import { useActiveSectionContext } from '@/context/ActiveSectionContent'
import { useInView } from 'react-intersection-observer'
import Project from "./Project"
import { useSectionInView } from '@/lib/hooks'


const Projects = () => {

    const {ref} = useSectionInView("Projects",0.4)

  return (
    <section ref={ref} className="scroll-mt-28" id='projects'>
        <SectionHeading>Projects</SectionHeading>
        <div className="">
            {
                projectsData.map((project,index)=>(
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))
            }
        </div>
    </section>
  )
}


export default Projects
