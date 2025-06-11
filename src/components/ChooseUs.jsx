import React from 'react';
import { motion } from 'framer-motion';
import { Archive, ArchiveXIcon, Brain, BrainCircuitIcon, BrainIcon, Flame, Heart, Trophy, Zap } from 'lucide-react';


const ChooseUs = () => {
  return (
    <section className="bg-[#f9fbfd] py-16">
      <div className="container mx-auto px-6 md:flex md:items-center gap-12">
        {/* Image Section */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="choose-us.png" 
            alt="Why Choose Us"
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="md:w-1/2 mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-amber-600 mb-4">Why Work With Us</h2>
          <p className="text-gray-600 mb-6">
          We're your co-creators in turning ambition into action — with scalable, human-centered AI at the core. Here’s what makes us the right choice for your journey.
          </p>
          <ul className="space-y-4">
            <li>
              <strong className="text-gray-700 flex items-center gap-1"> 
                <Brain className="w-6 h-6 text-orange-500" /> 
                AI-First Mindset </strong> 
                <p className="text-gray-600 max-w-3x2 mx-auto">
                AI is not just a tool for us — it’s a mindset. We embed intelligence at every layer to future-proof your business.</p>
            </li>
            <li>
              <strong className="text-gray-700 flex items-center gap-1"> 
                <Trophy className="w-6 h-6 text-orange-500" /> 
                Innovation </strong>
                <p className="text-gray-600 max-w-3x2 mx-auto">
                We challenge convention and harness AI to create breakthrough solutions that redefine what’s possible in your business.
                </p>
            </li>
            <li>
              <strong className="text-gray-700 flex items-center gap-1">
                <Heart className="w-6 h-6 text-orange-500" /> 
                Human-Centered Passion </strong>
                <p className="text-gray-600 max-w-3x2 mx-auto">
                We’re driven by a passion for meaningful impact — combining empathy, creativity, and deep tech to solve real-world problems.
                </p>
            </li>
            <li>
              <strong className="text-gray-700 flex items-center gap-1">
                <Zap className="w-6 h-6 text-orange-500" /> 
                Agile Execution </strong>
                <p className="text-gray-600 max-w-3x2 mx-auto">
                From rapid prototyping to continuous optimization, we move fast and adapt seamlessly to meet your evolving needs.
                </p>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ChooseUs;
