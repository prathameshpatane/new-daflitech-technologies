import { Menu, Search } from 'lucide-react';
import Hero from './components/Hero';
import ColorSection from './components/ColorSection';
import TheNext from './components/TheNext';
import Statistics from './components/Statistics';
import OpportunityBanner from './components/OpportunityBanner';
import Purpose from './components/Purpose';
import About from './components/About';
import News from './components/News';
import Investors from './components/Investors';
import Careers from './components/Careers';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-black text-white z-50 px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-12">
            <h1 className="text-xl font-bold">Daflitech</h1>
            <div className="hidden md:flex gap-8 text-sm">
              <a href="#" className="hover:opacity-70 transition">WHAT WE DO</a>
              <a href="#" className="hover:opacity-70 transition">WHO WE ARE</a>
              <a href="#" className="hover:opacity-70 transition">THINK</a>
              <a href="#" className="hover:opacity-70 transition">CAREERS</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Search className="w-5 h-5 cursor-pointer hover:opacity-70 transition" />
            <Menu className="w-6 h-6 cursor-pointer hover:opacity-70 transition" />
          </div>
        </div>
      </nav>

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
      <Careers />
      <Footer />
    </div>
  );
}

export default App;
