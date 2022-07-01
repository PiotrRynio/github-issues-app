import { rest } from 'msw';
import { REST_API_URL, USER_SEARCHER_PATH } from 'constants/restApiPaths';
import { usersSearcher } from '../responses/usersSearcher';

export const getUsersSearcherHandler = rest.get(
  `${REST_API_URL}${USER_SEARCHER_PATH}/:searchedText`,
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(usersSearcher));
  },
);
