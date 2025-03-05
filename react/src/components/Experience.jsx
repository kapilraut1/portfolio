import React from 'react'
import { EXPERIENCES } from '../constants'
import {motion} from 'framer-motion';
const Experience = () => {
  return (
    <div className='border border-neutral-900 pb-4'>
      <motion.h1 
      whileInView={{opacity: 1, y:0}}
      initial={{ opacity: 0, y:-100}}
      transition={{duration: 1.5}}
      className='my-20 text-center text-4xl'>Qualification</motion.h1>
    <div>
        {EXPERIENCES.map((Experience, index)=>(
        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
<motion.p 
  whileInView={{opacity: 1, x:0}}
  initial={{ opacity: 0, x:-100}}
  transition={{duration: 2.5}}
className='mb-2 text-sm text-neutral-400'>{Experience.year}</motion.p>
            </div>
            <motion.div
             whileInView={{opacity: 1, x:0}}
             initial={{ opacity: 0, x:100}}
             transition={{duration: 2.5}}
              className='w-full max-w-xl lg:w-3/4'>
<h5 className='mb-2 font-semibold'>{Experience.school} -{" "}
    <span className='text-sm text-purple-100'>
{Experience.address}
</span>
</h5>
<h6 className='mb-4 text-neutral-400'>{Experience.grade}</h6>
            </motion.div>
        </div>
                ))}

    </div>
    </div>
  )
}

export default Experience
