import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

interface WorkProps {
  onProjectClick: (projectId: number) => void;
}

const Work: React.FC<WorkProps> = ({ onProjectClick }) => {
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

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Mobile App",
      category: "Mobile Design",
      description: "Complete mobile shopping experience with intuitive navigation and seamless checkout.",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React Native", "UI/UX", "Figma"],
      link: "#"
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      category: "Web Application",
      description: "Analytics dashboard with data visualization and real-time updates for business intelligence.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React", "Dashboard", "Analytics"],
      link: "#"
    },
    {
      id: 3,
      title: "Banking App Redesign",
      category: "Fintech",
      description: "Modern banking interface focused on security, accessibility, and user experience.",
      image: "https://images.pexels.com/photos/5668842/pexels-photo-5668842.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Mobile", "Security", "UX Research"],
      link: "#"
    },
    {
      id: 4,
      title: "Food Delivery Platform",
      category: "Mobile & Web",
      description: "End-to-end food ordering experience with restaurant discovery and order tracking.",
      image: "https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Cross-platform", "Maps", "Real-time"],
      link: "#"
    },
    {
      id: 5,
      title: "Healthcare Portal",
      category: "Healthcare",
      description: "Patient portal with appointment scheduling, medical records, and telemedicine features.",
      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Healthcare", "Accessibility", "HIPAA"],
      link: "#"
    },
    {
      id: 6,
      title: "Learning Management System",
      category: "Education",
      description: "Interactive e-learning platform with course management and progress tracking.",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Education", "Interaction", "Progress"],
      link: "#"
    }
  ];

  return (
    <section id="work" className="py-20 bg-gray-900" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Work
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A collection of projects that showcase my approach to solving complex design challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-1000 hover:transform hover:scale-105 ${
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
                  
                  <div className={`absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
                    hoveredProject === project.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}>
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-sm text-indigo-400 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onProjectClick(project.id);
                    }}
                    className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                  >
                    View Project
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

export default Work;