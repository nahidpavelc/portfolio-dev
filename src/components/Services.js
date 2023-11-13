import React from 'react';
// icon 
import { BsArrowUpRight, BsFillCheckSquareFill } from 'react-icons/bs';
// motion 
import { motion } from 'framer-motion';
// fadeIn 
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

// services data 
const services = [
  {
    name: 'Laravel'
  },
  {
    name: 'React'
  },
  {
    name: 'CodeIgniter'
  },
  {
    name: 'Next.js'
  },
  {
    name: 'Bootstrap'
  },
  {
    name: 'Tailwind'
  },
  {
    name: 'Node.js'
  },
  {
    name: 'Express.js'
  },
  {
    name: 'Firebase'
  },
  {
    name: 'RestAPI'
  },
  {
    name: 'MySQL'
  },
  {
    name: 'MongoDB'
  },
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text & image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-hidden lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-[#F26C42] mb-6'>SKILLS</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              Here is my skills on that I have worked
            </h3>
            <Link
              to='work'
              smooth={true}
              spy={true}
              offset={0}
            >
              <button className='btn btn-sm'>See my work</button>
            </Link>
          </motion.div>

          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {/* services list */}
            <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4'>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div className=' border-white/20 h-auto p-[8px] flex bg-green-900 rounded' key={index}>

                    <div className='flex flex-col mr-3'>
                      <Link
                        to='work'
                        smooth={true}
                        spy={true}
                        offset={0}
                        className='btn w-9 h-9 flex justify-center items-center'
                      >
                        <BsFillCheckSquareFill />
                      </Link>
                      <a href="#" className='text-gradient text-sm'> {link}</a>
                    </div>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[18px] tracking-wider font-primary font-semibold '>
                        {name}
                      </h4>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div >
    </section >
  )
};

export default Services;
