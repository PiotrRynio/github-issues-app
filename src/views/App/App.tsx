import React from 'react';
import { Content, Wrapper } from './App.styles';
import { TopBar } from 'components';

const App = () => {
  return (
    <Wrapper>
      <TopBar />
      <Content>
        .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </Content>
    </Wrapper>
  );
};

export default App;
