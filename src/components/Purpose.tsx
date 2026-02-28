import { useState, useEffect, useRef } from 'react';

export default function Purpose() {
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
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className={`text-5xl font-bold text-gray-900 ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>Our Purpose:</h2>
        <p className={`text-2xl text-gray-700 leading-relaxed ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
          To amplify human potential and create the next opportunity for people, businesses and communities
        </p>
      </div>
    </section>
  );
}
