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
          <div className={`relative h-96 rounded-lg overflow-hidden group cursor-pointer ${isVisible ? 'animate-fade-in-left delay-200' : 'opacity-0'}`}>
            <img
              src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Technology Development"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/90 group-hover:to-black/50 transition duration-500"></div>
            
            {/* Text overlay - slides up from bottom */}
            <div className="absolute inset-0 flex flex-col justify-end items-center p-8 pb-12">
              <h3 className="text-3xl font-bold text-white mb-4 transform translate-y-32 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                Technology Innovation
              </h3>
              <p className="text-lg text-gray-200 text-center transform translate-y-32 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500 delay-100">
                Harness cutting-edge technologies to drive business transformation. From AI and machine learning to cloud infrastructure, we empower organizations to stay ahead in the digital age.
              </p>
            </div>
          </div>

          <div className={`relative h-96 rounded-lg overflow-hidden group cursor-pointer ${isVisible ? 'animate-fade-in-right delay-300' : 'opacity-0'}`}>
            <img
              src="https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Digital Collaboration"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/90 group-hover:to-black/50 transition duration-500"></div>
            
            {/* Text overlay - slides up from bottom */}
            <div className="absolute inset-0 flex flex-col justify-end items-center p-8 pb-12">
              <h3 className="text-3xl font-bold text-white mb-4 transform translate-y-32 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                Digital Collaboration
              </h3>
              <p className="text-lg text-gray-200 text-center transform translate-y-32 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500 delay-100">
                Foster seamless collaboration across teams and geographies. Our innovative solutions enable real-time connectivity, enhanced productivity, and smarter decision-making for modern enterprises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}