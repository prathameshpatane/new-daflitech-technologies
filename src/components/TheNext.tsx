import { useState, useEffect, useRef } from 'react';

export default function TheNext() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold text-gray-900 mb-4 ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>The next</h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-down delay-100' : 'opacity-0'}`}>
            We bring you powerful advantages to navigate the digital transformation landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className={`relative h-96 rounded-lg overflow-hidden group ${isVisible ? 'animate-fade-in-left delay-200' : 'opacity-0'}`}>
            <img
              src="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="VR Innovation"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>

          <div className={`relative h-96 rounded-lg overflow-hidden group ${isVisible ? 'animate-fade-in-right delay-300' : 'opacity-0'}`}>
            <img
              src="https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Digital Collaboration"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
