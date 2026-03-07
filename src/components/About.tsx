import { useState, useEffect, useRef } from 'react';

export default function About() {
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
    <section
      ref={sectionRef}
      className="py-24 px-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50"
    >
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2
            className={`text-5xl font-bold text-gray-900 mb-4 ${
              isVisible ? 'animate-fade-in-down' : 'opacity-0'
            }`}
          >
            About Us
          </h2>

          <p
            className={`text-xl text-gray-600 ${
              isVisible ? 'animate-fade-in-down delay-100' : 'opacity-0'
            }`}
          >
            A global leader in next-generation digital services and consulting
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-16">

          <div
            className={`text-center p-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition ${
              isVisible ? 'animate-scale-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="text-6xl font-bold text-blue-600">59</div>
            <div className="text-lg text-gray-600 mt-2">Countries</div>
          </div>

          <div
            className={`text-center p-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition ${
              isVisible ? 'animate-scale-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="text-6xl font-bold text-purple-600">19.8</div>
            <div className="text-lg text-gray-600 mt-2">
              Mn sq. ft. of infrastructure
            </div>
          </div>

          <div
            className={`text-center p-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition ${
              isVisible ? 'animate-scale-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            <div className="text-6xl font-bold text-pink-600">24+</div>
            <div className="text-lg text-gray-600 mt-2">Years of Excellence</div>
          </div>

        </div>
      </div>
    </section>
  );
}