import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
         
          <div className="border-t border-gray-700 pt-8">
            <div className="flex items-center justify-center text-gray-400">
              <span>© 2025 Theresa Abegunde. Designed and built by yours truly.</span>
           
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;