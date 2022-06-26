import React from 'react';
import { MainSection, Wrapper } from './App.styles';
import { TopBar } from 'components';

const App = () => {
  return (
    <Wrapper>
      <TopBar />
      <MainSection>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </MainSection>
    </Wrapper>
  );
};

export default App;
