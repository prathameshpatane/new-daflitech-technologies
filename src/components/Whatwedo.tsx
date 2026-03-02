import { Code, Smartphone, Brain, Link as LinkIcon, Gamepad2, Globe, Zap, Shield, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

function WhatWeDo() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set(prev).add(entry.target.id));
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
    
    // Observe all animated elements
    document.querySelectorAll('[data-animate]').forEach((element) => {
      observer.observe(element);
    });
    
    return () => observer.disconnect();
  }, []);
  const services = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Web Development",
      description: "Creating stunning, responsive websites that captivate your audience and drive business growth. From e-commerce platforms to corporate websites, we build digital experiences that matter.",
      features: ["Responsive Design", "SEO Optimization", "E-commerce Solutions", "CMS Integration"],
      color: "from-blue-600 to-blue-800",
      bgAccent: "bg-blue-50"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "App Development",
      description: "Crafting powerful mobile applications for iOS and Android that deliver seamless user experiences. We transform your ideas into feature-rich apps that users love.",
      features: ["Native & Cross-platform", "UI/UX Excellence", "Cloud Integration", "App Store Optimization"],
      color: "from-purple-600 to-purple-800",
      bgAccent: "bg-purple-50"
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI & Machine Learning",
      description: "Harnessing the power of artificial intelligence to automate processes, predict outcomes, and unlock insights from your data. We bring intelligence to your business operations.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Automation Solutions"],
      color: "from-pink-600 to-pink-800",
      bgAccent: "bg-pink-50"
    },
    {
      icon: <LinkIcon className="w-12 h-12" />,
      title: "Blockchain Development",
      description: "Building secure, transparent, and decentralized solutions using blockchain technology. From smart contracts to NFT platforms, we're at the forefront of Web3 innovation.",
      features: ["Smart Contracts", "DeFi Solutions", "NFT Platforms", "Crypto Wallets"],
      color: "from-amber-600 to-amber-800",
      bgAccent: "bg-amber-50"
    },
    {
      icon: <Gamepad2 className="w-12 h-12" />,
      title: "Game Development",
      description: "Designing immersive gaming experiences across platforms. Whether it's mobile games, web-based games, or complex multiplayer systems, we bring your vision to life.",
      features: ["2D/3D Game Design", "Multiplayer Systems", "AR/VR Experiences", "Cross-platform Games"],
      color: "from-green-600 to-green-800",
      bgAccent: "bg-green-50"
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Custom Software Development",
      description: "Tailored software solutions designed specifically for your unique business needs. We build scalable, secure, and efficient systems that give you a competitive edge.",
      features: ["Enterprise Solutions", "SaaS Platforms", "API Development", "Legacy Modernization"],
      color: "from-indigo-600 to-indigo-800",
      bgAccent: "bg-indigo-50"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "200+", label: "Happy Clients" },
    { number: "50+", label: "Expert Team Members" },
    { number: "15+", label: "Countries Served" }
  ];

  const whyChooseUs = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Innovation First",
      description: "We don't just follow trends—we set them. Our team stays ahead of the curve with cutting-edge technologies."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assured",
      description: "Rigorous testing and quality control ensure every solution we deliver meets the highest standards."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rapid Delivery",
      description: "Agile methodologies and efficient processes mean faster time-to-market without compromising quality."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center text-white">
          <h1 
            id="hero-title"
            data-animate
            className={`text-6xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 ${
              visibleSections.has('hero-title') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            Welcome to <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Daflitech Technologies</span>
          </h1>
          <p 
            id="hero-subtitle"
            data-animate
            className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-200 transition-all duration-1000 delay-200 ${
              visibleSections.has('hero-subtitle') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            At Daflitech Technologies, we are dedicated to delivering a wide range of innovative and tailored software solutions to help businesses thrive in the digital age.
          </p>
          <p 
            id="hero-description"
            data-animate
            className={`text-lg md:text-xl max-w-3xl mx-auto text-gray-300 transition-all duration-1000 delay-300 ${
              visibleSections.has('hero-description') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            As the <span className="font-bold text-white">best software company</span>, we specialize in <span className="font-bold text-white">Website Design</span>, ensuring your online presence is both visually appealing and highly functional.
          </p>
          <div 
            id="hero-cta"
            data-animate
            className={`mt-12 transition-all duration-1000 delay-500 ${
              visibleSections.has('hero-cta') 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-90'
            }`}
          >
            <button className="bg-white text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105 shadow-2xl">
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                id={`stat-${index}`}
                data-animate
                className={`text-center transition-all duration-700 ${
                  visibleSections.has(`stat-${index}`) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-8 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 
            id="mission-title"
            data-animate
            className={`text-4xl md:text-5xl font-bold mb-6 text-gray-900 transition-all duration-1000 ${
              visibleSections.has('mission-title') 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}
          >
            Setting Industry Trends
          </h2>
          <p 
            id="mission-text"
            data-animate
            className={`text-xl text-gray-700 leading-relaxed transition-all duration-1000 delay-200 ${
              visibleSections.has('mission-text') 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-10'
            }`}
          >
            Our unique offerings span the technological spectrum—from cutting-edge software development to transformative digital strategies. <span className="font-bold text-purple-700">We don't just follow industry trends; we set them.</span>
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              id="services-title"
              data-animate
              className={`text-5xl font-bold mb-4 text-gray-900 transition-all duration-1000 ${
                visibleSections.has('services-title') 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-90'
              }`}
            >
              Our Services
            </h2>
            <p 
              id="services-subtitle"
              data-animate
              className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
                visibleSections.has('services-subtitle') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-5'
              }`}
            >
              Comprehensive technology solutions designed to propel your business forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                id={`service-${index}`}
                data-animate
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden transform hover:-translate-y-2 ${
                  visibleSections.has(`service-${index}`) 
                    ? 'opacity-100 translate-y-0 rotate-0' 
                    : 'opacity-0 translate-y-10 rotate-3'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`bg-gradient-to-r ${service.color} p-8 text-white`}>
                  <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-2`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button className={`mt-6 w-full py-3 rounded-lg bg-gradient-to-r ${service.color} text-white font-semibold hover:opacity-90 transition`}>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              id="why-title"
              data-animate
              className={`text-5xl font-bold mb-4 transition-all duration-1000 ${
                visibleSections.has('why-title') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-10'
              }`}
            >
              Why Choose Daflitech?
            </h2>
            <p 
              id="why-subtitle"
              data-animate
              className={`text-xl text-gray-300 transition-all duration-1000 delay-200 ${
                visibleSections.has('why-subtitle') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              Partner with a team that's committed to your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                id={`why-${index}`}
                data-animate
                className={`text-center transition-all duration-1000 ${
                  visibleSections.has(`why-${index}`) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mb-6 transform hover:scale-110 hover:rotate-12 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            id="cta-title"
            data-animate
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
              visibleSections.has('cta-title') 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-75'
            }`}
          >
            Ready to Transform Your Business?
          </h2>
          <p 
            id="cta-text"
            data-animate
            className={`text-xl mb-8 opacity-90 transition-all duration-1000 delay-200 ${
              visibleSections.has('cta-text') 
                ? 'opacity-90 translate-y-0' 
                : 'opacity-0 translate-y-5'
            }`}
          >
            Let's discuss how Daflitech Technologies can help you achieve your digital goals.
          </p>
          <div 
            id="cta-buttons"
            data-animate
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${
              visibleSections.has('cta-buttons') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105 shadow-xl">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition transform hover:scale-105">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes rotateIn {
          from {
            opacity: 0;
            transform: rotate(-5deg) translateY(20px);
          }
          to {
            opacity: 1;
            transform: rotate(0) translateY(0);
          }
        }
        
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-400 { transition-delay: 400ms; }
        .delay-500 { transition-delay: 500ms; }
      `}</style>
    </div>
  );
}

export default WhatWeDo;