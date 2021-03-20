import React from 'react';
import { Box } from '@chakra-ui/react';
import Card from './base/Card';
import CardList from './base/CardList';

const LatestOperations = () => (
  <Card title="Latest operations">
    <CardList
      title="Today"
      items={[{ icon: 'food', iconColor: 'dives.red', title: 'Test title', date: '03.02.2001' }]}
    />
    <Box h={4} />
    <CardList
      title="Yesterday"
      items={[
        { icon: 'food', iconColor: 'dives.red', title: 'Test title', date: '03.02.2001' },
        { icon: 'food', iconColor: 'dives.red', title: 'Test title', date: '03.02.2001' },
        { icon: 'food', iconColor: 'dives.red', title: 'Test title', date: '03.02.2001' },
      ]}
    />
  </Card>
);

export default LatestOperations;
