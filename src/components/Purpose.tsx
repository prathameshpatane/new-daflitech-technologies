import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

export default function Purpose() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const sectionRef = useRef(null);

  const pages = [
    {
      left: {
        title: "Our Purpose",
        content: "To amplify human potential and create the next opportunity for people, businesses and communities",
        bgGradient: "from-purple-600 via-pink-600 to-red-600",
        pattern: "dots",
        textColor: "text-white"
      },
      right: {
        title: "Our Values",
        points: [
          {
            title: "Innovation First",
            content: "Pioneering transformative solutions that reshape industries and drive meaningful change"
          },
          {
            title: "Empower Communities",
            content: "Building sustainable ecosystems that foster growth, inclusion, and collective prosperity"
          },
          {
            title: "Shape Tomorrow",
            content: "Creating future-ready platforms that enable organizations to thrive in the digital age"
          }
        ],
        bgGradient: "from-blue-600 via-indigo-600 to-purple-600",
        pattern: "grid",
        textColor: "text-white"
      }
    },
    {
      left: {
        title: "Our Vision",
        content: "We believe in the power of technology to unlock unlimited possibilities and transform lives across the globe",
        bgGradient: "from-emerald-600 via-teal-600 to-cyan-600",
        pattern: "waves",
        textColor: "text-white"
      },
      right: {
        title: "Our Commitment",
        points: [
          {
            title: "Excellence",
            content: "Delivering exceptional quality in every solution we create"
          },
          {
            title: "Sustainability",
            content: "Building solutions that benefit both business and planet"
          },
          {
            title: "Partnership",
            content: "Growing together with our clients and communities"
          }
        ],
        bgGradient: "from-orange-500 via-amber-500 to-yellow-500",
        pattern: "circles",
        textColor: "text-gray-900"
      }
    },
    {
      left: {
        title: "Digital Excellence",
        content: "Leveraging cutting-edge technology and innovative methodologies to deliver transformative digital solutions",
        bgGradient: "from-pink-600 via-rose-600 to-red-600",
        pattern: "diagonal",
        textColor: "text-white"
      },
      right: {
        title: "Core Capabilities",
        points: [
          {
            title: "Cloud Solutions",
            content: "Scalable infrastructure and cloud-native applications for modern businesses"
          },
          {
            title: "AI & Automation",
            content: "Intelligent systems that optimize operations and drive efficiency"
          },
          {
            title: "Data Analytics",
            content: "Transform raw data into actionable insights and strategic advantages"
          }
        ],
        bgGradient: "from-violet-600 via-purple-600 to-fuchsia-600",
        pattern: "dots",
        textColor: "text-white"
      }
    },
    {
      left: {
        title: "Global Impact",
        content: "Creating meaningful change across industries and geographies, empowering businesses worldwide to thrive in the digital age",
        bgGradient: "from-sky-600 via-blue-600 to-indigo-600",
        pattern: "grid",
        textColor: "text-white"
      },
      right: {
        title: "Industries We Serve",
        points: [
          {
            title: "Finance & Banking",
            content: "Digital transformation for secure, efficient financial services"
          },
          {
            title: "Healthcare",
            content: "Innovative solutions improving patient care and outcomes"
          },
          {
            title: "Retail & E-commerce",
            content: "Next-generation customer experiences and operations"
          }
        ],
        bgGradient: "from-lime-500 via-green-500 to-emerald-500",
        pattern: "waves",
        textColor: "text-gray-900"
      }
    },
    {
      left: {
        title: "Join Our Journey",
        content: "Together, we can build a future where technology empowers every individual and organization to achieve their fullest potential",
        bgGradient: "from-indigo-600 via-blue-600 to-cyan-600",
        pattern: "circles",
        textColor: "text-white"
      },
      right: {
        title: "Why Choose Us",
        points: [
          {
            title: "Proven Expertise",
            content: "Years of experience delivering successful digital transformations"
          },
          {
            title: "Client-Centric",
            content: "Your success is our priority, every step of the way"
          },
          {
            title: "Future-Ready",
            content: "Always ahead with the latest technologies and trends"
          }
        ],
        bgGradient: "from-fuchsia-600 via-pink-600 to-rose-600",
        pattern: "diagonal",
        textColor: "text-white"
      }
    }
  ];

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

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || !isVisible) return;

    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage((prev) => {
          if (prev >= pages.length - 1) {
            return 0; // Loop back to start
          }
          return prev + 1;
        });
        setIsFlipping(false);
      }, 600);
    }, 4000); // Change page every 4 seconds

    return () => clearInterval(interval);
  }, [autoPlay, isVisible, pages.length]);

  const nextPage = () => {
    if (currentPage < pages.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <style>
        {`
          @keyframes pageFlipRight {
            0% {
              transform: perspective(2000px) rotateY(0deg);
              transform-origin: left center;
            }
            100% {
              transform: perspective(2000px) rotateY(-180deg);
              transform-origin: left center;
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-15px) rotate(5deg);
            }
          }

          @keyframes shimmer {
            0% {
              background-position: -1000px 0;
            }
            100% {
              background-position: 1000px 0;
            }
          }

          @keyframes pulse-glow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
            }
            50% {
              box-shadow: 0 0 40px rgba(255, 255, 255, 0.6);
            }
          }

          .page-flip-right {
            animation: pageFlipRight 0.6s ease-in-out;
          }

          .fade-in-content {
            animation: fadeIn 0.8s ease-out forwards;
          }

          .book-shadow {
            box-shadow: 
              0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04),
              inset 0 0 50px rgba(0, 0, 0, 0.05);
          }

          .float-icon {
            animation: float 3s ease-in-out infinite;
          }

          .shimmer-effect {
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            background-size: 1000px 100%;
            animation: shimmer 3s infinite;
          }

          .pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite;
          }

          /* Pattern backgrounds */
          .pattern-dots {
            background-image: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
            background-size: 30px 30px;
          }

          .pattern-grid {
            background-image: 
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
            background-size: 50px 50px;
          }

          .pattern-waves {
            background-image: repeating-linear-gradient(
              45deg,
              rgba(255,255,255,0.1),
              rgba(255,255,255,0.1) 10px,
              transparent 10px,
              transparent 20px
            );
          }

          .pattern-circles {
            background-image: radial-gradient(circle, rgba(255,255,255,0.15) 20%, transparent 20%);
            background-size: 80px 80px;
          }

          .pattern-diagonal {
            background-image: repeating-linear-gradient(
              -45deg,
              rgba(255,255,255,0.1),
              rgba(255,255,255,0.1) 15px,
              transparent 15px,
              transparent 30px
            );
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto px-4">
        {/* Auto-play control */}
        <div className="flex justify-center mb-4 md:mb-6">
          <button
            onClick={() => setAutoPlay(!autoPlay)}
            className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm md:text-base"
          >
            {autoPlay ? (
              <>
                <Pause className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-medium">Pause</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-medium">Play</span>
              </>
            )}
          </button>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={prevPage}
            disabled={isFlipping}
            className={`absolute left-0 md:left-0 z-10 p-2 md:p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all ${
              isFlipping ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:scale-110'
            }`}
            style={{ transform: 'translateX(-50%)' }}
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
          </button>

          {/* Book Container */}
          <div className="relative w-full max-w-6xl">
            <div className="book-shadow rounded-lg overflow-hidden flex flex-col md:flex-row" style={{ minHeight: '600px' }}>
              
              {/* LEFT PAGE */}
              <div 
                className={`w-full md:w-1/2 relative p-8 md:p-12 bg-gradient-to-br ${pages[currentPage].left.bgGradient} ${
                  isFlipping ? 'page-flip-right' : ''
                }`}
                style={{ minHeight: '400px' }}
              >
                {/* Pattern Overlay */}
                <div className={`absolute inset-0 pattern-${pages[currentPage].left.pattern} opacity-50`}></div>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 shimmer-effect pointer-events-none"></div>
                
                <div className={`fade-in-content relative z-10 ${pages[currentPage].left.textColor} h-full flex flex-col items-center justify-center text-center`} key={`left-${currentPage}`}>
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8 drop-shadow-lg px-4">
                    {pages[currentPage].left.title}
                  </h2>
                  <p className="text-base md:text-xl leading-relaxed max-w-lg drop-shadow-md px-4">
                    {pages[currentPage].left.content}
                  </p>
                  
                  {/* Decorative elements */}
                  <div className="flex gap-3 mt-6 md:mt-8">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i}
                        className="w-2 h-2 bg-white/50 rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Page Number */}
                <div className={`absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 ${pages[currentPage].left.textColor} text-xs font-medium opacity-50`}>
                  {currentPage * 2 + 1}
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 left-0 w-16 md:w-20 h-16 md:h-20 border-t-4 border-l-4 border-white/30 rounded-tl-lg"></div>
                <div className="absolute bottom-0 left-0 w-16 md:w-20 h-16 md:h-20 border-b-4 border-l-4 border-white/30 rounded-bl-lg"></div>
                
                {/* Book spine shadow - hide on mobile */}
                <div className="hidden md:block absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/20 to-transparent"></div>
              </div>

              {/* CENTER SPINE - hide on mobile */}
              <div className="hidden md:block w-1 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-400 shadow-lg"></div>

              {/* RIGHT PAGE */}
              <div 
                className={`w-full md:w-1/2 relative p-8 md:p-12 bg-gradient-to-br ${pages[currentPage].right.bgGradient}`}
                style={{ minHeight: '400px' }}
              >
                {/* Pattern Overlay */}
                <div className={`absolute inset-0 pattern-${pages[currentPage].right.pattern} opacity-50`}></div>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 shimmer-effect pointer-events-none"></div>
                
                <div className={`fade-in-content relative z-10 ${pages[currentPage].right.textColor} h-full flex flex-col justify-center`} key={`right-${currentPage}`}>
                  <h3 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-center drop-shadow-lg px-4">
                    {pages[currentPage].right.title}
                  </h3>
                  
                  <div className="space-y-4 md:space-y-6">
                    {pages[currentPage].right.points.map((point, idx) => (
                      <div 
                        key={idx}
                        className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                        style={{ animationDelay: `${idx * 0.2}s` }}
                      >
                        <div className="flex items-start gap-3 md:gap-4">
                          <div className="flex-1">
                            <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2 drop-shadow-md">
                              {point.title}
                            </h4>
                            <p className="text-xs md:text-sm leading-relaxed opacity-90">
                              {point.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Page Number */}
                <div className={`absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 ${pages[currentPage].right.textColor} text-xs font-medium opacity-50`}>
                  {currentPage * 2 + 2}
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-16 md:w-20 h-16 md:h-20 border-t-4 border-r-4 border-white/30 rounded-tr-lg"></div>
                <div className="absolute bottom-0 right-0 w-16 md:w-20 h-16 md:h-20 border-b-4 border-r-4 border-white/30 rounded-br-lg"></div>
                
                {/* Book spine shadow - hide on mobile */}
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Page Indicator Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {pages.map((page, index) => {
                const colors: { [key: string]: string } = {
                  'purple-600': '#9333ea',
                  'pink-600': '#db2777',
                  'red-600': '#dc2626',
                  'blue-500': '#3b82f6',
                  'blue-600': '#2563eb',
                  'cyan-500': '#06b6d4',
                  'cyan-600': '#0891b2',
                  'teal-500': '#14b8a6',
                  'teal-600': '#0d9488',
                  'orange-500': '#f97316',
                  'yellow-500': '#eab308',
                  'amber-500': '#f59e0b',
                  'indigo-600': '#4f46e5',
                  'emerald-600': '#059669',
                  'green-600': '#16a34a',
                  'gray-900': '#111827',
                  'rose-600': '#e11d48',
                  'violet-600': '#7c3aed',
                  'fuchsia-600': '#c026d3',
                  'sky-600': '#0284c7',
                  'lime-500': '#84cc16',
                  'green-500': '#22c55e',
                  'emerald-500': '#10b981'
                };
                
                return (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isFlipping && index !== currentPage) {
                        setAutoPlay(false);
                        setIsFlipping(true);
                        setTimeout(() => {
                          setCurrentPage(index);
                          setIsFlipping(false);
                        }, 600);
                      }
                    }}
                    className={`h-3 rounded-full transition-all duration-300 relative overflow-hidden ${
                      index === currentPage 
                        ? 'w-12' 
                        : 'w-3 hover:w-6'
                    }`}
                    style={{
                      background: index === currentPage 
                        ? `linear-gradient(to right, ${page.left.bgGradient
                            .replace('from-', '')
                            .replace('via-', '')
                            .replace('to-', '')
                            .split(' ')
                            .map(c => colors[c] || '#6366f1')
                            .join(', ')})`
                        : '#d1d5db'
                    }}
                  >
                    {index === currentPage && autoPlay && (
                      <div 
                        className="absolute inset-0 bg-white/30 animate-pulse"
                      ></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextPage}
            disabled={isFlipping}
            className={`absolute right-0 md:right-0 z-10 p-2 md:p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all ${
              isFlipping ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:scale-110'
            }`}
            style={{ transform: 'translateX(50%)' }}
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
          </button>
        </div>

        {/* Instructions */}
        <div className="text-center mt-4 md:mt-6 text-gray-600 text-xs md:text-sm px-4">
          {autoPlay ? 'Auto-playing • Click pause to stop' : 'Click arrows, dots, or play to navigate'}
        </div>
      </div>
    </section>
  );
}