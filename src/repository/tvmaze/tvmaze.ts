import fetch from "node-fetch";
import { ResultSet } from "../models/search-result";
import { MediaTypes, MediaSourceType } from "../models/enums";
export class TVMazeRepository {
    private async searchMedia(
        uri: string,
        type: MediaTypes
    ): Promise<Array<ResultSet>> {
        try {
            const result = await fetch(uri, { method: "GET" }).then(res =>
                res.json()
            );

            if (result) {
                return result.map((data: any) => {
                    return {
                        name: data.show.name,
                        source: MediaSourceType.TVMaze,
                        type,
                        url: data.show.url
                    };
                });
            }
        } catch {}

        return Promise.resolve([]);
    }
    public async searchForShows(criteria: string): Promise<Array<ResultSet>> {
        return this.searchMedia(
            `http://api.tvmaze.com/search/shows?q=${criteria}`,
            MediaTypes.TV_SHOW
        );
    }
}
