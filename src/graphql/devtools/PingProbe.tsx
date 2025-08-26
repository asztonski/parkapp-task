import { useQuery } from "urql";
import { PING_QUERY } from "../documents/queries/ping";

export default function PingProbe() {
  const [res] = useQuery<{ __typename: string }>({ query: PING_QUERY });

  if (res.fetching) return <div className="p-3 text-sm text-gray-500">Ping…</div>;
  if (res.error)    return <div className="p-3 text-sm text-red-600">GraphQL error: {res.error.message}</div>;

  return <div className="p-3 text-sm text-green-700">GraphQL OK: {res.data?.__typename}</div>;
}
