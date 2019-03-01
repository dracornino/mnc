import { MediaTypes, MediaSourceType } from "./enums";

export class ResultSet {
    name: string;
    source: MediaSourceType;
    type: MediaTypes;
    url: string;
}

export class SearchResult {
    public timestamp: number;
    public totalRecords: number;
    public resultSet: Array<ResultSet>;
    public criteria: string;
}
