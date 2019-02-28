import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import flash from "connect-flash";
import graphqlHTTP from "express-graphql";
import ncSchema from "../schema";
import { getLoaders } from "./loaders";

const start = async () => {
    const PORT = process.env.MNC_API_PORT || 14801;
    const loaders = await getLoaders();

    const app = express();

    app.use(flash());
    app.use(cors());

    app.use(
        bodyParser.urlencoded({
            limit: "5mb",
            parameterLimit: 100000,
            extended: true
        })
    );

    app.use(
        bodyParser.json({
            limit: "5mb"
        })
    );

    app.use("/graphql", (req, res) => {
        graphqlHTTP({
            schema: ncSchema,
            graphiql: true,
            context: { loaders }
        })(req, res);
    });

    app.listen(PORT, () => {
        console.info(`Server is listening on port ${PORT}`);
    });
};

start();
