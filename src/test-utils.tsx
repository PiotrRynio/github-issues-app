import { ReactElement, ReactNode } from 'react';
import { render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { AllAppProviders } from 'providers/AllAppProviders';

type AllTheProvidersProps = { children: ReactNode; route?: string };

const AllTheProviders = ({ children, route = '/' }: AllTheProvidersProps) => {
  const history = createMemoryHistory({ initialEntries: [route] });
  history.push(route);

  return (
    <Router location={history.location} navigator={history}>
      <AllAppProviders> {children}</AllAppProviders>
    </Router>
  );
};

const customHookRender = (useHook: (props: { children: ReactNode }) => any) =>
  renderHook(useHook, {
    wrapper: AllTheProviders,
  });

const customRender = (ui: ReactElement, options?: { route: string }) =>
  render(ui, {
    wrapper: (props) => <AllTheProviders {...props} route={options?.route} />,
    ...options,
  });

export * from '@testing-library/react';

export { customRender as render, customHookRender as renderHook, act };
