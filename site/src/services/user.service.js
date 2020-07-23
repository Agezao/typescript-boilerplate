import { gql } from '@apollo/client';
import client from '../infrastructure/apollo-client';

export const queries = {
  listUsers: gql`
    query ListUsers{
      users {
        id,
        email,
        name
      }
    }
  `,
  getUser: gql`
    query GetUser($id: ID!){
      user (id: $id) {
        id,
        email,
        name
      }
    }
  `,
};

const listUsers = async () => {
  return client.query({ query: queries.listUsers });
};

const getUser = async (id) => {
  return client.query({
    query: queries.getUser,
    variables: { id }
  })
};


export default {
  listUsers,
  getUser,
};
