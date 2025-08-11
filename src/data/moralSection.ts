import { ScaleItem } from '../components/ui/ProgressionScale';
export interface CaseStudy {
  title: string;
  metrics: {
    label: string;
    value: string;
    isPositive?: boolean;
  }[];
  conclusion: string;
}
export interface MoralSectionData {
  description: string;
  speedAnalysis: {
    title: string;
    scales: ScaleItem[];
  };
  caseStudies: CaseStudy[];
}
export const moralData: MoralSectionData = {
  description: 'The increasing speed of moral panic cycles and their impact on policy and culture.',
  speedAnalysis: {
    title: 'Speed Analysis',
    scales: [{
      width: 'w-20',
      label: 'Historical: Months to Years',
      color: 'bg-gray-600'
    }, {
      width: 'w-40',
      label: '24-Hour News Cycle',
      color: 'bg-gray-500'
    }, {
      width: 'w-60',
      label: 'Social Media: Weeks',
      color: 'bg-gray-400'
    }, {
      width: 'w-80',
      label: 'TikTok/Twitter: Hours',
      color: 'bg-gray-300'
    }, {
      width: 'w-96',
      label: 'Current Reality: Viral to Policy in Hours',
      color: 'bg-red-400',
      highlight: true
    }]
  },
  caseStudies: [{
    title: 'Joey Mannarino Gay Family Attack',
    metrics: [{
      label: 'Viral Lie Views:',
      value: '7,600,000',
      isPositive: false
    }, {
      label: 'Factual Correction Views:',
      value: '30',
      isPositive: true
    }],
    conclusion: 'Pattern: Lies travel at lightspeed, truth crawls'
  }]
};