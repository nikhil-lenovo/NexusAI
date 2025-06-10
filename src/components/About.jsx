import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:order-2"
          >
            <img 
              src={'/about-image.png'}
              alt="About us" 
              className="w-full rounded-lg shadow-lg"
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/400x300?text=About+Image';
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-600 mb-6">
              About Us
            </h2>
            <p className="text-gray-600 mb-8">
            At NexusAI, we’re redefining what’s possible through the fusion of artificial intelligence and digital innovation. As your trusted partner in transformation, we help forward-thinking businesses unlock new opportunities, solve complex problems, and accelerate growth with future-ready solutions.
            <br />
            <br /> 
            Our vision is to empower businesses with cutting-edge artificial intelligence that drives smarter decisions and accelerates growth.
            We strive to bridge the gap between data and action, delivering intelligent solutions that are scalable, intuitive, and future-ready.
            By combining innovation, deep tech expertise, and a passion for progress, we help organizations transform, lead, and thrive in the AI-powered era.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">AI Innovation</h3>
                  <p className="text-gray-600">We design and deploy intelligent, scalable AI systems — from predictive analytics and natural language processing to generative and RAG-based models — that adapt to your goals and drive real business impact.</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Digital Transformation</h3>
                  <p className="text-gray-600">We don’t just modernize systems — we transform mindsets. Our data-driven strategies and smart automation tools help organizations become agile, intelligent, and ready for the challenges of tomorrow.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
