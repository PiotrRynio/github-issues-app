import { rest } from 'msw';
import { REST_API_URL, EXAMPLES_PATH } from 'constants/restApiPaths';
import { exampleResponse } from '../responses/exampleResponse';

export const getExampleHandler = rest.get(`${REST_API_URL}${EXAMPLES_PATH}`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(exampleResponse));
});
