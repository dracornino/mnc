import fetch from "node-fetch";
import { ResultSet } from "../models/search-result";
import { MediaTypes, MediaSourceType } from "../models/enums";
export class ITunesRepository {
    private async searchMedia(
        uri: string,
        type: MediaTypes
    ): Promise<Array<ResultSet>> {
        try {
            const result = await fetch(uri, { method: "GET" }).then(res =>
                res.json()
            );

            if (result.results) {
                return result.results.map((data: any) => {
                    return {
                        name: data.trackName,
                        source: MediaSourceType.ITunes,
                        type,
                        url: data.trackViewUrl
                    };
                });
            }
        } catch {}

        return Promise.resolve([]);
    }
    public async searchForSongs(criteria: string): Promise<Array<ResultSet>> {
        return this.searchMedia(
            `https://itunes.apple.com/search?media=music&entity=musicTrack&attribute=songTerm&term=${criteria}`,
            MediaTypes.SONG
        );
    }

    public async searchForMovies(criteria: string): Promise<Array<ResultSet>> {
        return this.searchMedia(
            `https://itunes.apple.com/search?media=movie&entity=movie&attribute=movieTerm&term=${criteria}`,
            MediaTypes.MOVIE
        );
    }
}
