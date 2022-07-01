import { rest } from 'msw';
import { REPOSITORIES_SEARCHER_PATH, REST_API_URL } from 'constants/restApiPaths';
import { repositoriesSearcher } from '../responses/repositoriesSearcher';

export const getRepositoriesSearcherHandler = rest.get(
  `${REST_API_URL}${REPOSITORIES_SEARCHER_PATH}/:searchedText`,
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(repositoriesSearcher));
  },
);