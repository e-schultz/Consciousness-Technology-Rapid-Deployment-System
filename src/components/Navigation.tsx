import React from 'react';
import { BrainIcon, ArchiveIcon, AlertTriangleIcon, RocketIcon, LineChartIcon, ShieldIcon, ClockIcon, BookOpenIcon, MusicIcon } from 'lucide-react';
export const Navigation = ({
  activeSection,
  setActiveSection
}) => {
  const sections = [{
    id: 'overview',
    label: 'Overview',
    icon: <BrainIcon className="w-5 h-5" />
  }, {
    id: 'musical',
    label: 'Musical Archaeology',
    icon: <MusicIcon className="w-5 h-5" />
  }, {
    id: 'digital',
    label: 'Digital Preservation',
    icon: <ArchiveIcon className="w-5 h-5" />
  }, {
    id: 'moral',
    label: 'Moral Panic',
    icon: <AlertTriangleIcon className="w-5 h-5" />
  }, {
    id: 'rapid',
    label: 'Rapid Deployment',
    icon: <RocketIcon className="w-5 h-5" />
  }, {
    id: 'meta',
    label: 'Meta Patterns',
    icon: <LineChartIcon className="w-5 h-5" />
  }, {
    id: 'principles',
    label: 'Core Principles',
    icon: <ShieldIcon className="w-5 h-5" />
  }, {
    id: 'timeline',
    label: 'Timeline',
    icon: <ClockIcon className="w-5 h-5" />
  }, {
    id: 'explore',
    label: 'Explore',
    icon: <BookOpenIcon className="w-5 h-5" />
  }];
  return <nav className="sticky top-0 z-50 bg-black py-4 border-b border-[#222] mb-8 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {sections.map(section => <button key={section.id} onClick={() => setActiveSection(section.id)} className={`flex items-center px-4 py-3 rounded-md transition-all ${activeSection === section.id ? `bg-[#111] border-2 border-[#444] ${section.id === 'musical' ? 'text-green-400' : 'text-purple-400'}` : 'bg-[#0a0a0a] text-gray-400 hover:bg-[#111] hover:text-gray-300'}`}>
              <span className="mr-2">{section.icon}</span>
              <span className="text-base font-medium">{section.label}</span>
            </button>)}
        </div>
      </div>
    </nav>;
};