import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, ArrowUpRight, Brain, Zap, Cpu } from 'lucide-react';

interface AIProject {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  aiFeatures: string[];
}

interface AICaseStudiesProps {
  onProjectClick: (projectId: number) => void;
}

const AICaseStudies: React.FC<AICaseStudiesProps> = ({ onProjectClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const aiProjects: AIProject[] = [
    {
      id: 7,
      title: "AI-Powered Content Generator",
      category: "AI/ML Interface",
      description: "Intelligent content creation platform with natural language processing and automated design suggestions.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["AI/ML", "NLP", "Content Generation", "React"],
      link: "#",
      aiFeatures: ["Natural Language Processing", "Auto-suggestions", "Smart Templates"]
    },
    {
      id: 8,
      title: "Smart Analytics Dashboard",
      category: "AI Analytics",
      description: "Machine learning-driven analytics platform that provides predictive insights and automated reporting.",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Machine Learning", "Predictive Analytics", "Data Viz", "Python"],
      link: "#",
      aiFeatures: ["Predictive Modeling", "Anomaly Detection", "Auto-insights"]
    },
    {
      id: 9,
      title: "AI Customer Support Bot",
      category: "Conversational AI",
      description: "Intelligent chatbot interface with natural conversation flow and sentiment analysis capabilities.",
      image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Chatbot", "NLP", "Sentiment Analysis", "UI/UX"],
      link: "#",
      aiFeatures: ["Natural Conversations", "Sentiment Analysis", "Smart Routing"]
    },
    // {
    //   id: 10,
    //   title: "Personalized Learning AI",
    //   category: "EdTech AI",
    //   description: "Adaptive learning platform that personalizes content delivery based on individual learning patterns.",
    //   image: "https://images.pexels.com/photos/8386427/pexels-photo-8386427.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   tags: ["Adaptive Learning", "Personalization", "EdTech", "AI"],
    //   link: "#",
    //   aiFeatures: ["Adaptive Algorithms", "Learning Analytics", "Personalized Paths"]
    // },
    // {
    //   id: 11,
    //   title: "AI Image Recognition App",
    //   category: "Computer Vision",
    //   description: "Mobile application with advanced image recognition and real-time object detection capabilities.",
    //   image: "https://images.pexels.com/photos/8386421/pexels-photo-8386421.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   tags: ["Computer Vision", "Mobile", "Real-time", "TensorFlow"],
    //   link: "#",
    //   aiFeatures: ["Object Detection", "Image Classification", "Real-time Processing"]
    // },
    // {
    //   id: 12,
    //   title: "Smart Recommendation Engine",
    //   category: "Recommendation AI",
    //   description: "Intelligent recommendation system with collaborative filtering and deep learning algorithms.",
    //   image: "https://images.pexels.com/photos/8386425/pexels-photo-8386425.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   tags: ["Recommendations", "Deep Learning", "Personalization", "API"],
    //   link: "#",
    //   aiFeatures: ["Collaborative Filtering", "Deep Learning", "Real-time Recommendations"]
    // }
  ];

  return (
    <section id="ai-case-studies" className="py-20 bg-gray-800" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div className="flex space-x-2">
                <Zap className="w-6 h-6 text-cyan-400 animate-pulse" />
                <Cpu className="w-6 h-6 text-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Exploring the intersection of artificial intelligence and user experience design through innovative AI-powered solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-gray-900 rounded-2xl overflow-hidden shadow-lg transition-all duration-1000 hover:transform hover:scale-105 border border-gray-700 hover:border-cyan-400/50 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } cursor-pointer`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => onProjectClick(project.id)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-80' : 'opacity-40'
                  }`} />
                  
                  <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  
                  <div className={`absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
                    hoveredProject === project.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}>
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-sm text-cyan-400 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mb-4">
                    <div className="text-xs text-gray-500 mb-2">AI Features:</div>
                    <div className="flex flex-wrap gap-1">
                      {project.aiFeatures.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onProjectClick(project.id);
                    }}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    View Case Study
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICaseStudies;