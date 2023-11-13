import React from 'react';
// motion
import { motion } from 'framer-motion';
// variant 
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <section className='section' id='contact'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h2 className='h2 leading-tight uppercase text-[#F26C42] font-medium mb-2 tracking-wide'>
                Get in touch
              </h2>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's Work <br /> together!
              </h2>
            </div>
          </motion.div>

          {/* form */}
          <motion.form
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border border-white rounded-2xl flex flex-col gap-y-6 p-6 items-start'
          >
            <input
              className=' border-black border-b py-3 px-6 rounded-full outline-none w-full placeholder:text-white focus:border-[#ffffff] transition-all placeholder-con'
              type="text"
              placeholder='Your name'
            />
            <input
              className=' border-black border-b py-3 px-6 rounded-full outline-none w-full placeholder:text-white focus:border-[#ffffff] transition-all placeholder-con'
              type="text"
              placeholder='Your email'
            />
            <textarea
              className=' border-black border-b py-12 px-6 rounded-3xl outline-none w-full placeholder:text-white focus:border-[#ffffff] transition-all resize-none placeholder-con'
              type="text"
              placeholder='Your message'
            />
            <button className='btn btn-lg'>Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
};

export default Contact;
