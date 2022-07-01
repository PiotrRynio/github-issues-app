import { userHandlers } from './userRequests/handlers/userHandlers';
import { usersSearcherHandlers } from './searcherRequests/handlers/userHandlers';

export const handlers = [...userHandlers, ...usersSearcherHandlers];
