import { rest } from 'msw';
import { server } from 'mocks/msw/rest-api/server';
import { REPOSITORIES_SEARCHER_PATH, REST_API_BASE_URL } from 'constants/restApiPaths';
import { RepositoriesSearcherDto } from 'types/dtos/RepositoriesSearcherDto';

export const getRepositoriesSearcherWillReturn = (exampleResponse: RepositoriesSearcherDto) => {
  server.use(
    rest.get(`${REST_API_BASE_URL}${REPOSITORIES_SEARCHER_PATH}?q=searchedText`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(exampleResponse));
    }),
  );
};

export const getRepositoriesSearcherIsLoading = () => {
  server.use(
    rest.get(`${REST_API_BASE_URL}${REPOSITORIES_SEARCHER_PATH}?q=searchedText`, (req, res, ctx) => {
      return res(ctx.delay('infinite'));
    }),
  );
};

export const getRepositoriesSearcherWillReturnFail = () => {
  server.use(
    rest.get(`${REST_API_BASE_URL}${REPOSITORIES_SEARCHER_PATH}?q=searchedText`, (req, res, ctx) => {
      return res(ctx.status(404));
    }),
  );
};
