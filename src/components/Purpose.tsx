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
      <style>
        {`
          @keyframes colorShift {
            0% {
              color: #2563eb;
            }
            25% {
              color: #7c3aed;
            }
            50% {
              color: #ec4899;
            }
            75% {
              color: #06b6d4;
            }
            100% {
              color: #2563eb;
            }
          }

          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes fadeSlide {
            0%, 100% {
              opacity: 0.7;
              transform: translateY(0);
            }
            50% {
              opacity: 1;
              transform: translateY(-5px);
            }
          }

          .animate-color-shift {
            animation: colorShift 4s ease-in-out infinite;
          }

          .animate-gradient-text {
            background: linear-gradient(90deg, #2563eb, #7c3aed, #ec4899, #06b6d4, #2563eb);
            background-size: 200% 200%;
            animation: gradientShift 5s ease infinite;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .animate-fade-slide {
            animation: fadeSlide 3s ease-in-out infinite;
          }
        `}
      </style>

      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h2 
          className={`text-5xl font-bold animate-gradient-text ${
            isVisible ? 'animate-fade-in-down' : 'opacity-0'
          }`}
        >
          Our Purpose
        </h2>
        
        <p 
          className={`text-2xl text-gray-700 leading-relaxed animate-fade-slide ${
            isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'
          }`}
        >
          To amplify human potential and create the next opportunity for people, businesses and communities
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div 
            className={`p-6 ${isVisible ? 'animate-fade-in-left delay-200' : 'opacity-0'}`}
          >
            <h3 className="text-xl font-bold mb-3 animate-color-shift">Innovation First</h3>
            <p className="text-gray-600 animate-fade-slide" style={{ animationDelay: '0.5s' }}>
              Pioneering transformative solutions that reshape industries and drive meaningful change
            </p>
          </div>

          <div 
            className={`p-6 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}
          >
            <h3 className="text-xl font-bold mb-3 animate-color-shift" style={{ animationDelay: '1s' }}>
              Empower Communities
            </h3>
            <p className="text-gray-600 animate-fade-slide" style={{ animationDelay: '1s' }}>
              Building sustainable ecosystems that foster growth, inclusion, and collective prosperity
            </p>
          </div>

          <div 
            className={`p-6 ${isVisible ? 'animate-fade-in-right delay-400' : 'opacity-0'}`}
          >
            <h3 className="text-xl font-bold mb-3 animate-color-shift" style={{ animationDelay: '1.5s' }}>
              Shape Tomorrow
            </h3>
            <p className="text-gray-600 animate-fade-slide" style={{ animationDelay: '1.5s' }}>
              Creating future-ready platforms that enable organizations to thrive in the digital age
            </p>
          </div>
        </div>

        <div className={`mt-12 ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          <blockquote className="text-xl italic text-gray-600 border-l-4 border-purple-500 pl-6 animate-fade-slide" style={{ animationDelay: '2s' }}>
            "We believe in the power of technology to unlock unlimited possibilities and transform lives across the globe"
          </blockquote>
        </div>
      </div>
    </section>
  );
}