import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: 'AI Applications Project 1',
    category: 'AI Solutions',
    image: '/project1.avif',
    description: 'Full-stack e-commerce platform with payment integration',
  },
  {
    title: 'AI Chatbot Project 1',
    category: 'GenAI Solutions',
    image: '/project2.png',
    description: 'Cross-platform mobile application with offline support',
  },
  {
    title: 'Data Science Project 1',
    category: 'Data Science',
    image: '/project3.jpg',
    description: 'Modern marketing website with interactive elements',
  },
  {
    title: 'Web Applications Project 1',
    category: 'Web Development',
    image: '/project4.jpg',
    description: 'Admin dashboard with real-time analytics',
  },
  {
    title: 'AI Application Project 2',
    category: 'AI Solutions',
    image: '/project5.png',
    description: 'Cross-platform mobile application with offline support',
  },
  {
    title: 'Data Science Project 2',
    category: 'Data Science',
    image: '/project6.jpg',
    description: 'Cross-platform mobile application with offline support',
  },
  {
    title: 'AI Application Project 3',
    category: 'AI Solutions',
    image: '/project7.webp',
    description: 'Cross-platform mobile application with offline support',
  },
];

const Portfolio = () => {
  const categories = [...new Set(projects.map(project => project.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-600 mb-4">
            Our Portfolio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out our latest projects and creative work
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === 'All' 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-gray-100 text-slate-800 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg ${
                  selectedCategory === category 
                    ? 'bg-gray-800 text-white' 
                    : 'bg-gray-100 text-slate-800 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
