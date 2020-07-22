import { gql } from 'apollo-server-express';

export default gql(
  `type User {
    id: ID!
    email: String!
    name: String!
    password: String!
  }
  
  type Tweet {
    id: ID!
    message: String!
    createdAt: String!
    user: User!
  }

  type Query {
    tweets: [Tweet!]!
    users: [User!]!
    me(id: String!): User!
  }
  
  type Mutation {
    createUser(name: String!, email: String!, password: String!): User!
    createTweet(message: String!, createdAt: String!, user: ID!): Tweet!
  }
  `
);
