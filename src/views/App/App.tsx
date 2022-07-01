import { Route, Routes, Navigate } from 'react-router-dom';
import { User, NotFound, Results } from 'views';
import { TopBar } from 'components';
import { MainSection, Wrapper } from './App.styles';

export const App = () => {
  return (
    <Wrapper>
      <TopBar />
      <MainSection>
        <Routes>
          <Route path="/users/:githubUserLogin" element={<User />} />
          <Route path="/searcher/:searchedText" element={<Results />} />
          <Route path="/searcher" element={<Results />} />
          <Route path="/" element={<Navigate replace to="/searcher" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainSection>
    </Wrapper>
  );
};
