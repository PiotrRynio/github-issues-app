import { rest } from 'msw';
import { REST_API_URL, USERS_PATH } from 'constants/restApiPaths';
import { server } from 'mocks/msw/rest-api/server';

export const getUserStarsHeaderWillReturn = ({ starsNumber }: { starsNumber: number }) => {
  server.use(
    rest.get(`${REST_API_URL}${USERS_PATH}/:githubUserLogin/starred?per_page=1`, (req, res, ctx) => {
      const link = `<https://api.github.com/user/2/starred?per_page=1&page=2>; rel="next", <https://api.github.com/user/2/starred?per_page=1&page=${starsNumber}>; rel="last"`;
      return res(ctx.status(200), ctx.set('Link', link));
    }),
  );
};
