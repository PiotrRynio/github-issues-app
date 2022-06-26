import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AllAppProviders } from 'providers/AllAppProviders';

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return (
    <MemoryRouter>
      <AllAppProviders>{children}</AllAppProviders>
    </MemoryRouter>
  );
};

const customRender = (ui: any, options?: any) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
