import gql from 'graphql-tag';

export const SIGNUP = gql`
  mutation Singup($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      accessToken
      user {
        name
        tokenVersion
      }
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
      user {
        name
        tokenVersion
      }
    }
  }
`;
