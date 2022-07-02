export const GITHUB_REST_API_HEADERS = {
  headers: {
    Authorization: `token ${process.env.REACT_APP_GITHUB_REST_API_TOKEN}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};
