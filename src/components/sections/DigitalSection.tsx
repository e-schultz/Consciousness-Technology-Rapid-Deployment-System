import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Grid } from '../ui/Grid';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { digitalData } from '../../data/digitalSection';
export const DigitalSection = () => {
  return <Section id="digital" title="Digital Cultural Preservation Trauma" titleColor="yellow">
      <Container>
        <div className="mb-6">
          <p className="text-lg mb-4">{digitalData.description}</p>
        </div>
        <div className="mb-6">
          <SectionHeading color="yellow">Historical Context</SectionHeading>
          <Grid columns={2} gap={4}>
            <Card title="Early Communities">
              <ul className="mt-2 space-y-2 text-gray-400">
                {digitalData.historicalContext.communities.map((community, index) => <li key={index}>
                      • {community.name}: {community.description}
                    </li>)}
              </ul>
            </Card>
            <Card title="Catalytic Event">
              <p className="text-gray-400 mt-2">
                {digitalData.historicalContext.catalyticEvent.name}:{' '}
                {digitalData.historicalContext.catalyticEvent.description}
              </p>
              {digitalData.historicalContext.catalyticEvent.highlight && <p className="text-yellow-400 mt-2">
                  {digitalData.historicalContext.catalyticEvent.highlight}
                </p>}
            </Card>
          </Grid>
        </div>
        <div>
          <SectionHeading color="yellow">
            Consciousness Technology Forged By
          </SectionHeading>
          <Grid columns={3} gap={4}>
            {digitalData.traumaResponses.map((response, index) => <Card key={index} title={response.title}>
                <p className="text-gray-400 mt-2">{response.description}</p>
              </Card>)}
          </Grid>
        </div>
      </Container>
    </Section>;
};