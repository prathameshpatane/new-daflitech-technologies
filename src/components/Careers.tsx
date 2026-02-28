import { ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Careers() {
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
    <section ref={sectionRef} className="py-24 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className={`text-sm uppercase tracking-wider text-gray-600 mb-4 ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>Careers</p>
          <h2 className={`text-5xl font-bold text-gray-900 mb-4 ${isVisible ? 'animate-fade-in-down delay-100' : 'opacity-0'}`}>
            Every #DayatInfosys is a day of our clients' digital transformation
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className={`relative h-96 rounded-lg overflow-hidden ${isVisible ? 'animate-fade-in-left delay-200' : 'opacity-0'}`}>
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team Collaboration"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div className={`relative h-96 rounded-lg overflow-hidden ${isVisible ? 'animate-fade-in-right delay-300' : 'opacity-0'}`}>
            <img
              src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Innovation"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-6">
              <p className="text-gray-900 font-semibold mb-2">Join our diverse, global team</p>
              <p className="text-gray-700 text-sm">Be part of a culture that champions innovation and growth</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className={`text-gray-600 mb-6 ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>Find opportunities that match your skills</p>
          <button className={`inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-sm hover:bg-gray-800 transition font-semibold ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
            Explore Careers
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
