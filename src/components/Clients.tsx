import { Globe, Building2, MapPin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function Clients() {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const clients = [
    { name: "ApexCart E-Commerce Pvt. Ltd.", location: "Mumbai, India" },
    { name: "MediCare Plus Hospitals", location: "Pune, India" },
    { name: "Skyline Realty Group", location: "Bangalore, India" },
    { name: "EduNext International Academy", location: "Delhi, India" },
    { name: "Finovatech Solutions", location: "Hyderabad, India" },
    { name: "GlobalMart Online Store", location: "Dubai, UAE" },
    { name: "BrightPath Logistics", location: "Singapore" },
    { name: "NovaTech Digital Agency", location: "London, UK" },
    { name: "UrbanNest Interiors", location: "Chennai, India" },
    { name: "GreenLeaf Organics", location: "Ahmedabad, India" }
  ];

  const countries = [
    { flag: "🇮🇳", name: "India" },
    { flag: "🇦🇪", name: "UAE" },
    { flag: "🇸🇬", name: "Singapore" },
    { flag: "🇬🇧", name: "United Kingdom" },
    { flag: "🇺🇸", name: "United States" },
    { flag: "🇦🇺", name: "Australia" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div 
              id="header"
              data-animate
              className={`flex items-center justify-center gap-3 mb-6 transition-all duration-1000 ${
                visibleElements.has('header') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <Globe className="w-12 h-12 text-purple-600" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our Clients
              </h1>
            </div>
            <p 
              id="subtitle"
              data-animate
              className={`text-xl text-gray-700 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
                visibleElements.has('subtitle') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              At Daflitech Technologies, we are proud to have worked with forward-thinking companies across industries, 
              delivering high-performance web and digital solutions.
            </p>
          </div>

          <div className="mb-20">
            <div 
              id="clients-header"
              data-animate
              className={`flex items-center gap-3 mb-8 transition-all duration-1000 ${
                visibleElements.has('clients-header') 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              <Building2 className="w-8 h-8 text-purple-600" />
              <h2 className="text-3xl font-bold text-gray-900">Featured Clients</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clients.map((client, index) => (
                <div 
                  key={index}
                  id={`client-${index}`}
                  data-animate
                  className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-700 hover:-translate-y-1 border border-gray-100 ${
                    visibleElements.has(`client-${index}`) 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-12 scale-95'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{client.name}</h3>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{client.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div 
            id="international-section"
            data-animate
            className={`bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-12 text-white transition-all duration-1000 ${
              visibleElements.has('international-section') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}
          >
            <div 
              id="international-header"
              data-animate
              className={`flex items-center gap-3 mb-8 transition-all duration-1000 delay-200 ${
                visibleElements.has('international-header') 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              <Globe className="w-8 h-8" />
              <h2 className="text-3xl font-bold">International Presence</h2>
            </div>
            <p 
              id="international-text"
              data-animate
              className={`text-lg mb-8 text-gray-200 transition-all duration-1000 delay-400 ${
                visibleElements.has('international-text') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
            >
              We've successfully delivered projects for clients in:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {countries.map((country, index) => (
                <div 
                  key={index}
                  id={`country-${index}`}
                  data-animate
                  className={`bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-white/20 transition-all duration-700 ${
                    visibleElements.has(`country-${index}`) 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-8 scale-90'
                  }`}
                  style={{ transitionDelay: `${600 + index * 150}ms` }}
                >
                  <div className="text-4xl mb-2">{country.flag}</div>
                  <div className="text-sm font-medium">{country.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Clients;
