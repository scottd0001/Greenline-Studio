import React from 'react';
import { Palette, Globe, Video, Zap, Users, Calendar } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services: React.FC = () => {
  const ref = useScrollAnimation();

  const services = [
    {
      icon: Palette,
      title: 'Digital Graphic Art',
      description: 'High-quality digital artwork that captivates and communicates your brand story with stunning visual impact.',
      features: ['Custom Illustrations', 'Brand Identity Design', 'Digital Paintings', 'Abstract Art'],
      color: 'from-pink-500 to-purple-600'
    },
    {
      icon: Globe,
      title: 'Dynamic Websites',
      description: 'Modern, responsive websites that engage users with smooth animations and intuitive user experiences.',
      features: ['Responsive Design', 'Interactive Animations', 'SEO Optimized', 'Fast Performance'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Video,
      title: 'Premium Video Content',
      description: 'Professional video production that tells your story and connects with your audience emotionally.',
      features: ['Commercial Videos', 'Product Demos', 'Social Media Content', '4K Quality'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Zap,
      title: 'Video Advertisements',
      description: 'Affordable, high-impact video ads designed specifically for youthful, dynamic audiences.',
      features: ['Social Media Ads', 'YouTube Campaigns', 'TikTok Content', 'Instagram Reels'],
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Calendar,
      title: 'Monthly Subscriptions',
      description: 'Ongoing content packages that keep your brand fresh with regular, high-quality deliverables.',
      features: ['Regular Content', 'Priority Support', 'Flexible Plans', 'Custom Packages'],
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Social Media Management',
      description: 'Optional comprehensive social media management to amplify your brand presence across all platforms.',
      features: ['Content Strategy', 'Community Management', 'Analytics & Reporting', 'Platform Optimization'],
      color: 'from-teal-500 to-green-600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="scroll-fade text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to elevate your brand and engage your audience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                style={{animationDelay: `${index * 100}ms`}}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl mb-6 opacity-90">
              Contact us for custom pricing and monthly subscription packages
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              Get Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;