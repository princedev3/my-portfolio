"use client"
import React,{useEffect} from 'react'
import Image from "next/image"
import {motion} from "framer-motion"
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionContext } from '@/context/ActiveSectionContent'
import { useInView } from 'react-intersection-observer'
import { useSectionInView } from '@/lib/hooks'

const Intro = () => {

  const {ref} = useSectionInView("Home",0.75)
  const {setActive ,setTimeOfLast} =useActiveSectionContext()

  
  return (
    <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0  scroll-mt-28'>
                <div className="flex items-center justify-center">
                        <div className=" relative">
                            <motion.div
                            initial={{opacity:0,scale:0}}
                            animate={{opacity:1,scale:1}}
                            transition={{
                                type:"tween",
                                duration:0.2
                            }}
                            >
                            <Image 
                             src="/p.jpeg"
                             alt="Ricardo portrait"
                             width="192"
                             height="192"
                             quality="95"
                             priority={true}
                             className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                            />
                            </motion.div>
                            <motion.span 
                              initial={{opacity:0,scale:0}}
                              animate={{opacity:1,scale:1}}
                              transition={{
                                  type:"spring",
                                  stiffness:125,
                                  delay:0.1,
                                  duration:0.7,
                              }}
                            className=' absolute text-4xl bottom-0 right-0'>
                                👋
                            </motion.span>
                        </div>
                </div>

                <motion.h1 
                 initial={{opacity:0,y:100}}
                 animate={{opacity:1,y:0}}
                 
                className="mb-10  mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl">
                <span className="font-bold">Hello, I'm Marvin.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
                </motion.h1>

                <motion.div
                        initial={{opacity:0,y:100}}
                        animate={{opacity:1,y:0}}
                        transition={{
                            delay:0.1,
                        }}
                 className=" flex flex-col sm:flex-row justify-center items-center gap-2 px-4 text-lg font-medium">
                    <Link
                    onClick={ ()=>{
                      setActive("Contact"),
                     setTimeOfLast(Date.now())
                    } } 
                    href={"#contact"} className='group flex items-center gap-2 bg-slate-900 text-white px-7 py-3 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-100 transition'>Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/></Link>
                    <a  href="/imene prince software.pdf" download target='_blank' className="group flex items-center gap-2 bg-white  px-7 py-3 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition border border-black/10 dark:bg-white/10 dark:text-white/60">Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition cursor-pointer " /> </a>
                    <a href="" target='_blank'  className="flex items-center gap-2 bg-white  px-4 text-[1.35rem] text-gray-700 py-3 rounded-full focus:scale-[1.15] hover:scale-105 hover:text-gray-950 active:scale-100 transition border border-black/10 dark:bg-white/10 dark:text-white/60"> <BsLinkedin/> </a>

                    <a href="" target='_blank'  className="flex items-center gap-2 bg-white  px-4 text-[1.35rem] text-gray-700 py-3 rounded-full focus:scale-[1.15] hover:scale-105 hover:text-gray-950 active:scale-100 transition border border-black/10 dark:bg-white/10 dark:text-white/60"> <FaGithubSquare/> </a>
                </motion.div>
    </section>
  )
}

export default Intro