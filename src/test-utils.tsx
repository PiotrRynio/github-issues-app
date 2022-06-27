import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { MemoryRouter } from 'react-router-dom';
import { AllAppProviders } from 'providers/AllAppProviders';

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return (
    <MemoryRouter>
      <AllAppProviders>{children}</AllAppProviders>
    </MemoryRouter>
  );
};

const customHookRender = (useHook: (props: { children: ReactNode }) => any) =>
  renderHook(useHook, {
    wrapper: AllTheProviders,
  });

const customRender = (ui: any, options?: any) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render, customHookRender as renderHook, act };
