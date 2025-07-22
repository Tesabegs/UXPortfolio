import React, { useEffect, useState } from 'react';
import { ArrowLeft, ExternalLink, Calendar, Users, Target, Lightbulb, CheckCircle, Brain, Zap, BarChart3 } from 'lucide-react';

interface ProjectDetailProps {
  projectId: number;
  onBack: () => void;
}

interface ProjectData {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  tags: string[];
  duration: string;
  team: string;
  role: string;
  challenge: string;
  solution: string;
  results: string[];
  liveUrl?: string;
  isAI?: boolean;
  aiFeatures?: string[];
  technicalApproach?: string;
  aiMetrics?: string[];
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId, onBack }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  // Mock project data - in a real app, this would come from an API or database
  const projectsData: Record<number, ProjectData> = {
    1: {
      id: 1,
      title: "E-Commerce Mobile App",
      category: "Mobile Design",
      description: "Complete mobile shopping experience with intuitive navigation and seamless checkout process.",
      fullDescription: "A comprehensive mobile e-commerce application designed to provide users with a seamless shopping experience. The project focused on creating an intuitive interface that reduces friction in the purchasing process while maintaining visual appeal and brand consistency.",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      tags: ["React Native", "UI/UX", "Figma", "User Research"],
      duration: "3 months",
      team: "4 people",
      role: "Lead UX/UI Designer",
      challenge: "The existing mobile shopping experience had a 68% cart abandonment rate and users complained about a confusing checkout process. The challenge was to redesign the entire user journey while maintaining the brand identity.",
      solution: "I conducted user interviews and usability testing to identify pain points. The solution included a simplified navigation structure, one-page checkout, guest checkout option, and improved product discovery through better categorization and search functionality.",
      results: [
        "Reduced cart abandonment rate by 45%",
        "Increased conversion rate by 32%",
        "Improved user satisfaction score from 3.2 to 4.6",
        "Decreased checkout time by 60%"
      ],
      liveUrl: "https://example.com"
    },
    2: {
      id: 2,
      title: "SaaS Dashboard",
      category: "Web Application",
      description: "Analytics dashboard with data visualization and real-time updates for business intelligence.",
      fullDescription: "A comprehensive business intelligence dashboard that helps companies visualize their data and make informed decisions. The project involved creating complex data visualizations while maintaining usability and clarity.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=800",
      images: [
        "https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/669610/pexels-photo-669610.jpg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpg?auto=compress&cs=tinysrgb&w=800"
      ],
      tags: ["React", "Dashboard", "Analytics", "D3.js"],
      duration: "4 months",
      team: "6 people",
      role: "Senior UX Designer",
      challenge: "Users were overwhelmed by the amount of data and couldn't find actionable insights quickly. The existing dashboard had poor information hierarchy and lacked customization options.",
      solution: "I redesigned the dashboard with a modular approach, allowing users to customize their view. Implemented progressive disclosure, improved data visualization with clear hierarchies, and added smart filtering and search capabilities.",
      results: [
        "Increased daily active users by 78%",
        "Reduced time to insight by 55%",
        "Improved user engagement by 89%",
        "Decreased support tickets by 40%"
      ],
      liveUrl: "https://example.com"
    },
    3: {
      id: 3,
      title: "Banking App Redesign",
      category: "Fintech",
      description: "Modern banking interface focused on security, accessibility, and user experience.",
      fullDescription: "A comprehensive redesign of a mobile banking application that prioritizes security while maintaining an intuitive user experience. The project involved extensive user research and compliance with financial regulations.",
      image: "https://images.pexels.com/photos/5668842/pexels-photo-5668842.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        "https://images.pexels.com/photos/5668842/pexels-photo-5668842.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpg?auto=compress&cs=tinysrgb&w=800"
      ],
      tags: ["Mobile", "Security", "UX Research", "Fintech"],
      duration: "5 months",
      team: "8 people",
      role: "Lead UX Designer",
      challenge: "Users found the existing banking app confusing and were concerned about security. The app had a complex navigation structure and lacked modern security features that users expected.",
      solution: "I led a complete redesign focusing on simplified navigation, enhanced security features with biometric authentication, and clear visual hierarchy. Implemented progressive disclosure for complex banking operations.",
      results: [
        "Increased user trust score by 67%",
        "Reduced transaction completion time by 43%",
        "Improved app store rating from 2.8 to 4.5",
        "Decreased customer support calls by 52%"
      ],
      liveUrl: "https://example.com"
    },
    4: {
      id: 4,
      title: "Food Delivery Platform",
      category: "Mobile & Web",
      description: "End-to-end food ordering experience with restaurant discovery and order tracking.",
      fullDescription: "A comprehensive food delivery platform that connects users with local restaurants. The project involved designing both customer and restaurant owner interfaces with real-time order tracking.",
      image: "https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        "https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpg?auto=compress&cs=tinysrgb&w=800"
      ],
      tags: ["Cross-platform", "Maps", "Real-time", "Mobile"],
      duration: "6 months",
      team: "10 people",
      role: "Senior Product Designer",
      challenge: "The food delivery market was saturated, and users needed a differentiated experience. The challenge was to create a platform that stood out while being intuitive for both customers and restaurant partners.",
      solution: "I designed a unique discovery experience with personalized recommendations, integrated social features for sharing favorite dishes, and a streamlined ordering process with real-time tracking and communication.",
      results: [
        "Achieved 85% user retention rate",
        "Increased average order value by 38%",
        "Reduced order cancellation rate by 29%",
        "Onboarded 500+ restaurant partners"
      ],
      liveUrl: "https://example.com"
    },
    5: {
      id: 5,
      title: "Healthcare Portal",
      category: "Healthcare",
      description: "Patient portal with appointment scheduling, medical records, and telemedicine features.",
      fullDescription: "A comprehensive healthcare portal designed to improve patient engagement and streamline healthcare delivery. The platform includes appointment management, secure messaging, and telemedicine capabilities.",
      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpg?auto=compress&cs=tinysrgb&w=800"
      ],
      tags: ["Healthcare", "Accessibility", "HIPAA", "Telemedicine"],
      duration: "8 months",
      team: "12 people",
      role: "Lead UX Designer",
      challenge: "Healthcare systems are complex and patients often struggle with accessing their information and communicating with providers. The challenge was to create an accessible, HIPAA-compliant platform that simplifies healthcare management.",
      solution: "I designed an intuitive patient portal with clear information architecture, accessible design following WCAG guidelines, secure messaging system, and integrated telemedicine features with simple video calling.",
      results: [
        "Improved patient satisfaction by 72%",
        "Reduced administrative calls by 58%",
        "Increased appointment adherence by 41%",
        "Achieved 100% HIPAA compliance"
      ],
      liveUrl: "https://example.com"
    },
    6: {
      id: 6,
      title: "Learning Management System",
      category: "Education",
      description: "Interactive e-learning platform with course management and progress tracking.",
      fullDescription: "A modern learning management system designed for both educators and students. The platform features interactive course creation tools, progress tracking, and collaborative learning features.",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpg?auto=compress&cs=tinysrgb&w=800"
      ],
      tags: ["Education", "Interaction", "Progress", "Collaboration"],
      duration: "7 months",
      team: "9 people",
      role: "Senior UX Designer",
      challenge: "Traditional learning management systems are often clunky and uninspiring. The challenge was to create an engaging platform that motivates learning while providing powerful tools for educators.",
      solution: "I designed an interactive learning experience with gamification elements, intuitive course creation tools, collaborative features, and comprehensive analytics for both students and instructors.",
      results: [
        "Increased course completion rate by 64%",
        "Improved student engagement by 81%",
        "Reduced instructor onboarding time by 47%",
        "Achieved 4.8/5 user satisfaction rating"
      ],
      liveUrl: "https://example.com"
    }
  };

  const project = projectsData[projectId] || projectsData[1];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Portfolio</span>
            </button>
            <div className="text-xl font-bold text-white">
              <span className="text-cyan-400">Theresa</span> Abegunde
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center mb-12">
              <div className="text-cyan-400 text-sm font-medium mb-4">{project.category}</div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{project.title}</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">{project.fullDescription}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Calendar className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-gray-400 text-sm">Duration</div>
                <div className="text-white font-medium">{project.duration}</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-gray-400 text-sm">Team Size</div>
                <div className="text-white font-medium">{project.team}</div>
              </div>
              <div className="text-center">
                <Target className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-gray-400 text-sm">My Role</div>
                <div className="text-white font-medium">{project.role}</div>
              </div>
            </div>

            {/* Project Links */}
            <div className="flex justify-center space-x-4 mb-16">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-700 transition-colors duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>View Live Site</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Challenge */}
              <div className={`transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <div className="flex items-center mb-6">
                  <Target className="w-6 h-6 text-cyan-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">The Challenge</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
              </div>

              {/* Solution */}
              <div className={`transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <div className="flex items-center mb-6">
                  <Lightbulb className="w-6 h-6 text-cyan-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">The Solution</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">{project.solution}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Specific Sections */}
      {project.isAI && (
        <>
          {/* AI Features */}
          <section className="py-16 bg-gray-800">
            <div className="container mx-auto px-6">
              <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center mb-4">
                    <Brain className="w-8 h-8 text-cyan-400 mr-3" />
                    <h2 className="text-3xl font-bold text-white">AI Capabilities</h2>
                  </div>
                  <p className="text-gray-300">Core artificial intelligence features powering this solution</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {project.aiFeatures?.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-6 rounded-xl border border-cyan-500/30 text-center hover:border-cyan-400/50 transition-colors duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-white font-semibold mb-2">{feature}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Technical Approach */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-white mb-4">Technical Approach</h2>
                  <p className="text-gray-300">How we implemented the AI solution</p>
                </div>
                
                <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                  <p className="text-gray-300 leading-relaxed text-lg">{project.technicalApproach}</p>
                </div>
              </div>
            </div>
          </section>

          {/* AI Metrics */}
          <section className="py-16 bg-gray-800">
            <div className="container mx-auto px-6">
              <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center mb-4">
                    <BarChart3 className="w-8 h-8 text-cyan-400 mr-3" />
                    <h2 className="text-3xl font-bold text-white">AI Performance Metrics</h2>
                  </div>
                  <p className="text-gray-300">Measurable AI performance and accuracy indicators</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {project.aiMetrics?.map((metric, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <BarChart3 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300 font-medium">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Process Images */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
            project.isAI ? 'delay-700' : 'delay-500'
          } ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              {project.isAI ? 'AI Design Process' : 'Design Process'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.images.map((image, index) => (
                <div key={index} className="group">
                  <img
                    src={image}
                    alt={`${project.title} process ${index + 1}`}
                    className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${
            project.isAI ? 'delay-800' : 'delay-600'
          } ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Results & Impact</h2>
              <p className="text-gray-300">
                {project.isAI 
                  ? 'The AI solution delivered measurable improvements across key performance indicators'
                  : 'The redesign delivered measurable improvements across key metrics'
                }
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {project.results.map((result, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-6 bg-gray-800 rounded-xl"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{result}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            project.isAI ? 'delay-900' : 'delay-700'
          } ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl font-bold text-white mb-8">Technologies Used</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-4 py-2 bg-gray-800 text-gray-300 rounded-full border border-gray-700 transition-colors duration-300 ${
                    project.isAI 
                      ? 'hover:border-cyan-400' 
                      : 'hover:border-indigo-400'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            project.isAI ? 'delay-1000' : 'delay-800'
          } ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl font-bold text-white mb-6">Interested in working together?</h2>
            <p className="text-gray-300 mb-8">Let's discuss your next project and create something amazing.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onBack}
                className="px-8 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors duration-300"
              >
                View More Projects
              </button>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onBack();
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className={`px-8 py-3 text-white rounded-lg font-medium transition-colors duration-300 ${
                  project.isAI
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700'
                    : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700'
                }`}
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;