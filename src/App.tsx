import { Menu, Search, X } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
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

// Page Components
function HomePage() {
  return (
    <>
      <Hero />
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
        bgColor="bg-blue-700"
        title="Digital Operating Model"
        description="Navigate complexity with agile frameworks and collaborative ecosystems"
        items={[
          { title: "Agile transformation", subtitle: "Enable rapid adaptation to market changes" },
          { title: "Data-driven insights", subtitle: "Unlock value from your digital infrastructure" }
        ]}
        imageType="landscape"
      />
      <ColorSection
        bgColor="bg-purple-700"
        title="Empowering Talent Transformations"
        description="Cultivate future-ready skills and foster inclusive growth"
        items={[
          { title: "Learning experiences", subtitle: "Continuous development programs" },
          { title: "Leadership development", subtitle: "Building tomorrow's leaders today" }
        ]}
        imageType="bird"
      />
      <TheNext />
      <Statistics />
      <OpportunityBanner />
      <Purpose />
      <About />
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

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <nav className="fixed top-0 w-full bg-white text-gray-900 z-50 px-8 py-4 shadow-md">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-12">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3">
                <img src="/daflitech.png" alt="Daflitech" className="h-10 w-auto" />
                <h1 className="text-xl font-bold cursor-pointer hover:opacity-70 transition">
                  Daflitech Technologies
                </h1>
              </Link>
              <div className="hidden md:flex gap-8 text-sm">
                <Link to="/what-we-do" className="hover:text-purple-600 transition">
                  WHAT WE DO
                </Link>
                <Link to="/clients" className="hover:text-purple-600 transition">
                  CLIENTS
                </Link>
                <Link to="/think" className="hover:text-purple-600 transition">
                  MISSION
                </Link>
                <Link to="/contact" className="hover:text-purple-600 transition">
                  CONTACT
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Search className="w-5 h-5 cursor-pointer hover:text-purple-600 transition" />
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 cursor-pointer hover:text-purple-600 transition" />
                ) : (
                  <Menu className="w-6 h-6 cursor-pointer hover:text-purple-600 transition" />
                )}
              </button>
              <Menu className="hidden md:block w-6 h-6 cursor-pointer hover:text-purple-600 transition" />
            </div>
          </div>
          
          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-4 py-6 space-y-4 border-t border-gray-200 mt-4">
              <Link 
                to="/what-we-do" 
                className="block text-sm hover:text-purple-600 transition py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                WHAT WE DO
              </Link>
              <Link 
                to="/clients" 
                className="block text-sm hover:text-purple-600 transition py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CLIENTS
              </Link>
              <Link 
                to="/think" 
                className="block text-sm hover:text-purple-600 transition py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                MISSION
              </Link>
              <Link 
                to="/contact" 
                className="block text-sm hover:text-purple-600 transition py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        </nav>

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