import { ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20">
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-7xl mx-auto px-8 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-6">
            <h1 className={`text-6xl md:text-7xl font-bold leading-tight ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Champions Evolve.
            </h1>
            <p className={`text-xl text-gray-300 max-w-lg ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
              Navigate your next with digital innovation and transformative solutions
            </p>
            <button className={`flex items-center gap-2 bg-white text-black px-8 py-4 rounded-sm hover:bg-gray-100 transition font-semibold ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
              Explore More
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className={`relative h-96 w-96 mx-auto ${isVisible ? 'animate-fade-in-right delay-300' : 'opacity-0'}`}>
            <img
              src="/daf.png"
              alt="Daflitech Technologies"
              className="w-full h-full object-cover object-center rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}