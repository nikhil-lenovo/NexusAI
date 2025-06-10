import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccessMessage('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error();
      }
    } catch {
      setSuccessMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Left Column - Contact Info */}
        <div className="space-y-4"> 
          <h2 className="text-3xl font-bold text-amber-600">Contact Us</h2>
          <h3 className="text-sm tracking-widest text-gray-600">Get in touch</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-orange-100 rounded-full">
                <MapPin className="text-orange-500" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Address</h4>
                <p className="text-gray-600">A108 Baner, Pune, Maharashtra, India</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-orange-100 rounded-full">
                <Phone className="text-orange-500" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Call Us</h4>
                <p className="text-gray-600">+91 7700 777 223</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-orange-100 rounded-full">
                <Mail className="text-orange-500" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Email Us</h4>
                <p className="text-gray-600">contact@nexus-ai.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {successMessage && (
            <div className="text-green-600 text-sm mb-2">{successMessage}</div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>

          <input
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-orange-500"
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-orange-500"
          />

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="bg-slate-700 hover:bg-amber-600 text-white px-6 py-3 rounded-full transition-colors w-fit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
