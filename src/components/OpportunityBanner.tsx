import { ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function OpportunityBanner() {
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
    <section ref={sectionRef} className="py-24 px-8 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className={`text-5xl font-bold leading-tight ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              Bring the Sound of Opportunity, Move 1,000,7,000 Lives Forward
            </h2>
            <button className={`flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-sm hover:bg-gray-100 transition font-semibold ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
              Discover How
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className={`relative h-64 rounded-lg overflow-hidden ${isVisible ? 'animate-fade-in-right delay-300' : 'opacity-0'}`}>
            <img
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Opportunity"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
