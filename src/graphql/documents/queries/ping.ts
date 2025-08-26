import { gql } from "urql";

export const PING_QUERY = gql`
  query Ping {
    __typename
  }
`;
