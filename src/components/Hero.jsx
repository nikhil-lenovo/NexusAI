import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';

const Hero = () => {
  useEffect(() => {
    try {
      AOS.init({
        duration: 800,
        once: true,
      });
    } catch (error) {
      console.error('AOS initialization error:', error);
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-[#001524] text-white flex flex-col justify-center px-10 py-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Revolutionize Your World <br /> with NexusAI 
          </h1>
          <p className="text-md md:text-lg text-gray-300 mb-8 border-l-4 border-amber-600 pl-4">
          Empowering businesses through advanced AI, machine learning, data science, and RAG-powered digital transformation.
          </p>
          <p className="text-md md:text-lg text-gray-300 mb-8 border-l-4 border-amber-600 pl-4">
          Transform Ideas Into Impact with Smart AI and Business-Ready Digital Solutions.                                                       
          </p>
          <p className="text-md md:text-lg text-gray-300 mb-8 border-l-4 border-amber-600 pl-4">
          Unleash Potential with AI-Powered Solutions and End-to-End Digital Evolution.                                                 
          </p>
          <div className="flex items-center gap-4">
            <motion.div>
              <a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-600 text-white px-6 py-3 rounded-full font-semibold"
                href="#about"
              >
                Discover
              </a>
            </motion.div>
            <motion.div>
              <a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-600 text-white px-6 py-3 rounded-full font-semibold"
                href="#contact"
              >
                Contact Us
              </a>
            </motion.div>
            {/*<motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center border-2 border-white text-white px-6 py-3 rounded-full"
            >
              <FaPlay className="mr-2" /> Watch Video
            </motion.button> */}
          </div>
        </motion.div>
      </div>

      {/* Right Section - Background Image */}
      <div
        className="hidden md:block w-full md:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url('/hero-bg.png')`,
        }}
      >
        <div className="w-full h-full bg-black opacity-20"></div>
      </div>
    </section>
  );
};

export default Hero;
