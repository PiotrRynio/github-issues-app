import { Route, Routes } from 'react-router-dom';
import { TopBar } from 'components';
import { Results, User, NotFound } from 'views';
import { MainSection, Wrapper } from './App.styles';

export const App = () => {
  return (
    <Wrapper>
      <TopBar />
      <MainSection>
        <Routes>
          <Route path="/users/:githubUserLogin" element={<User />} />
          <Route path="/searcher" element={<Results />} />
          <Route path="/" element={<Results />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainSection>
    </Wrapper>
  );
};
