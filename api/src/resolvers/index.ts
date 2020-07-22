/* eslint-disable @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any */

import { IUser } from '../models/User.model';
import { ITweet } from '../models/Tweet.model';

export default {
  Query: {
    tweets: () => [{ message: 'test' }],
    users: () => [{ name: 'test' }],
    me: (_: any, { id = null }: any) => ({ id, name: 'me' }),
  },
  Mutation: {
    createUser: async (_: any, user: IUser): Promise<IUser> => {
      console.log(user);

      user.id = 'test';
      return user;
    },
    createTweet: async (_: any, tweet: ITweet): Promise<ITweet> => {
      console.log(tweet);

      tweet.id = 'test';
      tweet.user = { name: 'yeah' };
      return tweet;
    },
  }
};