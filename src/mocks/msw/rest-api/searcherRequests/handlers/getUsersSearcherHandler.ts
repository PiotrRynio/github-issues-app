import { rest } from 'msw';
import { REST_API_BASE_URL, USER_SEARCHER_PATH } from 'constants/restApiPaths';
import { usersSearcherResponse } from '../responses/usersSearcherResponse';

export const getUsersSearcherHandler = rest.get(
  `${REST_API_BASE_URL}${USER_SEARCHER_PATH}/:searchedText`,
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(usersSearcherResponse));
  },
);
