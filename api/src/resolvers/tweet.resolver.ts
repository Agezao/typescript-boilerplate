/* eslint-disable @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any */
import Tweet, { ITweet } from '../models/Tweet.model';

export default {
  queries: {
    tweets: async (): Promise<ITweet[]> => Tweet.find().populate({path: 'user'}),
  },
  mutations: {
    createTweet: async (_: any, tweet: ITweet): Promise<ITweet['_id']> => {
      const createdTweet = new Tweet(tweet);
      await createdTweet.save();

      return createdTweet._id;
    },
  }
};
