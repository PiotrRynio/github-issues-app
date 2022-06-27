import { rest } from 'msw';
import { server } from 'mocks/msw/rest-api/server';
import { REST_API_URL, USERS_PATH } from 'constants/restApiPaths';
import { UserDto } from '../../../../../types/UserDto';

export const getExampleWillReturn = (exampleResponse: UserDto) => {
  server.use(
    rest.get(`${REST_API_URL}${USERS_PATH}`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(exampleResponse));
    }),
  );
};

export const getExampleIsLoading = () => {
  server.use(
    rest.get(`${REST_API_URL}${USERS_PATH}`, (req, res, ctx) => {
      return res(ctx.delay('infinite'));
    }),
  );
};

export const getExampleWillReturnFail = () => {
  server.use(
    rest.get(`${REST_API_URL}${USERS_PATH}`, (req, res, ctx) => {
      return res(ctx.status(404));
    }),
  );
};
