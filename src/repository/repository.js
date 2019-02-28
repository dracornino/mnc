"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const itunes_api_1 = require("./itunes/itunes-api");
const fuse_js_1 = __importDefault(require("fuse.js"));
const lodash_1 = __importDefault(require("lodash"));
const moment_1 = __importDefault(require("moment"));
const crcind_api_1 = require("./crcind/crcind-api");
const tvmaze_1 = require("./tvmaze/tvmaze");
class Repository {
    constructor() {
        this.iTunesRepository = new itunes_api_1.ITunesRepository();
        this.cRCIndustriesRepository = new crcind_api_1.CRCIndustriesRepository();
        this.tvMaze = new tvmaze_1.TVMazeRepository();
    }
    getSearchResult(parameter) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Promise.all([
                this.iTunesRepository.searchForSongs(parameter.criteria),
                this.iTunesRepository.searchForMovies(parameter.criteria),
                this.cRCIndustriesRepository.searchForPersonas(parameter.criteria),
                this.tvMaze.searchForShows(parameter.criteria)
            ]).then(arrResult => {
                let result = [];
                arrResult.forEach(elements => {
                    result = lodash_1.default.concat(result, elements);
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
                const fuse = new fuse_js_1.default(result, options);
                return Promise.resolve(fuse.search(parameter.criteria));
            });
            return {
                timestamp: moment_1.default().unix(),
                totalRecords: result.length,
                criteria: parameter.criteria,
                resultSet: result
            };
        });
    }
    getDispatchers() {
        return {
            dataResultList: (parameter) => {
                return this.getSearchResult(parameter);
            }
        };
    }
}
exports.Repository = Repository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBLG9EQUF1RDtBQUN2RCxzREFBMkI7QUFDM0Isb0RBQXVCO0FBQ3ZCLG9EQUE0QjtBQUM1QixvREFBOEQ7QUFDOUQsNENBQW1EO0FBRW5ELE1BQWEsVUFBVTtJQUF2QjtRQUNZLHFCQUFnQixHQUFHLElBQUksNkJBQWdCLEVBQUUsQ0FBQztRQUMxQyw0QkFBdUIsR0FBRyxJQUFJLG9DQUF1QixFQUFFLENBQUM7UUFDeEQsV0FBTSxHQUFHLElBQUkseUJBQWdCLEVBQUUsQ0FBQztJQTBDNUMsQ0FBQztJQXpDbUIsZUFBZSxDQUMzQixTQUFrQzs7WUFFbEMsTUFBTSxNQUFNLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUM3QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztnQkFDekQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7Z0JBQ2xFLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7YUFDakQsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDaEIsSUFBSSxNQUFNLEdBQWUsRUFBRSxDQUFDO2dCQUM1QixTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUN6QixNQUFNLEdBQUcsZ0JBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDLENBQUMsQ0FBQztnQkFFSCxJQUFJLE9BQU8sR0FBRztvQkFDVixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsY0FBYyxFQUFFLElBQUk7b0JBQ3BCLFNBQVMsRUFBRSxDQUFDO29CQUNaLFFBQVEsRUFBRSxDQUFDO29CQUNYLFFBQVEsRUFBRSxHQUFHO29CQUNiLGdCQUFnQixFQUFFLEVBQUU7b0JBQ3BCLGtCQUFrQixFQUFFLENBQUM7b0JBQ3JCLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztpQkFDakIsQ0FBQztnQkFDRixNQUFNLElBQUksR0FBRyxJQUFJLGlCQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUN2QyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUM1RCxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU87Z0JBQ0gsU0FBUyxFQUFFLGdCQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxNQUFNLENBQUMsTUFBTTtnQkFDM0IsUUFBUSxFQUFFLFNBQVMsQ0FBQyxRQUFRO2dCQUM1QixTQUFTLEVBQUUsTUFBTTthQUNwQixDQUFDO1FBQ04sQ0FBQztLQUFBO0lBQ0QsY0FBYztRQUNWLE9BQU87WUFDSCxjQUFjLEVBQUUsQ0FBQyxTQUFrQyxFQUFFLEVBQUU7Z0JBQ25ELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMzQyxDQUFDO1NBQ0osQ0FBQztJQUNOLENBQUM7Q0FDSjtBQTdDRCxnQ0E2Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWFyY2hSZXN1bHQgfSBmcm9tIFwiLi9tb2RlbHMvc2VhcmNoLXJlc3VsdFwiO1xyXG5pbXBvcnQgeyBTZWFyY2hDcml0ZXJpYVBhcmFtZXRlciB9IGZyb20gXCIuL21vZGVscy9wYXJhbWV0ZXJzXCI7XHJcbmltcG9ydCB7IElUdW5lc1JlcG9zaXRvcnkgfSBmcm9tIFwiLi9pdHVuZXMvaXR1bmVzLWFwaVwiO1xyXG5pbXBvcnQgRnVzZSBmcm9tIFwiZnVzZS5qc1wiO1xyXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgeyBDUkNJbmR1c3RyaWVzUmVwb3NpdG9yeSB9IGZyb20gXCIuL2NyY2luZC9jcmNpbmQtYXBpXCI7XHJcbmltcG9ydCB7IFRWTWF6ZVJlcG9zaXRvcnkgfSBmcm9tIFwiLi90dm1hemUvdHZtYXplXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVwb3NpdG9yeSB7XHJcbiAgICBwcml2YXRlIGlUdW5lc1JlcG9zaXRvcnkgPSBuZXcgSVR1bmVzUmVwb3NpdG9yeSgpO1xyXG4gICAgcHJpdmF0ZSBjUkNJbmR1c3RyaWVzUmVwb3NpdG9yeSA9IG5ldyBDUkNJbmR1c3RyaWVzUmVwb3NpdG9yeSgpO1xyXG4gICAgcHJpdmF0ZSB0dk1hemUgPSBuZXcgVFZNYXplUmVwb3NpdG9yeSgpO1xyXG4gICAgcHJvdGVjdGVkIGFzeW5jIGdldFNlYXJjaFJlc3VsdChcclxuICAgICAgICBwYXJhbWV0ZXI6IFNlYXJjaENyaXRlcmlhUGFyYW1ldGVyXHJcbiAgICApOiBQcm9taXNlPFNlYXJjaFJlc3VsdD4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgdGhpcy5pVHVuZXNSZXBvc2l0b3J5LnNlYXJjaEZvclNvbmdzKHBhcmFtZXRlci5jcml0ZXJpYSksXHJcbiAgICAgICAgICAgIHRoaXMuaVR1bmVzUmVwb3NpdG9yeS5zZWFyY2hGb3JNb3ZpZXMocGFyYW1ldGVyLmNyaXRlcmlhKSxcclxuICAgICAgICAgICAgdGhpcy5jUkNJbmR1c3RyaWVzUmVwb3NpdG9yeS5zZWFyY2hGb3JQZXJzb25hcyhwYXJhbWV0ZXIuY3JpdGVyaWEpLFxyXG4gICAgICAgICAgICB0aGlzLnR2TWF6ZS5zZWFyY2hGb3JTaG93cyhwYXJhbWV0ZXIuY3JpdGVyaWEpXHJcbiAgICAgICAgXSkudGhlbihhcnJSZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBBcnJheTxhbnk+ID0gW107XHJcbiAgICAgICAgICAgIGFyclJlc3VsdC5mb3JFYWNoKGVsZW1lbnRzID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF8uY29uY2F0KHJlc3VsdCwgZWxlbWVudHMpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgc2hvdWxkU29ydDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGZpbmRBbGxNYXRjaGVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdGhyZXNob2xkOiAxLFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IDAsXHJcbiAgICAgICAgICAgICAgICBkaXN0YW5jZTogMTAwLFxyXG4gICAgICAgICAgICAgICAgbWF4UGF0dGVybkxlbmd0aDogMzIsXHJcbiAgICAgICAgICAgICAgICBtaW5NYXRjaENoYXJMZW5ndGg6IDEsXHJcbiAgICAgICAgICAgICAgICBrZXlzOiBbXCJuYW1lXCJdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IGZ1c2UgPSBuZXcgRnVzZShyZXN1bHQsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZ1c2Uuc2VhcmNoKHBhcmFtZXRlci5jcml0ZXJpYSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRpbWVzdGFtcDogbW9tZW50KCkudW5peCgpLFxyXG4gICAgICAgICAgICB0b3RhbFJlY29yZHM6IHJlc3VsdC5sZW5ndGgsXHJcbiAgICAgICAgICAgIGNyaXRlcmlhOiBwYXJhbWV0ZXIuY3JpdGVyaWEsXHJcbiAgICAgICAgICAgIHJlc3VsdFNldDogcmVzdWx0XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGdldERpc3BhdGNoZXJzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRhdGFSZXN1bHRMaXN0OiAocGFyYW1ldGVyOiBTZWFyY2hDcml0ZXJpYVBhcmFtZXRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2VhcmNoUmVzdWx0KHBhcmFtZXRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==