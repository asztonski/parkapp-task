import { ReactNode, useMemo } from "react";
import { Provider } from "urql";
import { makeUrqlClient } from "../../graphql/client/createClient";

type Props = { children: ReactNode };

export default function GraphQLProvider({ children }: Props) {
  const client = useMemo(() => makeUrqlClient(), []);
  return <Provider value={client}>{children}</Provider>;
}
