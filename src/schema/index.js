import { GraphQLObjectType, GraphQLSchema } from "graphql";
import searchDataQuery from "./queries/get-search-result";

const RootQueryType = new GraphQLObjectType({
    name: "Queries",
    description:
        "This API uses a fuzzy algorithm to sort the results by score with respect to the searched criteria ",
    fields: {
        search: searchDataQuery
    }
});

const schema = new GraphQLSchema({
    query: RootQueryType
});

export default schema;
