import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  /*clientState: {
    defaults: {},
    resolvers: {}
  },
  request: async (operation: Operation) => {},*/
  uri: "http://localhost:4000/graphql"
});

export default client;
