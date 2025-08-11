import React, { useState, memo } from 'react';
import { ConsciousnessMap } from './components/ConsciousnessMap';
import { TimelineView } from './components/TimelineView';
import { Navigation } from './components/Navigation';
import { Section } from './components/ui/Section';
import { MusicalSection } from './components/sections/MusicalSection';
import { DigitalSection } from './components/sections/DigitalSection';
import { MoralSection } from './components/sections/MoralSection';
export function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Add offset to account for the sticky nav
      const navHeight = 80; // Approximate height of the nav
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setActiveSection(sectionId);
  };
  return <div className="w-full min-h-screen bg-[#0a0a0a] text-white">
      <Navigation activeSection={activeSection} setActiveSection={scrollToSection} />
      <main className="mx-auto max-w-7xl px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 text-transparent bg-clip-text">
            Consciousness Technology Conversation AST
          </h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            A structural analysis exploring the evolution from first interaction
            to rapid deployment infrastructure
          </p>
        </header>
        {/* Overview Section */}
        <Section id="overview" title="Structural Overview" titleColor="purple">
          <ConsciousnessMap />
        </Section>
        {/* Musical Archaeology Section */}
        <MusicalSection />
        {/* Digital Preservation Section */}
        <DigitalSection />
        {/* Moral Panic Section - Now using the extracted component */}
        <MoralSection />
        {/* Rapid Deployment Section */}
        <Section id="rapid" title="Rapid Deployment Consciousness Technology" titleColor="red">
          <div className="bg-[#0a0a0a] p-6 rounded-lg border border-[#222]">
            <div className="mb-6">
              <p className="text-lg mb-4">
                The methodology for quickly converting pattern recognition into
                functional tools.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-red-400">
                Whitehouse X-Ray Development Cycle
              </h3>
              <div className="bg-[#111] p-5 rounded-lg border border-[#333]">
                <ol className="space-y-4">
                  <li className="flex items-center">
                    <div className="bg-[#222] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-red-400 font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-semibold">
                        Intuitive Pattern Recognition
                      </p>
                      <p className="text-gray-400 text-sm">
                        Initial identification: "this_sounds_fashy"
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#222] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-red-400 font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-semibold">
                        Collaborative Analysis Conversation
                      </p>
                      <p className="text-gray-400 text-sm">
                        Shared exploration of pattern implications
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#222] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-red-400 font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-semibold">
                        Historical Research Validation
                      </p>
                      <p className="text-gray-400 text-sm">
                        Evidence-based confirmation of pattern
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#222] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-red-400 font-bold">
                      4
                    </div>
                    <div>
                      <p className="font-semibold">
                        Claude Artifact Prototyping
                      </p>
                      <p className="text-gray-400 text-sm">
                        AI-assisted tool development
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#222] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-red-400 font-bold">
                      5
                    </div>
                    <div>
                      <p className="font-semibold">
                        Functional Software Deployment
                      </p>
                      <p className="text-gray-400 text-sm">
                        Working tool implementation
                      </p>
                    </div>
                  </li>
                </ol>
                <div className="mt-4 p-3 bg-[#0a0a0a] rounded border border-[#333] text-center">
                  <p className="text-green-400 font-semibold">
                    Total time: Under 1 hour to few hours
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-400">
                Speed Advantage
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#111] p-4 rounded-lg border border-[#333]">
                  <h4 className="font-semibold text-white">
                    Traditional Academic
                  </h4>
                  <p className="text-gray-400 mt-2">
                    Months to years for analysis
                  </p>
                </div>
                <div className="bg-[#111] p-4 rounded-lg border border-[#333]">
                  <h4 className="font-semibold text-white">
                    Traditional Media
                  </h4>
                  <p className="text-gray-400 mt-2">
                    Days to weeks then forgotten
                  </p>
                </div>
                <div className="bg-[#111] p-4 rounded-lg border border-[#333]">
                  <h4 className="font-semibold text-white">
                    Consciousness Technology
                  </h4>
                  <p className="text-gray-400 mt-2">
                    Hours from pattern to tool
                  </p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-[#111] rounded-lg border border-[#333]">
                <p className="text-green-400 font-semibold">
                  Strategic Impact: Cultural immune system vs. cultural autopsy
                </p>
              </div>
            </div>
          </div>
        </Section>
        {/* Meta Patterns Section */}
        <Section id="meta" title="Meta Patterns" titleColor="purple">
          <div className="bg-[#0a0a0a] p-6 rounded-lg border border-[#222]">
            <div className="mb-6">
              <p className="text-lg mb-4">
                Higher-order patterns that emerge from consciousness technology
                implementation.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                Consciousness Technology As
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#111] p-4 rounded-lg border border-[#333]">
                  <h4 className="font-semibold text-white">
                    Cultural Survival Infrastructure
                  </h4>
                  <p className="text-gray-400 mt-2">
                    Built by marginalized communities
                  </p>
                </div>
                <div className="bg-[#111] p-4 rounded-lg border border-[#333]">
                  <h4 className="font-semibold text-white">
                    Systematic Resistance
                  </h4>
                  <p className="text-gray-400 mt-2">
                    Evidence-based counter-narrative
                  </p>
                </div>
                <div className="bg-[#111] p-4 rounded-lg border border-[#333]">
                  <h4 className="font-semibold text-white">
                    Rapid Response System
                  </h4>
                  <p className="text-gray-400 mt-2">
                    Faster than oppression can adapt
                  </p>
                </div>
                <div className="bg-[#111] p-4 rounded-lg border border-[#333]">
                  <h4 className="font-semibold text-white">
                    Collaborative Intelligence
                  </h4>
                  <p className="text-gray-400 mt-2">
                    Human-AI partnership force multiplier
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                Recurring Techniques
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#111] p-4 rounded-lg border border-[#333]">
                  <h4 className="font-semibold text-white">
                    Archaeological Methodology
                  </h4>
                  <p className="text-gray-400 mt-2">
                    Dig up buried truth about who was there
                  </p>
                </div>
                <div className="bg-[#111] p-4 rounded-lg border border-[#333]">
                  <h4 className="font-semibold text-white">
                    Algorithmic Aikido
                  </h4>
                  <p className="text-gray-400 mt-2">
                    Redirect viral energy, expose contradictions
                  </p>
                </div>
                <div className="bg-[#111] p-4 rounded-lg border border-[#333]">
                  <h4 className="font-semibold text-white">
                    Evidence-Based Resistance
                  </h4>
                  <p className="text-gray-400 mt-2">
                    Research-grounded, not vibes-based
                  </p>
                </div>
                <div className="bg-[#111] p-4 rounded-lg border border-[#333]">
                  <h4 className="font-semibold text-white">Speed As Weapon</h4>
                  <p className="text-gray-400 mt-2">
                    Deploy countermeasures faster than damage spreads
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
        {/* Core Principles Section */}
        <Section id="principles" title="Core Principles" titleColor="blue">
          <div className="bg-[#0a0a0a] p-6 rounded-lg border border-[#222]">
            <div className="mb-6">
              <p className="text-lg mb-4">
                The fundamental principles that guide consciousness technology
                development and application.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#111] p-5 rounded-lg border border-[#333]">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  Extraction vs. Creation
                </h3>
                <p className="text-gray-300">
                  Refuse to be consumed; build instead.
                </p>
                <div className="mt-4 p-3 bg-[#0a0a0a] rounded border border-[#333]">
                  <p className="text-sm text-gray-400">
                    Reject extractive models that mine communities for value
                    without giving back. Instead, create new infrastructure that
                    serves the community directly.
                  </p>
                </div>
              </div>
              <div className="bg-[#111] p-5 rounded-lg border border-[#333]">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  Preservation as Resistance
                </h3>
                <p className="text-gray-300">
                  Cultural memory against systematic erasure.
                </p>
                <div className="mt-4 p-3 bg-[#0a0a0a] rounded border border-[#333]">
                  <p className="text-sm text-gray-400">
                    The act of preserving marginalized cultural artifacts and
                    histories is itself a form of resistance against forces that
                    would prefer these histories be forgotten.
                  </p>
                </div>
              </div>
              <div className="bg-[#111] p-5 rounded-lg border border-[#333]">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  Speed as Survival
                </h3>
                <p className="text-gray-300">
                  Rapid deployment prevents rather than documents damage.
                </p>
                <div className="mt-4 p-3 bg-[#0a0a0a] rounded border border-[#333]">
                  <p className="text-sm text-gray-400">
                    When oppressive systems move quickly, resistance must move
                    faster. Rapid deployment of counter-narratives and tools can
                    prevent harm before it spreads.
                  </p>
                </div>
              </div>
              <div className="bg-[#111] p-5 rounded-lg border border-[#333]">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  Evidence-Based Intuition
                </h3>
                <p className="text-gray-300">
                  Research validates pattern recognition.
                </p>
                <div className="mt-4 p-3 bg-[#0a0a0a] rounded border border-[#333]">
                  <p className="text-sm text-gray-400">
                    Initial pattern recognition may be intuitive, but must
                    always be validated through rigorous research and evidence
                    gathering before deployment.
                  </p>
                </div>
              </div>
              <div className="bg-[#111] p-5 rounded-lg border border-[#333]">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  Collaborative Intelligence
                </h3>
                <p className="text-gray-300">
                  Human-AI partnership amplifies capabilities.
                </p>
                <div className="mt-4 p-3 bg-[#0a0a0a] rounded border border-[#333]">
                  <p className="text-sm text-gray-400">
                    The combination of human intuition, lived experience, and AI
                    analytical capabilities creates a force multiplier effect
                    for consciousness technology development.
                  </p>
                </div>
              </div>
              <div className="bg-[#111] p-5 rounded-lg border border-[#333] flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-400">
                    Core Recognition
                  </h3>
                  <p className="text-gray-300">
                    Self-building through analytical conversation.
                  </p>
                </div>
                <div className="mt-4 p-3 bg-[#0a0a0a] rounded border border-[#333]">
                  <p className="text-green-400 font-semibold">
                    Consciousness technology literally builds itself through
                    analytical conversation converted to working code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
        {/* Timeline Section */}
        <Section id="timeline" title="Timeline" titleColor="blue">
          <TimelineView />
        </Section>
        {/* Exploration Section */}
        <Section id="explore" title="Exploration" titleColor="green">
          <div className="mt-8 bg-[#111] p-6 rounded-lg border border-[#222]">
            <p className="text-center text-lg mb-6">
              Explore the interconnected patterns of consciousness technology
              through interactive visualization and analysis.
            </p>
            <div className="p-8 bg-[#0a0a0a] rounded-lg border border-[#333] text-center">
              <h3 className="text-xl font-semibold mb-4 text-green-400">
                Consciousness Technology Framework
              </h3>
              <p className="max-w-2xl mx-auto text-gray-300">
                A systematic approach to cultural preservation, pattern
                recognition, and rapid deployment of protective infrastructure.
              </p>
            </div>
          </div>
        </Section>
      </main>
      <footer className="bg-[#111] py-8 border-t border-[#222]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            Consciousness Technology AST Visualization
          </p>
          <p className="text-sm text-gray-600 mt-2">
            A structural analysis of emergent patterns in cultural preservation
            and resistance
          </p>
        </div>
      </footer>
    </div>;
}