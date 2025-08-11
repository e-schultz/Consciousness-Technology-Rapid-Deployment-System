import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Grid } from '../ui/Grid';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ProgressionScale } from '../ui/ProgressionScale';
import { moralData } from '../../data/moralSection';
export const MoralSection = () => {
  return <Section id="moral" title="Moral Panic Algorithmic Acceleration" titleColor="orange">
      <Container>
        <div className="mb-6">
          <p className="text-lg mb-4">{moralData.description}</p>
        </div>
        <div className="mb-6">
          <SectionHeading color="orange">
            {moralData.speedAnalysis.title}
          </SectionHeading>
          <div className="bg-[#111] p-5 rounded-lg border border-[#333]">
            <ProgressionScale items={moralData.speedAnalysis.scales} />
          </div>
        </div>
        <div>
          <SectionHeading color="orange">Case Studies</SectionHeading>
          {moralData.caseStudies.map((study, studyIndex) => <div key={studyIndex} className="bg-[#111] p-4 rounded-lg border border-[#333]">
              <h4 className="font-semibold text-white">{study.title}</h4>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {study.metrics.map((metric, metricIndex) => <div key={metricIndex} className="p-3 bg-[#0a0a0a] rounded border border-[#333]">
                    <div className="flex justify-between items-center">
                      <span>{metric.label}</span>
                      <span className={`${metric.isPositive ? 'text-green-400' : 'text-red-400'} font-mono`}>
                        {metric.value}
                      </span>
                    </div>
                  </div>)}
              </div>
              <div className="mt-4 p-3 bg-[#0a0a0a] rounded border border-[#333]">
                <p className="text-yellow-400">{study.conclusion}</p>
              </div>
            </div>)}
        </div>
      </Container>
    </Section>;
};