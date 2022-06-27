import { rest } from 'msw';
import { server } from 'mocks/msw/rest-api/server';
import { REST_API_URL, USERS_PATH } from 'constants/restApiPaths';
import { UserDto } from 'types/dtos/UserDto';

export const getUserWillReturn = (exampleResponse: UserDto) => {
  server.use(
    rest.get(`${REST_API_URL}${USERS_PATH}/:githubUserLogin`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(exampleResponse));
    }),
  );
};

export const getUserIsLoading = () => {
  server.use(
    rest.get(`${REST_API_URL}${USERS_PATH}/:githubUserLogin`, (req, res, ctx) => {
      return res(ctx.delay('infinite'));
    }),
  );
};

export const getUserWillReturnFail = () => {
  server.use(
    rest.get(`${REST_API_URL}${USERS_PATH}/:githubUserLogin`, (req, res, ctx) => {
      return res(ctx.status(404));
    }),
  );
};
