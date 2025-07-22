import React, { useEffect, useRef, useState } from 'react';
import { Mail, Linkedin, Dribbble } from 'lucide-react';
const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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

  const skills = [
    'Figma',
    'Adobe Creative Suite',
    'UI/UX Design',
    'Prototyping',
    'Product Strategy', 
    'User Research',
    'Design Systems',
    'Mural'
  ];

  // const tools = [
  //   'Figma',
  //   'Sketch', 
  //   'Adobe Creative Suite'
  // ];

  return (
    <section id="about" className="py-20 bg-gray-900" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                About Me
              </h2>
              
              <div className={`flex flex-wrap gap-4 mb-8 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}>
                <a
                  href="mailto:Tesabegs1@gmail.com"
                  className="inline-flex items-center space-x-3 bg-gray-800 hover:bg-indigo-500 text-white px-6 py-3 rounded-full transition-all duration-300 hover:transform hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">Email</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/tessey-abegunde/"
                  className="inline-flex items-center space-x-3 bg-gray-800 hover:bg-indigo-500 text-white px-6 py-3 rounded-full transition-all duration-300 hover:transform hover:scale-105"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                 {/* <a
                  href="#"
                  className="inline-flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:transform hover:scale-105"
                >
                  <Dribbble className="w-5 h-5" />
                  <span className="font-medium">Dribbble</span>
                </a> 
                <a
                  href="#"
                  className="inline-flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:transform hover:scale-105"
                >
                  <Dribbble className="w-5 h-5" />
                  <span className="font-medium">Behance</span>
                </a> */}
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}> 
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate products designer with 5+ years of experience creating user-centered digital 
                  solutions. I believe great design happens when creativity meets strategy, and user needs drive 
                  every decision.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  My expertise spans the entire design process, from user research and wireframing to 
                  prototyping and design systems. I love collaborating with cross-functional teams to bring ideas 
                  to life.
                </p>

                <div className="pt-8">
                  <div className="flex flex-wrap gap-3 mb-8">
                    {skills.map((skill, index) => (
                      <div
                        key={skill}
                        className={`bg-gray-800 px-4 py-3 rounded-full text-gray-300 font-medium transition-all duration-300 hover:bg-gray-700 hover:text-white hover:scale-105 text-sm whitespace-nowrap ${
                          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  {/* <div className="flex flex-wrap gap-3 mb-8">
                    {tools.map((tool, index) => (
                      <div
                        key={tool}
                        className={`bg-gray-800 px-4 py-2 rounded-full text-gray-300 font-medium transition-all duration-500 hover:bg-gray-700 hover:text-white text-sm whitespace-nowrap ${
                          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}
                        style={{ transitionDelay: `${900 + index * 100}ms` }}
                      >
                        {tool}
                      </div>
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
