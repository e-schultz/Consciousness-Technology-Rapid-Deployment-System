import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Grid } from '../ui/Grid';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { musicalData } from '../../data/musicalSection';
export const MusicalSection = () => {
  return <Section id="musical" title="Musical Consciousness Archaeology" titleColor="green">
      <Container>
        <div className="mb-4">
          <p className="text-lg mb-4">{musicalData.description}</p>
          <Grid columns={2} gap={4} className="mt-6">
            <Card title="Platforms">
              <p className="text-gray-400">
                {musicalData.platforms.primary} (Primary),{' '}
                {musicalData.platforms.secondary} (Secondary)
              </p>
            </Card>
            <Card title="Methodology">
              <p className="text-gray-400">{musicalData.methodology}</p>
            </Card>
          </Grid>
        </div>
        <div className="mt-6">
          <SectionHeading color="green">Historical Layers</SectionHeading>
          <Grid columns={3} gap={4}>
            {musicalData.historicalLayers.map((layer, index) => <Card key={index} title={layer.period}>
                {layer.events.map((event, eventIndex) => <p key={eventIndex} className="text-gray-400 mt-2">
                    {event}
                  </p>)}
              </Card>)}
          </Grid>
        </div>
      </Container>
    </Section>;
};