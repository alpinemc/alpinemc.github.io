import React from 'react';
import { Download, Monitor, Apple } from 'lucide-react';

const DownloadSection = () => {
  return (
    <section id="download" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Download Alpine Client</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <DownloadCard
            icon={<Monitor className="w-8 h-8" />}
            platform="Windows"
            version="1.0.0"
            requirements="Windows 10 64-bit"
          />
          <DownloadCard
            icon={<Apple className="w-8 h-8" />}
            platform="macOS"
            version="1.0.0"
            requirements="macOS 10.15+"
          />
          <DownloadCard
            icon={<Monitor className="w-8 h-8" />}
            platform="Linux"
            version="1.0.0"
            requirements="Ubuntu 20.04+"
          />
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">System Requirements</p>
          <ul className="text-gray-300 space-y-2">
            <li>Java 17 or newer</li>
            <li>4GB RAM minimum</li>
            <li>OpenGL 3.3 or newer</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

interface DownloadCardProps {
  icon: React.ReactNode;
  platform: string;
  version: string;
  requirements: string;
}

const DownloadCard = ({ icon, platform, version, requirements }: DownloadCardProps) => {
  return (
    <div className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-colors">
      <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{platform}</h3>
      <p className="text-gray-400 mb-4">Version {version}</p>
      <p className="text-sm text-gray-500 mb-4">{requirements}</p>
      <button className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        <Download className="w-4 h-4 mr-2" />
        Download
      </button>
    </div>
  );
}

export default DownloadSection;