import { useState, useEffect, useRef } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
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

  // Counter animation effect
  useEffect(() => {
    if (isVisible) {
      // Counter 1: 0 to 59
      const duration1 = 2000;
      const increment1 = 59 / (duration1 / 16);
      let current1 = 0;
      const timer1 = setInterval(() => {
        current1 += increment1;
        if (current1 >= 59) {
          setCount1(59);
          clearInterval(timer1);
        } else {
          setCount1(Math.floor(current1));
        }
      }, 16);

      // Counter 2: 0 to 19.8
      const duration2 = 2000;
      const increment2 = 19.8 / (duration2 / 16);
      let current2 = 0;
      const timer2 = setInterval(() => {
        current2 += increment2;
        if (current2 >= 19.8) {
          setCount2(19.8);
          clearInterval(timer2);
        } else {
          setCount2(parseFloat(current2.toFixed(1)));
        }
      }, 16);

      // Counter 3: 0 to 24
      const duration3 = 2000;
      const increment3 = 24 / (duration3 / 16);
      let current3 = 0;
      const timer3 = setInterval(() => {
        current3 += increment3;
        if (current3 >= 24) {
          setCount3(24);
          clearInterval(timer3);
        } else {
          setCount3(Math.floor(current3));
        }
      }, 16);

      return () => {
        clearInterval(timer1);
        clearInterval(timer2);
        clearInterval(timer3);
      };
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50"
    >
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

          .animate-color-shift {
            animation: colorShift 4s ease-in-out infinite;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2
            className={`text-5xl font-bold mb-4 animate-color-shift ${
              isVisible ? 'animate-fade-in-down' : 'opacity-0'
            }`}
          >
            About Us
          </h2>

          <p
            className={`text-xl font-semibold animate-color-shift ${
              isVisible ? 'animate-fade-in-down delay-100' : 'opacity-0'
            }`}
            style={{ animationDelay: '1s' }}
          >
            A global leader in next-generation digital services and consulting
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-16">

          <div
            className={`text-center p-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition ${
              isVisible ? 'animate-scale-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="text-6xl font-bold text-blue-600">{count1}</div>
            <div className="text-lg text-gray-600 mt-2">Countries</div>
          </div>

          <div
            className={`text-center p-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition ${
              isVisible ? 'animate-scale-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="text-6xl font-bold text-purple-600">{count2}</div>
            <div className="text-lg text-gray-600 mt-2">
              Mn sq. ft. of infrastructure
            </div>
          </div>

          <div
            className={`text-center p-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition ${
              isVisible ? 'animate-scale-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            <div className="text-6xl font-bold text-pink-600">{count3}+</div>
            <div className="text-lg text-gray-600 mt-2">Years of Excellence</div>
          </div>

        </div>
      </div>
    </section>
  );
}