import { gql } from '@apollo/client';
import client from '../infrastructure/apollo-client';

export const queries = {
  listTweets: gql`
    query ListTweets {
      tweets {
        id,
        message,
        createdAt,
        user {
          name,
          email,
        }
      }
    }
  `,
};

const listTweets = async () => {
  return client.query({ query: queries.listTweets });
};

export default {
  listTweets,
};
