import { UserDto } from 'types/dtos';
import exampleUserAvatar from '../images/example-user-avatar-1.jpg';

// 20220627154721
// https://api.github.com/users/defunkt

export const userResponse: UserDto = {
  login: 'defunkt',
  id: 2,
  node_id: 'MDQ6VXNlcjI=',
  avatar_url: exampleUserAvatar,
  gravatar_id: '',
  url: 'https://api.github.com/users/defunkt',
  html_url: 'https://github.com/defunkt',
  followers_url: 'https://api.github.com/users/defunkt/followers',
  following_url: 'https://api.github.com/users/defunkt/following{/other_user}',
  gists_url: 'https://api.github.com/users/defunkt/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/defunkt/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/defunkt/subscriptions',
  organizations_url: 'https://api.github.com/users/defunkt/orgs',
  repos_url: 'https://api.github.com/users/defunkt/repos',
  events_url: 'https://api.github.com/users/defunkt/events{/privacy}',
  received_events_url: 'https://api.github.com/users/defunkt/received_events',
  type: 'User',
  site_admin: false,
  name: 'Chris Wanstrath',
  company: null,
  blog: 'http://chriswanstrath.com/',
  location: 'London, England',
  email: null,
  hireable: null,
  bio: 'example description',
  twitter_username: null,
  public_repos: 107,
  public_gists: 273,
  followers: 21454,
  following: 210,
  created_at: '2007-10-20T05:24:19Z',
  updated_at: '2022-06-01T23:46:26Z',
};
