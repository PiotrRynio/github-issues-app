import { rest } from 'msw';
import { REST_API_BASE_URL, USERS_PATH } from 'constants/restApiPaths';
import { userResponse } from '../responses/userResponse';

export const getUserHandler = rest.get(`${REST_API_BASE_URL}${USERS_PATH}/:githubUserLogin`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(userResponse));
});
