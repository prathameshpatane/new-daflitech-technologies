import { Server, Compass, Map, MessageSquare } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const stats = [
  { icon: Server, label: 'Service', value: '92' },
  { icon: Compass, label: 'Explore', value: '1' },
  { icon: Map, label: 'Tour', value: '3' },
  { icon: MessageSquare, label: 'Chat', value: '0' }
];

export default function Statistics() {
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
    <section ref={sectionRef} className="py-16 px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center space-y-4 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="flex justify-center">
                <stat.icon className={`w-12 h-12 text-gray-700 ${isVisible ? 'animate-bounce' : ''}`} style={{ animationDelay: `${index * 0.15}s` }} />
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
