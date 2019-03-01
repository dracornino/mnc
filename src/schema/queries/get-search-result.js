import { GraphQLNonNull, GraphQLString } from "graphql";
import searchResultType from "../types/search-result";

const query = {
    type: searchResultType,
    description:
        "This query allows you to search for songs and movies in iTunes, shows on TVMaze and people in CRC Industries ",
    args: {
        criteria: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The value you want to look for in different sources"
        }
    },
    resolve: (obj, args, { loaders }) => {
        return loaders(args).dataResultList(args);
    }
};

export default query;
