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
const node_fetch_1 = __importDefault(require("node-fetch"));
const enums_1 = require("../models/enums");
class TVMazeRepository {
    searchMedia(uri, type) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield node_fetch_1.default(uri, { method: "GET" }).then(res => res.json());
                if (result) {
                    return result.map((data) => {
                        return {
                            name: data.show.name,
                            source: enums_1.MediaSourceType.TVMaze,
                            type,
                            url: data.show.url
                        };
                    });
                }
            }
            catch (_a) { }
            return Promise.resolve([]);
        });
    }
    searchForShows(criteria) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.searchMedia(`http://api.tvmaze.com/search/shows?q=${criteria}`, enums_1.MediaTypes.TV_SHOW);
        });
    }
}
exports.TVMazeRepository = TVMazeRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHZtYXplLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHZtYXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBK0I7QUFFL0IsMkNBQThEO0FBQzlELE1BQWEsZ0JBQWdCO0lBQ1gsV0FBVyxDQUNyQixHQUFXLEVBQ1gsSUFBZ0I7O1lBRWhCLElBQUk7Z0JBQ0EsTUFBTSxNQUFNLEdBQUcsTUFBTSxvQkFBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUMxRCxHQUFHLENBQUMsSUFBSSxFQUFFLENBQ2IsQ0FBQztnQkFFRixJQUFJLE1BQU0sRUFBRTtvQkFDUixPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTt3QkFDNUIsT0FBTzs0QkFDSCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJOzRCQUNwQixNQUFNLEVBQUUsdUJBQWUsQ0FBQyxNQUFNOzRCQUM5QixJQUFJOzRCQUNKLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7eUJBQ3JCLENBQUM7b0JBQ04sQ0FBQyxDQUFDLENBQUM7aUJBQ047YUFDSjtZQUFDLFdBQU0sR0FBRTtZQUVWLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQixDQUFDO0tBQUE7SUFDWSxjQUFjLENBQUMsUUFBZ0I7O1lBQ3hDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FDbkIsd0NBQXdDLFFBQVEsRUFBRSxFQUNsRCxrQkFBVSxDQUFDLE9BQU8sQ0FDckIsQ0FBQztRQUNOLENBQUM7S0FBQTtDQUNKO0FBOUJELDRDQThCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tIFwibm9kZS1mZXRjaFwiO1xyXG5pbXBvcnQgeyBSZXN1bHRTZXQgfSBmcm9tIFwiLi4vbW9kZWxzL3NlYXJjaC1yZXN1bHRcIjtcclxuaW1wb3J0IHsgTWVkaWFUeXBlcywgTWVkaWFTb3VyY2VUeXBlIH0gZnJvbSBcIi4uL21vZGVscy9lbnVtc1wiO1xyXG5leHBvcnQgY2xhc3MgVFZNYXplUmVwb3NpdG9yeSB7XHJcbiAgICBwcml2YXRlIGFzeW5jIHNlYXJjaE1lZGlhKFxyXG4gICAgICAgIHVyaTogc3RyaW5nLFxyXG4gICAgICAgIHR5cGU6IE1lZGlhVHlwZXNcclxuICAgICk6IFByb21pc2U8QXJyYXk8UmVzdWx0U2V0Pj4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKHVyaSwgeyBtZXRob2Q6IFwiR0VUXCIgfSkudGhlbihyZXMgPT5cclxuICAgICAgICAgICAgICAgIHJlcy5qc29uKClcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQubWFwKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBkYXRhLnNob3cubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBNZWRpYVNvdXJjZVR5cGUuVFZNYXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGRhdGEuc2hvdy51cmxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIHt9XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFzeW5jIHNlYXJjaEZvclNob3dzKGNyaXRlcmlhOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PFJlc3VsdFNldD4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hNZWRpYShcclxuICAgICAgICAgICAgYGh0dHA6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT0ke2NyaXRlcmlhfWAsXHJcbiAgICAgICAgICAgIE1lZGlhVHlwZXMuVFZfU0hPV1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl19