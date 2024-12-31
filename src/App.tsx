import React from 'react';
import { Download, Zap, Shield, Cpu, Gamepad2, Github } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feature from './components/Feature';
import DownloadSection from './components/DownloadSection';

function App() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "High Performance",
      description: "Optimized for maximum FPS and smooth gameplay experience"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Anti-Cheat Compatible",
      description: "Play safely on your favorite servers with our secure client"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Resource Efficient",
      description: "Minimal RAM usage while maintaining high performance"
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "Modern Interface",
      description: "Sleek and intuitive UI designed for gamers"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Alpine?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </section>

      <DownloadSection />
      
      <footer className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 Alpine Client. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="https://github.com/alpine-client" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;