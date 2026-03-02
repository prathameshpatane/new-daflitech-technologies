import { Target, Eye, Heart, Users, Lightbulb, Shield, Rocket, Globe2, Award, TrendingUp, Zap, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

function Mission() {
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
    
    document.querySelectorAll('[data-animate]').forEach((element) => {
      observer.observe(element);
    });
    
    return () => observer.disconnect();
  }, []);

  const coreValues = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description: "We constantly push boundaries and embrace cutting-edge technologies to deliver solutions that shape the future.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity & Trust",
      description: "We build lasting relationships through transparency, honesty, and unwavering commitment to our clients' success.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client-Centric",
      description: "Your success is our success. We prioritize understanding your needs and delivering solutions that exceed expectations.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion & Dedication",
      description: "We love what we do and bring enthusiasm and commitment to every project, no matter the size.",
      color: "from-red-500 to-rose-500"
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "Global Impact",
      description: "We think globally and act locally, creating solutions that make a positive difference worldwide.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const milestones = [
    {
      year: "2015",
      title: "Founded",
      description: "Daflitech Technologies was born with a vision to revolutionize digital solutions"
    },
    {
      year: "2017",
      title: "First 100 Clients",
      description: "Reached our first major milestone, serving clients across 10 countries"
    },
    {
      year: "2019",
      title: "AI Division Launch",
      description: "Expanded into artificial intelligence and machine learning services"
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "Opened offices in 4 continents, growing our team to 200+ professionals"
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Awarded 'Best Tech Innovation Company' by multiple industry bodies"
    },
    {
      year: "2024",
      title: "500+ Projects",
      description: "Successfully delivered over 500 projects with 98% client satisfaction"
    }
  ];

  const impactStats = [
    {
      icon: <Award className="w-8 h-8" />,
      number: "500+",
      label: "Projects Completed",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "200+",
      label: "Happy Clients",
      color: "from-purple-600 to-purple-800"
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      number: "15+",
      label: "Countries Served",
      color: "from-pink-600 to-pink-800"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "98%",
      label: "Client Satisfaction",
      color: "from-green-600 to-green-800"
    }
  ];

  const commitments = [
    {
      title: "Sustainability",
      description: "We're committed to environmentally responsible practices, from green hosting solutions to carbon-neutral operations.",
      icon: <Globe2 className="w-6 h-6" />
    },
    {
      title: "Diversity & Inclusion",
      description: "We celebrate diversity and foster an inclusive environment where every voice is heard and valued.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth through ongoing training, certifications, and access to cutting-edge technologies.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: "Community Impact",
      description: "We give back through pro-bono work for nonprofits, tech education programs, and local community initiatives.",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
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
            Our <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Mission & Vision</span>
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
            Empowering businesses through innovative technology solutions and shaping the future of digital transformation
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div 
              id="mission-card"
              data-animate
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 p-12 text-white transition-all duration-1000 ${
                visibleSections.has('mission-card') 
                  ? 'opacity-100 translate-x-0 rotate-0' 
                  : 'opacity-0 -translate-x-10 -rotate-2'
              }`}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 mb-6 backdrop-blur-sm">
                  <Target className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg leading-relaxed text-gray-100 mb-6">
                  To empower organizations worldwide with innovative, scalable, and transformative technology solutions that drive sustainable growth, enhance operational efficiency, and create lasting value in an ever-evolving digital landscape.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Deliver cutting-edge solutions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Foster long-term partnerships</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Drive digital transformation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div 
              id="vision-card"
              data-animate
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-600 to-purple-600 p-12 text-white transition-all duration-1000 delay-200 ${
                visibleSections.has('vision-card') 
                  ? 'opacity-100 translate-x-0 rotate-0' 
                  : 'opacity-0 translate-x-10 rotate-2'
              }`}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 mb-6 backdrop-blur-sm">
                  <Eye className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
                <p className="text-lg leading-relaxed text-gray-100 mb-6">
                  To be the global leader and most trusted partner in digital innovation, recognized for setting industry standards, pioneering breakthrough technologies, and creating a positive impact on businesses and communities worldwide.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Lead industry innovation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Expand global presence</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Shape the digital future</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div 
            id="values-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleSections.has('values-title') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-5xl font-bold mb-4 text-gray-900">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                id={`value-${index}`}
                data-animate
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden transform hover:-translate-y-2 ${
                  visibleSections.has(`value-${index}`) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-r ${value.color} p-6 text-white`}>
                  <div className="transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    {value.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-8 bg-gradient-to-br from-gray-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div 
            id="impact-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleSections.has('impact-title') 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-90'
            }`}
          >
            <h2 className="text-5xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-gray-300">
              Creating meaningful change through technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div 
                key={index}
                id={`stat-${index}`}
                data-animate
                className={`text-center transition-all duration-1000 ${
                  visibleSections.has(`stat-${index}`) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} mb-4 transform hover:scale-110 hover:rotate-12 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div 
            id="journey-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleSections.has('journey-title') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-5xl font-bold mb-4 text-gray-900">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our growth story
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600 hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  id={`milestone-${index}`}
                  data-animate
                  className={`relative transition-all duration-1000 ${
                    visibleSections.has(`milestone-${index}`) 
                      ? 'opacity-100 translate-x-0' 
                      : `opacity-0 ${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}`
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:ml-auto lg:pl-12'}`}>
                    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                      <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold mb-3`}>
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 border-4 border-white shadow-lg hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div 
            id="commitments-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleSections.has('commitments-title') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-5xl font-bold mb-4 text-gray-900">Our Commitments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond business: Our responsibility to people and planet
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {commitments.map((commitment, index) => (
              <div 
                key={index}
                id={`commitment-${index}`}
                data-animate
                className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 ${
                  visibleSections.has(`commitment-${index}`) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white">
                    {commitment.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{commitment.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{commitment.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            id="cta-section"
            data-animate
            className={`transition-all duration-1000 ${
              visibleSections.has('cta-section') 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-90'
            }`}
          >
            <Zap className="w-16 h-16 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Us on Our Mission
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Be part of something bigger. Let's create innovative solutions that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105 shadow-xl">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition transform hover:scale-105">
                Join Our Team
              </button>
            </div>
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
      `}</style>
    </div>
  );
}

export default Mission;