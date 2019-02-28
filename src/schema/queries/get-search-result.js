import { GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import searchResultType from "../types/search-result";

const query = {
    type: searchResultType,
    description: "Do your <strong> searches in one place</strong>",
    args: {
        criteria: {
            type: new GraphQLNonNull(GraphQLString),
            description: "Foo bar"
        }
    },
    resolve: (obj, args, { loaders }) => {
        return loaders(args).dataResultList(args);
    }
};

export default query;
