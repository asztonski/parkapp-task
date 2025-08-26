const { createServer } = require("http");
const { buildSchema } = require("graphql");
const { createHandler } = require("graphql-http/lib/use/node");
const { URL } = require("url");

const schema = buildSchema(`
  type LoginPayload { token: String! }
  type Query { dummy: Boolean! }
  type Mutation {
    login(email: String!, password: String!): LoginPayload!
  }
`);

const rootValue = {
  dummy: () => true,
  login: ({ email, password }) => {
    if (email === "tester@parkapp.pl" && password === "123$TesT$321") {
      return { token: "mock-token-valid" };
    }
    throw new Error("Invalid credentials");
  },
};

const handler = createHandler({ schema, rootValue });

function setCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
}

const server = createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === "OPTIONS") {
    setCors(res);
    res.writeHead(204);
    return res.end();
  }

  if (url.pathname === "/graphql") {
    setCors(res);
    return handler(req, res);
  }

  setCors(res);
  res.statusCode = 404;
  res.end("Not found");
});

server.listen(4000, () => {
  console.log("Mock GraphQL running at http://localhost:4000/graphql");
});
