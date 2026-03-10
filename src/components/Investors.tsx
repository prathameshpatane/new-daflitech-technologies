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
          <div className={`relative h-96 rounded-lg overflow-hidden group cursor-pointer ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Growth & Innovation"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/90 group-hover:to-black/60 transition duration-500"></div>
            
            {/* Text that slides up on hover - completely hidden initially */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="transform translate-y-32 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                <p className="text-2xl font-semibold mb-4">
                  Accelerating Digital Transformation
                </p>
                <p className="text-lg opacity-90 mb-3">
                  Driving innovation through cutting-edge technology and strategic excellence in the digital era.
                </p>
                <p className="text-base opacity-80">
                  Transforming businesses with scalable solutions and sustainable growth strategies.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className={`text-sm uppercase tracking-wider opacity-80 ${isVisible ? 'animate-fade-in-right delay-100' : 'opacity-0'}`}>Growth & Innovation</p>
            <h2 className={`text-5xl font-bold leading-tight ${isVisible ? 'animate-fade-in-right delay-200' : 'opacity-0'}`}>
              Scaling Excellence Through Innovation
            </h2>
            <div className={`space-y-4 ${isVisible ? 'animate-fade-in-right delay-300' : 'opacity-0'}`}>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Exponential Growth</h3>
                <p className="opacity-90">Leveraging cutting-edge technologies and strategic partnerships to deliver 300% year-over-year growth in digital solutions</p>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-semibold mb-2">Future-Ready Solutions</h3>
                <p className="opacity-90">Empowering businesses with AI-driven platforms, cloud infrastructure, and automation that drive measurable results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}