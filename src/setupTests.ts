import '@testing-library/jest-dom';
import { server } from 'mocks/msw/rest-api/server';
jest.setTimeout(5000);

beforeAll(() => {
  server.listen();
});

beforeEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
