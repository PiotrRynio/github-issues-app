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
          <Route path="/" element={<Results />} />
          <Route path="user/:teamId" element={<User />} />
        </Routes>
      </MainSection>
    </Wrapper>
  );
};
