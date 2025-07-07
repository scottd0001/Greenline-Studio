import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials: React.FC = () => {
  const ref = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechFlow Solutions',
      image: '/images/testimonials/customer-1.jpg',
      rating: 5,
      text: 'Greenline Studio transformed our brand identity with stunning digital artwork. Their attention to detail and creative vision exceeded all expectations. The team delivered exactly what we needed to stand out in our market.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Startup Founder',
      company: 'InnovateLab',
      image: '/images/testimonials/customer-2.jpg',
      rating: 5,
      text: 'The website they built for us is absolutely incredible. Fast, responsive, and visually stunning. Our conversion rates increased by 40% after launch. I highly recommend their web development services.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Creative Director',
      company: 'Pixel Perfect Agency',
      image: '/images/testimonials/customer-3.jpg',
      rating: 5,
      text: 'Working with Greenline Studio on our video content was a game-changer. Their storytelling ability and production quality are top-notch. Every video they create drives engagement and results.'
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Entrepreneur',
      company: 'StartupHub',
      image: '/images/testimonials/customer-4.jpg',
      rating: 5,
      text: 'Their monthly subscription service keeps our content fresh and engaging. The team understands our brand perfectly and consistently delivers high-quality work on time. Best investment we\'ve made.'
    },
    {
      id: 5,
      name: 'Jessica Martinez',
      role: 'Brand Manager',
      company: 'Creative Collective',
      image: '/images/testimonials/customer-5.jpg',
      rating: 5,
      text: 'The video advertisements they created for our youth-focused campaign were phenomenal. The engagement rates were through the roof! Their understanding of our target audience is impressive.'
    },
    {
      id: 6,
      name: 'Robert Wilson',
      role: 'CEO',
      company: 'Digital Dynamics',
      image: '/images/testimonials/customer-6.jpg',
      rating: 5,
      text: 'Professional, creative, and reliable. Greenline Studio handles all our digital design needs with excellence. Their social media management service has significantly boosted our online presence.'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="scroll-fade text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Client <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 md:p-12 shadow-xl">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <Quote className="h-8 w-8 text-white" />
              </div>
            </div>
            
            {/* Content */}
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white dark:border-gray-600 shadow-lg"
                />
                <div className="text-left">
                  <div className="font-bold text-gray-900 dark:text-white text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-green-500 font-semibold">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center space-x-2 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-green-500 w-8' 
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-6 transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${
                index === currentIndex ? 'ring-2 ring-green-500' : ''
              }`}
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-4">
                "{testimonial.text}"
              </p>
              
              {/* Client */}
              <div className="flex items-center space-x-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;