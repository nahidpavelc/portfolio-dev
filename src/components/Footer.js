import React from "react";
// icons 
import { FaGithubSquare, FaFacebookSquare, FaDribbble, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
// motion 
import { motion } from 'framer-motion'
// variants 
import { fadeIn } from '../variants';

const Footer = () => {
  return (
    <div>
      <footer class="bg-white rounded-lg shadow bg-opacity-0 mb-[120px]">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-300 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <ul href="#" class="text-center mb-4 sm:mb-0">
              <motion.div
                variants={fadeIn('up', 0.7)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
              >
                <li class="self-center mb-o text-sm font-semibold whitespace-nowrap dark:text-white">+880 1575 246078</li>
                <li class="self-center text-sm font-semibold whitespace-nowrap dark:text-white">nahidpavelc@gmail.com</li>
              </motion.div>

            </ul>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-white-500 sm:mb-0 ">

              <motion.div
                variants={fadeIn('up', 0.7)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className='flex text-[28px] gap-x-6 max-w-max mx-auto lg:mx-0'
              >
                <a href="#">
                  <FaFacebookSquare />
                </a>
                <a href="#">
                  <FaGithubSquare />
                </a>
                <a href="#">
                  <FaLinkedin />
                </a>

              </motion.div>
            </ul>
          </div>

          <span class="block text-sm text-white text-center">
            <motion.div
              className="sm:text-center"
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            >
              © 2023 <span className="">NPC</span>
            </motion.div>
          </span>
        </div>
      </footer>
    </div>
  )
};

export default Footer;
