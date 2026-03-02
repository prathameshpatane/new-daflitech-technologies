import { Menu, Search } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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

function WhoWeArePage() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h1 className="text-5xl font-bold mb-8">Who We Are</h1>
        <div className="space-y-8">
          <p className="text-xl text-gray-700">
            Daflitech is a leading digital transformation partner, helping businesses navigate the complexities 
            of the modern digital landscape.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To empower organizations with innovative technology solutions that drive sustainable growth 
                and create lasting value.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the trusted partner for businesses seeking to thrive in the digital age through 
                cutting-edge technology and strategic innovation.
              </p>
            </div>
          </div>
          <About />
        </div>
      </div>
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
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <nav className="fixed top-0 w-full bg-black text-white z-50 px-8 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-12">
              <Link to="/">
                <h1 className="text-xl font-bold cursor-pointer hover:opacity-70 transition">
                  Daflitech
                </h1>
              </Link>
              <div className="hidden md:flex gap-8 text-sm">
                <Link to="/what-we-do" className="hover:opacity-70 transition">
                  WHAT WE DO
                </Link>
                <Link to="/who-we-are" className="hover:opacity-70 transition">
                  WHO WE ARE
                </Link>
                <Link to="/think" className="hover:opacity-70 transition">
                  MISSION
                </Link>
                <Link to="/contact
                " className="hover:opacity-70 transition">
                  CONTACT
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Search className="w-5 h-5 cursor-pointer hover:opacity-70 transition" />
              <Menu className="w-6 h-6 cursor-pointer hover:opacity-70 transition" />
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/what-we-do" element={<WhatWeDoPage />} />
          <Route path="/who-we-are" element={<WhoWeArePage />} />
          <Route path="/think" element={<ThinkPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;