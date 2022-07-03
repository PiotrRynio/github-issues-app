import { rest } from 'msw';
import { server } from 'mocks/msw/rest-api/server';
import { REST_API_BASE_URL, USER_SEARCHER_PATH } from 'constants/restApiPaths';
import { UsersSearcherDto } from 'types';

export const getUsersSearcherWillReturn = (exampleResponse: UsersSearcherDto) => {
  server.use(
    rest.get(`${REST_API_BASE_URL}${USER_SEARCHER_PATH}?q=searchedText`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(exampleResponse));
    }),
  );
};

export const getUsersSearcherIsLoading = () => {
  server.use(
    rest.get(`${REST_API_BASE_URL}${USER_SEARCHER_PATH}?q=searchedText`, (req, res, ctx) => {
      return res(ctx.delay('infinite'));
    }),
  );
};

export const getUsersSearcherWillReturnFail = () => {
  server.use(
    rest.get(`${REST_API_BASE_URL}${USER_SEARCHER_PATH}?q=searchedText`, (req, res, ctx) => {
      return res(ctx.status(404));
    }),
  );
};
