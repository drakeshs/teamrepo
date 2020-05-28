import React from 'react';
import { Container } from '@material-ui/core';
import PersistentDrawerLeft from '../utils/DrawerComponent';

const App = () => {
  return (
    <Container maxWidth="xl">
      <PersistentDrawerLeft />
    </Container>
  );
};

export default App;
