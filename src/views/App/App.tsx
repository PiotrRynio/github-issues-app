import { Route, Routes } from 'react-router-dom';
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
          <Route path="/" element={<Results />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainSection>
    </Wrapper>
  );
};
