export interface HistoricalLayer {
  period: string;
  events: string[];
}
export interface MusicalSectionData {
  description: string;
  platforms: {
    primary: string;
    secondary: string;
  };
  methodology: string;
  historicalLayers: HistoricalLayer[];
}
export const musicalData: MusicalSectionData = {
  description: 'An 8-year temporal analysis of genre evolution and anticipation methodology.',
  platforms: {
    primary: 'SoundCloud',
    secondary: 'Apple Music'
  },
  methodology: 'Genre anticipation pattern recognition',
  historicalLayers: [{
    period: '2017-2018',
    events: ['DJ Python early recognition and experimental foundation', 'Expansion phase with Donato Dozzy debut']
  }, {
    period: '2019-2022',
    events: ['FKA Twigs first appearance, creating bridge to mainstream', 'Detroit techno lineage meets punk hardcore crossover']
  }, {
    period: '2023-2025',
    events: ['Underground techno deep dive and experimental ambient', 'UK garage renaissance and queer club explosion']
  }]
};