import React from 'react';
import { Link } from 'react-scroll';
// countup 
import CountUp from 'react-countup';
// intersection observer hook 
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant 
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <div className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img  */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[630px] mix-blend-lighten bg-top'></motion.div>

          {/* text  */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h2 text-[#F26C42]'>About me</h2>
            <h3 className='h3 mb-4'>Fullstack Software Developer</h3>
            <p className='mb-6'>
              Hi! My name is Nahid Pavel Chowdhury, and I'm passionate about crafting web application using different technologies. I work in both frontend and backend.
              <br />
              I'm working in as a Fullstack Software Developer at Vibely Digital. Let's connect and create innovative digital solutions together!


            </p>

            {/* stats  */}
            {/* <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={13} duration={3} /> :
                    null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Year of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={15} duration={3} /> :
                    null}
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={2} duration={3} /> :
                    null}
                  K
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div> */}

            <div className='flex gap-x-8 items-center'>
              <Link
                to='contact'
                smooth={true}
                spy={true}
                offset={0}
              >
                <button className='btn btn-lg'>Contact me</button>
              </Link>

              {/* <a href="#" className='text-gradient btn-link'>
                My Portfolio
              </a> */}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
};

export default About;
