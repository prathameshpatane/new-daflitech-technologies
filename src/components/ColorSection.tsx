import { ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface ColorSectionProps {
  bgColor: string;
  title: string;
  description: string;
  items: Array<{ title: string; subtitle: string }>;
  imageType: 'butterfly' | 'landscape' | 'bird';
}

const imageMap = {
  butterfly: 'https://images.pexels.com/photos/326212/pexels-photo-326212.jpeg?auto=compress&cs=tinysrgb&w=800',
  landscape: 'https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg?auto=compress&cs=tinysrgb&w=800',
  bird: 'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=800'
};

export default function ColorSection({ bgColor, title, description, items, imageType }: ColorSectionProps) {
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
    <section ref={sectionRef} className={`${bgColor} text-white py-24 px-8`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className={`text-5xl font-bold leading-tight ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>{title}</h2>
            <p className={`text-xl opacity-90 ${isVisible ? 'animate-fade-in-left delay-100' : 'opacity-0'}`}>{description}</p>

            <div className="space-y-6">
              {items.map((item, index) => (
                <div key={index} className={`space-y-2 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`} style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="opacity-80">{item.subtitle}</p>
                </div>
              ))}
            </div>

            <button className={`flex items-center gap-2 text-white border-2 border-white px-8 py-3 rounded-sm hover:bg-white hover:text-gray-900 transition font-semibold mt-8 ${isVisible ? 'animate-fade-in-left delay-500' : 'opacity-0'}`}>
              Learn More
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className={`relative h-96 rounded-lg overflow-hidden group ${isVisible ? 'animate-fade-in-right delay-200' : 'opacity-0'}`}>
            <img
              src={imageMap[imageType]}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute top-4 right-4 w-32 h-32 bg-gray-200/20 backdrop-blur-sm rounded-lg animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
