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
                            type
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXR1bmVzLWFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0dW5lcy1hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDREQUErQjtBQUUvQiwyQ0FBOEQ7QUFDOUQsTUFBYSxnQkFBZ0I7SUFDWCxXQUFXLENBQ3JCLEdBQVcsRUFDWCxJQUFnQjs7WUFFaEIsSUFBSTtnQkFDQSxNQUFNLE1BQU0sR0FBRyxNQUFNLG9CQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQzFELEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FDYixDQUFDO2dCQUVGLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtvQkFDaEIsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO3dCQUNwQyxPQUFPOzRCQUNILElBQUksRUFBRSxJQUFJLENBQUMsU0FBUzs0QkFDcEIsTUFBTSxFQUFFLHVCQUFlLENBQUMsTUFBTTs0QkFDOUIsSUFBSTt5QkFDUCxDQUFDO29CQUNOLENBQUMsQ0FBQyxDQUFDO2lCQUNOO2FBQ0o7WUFBQyxXQUFNLEdBQUU7WUFFVixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0IsQ0FBQztLQUFBO0lBQ1ksY0FBYyxDQUFDLFFBQWdCOztZQUN4QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQ25CLHlGQUF5RixRQUFRLEVBQUUsRUFDbkcsa0JBQVUsQ0FBQyxJQUFJLENBQ2xCLENBQUM7UUFDTixDQUFDO0tBQUE7SUFFWSxlQUFlLENBQUMsUUFBZ0I7O1lBQ3pDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FDbkIscUZBQXFGLFFBQVEsRUFBRSxFQUMvRixrQkFBVSxDQUFDLEtBQUssQ0FDbkIsQ0FBQztRQUNOLENBQUM7S0FBQTtDQUNKO0FBcENELDRDQW9DQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tIFwibm9kZS1mZXRjaFwiO1xyXG5pbXBvcnQgeyBSZXN1bHRTZXQgfSBmcm9tIFwiLi4vbW9kZWxzL3NlYXJjaC1yZXN1bHRcIjtcclxuaW1wb3J0IHsgTWVkaWFUeXBlcywgTWVkaWFTb3VyY2VUeXBlIH0gZnJvbSBcIi4uL21vZGVscy9lbnVtc1wiO1xyXG5leHBvcnQgY2xhc3MgSVR1bmVzUmVwb3NpdG9yeSB7XHJcbiAgICBwcml2YXRlIGFzeW5jIHNlYXJjaE1lZGlhKFxyXG4gICAgICAgIHVyaTogc3RyaW5nLFxyXG4gICAgICAgIHR5cGU6IE1lZGlhVHlwZXNcclxuICAgICk6IFByb21pc2U8QXJyYXk8UmVzdWx0U2V0Pj4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKHVyaSwgeyBtZXRob2Q6IFwiR0VUXCIgfSkudGhlbihyZXMgPT5cclxuICAgICAgICAgICAgICAgIHJlcy5qc29uKClcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQucmVzdWx0cykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5yZXN1bHRzLm1hcCgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZGF0YS50cmFja05hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogTWVkaWFTb3VyY2VUeXBlLklUdW5lcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2gge31cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYXN5bmMgc2VhcmNoRm9yU29uZ3MoY3JpdGVyaWE6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8UmVzdWx0U2V0Pj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaE1lZGlhKFxyXG4gICAgICAgICAgICBgaHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL3NlYXJjaD9tZWRpYT1tdXNpYyZlbnRpdHk9bXVzaWNUcmFjayZhdHRyaWJ1dGU9c29uZ1Rlcm0mdGVybT0ke2NyaXRlcmlhfWAsXHJcbiAgICAgICAgICAgIE1lZGlhVHlwZXMuU09OR1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHNlYXJjaEZvck1vdmllcyhjcml0ZXJpYTogc3RyaW5nKTogUHJvbWlzZTxBcnJheTxSZXN1bHRTZXQ+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoTWVkaWEoXHJcbiAgICAgICAgICAgIGBodHRwczovL2l0dW5lcy5hcHBsZS5jb20vc2VhcmNoP21lZGlhPW1vdmllJmVudGl0eT1tb3ZpZSZhdHRyaWJ1dGU9bW92aWVUZXJtJnRlcm09JHtjcml0ZXJpYX1gLFxyXG4gICAgICAgICAgICBNZWRpYVR5cGVzLk1PVklFXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXX0=