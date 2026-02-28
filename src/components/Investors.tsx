import { ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Investors() {
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
    <section ref={sectionRef} className="py-24 px-8 bg-gradient-to-br from-teal-600 to-cyan-700 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`relative h-96 rounded-lg overflow-hidden ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <img
              src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Investor Central"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-xl font-semibold">Integrated Annual Report 2024</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className={`text-sm uppercase tracking-wider opacity-80 ${isVisible ? 'animate-fade-in-right delay-100' : 'opacity-0'}`}>Investors</p>
            <h2 className={`text-5xl font-bold leading-tight ${isVisible ? 'animate-fade-in-right delay-200' : 'opacity-0'}`}>
              Maximizing long-term value with transparent governance
            </h2>
            <div className={`space-y-4 ${isVisible ? 'animate-fade-in-right delay-300' : 'opacity-0'}`}>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Investor Central</h3>
                <p className="opacity-90">Access financial reports, stock information, and governance documents</p>
              </div>
            </div>
            <button className={`flex items-center gap-2 bg-white text-teal-700 px-8 py-4 rounded-sm hover:bg-gray-100 transition font-semibold mt-8 ${isVisible ? 'animate-fade-in-right delay-400' : 'opacity-0'}`}>
              Visit Investor Relations
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
