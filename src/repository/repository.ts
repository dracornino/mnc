import { SearchResult } from "./models/search-result";
import { SearchCriteriaParameter } from "./models/parameters";
import { ITunesRepository } from "./itunes/itunes-api";
import Fuse from "fuse.js";
import _ from "lodash";
import moment from "moment";
import { CRCIndustriesRepository } from "./crcind/crcind-api";
import { TVMazeRepository } from "./tvmaze/tvmaze";

export class Repository {
    private iTunesRepository = new ITunesRepository();
    private cRCIndustriesRepository = new CRCIndustriesRepository();
    private tvMaze = new TVMazeRepository();
    protected async getSearchResult(
        parameter: SearchCriteriaParameter
    ): Promise<SearchResult> {
        const result = await Promise.all([
            this.iTunesRepository.searchForSongs(parameter.criteria),
            this.iTunesRepository.searchForMovies(parameter.criteria),
            this.cRCIndustriesRepository.searchForPersonas(parameter.criteria),
            this.tvMaze.searchForShows(parameter.criteria)
        ]).then(arrResult => {
            let result: Array<any> = [];
            arrResult.forEach(elements => {
                result = _.concat(result, elements);
            });

            var options = {
                shouldSort: true,
                findAllMatches: true,
                threshold: 1,
                location: 0,
                distance: 100,
                maxPatternLength: 32,
                minMatchCharLength: 1,
                keys: ["name"]
            };
            const fuse = new Fuse(result, options);
            return Promise.resolve(fuse.search(parameter.criteria));
        });
        return {
            timestamp: moment().unix(),
            totalRecords: result.length,
            criteria: parameter.criteria,
            resultSet: result
        };
    }
    getDispatchers() {
        return {
            dataResultList: (parameter: SearchCriteriaParameter) => {
                return this.getSearchResult(parameter);
            }
        };
    }
}
