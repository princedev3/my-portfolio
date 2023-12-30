"use client"
import React from 'react'
import SectionHeading from './SectionHeading'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useThemeSectionContext } from '@/context/ThemeContext';

const Experience = () => {
    const {theme} =useThemeSectionContext()
    const {ref} = useSectionInView("Experience",0.4)
  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40 ">
        <SectionHeading>My Expierence</SectionHeading>
        <VerticalTimeline lineColor="" >
            {
                experiencesData.map((item,index)=>(
                    <React.Fragment key={index} >
                    <VerticalTimelineElement 
                     contentStyle={{
                        visibility:"visible",
                        backgroundColor:theme ==="light"?"#f3f4f6":"rgba(255,255,255,0.05) ",
                        boxShadow:"none",
                        textAlign:'left',
                        border:"1px solid rgba(0,0,0,0.25) ",
                        padding:'1.3rem 2rem',
                    }}
                    contentArrowStyle={{
                        
                        borderRight:theme==="light"?'0.4rem solid #9ca3af':"0.4rem solid rgba(255,255,255,0.5 ) ",
                    }}
                    date={item.date}
                    icon={item.icon}
                    iconStyle={{
                        visibility:"visible",
                        background:theme==="light"?'white':" rgba(255,255,255,0.15 ) ",
                        fontSize:'1.5rem'
                    }}
                    >
                        <h3 className='font-semibold capitalize' >{item.title} </h3>
                        <p className='font-normal !mt-0' >{item.location} </p>
                        <p className='font-normal !mt-1 text-gray-700 dark:text-white/75 ' >{item.description} </p>
                    </VerticalTimelineElement>
                    </React.Fragment>
                ))
            }
        </VerticalTimeline>
    </section>
  )
}

export default Experience