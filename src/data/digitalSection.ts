export interface Community {
  name: string;
  description: string;
}
export interface CatalystEvent {
  name: string;
  description: string;
  highlight?: string;
}
export interface TraumaResponse {
  title: string;
  description: string;
}
export interface DigitalSectionData {
  description: string;
  historicalContext: {
    communities: Community[];
    catalyticEvent: CatalystEvent;
  };
  traumaResponses: TraumaResponse[];
}
export const digitalData: DigitalSectionData = {
  description: 'The formative experiences that shaped consciousness technology as a preservation strategy.',
  historicalContext: {
    communities: [{
      name: 'MNML.NL Forum',
      description: 'Underground electronic discourse platform'
    }, {
      name: 'Early SoundCloud Beta',
      description: 'Foundational community member'
    }],
    catalyticEvent: {
      name: 'Megaupload Shutdown 2012',
      description: 'Digital cultural genocide witnessed',
      highlight: 'Direct experience of mass cultural erasure'
    }
  },
  traumaResponses: [{
    title: 'Erasure Trauma',
    description: 'Distributed preservation strategy development'
  }, {
    title: 'Single Point Failure',
    description: 'Multiple platform redundancy implementation'
  }, {
    title: 'Cultural Apocalypse',
    description: 'Real-time archival instincts development'
  }]
};