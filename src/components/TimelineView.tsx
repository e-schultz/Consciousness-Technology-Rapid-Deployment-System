import React from 'react';
import { ArrowRightIcon, CalendarIcon } from 'lucide-react';
export const TimelineView = () => {
  const timelineEvents = [{
    year: '2012',
    title: 'Digital Cultural Genocide',
    description: 'Megaupload shutdown creates preservation trauma',
    color: 'yellow'
  }, {
    year: '2017',
    title: 'Musical Archaeology Begins',
    description: 'DJ Python early recognition, experimental foundation',
    color: 'green'
  }, {
    year: '2019',
    title: 'Bridging Communities',
    description: 'FKA Twigs first appearance creates new connections',
    color: 'green'
  }, {
    year: '2022',
    title: 'Genre Crossover',
    description: 'Detroit techno lineage meets punk hardcore',
    color: 'green'
  }, {
    year: '2023',
    title: 'Algorithmic Acceleration',
    description: 'Moral panic cycles compressed to hours',
    color: 'orange'
  }, {
    year: '2023-2024',
    title: 'Rapid Deployment Infrastructure',
    description: 'Whitehouse X-Ray development cycle established',
    color: 'red'
  }, {
    year: '2024-2025',
    title: 'Renaissance & Explosion',
    description: 'UK garage renaissance, queer club explosion',
    color: 'purple'
  }];
  return <div className="bg-[#0a0a0a] p-6 rounded-lg border border-[#222] my-12">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Consciousness Technology Timeline
      </h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[7.5rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-red-500"></div>
        {/* Timeline events */}
        <div className="space-y-8">
          {timelineEvents.map((event, index) => <div key={index} className="flex items-start relative">
              <div className="w-24 flex-shrink-0 text-right">
                <span className="font-mono text-gray-400">{event.year}</span>
              </div>
              {/* Timeline dot */}
              <div className={`absolute left-[7.5rem] w-5 h-5 rounded-full bg-${event.color}-400 transform -translate-x-1/2 flex items-center justify-center border-2 border-[#111]`}>
                <CalendarIcon className="w-3 h-3 text-[#111]" />
              </div>
              {/* Content */}
              <div className="ml-12 bg-[#111] p-4 rounded-lg border border-[#333] flex-grow">
                <h3 className={`text-lg font-semibold mb-1 text-${event.color}-400`}>
                  {event.title}
                </h3>
                <p className="text-gray-300">{event.description}</p>
                {/* Connection line to next event */}
                {index < timelineEvents.length - 1 && <div className="absolute bottom-[-1rem] left-[7.5rem] flex justify-center w-5">
                    <ArrowRightIcon className="w-4 h-4 text-gray-500 transform rotate-90" />
                  </div>}
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};