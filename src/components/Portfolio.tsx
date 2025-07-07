import React, { useState } from 'react';
import { ExternalLink, Play, Eye } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Portfolio: React.FC = () => {
  const ref = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'All Work', count: 9 },
    { id: 'digital-art', name: 'Digital Art', count: 3 },
    { id: 'websites', name: 'Websites', count: 3 },
    { id: 'videos', name: 'Video Content', count: 3 }
  ];

  const projects = [
    {
      id: 1,
      title: 'Abstract Geometric Art',
      category: 'digital-art',
      image: '/images/portfolio/digital-art-1.jpg',
      description: 'Modern abstract digital artwork featuring vibrant geometric patterns and contemporary design elements.',
      tech: ['Digital Painting', 'Abstract Design', 'Color Theory']
    },
    {
      id: 2,
      title: 'Futuristic Neon Design',
      category: 'digital-art',
      image: '/images/portfolio/digital-art-2.jpg',
      description: 'Cyberpunk-inspired digital artwork with neon elements and futuristic aesthetics.',
      tech: ['Neon Effects', 'Cyberpunk Style', 'Digital Art']
    },
    {
      id: 3,
      title: 'Minimalist Composition',
      category: 'digital-art',
      image: '/images/portfolio/digital-art-3.jpg',
      description: 'Clean, minimalist digital design focusing on balance and sophisticated color palettes.',
      tech: ['Minimalism', 'Composition', 'Color Design']
    },
    {
      id: 4,
      title: 'Responsive Web Application',
      category: 'websites',
      image: '/images/portfolio/website-mockup-1.jpg',
      description: 'Modern, responsive website design with clean UI/UX and smooth animations.',
      tech: ['React', 'Responsive Design', 'UI/UX']
    },
    {
      id: 5,
      title: 'Dynamic Interface Design',
      category: 'websites',
      image: '/images/portfolio/website-mockup-2.jpg',
      description: 'Interactive web application with dynamic content and engaging user experience.',
      tech: ['Interactive Design', 'Animation', 'Modern UI']
    },
    {
      id: 6,
      title: 'Mobile App Interface',
      category: 'websites',
      image: '/images/portfolio/website-mockup-3.png',
      description: 'Sleek mobile application design with intuitive navigation and modern aesthetics.',
      tech: ['Mobile Design', 'App Interface', 'User Experience']
    },
    {
      id: 7,
      title: 'Professional Video Production',
      category: 'videos',
      image: '/images/portfolio/video-project-1.jpg',
      description: 'High-quality video production for corporate and commercial purposes.',
      tech: ['Video Production', '4K Quality', 'Professional Editing']
    },
    {
      id: 8,
      title: 'Creative Advertisement',
      category: 'videos',
      image: '/images/portfolio/video-project-2.jpg',
      description: 'Engaging video advertisement designed for social media and digital marketing.',
      tech: ['Advertisement', 'Social Media', 'Creative Direction']
    },
    {
      id: 9,
      title: 'Social Media Content',
      category: 'videos',
      image: '/images/portfolio/video-project-3.png',
      description: 'Dynamic social media video content optimized for maximum engagement.',
      tech: ['Social Content', 'Engagement', 'Digital Marketing']
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="scroll-fade text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our latest projects and creative solutions that drive results
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category.name} <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              style={{animationDelay: `${index * 100}ms`}}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 flex items-center justify-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors duration-200"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </button>
                      {project.category === 'videos' && (
                        <button className="px-4 py-2 bg-green-500/80 backdrop-blur-sm text-white rounded-lg hover:bg-green-600/80 transition-colors duration-200">
                          <Play className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  ×
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech: string, index: number) => (
                    <span key={index} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300">
                  Start Similar Project
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;