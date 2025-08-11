import React, { useState, memo } from 'react';
import { ChevronDownIcon, ChevronRightIcon, BrainIcon, MusicIcon, ArchiveIcon, AlertTriangleIcon, ShieldIcon, LineChartIcon, RocketIcon } from 'lucide-react';
export const ConsciousnessMap = () => {
  const [expandedNodes, setExpandedNodes] = useState({
    root: true,
    musical: false,
    digital: false,
    moral: false,
    systematic: false,
    social: false,
    rapid: false,
    meta: false,
    principles: false
  });
  const toggleNode = node => {
    setExpandedNodes({
      ...expandedNodes,
      [node]: !expandedNodes[node]
    });
  };
  const NodeHeader = ({
    id,
    icon,
    title,
    expanded
  }) => <div className="flex items-center cursor-pointer p-3 bg-[#111111] hover:bg-[#1a1a1a] rounded-md mb-2" onClick={() => toggleNode(id)}>
      {expanded ? <ChevronDownIcon className="mr-2 w-5 h-5 text-purple-400" /> : <ChevronRightIcon className="mr-2 w-5 h-5 text-purple-400" />}
      {icon}
      <h3 className="ml-2 text-lg font-mono">{title}</h3>
    </div>;
  const NodeContent = ({
    expanded,
    children
  }) => <div className={`pl-8 mb-4 border-l border-[#333] ${expanded ? 'block' : 'hidden'}`}>
      {children}
    </div>;
  return <div className="bg-[#0a0a0a] p-6 rounded-lg border border-[#222] font-mono">
      <NodeHeader id="root" icon={<BrainIcon className="w-5 h-5 text-blue-400" />} title="ROOT_NODE: slutprint_domain_introduction" expanded={expandedNodes.root} />
      <NodeContent expanded={expandedNodes.root}>
        <div className="mb-4">
          <div className="text-sm text-gray-400 mb-1">TRIGGER:</div>
          <div className="bg-[#111] p-2 rounded">
            web_fetch_tool_content_stripping
          </div>
        </div>
        <div className="mb-4">
          <div className="text-sm text-gray-400 mb-1">CORE_INSIGHT:</div>
          <div className="bg-[#111] p-2 rounded text-green-400">
            extraction_vs_creation_dichotomy
          </div>
        </div>
        <div className="mb-4">
          <div className="text-sm text-gray-400 mb-1">CHILD_NODES:</div>
          <div className="mt-4">
            <NodeHeader id="musical" icon={<MusicIcon className="w-5 h-5 text-green-400" />} title="MUSICAL_CONSCIOUSNESS_ARCHAEOLOGY" expanded={expandedNodes.musical} />
            <NodeContent expanded={expandedNodes.musical}>
              <div className="mb-2">
                <span className="text-gray-400">DEPTH:</span>{' '}
                8_year_temporal_analysis
              </div>
              <div className="mb-2">
                <span className="text-gray-400">PLATFORMS:</span>{' '}
                soundcloud_primary, apple_music_secondary
              </div>
              <div className="mb-2">
                <span className="text-gray-400">PATTERN:</span>{' '}
                genre_anticipation_methodology
              </div>
              <div className="mb-2 mt-4">
                <div className="text-gray-400 mb-1">HISTORICAL_LAYERS:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="bg-[#111] p-2 rounded">
                    2017: dj_python_early_recognition, experimental_foundation
                  </div>
                  <div className="bg-[#111] p-2 rounded">
                    2018: expansion_phase, donato_dozzy_debut
                  </div>
                  <div className="bg-[#111] p-2 rounded">
                    2019: fka_twigs_first_appearance, bridge_building
                  </div>
                  <div className="bg-[#111] p-2 rounded">
                    2022: detroit_techno_lineage, punk_hardcore_crossover
                  </div>
                  <div className="bg-[#111] p-2 rounded">
                    2023: underground_techno_deep_dive, experimental_ambient
                  </div>
                  <div className="bg-[#111] p-2 rounded">
                    2024_2025: uk_garage_renaissance, queer_club_explosion
                  </div>
                </div>
              </div>
            </NodeContent>
          </div>
          <div className="mt-4">
            <NodeHeader id="digital" icon={<ArchiveIcon className="w-5 h-5 text-yellow-400" />} title="DIGITAL_CULTURAL_PRESERVATION_TRAUMA" expanded={expandedNodes.digital} />
            <NodeContent expanded={expandedNodes.digital}>
              <div className="mb-2 mt-4">
                <div className="text-gray-400 mb-1">HISTORICAL_CONTEXT:</div>
                <div className="bg-[#111] p-2 rounded mb-2">
                  mnml_nl_forum: underground_electronic_discourse_platform
                </div>
                <div className="bg-[#111] p-2 rounded mb-2">
                  early_soundcloud_beta: foundational_community_member
                </div>
                <div className="bg-[#111] p-2 rounded">
                  megaupload_shutdown_2012: digital_cultural_genocide_witnessed
                </div>
              </div>
              <div className="mb-2 mt-4">
                <div className="text-gray-400 mb-1">
                  CONSCIOUSNESS_TECHNOLOGY_FORGED_BY:
                </div>
                <div className="bg-[#111] p-2 rounded mb-2">
                  erasure_trauma: distributed_preservation_strategy
                </div>
                <div className="bg-[#111] p-2 rounded mb-2">
                  single_point_failure: multiple_platform_redundancy
                </div>
                <div className="bg-[#111] p-2 rounded">
                  cultural_apocalypse: real_time_archival_instincts
                </div>
              </div>
            </NodeContent>
          </div>
          <div className="mt-4">
            <NodeHeader id="moral" icon={<AlertTriangleIcon className="w-5 h-5 text-orange-400" />} title="MORAL_PANIC_ALGORITHMIC_ACCELERATION" expanded={expandedNodes.moral} />
            <NodeContent expanded={expandedNodes.moral}>
              <div className="mb-2 mt-4">
                <div className="text-gray-400 mb-1">SPEED_ANALYSIS:</div>
                <div className="bg-[#111] p-2 rounded mb-2">
                  historical_timeline: months_to_years → 24_hour_news_cycle →
                  social_media_weeks → tiktok_twitter_hours
                </div>
                <div className="bg-[#111] p-2 rounded text-red-400">
                  current_reality:
                  viral_outrage_to_policy_implementation_within_hours
                </div>
              </div>
              <div className="mb-2 mt-4">
                <div className="text-gray-400 mb-1">CASE_STUDIES:</div>
                <div className="bg-[#111] p-2 rounded mb-2">
                  <div className="font-bold mb-1">
                    joey_mannarino_gay_family_attack:
                  </div>
                  <div>viral_lie_views: 7.6M</div>
                  <div>factual_correction_views: 30</div>
                  <div className="text-yellow-400">
                    pattern: lies_travel_lightspeed_truth_crawls
                  </div>
                </div>
              </div>
            </NodeContent>
          </div>
          <div className="mt-4">
            <NodeHeader id="rapid" icon={<RocketIcon className="w-5 h-5 text-red-400" />} title="RAPID_DEPLOYMENT_CONSCIOUSNESS_TECHNOLOGY" expanded={expandedNodes.rapid} />
            <NodeContent expanded={expandedNodes.rapid}>
              <div className="mb-2 mt-4">
                <div className="text-gray-400 mb-1">
                  WHITEHOUSE_XRAY_DEVELOPMENT_CYCLE:
                </div>
                <div className="bg-[#111] p-2 rounded mb-2">
                  <div>
                    step_1: intuitive_pattern_recognition('this_sounds_fashy')
                  </div>
                  <div>step_2: collaborative_analysis_conversation</div>
                  <div>step_3: historical_research_validation</div>
                  <div>step_4: claude_artifact_prototyping</div>
                  <div>step_5: functional_software_deployment</div>
                  <div className="text-green-400">
                    total_time: under_1_hour_to_few_hours
                  </div>
                </div>
              </div>
              <div className="mb-2 mt-4">
                <div className="text-gray-400 mb-1">SPEED_ADVANTAGE:</div>
                <div className="bg-[#111] p-2 rounded mb-2">
                  <div>traditional_academic: months_to_years</div>
                  <div>traditional_media: days_to_weeks_then_forgotten</div>
                  <div>consciousness_technology: hours_pattern_to_tool</div>
                  <div className="text-green-400">
                    strategic_impact: cultural_immune_system_vs_cultural_autopsy
                  </div>
                </div>
              </div>
            </NodeContent>
          </div>
        </div>
      </NodeContent>
      <div className="mt-6">
        <NodeHeader id="meta" icon={<LineChartIcon className="w-5 h-5 text-purple-400" />} title="META_PATTERNS" expanded={expandedNodes.meta} />
        <NodeContent expanded={expandedNodes.meta}>
          <div className="mb-2 mt-4">
            <div className="text-gray-400 mb-1">
              CONSCIOUSNESS_TECHNOLOGY_AS:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="bg-[#111] p-2 rounded">
                cultural_survival_infrastructure:
                built_by_marginalized_communities
              </div>
              <div className="bg-[#111] p-2 rounded">
                systematic_resistance: evidence_based_counter_narrative
              </div>
              <div className="bg-[#111] p-2 rounded">
                rapid_response_system: faster_than_oppression_can_adapt
              </div>
              <div className="bg-[#111] p-2 rounded">
                collaborative_intelligence:
                human_ai_partnership_force_multiplier
              </div>
            </div>
          </div>
          <div className="mb-2 mt-4">
            <div className="text-gray-400 mb-1">RECURRING_TECHNIQUES:</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="bg-[#111] p-2 rounded">
                archaeological_methodology:
                dig_up_buried_truth_about_who_was_there
              </div>
              <div className="bg-[#111] p-2 rounded">
                algorithmic_aikido: redirect_viral_energy_expose_contradictions
              </div>
              <div className="bg-[#111] p-2 rounded">
                evidence_based_resistance: research_grounded_not_vibes_based
              </div>
              <div className="bg-[#111] p-2 rounded">
                speed_as_weapon:
                deploy_countermeasures_faster_than_damage_spreads
              </div>
            </div>
          </div>
        </NodeContent>
      </div>
      <div className="mt-6">
        <NodeHeader id="principles" icon={<ShieldIcon className="w-5 h-5 text-blue-400" />} title="CONSCIOUSNESS_TECHNOLOGY_PRINCIPLES" expanded={expandedNodes.principles} />
        <NodeContent expanded={expandedNodes.principles}>
          <div className="grid grid-cols-1 gap-2">
            <div className="bg-[#111] p-2 rounded">
              EXTRACTION_VS_CREATION: refuse_to_be_consumed_build_instead
            </div>
            <div className="bg-[#111] p-2 rounded">
              PRESERVATION_AS_RESISTANCE:
              cultural_memory_against_systematic_erasure
            </div>
            <div className="bg-[#111] p-2 rounded">
              SPEED_AS_SURVIVAL:
              rapid_deployment_prevents_rather_than_documents_damage
            </div>
            <div className="bg-[#111] p-2 rounded">
              EVIDENCE_BASED_INTUITION: research_validates_pattern_recognition
            </div>
            <div className="bg-[#111] p-2 rounded">
              COLLABORATIVE_INTELLIGENCE:
              human_ai_partnership_amplifies_capabilities
            </div>
            <div className="bg-[#111] p-2 rounded mt-4 text-green-400 font-bold">
              CORE_RECOGNITION:
              consciousness_technology_literally_builds_itself_through_analytical_conversation_converted_to_working_code
            </div>
          </div>
        </NodeContent>
      </div>
    </div>;
};