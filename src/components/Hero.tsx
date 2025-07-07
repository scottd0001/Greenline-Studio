import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const ref = useScrollAnimation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div ref={ref} className="scroll-fade space-y-8">
          {/* Logo Display */}
          <div className="flex justify-center mb-8">
            <img 
              src="/images/logo.png" 
              alt="Greenline Studio" 
              className="h-24 w-auto object-contain float"
            />
          </div>

          {/* Hero Content */}
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-2 text-green-500 mb-4">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Digital Product Design Studio</span>
              <Sparkles className="h-5 w-5" />
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white leading-tight">
              <span className="block">Creative</span>
              <span className="block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent gradient-animate">
                Digital Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We specialize in <span className="font-semibold text-green-500">digital graphic art</span>, 
              <span className="font-semibold text-blue-500"> dynamic websites</span>, and 
              <span className="font-semibold text-purple-500"> premium video content</span> that captivates and converts.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <a 
              href="#portfolio" 
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 glow"
            >
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button className="group inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:border-green-500 hover:text-green-500 transition-all duration-300">
              <Play className="mr-2 h-5 w-5" />
              Watch Our Reel
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-500">500+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-500">150+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-500">5+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-500">24/7</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;