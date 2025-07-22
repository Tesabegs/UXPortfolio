import React, { useEffect, useRef, useState } from 'react';
import { Mail, MessageSquare, Send, MapPin, Phone, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Tesabegs1@gmail.com',
      href: 'mailto:Tesabegs1@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Theresa Abegunde',
      href: 'https://www.linkedin.com/in/tessey-abegunde/'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+44 75 9368 5368',
      href: 'tel:+447593685368'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'London, UK',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I'm always excited to take on new challenges and collaborate on innovative projects. Let's 
              create something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="bg-gray-800 p-8 rounded-2xl shadow-lg h-full flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <MessageSquare className="w-6 h-6 mr-3 text-indigo-400" />
                  Send me a message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/20 transition-colors duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/20 transition-colors duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/20 transition-colors duration-200"
                      placeholder="Project discussion"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/20 transition-colors duration-200 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <div className="mt-auto">
                    <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:transform hover:scale-105"
                    >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="h-full">
                <div className="bg-gradient-to-br from-indigo-500/20 to-purple-600/20 p-8 rounded-2xl border border-indigo-500/20 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                  <p className="text-gray-300 mb-8">
                    I'm always open to discussing new opportunities, creative ideas, or potential collaborations. 
                    Whether you have a question or just want to say hello, feel free to reach out!
                  </p>
                  
                  <div className="space-y-4 flex-grow">
                    {contactInfo.map(({ icon: Icon, label, value, href }) => (
                      <a
                        key={label}
                        href={href}
                        className="flex items-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors duration-300 group"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-gray-400 text-sm">{label}</div>
                          <div className="text-white group-hover:text-indigo-400 transition-colors duration-300">
                            {value}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;