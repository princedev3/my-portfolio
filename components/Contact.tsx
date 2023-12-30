"use client"
import React, { useRef } from 'react';
import SectionHeading from './SectionHeading'
import { FaPaperPlane } from 'react-icons/fa'
import {motion} from "framer-motion"
import { useSectionInView } from '@/lib/hooks'
import emailjs from 'emailjs-com';
import { sendEmail } from './sendEmail';
import { useThemeSectionContext } from '@/context/ThemeContext';


const Contact = () => {
    const {ref} = useSectionInView("Contact")
    const {theme} =useThemeSectionContext()
    
  

  return (
    <motion.section  ref={ref}
    initial={{opacity:0}}
                            whileInView={{opacity:1}}
                            transition={{
                                
                                duration:1
                            }}
                            viewport={{
                                once:true
                            }}
    className=" mb-20 sm:mb-28 w-[min(100%,38rem)] scroll-mt-28 dark:text-white/80 " id='contact'>
        <SectionHeading>Contact Me</SectionHeading>
        <p className='text-gray-700 text-center -mt-6 '>Please contact me directly at <a className='underline' href="mailto:marvinprince232@gmail.com"  >marvinprince232@gmail.com</a> or through this form</p>
        <form   action={async (formData)=>await sendEmail(formData)}   className='mt-10 flex flex-col dark:text-black'>
            <input name='senderEmail' required maxLength={50} type="email" className='h-14 rounded-lg border border-black/10  outline-black/20  px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-90 transition-all dark:outline-none' placeholder='Your Email' />
            <textarea  name="message" id="" className='h-52 my-3 rounded-lg border-black/10 resize-none outline-black/20 px-4 py-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-90 transition-all dark:outline-none' placeholder='Your Message' />
            <button type='submit' className='group flex items-center justify-center gap-2 h-[3rem] w-[11rem] bg-gray-900 text-white rounded-full outline-none transition-all  focus:scale-105 hover:scale-105 active:scale-100 hover:bg-gray-950  dark:border dark:border-white/60'>send message <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 "/></button>

     
        </form>
    </motion.section>
  )
}

export default Contact