import TweetResolvers from './tweet.resolver';
import UserResolvers from './user.resolver';

export default {
  Query: {
    ...TweetResolvers.queries,
    ...UserResolvers.queries,
  },
  Mutation: {
    ...TweetResolvers.mutations,
    ...UserResolvers.mutations,
  }
};