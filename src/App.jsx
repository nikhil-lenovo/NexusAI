import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ChooseUs from './components/ChooseUs';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';


// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-red-100">
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-bold text-red-600 mb-4">Something went wrong</h1>
            <p className="text-red-500">Please check the console for details.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Hero />
                <About />
                <Services />
                <ChooseUs />
                <Portfolio />
                <Testimonials />
                <Contact />
                <Footer />
              </motion.div>
            } />
          </Routes>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
