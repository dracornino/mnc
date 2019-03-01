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
class ITunesRepository {
    searchMedia(uri, type) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield node_fetch_1.default(uri, { method: "GET" }).then(res => res.json());
                if (result.results) {
                    return result.results.map((data) => {
                        return {
                            name: data.trackName,
                            source: enums_1.MediaSourceType.ITunes,
                            type,
                            url: data.trackViewUrl
                        };
                    });
                }
            }
            catch (_a) { }
            return Promise.resolve([]);
        });
    }
    searchForSongs(criteria) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.searchMedia(`https://itunes.apple.com/search?media=music&entity=musicTrack&attribute=songTerm&term=${criteria}`, enums_1.MediaTypes.SONG);
        });
    }
    searchForMovies(criteria) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.searchMedia(`https://itunes.apple.com/search?media=movie&entity=movie&attribute=movieTerm&term=${criteria}`, enums_1.MediaTypes.MOVIE);
        });
    }
}
exports.ITunesRepository = ITunesRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXR1bmVzLWFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0dW5lcy1hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDREQUErQjtBQUUvQiwyQ0FBOEQ7QUFDOUQsTUFBYSxnQkFBZ0I7SUFDWCxXQUFXLENBQ3JCLEdBQVcsRUFDWCxJQUFnQjs7WUFFaEIsSUFBSTtnQkFDQSxNQUFNLE1BQU0sR0FBRyxNQUFNLG9CQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQzFELEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FDYixDQUFDO2dCQUVGLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtvQkFDaEIsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO3dCQUNwQyxPQUFPOzRCQUNILElBQUksRUFBRSxJQUFJLENBQUMsU0FBUzs0QkFDcEIsTUFBTSxFQUFFLHVCQUFlLENBQUMsTUFBTTs0QkFDOUIsSUFBSTs0QkFDSixHQUFHLEVBQUUsSUFBSSxDQUFDLFlBQVk7eUJBQ3pCLENBQUM7b0JBQ04sQ0FBQyxDQUFDLENBQUM7aUJBQ047YUFDSjtZQUFDLFdBQU0sR0FBRTtZQUVWLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQixDQUFDO0tBQUE7SUFDWSxjQUFjLENBQUMsUUFBZ0I7O1lBQ3hDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FDbkIseUZBQXlGLFFBQVEsRUFBRSxFQUNuRyxrQkFBVSxDQUFDLElBQUksQ0FDbEIsQ0FBQztRQUNOLENBQUM7S0FBQTtJQUVZLGVBQWUsQ0FBQyxRQUFnQjs7WUFDekMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUNuQixxRkFBcUYsUUFBUSxFQUFFLEVBQy9GLGtCQUFVLENBQUMsS0FBSyxDQUNuQixDQUFDO1FBQ04sQ0FBQztLQUFBO0NBQ0o7QUFyQ0QsNENBcUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XHJcbmltcG9ydCB7IFJlc3VsdFNldCB9IGZyb20gXCIuLi9tb2RlbHMvc2VhcmNoLXJlc3VsdFwiO1xyXG5pbXBvcnQgeyBNZWRpYVR5cGVzLCBNZWRpYVNvdXJjZVR5cGUgfSBmcm9tIFwiLi4vbW9kZWxzL2VudW1zXCI7XHJcbmV4cG9ydCBjbGFzcyBJVHVuZXNSZXBvc2l0b3J5IHtcclxuICAgIHByaXZhdGUgYXN5bmMgc2VhcmNoTWVkaWEoXHJcbiAgICAgICAgdXJpOiBzdHJpbmcsXHJcbiAgICAgICAgdHlwZTogTWVkaWFUeXBlc1xyXG4gICAgKTogUHJvbWlzZTxBcnJheTxSZXN1bHRTZXQ+PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2godXJpLCB7IG1ldGhvZDogXCJHRVRcIiB9KS50aGVuKHJlcyA9PlxyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24oKVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5yZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnJlc3VsdHMubWFwKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBkYXRhLnRyYWNrTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBNZWRpYVNvdXJjZVR5cGUuSVR1bmVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGRhdGEudHJhY2tWaWV3VXJsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCB7fVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFtdKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhc3luYyBzZWFyY2hGb3JTb25ncyhjcml0ZXJpYTogc3RyaW5nKTogUHJvbWlzZTxBcnJheTxSZXN1bHRTZXQ+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoTWVkaWEoXHJcbiAgICAgICAgICAgIGBodHRwczovL2l0dW5lcy5hcHBsZS5jb20vc2VhcmNoP21lZGlhPW11c2ljJmVudGl0eT1tdXNpY1RyYWNrJmF0dHJpYnV0ZT1zb25nVGVybSZ0ZXJtPSR7Y3JpdGVyaWF9YCxcclxuICAgICAgICAgICAgTWVkaWFUeXBlcy5TT05HXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgc2VhcmNoRm9yTW92aWVzKGNyaXRlcmlhOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PFJlc3VsdFNldD4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hNZWRpYShcclxuICAgICAgICAgICAgYGh0dHBzOi8vaXR1bmVzLmFwcGxlLmNvbS9zZWFyY2g/bWVkaWE9bW92aWUmZW50aXR5PW1vdmllJmF0dHJpYnV0ZT1tb3ZpZVRlcm0mdGVybT0ke2NyaXRlcmlhfWAsXHJcbiAgICAgICAgICAgIE1lZGlhVHlwZXMuTU9WSUVcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==