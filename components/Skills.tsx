"use client"
import React from 'react'
import SectionHeading from './SectionHeading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import {motion} from "framer-motion"


const fadeInAnimation ={
  initial :{
    opacity:0,
    y:100
  },
  animate :(index:number)=> ({
    opacity:1,
    y:0,
    transition:{
      delay:0.05 * index
    }
  }),
}

const Skills = () => {
  const {ref} = useSectionInView("Skills")
  return (
    <section ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 sm:mb-40 " id='skills'>
      <SectionHeading>My Skills</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
      {
        skillsData.map((skill,index)=>(
          <motion.li 
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once:true
          }}
          custom={index}
          key={index} className='bg-white border border-black/[0.1] rounded-2xl px-5 py-3 dark:bg-white/10 dark:text-white/80'>
            {skill}
          </motion.li>
        ))
      }
      </ul>
    </section>
  )
}

export default Skills