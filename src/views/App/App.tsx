import { Route, Routes } from 'react-router-dom';
import { TopBar } from 'components';
import { Results, User } from 'views';
import { MainSection, Wrapper } from './App.styles';

export const App = () => {
  return (
    <Wrapper>
      <TopBar />
      <MainSection>
        <Routes>
          <Route path="/users/:githubUserLogin" element={<User />} />
          <Route path="/" element={<Results />} />
        </Routes>
      </MainSection>
    </Wrapper>
  );
};
