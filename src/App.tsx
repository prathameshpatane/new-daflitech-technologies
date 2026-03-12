import { Menu, Search, X } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ColorSection from './components/ColorSection';
import TheNext from './components/TheNext';
import Statistics from './components/Statistics';
import OpportunityBanner from './components/OpportunityBanner';
import Purpose from './components/Purpose';
import About from './components/About';
import News from './components/News';
import Investors from './components/Investors';
import Footer from './components/Footer';
import WhatWeDo from './components/Whatwedo';
import Contact from './components/Contact';
import Mission from './components/Mission';
import Clients from './components/Clients';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange';
import ScrollIndicator from './components/Scrollindictor';

// Type definitions
interface SearchResult {
  title: string;
  path: string;
  type: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

// Page Components
function HomePage() {
  return (
    <>
      <Hero />
      {/* Wrap the sections you want to track in a div with id */}
      <div id="target-section">
        <ColorSection
          bgColor="bg-amber-700"
          title="Digital Core Capabilities"
          description="Reimagine your business with cloud-native platforms and intelligent automation"
          items={[
            { title: "Cloud-first approach", subtitle: "Accelerate innovation with scalable solutions" },
            { title: "Automation & AI", subtitle: "Transform operations with intelligent systems" }
          ]}
          imageType="butterfly"
        />
        <ColorSection
          bgColor="bg-blue-600"
          title="Digital Operating Model"
          description="Navigate complexity with agile frameworks and collaborative ecosystems"
          items={[
            { title: "Agile transformation", subtitle: "Enable rapid adaptation to market changes" },
            { title: "Data-driven insights", subtitle: "Unlock value from your digital infrastructure" }
          ]}
          imageType="technology"
          imageLeft={true}
        />
        <ColorSection
          bgColor="bg-yellow-500"
          title="Empowering Talent Transformations"
          description="Cultivate future-ready skills and foster inclusive growth"
          items={[
            { title: "Learning experiences", subtitle: "Continuous development programs" },
            { title: "Leadership development", subtitle: "Building tomorrow's leaders today" }
          ]}
          imageType="bird"
          imageLeft={false}
        />
        <TheNext />
        <Statistics />
        <OpportunityBanner />
        <Purpose />
        <About />
      </div>
      <News />
      <Investors />
    </>
  );
}

function WhatWeDoPage() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h1 className="text-5xl font-bold mb-8">What We Do</h1>
        <div className="space-y-12">
         
          <WhatWeDo/>
          
        </div>
      </div>
    </div>
  );
}

function ClientsPage() {
  return (
    <div className="pt-20">
      <Clients />
    </div>
  );
}

function ThinkPage() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h1 className="text-5xl font-bold mb-8">Think</h1>
        <p className="text-xl text-gray-700 mb-12">
          Explore our latest insights, research, and thought leadership on digital transformation.
        </p>
        <Mission/>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
}

