import {
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
    GraphQLEnumType,
    GraphQLInt
} from "graphql";

const MediaType = new GraphQLEnumType({
    name: "MediaType",
    description: "Represents the type of data obtained",
    values: {
        SONG: { value: 0, description: "A song found in iTunes" },
        MOVIE: { value: 1, description: "A movie found in iTunes" },
        TV_SHOW: { value: 2, description: "A tv-show found in TVMaze" },
        PERSONAS: { value: 3, description: "A persona found in web service" }
    }
});
const MediaSourceType = new GraphQLEnumType({
    name: "MediaSourceType",
    description: "Represents the source of the query",
    values: {
        iTunes: {
            value: 0,
            description:
                "https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/"
        },
        TVMaze: { value: 1, description: "http://www.tvmaze.com/api" },
        CRCIndustries: {
            value: 2,
            description: "http://www.crcind.com/csp/samples/SOAP.Demo.cls"
        }
    }
});

const ResultSet = new GraphQLObjectType({
    name: "ResultSet",
    fields: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The name of the song, movie, show or person found"
        },
        source: {
            type: new GraphQLNonNull(MediaSourceType),
            description: "The source of the song, movie, show or persona found"
        },
        type: {
            type: new GraphQLNonNull(MediaType),
            description: "Represents the type of data found"
        },
        url: {
            type: new GraphQLNonNull(GraphQLString),
            description: "More info about item found"
        }
    }
});

export default new GraphQLObjectType({
    name: "SearchResult",
    fields: {
        timestamp: {
            type: new GraphQLNonNull(GraphQLInt),
            description: "The timestamp in unix format"
        },
        totalRecords: {
            type: new GraphQLNonNull(GraphQLInt),
            description: "The total number of matches found in all sources"
        },
        criteria: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The word used to search the sources"
        },
        resultSet: {
            type: GraphQLList(ResultSet),
            description: "The list of all matching records"
        }
    }
});
