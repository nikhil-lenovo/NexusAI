import { motion } from 'framer-motion';
import { BrainCircuit, Bot, BarChart2, Globe } from 'lucide-react';

const services = [
  {
    title: 'AI Solutions',
    description: 'Intelligent, scalable AI systems tailored to solve real business challenges — from automation to predictive analytics, we build smarter futures.',
    icon: 'ai',
  },
  {
    title: 'GenAI Solutions',
    description: 'Reimagine interaction with Generative AI. We help businesses build personalized, automated experiences that captivate users and drive conversion at scale.',
    icon: 'bot',
  },
  {
    title: 'Data Science',
    description: 'Transform raw data into powerful insights. Our data science solutions help you make informed decisions, optimize operations, and gain a competitive edge.',
    icon: 'bar-chart',
  },
  {
    title: 'Web Development',
    description: 'Modern, responsive, and high-performance websites and apps — built using the latest technologies to deliver seamless user experiences across devices.',
    icon: 'globe',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-600 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-3x2 mx-auto">
          Powering business transformation through intelligent, scalable, and future-focused digital solutions.
          <br />We bridge the gap between data and action — helping organizations make smarter decisions, enhance experiences, and accelerate growth through deep tech and AI innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/*{service.icon === 'code' && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16v16H4V4zm4 0v-2m8 2V2m0 20v-2m-8 2v-2M2 12h2m16 0h2M6.343 6.343l1.414 1.414M17.657 6.343l-1.414 1.414M6.343 17.657l1.414-1.414M17.657 17.657l-1.414-1.414M9 9h6v6H9z" />
                  )}
                  {service.icon === 'gen-ai' && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16v16H4V4zm4 0v-2m8 2V2m0 20v-2m-8 2v-2m-4-4H2m2-4H2m20 4h-2m2-4h-2m-6-2a2 2 0 110 4 2 2 0 010-4z" />
                  )}
                  {service.icon === 'data-science' && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6v12M8 10v8M12 4v16M16 8v12M20 2v18" />
                  )}
                  {service.icon === 'mobile' && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16v16H4V4zm3 4l4 4-4 4m5 0h4" />
                  )}*/}
                  {service.icon === 'ai' && (
                    <BrainCircuit className="w-6 h-6 text-white" strokeWidth={2} />
                  )}
                  {service.icon === 'bot' && (
                    <Bot className="w-6 h-6 text-white" strokeWidth={2} />
                  )}
                  {service.icon === 'bar-chart' && (
                    <BarChart2 className="w-6 h-6 text-white" strokeWidth={2} />
                  )}
                  {service.icon === 'globe' && (
                    <Globe className="w-6 h-6 text-white" strokeWidth={2} />
                  )}
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
