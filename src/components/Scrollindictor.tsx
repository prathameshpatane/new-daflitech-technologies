import { useState, useEffect } from 'react';

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    'Digital Core',
    'Operating Model',
    'Transform',
    'The next',
    'Statistics',
    'Opportunity',
    'Purpose',
    'About'
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Get the section you want to track (e.g., TheNext component)
      const targetSection = document.getElementById('target-section');
      
      if (targetSection) {
        const rect = targetSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Show indicator when section is in viewport
        const isInView = rect.top <= windowHeight && rect.bottom >= 0;
        setIsVisible(isInView);
        
        // Calculate active section based on scroll position
        if (isInView) {
          const scrollPercentage = Math.abs(rect.top) / (rect.height - windowHeight);
          const sectionIndex = Math.min(
            Math.floor(scrollPercentage * sections.length),
            sections.length - 1
          );
          setActiveSection(sectionIndex);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-2 md:left-4 top-1/2 -translate-y-1/2 z-40 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
      }`}
    >
      <div className="flex flex-col items-start gap-6">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col items-start gap-3">
            {/* Top Line */}
            <div
              className={`h-px transition-all duration-300 ${
                index <= activeSection ? 'w-12 md:w-16 bg-gray-800' : 'w-6 md:w-8 bg-gray-300'
              }`}
            />
            
            {/* Text label - only show for active section on larger screens */}
            {index === activeSection && (
              <span className="hidden md:block text-sm md:text-base text-gray-600 font-medium animate-fade-in pl-1 whitespace-nowrap">
                {section}
              </span>
            )}
            
            {/* Bottom Line */}
            <div
              className={`h-px transition-all duration-300 ${
                index <= activeSection ? 'w-12 md:w-16 bg-gray-800' : 'w-6 md:w-8 bg-gray-300'
              }`}
            />
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ScrollIndicator;