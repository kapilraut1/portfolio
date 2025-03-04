import React from 'react'
import abtimg from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
      initial={{
        x:-300,
        opacity: 0
      }}
      animate={{
        x:0, 
        opacity:1
      }}
      transition={{
        duration: 1,
        delay: 2.8
      }}
      className='my-20 text-center text-3xl'>Namaste, 
        <span className='text-neutral-500'> Know me here</span></motion.h1>
    <div className='flex flex-wrap'>
        <motion.div 
            initial={{
              x:-100,
              opacity: 0
            }}
            animate={{
              x:0, 
              opacity:1
            }}
            transition={{
              duration: 1,
              delay: 3
            }}
        className='w-full lg:w-1/2 lg:p-8'>
        <div className='flex items-center justify-center'>
          <img className="rounded-2xl" src={abtimg} alt="abt" />
          </div>
        </motion.div>

          <motion.div
              initial={{
                x: 100,
                opacity: 0
              }}
              animate={{
                x:0, 
                opacity:1
              }}
              transition={{
                duration: 1,
                delay: 3
              }} className='w-full lg:w-1/2'>
        <div className='flex justify-center lg:justify-start'>
          <p className='my-15 max-w-xl py-6'>{ABOUT_TEXT}</p>
        
        </div>
       
        </motion.div>
    </div>
    </div>

  )
}

export default About
