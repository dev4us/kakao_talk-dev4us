import { Greeting } from "../../types/graphql";

const resolvers = {
  Query: {
    sayHello: (): Greeting => {
      return {
        error: false,
        text: "love you"
      };
    }
  }
};

export default resolvers;
