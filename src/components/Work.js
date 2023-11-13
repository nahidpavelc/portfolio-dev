import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// img 
import Img1 from '../assets/portfolio-1 DBA.jpg';
import Img2 from '../assets/portfolio-2 Focus.jpg';
import Img3 from '../assets/portfolio-3 BH.jpg';
import Img4 from '../assets/portfolio-4 WE.jpg';
import Img5 from '../assets/portfolio-5 BEA.png';
import Img6 from '../assets/portfolio-6 HAAB.jpg';


const Work = () => {
  return (
    <div className=''>
      <section className='section' id='work'>
        <div className='container mx-auto' >
          <div className='grid lg:grid-cols-3 md:grid-cols-3 gap-2'>

            <motion.div
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='flex-1 flex flex-col lg:mb-0'
            >
              {/* text */}
              <div>
                <h2 className='h2 leading-tight text-[#F26C42]'>
                  My Work
                </h2>
                <h3 className='h3 max-w-sm'>
                  Highlighting My Most Recent Contributions.
                </h3>
                {/* <button className='btn btn-sm'>View all projects</button> */}
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='flex-1 flex flex-col lg:mb-0'
            >
              {/* image */}
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img
                  className='group-hover:scale-125 transition-all duration-500'
                  src={Img1}
                  alt=""
                />
                {/* pretitle  */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Web</span>
                </div>
                {/* title  */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>Dhaka Bar Association</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='flex-1 flex flex-col  lg:mb-0'
            >
              {/* image  */}
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img
                  className='group-hover:scale-125 transition-all duration-500'
                  src={Img2}
                  alt=""
                />
                {/* pretitle  */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Web</span>
                </div>
                {/* title  */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>FOCUS</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn('left', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='flex-1 flex flex-col '
            >
              {/* image  */}
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img
                  className='group-hover:scale-125 transition-all duration-500'
                  src={Img3}
                  alt=""
                />
                {/* pretitle  */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Web</span>
                </div>
                {/* title  */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>Biology Haters</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn('left', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='flex-1 flex flex-col gap-y-1'
            >
              {/* image  */}
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img
                  className='group-hover:scale-125 transition-all duration-500'
                  src={Img4}
                  alt=""
                />
                {/* pretitle  */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Web</span>
                </div>
                {/* title  */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>Wealth Factory</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn('left', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='flex-1 flex flex-col gap-y-1'
            >
              {/* image  */}
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img
                  className='group-hover:scale-125 transition-all duration-500'
                  src={Img5}
                  alt=""
                />
                {/* pretitle  */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Web</span>
                </div>
                {/* title  */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>Bangladesh Economic Association</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn('left', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='flex-1 flex flex-col gap-y-1'
            >
              {/* image  */}
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img
                  className='group-hover:scale-125 transition-all duration-500'
                  src={Img6}
                  alt=""
                />
                {/* pretitle  */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>WEB</span>
                </div>
                {/* title  */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>Hajj Association of Bangladesh</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>

  )
};

export default Work;