// Search Modal Component
function SearchModal({ isOpen, onClose, searchQuery, setSearchQuery }: SearchModalProps) {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (searchQuery.trim()) {
      // Simulate search - you can replace this with actual search logic
      const allContent: SearchResult[] = [
        { title: 'Digital Core Capabilities', path: '/', type: 'Service' },
        { title: 'Digital Operating Model', path: '/', type: 'Service' },
        { title: 'Empowering Talent Transformations', path: '/', type: 'Service' },
        { title: 'What We Do', path: '/what-we-do', type: 'Page' },
        { title: 'Clients', path: '/clients', type: 'Page' },
        { title: 'Mission', path: '/think', type: 'Page' },
        { title: 'Contact', path: '/contact', type: 'Page' },
        { title: 'Cloud-first approach', path: '/', type: 'Service' },
        { title: 'Automation & AI', path: '/', type: 'Service' },
        { title: 'Agile transformation', path: '/', type: 'Service' },
      ];

      const filtered = allContent.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    // Close on escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm">
      <div className="min-h-screen px-4 pt-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <Search className="w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for services, pages, or content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 text-lg outline-none"
                  autoFocus
                />
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>
            
            <div className="max-h-96 overflow-y-auto">
              {searchQuery.trim() === '' ? (
                <div className="p-8 text-center text-gray-500">
                  <p>Start typing to search...</p>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <p>No results found for "{searchQuery}"</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {searchResults.map((result, index) => (
                    <Link
                      key={index}
                      to={result.path}
                      onClick={onClose}
                      className="block p-4 hover:bg-gray-50 transition"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">{result.title}</h3>
                          <p className="text-sm text-gray-500 mt-1">{result.type}</p>
                        </div>
                        <div className="text-blue-600">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-4 text-center text-sm text-white/70">
            Press <kbd className="px-2 py-1 bg-white/20 rounded">ESC</kbd> to close
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleSearchOpen = () => {
    setIsSearchOpen(true);
    setSearchQuery('');
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <style>
          {`
            @keyframes textGlow {
              0%, 100% {
                text-shadow: 0 0 10px rgba(255, 255, 255, 0.5),
                             0 0 20px rgba(255, 255, 255, 0.3),
                             0 0 30px rgba(255, 255, 255, 0.2);
                transform: translateY(0);
              }
              50% {
                text-shadow: 0 0 20px rgba(255, 255, 255, 0.8),
                             0 0 30px rgba(255, 255, 255, 0.6),
                             0 0 40px rgba(255, 255, 255, 0.4);
                transform: translateY(-2px);
              }
            }

            @keyframes fadeInUp {
              0% {
                opacity: 0;
                transform: translateY(20px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes pulse {
              0%, 100% {
                opacity: 1;
              }
              50% {
                opacity: 0.8;
              }
            }

            .animate-text-glow {
              animation: textGlow 3s ease-in-out infinite;
            }

            .animate-fade-in-up-infinite {
              animation: fadeInUp 2s ease-out infinite;
            }

            .animate-pulse-slow {
              animation: pulse 4s ease-in-out infinite;
            }

            kbd {
              font-family: monospace;
            }
          `}
        </style>
        
        {/* Search Modal */}
        <SearchModal 
          isOpen={isSearchOpen}
          onClose={handleSearchClose}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        
        <nav className={`fixed top-0 w-full bg-transparent z-50 px-8 py-4 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-12">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3">
                <img src="/daflitech.png" alt="Daflitech" className="h-10 w-auto" />
                <h1 className="text-xl font-bold cursor-pointer hover:opacity-70 transition text-white">
                  Daflitech Technologies
                </h1>
              </Link>
              <div className="hidden md:flex gap-8 text-sm">
                <Link to="/what-we-do" className="relative hover:text-purple-300 transition group text-white">
                  WHAT WE DO
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/clients" className="relative hover:text-purple-300 transition group text-white">
                  CLIENTS
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/think" className="relative hover:text-purple-300 transition group text-white">
                  MISSION
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/contact" className="relative hover:text-purple-300 transition group text-white">
                  CONTACT
                  <span className="absolute bottom-0 left-0 w-0.5 bg-purple-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <button 
                onClick={handleSearchOpen}
                className="focus:outline-none"
                aria-label="Open search"
              >
                <Search className="w-5 h-5 cursor-pointer hover:text-purple-300 transition text-white" />
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 cursor-pointer hover:text-purple-300 transition text-white" />
                ) : (
                  <Menu className="w-6 h-6 cursor-pointer hover:text-purple-300 transition text-white" />
                )}
              </button>
              <Menu className="hidden md:block w-6 h-6 cursor-pointer hover:text-purple-300 transition text-white" />
            </div>
          </div>
          
          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-4 py-6 space-y-4 border-t border-white/20 mt-4">
              <Link 
                to="/what-we-do" 
                className="block text-sm hover:text-purple-300 transition py-2 text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                WHAT WE DO
              </Link>
              <Link 
                to="/clients" 
                className="block text-sm hover:text-purple-300 transition py-2 text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CLIENTS
              </Link>
              <Link 
                to="/think" 
                className="block text-sm hover:text-purple-300 transition py-2 text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                MISSION
              </Link>
              <Link 
                to="/contact" 
                className="block text-sm hover:text-purple-300 transition py-2 text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        </nav>

        {/* Scroll Indicator - only shown on home page */}
        <ScrollIndicator />

        <ScrollToTopOnRouteChange />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/what-we-do" element={<WhatWeDoPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/think" element={<ThinkPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;