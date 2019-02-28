import {
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
    GraphQLEnumType,
    GraphQLInt
} from "graphql";

let MediaType = new GraphQLEnumType({
    name: "MediaType",
    values: {
        SONG: { value: 0 },
        MOVIE: { value: 1 },
        TV_SHOW: { value: 2 },
        PERSONAS: { value: 3 }
    }
});

const ResultSet = new GraphQLObjectType({
    name: "ResultSet",
    fields: {
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        source: {
            type: new GraphQLNonNull(GraphQLString)
        },
        type: {
            type: new GraphQLNonNull(MediaType)
        }
    }
});
export default new GraphQLObjectType({
    name: "SearchResult",
    fields: {
        timestamp: { type: new GraphQLNonNull(GraphQLInt) },
        totalRecords: { type: new GraphQLNonNull(GraphQLInt) },
        criteria: { type: new GraphQLNonNull(GraphQLString) },
        resultSet: { type: GraphQLList(ResultSet) }
    }
});
