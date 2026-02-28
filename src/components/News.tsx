import { ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const newsItems = [
  {
    title: "Strategic CAPEX Breakthrough",
    description: "Leveraging digital technologies to transform infrastructure investments",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "The Future of Work",
    description: "Redefining workplace dynamics with hybrid models and digital collaboration",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "AI-Driven Innovation",
    description: "Harnessing artificial intelligence to accelerate business transformation",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

export default function News() {
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
    <section ref={sectionRef} className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-5xl font-bold text-gray-900 mb-16 ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>In the news</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className={`bg-amber-700 text-white p-12 rounded-lg space-y-6 ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            <h3 className="text-3xl font-bold">Latest Insights</h3>
            <p className="text-lg opacity-90">
              Discover how we're helping organizations navigate digital transformation and build resilient futures
            </p>
            <button className="flex items-center gap-2 text-white border-2 border-white px-6 py-3 rounded-sm hover:bg-white hover:text-amber-700 transition font-semibold">
              View All News
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {newsItems.map((item, index) => (
            <div key={index} className={`group cursor-pointer ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
