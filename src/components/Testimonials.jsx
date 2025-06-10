import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { color } from 'framer-motion';

const testimonials = [
  {
    quote:
      'NexusAI has transformed the way we operate. Their AI solutions helped us automate complex tasks, saving over 30% of operational time. True game-changers!',
    name: 'Shubham Murkute',
    role: 'CEO, InArtiGence.ai',
    image: 'user1.jpg',
  },
  {
    quote:
      'Partnering with NexusAI was one of the best decisions we made. Their team truly understood our vision and delivered a scalable AI model that exceeded our expectations.',
    name: 'Hari Dighe',
    role: 'CEO, Creative Electronics',
    image: 'user2.jpg',
  },
  {
    quote:
      'From predictive analytics to intelligent automation, NexusAI brought innovative thinking and flawless execution. Their work continues to drive value every day.',
    name: 'Rajveer Sinha',
    role: 'Co-founder, Master Solutions',
    image: 'user3.jpg',
  },
  {
    quote:
      'The NexusAI team is not just technically brilliant—they’re strategic partners. They took our ideas and turned them into a high-impact digital solution.',
    name: 'Mayur Phantangare',
    role: 'CEO, Knowledge Cafe',
    image: 'user3.jpg',
  },
  {
    quote:
      'NexusAI’s commitment to innovation and excellence stands out. The AI-powered tools they built have given us a competitive edge in the market.',
    name: 'Amol Shingote',
    role: 'CFO, Creative Electronics',
    image: 'user3.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-amber-600 font-bold mb-4">Testimonials</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
        What Our Partners Say About Us
        </p>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={3}
          className="relative"
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
                <p className="text-gray-700 italic mb-6">
                  <span className="text-orange-600 text-2xl leading-none">“</span>
                  {t.quote}
                  <span className="text-orange-600 text-2xl leading-none">”</span>
                </p>
                <div className="flex items-center justify-start gap-2 mt-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full border"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev !text-orange-600 !left-[-3rem]"></div>
          <div className="swiper-button-next !text-orange-600 !right-[-2rem]"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
