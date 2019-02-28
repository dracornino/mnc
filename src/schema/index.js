import { GraphQLObjectType, GraphQLSchema } from "graphql";
import searchDataQuery from "./queries/get-search-result";

const RootQueryType = new GraphQLObjectType({
    name: "Queries",
    fields: {
        search: searchDataQuery
    }
});

const schema = new GraphQLSchema({
    query: RootQueryType
});

export default schema;
