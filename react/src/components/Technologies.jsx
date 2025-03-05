import React from 'react'
import { FaHtml5 } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import {animate, motion} from 'framer-motion';

const iconVariants =(duration) =>({
        initial: {y: -10}, 
        animate:{
                y:[10, -10],
                transition:{
                        duration, 
                        ease: "linear", 
                        repeat: Infinity, 
                        repeatType: "reverse"

                }
        }
})
const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1 
      whileInView={{
        y:0, 
        opacity: 1
      }}
      initial={{
        y:80,
        opacity:0
      }}
      transition={{
        duration: 2
      }}
      className='my-20 text-center text-4xl'>Technologies</motion.h1>
    <div className='flex flex-wrap items-center justify-center gap-2'>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
<FaHtml5 className="text-7xl text-orange-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2.75)}
        initial="initial"
        animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
<FaJs className="text-7xl text-yellow-500" />
        </ motion.div>
        <motion.div 
        variants={iconVariants(2.9)}
        initial="initial"
        animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
<FaCss3 className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div 
        variants={iconVariants(3.1)}
        initial="initial"
        animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
<FaBootstrap className="text-7xl text-purple-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(3.3)}
        initial="initial"
        animate="animate"className='rounded-2xl border-4 border-neutral-800 p-4'>
<RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(3.6)}
        initial="initial"
        animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
<TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"className='rounded-2xl border-4 border-neutral-800 p-4'>
<SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div 
        variants={iconVariants(4.5)}
        initial="initial"
        animate="animate"className='rounded-2xl border-4 border-neutral-800 p-4'>
<FaNodeJs className="text-7xl text-green-300" />
        </motion.div>
    </div>
    </div>
  )
}

export default Technologies
