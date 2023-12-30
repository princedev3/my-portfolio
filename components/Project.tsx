"use client"
import { projectsData } from "@/lib/data"
import Image from "next/image"
import {useScroll,motion,useTransform} from "framer-motion"
import {useRef} from "react"






type projectProp=typeof projectsData[number]
 
export default function Project ({title,description,tags,imageUrl}:projectProp){
    const ref =useRef<HTMLDivElement>(null)
   const {scrollYProgress}= useScroll({
        target:ref,
        offset:["0 1","1.33 1"]
    })
const scrollProgress = useTransform(scrollYProgress,[0,1],[0.8,1])
const opacityProgress = useTransform(scrollYProgress,[0,1],[0.6,1])
    return <motion.div
    className="mb-3 sm:mb-8 last:mb-0 group "
    ref={ref}
    style={{
        scale: scrollProgress,
        opacity: opacityProgress,
    }}>
    <section 
    
     className='rounded-lg mb-10 sm:mb-28 bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem]  dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'>
       <div className="py-4 px-5 sm:pl-10 smpr-2 sm:pt-10 sm:max-w-[50%] sm:h-[20rem] flex flex-col h-full sm:group-even:ml-[20rem] ">
       <h3 className='text-2xl font-semibold '>{title} </h3>
        <p className='mt-2 leading-relaxed  text-gray-700 dark:text-white/70'>{description} </p>
        <ul className='flex flex-wrap mt-4 gap-2  '>
            {tags.map((tag,index)=>(
                <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full sm:mt-auto' key={index}>{tag} </li>
            ))}
        </ul>
       </div>
        <Image src={imageUrl} alt='' quality={95} className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl  group-even:right-[initial] group-even:-left-40 group-hover:scale-[1.04] group-hover:translate-x-3 group-hover:translate-y-3 group-hover:-rotate-3 transition group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-3' />
    </section>
    </motion.div>
}