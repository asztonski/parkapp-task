import { createClient, cacheExchange, fetchExchange } from "urql";

const url = import.meta.env.VITE_GRAPHQL_URL;

export function makeUrqlClient() {
  return createClient({
    url,
    exchanges: [cacheExchange, fetchExchange],
    requestPolicy: "cache-first",
  });
}
