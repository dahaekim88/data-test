import gql from 'graphql-tag';

export const GET_USERS = gql`
  query {
    getUsers {
      name
      email
    }
  }
`;

export const GET_PROFILE = gql`
  query {
    getProfile {
      name
      email
    }
  }
`;
